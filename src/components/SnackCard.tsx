import Link from "next/link";
import type { SnackArticle } from "@/lib/snackArticles";

type SnackCardProps = {
  snack: SnackArticle;
};

export function SnackCard({ snack }: SnackCardProps) {
  return (
    <Link
      className="snack-card snack-card-link"
      href={`/snacks/${snack.slug}`}
    >
      <div className="snack-card-header">
        <p className="category-badge">{snack.category}</p>
        <p className="read-time">{snack.readTime}</p>
      </div>
      <h3 className="card-title">{snack.cardTitle}</h3>
      <p className="card-text">{snack.description}</p>
    </Link>
  );
}
