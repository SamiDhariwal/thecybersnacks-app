import Link from "next/link";
import { SnackCard } from "@/components/SnackCard";
import type { SnackArticle, SnackLearningTrack } from "@/lib/snackArticles";

type SnackTrackTemplateProps = {
  articles: SnackArticle[];
  track: SnackLearningTrack;
};

export function SnackTrackTemplate({
  articles,
  track,
}: SnackTrackTemplateProps) {
  const articleLabel = articles.length === 1 ? "Snack" : "Snacks";

  return (
    <main className="page-shell snack-track-page-shell">
      <section className="site-container section-stack snack-track-page-stack">
        <header className="snack-track-hero">
          <Link href="/snacks" className="article-back-link">
            Back to Snacks
          </Link>

          <div className="snack-track-hero-copy">
            <p className="category-badge">Learning Track</p>
            <h1 className="snack-track-heading">{track.name}</h1>
            <p className="track-certification">{track.certification}</p>
            <p className="lead-text">{track.description}</p>
          </div>

          <div className="snack-track-meta" aria-label="Track details">
            <div>
              <p className="overview-label">Related content</p>
              <p className="article-meta-value">
                {articles.length} {articleLabel}
              </p>
            </div>
            <div>
              <p className="overview-label">Format</p>
              <p className="article-meta-value">Static study track</p>
            </div>
          </div>
        </header>

        <section className="track-content-section">
          <div className="section-heading snacks-list-heading">
            <p className="eyebrow">Track Snacks</p>
            <h2 className="section-title">{track.name} Cyber Snacks</h2>
            <p className="card-text">
              Practical notes connected to this certification track.
            </p>
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
                This track is in place and ready for focused Cyber Snacks as the
                library grows.
              </p>
            </div>
          )}
        </section>
      </section>
    </main>
  );
}
