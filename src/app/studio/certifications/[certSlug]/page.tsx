import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StudioPageHeader } from "@/components/studio/StudioPageHeader";
import { StudioStatGrid } from "@/components/studio/StudioStatGrid";
import { StudioStatusBadge } from "@/components/studio/StudioStatusBadge";
import { certificationTracks } from "@/lib/certificationTracks";
import { requireStudioAdmin } from "@/lib/studio/auth";
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

function formatCount(count: number, singular: string, plural: string) {
  return `${count} ${count === 1 ? singular : plural}`;
}

export default async function StudioCertificationPage({
  params,
}: StudioCertificationPageProps) {
  await requireStudioAdmin();

  const { certSlug } = await params;
  const summary = getStudioCertificationSummaryBySlug(certSlug);

  if (!summary) {
    notFound();
  }

  return (
    <main className="page-shell studio-page">
      <section className="site-container studio-shell">
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
              label: "Domains",
              value: summary.domainCount,
            },
            {
              label: "Lessons",
              value: summary.lessonCount,
            },
            {
              label: "Concepts",
              value: summary.conceptCount,
            },
            {
              label: "Status",
              value: summary.status,
            },
          ]}
        />

        {summary.domains.length > 0 ? (
          <section aria-label="Certification domains" className="studio-domain-grid">
            {summary.domains.map((domain) => (
              <article className="studio-manager-card" key={domain.topic.slug}>
                <div className="studio-card-topline">
                  <p className="category-badge">
                    {`Domain ${domain.topic.topicNumber}`}
                  </p>
                  <StudioStatusBadge status={domain.status} />
                </div>

                <div className="studio-card-copy">
                  <h2 className="studio-card-title">{domain.topic.title}</h2>
                  <p className="card-text">{domain.topic.subtitle}</p>
                </div>

                <dl className="studio-mini-stats">
                  <div>
                    <dt>Lessons</dt>
                    <dd>
                      {formatCount(domain.lessonCount, "lesson", "lessons")}
                    </dd>
                  </div>
                  <div>
                    <dt>Concepts</dt>
                    <dd>
                      {formatCount(domain.conceptCount, "concept", "concepts")}
                    </dd>
                  </div>
                </dl>

                {domain.publicHref ? (
                  <Link className="studio-action-link" href={domain.publicHref}>
                    View
                  </Link>
                ) : null}
              </article>
            ))}
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
      </section>
    </main>
  );
}
