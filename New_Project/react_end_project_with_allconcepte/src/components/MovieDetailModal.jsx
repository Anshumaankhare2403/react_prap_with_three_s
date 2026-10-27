import { useEffect } from "react";
import { X, Star, Heart, Calendar, Clock, Film, User, Tag } from "lucide-react";

/**
 * MovieDetailModal Component
 * -------------------------------------------------------------
 * Displays extended movie information in an accessible modal dialog.
 *
 * @param {Object} props
 * @param {Object} props.movie - Active movie object (null if closed)
 * @param {Function} props.onClose - Close callback
 * @param {Function} props.onFavoriteToggle - Favorite toggle callback
 * @param {boolean} props.isFavorite - Whether active movie is favorite
 */
function MovieDetailModal({
  movie,
  onClose,
  onFavoriteToggle,
  isFavorite = false,
}) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (movie) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [movie, onClose]);

  if (!movie) return null;

  const title = movie.title || movie.Title || "Untitled Movie";
  const year =
    movie.year ||
    (movie.release_date ? movie.release_date.split("-")[0] : null) ||
    movie.Year ||
    "N/A";
  const rating =
    movie.vote_average !== undefined
      ? Number(movie.vote_average).toFixed(1)
      : movie.imdbRating || "N/A";
  const posterUrl =
    movie.poster ||
    (movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null) ||
    movie.Poster;
  const backdropUrl = movie.backdrop || posterUrl;
  const genres = movie.genres || (movie.Genre ? movie.Genre.split(", ") : []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl transition-all"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700/60"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header with Backdrop */}
        <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-slate-950">
          {backdropUrl && (
            <img
              src={backdropUrl}
              alt={title}
              className="h-full w-full object-cover filter brightness-70"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

          {/* Floating Badges */}
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 rounded-full bg-amber-500/90 px-3 py-1 text-xs font-bold text-slate-950 shadow-md">
                <Star className="h-3.5 w-3.5 fill-current" />
                {rating} / 10
              </span>
              {movie.vote_count && (
                <span className="text-xs text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded-full border border-slate-700/60">
                  {movie.vote_count.toLocaleString()} votes
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Poster Thumbnail */}
            {posterUrl && (
              <div className="hidden sm:block -mt-20 flex-shrink-0 w-36 overflow-hidden rounded-xl border-2 border-slate-700 shadow-2xl bg-slate-950">
                <img
                  src={posterUrl}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            {/* Title & Metadata */}
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {title}
              </h2>

              {movie.tagline && (
                <p className="mt-1 text-xs sm:text-sm italic text-cyan-400">
                  "{movie.tagline}"
                </p>
              )}

              {/* Quick Info Grid */}
              <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                {year && (
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                    {year}
                  </span>
                )}
                {movie.runtime && (
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-cyan-400" />
                    {movie.runtime}
                  </span>
                )}
                {movie.director && (
                  <span className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5 text-cyan-400" />
                    {movie.director}
                  </span>
                )}
              </div>

              {/* Genres */}
              {genres && genres.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5 items-center">
                  <Tag className="h-3.5 w-3.5 text-slate-400 mr-1" />
                  {genres.map((genre, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300 border border-slate-700"
                    >
                      {typeof genre === "object" ? genre.name : genre}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Overview / Storyline */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Film className="h-3.5 w-3.5 text-cyan-400" />
              Synopsis & Plot
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {movie.overview ||
                movie.Plot ||
                "No comprehensive plot summary provided for this title yet."}
            </p>
          </div>

          {/* Modal Footer Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <button
              onClick={() => onFavoriteToggle && onFavoriteToggle(movie)}
              className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all shadow-md ${
                isFavorite
                  ? "bg-rose-600 text-white shadow-rose-600/30"
                  : "bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
              }`}
            >
              <Heart className={`h-4 w-4 ${isFavorite ? "fill-white" : ""}`} />
              {isFavorite ? "In Your Favorites" : "Add to Favorites"}
            </button>

            <button
              onClick={onClose}
              className="rounded-xl px-5 py-2.5 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailModal;
