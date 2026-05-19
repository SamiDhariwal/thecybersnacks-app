import type { Metadata } from "next";
import { CertificationTrackCard } from "@/components/CertificationTrackCard";
import { certificationTracks } from "@/lib/certificationTracks";
import { getCertificationTopics } from "@/lib/certificationTopics";

export const metadata: Metadata = {
  title: "Certifications | The Cyber Snacks",
  description:
    "Static certification study tracks for SSCP, CISM, and CISSP learning topics.",
};

export default function CertificationsPage() {
  return (
    <main className="page-shell certifications-page-shell">
      <section className="site-container section-stack certifications-page-stack">
        <div className="certifications-hero">
          <p className="eyebrow">Certifications</p>
          <h1 className="display-heading">Focused certification tracks.</h1>
          <p className="lead-text">
            Practical study topics grouped around SSCP, CISM, and CISSP goals.
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
              const topicCount = getCertificationTopics(track.slug).length;

              return (
                <CertificationTrackCard
                  topicCount={topicCount}
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
