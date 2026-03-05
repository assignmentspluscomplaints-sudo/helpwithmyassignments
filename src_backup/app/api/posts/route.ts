import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminFromCookie } from "@/lib/auth";

// GET /api/posts — public listing
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const admin = searchParams.get("admin") === "true";
    const category = searchParams.get("category");
    const take = parseInt(searchParams.get("take") || "50");

    const where: Record<string, unknown> = {};
    if (!admin) where.published = true;
    if (category && category !== "All") where.category = category;

    const posts = await prisma.post.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take,
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImage: true,
        category: true,
        author: true,
        readTime: true,
        published: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

// POST /api/posts — create (admin only)
export async function POST(request: NextRequest) {
  try {
    const admin = await getAdminFromCookie();
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { title, slug, excerpt, content, coverImage, metaTitle, metaDesc, focusKw, published, category, readTime, author } = body;

    if (!title || !slug || !excerpt || !content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Auto-generate slug if not provided
    const finalSlug = slug || title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

    const post = await prisma.post.create({
      data: {
        title,
        slug: finalSlug,
        excerpt,
        content,
        coverImage: coverImage || null,
        metaTitle: metaTitle || null,
        metaDesc: metaDesc || null,
        focusKw: focusKw || null,
        published: published || false,
        category: category || "General",
        readTime: readTime || 5,
        author: author || "Admin",
      },
    });

    return NextResponse.json({ post }, { status: 201 });
  } catch (error: unknown) {
    if (error && typeof error === "object" && "code" in error && (error as Record<string, unknown>).code === "P2002") {
      return NextResponse.json({ error: "Slug already exists" }, { status: 409 });
    }
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
