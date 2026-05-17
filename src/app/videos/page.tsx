const youtubeChannelUrl = "https://www.youtube.com/@TheCyberSnacks";

const featuredVideo = {
  category: "Microsoft 365 Security",
  title: "M365 hardening checklist for practical teams",
  duration: "12 min",
  description:
    "A focused walkthrough of the first controls to review in Microsoft 365, from MFA coverage to sharing settings and admin roles.",
  cta: "Watch on YouTube",
};

const channelOverview = [
  {
    label: "Channel focus",
    items: ["Cyber basics", "M365 security", "Practical projects"],
  },
  {
    label: "Formats",
    items: ["Explainers", "Walkthroughs", "Checklists"],
  },
  {
    label: "Security domains",
    items: ["Identity", "Email", "Endpoint"],
  },
  {
    label: "Best for",
    items: ["Learners", "Small teams", "IT admins"],
  },
];

const videos = [
  {
    category: "Awareness",
    title: "How to spot a polished phishing email",
    duration: "7 min",
    description:
      "A quick breakdown of sender checks, link previews, urgency cues, and the small details attackers hope you miss.",
    cta: "View episode",
  },
  {
    category: "Automation",
    title: "PowerShell access review starter workflow",
    duration: "10 min",
    description:
      "A simple media walkthrough for turning user and group exports into review-ready security notes.",
    cta: "View workflow",
  },
  {
    category: "Endpoint Security",
    title: "WDAC explained without the noise",
    duration: "9 min",
    description:
      "A plain-English look at application control, audit mode, rollout planning, and why careful pilots matter.",
    cta: "Watch explainer",
  },
  {
    category: "Governance",
    title: "Essential Eight quick wins for small teams",
    duration: "8 min",
    description:
      "A practical overview of the controls that can reduce risk quickly before deeper maturity work begins.",
    cta: "Open checklist",
  },
  {
    category: "Email Security",
    title: "Mailbox forwarding rules worth checking",
    duration: "6 min",
    description:
      "A focused lesson on suspicious forwarding, inbox rules, external redirects, and why mailbox reviews matter.",
    cta: "View lesson",
  },
  {
    category: "Detection",
    title: "Suspicious sign-in triage in Microsoft Entra",
    duration: "11 min",
    description:
      "A calm triage flow for checking sign-in risk, device context, location clues, and next response steps.",
    cta: "Watch triage",
  },
];

export default function VideosPage() {
  return (
    <main className="page-shell videos-page-shell">
      <section className="site-container section-stack videos-page-stack">
        <div className="videos-hero">
          <div className="videos-hero-copy">
            <p className="eyebrow">Videos</p>
            <h1 className="video-hero-heading">
              Cybersecurity media for sharper decisions.
            </h1>
            <p className="lead-text">
              Structured video lessons, walkthroughs, and checklists designed
              to make practical security work easier to understand.
            </p>
            <div className="gold-divider" />
          </div>

          <aside className="videos-overview-panel" aria-label="Channel overview">
            <p className="overview-panel-title">Channel overview</p>
            <div className="overview-list">
              {channelOverview.map((section) => (
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

        <article className="featured-video">
          <div className="featured-video-preview" aria-hidden="true">
            <span className="video-play-mark" />
          </div>

          <div className="featured-video-copy">
            <div className="video-meta-row">
              <p className="category-badge">{featuredVideo.category}</p>
              <p className="video-duration">{featuredVideo.duration}</p>
            </div>
            <h2 className="section-title">{featuredVideo.title}</h2>
            <p className="card-text">{featuredVideo.description}</p>
            <a
              className="button-link video-cta"
              href={youtubeChannelUrl}
              target="_blank"
              rel="noreferrer"
            >
              {featuredVideo.cta}
            </a>
          </div>
        </article>

        <div className="section-heading">
          <p className="eyebrow">Latest Videos</p>
          <h2 className="section-title">
            Premium cyber lessons ready for the channel.
          </h2>
        </div>

        <div className="video-grid">
          {videos.map((video) => (
            <article className="video-card" key={video.title}>
              <div className="video-card-preview" aria-hidden="true">
                <span className="video-play-mark small" />
              </div>
              <div className="video-card-body">
                <div className="video-meta-row">
                  <p className="category-badge">{video.category}</p>
                  <p className="video-duration">{video.duration}</p>
                </div>
                <h3 className="card-title">{video.title}</h3>
                <p className="card-text">{video.description}</p>
                <a
                  className="video-card-link"
                  href={youtubeChannelUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {video.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
