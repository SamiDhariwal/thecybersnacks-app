import type { Metadata } from "next";
import Link from "next/link";
import { StudioAdminShell } from "@/components/studio/StudioAdminShell";
import { StudioPageHeader } from "@/components/studio/StudioPageHeader";
import { StudioStatGrid } from "@/components/studio/StudioStatGrid";
import { getStudioContentTotals } from "@/lib/studio/certificationMetrics";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Studio | The Cyber Snacks",
};

export default async function StudioPage() {
  const totals = getStudioContentTotals();

  return (
    <StudioAdminShell activeSection="dashboard">
      <StudioPageHeader
        description="A read-only command center for The Cyber Snacks learning platform."
        eyebrow="Dashboard"
        title="Welcome to Cyber Snacks Studio"
      />

      <StudioStatGrid
        stats={[
          {
            icon: "C",
            label: "Total certifications",
            value: totals.certificationCount,
          },
          {
            icon: "D",
            label: "Total domains",
            value: totals.domainCount,
          },
          {
            icon: "L",
            label: "Total lessons",
            value: totals.lessonCount,
          },
          {
            icon: "#",
            label: "Total concepts",
            value: totals.conceptCount,
          },
        ]}
      />

      <section className="studio-quick-grid" aria-label="Quick access">
        <article className="studio-feature-card">
          <div className="studio-card-copy">
            <p className="category-badge">Certifications</p>
            <h2 className="studio-card-title">Certification content</h2>
            <p className="card-text">
              Review tracks, domains, lessons, concepts, and prepared content
              block structure.
            </p>
          </div>

          <Link className="studio-action-link" href="/studio/certifications">
            Open Certifications
          </Link>
        </article>

        <article className="studio-feature-card">
          <div className="studio-card-copy">
            <p className="category-badge">Projects</p>
            <h2 className="studio-card-title">Project library</h2>
            <p className="card-text">
              Project content management will sit here once the CMS model is
              connected.
            </p>
          </div>

          <span className="studio-action-link is-disabled">Coming later</span>
        </article>

        <article className="studio-feature-card">
          <div className="studio-card-copy">
            <p className="category-badge">Videos</p>
            <h2 className="studio-card-title">Video catalog</h2>
            <p className="card-text">
              Video publishing and references will be organized here in a later
              Studio pass.
            </p>
          </div>

          <span className="studio-action-link is-disabled">Coming later</span>
        </article>
      </section>

      <section className="studio-dashboard-grid">
        <article className="studio-placeholder-card">
          <p className="category-badge">Projects</p>
          <div className="studio-card-copy">
            <h2 className="studio-card-title">Projects coming later</h2>
            <p className="card-text">
              The public projects page remains static. CMS controls will be
              added after database editing is designed.
            </p>
          </div>
        </article>

        <article className="studio-placeholder-card">
          <p className="category-badge">Videos</p>
          <div className="studio-card-copy">
            <h2 className="studio-card-title">Videos coming later</h2>
            <p className="card-text">
              Video references are intentionally read-only until the media
              workflow is ready.
            </p>
          </div>
        </article>
      </section>

      <section className="studio-activity-panel">
        <div className="studio-card-copy">
          <p className="category-badge">Recent Activity</p>
          <h2 className="studio-card-title">No CMS activity yet</h2>
          <p className="card-text">
            Activity will appear here after database-backed editing,
            publishing, and media workflows are introduced.
          </p>
        </div>
      </section>

      <section className="studio-placeholder-card">
        <p className="category-badge">Read-only Mode</p>
        <div className="studio-card-copy">
          <h2 className="studio-card-title">Database editing coming later</h2>
          <p className="card-text">
            This Studio currently reads from static certification content only.
            Create, edit, delete, media, and database publishing workflows will
            be added after the data model is ready.
          </p>
        </div>
      </section>
    </StudioAdminShell>
  );
}
