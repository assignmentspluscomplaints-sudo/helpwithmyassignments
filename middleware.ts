import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ✅ Allow these routes through without any auth check
  if (
    pathname === "/admin/login" ||
    pathname === "/admin/login/" ||
    pathname.startsWith("/api/auth/") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/favicon")
  ) {
    return NextResponse.next();
  }

  // ✅ Protect all /admin/* routes
  if (pathname.startsWith("/admin")) {
    // ✅ CRITICAL FIX: cookie name must be "admin_token" (underscore)
    // Previous middleware was checking "admin-token" (hyphen) — wrong name,
    // so it never found the cookie and always redirected to login.
    const token = request.cookies.get("admin_token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      // Token invalid or expired — clear it and redirect
      const response = NextResponse.redirect(new URL("/admin/login", request.url));
      response.cookies.delete("admin_token");
      return response;
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};