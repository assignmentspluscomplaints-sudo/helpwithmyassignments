import { NextRequest, NextResponse } from "next/server";
import { signToken } from "@/lib/auth";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@helpwithmyassignments.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "Admin@123456";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required" }, { status: 400 });
    }

    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = signToken({ id: 1, email: ADMIN_EMAIL });
    const isProduction = process.env.NODE_ENV === "production";

    const response = NextResponse.json({ success: true, email: ADMIN_EMAIL });

    // ✅ Cookie name: "admin_token" (underscore) — must match getAdminFromCookie() in lib/auth.ts
    // ✅ sameSite: "lax" — correct for same-domain on Hostinger (not "strict" which can block
    //    cookies on top-level navigations, not "none" which requires a cross-origin context)
    // ✅ secure: only true in production (requires HTTPS)
    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}