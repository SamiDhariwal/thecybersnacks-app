import type { Metadata } from "next";
import Link from "next/link";
import { StudioAdminShell } from "@/components/studio/StudioAdminShell";
import { StudioPageHeader } from "@/components/studio/StudioPageHeader";
import { StudioStatusBadge } from "@/components/studio/StudioStatusBadge";
import { getStudioCertificationSummaries } from "@/lib/studio/certificationMetrics";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Certification Manager | The Cyber Snacks",
};

export default async function StudioCertificationsPage() {
  const summaries = getStudioCertificationSummaries();

  return (
    <StudioAdminShell activeSection="certifications">
      <StudioPageHeader
        description="A read-only view of each certification track and its current content coverage."
        eyebrow="Certifications"
        title="Certification Manager"
      />

      <section className="studio-list-panel" aria-label="Certification tracks">
        <div className="studio-list-panel-header">
          <div>
            <p className="category-badge">All Certifications</p>
            <h2 className="studio-card-title">Certification library</h2>
          </div>

          <section
            className="studio-control-bar"
            aria-label="Certification tools"
          >
            <label className="studio-search-field">
              <span>Search</span>
              <input
                aria-label="Search certifications"
                placeholder="Search certifications..."
                readOnly
                type="search"
              />
            </label>

            <label className="studio-sort-field">
              <span>Sort</span>
              <select aria-label="Sort certifications" disabled>
                <option>Name</option>
                <option>Status</option>
                <option>Most content</option>
              </select>
            </label>
          </section>
        </div>

        <p className="studio-inline-note">Database editing coming later</p>

        <div className="studio-cms-list">
          {summaries.map((summary) => (
            <article
              className={`studio-manager-row ${
                summary.status === "Empty" ? "is-muted" : ""
              }`}
              key={summary.track.slug}
            >
              <span aria-hidden="true" className="studio-row-icon">
                {summary.track.name.slice(0, 1)}
              </span>

              <div className="studio-row-main">
                <div className="studio-row-titleline">
                  <h2>{summary.track.name}</h2>
                  <StudioStatusBadge status={summary.status} />
                </div>
                <p>{summary.track.certification}</p>
                <p className="studio-row-description">
                  {summary.status === "Empty"
                    ? "No static domains have been added for this track yet."
                    : summary.track.description}
                </p>
              </div>

              <dl
                className="studio-row-metrics"
                aria-label={`${summary.track.name} content counts`}
              >
                <div>
                  <dt>Domains</dt>
                  <dd>{summary.domainCount}</dd>
                </div>
                <div>
                  <dt>Lessons</dt>
                  <dd>{summary.lessonCount}</dd>
                </div>
                <div>
                  <dt>Concepts</dt>
                  <dd>{summary.conceptCount}</dd>
                </div>
              </dl>

              {summary.status === "Empty" ? (
                <span className="studio-action-link is-disabled">
                  No content yet
                </span>
              ) : (
                <Link
                  className="studio-action-link"
                  href={`/studio/certifications/${summary.track.slug}`}
                >
                  View track
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>
    </StudioAdminShell>
  );
}
