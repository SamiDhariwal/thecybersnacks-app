import { SnackCard } from "@/components/SnackCard";
import { snackArticles } from "@/lib/snackArticles";

export default function SnacksPage() {
  return (
    <main className="page-shell">
      <section className="site-container section-stack snacks-page-stack">
        <div className="snacks-hero">
          <p className="eyebrow">Snacks</p>
          <h1 className="display-heading">
            Practical cyber Snacks.
          </h1>
          <p className="lead-text">
            Short security notes for sharper everyday habits.
          </p>
          <div className="gold-divider" />
        </div>

        <div className="section-heading snacks-list-heading">
          <p className="eyebrow">Articles</p>
          <h2 className="section-title">Latest Cyber Snacks</h2>
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
