/* Magic Music Box — service worker
   - Network-first for the site's own files, so new songs / updates always appear when online.
   - Falls back to the last good copy if offline, so the app still opens.
   - Audio (.mp3) and byte-range requests are NOT intercepted: iOS/Safari need real
     range responses to play audio, so songs always go straight to the network. */

const CACHE = 'mmb-shell-v1';
const SHELL = [
  './',
  './index.html',
  './data.js',
  './manifest.json',
  './favicon.svg',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      Promise.all(SHELL.map((url) => cache.add(url).catch(() => {})))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;                    // fonts etc. — leave alone
  if (url.pathname.endsWith('.mp3') || req.headers.has('range')) return; // audio — leave alone

  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy));
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
