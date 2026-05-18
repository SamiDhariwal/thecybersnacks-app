import type { Metadata } from "next";
import { CertificationTrackTemplate } from "@/components/CertificationTrackTemplate";
import {
  getRequiredCertificationTrack,
  getSnackArticlesForCertificationTrack,
} from "@/lib/certificationTracks";

const track = getRequiredCertificationTrack("sscp");

export const metadata: Metadata = track.metadata;

export default function SscpCertificationPage() {
  const articles = getSnackArticlesForCertificationTrack(track.slug);

  return <CertificationTrackTemplate articles={articles} track={track} />;
}
