/* ============================================================
   MAGIC MUSIC BOX — SONG DATA
   This is the only file you should need to touch to add or
   edit songs. index.html reads everything from here.
   ============================================================ */

// Colors used for each mood's pill/glow. Add a new mood here
// (with a hex color) if you ever want one beyond these five.
const MOOD_COLORS = {
  "Silly & Giggles": "#ff2fd6",
  "Calm & Quiet": "#33d9ff",
  "Movement & Dance": "#b967ff",
  "Letters & Counting": "#ff6ec7",
  "Lullaby": "#6f7bff"
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
  { dur: "2:14", sortDur: "0214", name: "The Cleanup Shuffle", url: "songs/cleanup-shuffle.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "An upbeat toy-tidying anthem — great for transition time.", mood: ["Silly & Giggles", "Movement & Dance"], occasion: "Circle Time", category: ["silly", "movement"] },
  { dur: "1:48", sortDur: "0148", name: "Slow Down, Sloth", url: "songs/slow-down-sloth.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "A gentle wind-down song for the end of a big day.", mood: ["Calm & Quiet", "Lullaby"], occasion: "Naptime", category: [] },
  { dur: "2:35", sortDur: "0235", name: "Five Little Ducklings", url: "songs/five-little-ducklings.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "Counting song with call-and-response — kids love shouting the numbers.", mood: ["Letters & Counting", "Silly & Giggles"], occasion: "Circle Time", category: ["letters", "silly"] },
  { dur: "1:32", sortDur: "0132", name: "Stomp Like a Dinosaur", url: "songs/stomp-like-a-dinosaur.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "Big movement song — clear the rug first!", mood: ["Movement & Dance", "Silly & Giggles"], occasion: "Movement Break", category: ["movement", "silly"] },
  { dur: "2:02", sortDur: "0202", name: "The Alphabet Train", url: "songs/alphabet-train.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "Each letter gets its own train-whistle sound effect.", mood: ["Letters & Counting"], occasion: "Circle Time", category: ["letters"] },
  { dur: "3:10", sortDur: "0310", name: "Goodnight, Little Bear", url: "songs/goodnight-little-bear.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "Our end-of-day lullaby, sung every afternoon before pickup.", mood: ["Lullaby", "Calm & Quiet"], occasion: "Naptime", category: [] },
  { dur: "1:55", sortDur: "0155", name: "Wiggle It Out", url: "songs/wiggle-it-out.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "Full-body wiggle song for right after snack time.", mood: ["Movement & Dance", "Silly & Giggles"], occasion: "Movement Break", category: ["movement", "silly"] },
  { dur: "2:20", sortDur: "0220", name: "Rainy Day Raincoat", url: "songs/rainy-day-raincoat.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "A soft, rainy-afternoon song for indoor recess days.", mood: ["Calm & Quiet"], occasion: "Rainy Days", category: [] },
  { dur: "1:40", sortDur: "0140", name: "Shape Detective", url: "songs/shape-detective.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "Kids call out shapes they spot around the room.", mood: ["Letters & Counting", "Silly & Giggles"], occasion: "Circle Time", category: ["letters", "silly"] }
];
