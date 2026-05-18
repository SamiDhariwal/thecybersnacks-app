const featuredProject = {
  category: "Microsoft 365 Security",
  title: "Microsoft 365 security hardening baseline",
  description:
    "A tenant hardening review covering MFA coverage, legacy authentication, admin roles, mailbox forwarding, external sharing, and audit logging.",
  tags: ["Microsoft 365", "Entra ID", "Defender", "SharePoint"],
  cta: "Review hardening plan",
};

const projects = [
  {
    category: "Governance",
    title: "Essential Eight uplift plan",
    description:
      "A practical gap review and staged improvement plan for patching, MFA, backups, application control, and admin privilege reduction.",
    tags: ["Essential Eight", "Patching", "MFA"],
    cta: "View uplift plan",
  },
  {
    category: "Endpoint Security",
    title: "WDAC deployment and application control",
    description:
      "A controlled Windows Defender Application Control pilot using audit mode, policy tuning, allow rules, and staged Intune deployment.",
    tags: ["WDAC", "Intune", "Application Control"],
    cta: "Explore WDAC pilot",
  },
  {
    category: "Awareness",
    title: "Phishing simulation and reporting campaign",
    description:
      "Realistic phishing scenarios paired with safe reporting guidance, quick follow-up lessons, and clear measures for improvement.",
    tags: ["Phishing", "User Training", "Reporting"],
    cta: "Open campaign plan",
  },
  {
    category: "Automation",
    title: "Intune remediation scripting pack",
    description:
      "Detection and remediation scripts for common endpoint issues such as missing settings, stale agents, risky local admins, and failed controls.",
    tags: ["Intune", "PowerShell", "Remediation"],
    cta: "View script pack",
  },
  {
    category: "Email Security",
    title: "Mailbox forwarding and inbox rule review",
    description:
      "A focused audit for suspicious forwarding, hidden inbox rules, external redirects, and mailbox settings often abused after account compromise.",
    tags: ["Exchange Online", "Defender", "PowerShell"],
    cta: "Review mailbox checks",
  },
  {
    category: "Identity Security",
    title: "Entra ID access review workflow",
    description:
      "A repeatable review process for stale accounts, privileged roles, guest users, group ownership, and sign-in risk signals.",
    tags: ["Entra ID", "Access Reviews", "Graph"],
    cta: "Study review workflow",
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
              Cybersecurity projects with real outcomes.
            </h1>
            <p className="lead-text">
              A professional snapshot of security projects, automation ideas,
              and uplift plans shaped for real teams and everyday risk
              reduction.
            </p>
            <div className="gold-divider" />
          </div>
        </div>

        <article className="featured-project">
          <div className="featured-project-copy">
            <p className="category-badge">{featuredProject.category}</p>
            <h2 className="section-title">{featuredProject.title}</h2>
            <p className="card-text">{featuredProject.description}</p>
            <div className="project-tags">
              {featuredProject.tags.map((tag) => (
                <span className="project-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <a className="button-link project-cta" href="/contact">
            {featuredProject.cta}
          </a>
        </article>

        <div className="section-heading">
          <p className="eyebrow">Portfolio Preview</p>
          <h2 className="section-title">Security projects with useful outcomes.</h2>
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
              <a className="project-card-link" href="/contact">
                {project.cta}
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
