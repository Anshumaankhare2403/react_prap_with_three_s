import { Search, X, SlidersHorizontal, ArrowUpDown } from "lucide-react";

/**
 * FilterBar Component
 * -------------------------------------------------------------
 * Provides a responsive search box, genre category chips, and sort controls.
 *
 * @param {Object} props
 * @param {string} props.searchTerm - Current search input string
 * @param {Function} props.onSearchChange - (value: string) => void
 * @param {string} props.selectedGenre - Currently selected genre
 * @param {Function} props.onGenreSelect - (genre: string) => void
 * @param {string[]} props.genres - Array of genre strings
 * @param {string} props.sortBy - Currently selected sort option
 * @param {Function} props.onSortChange - (sortKey: string) => void
 * @param {number} [props.totalCount] - Number of movies currently displayed
 */
function FilterBar({
  searchTerm = "",
  onSearchChange,
  selectedGenre = "All",
  onGenreSelect,
  genres = [],
  sortBy = "popular",
  onSortChange,
  totalCount,
}) {
  return (
    <div className="w-full space-y-4 mb-8">
      {/* Top Row: Search Input & Sort Dropdown */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Search Input Box */}
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
            placeholder="Search movies by title, actor, or keyword..."
            className="w-full rounded-2xl bg-slate-900/90 border border-slate-700/80 pl-11 pr-10 py-3 text-sm text-slate-100 placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all shadow-inner"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange && onSearchChange("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white transition-colors"
              title="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Right Side: Sort Control & Counter */}
        <div className="flex items-center gap-3 justify-between sm:justify-end">
          {totalCount !== undefined && (
            <span className="text-xs font-medium text-slate-400">
              <span className="text-cyan-400 font-bold">{totalCount}</span> movies
            </span>
          )}

          {/* Sort Selector */}
          <div className="relative flex items-center">
            <ArrowUpDown className="absolute left-3 h-4 w-4 text-slate-400 pointer-events-none" />
            <select
              value={sortBy}
              onChange={(e) => onSortChange && onSortChange(e.target.value)}
              className="appearance-none rounded-xl bg-slate-900 border border-slate-700/80 pl-9 pr-8 py-2.5 text-xs font-semibold text-slate-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 cursor-pointer shadow-sm"
            >
              <option value="popular">Most Popular</option>
              <option value="rating-desc">Top Rated (Highest First)</option>
              <option value="rating-asc">Lowest Rated</option>
              <option value="year-desc">Newest Release</option>
              <option value="year-asc">Oldest Release</option>
              <option value="title-asc">Title (A to Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bottom Row: Genre Pills (Horizontal scrollable) */}
      {genres.length > 0 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mr-1 flex-shrink-0">
            <SlidersHorizontal className="h-3.5 w-3.5 text-cyan-400" />
            <span>Genre:</span>
          </div>

          {genres.map((genre) => {
            const isSelected = selectedGenre === genre;
            return (
              <button
                key={genre}
                type="button"
                onClick={() => onGenreSelect && onGenreSelect(genre)}
                className={`flex-shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                  isSelected
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25 scale-105"
                    : "bg-slate-900/80 text-slate-300 border border-slate-800 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {genre}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default FilterBar;
