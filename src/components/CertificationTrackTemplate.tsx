import Link from "next/link";
import { CertificationTopicCard } from "@/components/CertificationTopicCard";
import type { CertificationTopic } from "@/lib/certificationTopics";
import type { CertificationTrack } from "@/lib/certificationTracks";

type CertificationTrackTemplateProps = {
  topics: CertificationTopic[];
  track: CertificationTrack;
};

export function CertificationTrackTemplate({
  topics,
  track,
}: CertificationTrackTemplateProps) {
  const topicLabel = topics.length === 1 ? "Topic" : "Topics";

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
              <p className="overview-label">Learning topics</p>
              <p className="article-meta-value">
                {topics.length} {topicLabel}
              </p>
            </div>
            <div>
              <p className="overview-label">Format</p>
              <p className="article-meta-value">Certification path</p>
            </div>
          </div>
        </header>

        <section className="track-content-section">
          <div className="section-heading snacks-list-heading">
            <p className="eyebrow">Study Topics</p>
            <h2 className="section-title">{track.name} learning path</h2>
          </div>

          {topics.length > 0 ? (
            <div className="cert-topic-grid">
              {topics.map((topic) => (
                <CertificationTopicCard topic={topic} key={topic.slug} />
              ))}
            </div>
          ) : (
            <div className="track-empty-state">
              <p className="category-badge">Coming Soon</p>
              <h3 className="track-empty-title">
                This track is being prepared.
              </h3>
              <p className="card-text">
                Structured certification topics will appear here once they are
                ready for revision.
              </p>
            </div>
          )}
        </section>
      </section>
    </main>
  );
}
