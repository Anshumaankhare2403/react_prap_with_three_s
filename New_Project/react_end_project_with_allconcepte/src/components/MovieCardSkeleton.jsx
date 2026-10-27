/**
 * MovieCardSkeleton Component
 * -------------------------------------------------------------
 * Render this placeholder component while your Axios call is loading:
 * {loading && Array.from({ length: 8 }).map((_, i) => <MovieCardSkeleton key={i} />)}
 */
function MovieCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-[#0f172a] border border-slate-800/80 shadow-lg animate-pulse">
      {/* Poster Placeholder */}
      <div className="aspect-[2/3] w-full bg-slate-800/70" />

      {/* Info Placeholder */}
      <div className="flex flex-1 flex-col justify-between p-4 space-y-3">
        <div>
          {/* Year placeholder */}
          <div className="h-3 w-16 bg-slate-800 rounded mb-2" />
          {/* Title placeholder */}
          <div className="h-4 w-3/4 bg-slate-700 rounded mb-1.5" />
          {/* Overview lines */}
          <div className="h-2.5 w-full bg-slate-800/80 rounded mb-1" />
          <div className="h-2.5 w-2/3 bg-slate-800/80 rounded" />
        </div>

        {/* Genre pills placeholder */}
        <div className="flex gap-2 pt-2 border-t border-slate-800/60">
          <div className="h-4 w-12 bg-slate-800 rounded-md" />
          <div className="h-4 w-14 bg-slate-800 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default MovieCardSkeleton;
