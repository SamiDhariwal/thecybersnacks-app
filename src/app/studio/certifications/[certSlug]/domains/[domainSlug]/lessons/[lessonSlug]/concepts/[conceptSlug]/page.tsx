import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StudioAdminShell } from "@/components/studio/StudioAdminShell";
import { StudioBreadcrumbs } from "@/components/studio/StudioBreadcrumbs";
import { StudioPageHeader } from "@/components/studio/StudioPageHeader";
import { StudioStatGrid } from "@/components/studio/StudioStatGrid";
import { StudioStatusBadge } from "@/components/studio/StudioStatusBadge";
import { getStudioConceptSummary } from "@/lib/studio/certificationMetrics";

type StudioConceptRouteParams = {
  certSlug: string;
  domainSlug: string;
  lessonSlug: string;
  conceptSlug: string;
};

type StudioConceptPageProps = {
  params: Promise<StudioConceptRouteParams>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: StudioConceptPageProps): Promise<Metadata> {
  const { certSlug, domainSlug, lessonSlug, conceptSlug } = await params;
  const summary = getStudioConceptSummary(
    certSlug,
    domainSlug,
    lessonSlug,
    conceptSlug,
  );

  if (!summary) {
    return {
      title: "Concept Not Found | The Cyber Snacks",
    };
  }

  return {
    title: `${summary.concept.concept.title} Studio | The Cyber Snacks`,
  };
}

export default async function StudioConceptPage({
  params,
}: StudioConceptPageProps) {
  const { certSlug, domainSlug, lessonSlug, conceptSlug } = await params;
  const summary = getStudioConceptSummary(
    certSlug,
    domainSlug,
    lessonSlug,
    conceptSlug,
  );

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
            href: summary.lesson.studioHref,
            label: `Lesson ${summary.lesson.lesson.order}`,
          },
          {
            label: summary.concept.concept.title,
          },
        ]}
      />

      <StudioPageHeader
        backHref={summary.lesson.studioHref}
        backLabel={`Back to Lesson ${summary.lesson.lesson.order}`}
        description={summary.concept.concept.summary}
        eyebrow={`Concept ${summary.concept.concept.order}`}
        title={summary.concept.concept.title}
      />

      <StudioStatGrid
        stats={[
          {
            icon: "B",
            label: "Blocks",
            value: summary.blocks.length,
          },
          {
            icon: "S",
            label: "Status",
            value: summary.concept.status,
          },
          {
            icon: "R",
            label: "Source",
            value: "Static",
          },
        ]}
      />

      <section className="studio-content-section">
        <div className="studio-section-heading">
          <div>
            <p className="category-badge">Content Blocks</p>
            <h2 className="studio-card-title">Prepared block structure</h2>
          </div>

          <button
            className="studio-action-link is-disabled"
            disabled
            type="button"
          >
            Add Block {"\u2014"} coming later
          </button>
        </div>

        <p className="studio-inline-note">
          Content blocks are mapped from static content. Editing will be enabled
          after database storage is added.
        </p>

        <div className="studio-block-list">
          {summary.blocks.map((block) => (
            <article className="studio-block-card" key={block.id}>
              <div className="studio-card-topline">
                <p className="category-badge">{`Block ${block.order}`}</p>
                <StudioStatusBadge status="Draft" />
              </div>

              <div className="studio-card-copy">
                <h3 className="studio-card-title">{block.title}</h3>
                <p className="studio-card-subtitle">{block.type}</p>
                <p className="card-text">
                  This block is mapped from static lesson content and will become
                  editable after CMS storage is introduced.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </StudioAdminShell>
  );
}
