import Link from "next/link";
import {
  getCertificationLessonConcepts,
  type CertificationTopic,
  type CertificationTopicContentBlock,
  type CertificationTopicLesson,
} from "@/lib/certificationTopics";
import type { CertificationTrack } from "@/lib/certificationTracks";

type CertificationLessonTemplateProps = {
  lesson: CertificationTopicLesson;
  topic: CertificationTopic;
  track: CertificationTrack;
};

function renderContentBlocks(
  blocks: CertificationTopicContentBlock[],
  keyPrefix: string,
) {
  return blocks.map((block, index) => {
    const key = `${keyPrefix}-${index}`;

    if (block.type === "paragraph") {
      return <p key={key}>{block.text}</p>;
    }

    if (block.type === "bulletList") {
      return (
        <div className="cert-card-list-block" key={key}>
          {block.intro ? <p>{block.intro}</p> : null}
          <ul>
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      );
    }

    if (block.type === "quote") {
      return (
        <div className="cert-focus-quote" key={key}>
          <p className="cert-focus-label">{block.intro}</p>
          <blockquote>{block.text}</blockquote>
        </div>
      );
    }

    if (block.type === "table") {
      return (
        <div className="cert-table-wrap" key={key}>
          <table className="cert-comparison-table">
            <thead>
              <tr>
                {block.headers.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.join("-")}>
                  {row.map((cell) => (
                    <td key={cell}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    return (
      <section className="cert-card-subsection" key={key}>
        <h3>{block.title}</h3>
        {renderContentBlocks(block.blocks, key)}
      </section>
    );
  });
}

export function CertificationLessonTemplate({
  lesson,
  topic,
  track,
}: CertificationLessonTemplateProps) {
  const concepts = getCertificationLessonConcepts(lesson);
  const conceptLabel = concepts.length === 1 ? "concept" : "concepts";
  const hasLessonContent = lesson.blocks.length > 0 || Boolean(lesson.scenario);

  return (
    <main className="page-shell certification-topic-page-shell">
      <article className="site-container certification-topic-page-stack">
        <header className="certification-topic-hero">
          <Link
            href={`/certifications/${track.slug}/${topic.slug}`}
            className="article-back-link"
          >
            Back to Security Concepts and Practices
          </Link>

          <div className="certification-topic-hero-copy">
            <p className="category-badge">{`Lesson ${lesson.order}`}</p>
            <h1 className="certification-topic-heading">{lesson.title}</h1>
            <p className="lead-text">{lesson.summary}</p>
          </div>

          <div className="certification-topic-meta" aria-label="Lesson details">
            <div>
              <p className="overview-label">Domain</p>
              <p className="article-meta-value">{topic.title}</p>
            </div>
            <div>
              <p className="overview-label">Concepts</p>
              <p className="article-meta-value">
                {`${concepts.length} ${conceptLabel}`}
              </p>
            </div>
          </div>
        </header>

        {hasLessonContent ? (
          <div className="certification-topic-layout">
            <div className="certification-topic-content">
              <article className="cert-study-card cert-lesson-foundation-card">
                <h2>{lesson.title}</h2>
                <div className="cert-study-card-body">
                  {renderContentBlocks(lesson.blocks, lesson.slug)}
                </div>

                {lesson.scenario ? (
                  <aside className="cert-scenario-box">
                    <p className="cert-callout-label">Scenario Example</p>
                    {renderContentBlocks(
                      lesson.scenario,
                      `${lesson.slug}-scenario`,
                    )}
                  </aside>
                ) : null}
              </article>
            </div>
          </div>
        ) : null}

        <section
          className="cert-concept-menu-grid"
          aria-label={`${lesson.title} concepts`}
        >
          {concepts.map((concept) => {
            const isMainTopic = concept.slug === lesson.slug;

            return (
              <Link
                className={`cert-concept-menu-card${
                  isMainTopic ? " cert-main-topic-card" : ""
                }`}
                href={`/certifications/${track.slug}/${topic.slug}/${lesson.slug}/${concept.slug}`}
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

                <span className="track-card-cta">
                  {isMainTopic ? "Open topic" : "Open concept"}
                </span>
              </Link>
            );
          })}
        </section>
      </article>
    </main>
  );
}
