import { useState } from "react";
import { NavLink, Link } from "react-router";
import { Film, Heart, Menu, X, Clapperboard } from "lucide-react";
import Logo2 from "../assets/Logo/logo2.png";

/**
 * Navbar Component
 * -------------------------------------------------------------
 * Responsive header with active link indicators and favorite badge support.
 *
 * @param {Object} props
 * @param {number} [props.favoriteCount=0] - Number of favorited movies (from your Context)
 */
function Navbar({ favoriteCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
      isActive
        ? "text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 shadow-sm"
        : "text-slate-200 hover:text-white hover:bg-slate-800/60"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
      isActive
        ? "text-cyan-400 bg-cyan-950/60 font-semibold border border-cyan-500/30"
        : "text-slate-300 hover:text-white hover:bg-slate-800"
    }`;

  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0b1329]/90 border-b border-slate-800/80 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 md:px-12 lg:px-20">
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center overflow-hidden rounded-xl border border-cyan-500/30 shadow-md shadow-cyan-500/10 group-hover:border-cyan-400 transition-colors">
            <img
              src={Logo2}
              alt="CinePulse Logo"
              className="h-10 w-10 object-contain transition-transform group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Cine<span className="text-cyan-400">Pulse</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-slate-400 -mt-1">
              Movie Hub
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-2 md:flex">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={navLinkClass}>
            Movie List
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About Me
          </NavLink>
        </div>

        {/* Right Section: Favorites Badge Counter & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Favorite Counter Pill (Ready for Context API) */}
          <Link
            to="/movies?filter=favorites"
            className="flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-700/80 px-3.5 py-1.5 text-xs font-semibold text-slate-200 hover:border-rose-500/60 hover:text-rose-400 transition-all shadow-sm"
            title="View Favorites"
          >
            <Heart className="h-4 w-4 text-rose-500 fill-rose-500/30" />
            <span className="hidden sm:inline">Favorites</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-[10px] font-bold text-white shadow-sm">
              {favoriteCount}
            </span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-300 hover:text-white md:hidden transition-colors border border-slate-700"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {menuOpen && (
        <div className="flex flex-col gap-1.5 border-t border-slate-800 bg-[#0b1329] px-6 py-4 md:hidden animate-fadeIn">
          <NavLink
            to="/"
            end
            onClick={() => setMenuOpen(false)}
            className={mobileNavLinkClass}
          >
            <Film className="h-4 w-4" />
            Home
          </NavLink>
          <NavLink
            to="/movies"
            onClick={() => setMenuOpen(false)}
            className={mobileNavLinkClass}
          >
            <Clapperboard className="h-4 w-4" />
            Movie List
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={mobileNavLinkClass}
          >
            About Me & Project
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
