# Magic Music Box

Song directory for our classroom — songs written from lesson plan content, generated with Suno AI.

## Files

- `index.html` — the site itself (layout, styling, filtering logic). You shouldn't need to touch this to add songs.
- `data.js` — every song's title, mood, category, and file path. **This is the file you'll edit most.**
- `songs/` — the actual mp3 files.

## Adding a new song

1. Export the track from Suno and save it into `songs/`.
2. Rename the file to a short slug, e.g. `bubble-bath-blues.mp3` (lowercase, hyphens, no spaces).
3. Open `data.js` and copy one of the existing song entries, then edit the fields (see the field guide comment at the top of the file).
4. Save, preview with Live Server, then commit and push.

## Local preview

Open the project folder in VS Code, right-click `index.html`, choose **Open with Live Server**. Opening the file directly (double-click / `file://`) will *not* work correctly for the audio players.

## Deploy

Push to `main` on GitHub — Netlify redeploys automatically.
