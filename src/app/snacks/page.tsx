import Link from "next/link";

const latestSnacks = [
  {
    category: "Email Security",
    title: "Spotting a polished phishing email",
    description:
      "A quick look at sender details, mismatched links, and pressure tactics.",
    readTime: "4 min read",
    href: "/snacks/phishing-signs-users-ignore",
  },
  {
    category: "Passwords",
    title: "Why password managers matter",
    description:
      "Simple reasons unique passwords and secure storage reduce everyday risk.",
    readTime: "3 min read",
    href: "/snacks/password-managers-matter",
  },
  {
    category: "Microsoft 365",
    title: "A beginner view of MFA prompts",
    description:
      "How to think about sign-in prompts, approvals, and suspicious requests.",
    readTime: "5 min read",
    href: "/snacks/mfa-prompts-can-be-dangerous",
  },
];

export default function SnacksPage() {
  return (
    <main className="page-shell">
      <section className="site-container section-stack snacks-page-stack">
        <div className="snacks-hero">
          <p className="eyebrow">Snacks</p>
          <h1 className="display-heading">
            Small cyber lessons with premium polish.
          </h1>
          <p className="lead-text">
            Short, practical security notes for building sharper habits without
            the noise.
          </p>
          <div className="gold-divider" />
        </div>

        <div className="section-heading snacks-list-heading">
          <p className="eyebrow">Articles</p>
          <h2 className="section-title">Latest Cyber Snacks</h2>
          <p className="card-text">
            Short practical cybersecurity lessons designed for quick real-world
            learning.
          </p>
        </div>

        <div className="snack-grid">
          {latestSnacks.map((snack) => (
            <Link
              className="snack-card snack-card-link"
              href={snack.href}
              key={snack.title}
            >
              <div className="snack-card-header">
                <p className="category-badge">{snack.category}</p>
                <p className="read-time">{snack.readTime}</p>
              </div>
              <h3 className="card-title">{snack.title}</h3>
              <p className="card-text">{snack.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
