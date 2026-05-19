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
        <p className="category-badge">{`Topic ${topic.topicNumber}`}</p>
        <p className="read-time">{topic.readTime}</p>
      </div>

      <div className="cert-topic-card-copy">
        <p className="cert-topic-category">{topic.category}</p>
        <h3 className="card-title">{topic.title}</h3>
        <p className="card-text">{topic.subtitle}</p>
      </div>

      <span className="track-card-cta">Start topic</span>
    </Link>
  );
}
