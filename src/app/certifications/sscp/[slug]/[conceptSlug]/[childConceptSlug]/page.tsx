import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CertificationConceptTemplate } from "@/components/CertificationConceptTemplate";
import { getRequiredCertificationTrack } from "@/lib/certificationTracks";
import {
  getCertificationLessonConcept,
  getCertificationLessonConcepts,
  getCertificationTopic,
  getCertificationTopicLesson,
  getCertificationTopicLessons,
  getCertificationTopics,
} from "@/lib/certificationTopics";

type SscpConceptRouteParams = {
  childConceptSlug: string;
  conceptSlug: string;
  slug: string;
};

type SscpConceptPageProps = {
  params: Promise<SscpConceptRouteParams>;
};

const track = getRequiredCertificationTrack("sscp");

export const dynamicParams = false;

export function generateStaticParams(): SscpConceptRouteParams[] {
  return getCertificationTopics(track.slug).flatMap((topic) => {
    return getCertificationTopicLessons(topic).flatMap((lesson) => {
      return getCertificationLessonConcepts(lesson).map((concept) => ({
        childConceptSlug: concept.slug,
        conceptSlug: lesson.slug,
        slug: topic.slug,
      }));
    });
  });
}

export async function generateMetadata({
  params,
}: SscpConceptPageProps): Promise<Metadata> {
  const { childConceptSlug, conceptSlug, slug } = await params;
  const topic = getCertificationTopic(track.slug, slug);
  const lesson = getCertificationTopicLesson(track.slug, slug, conceptSlug);
  const concept = getCertificationLessonConcept(
    track.slug,
    slug,
    conceptSlug,
    childConceptSlug,
  );

  if (!topic || !lesson || !concept) {
    notFound();
  }

  return {
    title: `${concept.title} | ${lesson.title} | The Cyber Snacks`,
    description: concept.summary,
  };
}

export default async function SscpConceptPage({
  params,
}: SscpConceptPageProps) {
  const { childConceptSlug, conceptSlug, slug } = await params;
  const topic = getCertificationTopic(track.slug, slug);
  const lesson = getCertificationTopicLesson(track.slug, slug, conceptSlug);
  const concept = getCertificationLessonConcept(
    track.slug,
    slug,
    conceptSlug,
    childConceptSlug,
  );

  if (!topic || !lesson || !concept) {
    notFound();
  }

  return (
    <CertificationConceptTemplate
      concept={concept}
      lesson={lesson}
      topic={topic}
      track={track}
    />
  );
}
