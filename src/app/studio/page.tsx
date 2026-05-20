import type { Metadata } from "next";
import Link from "next/link";
import { StudioPageHeader } from "@/components/studio/StudioPageHeader";
import { StudioStatGrid } from "@/components/studio/StudioStatGrid";
import { getStudioContentTotals } from "@/lib/studio/certificationMetrics";
import { requireStudioAdmin } from "@/lib/studio/auth";
import { signOut } from "./actions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Studio | The Cyber Snacks",
};

export default async function StudioPage() {
  const user = await requireStudioAdmin();
  const totals = getStudioContentTotals();

  return (
    <main className="page-shell studio-page">
      <section className="site-container studio-shell">
        <StudioPageHeader
          actions={
            <form action={signOut}>
              <button
                className="studio-auth-button studio-logout-button"
                type="submit"
              >
                Logout
              </button>
            </form>
          }
          description="Manage certification content structure from one protected workspace."
          eyebrow="Studio"
          title="Cyber Snacks Studio"
        />

        <section className="studio-user-strip" aria-label="Authenticated user">
          <span>Authenticated user</span>
          <strong>{user.email ?? "Email unavailable"}</strong>
        </section>

        <StudioStatGrid
          stats={[
            {
              label: "Total certifications",
              value: totals.certificationCount,
            },
            {
              label: "Total domains",
              value: totals.domainCount,
            },
            {
              label: "Total lessons",
              value: totals.lessonCount,
            },
            {
              label: "Total concepts",
              value: totals.conceptCount,
            },
          ]}
        />

        <section className="studio-feature-card">
          <div className="studio-card-copy">
            <p className="category-badge">Certifications</p>
            <h2 className="studio-card-title">Certifications</h2>
            <p className="card-text">
              Review the available certification tracks and inspect their
              current domain, lesson, and concept coverage.
            </p>
          </div>

          <Link className="studio-action-link" href="/studio/certifications">
            Open Certifications
          </Link>
        </section>
      </section>
    </main>
  );
}
