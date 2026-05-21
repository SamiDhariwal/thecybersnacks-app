import Link from "next/link";

type StudioBreadcrumb = {
  href?: string;
  label: string;
};

type StudioBreadcrumbsProps = {
  items: StudioBreadcrumb[];
};

export function StudioBreadcrumbs({ items }: StudioBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="studio-breadcrumbs">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span className="studio-breadcrumb-item" key={`${item.label}-${index}`}>
            {item.href && !isLast ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current={isLast ? "page" : undefined}>
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
