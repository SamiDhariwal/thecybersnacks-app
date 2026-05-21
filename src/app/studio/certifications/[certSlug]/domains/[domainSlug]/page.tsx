import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StudioAdminShell } from "@/components/studio/StudioAdminShell";
import { StudioBreadcrumbs } from "@/components/studio/StudioBreadcrumbs";
import { StudioPageHeader } from "@/components/studio/StudioPageHeader";
import { StudioStatGrid } from "@/components/studio/StudioStatGrid";
import { StudioStatusBadge } from "@/components/studio/StudioStatusBadge";
import { getStudioDomainSummary } from "@/lib/studio/certificationMetrics";

type StudioDomainRouteParams = {
  certSlug: string;
  domainSlug: string;
};

type StudioDomainPageProps = {
  params: Promise<StudioDomainRouteParams>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: StudioDomainPageProps): Promise<Metadata> {
  const { certSlug, domainSlug } = await params;
  const summary = getStudioDomainSummary(certSlug, domainSlug);

  if (!summary) {
    return {
      title: "Domain Not Found | The Cyber Snacks",
    };
  }

  return {
    title: `${summary.domain.topic.title} Studio | The Cyber Snacks`,
  };
}

export default async function StudioDomainPage({
  params,
}: StudioDomainPageProps) {
  const { certSlug, domainSlug } = await params;
  const summary = getStudioDomainSummary(certSlug, domainSlug);

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
            href: `/studio/certifications/${summary.certification.track.slug}`,
            label: summary.certification.track.name,
          },
          {
            label: `Domain ${summary.domain.topic.topicNumber}`,
          },
        ]}
      />

      <StudioPageHeader
        backHref={`/studio/certifications/${summary.certification.track.slug}`}
        backLabel={`Back to ${summary.certification.track.name}`}
        description={summary.domain.topic.subtitle}
        eyebrow={summary.domain.topic.category}
        title={summary.domain.topic.title}
      />

      <StudioStatGrid
        stats={[
          {
            icon: "L",
            label: "Lessons",
            value: summary.domain.lessonCount,
          },
          {
            icon: "#",
            label: "Concepts",
            value: summary.domain.conceptCount,
          },
          {
            icon: "S",
            label: "Status",
            value: summary.domain.status,
          },
        ]}
      />

      <section className="studio-list-panel" aria-label="Lessons">
        <div className="studio-list-panel-header">
          <div>
            <p className="category-badge">Nested under this domain</p>
            <h2 className="studio-card-title">Lessons</h2>
          </div>
          <span className="studio-list-count">
            {summary.lessons.length} total
          </span>
        </div>

        <div className="studio-cms-list">
          {summary.lessons.map((lesson) => (
            <article className="studio-manager-row" key={lesson.lesson.slug}>
              <span aria-hidden="true" className="studio-row-icon">
                {lesson.lesson.order}
              </span>

              <div className="studio-row-main">
                <div className="studio-row-titleline">
                  <h2>{lesson.lesson.title}</h2>
                  <StudioStatusBadge status={lesson.status} />
                </div>
                <p>{`Lesson ${lesson.lesson.order}`}</p>
                <p className="studio-row-description">
                  {lesson.lesson.summary}
                </p>
              </div>

              <dl className="studio-row-metrics">
                <div>
                  <dt>Concepts</dt>
                  <dd>{lesson.conceptCount}</dd>
                </div>
              </dl>

              <Link className="studio-action-link" href={lesson.studioHref}>
                View lesson
              </Link>
            </article>
          ))}
        </div>
      </section>
    </StudioAdminShell>
  );
}
