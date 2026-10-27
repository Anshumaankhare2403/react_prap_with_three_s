/**
 * Sample Mock Movie Data
 * -------------------------------------------------------------
 * This data format matches common Movie APIs (like TMDB and OMDb).
 * When you connect Axios, simply replace this dataset with your API response:
 * e.g., axios.get('https://api.themoviedb.org/3/movie/popular?...')
 */

export const MOCK_MOVIES = [
  {
    id: 1,
    title: "Interstellar",
    tagline: "Mankind was born on Earth. It was never meant to die here.",
    release_date: "2014-11-07",
    year: "2014",
    vote_average: 8.7,
    vote_count: 34500,
    genres: ["Sci-Fi", "Adventure", "Drama"],
    runtime: "169 min",
    director: "Christopher Nolan",
    overview:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    poster:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "The Dark Knight",
    tagline: "Why so serious?",
    release_date: "2008-07-18",
    year: "2008",
    vote_average: 9.0,
    vote_count: 29000,
    genres: ["Action", "Crime", "Drama"],
    runtime: "152 min",
    director: "Christopher Nolan",
    overview:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "Cyber Odyssey: 2099",
    tagline: "In a world of neon shadows, humanity searches for its soul.",
    release_date: "2024-03-15",
    year: "2024",
    vote_average: 8.4,
    vote_count: 12400,
    genres: ["Sci-Fi", "Action", "Cyberpunk"],
    runtime: "140 min",
    director: "Elena Rostova",
    overview:
      "A rogue cybernetic investigator uncovers an underground AI consortium altering memories of elite citizens in the sprawling metropolis of Neo-Shinjuku.",
    poster:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1515260268569-9271009adfdb?auto=format&fit=crop&w=1600&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Guardians of the Cosmos",
    tagline: "The universe has no heroes. Only survivors with bad attitudes.",
    release_date: "2023-08-22",
    year: "2023",
    vote_average: 7.9,
    vote_count: 18200,
    genres: ["Adventure", "Comedy", "Sci-Fi"],
    runtime: "135 min",
    director: "Marcus Vance",
    overview:
      "A band of galactic outlaws must pull off an impossible heist across deep nebula territories to prevent a planet-destroying quantum crystal from falling into pirate hands.",
    poster:
      "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=800&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "Shadows in the Mist",
    tagline: "Some secrets refuse to stay buried.",
    release_date: "2023-11-10",
    year: "2023",
    vote_average: 7.6,
    vote_count: 9800,
    genres: ["Mystery", "Thriller", "Drama"],
    runtime: "118 min",
    director: "Sarah Jenkins",
    overview:
      "A forensic detective retreats to a remote Nordic coastal village only to find a cold case from thirty years ago reignited by an anonymous parcel left on her doorstep.",
    poster:
      "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=800&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
    featured: false,
  },
  {
    id: 6,
    title: "Chrono Shift",
    tagline: "Every second counts twice.",
    release_date: "2024-01-20",
    year: "2024",
    vote_average: 8.1,
    vote_count: 15300,
    genres: ["Sci-Fi", "Thriller"],
    runtime: "128 min",
    director: "David K. Hughes",
    overview:
      "A quantum physicist accidentally traps herself in an 11-minute temporal loop while testing a particle accelerator, discovering each cycle deteriorates reality itself.",
    poster:
      "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=800&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=1600&q=80",
    featured: false,
  },
  {
    id: 7,
    title: "The Last Samurai of Neo-Kyoto",
    tagline: "Honor never rusts.",
    release_date: "2022-12-05",
    year: "2022",
    vote_average: 8.5,
    vote_count: 22100,
    genres: ["Action", "Drama"],
    runtime: "145 min",
    director: "Kenji Takahashi",
    overview:
      "In a neon-drenched metropolis controlled by megacorporations, an aging swordsman emerges from exile to protect an orphaned girl carrying the code to restore freedom.",
    poster:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80",
    featured: false,
  },
  {
    id: 8,
    title: "Echoes of the Deep",
    tagline: "Beneath seven miles of water, something is waking up.",
    release_date: "2023-06-30",
    year: "2023",
    vote_average: 7.3,
    vote_count: 8700,
    genres: ["Horror", "Sci-Fi", "Mystery"],
    runtime: "112 min",
    director: "Rachel Meyer",
    overview:
      "An oceanographic research station situated in the Mariana Trench detects rhythmic biological sound pulses vibrating from an uncharted tectonic abyss.",
    poster:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
    featured: false,
  },
];

export const GENRES_LIST = [
  "All",
  "Action",
  "Adventure",
  "Sci-Fi",
  "Drama",
  "Crime",
  "Thriller",
  "Mystery",
  "Comedy",
  "Horror",
];
