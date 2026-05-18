import Link from "next/link";

const snackPreviews = [
  {
    title: "Password Managers Matter",
    label: "Security Basics",
    text: "A practical look at unique passwords, safer storage, and better daily habits.",
  },
  {
    title: "Phishing Signals",
    label: "Email Security",
    text: "A compact checklist for spotting suspicious sender details and risky links.",
  },
  {
    title: "Local Admin Risk",
    label: "Endpoint Security",
    text: "A beginner-friendly view of why everyday admin access increases damage.",
  },
];

const projectPreviews = [
  {
    title: "Essential Eight Uplift",
    label: "Governance",
    text: "A staged improvement plan for practical control maturity and risk reduction.",
  },
  {
    title: "WDAC Application Control",
    label: "Endpoint Security",
    text: "A controlled deployment approach for allow rules, audit mode, and tuning.",
  },
  {
    title: "Microsoft 365 Hardening",
    label: "Cloud Security",
    text: "A focused baseline covering identity, mailbox, sharing, and audit controls.",
  },
];

const videoPreviews = [
  {
    title: "External Awareness References",
    text: "Useful public cybersecurity clips are curated while original The Cyber Snacks videos are prepared.",
  },
  {
    title: "Original Videos Coming Soon",
    text: "The live Videos page is clearly marked as external reference content until original walkthroughs are added.",
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
              project examples, and carefully labelled video references.
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
              <strong>Awareness references</strong>
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
              The Cyber Snacks is a clean, practical learning hub for cyber
              concepts, project examples, and walkthrough-ready guidance.
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
            <h2 className="section-title">Bite-sized security lessons ready to read.</h2>
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
            <h2 className="section-title">Practical project examples with real security focus.</h2>
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
            <h2 className="section-title">
              External awareness references, with originals to follow.
            </h2>
          </div>
          <div className="video-preview-grid">
            {videoPreviews.map((video) => (
              <article className="video-preview" key={video.title}>
                <div className="video-frame video-placeholder">
                  <div>
                    <p className="preview-label">Video Reference</p>
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
            Practical cyber learning, ready to explore.
          </h2>
          <p className="lead-text">
            Explore live Snack articles, credible project examples, and clearly
            labelled video references from one focused place.
          </p>
          <Link href="/contact" className="button-link">
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
