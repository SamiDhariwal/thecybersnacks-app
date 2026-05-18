import Link from "next/link";
import { SnackCard } from "@/components/SnackCard";
import {
  getSnackArticlesForTrack,
  snackArticles,
  snackLearningTracks,
} from "@/lib/snackArticles";

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

        <section className="learning-tracks-section">
          <div className="section-heading snacks-list-heading">
            <p className="eyebrow">Learning Tracks</p>
            <h2 className="section-title">Certification Study Tracks</h2>
            <p className="card-text">
              Focused Cyber Snacks grouped around certification domains without
              turning the experience into a classroom.
            </p>
          </div>

          <div className="track-grid">
            {snackLearningTracks.map((track) => {
              const articleCount = getSnackArticlesForTrack(track.slug).length;
              const articleLabel =
                articleCount === 1 ? "related Snack" : "related Snacks";

              return (
                <Link
                  className="track-card"
                  href={`/snacks/${track.slug}`}
                  key={track.slug}
                >
                  <div className="track-card-header">
                    <p className="category-badge">Study Track</p>
                    <p className="track-count">
                      {articleCount} {articleLabel}
                    </p>
                  </div>
                  <div className="track-card-copy">
                    <h3 className="track-card-title">{track.name}</h3>
                    <p className="track-certification">
                      {track.certification}
                    </p>
                    <p className="card-text">{track.description}</p>
                  </div>
                  <span className="track-card-cta">Open track</span>
                </Link>
              );
            })}
          </div>
        </section>

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
            <SnackCard snack={snack} key={snack.slug} />
          ))}
        </div>
      </section>
    </main>
  );
}
