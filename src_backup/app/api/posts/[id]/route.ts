import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminFromCookie } from "@/lib/auth";

interface RouteParams {
  params: { id: string };
}

// GET /api/posts/[id]
export async function GET(_: NextRequest, { params }: RouteParams) {
  try {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ post });
  } catch {
    return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
  }
}

// PUT /api/posts/[id]
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const admin = await getAdminFromCookie();
    if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await request.json();
    const { title, slug, excerpt, content, coverImage, metaTitle, metaDesc, focusKw, published, category, readTime, author } = body;

    const post = await prisma.post.update({
      where: { id: parseInt(params.id) },
      data: {
        ...(title && { title }),
        ...(slug && { slug }),
        ...(excerpt && { excerpt }),
        ...(content && { content }),
        coverImage: coverImage ?? undefined,
        metaTitle: metaTitle ?? undefined,
        metaDesc: metaDesc ?? undefined,
        focusKw: focusKw ?? undefined,
        ...(published !== undefined && { published }),
        ...(category && { category }),
        ...(readTime && { readTime }),
        ...(author && { author }),
      },
    });

    return NextResponse.json({ post });
  } catch {
    return NextResponse.json({ error: "Failed to update post" }, { status: 500 });
  }
}

// DELETE /api/posts/[id]
export async function DELETE(_: NextRequest, { params }: RouteParams) {
  try {
    const admin = await getAdminFromCookie();
    if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await prisma.post.delete({ where: { id: parseInt(params.id) } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
  }
}
