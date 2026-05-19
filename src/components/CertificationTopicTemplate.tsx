import Link from "next/link";
import {
  getCertificationTopicLessons,
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
  const lessons = getCertificationTopicLessons(topic);
  const lessonLabel = lessons.length === 1 ? "lesson" : "lessons";

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
              <p className="overview-label">Lessons</p>
              <p className="article-meta-value">
                {`${lessons.length} ${lessonLabel}`}
              </p>
            </div>
          </div>
        </header>

        <section
          className="cert-concept-menu-grid"
          aria-label="Security Concepts and Practices lessons"
        >
          {lessons.map((lesson) => (
            <Link
              className="cert-concept-menu-card cert-lesson-menu-card"
              href={`/certifications/${track.slug}/${topic.slug}/${lesson.slug}`}
              key={lesson.slug}
            >
              <div className="cert-concept-menu-card-header">
                <p className="category-badge">{`Lesson ${lesson.order}`}</p>
                {lesson.badge ? (
                  <p className="cert-concept-menu-badge">{lesson.badge}</p>
                ) : null}
              </div>

              <div className="cert-concept-menu-card-copy">
                <h2>{lesson.title}</h2>
                <p>{lesson.summary}</p>
              </div>

              <span className="track-card-cta">Open lesson</span>
            </Link>
          ))}
        </section>
      </article>
    </main>
  );
}
