import { Play, Info, Heart, Star, Calendar, Clock } from "lucide-react";

/**
 * HeroBanner Component
 * -------------------------------------------------------------
 * Displays the spotlight / featured movie banner at the top of the Home page.
 *
 * @param {Object} props
 * @param {Object} props.featuredMovie - Featured movie object
 * @param {Function} [props.onSelectMovie] - Callback to open movie detail modal
 * @param {Function} [props.onFavoriteToggle] - Callback to toggle favorite
 * @param {boolean} [props.isFavorite] - Favorite status
 */
function HeroBanner({
  featuredMovie,
  onSelectMovie,
  onFavoriteToggle,
  isFavorite = false,
}) {
  if (!featuredMovie) return null;

  const title = featuredMovie.title || featuredMovie.Title || "Featured Premiere";
  const backdropUrl =
    featuredMovie.backdrop ||
    featuredMovie.poster ||
    "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1600&q=80";
  const rating = featuredMovie.vote_average || "8.7";
  const year = featuredMovie.year || "2024";
  const runtime = featuredMovie.runtime || "169 min";
  const genres = featuredMovie.genres || ["Sci-Fi", "Adventure"];

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl mb-12">
      {/* Background Image Container */}
      <div className="relative min-h-[440px] md:min-h-[520px] w-full">
        <img
          src={backdropUrl}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover object-center filter brightness-60"
        />

        {/* Multi-layered Gradients for Cinema Aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1120] via-[#0b1120]/80 to-transparent" />

        {/* Content Box */}
        <div className="relative z-10 flex min-h-[440px] md:min-h-[520px] flex-col justify-end p-6 md:p-12 lg:p-16 max-w-3xl">
          {/* Spotlight Tag */}
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              SPOTLIGHT PREMIERE
            </span>

            {/* Rating */}
            <span className="flex items-center gap-1 rounded-full bg-amber-500/20 border border-amber-500/40 px-2.5 py-0.5 text-xs font-bold text-amber-300 backdrop-blur-md">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              {rating} / 10
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
            {title}
          </h1>

          {/* Metadata Row */}
          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs md:text-sm text-slate-300">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-cyan-400" />
              {year}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-cyan-400" />
              {runtime}
            </span>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              {genres.map((g, idx) => (
                <span
                  key={idx}
                  className="rounded-md bg-slate-800/80 px-2 py-0.5 text-[11px] text-slate-300 border border-slate-700/60"
                >
                  {typeof g === "object" ? g.name : g}
                </span>
              ))}
            </div>
          </div>

          {/* Tagline / Overview */}
          {featuredMovie.tagline && (
            <p className="mt-3 text-sm italic font-medium text-cyan-200/90">
              "{featuredMovie.tagline}"
            </p>
          )}

          {featuredMovie.overview && (
            <p className="mt-2 text-xs md:text-sm text-slate-300/90 line-clamp-3 leading-relaxed max-w-2xl">
              {featuredMovie.overview}
            </p>
          )}

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectMovie && onSelectMovie(featuredMovie)}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 hover:from-cyan-400 hover:to-blue-500 active:scale-95"
            >
              <Info className="h-4 w-4" />
              Explore Details
            </button>

            <button
              onClick={() => onFavoriteToggle && onFavoriteToggle(featuredMovie)}
              className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold backdrop-blur-md border transition-all ${
                isFavorite
                  ? "bg-rose-600 text-white border-rose-500 shadow-lg shadow-rose-600/30"
                  : "bg-slate-900/80 text-slate-200 border-slate-700 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Heart
                className={`h-4 w-4 ${isFavorite ? "fill-white" : ""}`}
              />
              {isFavorite ? "In Favorites" : "Add to Favorites"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
