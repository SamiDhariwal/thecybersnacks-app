import type { Metadata } from "next";
import Link from "next/link";

const articleSections = [
  {
    heading: "1. The sender looks familiar, but the address is off",
    body: [
      "Phishing emails often borrow a trusted name, logo, or writing style. The display name may say Microsoft, your bank, or a coworker, but the real sender address tells a better story.",
      "Look for small changes: extra words, odd spelling, personal email accounts, or a reply-to address that does not match the sender. If the message claims to be from a company, the domain should match that company clearly.",
    ],
  },
  {
    heading: "2. The link text sounds safe, but the destination does not",
    body: [
      "A button can say View document or Reset password while sending you somewhere completely different. Attackers rely on people trusting the visible text instead of checking where the link actually goes.",
      "On desktop, hover over the link before clicking. On mobile, be careful with long-press previews and avoid opening anything by accident. If the destination uses a strange domain, a shortened link, or a confusing subdomain, slow down.",
    ],
  },
  {
    heading: "3. The message pushes you to act before thinking",
    body: [
      "Urgency is one of the most common phishing tricks. Messages may warn that your account will close, a payment will fail, a delivery is blocked, or a file needs immediate review.",
      "Real problems can be urgent too, so do not ignore every warning. The safer move is to verify through a trusted path: open the real website yourself, use a saved bookmark, or contact the person through a channel you already trust.",
    ],
  },
];

const checklistItems = [
  "Check the full sender address, not just the display name.",
  "Compare the link destination with the organization it claims to be from.",
  "Treat pressure, threats, and unusual deadlines as warning signs.",
  "Open important services directly instead of using email links.",
  "Confirm unexpected requests through a trusted channel.",
  "Report or delete the message if it still feels wrong.",
];

export const metadata: Metadata = {
  title: "3 phishing signs most users ignore | The Cyber Snacks",
  description:
    "A beginner-friendly guide to spotting sender, link, and urgency clues in polished phishing emails.",
};

export default function PhishingSignsUsersIgnorePage() {
  return (
    <main className="page-shell snack-article-page-shell">
      <article className="site-container snack-article-page-stack">
        <header className="snack-article-hero">
          <Link href="/snacks" className="article-back-link">
            Back to Snacks
          </Link>

          <div className="snack-article-hero-copy">
            <p className="category-badge">Email Security</p>
            <h1 className="snack-article-heading">
              3 phishing signs most users ignore
            </h1>
            <p className="lead-text">
              Polished phishing emails can look calm, branded, and believable.
              The trick is to check the small details attackers hope you skip.
            </p>
          </div>

          <div className="snack-article-meta" aria-label="Article details">
            <div>
              <p className="overview-label">Read time</p>
              <p className="article-meta-value">4 min read</p>
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
                Most people do not fall for phishing because they are careless.
                They fall for it because the message arrives during a normal
                busy moment and looks close enough to real.
              </p>
              <p>
                These three checks are simple, fast, and useful before opening
                a link, downloading a file, or sharing account details.
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
              aria-labelledby="checklist-heading"
            >
              <h2 id="checklist-heading">Practical checklist</h2>
              <ul>
                {checklistItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section
              className="article-takeaway"
              aria-labelledby="takeaway-heading"
            >
              <p className="eyebrow">Final Takeaway</p>
              <h2 id="takeaway-heading">Trust the process, not the polish.</h2>
              <p>
                A phishing email does not need to look messy to be dangerous.
                If the sender, link, or urgency feels slightly wrong, pause and
                verify before you click.
              </p>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
