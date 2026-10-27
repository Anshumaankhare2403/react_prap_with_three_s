/**
 * About Page & Developer Profile Data
 * -------------------------------------------------------------
 * Edit this file with your own personal info, social links, and tech stack!
 */

export const ABOUT_DATA = {
  developer: {
    name: "Anshumaan Khare",
    title: "Full-Stack & React Frontend Developer",
    location: "India",
    bio: "Passionate React developer dedicated to building sleek, responsive web applications with modern architectures. Currently mastering React, Context API, stateful architectures, and asynchronous REST API integrations with Axios.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    stats: [
      { label: "React Projects", value: "12+" },
      { label: "API Integrations", value: "25+" },
      { label: "Code Commits", value: "450+" },
      { label: "Satisfaction", value: "100%" },
    ],
    socials: [
      { name: "GitHub", url: "https://github.com/Anshumaankhare2403", icon: "Github" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
      { name: "Portfolio", url: "https://portfolio.dev", icon: "Globe" },
      { name: "Email", url: "mailto:anshuman@example.com", icon: "Mail" },
    ],
  },
  project: {
    title: "CinePulse - Modern Movie Web App",
    version: "1.0.0",
    description:
      "A cinematic movie discovery platform engineered with React 19, Tailwind CSS v4, Context API for global state management, and Axios for live movie API streaming. Designed for seamless user experience, fast filtering, modal previews, and mobile-first responsiveness.",
    highlights: [
      {
        title: "Clean UI Component Architecture",
        description:
          "Modular, reusable UI blocks including MovieCard, FilterBar, HeroBanner, DetailModal, and Skeletons ready for easy logic plug-and-play.",
      },
      {
        title: "Context API Integration Ready",
        description:
          "Easily connect your global movie state, favorite list, theme toggles, and user preferences through standard React Context.",
      },
      {
        title: "Axios REST Client Prepared",
        description:
          "Components are parameterized with standard REST API schemas (like TMDB/OMDb), supporting loading spinners, error boundaries, and pagination.",
      },
      {
        title: "Responsive Glassmorphism Styling",
        description:
          "Tailwind CSS v4 powered dark-mode aesthetics with smooth hover transitions, backdrop blurs, and polished mobile menus.",
      },
    ],
    techStack: [
      { name: "React 19", role: "Core UI Library", color: "from-cyan-500 to-blue-500" },
      { name: "Tailwind CSS v4", role: "Utility Styling", color: "from-teal-400 to-cyan-600" },
      { name: "React Router", role: "Client-side Navigation", color: "from-red-500 to-orange-500" },
      { name: "Context API", role: "Global State Management", color: "from-purple-500 to-indigo-500" },
      { name: "Axios", role: "HTTP & REST Requests", color: "from-yellow-400 to-amber-600" },
      { name: "Vite 6", role: "Build Tooling & Fast HMR", color: "from-violet-500 to-fuchsia-500" },
    ],
  },
};
