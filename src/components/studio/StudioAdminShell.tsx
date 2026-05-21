import Link from "next/link";
import type { ReactNode } from "react";
import { requireStudioAdmin } from "@/lib/studio/auth";
import { signOut } from "@/app/studio/actions";

type StudioAdminSection = "dashboard" | "certifications";

type StudioAdminShellProps = {
  activeSection: StudioAdminSection;
  children: ReactNode;
};

const navigationItems = [
  {
    href: "/studio",
    icon: "D",
    label: "Dashboard",
    section: "dashboard",
  },
  {
    href: "/studio/certifications",
    icon: "C",
    label: "Certifications",
    section: "certifications",
  },
  {
    icon: "P",
    label: "Projects",
  },
  {
    icon: "V",
    label: "Videos",
  },
] satisfies Array<{
  href?: string;
  icon: string;
  label: string;
  section?: StudioAdminSection;
}>;

export async function StudioAdminShell({
  activeSection,
  children,
}: StudioAdminShellProps) {
  const user = await requireStudioAdmin();

  return (
    <main className="studio-admin-layout">
      <aside className="studio-sidebar" aria-label="Studio navigation">
        <div className="studio-sidebar-brand">
          <span className="brand-kicker">Cyber Snacks</span>
          <strong>Studio</strong>
        </div>

        <nav className="studio-sidebar-nav">
          {navigationItems.map((item) => {
            const isActive = item.section === activeSection;

            if (!item.href) {
              return (
                <span
                  aria-disabled="true"
                  className="studio-sidebar-link is-disabled"
                  key={item.label}
                >
                  <span aria-hidden="true" className="studio-sidebar-icon">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                  <small>Soon</small>
                </span>
              );
            }

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={`studio-sidebar-link ${isActive ? "is-active" : ""}`}
                href={item.href}
                key={item.label}
              >
                <span aria-hidden="true" className="studio-sidebar-icon">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      <section className="studio-admin-main">
        <header className="studio-admin-topbar">
          <span className="studio-readonly-badge">Read-only mode</span>

          <Link className="studio-secondary-link" href="/">
            View Site
          </Link>

          <div className="studio-admin-account">
            <span>{user.email ?? "Email unavailable"}</span>
            <form action={signOut}>
              <button
                className="studio-auth-button studio-logout-button"
                type="submit"
              >
                Logout
              </button>
            </form>
          </div>
        </header>

        <div className="studio-admin-content">{children}</div>
      </section>
    </main>
  );
}
