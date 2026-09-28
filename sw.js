/* Magic Music Box — service worker
   - App shell: network-first, falls back to cache when offline, so the app
     always opens and picks up new songs/updates as soon as you're online.
   - Songs (.mp3): cache-first, and stored WHOLE regardless of how they were
     requested. Audio elements (especially iOS Safari) request songs in byte
     ranges ("bytes=0-1", "bytes=200000-"), and the Cache API has no built-in
     way to serve a slice of a cached file — so when a ranged request comes in,
     we pull the full cached file and manually carve out the requested bytes
     with a real 206 Partial Content response. First play of a song (while
     online) caches it for every future play, online or off. */

const SHELL_CACHE = 'mmb-shell-v3';
const SONG_CACHE = 'mmb-songs-v1';

const SHELL = [
  './',
  './index.html',
  './data.js',
  './manifest.json',
  './favicon.svg',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './artwork-192.png',
  './artwork-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) =>
      Promise.all(SHELL.map((url) => cache.add(url).catch(() => {})))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== SHELL_CACHE && k !== SONG_CACHE).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // fonts etc. — leave alone

  if (url.pathname.endsWith('.mp3')) {
    event.respondWith(handleSongRequest(req, url));
    return;
  }

  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(SHELL_CACHE).then((cache) => cache.put(req, copy));
        }
        return res;
      })
      .catch(() =>
        caches.match(req)
          .then((cached) => cached || (req.mode === 'navigate' ? caches.match('./index.html') : null))
          .then((cached) => cached || Response.error())
      )
  );
});

async function handleSongRequest(req, url) {
  const key = url.pathname; // cache songs by path only — sidesteps any Range/Vary ambiguity
  const cache = await caches.open(SONG_CACHE);
  const rangeHeader = req.headers.get('range');

  const cached = await cache.match(key);
  if (cached) {
    return rangeHeader ? serveRangedFromCache(cached, rangeHeader) : cached.clone();
  }

  // Not cached yet.
  if (rangeHeader) {
    // Can't slice a file we don't have — serve this one request from the network,
    // and separately fetch+cache the whole file in the background for next time.
    cacheFullSong(key, cache);
    try { return await fetch(req); } catch (e) { return new Response(null, { status: 504 }); }
  }

  // Plain GET, not yet cached: fetch the whole file, cache it, return it.
  try {
    const res = await fetch(req);
    if (res && res.ok) cache.put(key, res.clone());
    return res;
  } catch (e) {
    return new Response(null, { status: 504 });
  }
}

async function cacheFullSong(key, cache) {
  try {
    const res = await fetch(key);
    if (res && res.ok) await cache.put(key, res.clone());
  } catch (e) { /* offline / failed — nothing to do */ }
}

function parseRange(rangeHeader, size) {
  const match = /bytes=(\d*)-(\d*)/.exec(rangeHeader || '');
  if (!match) return null;
  let start = match[1] ? parseInt(match[1], 10) : undefined;
  let end = match[2] ? parseInt(match[2], 10) : undefined;
  if (start === undefined && end === undefined) return null;
  if (start === undefined) {          // suffix range: "bytes=-500" = last 500 bytes
    start = Math.max(size - end, 0);
    end = size - 1;
  } else if (end === undefined || end >= size) {
    end = size - 1;
  }
  if (start > end || start >= size || start < 0) return null;
  return { start, end };
}

async function serveRangedFromCache(cachedResponse, rangeHeader) {
  const buffer = await cachedResponse.arrayBuffer();
  const size = buffer.byteLength;
  const range = parseRange(rangeHeader, size);
  if (!range) {
    return new Response(null, { status: 416, statusText: 'Range Not Satisfiable', headers: { 'Content-Range': `bytes */${size}` } });
  }
  const { start, end } = range;
  const sliced = buffer.slice(start, end + 1);
  const headers = new Headers();
  headers.set('Content-Type', cachedResponse.headers.get('Content-Type') || 'audio/mpeg');
  headers.set('Content-Range', `bytes ${start}-${end}/${size}`);
  headers.set('Content-Length', String(sliced.byteLength));
  headers.set('Accept-Ranges', 'bytes');
  return new Response(sliced, { status: 206, statusText: 'Partial Content', headers });
}