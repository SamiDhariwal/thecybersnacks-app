const featuredVideo = {
  category: "External Reference",
  title: "Temporary awareness reference: phishing basics",
  source: "CISA Secure Our World",
  embedUrl: "https://www.youtube.com/embed/sg0kQYvTlnc",
  watchUrl: "https://www.youtube.com/watch?v=sg0kQYvTlnc",
  description:
    "This embedded CISA public awareness video is included as a temporary reference while original The Cyber Snacks videos are prepared.",
  cta: "Open CISA video",
};

const videos = [
  {
    category: "Passwords",
    title: "How to Make Strong Passwords",
    source: "CISA Secure Our World",
    url: "https://www.youtube.com/watch?v=XXrbut5xRbE",
    description:
      "A quick companion video on creating stronger passwords and avoiding easy-to-guess patterns.",
    cta: "Watch video",
  },
  {
    category: "MFA",
    title: "How to Turn on MFA",
    source: "CISA Secure Our World",
    url: "https://www.youtube.com/watch?v=QWwaidg3AtY",
    description:
      "A practical reminder that MFA adds an extra check when someone tries to access an account.",
    cta: "Watch video",
  },
  {
    category: "Device Security",
    title: "How to Update Software",
    source: "CISA Secure Our World",
    url: "https://www.youtube.com/watch?v=zCcX6aSXcLI",
    description:
      "A simple explanation of why updates matter for fixing known security weaknesses.",
    cta: "Watch video",
  },
];

export default function VideosPage() {
  return (
    <main className="page-shell videos-page-shell">
      <section className="site-container section-stack videos-page-stack">
        <div className="videos-hero">
          <div className="videos-hero-copy">
            <p className="eyebrow">Videos</p>
            <h1 className="video-hero-heading">
              Cybersecurity media for sharper decisions.
            </h1>
            <p className="lead-text">
              Original The Cyber Snacks videos will be added soon. For now,
              this page highlights a few useful public awareness references.
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

        <div className="section-heading">
          <p className="eyebrow">Supporting Videos</p>
          <h2 className="section-title">
            Short awareness clips worth keeping close.
          </h2>
        </div>

        <div className="video-grid">
          {videos.map((video) => (
            <article className="video-card" key={video.title}>
              <div className="video-card-preview" aria-hidden="true">
                <span className="video-play-mark small" />
              </div>
              <div className="video-card-body">
                <div className="video-meta-row">
                  <p className="category-badge">{video.category}</p>
                  <p className="video-duration">{video.source}</p>
                </div>
                <h3 className="card-title">{video.title}</h3>
                <p className="card-text">{video.description}</p>
                <a
                  className="video-card-link"
                  href={video.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {video.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
