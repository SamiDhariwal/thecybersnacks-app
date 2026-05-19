import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CertificationConceptTemplate } from "@/components/CertificationConceptTemplate";
import { getRequiredCertificationTrack } from "@/lib/certificationTracks";
import {
  getCertificationTopic,
  getCertificationTopicConcept,
  getCertificationTopicConcepts,
  getCertificationTopics,
} from "@/lib/certificationTopics";

type SscpConceptRouteParams = {
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
    return getCertificationTopicConcepts(topic).map((concept) => ({
      conceptSlug: concept.slug,
      slug: topic.slug,
    }));
  });
}

export async function generateMetadata({
  params,
}: SscpConceptPageProps): Promise<Metadata> {
  const { conceptSlug, slug } = await params;
  const topic = getCertificationTopic(track.slug, slug);
  const concept = getCertificationTopicConcept(track.slug, slug, conceptSlug);

  if (!topic || !concept) {
    notFound();
  }

  return {
    title: `${concept.title} | ${topic.title} | The Cyber Snacks`,
    description: concept.summary,
  };
}

export default async function SscpConceptPage({
  params,
}: SscpConceptPageProps) {
  const { conceptSlug, slug } = await params;
  const topic = getCertificationTopic(track.slug, slug);
  const concept = getCertificationTopicConcept(track.slug, slug, conceptSlug);

  if (!topic || !concept) {
    notFound();
  }

  return (
    <CertificationConceptTemplate
      concept={concept}
      topic={topic}
      track={track}
    />
  );
}
