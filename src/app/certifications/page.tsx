import type { Metadata } from "next";
import { CertificationTrackCard } from "@/components/CertificationTrackCard";
import {
  certificationTracks,
  getSnackArticlesForCertificationTrack,
} from "@/lib/certificationTracks";

export const metadata: Metadata = {
  title: "Certifications | The Cyber Snacks",
  description:
    "Static certification study tracks for SSCP, CISM, and CISSP Cyber Snacks.",
};

export default function CertificationsPage() {
  return (
    <main className="page-shell certifications-page-shell">
      <section className="site-container section-stack certifications-page-stack">
        <div className="certifications-hero">
          <p className="eyebrow">Certifications</p>
          <h1 className="display-heading">Focused certification tracks.</h1>
          <p className="lead-text">
            Practical Snacks grouped around SSCP, CISM, and CISSP study goals.
          </p>
          <div className="gold-divider" />
        </div>

        <section className="certification-tracks-section">
          <div className="section-heading snacks-list-heading">
            <p className="eyebrow">Study Tracks</p>
            <h2 className="section-title">Certification tracks</h2>
          </div>

          <div className="track-grid">
            {certificationTracks.map((track) => {
              const articleCount = getSnackArticlesForCertificationTrack(
                track.slug,
              ).length;
              return (
                <CertificationTrackCard
                  articleCount={articleCount}
                  key={track.slug}
                  track={track}
                />
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}
