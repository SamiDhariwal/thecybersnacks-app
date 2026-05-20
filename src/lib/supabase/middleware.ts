import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const studioSignInPath = "/studio/sign-in";
const authResponseHeaders = ["cache-control", "expires", "pragma"];

function redirectWithCookies(
  request: NextRequest,
  response: NextResponse,
  pathname: string,
) {
  const redirectResponse = NextResponse.redirect(new URL(pathname, request.url));

  response.cookies.getAll().forEach((cookie) => {
    redirectResponse.cookies.set(cookie);
  });

  authResponseHeaders.forEach((header) => {
    const value = response.headers.get(header);

    if (value) {
      redirectResponse.headers.set(header, value);
    }
  });

  return redirectResponse;
}

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet, headers) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });

          supabaseResponse = NextResponse.next({
            request,
          });

          cookiesToSet.forEach(({ name, value, options }) => {
            supabaseResponse.cookies.set(name, value, options);
          });

          Object.entries(headers).forEach(([key, value]) => {
            supabaseResponse.headers.set(key, value);
          });
        },
      },
    },
  );

  const { data } = await supabase.auth.getClaims();
  const claims = data?.claims;

  const pathname = request.nextUrl.pathname;
  const isSignInRoute = pathname === studioSignInPath;

  if (!claims) {
    if (isSignInRoute) {
      return supabaseResponse;
    }

    return redirectWithCookies(request, supabaseResponse, studioSignInPath);
  }

  const { data: adminUser, error: adminError } = await supabase
    .from("admin_users")
    .select("id")
    .eq("id", claims.sub)
    .maybeSingle();

  if (adminError || !adminUser) {
    await supabase.auth.signOut({ scope: "local" });
    return redirectWithCookies(request, supabaseResponse, "/");
  }

  if (isSignInRoute) {
    return redirectWithCookies(request, supabaseResponse, "/studio");
  }

  return supabaseResponse;
}
