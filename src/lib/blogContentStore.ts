import fs from "node:fs";
import path from "node:path";

export type BlogPostFile = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  coverImage: string | null;
  category: string | null;
  author: string | null;
  readTime: number | null;
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
  published: boolean;
  content: string; // HTML
};

const BLOG_POSTS_DIR = path.join(process.cwd(), "src", "content", "blog-posts");

function ensurePostsDir() {
  fs.mkdirSync(BLOG_POSTS_DIR, { recursive: true });
}

function postsDirExists() {
  try {
    return fs.existsSync(BLOG_POSTS_DIR) && fs.statSync(BLOG_POSTS_DIR).isDirectory();
  } catch {
    return false;
  }
}

function filePathForSlug(slug: string) {
  const safeSlug = slug.replace(/[^a-zA-Z0-9-_]/g, "");
  return path.join(BLOG_POSTS_DIR, `${safeSlug}.json`);
}

function normalizeDateToIso(value: string | Date): string {
  if (value instanceof Date) return value.toISOString();
  // If it isn't ISO, `new Date(value)` will still convert; this is mainly defensive.
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
}

export function hasBlogJsonContent() {
  if (!postsDirExists()) return false;
  try {
    const files = fs.readdirSync(BLOG_POSTS_DIR);
    return files.some((f) => f.toLowerCase().endsWith(".json"));
  } catch {
    return false;
  }
}

export function getAllPostsFromFiles(): BlogPostFile[] {
  if (!postsDirExists()) return [];

  const files = fs
    .readdirSync(BLOG_POSTS_DIR)
    .filter((f) => f.toLowerCase().endsWith(".json"));

  const posts: BlogPostFile[] = [];
  for (const file of files) {
    const fullPath = path.join(BLOG_POSTS_DIR, file);
    try {
      const raw = fs.readFileSync(fullPath, "utf-8");
      const parsed = JSON.parse(raw) as Partial<BlogPostFile>;
      if (!parsed.slug || !parsed.title || typeof parsed.content !== "string") continue;

      posts.push({
        id: typeof parsed.id === "number" ? parsed.id : 0,
        title: parsed.title,
        slug: parsed.slug,
        excerpt: typeof parsed.excerpt === "string" ? parsed.excerpt : null,
        coverImage: typeof parsed.coverImage === "string" ? parsed.coverImage : null,
        category: typeof parsed.category === "string" ? parsed.category : null,
        author: typeof parsed.author === "string" ? parsed.author : null,
        readTime: typeof parsed.readTime === "number" ? parsed.readTime : null,
        createdAt: typeof parsed.createdAt === "string" ? parsed.createdAt : new Date().toISOString(),
        updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : new Date().toISOString(),
        published: Boolean(parsed.published),
        content: parsed.content,
      });
    } catch {
      // Ignore a single corrupt file so the rest of the site can still build.
    }
  }

  return posts;
}

export function getPublishedPostsFromFiles(): BlogPostFile[] {
  return getAllPostsFromFiles()
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function getPostBySlugFromFiles(slug: string): BlogPostFile | null {
  if (!postsDirExists()) return null;
  const filePath = filePathForSlug(slug);
  if (!fs.existsSync(filePath)) return null;

  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const parsed = JSON.parse(raw) as Partial<BlogPostFile>;
    if (!parsed.slug || typeof parsed.content !== "string") return null;

    return {
      id: typeof parsed.id === "number" ? parsed.id : 0,
      title: parsed.title || "",
      slug: parsed.slug,
      excerpt: typeof parsed.excerpt === "string" ? parsed.excerpt : null,
      coverImage: typeof parsed.coverImage === "string" ? parsed.coverImage : null,
      category: typeof parsed.category === "string" ? parsed.category : null,
      author: typeof parsed.author === "string" ? parsed.author : null,
      readTime: typeof parsed.readTime === "number" ? parsed.readTime : null,
      createdAt: typeof parsed.createdAt === "string" ? parsed.createdAt : new Date().toISOString(),
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : new Date().toISOString(),
      published: Boolean(parsed.published),
      content: parsed.content,
    };
  } catch {
    return null;
  }
}

export function upsertPostFile(post: {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  coverImage: string | null;
  category: string | null;
  author: string | null;
  readTime: number | null;
  createdAt: Date | string;
  updatedAt: Date | string;
  published: boolean;
  content: string;
}) {
  ensurePostsDir();
  const filePath = filePathForSlug(post.slug);

  const json: BlogPostFile = {
    ...post,
    createdAt: normalizeDateToIso(post.createdAt),
    updatedAt: normalizeDateToIso(post.updatedAt),
  };

  fs.writeFileSync(filePath, JSON.stringify(json, null, 2), "utf-8");
}

export function deletePostFileBySlug(slug: string) {
  if (!postsDirExists()) return;
  const filePath = filePathForSlug(slug);
  try {
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  } catch {
    // Non-fatal
  }
}

