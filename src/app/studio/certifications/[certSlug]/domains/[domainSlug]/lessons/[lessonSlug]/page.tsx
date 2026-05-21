import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StudioAdminShell } from "@/components/studio/StudioAdminShell";
import { StudioBreadcrumbs } from "@/components/studio/StudioBreadcrumbs";
import { StudioPageHeader } from "@/components/studio/StudioPageHeader";
import { StudioStatGrid } from "@/components/studio/StudioStatGrid";
import { StudioStatusBadge } from "@/components/studio/StudioStatusBadge";
import { getStudioLessonSummary } from "@/lib/studio/certificationMetrics";

type StudioLessonRouteParams = {
  certSlug: string;
  domainSlug: string;
  lessonSlug: string;
};

type StudioLessonPageProps = {
  params: Promise<StudioLessonRouteParams>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: StudioLessonPageProps): Promise<Metadata> {
  const { certSlug, domainSlug, lessonSlug } = await params;
  const summary = getStudioLessonSummary(certSlug, domainSlug, lessonSlug);

  if (!summary) {
    return {
      title: "Lesson Not Found | The Cyber Snacks",
    };
  }

  return {
    title: `${summary.lesson.lesson.title} Studio | The Cyber Snacks`,
  };
}

export default async function StudioLessonPage({
  params,
}: StudioLessonPageProps) {
  const { certSlug, domainSlug, lessonSlug } = await params;
  const summary = getStudioLessonSummary(certSlug, domainSlug, lessonSlug);

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
            href: summary.domain.studioHref,
            label: `Domain ${summary.domain.topic.topicNumber}`,
          },
          {
            label: `Lesson ${summary.lesson.lesson.order}`,
          },
        ]}
      />

      <StudioPageHeader
        backHref={summary.domain.studioHref}
        backLabel={`Back to Domain ${summary.domain.topic.topicNumber}`}
        description={summary.lesson.lesson.summary}
        eyebrow={`Lesson ${summary.lesson.lesson.order}`}
        title={summary.lesson.lesson.title}
      />

      <StudioStatGrid
        stats={[
          {
            icon: "#",
            label: "Concepts",
            value: summary.concepts.length,
          },
          {
            icon: "B",
            label: "Content blocks",
            value: summary.concepts.reduce((total, concept) => {
              return total + concept.blockCount;
            }, 0),
          },
          {
            icon: "S",
            label: "Status",
            value: summary.lesson.status,
          },
        ]}
      />

      <section className="studio-list-panel" aria-label="Concepts">
        <div className="studio-list-panel-header">
          <div>
            <p className="category-badge">Nested under this lesson</p>
            <h2 className="studio-card-title">Concepts</h2>
          </div>
          <span className="studio-list-count">
            {summary.concepts.length} total
          </span>
        </div>

        <div className="studio-cms-list">
          {summary.concepts.map((concept) => (
            <article className="studio-manager-row" key={concept.concept.slug}>
              <span aria-hidden="true" className="studio-row-icon">
                {concept.concept.order}
              </span>

              <div className="studio-row-main">
                <div className="studio-row-titleline">
                  <h2>{concept.concept.title}</h2>
                  <StudioStatusBadge status={concept.status} />
                </div>
                <p>{`Concept ${concept.concept.order}`}</p>
                <p className="studio-row-description">
                  {concept.concept.summary}
                </p>
              </div>

              <dl className="studio-row-metrics">
                <div>
                  <dt>Blocks</dt>
                  <dd>{concept.blockCount}</dd>
                </div>
              </dl>

              <Link className="studio-action-link" href={concept.studioHref}>
                View concept
              </Link>
            </article>
          ))}
        </div>
      </section>
    </StudioAdminShell>
  );
}
