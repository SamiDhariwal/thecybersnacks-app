import Link from "next/link";
import type { ReactNode } from "react";

type StudioPageHeaderProps = {
  actions?: ReactNode;
  backHref?: string;
  backLabel?: string;
  description?: string;
  eyebrow?: string;
  title: string;
};

export function StudioPageHeader({
  actions,
  backHref,
  backLabel,
  description,
  eyebrow,
  title,
}: StudioPageHeaderProps) {
  return (
    <header className="studio-page-header">
      {backHref && backLabel ? (
        <Link className="article-back-link" href={backHref}>
          {backLabel}
        </Link>
      ) : null}

      <div className="studio-page-header-main">
        <div className="studio-page-heading">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="studio-page-title">{title}</h1>
          {description ? <p className="lead-text">{description}</p> : null}
        </div>

        {actions ? <div className="studio-page-actions">{actions}</div> : null}
      </div>
    </header>
  );
}
