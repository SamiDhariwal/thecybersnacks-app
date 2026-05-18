export default function AboutPage() {
  return (
    <main className="page-shell about-page-shell">
      <section className="site-container section-stack about-page-stack">
        <div className="about-hero">
          <div className="about-hero-copy">
            <p className="eyebrow">About</p>
            <h1 className="about-hero-heading">Cyber learning, kept human.</h1>
            <p className="lead-text">
              The Cyber Snacks is a creator-led space for short security notes,
              study tracks, and practical habits.
            </p>
            <div className="gold-divider" />
          </div>
        </div>

        <section className="about-mission">
          <div>
            <p className="eyebrow">Why It Exists</p>
            <h2 className="section-title">Small lessons are easier to use.</h2>
          </div>
          <div className="section-copy">
            <p>
              Security advice can feel heavy. This site keeps the useful part
              close: what to notice, why it matters, and what to do next.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
