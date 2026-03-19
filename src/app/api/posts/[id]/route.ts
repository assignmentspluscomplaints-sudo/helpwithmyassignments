import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { deletePostFileBySlug, upsertPostFile } from "@/lib/blogContentStore";

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
    const body = await request.json();
    const { title, slug, excerpt, content, coverImage, published, category, readTime, author } = body;

    const id = parseInt(params.id);
    const oldPost = await prisma.post.findUnique({ where: { id } });

    const post = await prisma.post.update({
      where: { id },
      data: {
        ...(title && { title }),
        ...(slug && { slug }),
        ...(excerpt && { excerpt }),
        ...(content && { content }),
        coverImage: coverImage ?? undefined,
        ...(published !== undefined && { published }),
        ...(category && { category }),
        ...(readTime && { readTime }),
        ...(author && { author }),
      },
    });

    // Keep the JSON mirror in sync (best-effort, non-fatal).
    try {
      upsertPostFile({
        id: post.id,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt ?? null,
        coverImage: post.coverImage ?? null,
        category: post.category ?? null,
        author: post.author ?? null,
        readTime: post.readTime ?? null,
        published: post.published,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        content: post.content,
      });

      if (oldPost && oldPost.slug && oldPost.slug !== post.slug) {
        deletePostFileBySlug(oldPost.slug);
      }
    } catch {
      // Non-fatal
    }

    return NextResponse.json({ post });
  } catch {
    return NextResponse.json({ error: "Failed to update post" }, { status: 500 });
  }
}

// DELETE /api/posts/[id]
export async function DELETE(_: NextRequest, { params }: RouteParams) {
  try {
    const id = parseInt(params.id);
    const oldPost = await prisma.post.findUnique({ where: { id } });

    await prisma.post.delete({ where: { id } });

    // Keep the JSON mirror in sync (best-effort, non-fatal).
    try {
      if (oldPost?.slug) deletePostFileBySlug(oldPost.slug);
    } catch {
      // Non-fatal
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
  }
}
