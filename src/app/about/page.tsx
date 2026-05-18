const focusAreas = [
  {
    title: "Microsoft 365 security",
    description:
      "Clear guidance around identity, MFA, sharing controls, mailbox safety, and secure collaboration habits.",
  },
  {
    title: "PowerShell automation",
    description:
      "Practical scripting ideas for repeatable checks, user reviews, reporting, and cleaner security workflows.",
  },
  {
    title: "Phishing awareness",
    description:
      "Focused lessons that help people slow down, inspect messages, and report suspicious activity with confidence.",
  },
  {
    title: "Endpoint security",
    description:
      "Plain-English notes on hardening, application control, patching, and reducing everyday device risk.",
  },
];

const philosophyPoints = [
  "Security learning should feel calm, practical, and usable.",
  "Premium design should support clarity instead of becoming noise.",
  "Small lessons can build strong habits when they are consistent.",
];

export default function AboutPage() {
  return (
    <main className="page-shell about-page-shell">
      <section className="site-container section-stack about-page-stack">
        <div className="about-hero">
          <div className="about-hero-copy">
            <p className="eyebrow">About</p>
            <h1 className="about-hero-heading">
              Cybersecurity learning with purpose and polish.
            </h1>
            <p className="lead-text">
              The Cyber Snacks is a modern learning brand for practical
              cybersecurity ideas, clear technical walkthroughs, and focused
              security habits.
            </p>
            <div className="gold-divider" />
          </div>
        </div>

        <section className="about-mission">
          <div>
            <p className="eyebrow">Mission</p>
            <h2 className="section-title">
              Make cybersecurity easier to understand and easier to act on.
            </h2>
          </div>
          <div className="section-copy">
            <p>
              The Cyber Snacks exists to turn security topics into focused,
              approachable lessons. The goal is not to overwhelm people with
              jargon, but to help them understand what matters and what to do
              next.
            </p>
            <p>
              The brand focuses on practical cybersecurity learning across
              Microsoft 365 security, PowerShell automation, phishing
              awareness, endpoint security, and real-world defensive habits.
            </p>
          </div>
        </section>

        <section className="about-section-block">
          <div className="section-heading">
            <p className="eyebrow">Focus & Expertise</p>
            <h2 className="section-title">
              Practical topics for everyday security improvement.
            </h2>
          </div>

          <div className="about-focus-grid">
            {focusAreas.map((area) => (
              <article className="about-focus-card" key={area.title}>
                <h3 className="card-title">{area.title}</h3>
                <p className="card-text">{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-philosophy">
          <div>
            <p className="eyebrow">Philosophy</p>
            <h2 className="section-title">Clear lessons. Stronger habits.</h2>
          </div>

          <div className="philosophy-list">
            {philosophyPoints.map((point) => (
              <p className="philosophy-point" key={point}>
                {point}
              </p>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
