import Link from "next/link";
import type { CertificationTrack } from "@/lib/certificationTracks";

type CertificationTrackCardProps = {
  articleCount: number;
  track: CertificationTrack;
};

export function CertificationTrackCard({
  articleCount,
  track,
}: CertificationTrackCardProps) {
  const articleLabel = articleCount === 1 ? "Snack" : "Snacks";

  return (
    <Link className="track-card" href={`/certifications/${track.slug}`}>
      <div className="track-card-header">
        <p className="category-badge">Study Track</p>
        <p className="track-count">
          {articleCount} {articleLabel}
        </p>
      </div>
      <div className="track-card-copy">
        <h3 className="track-card-title">{track.name}</h3>
        <p className="track-certification">{track.certification}</p>
        <p className="card-text">{track.description}</p>
      </div>
      <span className="track-card-cta">Open track</span>
    </Link>
  );
}
