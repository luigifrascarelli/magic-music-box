/* ============================================================
   MAGIC MUSIC BOX — SONG DATA
   This is the only file you should need to touch to add or
   edit songs. index.html reads everything from here.
   ============================================================ */

// Colors used for each mood's pill/glow. Add a new mood here
// (with a hex color) if you ever want one beyond these.
const MOOD_COLORS = {
  "Silly & Giggles": "#ff2fd6",
  "Calm & Quiet": "#33d9ff",
  "Movement & Dance": "#b967ff",
  "Letters & Counting": "#ff6ec7",
  "Lullaby": "#6f7bff",
  "Sing-Along": "#d633ff",
  "Educational": "#3f8fff"
};

// Tabs shown at the top of the page. "all" is required —
// the rest can be reordered, renamed, or added to freely.
// `key` must match the strings used in each song's `category` array below.
const CATEGORIES = [
  { key: "all", label: "All Songs" },
  { key: "letters", label: "Letters & Counting" },
  { key: "movement", label: "Movement & Dance" },
  { key: "silly", label: "Silly & Giggles" }
];

// One object per song. Field guide:
//   dur        "M:SS" shown on the card, e.g. "2:14"
//   sortDur    same length, zero-padded, no colon — "0214" — used for sorting
//   name       song title
//   url        path to the mp3 in /songs (filename must match exactly, case-sensitive)
//   performer  shown as "Created by:" — usually "DJ Circle Time ft. Pre-K Orange"
//   notes      one-line description (keep it short, it's italic on the card)
//   mood       array of 1–2 values from MOOD_COLORS above
//   occasion   free-text label for "Find songs for…" (e.g. "Naptime", "Circle Time")
//   category   array of CATEGORIES keys this song should appear under (can be empty)
const SONGS = [
  { dur: "1:38", sortDur: "0138", name: "T is a Happy Letter", url: "songs/t-is-a-happy-letter.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "A cheerful song celebrating the letter T.", mood: ["Letters & Counting", "Silly & Giggles"], occasion: "Circle Time", category: ["letters", "silly"] },
  { dur: "3:36", sortDur: "0336", name: "Tiny Turtle", url: "songs/tiny-turtle.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "A cheerful song about turtles.", mood: ["Silly & Giggles"], occasion: "Circle Time", category: ["silly"] },
  { dur: "2:06", sortDur: "0206", name: "Fun with F", url: "songs/fun-with-f.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "A playful song celebrating the letter F.", mood: ["Letters & Counting", "Silly & Giggles"], occasion: "Circle Time", category: ["letters", "silly"] },
  { dur: "3:03", sortDur: "0303", name: "Once Upon a Time", url: "songs/once-upon-a-time.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "A storytelling song to kick off story time.", mood: ["Sing-Along", "Educational"], occasion: "Story Time", category: [] },
  { dur: "3:01", sortDur: "0301", name: "Stop, Drop, and Roll", url: "songs/stop-drop-roll.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "A fire-safety song that gets everyone moving.", mood: ["Sing-Along", "Movement & Dance"], occasion: "Circle Time", category: ["movement"] },
  { dur: "2:16", sortDur: "0216", name: "Weekend Time", url: "songs/weekend-time.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "A wind-down song for the end of the school week.", mood: ["Sing-Along", "Movement & Dance"], occasion: "Circle Time", category: ["movement"] }
];