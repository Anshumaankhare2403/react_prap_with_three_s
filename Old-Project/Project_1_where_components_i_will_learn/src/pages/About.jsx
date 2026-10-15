
function About() {
  return (
  <section className="about">
      <div className="about-container">
        <h1>About WallpaperHub</h1>

        <p className="about-description">
          WallpaperHub is your destination for high-quality wallpapers. Explore
          thousands of wallpapers across categories like Nature, Anime, Cars,
          Gaming, Space, Abstract, and more. Every wallpaper is optimized for
          desktops, laptops, tablets, and mobile devices.
        </p>

        <div className="features">
          <div className="feature-card">
            <h3>🖼️ HD & 4K Wallpapers</h3>
            <p>
              Browse a growing collection of high-resolution wallpapers with
              crystal-clear quality.
            </p>
          </div>

          <div className="feature-card">
            <h3>⚡ Fast Loading</h3>
            <p>
              Enjoy a smooth experience with optimized images and responsive
              performance.
            </p>
          </div>

          <div className="feature-card">
            <h3>📂 Multiple Categories</h3>
            <p>
              Discover wallpapers for Anime, Cars, Nature, Games, Space,
              Technology, and much more.
            </p>
          </div>

          <div className="feature-card">
            <h3>📱 Responsive Design</h3>
            <p>
              Access your favorite wallpapers seamlessly on desktop, tablet,
              and mobile devices.
            </p>
          </div>
        </div>

        <div className="about-footer">
          <h2>Find Your Perfect Wallpaper</h2>
          <p>
            Refresh your screen with beautiful wallpapers that match your style
            and personality.
          </p>

          <button className="explore-btn">Explore Wallpapers</button>
        </div>
      </div>
    </section>
  )
}

export default About
