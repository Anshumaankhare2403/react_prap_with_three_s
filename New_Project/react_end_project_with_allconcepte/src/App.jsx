import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./layout/Navbar.jsx";
import Footer from "./layout/Footer.jsx";
import Home from "./page/Home.jsx";
import About from "./page/About.jsx";
import MovieList from "./page/MovieList.jsx";

/**
 * App Root Component
 * -------------------------------------------------------------
 * Configures client-side routing, shared layout (Navbar + Footer),
 * and page routes.
 *
 * 💡 CONTEXT API PLUG-IN SPOT:
 * When you write your Context provider (e.g. `MovieProvider`),
 * you can wrap it right around `<BrowserRouter>` or around `<Routes>`:
 *
 * <MovieProvider>
 *   <BrowserRouter>
 *     ...
 *   </BrowserRouter>
 * </MovieProvider>
 */
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-[#070b14] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
        {/* Navigation Bar */}
        <Navbar favoriteCount={2} />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/movies" element={<MovieList />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Site Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
