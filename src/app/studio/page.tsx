import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "./actions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Studio | The Cyber Snacks",
};

export default async function StudioPage() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/studio/sign-in");
  }

  const { data: adminUser, error: adminError } = await supabase
    .from("admin_users")
    .select("id")
    .eq("id", user.id)
    .maybeSingle();

  if (adminError || !adminUser) {
    await supabase.auth.signOut({ scope: "local" });
    redirect("/");
  }

  return (
    <main className="page-shell studio-page">
      <section className="site-container studio-shell">
        <div className="studio-panel">
          <div className="studio-panel-heading">
            <h1 className="studio-title">Cyber Snacks Studio</h1>
          </div>

          <div className="studio-status">
            <p className="studio-success">Authenticated successfully</p>
            <p className="studio-email">{user.email ?? "Email unavailable"}</p>
          </div>

          <form action={signOut}>
            <button className="studio-auth-button studio-logout-button" type="submit">
              Logout
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
