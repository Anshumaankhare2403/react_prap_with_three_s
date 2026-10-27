import { Film, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router";

/**
 * Footer Component
 * -------------------------------------------------------------
 * Responsive footer matching the deep cinema aesthetic.
 */
function Footer() {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-[#0a0f1d] text-slate-400 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-xl font-bold text-white tracking-wide">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30">
                <Film className="h-5 w-5" />
              </span>
              <span>CinePulse</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              A high-performance modern movie web application engineered with React,
              Tailwind CSS, Context API for state management, and Axios for live API streaming.
            </p>
            <div className="flex items-center gap-2 text-xs text-cyan-400 font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Built for seamless React UI & API logic implementation</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition-colors">
                  Home (Movie Hub)
                </Link>
              </li>
              <li>
                <Link to="/movies" className="hover:text-cyan-400 transition-colors">
                  Browse All Movies
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">
                  About Developer & Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Architecture / Handlers */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Stack Architecture
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-lg bg-slate-900 border border-slate-800 px-2.5 py-1 text-xs text-cyan-300">
                React 19
              </span>
              <span className="rounded-lg bg-slate-900 border border-slate-800 px-2.5 py-1 text-xs text-amber-300">
                Context API
              </span>
              <span className="rounded-lg bg-slate-900 border border-slate-800 px-2.5 py-1 text-xs text-teal-300">
                Axios Ready
              </span>
              <span className="rounded-lg bg-slate-900 border border-slate-800 px-2.5 py-1 text-xs text-indigo-300">
                Tailwind CSS v4
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-slate-800/80 gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} CinePulse. All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
            <span>for React Developers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
