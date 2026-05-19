import type { Metadata } from "next";
import { CertificationTrackTemplate } from "@/components/CertificationTrackTemplate";
import { getRequiredCertificationTrack } from "@/lib/certificationTracks";
import { getCertificationTopics } from "@/lib/certificationTopics";

const track = getRequiredCertificationTrack("sscp");

export const metadata: Metadata = track.metadata;

export default function SscpCertificationPage() {
  const topics = getCertificationTopics(track.slug);

  return <CertificationTrackTemplate topics={topics} track={track} />;
}
