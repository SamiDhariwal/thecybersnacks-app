import Link from "next/link";
import type { SnackArticle } from "@/lib/snackArticles";

type SnackArticleTemplateProps = {
  article: SnackArticle;
};

export function SnackArticleTemplate({ article }: SnackArticleTemplateProps) {
  const checklistHeadingId = `${article.slug}-checklist-heading`;
  const takeawayHeadingId = `${article.slug}-takeaway-heading`;

  return (
    <main className="page-shell snack-article-page-shell">
      <article className="site-container snack-article-page-stack">
        <header className="snack-article-hero">
          <Link href="/snacks" className="article-back-link">
            Back to Snacks
          </Link>

          <div className="snack-article-hero-copy">
            <p className="category-badge">{article.category}</p>
            <h1 className="snack-article-heading">{article.title}</h1>
            <p className="lead-text">{article.heroDescription}</p>
          </div>

          <div className="snack-article-meta" aria-label="Article details">
            <div>
              <p className="overview-label">Read time</p>
              <p className="article-meta-value">{article.readTime}</p>
            </div>
            <div>
              <p className="overview-label">Status</p>
              <p className="article-meta-value">{article.publishedText}</p>
            </div>
          </div>
        </header>

        <div className="snack-article-layout">
          <div className="snack-article-content">
            <section className="article-section">
              {article.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            {article.sections.map((section) => (
              <section className="article-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <section
              className="article-checklist"
              aria-labelledby={checklistHeadingId}
            >
              <h2 id={checklistHeadingId}>{article.checklist.heading}</h2>
              <ul>
                {article.checklist.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section
              className="article-takeaway"
              aria-labelledby={takeawayHeadingId}
            >
              <p className="eyebrow">{article.takeaway.eyebrow}</p>
              <h2 id={takeawayHeadingId}>{article.takeaway.heading}</h2>
              <p>{article.takeaway.body}</p>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
