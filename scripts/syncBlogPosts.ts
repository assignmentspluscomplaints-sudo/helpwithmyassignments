import { PrismaClient } from "@prisma/client";
import fs from "node:fs";
import path from "node:path";

const BLOG_POSTS_DIR = path.join(process.cwd(), "src", "content", "blog-posts");

function ensurePostsDir() {
  fs.mkdirSync(BLOG_POSTS_DIR, { recursive: true });
}

function filePathForSlug(slug: string) {
  const safeSlug = slug.replace(/[^a-zA-Z0-9-_]/g, "");
  return path.join(BLOG_POSTS_DIR, `${safeSlug}.json`);
}

function normalizeDateToIso(value: Date | string) {
  if (value instanceof Date) return value.toISOString();
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
}

function upsertPostFile(post: {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  coverImage: string | null;
  category: string | null;
  author: string | null;
  readTime: number | null;
  published: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
  content: string;
}) {
  ensurePostsDir();
  const filePath = filePathForSlug(post.slug);

  const json = {
    ...post,
    createdAt: normalizeDateToIso(post.createdAt),
    updatedAt: normalizeDateToIso(post.updatedAt),
  };

  fs.writeFileSync(filePath, JSON.stringify(json, null, 2), "utf-8");
}

const prisma = new PrismaClient();

async function main() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      content: true,
      coverImage: true,
      category: true,
      author: true,
      readTime: true,
      published: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  let written = 0;
  for (const post of posts) {
    upsertPostFile({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt ?? null,
      content: post.content,
      coverImage: post.coverImage ?? null,
      category: post.category ?? null,
      author: post.author ?? null,
      readTime: post.readTime ?? null,
      published: post.published,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    });
    written++;
  }

  // eslint-disable-next-line no-console
  console.log(`Wrote/updated ${written} blog post JSON file(s)`);
}

main()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

