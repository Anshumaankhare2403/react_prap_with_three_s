import { useState } from "react";
import { Star, Heart, Info, Calendar, Clock } from "lucide-react";

/**
 * MovieCard Component
 * ------------------------------------------------------------------
 * @param {Object} props
 * @param {Object} props.movie - Movie data object (id, title, poster, vote_average, etc.)
 * @param {Function} [props.onSelectMovie] - Callback when clicking the card / "Quick View"
 * @param {Function} [props.onFavoriteToggle] - Callback when toggling favorite
 * @param {boolean} [props.isFavorite] - Whether movie is in favorites
 */
function MovieCard({
  movie = {},
  onSelectMovie,
  onFavoriteToggle,
  isFavorite = false,
}) {
  const [imageError, setImageError] = useState(false);

  // Normalize data for multiple common API formats (TMDB vs OMDb vs custom)
  const title = movie.title || movie.Title || "Untitled Movie";
  const year =
    movie.year ||
    (movie.release_date ? movie.release_date.split("-")[0] : null) ||
    movie.Year ||
    "N/A";
  const rating =
    movie.vote_average !== undefined
      ? Number(movie.vote_average).toFixed(1)
      : movie.imdbRating || null;
  const posterUrl =
    movie.poster ||
    (movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null) ||
    movie.Poster;
  const genres = movie.genres || (movie.Genre ? movie.Genre.split(", ") : []);

  // Rating color helper
  const getRatingBadgeColor = (val) => {
    const num = Number(val);
    if (num >= 8.0) return "bg-emerald-500/90 text-white";
    if (num >= 6.5) return "bg-amber-500/90 text-white";
    return "bg-rose-500/90 text-white";
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (onFavoriteToggle) {
      onFavoriteToggle(movie);
    }
  };

  return (
    <div
      onClick={() => onSelectMovie && onSelectMovie(movie)}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#0f172a] border border-slate-800/80 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer"
    >
      {/* Poster Image Container */}
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-slate-900">
        {!imageError && posterUrl ? (
          <img
            src={posterUrl}
            alt={title}
            onError={() => setImageError(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center text-slate-500">
            <span className="text-4xl mb-2">🎬</span>
            <span className="text-xs font-medium text-slate-400">{title}</span>
            <span className="text-[10px] text-slate-600 mt-1">No Poster Available</span>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Top Floating Badges */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
          {/* Favorite Heart Button */}
          <button
            type="button"
            onClick={handleFavoriteClick}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            className={`flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md transition-all duration-200 ${
              isFavorite
                ? "bg-rose-600 text-white shadow-md shadow-rose-600/40 scale-105"
                : "bg-slate-900/70 text-slate-300 hover:bg-slate-900 hover:text-rose-400"
            }`}
          >
            <Heart
              className={`h-4 w-4 transition-transform ${isFavorite ? "fill-white scale-110" : ""}`}
            />
          </button>

          {/* Rating Badge */}
          {rating && (
            <div
              className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold backdrop-blur-md shadow-md ${getRatingBadgeColor(
                rating
              )}`}
            >
              <Star className="h-3.5 w-3.5 fill-current" />
              <span>{rating}</span>
            </div>
          )}
        </div>

        {/* Hover Quick View Trigger */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <span className="flex items-center gap-2 rounded-full bg-cyan-500/90 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-cyan-500/30 backdrop-blur-sm transition-transform group-hover:scale-100 scale-90">
            <Info className="h-4 w-4" />
            Quick Details
          </span>
        </div>
      </div>

      {/* Card Info Content */}
      <div className="flex flex-1 flex-col justify-between p-4 z-10">
        <div>
          {/* Release Year & Runtime */}
          <div className="flex items-center gap-3 text-xs text-slate-400 mb-1.5">
            {year && (
              <span className="flex items-center gap-1 font-medium">
                <Calendar className="h-3 w-3 text-cyan-400" />
                {year}
              </span>
            )}
            {movie.runtime && (
              <span className="flex items-center gap-1 text-slate-400">
                <Clock className="h-3 w-3 text-slate-500" />
                {movie.runtime}
              </span>
            )}
          </div>

          {/* Title */}
          <h3
            title={title}
            className="text-base font-bold text-slate-100 group-hover:text-cyan-400 transition-colors line-clamp-1"
          >
            {title}
          </h3>

          {/* Plot Overview (brief) */}
          {movie.overview && (
            <p className="mt-1.5 text-xs text-slate-400 line-clamp-2 leading-relaxed">
              {movie.overview}
            </p>
          )}
        </div>

        {/* Genre Tags */}
        {genres && genres.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
            {genres.slice(0, 2).map((genre, idx) => (
              <span
                key={idx}
                className="rounded-md bg-slate-800/90 px-2 py-0.5 text-[10px] font-medium text-slate-300 border border-slate-700/50"
              >
                {typeof genre === "object" ? genre.name : genre}
              </span>
            ))}
            {genres.length > 2 && (
              <span className="text-[10px] text-slate-500 self-center">
                +{genres.length - 2}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
