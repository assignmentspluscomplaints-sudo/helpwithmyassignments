import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Blog | Academic Tips, Study Guides & Assignment Help",
  description:
    "Expert articles on assignment writing, study strategies, academic success tips, and subject-specific guides. Free resources for students worldwide.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Blog | HelpWithMyAssignments", url: "/blog" },
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const category = searchParams?.category || "All";

  let posts: Array<{
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    coverImage: string | null;
    category: string | null;
    author: string | null;
    readTime: number | null;
    createdAt: Date;
  }> = [];

  let categories: string[] = ["All"];

  try {
    const allPosts = await prisma.post.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImage: true,
        category: true,
        author: true,
        readTime: true,
        createdAt: true,
      },
    });

    // Get unique categories (filter out null)
    const cats = Array.from(new Set(allPosts.map((p) => p.category).filter((c): c is string => c != null)));
    categories = ["All", ...cats];

    // Filter by category
    posts =
      category === "All"
        ? allPosts
        : allPosts.filter((p) => p.category === category);
  } catch {
    // DB not set up yet
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="blog-hero">
          {/* BG orbs */}
          <div
            style={{
              position: "absolute",
              top: "-100px",
              right: "10%",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(180,255,80,0.06), transparent 70%)",
              filter: "blur(60px)",
              pointerEvents: "none",
            }}
          />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                maxWidth: "640px",
              }}
            >
              <span className="badge">Knowledge Hub</span>
              <h1
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                }}
              >
                Academic Insights &{" "}
                <span className="text-gradient">Study Resources</span>
              </h1>
              <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.7 }}>
                Free guides, tips, and strategies from expert academics to help
                you write better, study smarter, and achieve more.
              </p>
            </div>
          </div>
        </section>

        <div className="container" style={{ paddingTop: "60px", paddingBottom: "100px" }}>
          {/* Category filters */}
          <div className="blog-filter">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={cat === "All" ? "/blog" : `/blog?category=${cat}`}
                className={`filter-btn ${category === cat ? "active" : ""}`}
              >
                {cat}
              </Link>
            ))}
          </div>

          {/* Posts grid */}
          {posts.length > 0 ? (
            <div className="grid-3">
              {posts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "80px 20px",
                color: "var(--muted)",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "16px" }}>📝</div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  marginBottom: "8px",
                  color: "var(--white)",
                }}
              >
                No posts yet
              </h2>
              <p style={{ marginBottom: "24px" }}>
                Check back soon — we&apos;re publishing new content weekly.
              </p>
              <Link href="/admin/create" className="btn btn-primary">
                Add First Post (Admin)
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
