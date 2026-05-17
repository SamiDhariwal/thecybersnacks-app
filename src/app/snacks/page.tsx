const snackTopics = [
  {
    title: "Security Basics",
    text: "Short, practical explanations for core cyber concepts.",
  },
  {
    title: "Threat Notes",
    text: "Clean summaries of risks, patterns, and defensive thinking.",
  },
  {
    title: "Tool Walkthroughs",
    text: "Beginner-friendly notes for tools and workflows.",
  },
];

export default function SnacksPage() {
  return (
    <main className="page-shell">
      <section className="site-container section-stack">
        <p className="eyebrow">Snacks</p>
        <h1 className="display-heading">Small cyber lessons with premium polish.</h1>
        <p className="lead-text">
          This page will hold bite-sized learning pieces for people who want
          clear, useful security knowledge without the noise.
        </p>
        <div className="gold-divider" />

        <div className="page-grid mt-8">
          {snackTopics.map((topic) => (
            <article className="content-card" key={topic.title}>
              <h2 className="card-title">{topic.title}</h2>
              <p className="card-text">{topic.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
