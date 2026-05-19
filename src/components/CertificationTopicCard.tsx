import Link from "next/link";
import type { CertificationTopic } from "@/lib/certificationTopics";

type CertificationTopicCardProps = {
  topic: CertificationTopic;
};

export function CertificationTopicCard({ topic }: CertificationTopicCardProps) {
  return (
    <Link
      className="cert-topic-card"
      href={`/certifications/${topic.trackSlug}/${topic.slug}`}
    >
      <div className="cert-topic-card-header">
        <p className="category-badge cert-domain-badge">{topic.category}</p>
        <p className="read-time">{topic.readTime}</p>
      </div>

      <div className="cert-topic-card-copy">
        <h3 className="card-title">{topic.title}</h3>
        <p className="card-text">{topic.subtitle}</p>
      </div>

      <span className="track-card-cta">Explore Domain</span>
    </Link>
  );
}
