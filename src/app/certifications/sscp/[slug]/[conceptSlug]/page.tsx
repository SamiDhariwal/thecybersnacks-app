import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CertificationLessonTemplate } from "@/components/CertificationLessonTemplate";
import { getRequiredCertificationTrack } from "@/lib/certificationTracks";
import {
  getCertificationTopic,
  getCertificationTopicLesson,
  getCertificationTopicLessons,
  getCertificationTopics,
} from "@/lib/certificationTopics";

type SscpLessonRouteParams = {
  conceptSlug: string;
  slug: string;
};

type SscpLessonPageProps = {
  params: Promise<SscpLessonRouteParams>;
};

const track = getRequiredCertificationTrack("sscp");

export const dynamicParams = false;

export function generateStaticParams(): SscpLessonRouteParams[] {
  return getCertificationTopics(track.slug).flatMap((topic) => {
    return getCertificationTopicLessons(topic).map((lesson) => ({
      conceptSlug: lesson.slug,
      slug: topic.slug,
    }));
  });
}

export async function generateMetadata({
  params,
}: SscpLessonPageProps): Promise<Metadata> {
  const { conceptSlug, slug } = await params;
  const topic = getCertificationTopic(track.slug, slug);
  const lesson = getCertificationTopicLesson(track.slug, slug, conceptSlug);

  if (!topic || !lesson) {
    notFound();
  }

  return {
    title: `${lesson.title} | ${topic.title} | The Cyber Snacks`,
    description: lesson.summary,
  };
}

export default async function SscpLessonPage({ params }: SscpLessonPageProps) {
  const { conceptSlug, slug } = await params;
  const topic = getCertificationTopic(track.slug, slug);
  const lesson = getCertificationTopicLesson(track.slug, slug, conceptSlug);

  if (!topic || !lesson) {
    notFound();
  }

  return (
    <CertificationLessonTemplate
      lesson={lesson}
      topic={topic}
      track={track}
    />
  );
}
