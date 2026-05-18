import Link from "next/link";
import { snackArticles } from "@/lib/snackArticles";

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
          {snackArticles.map((snack) => (
            <Link
              className="snack-card snack-card-link"
              href={`/snacks/${snack.slug}`}
              key={snack.slug}
            >
              <div className="snack-card-header">
                <p className="category-badge">{snack.category}</p>
                <p className="read-time">{snack.readTime}</p>
              </div>
              <h3 className="card-title">{snack.cardTitle}</h3>
              <p className="card-text">{snack.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
