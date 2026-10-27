import { Film, RefreshCw } from "lucide-react";

/**
 * EmptyState Component
 * -------------------------------------------------------------
 * Displays a clean fallback state when no movies match criteria or list is empty.
 *
 * @param {Object} props
 * @param {string} [props.title] - Heading message
 * @param {string} [props.description] - Descriptive note
 * @param {string} [props.actionLabel] - Button label
 * @param {Function} [props.onAction] - Button click handler
 */
function EmptyState({
  title = "No Movies Found",
  description = "We couldn't find any movies matching your current filters or search term.",
  actionLabel = "Reset Filters",
  onAction,
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-800 bg-slate-900/40 p-12 text-center my-8">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-4">
        <Film className="h-8 w-8" />
      </div>

      <h3 className="text-xl font-bold text-slate-100">{title}</h3>
      <p className="mt-2 max-w-md text-sm text-slate-400 leading-relaxed">
        {description}
      </p>

      {onAction && actionLabel && (
        <button
          onClick={onAction}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 text-xs font-semibold text-slate-950 transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          {actionLabel}
        </button>
      )}
    </div>
  );
}

export default EmptyState;
