import type { Metadata } from "next";
import { SnackTrackTemplate } from "@/components/SnackTrackTemplate";
import {
  getRequiredSnackLearningTrack,
  getSnackArticlesForTrack,
} from "@/lib/snackArticles";

const track = getRequiredSnackLearningTrack("cism");

export const metadata: Metadata = track.metadata;

export default function CismTrackPage() {
  const articles = getSnackArticlesForTrack(track.slug);

  return <SnackTrackTemplate articles={articles} track={track} />;
}
