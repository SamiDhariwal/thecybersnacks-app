import { contactLinks } from "@/lib/socialLinks";

const contactMethods = [
  {
    ...contactLinks.youtube,
    type: "Videos",
    description: "Watch episodes, comment on topics, and follow new cyber snacks.",
    action: "Open channel",
  },
  {
    ...contactLinks.linkedin,
    type: "Network",
    description: "Reach out for collaborations, speaking, and professional messages.",
    action: "Connect",
  },
  {
    ...contactLinks.github,
    type: "Code",
    description: "Browse projects, experiments, and security learning notes.",
    action: "View work",
  },
];

const overviewItems = [
  {
    label: "Best for",
    value: "Cyber learning ideas, creator collabs, and project conversations.",
  },
  {
    label: "How to reach me",
    value: "Pick the channel that matches the context. No forms or gated inboxes.",
  },
  {
    label: "Channels",
    value: "YouTube, LinkedIn, and GitHub.",
  },
];

export default function ContactPage() {
  return (
    <main className="page-shell contact-page-shell">
      <section className="site-container section-stack contact-page-stack">
        <section className="contact-hero" aria-labelledby="contact-heading">
          <div className="contact-hero-copy">
            <p className="eyebrow">Contact</p>
            <h1 className="contact-hero-heading" id="contact-heading">
              Reach me where the cyber work happens.
            </h1>
            <p className="lead-text">
              The best way to connect is through the public channels I already
              use for videos, professional updates, and project work.
            </p>
          </div>

          <aside className="contact-overview-panel" aria-label="Contact overview">
            <p className="overview-panel-title">Contact Overview</p>
            <div className="overview-list">
              {overviewItems.map((item) => (
                <div className="overview-item" key={item.label}>
                  <p className="overview-label">{item.label}</p>
                  <p className="card-text">{item.value}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="contact-section" aria-labelledby="contact-methods-heading">
          <div className="contact-section-heading">
            <p className="eyebrow">Where to Reach Me</p>
            <h2 className="section-title" id="contact-methods-heading">
              Three simple ways to connect.
            </h2>
          </div>

          <div className="contact-method-grid">
            {contactMethods.map((method) => (
              <a
                className="contact-method-card"
                href={method.href}
                key={method.href}
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-method-top">
                  <span className="contact-method-type">{method.type}</span>
                  <span className="contact-card-action">{method.action}</span>
                </div>
                <div>
                  <h3 className="card-title">{method.label}</h3>
                  <p className="contact-method-handle">{method.handle}</p>
                </div>
                <p className="card-text">{method.description}</p>
              </a>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
