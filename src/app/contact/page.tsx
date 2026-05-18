import { contactLinks } from "@/lib/socialLinks";

const contactMethods = [
  {
    ...contactLinks.youtube,
    type: "Videos",
    description: "Watch videos and follow new cyber content.",
    action: "Open channel",
  },
  {
    ...contactLinks.linkedin,
    type: "Network",
    description: "Connect for professional updates and messages.",
    action: "Connect",
  },
  {
    ...contactLinks.github,
    type: "Code",
    description: "Browse projects and security learning notes.",
    action: "View work",
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
              Three ways to connect.
            </h1>
            <p className="lead-text">
              Use the public channels below for video, professional, or project
              updates.
            </p>
            <div className="gold-divider" />
          </div>
        </section>

        <section className="contact-section" aria-label="Contact methods">
          <div className="contact-section-heading">
            <p className="eyebrow">Where to Reach Me</p>
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
