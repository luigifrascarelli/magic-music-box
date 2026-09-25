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
  { key: "movement", label: "Movement" },
  { key: "silly", label: "Silly & Giggles" },
  { key: "educational", label: "Educational" }
];

// One object per song. Field guide:
//   dur        "M:SS" shown on the card, e.g. "2:14"
//   sortDur    same length, zero-padded, no colon — "0214" — used for sorting
//   name       song title
//   url        path to the mp3 in /songs (filename must match exactly, case-sensitive)
//   performer  shown as "Created by:" — usually "DJ Circle Time ft. Pre-K Orange"
//   notes      one-line description (keep it short, it's italic on the card)
//   mood       array of 1–2 values from MOOD_COLORS above
//   occasion   free-text label shown as a chip on the card (leave "" to show no chip)
//   category   array of CATEGORIES keys this song should appear under (can be empty)
//   bonus      optional — set to true for a song that should ONLY appear in Bonus Tracks
//              (hidden from the main Library, Jukebox, and Playlist Builder's default view —
//              still selectable in the Builder via its "Bonus Tracks" filter tab). Omit for normal songs.
//   collection optional — groups bonus songs into a named set (e.g. "Halloween"). Not filtered
//              on anywhere yet, but ready for when a second bonus collection is added.
const SONGS = [
{ dur: "1:38", sortDur: "0138", name: "T is a Happy Letter", url: "songs/t-is-a-happy-letter.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "A cheerful song celebrating the letter T.", mood: ["Letters & Counting", "Silly & Giggles"], occasion: "", category: ["letters", "silly"] },
{ dur: "3:36", sortDur: "0336", name: "Tiny Turtle", url: "songs/tiny-turtle.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "A cheerful song about turtles.", mood: ["Silly & Giggles"], occasion: "", category: ["silly"] },
{ dur: "2:06", sortDur: "0206", name: "Fun with F", url: "songs/fun-with-f.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "A playful song celebrating the letter F.", mood: ["Letters & Counting", "Silly & Giggles"], occasion: "", category: ["letters", "silly"] },
{ dur: "3:03", sortDur: "0303", name: "Once Upon a Time", url: "songs/once-upon-a-time.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "A storytelling song to kick off story time.", mood: ["Sing-Along", "Educational"], occasion: "", category: ["educational"] },
{ dur: "3:01", sortDur: "0301", name: "Stop, Drop, and Roll", url: "songs/stop-drop-roll.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "A fire-safety song that gets everyone moving.", mood: ["Sing-Along", "Movement & Dance"], occasion: "", category: ["movement"] },
{ dur: "2:16", sortDur: "0216", name: "Weekend Time", url: "songs/weekend-time.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "A wind-down song for the end of the school week.", mood: ["Sing-Along", "Movement & Dance"], occasion: "", category: ["movement"] },
{ dur: "2:11", sortDur: "0211", name: "Nocturnals", url: "songs/nocturnals.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "A gentle song about animals that come out at night.", mood: ["Educational"], occasion: "", category: ["educational"] },
{ dur: "3:14", sortDur: "0314", name: "N is for N", url: "songs/n-is-for-n.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "A playful song celebrating the letter N.", mood: ["Letters & Counting", "Silly & Giggles"], occasion: "", category: ["letters", "silly"] },
{ dur: "2:31", sortDur: "0231", name: "Boogie Woogie Boo Bash", url: "songs/boogie-woogie-boo-bash.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "A silly monster dance song.", mood: ["Silly & Giggles", "Movement & Dance"], occasion: "", category: [], bonus: true, collection: "Halloween" },
{ dur: "2:47", sortDur: "0247", name: "Dance Like a Skeleton", url: "songs/dance-like-a-skeleton.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "A dance-along song — can you dance like a skeleton?", mood: ["Movement & Dance", "Silly & Giggles"], occasion: "", category: [], bonus: true, collection: "Halloween" },
{ dur: "3:02", sortDur: "0302", name: "Glow Halloween Party", url: "songs/glow-halloween-party.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "A glow-in-the-dark Halloween dance party for preschoolers.", mood: ["Movement & Dance", "Silly & Giggles"], occasion: "", category: [], bonus: true, collection: "Halloween" },
{ dur: "2:30", sortDur: "0230", name: "My Pet Rock", url: "songs/my-pet-rock.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "A song about having a pet rock.", mood: ["Silly & Giggles"], occasion: "", category: ["silly"] },
{ dur: "2:47", sortDur: "0247", name: "Pet Parade", url: "songs/pet-parade.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "Learning about different pets and what they like.", mood: ["Educational"], occasion: "", category: ["educational"] },
{ dur: "2:31", sortDur: "0231", name: "Stormy the Gecko", url: "songs/stormy-the-gecko.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "A song about our leopard gecko friend named Stormy.", mood: ["Silly & Giggles"], occasion: "", category: ["silly"] },
{ dur: "2:06", sortDur: "0206", name: "The Letter P", url: "songs/the-letter-p.mp3", performer: "DJ Circle Time ft. Pre-K Orange", notes: "A song about the letter P.", mood: ["Silly & Giggles", "Educational"], occasion: "", category: ["silly", "educational"] }
];