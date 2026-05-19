import Link from "next/link";
import type {
  CertificationTopic,
  CertificationTopicConcept,
  CertificationTopicContentBlock,
  CertificationTopicLesson,
} from "@/lib/certificationTopics";
import type { CertificationTrack } from "@/lib/certificationTracks";

type CertificationConceptTemplateProps = {
  concept: CertificationTopicConcept;
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

export function CertificationConceptTemplate({
  concept,
  lesson,
  topic,
  track,
}: CertificationConceptTemplateProps) {
  return (
    <main className="page-shell certification-topic-page-shell">
      <article className="site-container certification-topic-page-stack">
        <header className="certification-topic-hero">
          <Link
            href={`/certifications/${track.slug}/${topic.slug}/${lesson.slug}`}
            className="article-back-link"
          >
            {`Back to ${lesson.title}`}
          </Link>

          <div className="certification-topic-hero-copy">
            <p className="category-badge">{`Concept ${concept.order}`}</p>
            <h1 className="certification-topic-heading">{concept.title}</h1>
            <p className="lead-text">{concept.summary}</p>
          </div>

          <div className="certification-topic-meta" aria-label="Concept details">
            <div>
              <p className="overview-label">Lesson</p>
              <p className="article-meta-value">{lesson.title}</p>
            </div>
            {concept.badge ? (
              <div>
                <p className="overview-label">Category</p>
                <p className="article-meta-value">{concept.badge}</p>
              </div>
            ) : null}
          </div>
        </header>

        <div className="certification-topic-layout">
          <div className="certification-topic-content">
            <article className="cert-study-card">
              <div className="cert-study-card-body">
                {renderContentBlocks(concept.blocks, concept.slug)}
              </div>

              {concept.scenario ? (
                <aside className="cert-scenario-box">
                  <p className="cert-callout-label">Scenario Example</p>
                  {renderContentBlocks(
                    concept.scenario,
                    `${concept.slug}-scenario`,
                  )}
                </aside>
              ) : null}

              {concept.memoryTip ? (
                <aside className="cert-memory-tip">
                  <p className="cert-callout-label">Easy Memory Tip</p>
                  <p>{concept.memoryTip}</p>
                </aside>
              ) : null}
            </article>
          </div>
        </div>
      </article>
    </main>
  );
}
