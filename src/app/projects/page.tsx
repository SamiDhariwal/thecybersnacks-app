const projectAreas = [
  {
    title: "Labs",
    text: "Hands-on experiments and controlled practice environments.",
  },
  {
    title: "Builds",
    text: "Security-focused apps, scripts, and learning utilities.",
  },
  {
    title: "Case Studies",
    text: "Plain-English breakdowns of what was built and learned.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <section className="site-container section-stack">
        <p className="eyebrow">Projects</p>
        <h1 className="display-heading">A refined home for cyber builds.</h1>
        <p className="lead-text">
          This placeholder will become a collection of projects, labs, and
          technical work from The Cyber Snacks.
        </p>
        <div className="gold-divider" />

        <div className="page-grid mt-8">
          {projectAreas.map((project) => (
            <article className="content-card" key={project.title}>
              <h2 className="card-title">{project.title}</h2>
              <p className="card-text">{project.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
