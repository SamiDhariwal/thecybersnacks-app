import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StudioAdminShell } from "@/components/studio/StudioAdminShell";
import { StudioBreadcrumbs } from "@/components/studio/StudioBreadcrumbs";
import { StudioPageHeader } from "@/components/studio/StudioPageHeader";
import { StudioStatGrid } from "@/components/studio/StudioStatGrid";
import { StudioStatusBadge } from "@/components/studio/StudioStatusBadge";
import { certificationTracks } from "@/lib/certificationTracks";
import { getStudioCertificationSummaryBySlug } from "@/lib/studio/certificationMetrics";

type StudioCertificationRouteParams = {
  certSlug: string;
};

type StudioCertificationPageProps = {
  params: Promise<StudioCertificationRouteParams>;
};

export const dynamic = "force-dynamic";

export function generateStaticParams(): StudioCertificationRouteParams[] {
  return certificationTracks.map((track) => ({
    certSlug: track.slug,
  }));
}

export async function generateMetadata({
  params,
}: StudioCertificationPageProps): Promise<Metadata> {
  const { certSlug } = await params;
  const summary = getStudioCertificationSummaryBySlug(certSlug);

  if (!summary) {
    return {
      title: "Certification Not Found | The Cyber Snacks",
    };
  }

  return {
    title: `${summary.track.certification} Studio | The Cyber Snacks`,
  };
}

export default async function StudioCertificationPage({
  params,
}: StudioCertificationPageProps) {
  const { certSlug } = await params;
  const summary = getStudioCertificationSummaryBySlug(certSlug);

  if (!summary) {
    notFound();
  }

  return (
    <StudioAdminShell activeSection="certifications">
      <StudioBreadcrumbs
        items={[
          {
            href: "/studio",
            label: "Dashboard",
          },
          {
            href: "/studio/certifications",
            label: "Certifications",
          },
          {
            label: summary.track.name,
          },
        ]}
      />

      <StudioPageHeader
        backHref="/studio/certifications"
        backLabel="Back to Certifications"
        description={summary.track.description}
        eyebrow={summary.track.name}
        title={summary.track.certification}
      />

      <StudioStatGrid
        stats={[
          {
            icon: "D",
            label: "Domains",
            value: summary.domainCount,
          },
          {
            icon: "L",
            label: "Lessons",
            value: summary.lessonCount,
          },
          {
            icon: "#",
            label: "Concepts",
            value: summary.conceptCount,
          },
          {
            icon: "S",
            label: "Status",
            value: summary.status,
          },
        ]}
      />

      {summary.domains.length > 0 ? (
        <section
          className="studio-list-panel"
          aria-label="Certification domains"
        >
          <div className="studio-list-panel-header">
            <div>
              <p className="category-badge">Domain hierarchy</p>
              <h2 className="studio-card-title">Domains</h2>
            </div>
            <span className="studio-list-count">
              {summary.domains.length} total
            </span>
          </div>

          <div className="studio-cms-list">
            {summary.domains.map((domain) => (
              <article className="studio-manager-row" key={domain.topic.slug}>
                <span aria-hidden="true" className="studio-row-icon">
                  {domain.topic.topicNumber}
                </span>

                <div className="studio-row-main">
                  <div className="studio-row-titleline">
                    <h2>{domain.topic.title}</h2>
                    <StudioStatusBadge status={domain.status} />
                  </div>
                  <p>{`Domain ${domain.topic.topicNumber}`}</p>
                  <p className="studio-row-description">
                    {domain.topic.subtitle}
                  </p>
                </div>

                <dl className="studio-row-metrics">
                  <div>
                    <dt>Lessons</dt>
                    <dd>{domain.lessonCount}</dd>
                  </div>
                  <div>
                    <dt>Concepts</dt>
                    <dd>{domain.conceptCount}</dd>
                  </div>
                </dl>

                {domain.lessonCount > 0 ? (
                  <Link className="studio-action-link" href={domain.studioHref}>
                    View domain
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      ) : (
        <section className="studio-empty-state">
          <p className="category-badge">{summary.status}</p>
          <h2 className="studio-card-title">
            {`${summary.track.name} content is not populated yet.`}
          </h2>
          <p className="card-text">
            Domains, lessons, and concepts will appear here once static
            certification content is added to the site.
          </p>
        </section>
      )}
    </StudioAdminShell>
  );
}
