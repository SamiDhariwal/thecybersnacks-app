const featuredProject = {
  category: "Microsoft 365 Security",
  title: "M365 security hardening baseline",
  description:
    "A practical hardening project focused on reducing common Microsoft 365 risks with MFA improvements, safer sharing defaults, audit visibility, and admin role review.",
  tags: ["Microsoft 365", "MFA", "Conditional Access", "Defender"],
  cta: "Review hardening scope",
};

const heroOverview = [
  {
    label: "Focus areas",
    items: ["Automation", "Hardening", "Risk uplift"],
  },
  {
    label: "Technologies",
    items: ["PowerShell", "Intune", "Microsoft 365"],
  },
  {
    label: "Project categories",
    items: ["Deployment", "Awareness", "Detection"],
  },
  {
    label: "Security domains",
    items: ["Identity", "Endpoint", "Cloud security"],
  },
];

const projects = [
  {
    category: "Automation",
    title: "PowerShell user access review toolkit",
    description:
      "A lightweight script set for exporting users, groups, mailbox permissions, and stale accounts into clear review-ready reports.",
    tags: ["PowerShell", "Microsoft Graph", "Entra ID"],
    cta: "View automation idea",
  },
  {
    category: "Endpoint Security",
    title: "WDAC pilot deployment plan",
    description:
      "A staged Windows Defender Application Control rollout model with audit mode, policy testing, exception handling, and deployment notes.",
    tags: ["WDAC", "Intune", "Windows Security"],
    cta: "Explore deployment plan",
  },
  {
    category: "Governance",
    title: "Essential Eight uplift roadmap",
    description:
      "A maturity-focused improvement plan covering patching, MFA, backups, application control, and practical prioritisation for smaller teams.",
    tags: ["Essential Eight", "Risk", "Maturity"],
    cta: "See uplift approach",
  },
  {
    category: "Awareness",
    title: "Phishing simulation campaign",
    description:
      "A safe awareness exercise using realistic email scenarios, clear reporting guidance, and follow-up lessons for better user decisions.",
    tags: ["Phishing", "Training", "Reporting"],
    cta: "Open campaign outline",
  },
  {
    category: "Cloud Security",
    title: "M365 secure collaboration review",
    description:
      "A focused review of external sharing, Teams guest access, mailbox forwarding, and alerting so collaboration stays useful and controlled.",
    tags: ["SharePoint", "Teams", "Defender"],
    cta: "Review collaboration controls",
  },
  {
    category: "Detection",
    title: "Suspicious sign-in triage workflow",
    description:
      "A simple analyst workflow for checking risky sign-ins, impossible travel, device context, user impact, and next response actions.",
    tags: ["Entra ID", "Detection", "Incident Response"],
    cta: "Study triage workflow",
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

          <aside className="projects-overview-panel" aria-label="Project overview">
            <p className="overview-panel-title">Portfolio focus</p>
            <div className="overview-list">
              {heroOverview.map((section) => (
                <div className="overview-item" key={section.label}>
                  <p className="overview-label">{section.label}</p>
                  <div className="overview-tags">
                    {section.items.map((item) => (
                      <span className="overview-tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>
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
