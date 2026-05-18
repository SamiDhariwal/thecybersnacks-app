import type { Metadata } from "next";
import { SnackTrackTemplate } from "@/components/SnackTrackTemplate";
import {
  getRequiredSnackLearningTrack,
  getSnackArticlesForTrack,
} from "@/lib/snackArticles";

const track = getRequiredSnackLearningTrack("cissp");

export const metadata: Metadata = track.metadata;

export default function CisspTrackPage() {
  const articles = getSnackArticlesForTrack(track.slug);

  return <SnackTrackTemplate articles={articles} track={track} />;
}
