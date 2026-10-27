import { ABOUT_DATA } from "../data/aboutData.js";
import {
  Layers,
  Cpu,
  Globe,
  Mail,
  MapPin,
  CheckCircle2,
  Terminal,
  ExternalLink,
} from "lucide-react";

/**
 * About Page Component
 * -------------------------------------------------------------------------
 * Displays developer portfolio information, project architecture highlights,
 * and tech stack details.
 */
function About() {
  const { developer, project } = ABOUT_DATA;

  // Custom high-fidelity brand SVGs
  const renderSocialIcon = (iconName) => {
    switch (iconName) {
      case "Github":
        return (
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        );
      case "Linkedin":
        return (
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      case "Mail":
        return <Mail className="h-4 w-4" />;
      default:
        return <Globe className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Developer Profile Header Card */}
        <section className="relative overflow-hidden rounded-3xl bg-slate-900/90 border border-slate-800 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          {/* Subtle Background Glow */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
            {/* Avatar */}
            <div className="relative group">
              <div className="h-32 w-32 sm:h-40 sm:w-40 overflow-hidden rounded-2xl border-2 border-cyan-500/40 p-1 shadow-xl shadow-cyan-500/10 bg-slate-800">
                <img
                  src={developer.avatar}
                  alt={developer.name}
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
              <span className="absolute bottom-2 right-2 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-slate-900"></span>
              </span>
            </div>

            {/* Profile Info */}
            <div className="flex-1 space-y-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <span className="rounded-full bg-cyan-500/10 border border-cyan-500/30 px-3 py-0.5 text-xs font-semibold text-cyan-300">
                    Developer & Creator
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <MapPin className="h-3.5 w-3.5 text-rose-400" />
                    {developer.location}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {developer.name}
                </h1>
                <p className="text-sm sm:text-base font-medium text-cyan-400">
                  {developer.title}
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                {developer.bio}
              </p>

              {/* Developer Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {developer.stats.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl bg-slate-950/70 border border-slate-800/80 p-3 text-center"
                  >
                    <div className="text-lg sm:text-xl font-extrabold text-cyan-400">
                      {item.value}
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 pt-2">
                {developer.socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-800/90 hover:bg-slate-750 px-3.5 py-2 text-xs font-semibold text-slate-200 border border-slate-700/80 hover:border-cyan-500/40 hover:text-white transition-all shadow-sm"
                  >
                    {renderSocialIcon(social.icon)}
                    <span>{social.name}</span>
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview & Architecture Section */}
        <section className="space-y-6">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Layers className="h-4 w-4" />
              <span>System Design</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Project Architecture & Vision
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.highlights.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 space-y-2 hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Grid */}
        <section className="space-y-6">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Cpu className="h-4 w-4" />
              <span>Technologies</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Core Tech Stack
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {project.techStack.map((tech, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-slate-900/80 border border-slate-800 p-5 hover:border-cyan-500/40 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {tech.name}
                  </span>
                  <span
                    className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${tech.color}`}
                  />
                </div>
                <p className="text-xs text-slate-400">{tech.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Developer Integration Guide Card */}
        <section className="rounded-3xl bg-slate-950 border border-cyan-500/30 p-6 sm:p-8 space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <Terminal className="h-5 w-5" />
            <span>Ready for your Axios & Context API Logic</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            All UI components (<code className="text-cyan-300">MovieCard</code>,{" "}
            <code className="text-cyan-300">FilterBar</code>,{" "}
            <code className="text-cyan-300">HeroBanner</code>,{" "}
            <code className="text-cyan-300">MovieDetailModal</code>) accept standardized
            props. When you're ready, create your <code className="text-amber-300">MovieContext.jsx</code>{" "}
            and connect your Axios API client directly into <code className="text-cyan-300">src/page/Home.jsx</code>!
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
