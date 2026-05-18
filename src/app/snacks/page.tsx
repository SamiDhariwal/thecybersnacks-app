import Link from "next/link";

const featuredSnack = {
  category: "Awareness",
  title: "The 5-minute security check before you click",
  description:
    "A calm walkthrough for checking links, senders, and urgency cues before trusting a message.",
  readTime: "5 min read",
};

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
  },
  {
    category: "Microsoft 365",
    title: "A beginner view of MFA prompts",
    description:
      "How to think about sign-in prompts, approvals, and suspicious requests.",
    readTime: "5 min read",
  },
  {
    category: "Threats",
    title: "What makes a threat feel urgent",
    description:
      "A short note on fear, speed, and social pressure in cyber attacks.",
    readTime: "4 min read",
  },
  {
    category: "Basics",
    title: "Updates are quiet security work",
    description:
      "Why patches, browser updates, and device restarts deserve attention.",
    readTime: "3 min read",
  },
  {
    category: "Awareness",
    title: "The habit of slowing down",
    description:
      "A practical reminder to pause before opening attachments or sharing data.",
    readTime: "2 min read",
  },
];

export default function SnacksPage() {
  return (
    <main className="page-shell">
      <section className="site-container section-stack">
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

        <article className="featured-snack">
          <div>
            <p className="category-badge">{featuredSnack.category}</p>
            <h2 className="section-title">{featuredSnack.title}</h2>
            <p className="card-text">{featuredSnack.description}</p>
          </div>
          <p className="read-time">{featuredSnack.readTime}</p>
        </article>

        <div className="section-heading">
          <p className="eyebrow">Latest Snacks</p>
          <h2 className="section-title">
            Placeholder lessons for the first content run.
          </h2>
        </div>

        <div className="snack-grid">
          {latestSnacks.map((snack) =>
            snack.href ? (
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
            ) : (
              <article className="snack-card" key={snack.title}>
                <div className="snack-card-header">
                  <p className="category-badge">{snack.category}</p>
                  <p className="read-time">{snack.readTime}</p>
                </div>
                <h3 className="card-title">{snack.title}</h3>
                <p className="card-text">{snack.description}</p>
              </article>
            ),
          )}
        </div>
      </section>
    </main>
  );
}
