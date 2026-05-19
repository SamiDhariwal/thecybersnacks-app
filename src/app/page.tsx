import Link from "next/link";
import { CertificationTrackCard } from "@/components/CertificationTrackCard";
import { SnackCard } from "@/components/SnackCard";
import { certificationTracks } from "@/lib/certificationTracks";
import { getCertificationTopics } from "@/lib/certificationTopics";
import { snackArticles } from "@/lib/snackArticles";

export default function Home() {
  const featuredSnacks = snackArticles.slice(0, 3);

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="site-container">
          <div className="hero-copy">
            <p className="eyebrow">The Cyber Snacks</p>
            <h1 className="display-heading">
              Cybersecurity learning, served in focused bites.
            </h1>
            <p className="lead-text">
              Practical Snacks, certification tracks, and security habits
              explained clearly.
            </p>
            <div className="gold-divider" />
            <div className="hero-actions">
              <Link href="/snacks" className="button-link">
                Explore Snacks
              </Link>
              <Link href="/certifications" className="button-link secondary">
                View Certifications
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="site-container section-stack">
          <div className="section-heading">
            <p className="eyebrow">Featured Snacks</p>
            <h2 className="section-title">Small lessons. Useful habits.</h2>
          </div>
          <div className="snack-grid">
            {featuredSnacks.map((snack) => (
              <SnackCard snack={snack} key={snack.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section-tight">
        <div className="site-container section-stack">
          <div className="section-heading">
            <p className="eyebrow">Certification Tracks</p>
            <h2 className="section-title">Study paths, kept clean.</h2>
          </div>
          <div className="track-grid">
            {certificationTracks.map((track) => (
              <CertificationTrackCard
                topicCount={getCertificationTopics(track.slug).length}
                key={track.slug}
                track={track}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
