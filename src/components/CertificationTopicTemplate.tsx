import Link from "next/link";
import {
  getCertificationTopicConcepts,
  type CertificationTopic,
} from "@/lib/certificationTopics";
import type { CertificationTrack } from "@/lib/certificationTracks";

type CertificationTopicTemplateProps = {
  topic: CertificationTopic;
  track: CertificationTrack;
};

export function CertificationTopicTemplate({
  topic,
  track,
}: CertificationTopicTemplateProps) {
  const concepts = getCertificationTopicConcepts(topic);
  const conceptLabel = concepts.length === 1 ? "concept" : "concepts";

  return (
    <main className="page-shell certification-topic-page-shell">
      <article className="site-container certification-topic-page-stack">
        <header className="certification-topic-hero">
          <Link
            href={`/certifications/${track.slug}`}
            className="article-back-link"
          >
            {`Back to ${track.name}`}
          </Link>

          <div className="certification-topic-hero-copy">
            <p className="category-badge">{topic.category}</p>
            <h1 className="certification-topic-heading">{topic.title}</h1>
            <p className="lead-text">{topic.subtitle}</p>
          </div>

          <div className="certification-topic-meta" aria-label="Topic details">
            <div>
              <p className="overview-label">Read time</p>
              <p className="article-meta-value">{topic.readTime}</p>
            </div>
            <div>
              <p className="overview-label">Concepts</p>
              <p className="article-meta-value">
                {`${concepts.length} ${conceptLabel}`}
              </p>
            </div>
          </div>
        </header>

        <section
          className="cert-concept-menu-grid"
          aria-label="Security Concepts and Practices concepts"
        >
          {concepts.map((concept) => (
            <Link
              className="cert-concept-menu-card"
              href={`/certifications/${track.slug}/${topic.slug}/${concept.slug}`}
              key={concept.slug}
            >
              <div className="cert-concept-menu-card-header">
                <p className="category-badge">{`Concept ${concept.order}`}</p>
                {concept.badge ? (
                  <p className="cert-concept-menu-badge">{concept.badge}</p>
                ) : null}
              </div>

              <div className="cert-concept-menu-card-copy">
                <h2>{concept.title}</h2>
                <p>{concept.summary}</p>
              </div>

              <span className="track-card-cta">Open concept</span>
            </Link>
          ))}
        </section>
      </article>
    </main>
  );
}
