import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CertificationTopicTemplate } from "@/components/CertificationTopicTemplate";
import { getRequiredCertificationTrack } from "@/lib/certificationTracks";
import {
  getCertificationTopic,
  getCertificationTopics,
} from "@/lib/certificationTopics";

type SscpTopicRouteParams = {
  slug: string;
};

type SscpTopicPageProps = {
  params: Promise<SscpTopicRouteParams>;
};

const track = getRequiredCertificationTrack("sscp");

export const dynamicParams = false;

export function generateStaticParams(): SscpTopicRouteParams[] {
  return getCertificationTopics(track.slug).map((topic) => ({
    slug: topic.slug,
  }));
}

export async function generateMetadata({
  params,
}: SscpTopicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getCertificationTopic(track.slug, slug);

  if (!topic) {
    notFound();
  }

  return {
    title: topic.metadata.title,
    description: topic.metadata.description,
  };
}

export default async function SscpTopicPage({ params }: SscpTopicPageProps) {
  const { slug } = await params;
  const topic = getCertificationTopic(track.slug, slug);

  if (!topic) {
    notFound();
  }

  return <CertificationTopicTemplate topic={topic} track={track} />;
}
