import coverImage from "../assests/hero_headphones.png";

const genres = [
  { key: "ambient", label: "Ambient" },
  { key: "electronic", label: "Electronic" },
  { key: "indie", label: "Indie" },
];

const createSong = (id, title, likes, genre, artists) => ({
  id,
  title,
  likes,
  genre: genres.find((item) => item.key === genre),
  artists,
  image: coverImage,
});

const topAlbums = [
  {
    id: "demo-album-1",
    slug: "quiet-orbits",
    title: "Quiet Orbits",
    description: "Soft electronic soundscapes for late-night listening.",
    follows: 1840,
    image: coverImage,
    songs: [
      createSong("demo-song-1", "Satellite Garden", 842, "ambient", ["Mira Vale"]),
      createSong("demo-song-2", "Slow Constellation", 617, "electronic", ["Mira Vale"]),
    ],
  },
  {
    id: "demo-album-2",
    slug: "paper-moons",
    title: "Paper Moons",
    description: "Warm, original indie songs about starting over.",
    follows: 1260,
    image: coverImage,
    songs: [
      createSong("demo-song-3", "Small Hours", 530, "indie", ["North Arcade"]),
      createSong("demo-song-4", "Window Lights", 391, "indie", ["North Arcade"]),
    ],
  },
];

const newAlbums = [
  {
    id: "demo-album-3",
    slug: "blue-hour",
    title: "Blue Hour",
    description: "A calm collection made for the end of the day.",
    follows: 920,
    image: coverImage,
    songs: [
      createSong("demo-song-5", "Blue Hour", 288, "ambient", ["June Harbor"]),
      createSong("demo-song-6", "After the Rain", 204, "electronic", ["June Harbor"]),
    ],
  },
  {
    id: "demo-album-4",
    slug: "soft-focus",
    title: "Soft Focus",
    description: "Bright guitar melodies and gentle rhythms.",
    follows: 740,
    image: coverImage,
    songs: [
      createSong("demo-song-7", "Almost Summer", 173, "indie", ["The Sundials"]),
      createSong("demo-song-8", "Open Window", 149, "indie", ["The Sundials"]),
    ],
  },
];

const songs = [...topAlbums, ...newAlbums].flatMap((album) => album.songs);

const fallbackData = { topAlbums, newAlbums, songs, genres };

export default fallbackData;
