import Link from "next/link";

const snackPreviews = [
  {
    title: "Password Hygiene",
    label: "Security Basics",
    text: "A short primer on stronger passwords, managers, and safer habits.",
  },
  {
    title: "Phishing Signals",
    label: "Threat Notes",
    text: "A compact checklist for spotting suspicious messages before clicking.",
  },
  {
    title: "Home Network Checks",
    label: "Quick Audit",
    text: "Simple steps for reviewing your router, devices, and updates.",
  },
];

const projectPreviews = [
  {
    title: "Personal Lab",
    label: "Coming Soon",
    text: "A controlled practice environment for learning core security skills.",
  },
  {
    title: "Snack Notes",
    label: "Prototype",
    text: "A lightweight system for collecting and organizing cyber learning notes.",
  },
  {
    title: "Threat Timeline",
    label: "Concept",
    text: "A visual way to track security incidents, patterns, and takeaways.",
  },
];

const videoPreviews = [
  {
    title: "Cyber Basics in Minutes",
    text: "Placeholder for a short explainer video embed.",
  },
  {
    title: "Project Walkthrough",
    text: "Placeholder for a build or lab walkthrough embed.",
  },
];

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">The Cyber Snacks</p>
            <h1 className="display-heading">
              Premium cyber learning, served in focused bites.
            </h1>
            <p className="lead-text">
              A cinematic black-and-gold home for practical security notes,
              project previews, and video explainers.
            </p>
            <div className="gold-divider" />
            <div className="hero-actions">
              <Link href="/snacks" className="button-link">
                Browse Snacks
              </Link>
              <Link href="/projects" className="button-link secondary">
                View Projects
              </Link>
            </div>
          </div>

          <div className="hero-panel" aria-label="Homepage highlights">
            <p className="hero-panel-kicker">Signal Board</p>
            <div className="hero-panel-line">
              <span>Snacks</span>
              <strong>Short-form lessons</strong>
            </div>
            <div className="hero-panel-line">
              <span>Projects</span>
              <strong>Practical builds</strong>
            </div>
            <div className="hero-panel-line">
              <span>Videos</span>
              <strong>Visual explainers</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="site-container about-grid">
          <div className="section-heading">
            <p className="eyebrow">What is The Cyber Snacks?</p>
            <h2 className="section-title">
              A refined space for making security easier to approach.
            </h2>
          </div>
          <div className="section-copy">
            <p>
              The Cyber Snacks is being built as a clean, practical learning
              hub for cyber concepts, projects, and walkthroughs.
            </p>
            <p>
              The tone is simple: concise explanations, premium presentation,
              and enough structure to help each idea land clearly.
            </p>
          </div>
        </div>
      </section>

      <section className="home-section separated">
        <div className="site-container section-stack">
          <div className="section-heading">
            <p className="eyebrow">Latest Snacks</p>
            <h2 className="section-title">Bite-sized topics waiting to be written.</h2>
          </div>
          <div className="preview-grid">
            {snackPreviews.map((snack) => (
              <article className="preview-card" key={snack.title}>
                <p className="preview-label">{snack.label}</p>
                <h3 className="card-title">{snack.title}</h3>
                <p className="card-text">{snack.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="site-container section-stack">
          <div className="section-heading">
            <p className="eyebrow">Featured Projects</p>
            <h2 className="section-title">A polished preview of future builds.</h2>
          </div>
          <div className="preview-grid">
            {projectPreviews.map((project) => (
              <article className="preview-card" key={project.title}>
                <p className="preview-label">{project.label}</p>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-text">{project.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section separated">
        <div className="site-container section-stack">
          <div className="section-heading">
            <p className="eyebrow">Videos</p>
            <h2 className="section-title">Responsive video spaces for future episodes.</h2>
          </div>
          <div className="video-preview-grid">
            {videoPreviews.map((video) => (
              <article className="video-preview" key={video.title}>
                <div className="video-frame video-placeholder">
                  <div>
                    <p className="preview-label">YouTube Placeholder</p>
                    <h3 className="card-title">{video.title}</h3>
                    <p className="card-text">{video.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="site-container final-cta">
          <p className="eyebrow">Stay Ready</p>
          <h2 className="section-title">
            The foundation is set for deeper cyber content.
          </h2>
          <p className="lead-text">
            Next steps can add real articles, project details, and video
            embeds while preserving this premium visual direction.
          </p>
          <Link href="/contact" className="button-link">
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
