import type { Metadata } from "next";
import Link from "next/link";

const articleSections = [
  {
    heading: "1. Reused passwords turn one leak into many problems",
    body: [
      "Most people reuse passwords because remembering dozens of unique logins is unrealistic. Attackers count on that. When one website leaks a password, they try the same email and password on other services.",
      "Example: a shopping site breach should not also give someone access to your email, banking, cloud storage, or work accounts. Unique passwords limit the damage.",
    ],
  },
  {
    heading: "2. A manager helps you create passwords you do not need to memorize",
    body: [
      "A password manager can generate long, random passwords and store them behind one strong master password. That means each account can have a different password without becoming a memory test.",
      "For beginners, the practical win is simple: you remember one strong master password, and the manager handles the messy parts for every other account.",
    ],
  },
  {
    heading: "3. Autofill can help you notice fake websites",
    body: [
      "Good password managers match saved passwords to the real website address. If a login page looks convincing but the manager does not offer to fill your password, that can be a useful warning sign.",
      "This is not perfect protection, but it adds another pause point. A fake page may look like your bank or email provider, while the domain tells a different story.",
    ],
  },
];

const checklistItems = [
  "Use one strong master password that you do not reuse anywhere else.",
  "Turn on MFA for the password manager account.",
  "Start by saving your most important accounts first.",
  "Replace reused passwords with generated unique passwords over time.",
  "Check the website address before saving or autofilling credentials.",
  "Keep recovery options current in case you lose access.",
];

export const metadata: Metadata = {
  title: "Why password managers matter | The Cyber Snacks",
  description:
    "A practical beginner guide to password managers, unique passwords, safer autofill, and account protection.",
};

export default function PasswordManagersMatterPage() {
  return (
    <main className="page-shell snack-article-page-shell">
      <article className="site-container snack-article-page-stack">
        <header className="snack-article-hero">
          <Link href="/snacks" className="article-back-link">
            Back to Snacks
          </Link>

          <div className="snack-article-hero-copy">
            <p className="category-badge">Passwords</p>
            <h1 className="snack-article-heading">
              Why password managers matter
            </h1>
            <p className="lead-text">
              Password managers reduce the pressure to remember everything and
              make it easier to use strong, unique passwords where they matter.
            </p>
          </div>

          <div className="snack-article-meta" aria-label="Article details">
            <div>
              <p className="overview-label">Read time</p>
              <p className="article-meta-value">3 min read</p>
            </div>
            <div>
              <p className="overview-label">Status</p>
              <p className="article-meta-value">Published May 18, 2026</p>
            </div>
          </div>
        </header>

        <div className="snack-article-layout">
          <div className="snack-article-content">
            <section className="article-section">
              <p>
                A password manager is not just a convenience tool. It is a
                practical way to stop password reuse, create stronger logins,
                and reduce the blast radius of a breach.
              </p>
              <p>
                You do not need to move every account in one day. Starting with
                email, banking, cloud storage, and work accounts gives you the
                biggest security improvement first.
              </p>
            </section>

            {articleSections.map((section) => (
              <section className="article-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <section
              className="article-checklist"
              aria-labelledby="password-checklist-heading"
            >
              <h2 id="password-checklist-heading">Starter checklist</h2>
              <ul>
                {checklistItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section
              className="article-takeaway"
              aria-labelledby="password-takeaway-heading"
            >
              <p className="eyebrow">Final Takeaway</p>
              <h2 id="password-takeaway-heading">
                Make secure behavior easier to repeat.
              </h2>
              <p>
                Password managers matter because they make the safer choice the
                easier choice: unique passwords, less reuse, and fewer risky
                memory shortcuts.
              </p>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
