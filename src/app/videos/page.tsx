const featuredVideo = {
  category: "External Reference",
  title: "Phishing basics",
  source: "CISA Secure Our World",
  embedUrl: "https://www.youtube.com/embed/sg0kQYvTlnc",
  watchUrl: "https://www.youtube.com/watch?v=sg0kQYvTlnc",
  description:
    "A public awareness reference included while original The Cyber Snacks videos are prepared.",
  cta: "Open CISA video",
};

const supportingVideos = [
  {
    category: "Passwords",
    title: "Strong passwords",
    source: "CISA Secure Our World",
    url: "https://www.youtube.com/watch?v=XXrbut5xRbE",
  },
  {
    category: "MFA",
    title: "Turn on MFA",
    source: "CISA Secure Our World",
    url: "https://www.youtube.com/watch?v=QWwaidg3AtY",
  },
  {
    category: "Device Security",
    title: "Update software",
    source: "CISA Secure Our World",
    url: "https://www.youtube.com/watch?v=zCcX6aSXcLI",
  },
];

export default function VideosPage() {
  return (
    <main className="page-shell videos-page-shell">
      <section className="site-container section-stack videos-page-stack">
        <div className="videos-hero">
          <div className="videos-hero-copy">
            <p className="eyebrow">Videos</p>
            <h1 className="video-hero-heading">External awareness references.</h1>
            <p className="lead-text">
              Useful public clips, clearly labelled as external sources.
            </p>
            <div className="gold-divider" />
          </div>
        </div>

        <article className="featured-video">
          <div className="featured-video-preview">
            <iframe
              className="featured-video-embed"
              src={featuredVideo.embedUrl}
              title={featuredVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="featured-video-copy">
            <div className="video-meta-row">
              <p className="category-badge">{featuredVideo.category}</p>
              <p className="video-duration">{featuredVideo.source}</p>
            </div>
            <h2 className="section-title">{featuredVideo.title}</h2>
            <p className="card-text">{featuredVideo.description}</p>
            <a
              className="button-link video-cta"
              href={featuredVideo.watchUrl}
              target="_blank"
              rel="noreferrer"
            >
              {featuredVideo.cta}
            </a>
          </div>
        </article>

        <section className="supporting-video-section">
          <div className="section-heading">
            <p className="eyebrow">Supporting References</p>
            <h2 className="section-title">Compact awareness links.</h2>
          </div>

          <div className="supporting-video-list">
            {supportingVideos.map((video) => (
              <a
                className="supporting-video-link"
                href={video.url}
                key={video.url}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-method-type">{video.category}</span>
                <span>{video.title}</span>
                <span className="video-duration">{video.source}</span>
              </a>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
