import type { Metadata } from "next";
import Link from "next/link";

const articleSections = [
  {
    heading: "1. MFA proves a sign-in was approved, not that it was safe",
    body: [
      "Multi-factor authentication is a strong protection, but it still depends on the user making a good decision. If someone approves a prompt they did not request, the attacker may get the access they were waiting for.",
      "Example: you receive a push notification at night that says someone is trying to sign in. If you tap approve just to clear the notification, you may be approving a stolen password attempt.",
    ],
  },
  {
    heading: "2. Repeated prompts can wear people down",
    body: [
      "Attackers sometimes trigger many sign-in attempts in a short period. This is often called MFA fatigue because the goal is to make the prompt feel annoying instead of suspicious.",
      "A normal MFA prompt should match something you are doing right now. If the request appears when you are not signing in, treat it as a warning instead of a routine notification.",
    ],
  },
  {
    heading: "3. Number matching helps, but only if you read the screen",
    body: [
      "Some MFA systems ask you to type a number shown on the sign-in page. This is safer than a simple approve button, but it still needs attention.",
      "If someone calls, messages, or pressures you to read out or enter a number, stop. The number is meant to connect your real sign-in screen to your approval prompt, not to help someone else log in.",
    ],
  },
];

const checklistItems = [
  "Only approve MFA prompts you started yourself.",
  "Deny unexpected prompts instead of ignoring them.",
  "Report repeated or unusual prompts to your IT or security contact.",
  "Read the app name, location, and sign-in details when they are shown.",
  "Never share MFA codes or number-matching values with another person.",
  "Change your password if you approved a prompt by mistake.",
];

export const metadata: Metadata = {
  title: "Why MFA prompts can still be dangerous | The Cyber Snacks",
  description:
    "A beginner-friendly guide to MFA prompt risks, fatigue attacks, and safer approval habits.",
};

export default function MfaPromptsCanBeDangerousPage() {
  return (
    <main className="page-shell snack-article-page-shell">
      <article className="site-container snack-article-page-stack">
        <header className="snack-article-hero">
          <Link href="/snacks" className="article-back-link">
            Back to Snacks
          </Link>

          <div className="snack-article-hero-copy">
            <p className="category-badge">Microsoft 365</p>
            <h1 className="snack-article-heading">
              Why MFA prompts can still be dangerous
            </h1>
            <p className="lead-text">
              MFA is one of the best everyday security controls, but a prompt
              is still a decision point. The safest habit is to approve only
              what you started.
            </p>
          </div>

          <div className="snack-article-meta" aria-label="Article details">
            <div>
              <p className="overview-label">Read time</p>
              <p className="article-meta-value">5 min read</p>
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
                MFA makes stolen passwords much less useful, but it does not
                remove every risk. Attackers know that people get busy,
                distracted, or tired of repeated prompts.
              </p>
              <p>
                The goal is not to fear MFA. The goal is to treat every prompt
                as a small security checkpoint.
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
              aria-labelledby="mfa-checklist-heading"
            >
              <h2 id="mfa-checklist-heading">Prompt safety checklist</h2>
              <ul>
                {checklistItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section
              className="article-takeaway"
              aria-labelledby="mfa-takeaway-heading"
            >
              <p className="eyebrow">Final Takeaway</p>
              <h2 id="mfa-takeaway-heading">Approve actions, not surprises.</h2>
              <p>
                MFA is powerful when the prompt matches something you are doing.
                If it appears out of nowhere, deny it, report it, and assume
                someone may already know your password.
              </p>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
