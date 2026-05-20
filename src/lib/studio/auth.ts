import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function requireStudioAdmin() {
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

  return user;
}
