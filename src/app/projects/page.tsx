const projects = [
  {
    category: "Microsoft 365 Security",
    title: "Microsoft 365 hardening baseline",
    description:
      "A practical baseline for MFA coverage, admin roles, mailbox safety, external sharing, and audit logging.",
    status: "In Progress",
    tags: ["Microsoft 365", "Entra ID", "Defender"],
  },
  {
    category: "Endpoint Security",
    title: "Local admin risk reduction",
    description:
      "A focused endpoint review for reducing everyday admin access and tightening common device risk.",
    status: "Drafting",
    tags: ["Least Privilege", "Endpoint", "Intune"],
  },
  {
    category: "Email Security",
    title: "Suspicious mailbox rule review",
    description:
      "A simple review path for risky forwarding, hidden inbox rules, and mailbox settings often abused after account compromise.",
    status: "Planned",
    tags: ["Exchange Online", "Mailbox Rules", "Review"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="page-shell projects-page-shell">
      <section className="site-container section-stack projects-page-stack">
        <div className="projects-hero">
          <div className="projects-hero-copy">
            <p className="eyebrow">Projects</p>
            <h1 className="project-hero-heading">
              Security case studies in progress.
            </h1>
            <p className="lead-text">
              A compact view of practical write-ups currently being shaped.
            </p>
            <div className="gold-divider" />
          </div>
        </div>

        <div className="section-heading">
          <p className="eyebrow">Case Studies</p>
          <h2 className="section-title">No fake links. Just status.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card-header">
                <p className="category-badge">{project.category}</p>
              </div>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-text">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className="project-card-status">{project.status}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
