import { useState, useMemo } from "react";
import MovieCard from "../components/MovieCard.jsx";
import MovieCardSkeleton from "../components/MovieCardSkeleton.jsx";
import FilterBar from "../components/FilterBar.jsx";
import MovieDetailModal from "../components/MovieDetailModal.jsx";
import EmptyState from "../components/EmptyState.jsx";
import { MOCK_MOVIES, GENRES_LIST } from "../data/mockMovies.js";
import { Clapperboard, Heart } from "lucide-react";

/**
 * MovieList Page Component
 * -------------------------------------------------------------
 * Dedicated page for browsing movies with filter options and favorites view.
 */
function MovieList() {
  const [movies] = useState(MOCK_MOVIES);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [favorites, setFavorites] = useState([1, 2]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const handleFavoriteToggle = (movie) => {
    setFavorites((prev) =>
      prev.includes(movie.id)
        ? prev.filter((id) => id !== movie.id)
        : [...prev, movie.id]
    );
  };

  const filteredMovies = useMemo(() => {
    let result = [...movies];

    if (showOnlyFavorites) {
      result = result.filter((m) => favorites.includes(m.id));
    }

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        (m) =>
          (m.title && m.title.toLowerCase().includes(q)) ||
          (m.overview && m.overview.toLowerCase().includes(q))
      );
    }

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

    result.sort((a, b) => {
      if (sortBy === "rating-desc") return (b.vote_average || 0) - (a.vote_average || 0);
      if (sortBy === "rating-asc") return (a.vote_average || 0) - (b.vote_average || 0);
      if (sortBy === "year-desc") return (b.year || 0) - (a.year || 0);
      if (sortBy === "year-asc") return (a.year || 0) - (b.year || 0);
      if (sortBy === "title-asc") return (a.title || "").localeCompare(b.title || "");
      return (b.vote_count || b.id) - (a.vote_count || a.id);
    });

    return result;
  }, [movies, searchTerm, selectedGenre, sortBy, showOnlyFavorites, favorites]);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Title & View Switcher */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Clapperboard className="h-4 w-4" />
              <span>Catalog Index</span>
            </div>
            <h1 className="text-3xl font-extrabold text-white">
              {showOnlyFavorites ? "Your Favorite Movies" : "Complete Movie Library"}
            </h1>
          </div>

          {/* Toggle between All vs Favorites */}
          <div className="inline-flex rounded-xl bg-slate-900 border border-slate-800 p-1">
            <button
              onClick={() => setShowOnlyFavorites(false)}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                !showOnlyFavorites
                  ? "bg-cyan-500 text-slate-950 shadow-md font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All Movies ({movies.length})
            </button>
            <button
              onClick={() => setShowOnlyFavorites(true)}
              className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                showOnlyFavorites
                  ? "bg-rose-600 text-white shadow-md font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Heart className="h-3.5 w-3.5 fill-current" />
              Favorites ({favorites.length})
            </button>
          </div>
        </div>

        {/* Filters */}
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

        {/* Movie Cards */}
        {filteredMovies.length > 0 ? (
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
          <EmptyState
            title={showOnlyFavorites ? "No Favorite Movies Yet" : "No Movies Found"}
            description={
              showOnlyFavorites
                ? "You haven't marked any movies as favorites. Click the heart icon on any movie card to add it to your watchlist!"
                : "No movies matched your filter criteria."
            }
            actionLabel={showOnlyFavorites ? "View All Movies" : "Reset Filters"}
            onAction={() => {
              setShowOnlyFavorites(false);
              setSearchTerm("");
              setSelectedGenre("All");
            }}
          />
        )}
      </div>

      {/* Modal */}
      <MovieDetailModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
        isFavorite={selectedMovie ? favorites.includes(selectedMovie.id) : false}
        onFavoriteToggle={handleFavoriteToggle}
      />
    </div>
  );
}

export default MovieList;
