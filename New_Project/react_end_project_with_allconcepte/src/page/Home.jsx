import { useState, useMemo } from "react";
import HeroBanner from "../components/HeroBanner.jsx";
import MovieCard from "../components/MovieCard.jsx";
import MovieCardSkeleton from "../components/MovieCardSkeleton.jsx";
import FilterBar from "../components/FilterBar.jsx";
import MovieDetailModal from "../components/MovieDetailModal.jsx";
import EmptyState from "../components/EmptyState.jsx";
import { MOCK_MOVIES, GENRES_LIST } from "../data/mockMovies.js";
import { Sparkles, Flame, Film } from "lucide-react";

/**
 * Home Page Component
 * -------------------------------------------------------------------------
 * This is your primary Movie Hub UI.
 *
 * 💡 HOW TO PLUG IN YOUR AXIOS & CONTEXT API:
 *
 * 1) AXIOS DATA FETCHING:
 *    Instead of relying only on `MOCK_MOVIES`, fetch live data inside a useEffect:
 *    ```javascript
 *    useEffect(() => {
 *      const fetchMovies = async () => {
 *        try {
 *          setLoading(true);
 *          const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=YOUR_KEY");
 *          setMovies(response.data.results);
 *        } catch (err) {
 *          setError(err.message);
 *        } finally {
 *          setLoading(false);
 *        }
 *      };
 *      fetchMovies();
 *    }, []);
 *    ```
 *
 * 2) CONTEXT API:
 *    If you create a `MovieContext.jsx`, you can import and consume it right here:
 *    ```javascript
 *    const { movies, favorites, toggleFavorite, loading } = useMovieContext();
 *    ```
 */
function Home({
  // Optional props if you prefer passing state from a parent or context wrapper
  externalMovies,
  externalFavorites,
  onToggleFavorite,
  isLoading = false,
}) {
  // Local state fallbacks (works out-of-the-box with mock data)
  const [movies, setMovies] = useState(externalMovies || MOCK_MOVIES);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [favorites, setFavorites] = useState(externalFavorites || [1, 2]); // Sample favorited IDs
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(isLoading);

  // Featured spotlight movie (first featured movie or first item)
  const featuredMovie = useMemo(() => {
    return movies.find((m) => m.featured) || movies[0];
  }, [movies]);

  // Handle favorite toggle (plug into your Context API or keep local)
  const handleFavoriteToggle = (movie) => {
    if (onToggleFavorite) {
      onToggleFavorite(movie);
      return;
    }
    setFavorites((prev) =>
      prev.includes(movie.id)
        ? prev.filter((id) => id !== movie.id)
        : [...prev, movie.id]
    );
  };

  // Filter and sort logic for UI display
  const filteredMovies = useMemo(() => {
    let result = [...movies];

    // 1. Search filter
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        (m) =>
          (m.title && m.title.toLowerCase().includes(q)) ||
          (m.overview && m.overview.toLowerCase().includes(q)) ||
          (m.director && m.director.toLowerCase().includes(q))
      );
    }

    // 2. Genre filter
    if (selectedGenre !== "All") {
      result = result.filter((m) => {
        if (!m.genres) return false;
        return m.genres.some((g) =>
          (typeof g === "string" ? g : g.name)
            .toLowerCase()
            .includes(selectedGenre.toLowerCase())
        );
      });
    }

    // 3. Sort ordering
    result.sort((a, b) => {
      if (sortBy === "rating-desc") {
        return (b.vote_average || 0) - (a.vote_average || 0);
      }
      if (sortBy === "rating-asc") {
        return (a.vote_average || 0) - (b.vote_average || 0);
      }
      if (sortBy === "year-desc") {
        return (b.year || 0) - (a.year || 0);
      }
      if (sortBy === "year-asc") {
        return (a.year || 0) - (b.year || 0);
      }
      if (sortBy === "title-asc") {
        return (a.title || "").localeCompare(b.title || "");
      }
      // default: popular (by vote_count or id)
      return (b.vote_count || b.id) - (a.vote_count || a.id);
    });

    return result;
  }, [movies, searchTerm, selectedGenre, sortBy]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedGenre("All");
    setSortBy("popular");
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
        {/* Spotlight Hero Banner */}
        <HeroBanner
          featuredMovie={featuredMovie}
          onSelectMovie={setSelectedMovie}
          onFavoriteToggle={handleFavoriteToggle}
          isFavorite={featuredMovie ? favorites.includes(featuredMovie.id) : false}
        />

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Flame className="h-4 w-4" />
              <span>Explore Collection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Trending & Popular Titles
            </h2>
          </div>

          {/* Quick Demo Toggle for Skeleton Loading State */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLoading(!loading)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 border border-slate-700/80 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:border-cyan-500/50 transition-colors"
              title="Toggle to preview your UI skeleton loading state"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>{loading ? "Show Loaded View" : "Preview Skeleton"}</span>
            </button>
          </div>
        </div>

        {/* Search, Filter & Sort Controls */}
        <FilterBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedGenre={selectedGenre}
          onGenreSelect={setSelectedGenre}
          genres={GENRES_LIST}
          sortBy={sortBy}
          onSortChange={setSortBy}
          totalCount={filteredMovies.length}
        />

        {/* Movies Grid */}
        {loading ? (
          /* Loading Skeletons */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <MovieCardSkeleton key={i} />
            ))}
          </div>
        ) : filteredMovies.length > 0 ? (
          /* Real/Mock Movie Cards */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isFavorite={favorites.includes(movie.id)}
                onFavoriteToggle={handleFavoriteToggle}
                onSelectMovie={setSelectedMovie}
              />
            ))}
          </div>
        ) : (
          /* Empty / No Results State */
          <EmptyState
            title="No Matching Movies Found"
            description={
              searchTerm
                ? `No movies matched your search for "${searchTerm}". Try checking for spelling or clear active filters.`
                : "No movies available in this category."
            }
            actionLabel="Reset All Filters"
            onAction={resetFilters}
          />
        )}
      </div>

      {/* Movie Details Modal Drawer */}
      <MovieDetailModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
        isFavorite={selectedMovie ? favorites.includes(selectedMovie.id) : false}
        onFavoriteToggle={handleFavoriteToggle}
      />
    </div>
  );
}

export default Home;
