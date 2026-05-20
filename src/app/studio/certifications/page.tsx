import type { Metadata } from "next";
import Link from "next/link";
import { StudioPageHeader } from "@/components/studio/StudioPageHeader";
import { StudioStatusBadge } from "@/components/studio/StudioStatusBadge";
import { requireStudioAdmin } from "@/lib/studio/auth";
import { getStudioCertificationSummaries } from "@/lib/studio/certificationMetrics";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Certification Manager | The Cyber Snacks",
};

function formatCount(count: number, singular: string, plural: string) {
  return `${count} ${count === 1 ? singular : plural}`;
}

export default async function StudioCertificationsPage() {
  await requireStudioAdmin();
  const summaries = getStudioCertificationSummaries();

  return (
    <main className="page-shell studio-page">
      <section className="site-container studio-shell">
        <StudioPageHeader
          backHref="/studio"
          backLabel="Back to Studio"
          description="A read-only view of each certification track and its current content coverage."
          eyebrow="Certifications"
          title="Certification Manager"
        />

        <section
          aria-label="Certification tracks"
          className="studio-certification-grid"
        >
          {summaries.map((summary) => (
            <article className="studio-manager-card" key={summary.track.slug}>
              <div className="studio-card-topline">
                <p className="category-badge">{summary.track.name}</p>
                <StudioStatusBadge status={summary.status} />
              </div>

              <div className="studio-card-copy">
                <h2 className="studio-card-title">{summary.track.name}</h2>
                <p className="studio-card-subtitle">
                  {summary.track.certification}
                </p>
              </div>

              <dl className="studio-mini-stats">
                <div>
                  <dt>Domains</dt>
                  <dd>{formatCount(summary.domainCount, "domain", "domains")}</dd>
                </div>
                <div>
                  <dt>Lessons</dt>
                  <dd>{formatCount(summary.lessonCount, "lesson", "lessons")}</dd>
                </div>
                <div>
                  <dt>Concepts</dt>
                  <dd>
                    {formatCount(summary.conceptCount, "concept", "concepts")}
                  </dd>
                </div>
              </dl>

              <Link
                className="studio-action-link"
                href={`/studio/certifications/${summary.track.slug}`}
              >
                Open
              </Link>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
