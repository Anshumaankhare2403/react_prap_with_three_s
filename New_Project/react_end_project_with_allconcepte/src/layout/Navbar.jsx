import { useState } from "react";
import Logo2 from "../assets/Logo/logo2.png";
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <nav className="bg-[#153B78] text-[#F6F4F1] shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12 lg:px-20">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <img src={Logo2} alt="error" className="h-12 w-12 rounded-xl" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="/" className="transition hover:text-red-500">
            Home
          </a>
          <a href="/about" className="transition hover:text-red-500">
            About
          </a>
          <a href="/movies" className="transition hover:text-red-500">
            Movie List
          </a>
        </div>

        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="flex flex-col gap-4 border-t border-gray-800 px-6 py-5 md:hidden">
          <a href="/" className="hover:text-red-500">Home</a>
          <a href="/about" className="hover:text-red-500">About</a>
          <a href="/movies" className="hover:text-red-500">Movie List</a>
          
        </div>
      )}
    </nav>
    </>
  )
}

export default Navbar
