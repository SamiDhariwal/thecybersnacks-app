import Link from "next/link";
import { SnackCard } from "@/components/SnackCard";
import type { SnackArticle } from "@/lib/snackArticles";
import type { CertificationTrack } from "@/lib/certificationTracks";

type CertificationTrackTemplateProps = {
  articles: SnackArticle[];
  track: CertificationTrack;
};

export function CertificationTrackTemplate({
  articles,
  track,
}: CertificationTrackTemplateProps) {
  const articleLabel = articles.length === 1 ? "Snack" : "Snacks";

  return (
    <main className="page-shell certification-track-page-shell">
      <section className="site-container section-stack certification-track-page-stack">
        <header className="certification-track-hero">
          <Link href="/certifications" className="article-back-link">
            Back to Certifications
          </Link>

          <div className="certification-track-hero-copy">
            <p className="category-badge">Certification Track</p>
            <h1 className="certification-track-heading">{track.name}</h1>
            <p className="track-certification">{track.certification}</p>
            <p className="lead-text">{track.description}</p>
          </div>

          <div className="certification-track-meta" aria-label="Track details">
            <div>
              <p className="overview-label">Related content</p>
              <p className="article-meta-value">
                {articles.length} {articleLabel}
              </p>
            </div>
            <div>
              <p className="overview-label">Format</p>
              <p className="article-meta-value">Study track</p>
            </div>
          </div>
        </header>

        <section className="track-content-section">
          <div className="section-heading snacks-list-heading">
            <p className="eyebrow">Related Snacks</p>
            <h2 className="section-title">{track.name} Cyber Snacks</h2>
          </div>

          {articles.length > 0 ? (
            <div className="snack-grid">
              {articles.map((snack) => (
                <SnackCard snack={snack} key={snack.slug} />
              ))}
            </div>
          ) : (
            <div className="track-empty-state">
              <p className="category-badge">Coming Soon</p>
              <h3 className="track-empty-title">Content will be added soon.</h3>
              <p className="card-text">
                Focused Snack articles will appear here as the library grows.
              </p>
            </div>
          )}
        </section>
      </section>
    </main>
  );
}
