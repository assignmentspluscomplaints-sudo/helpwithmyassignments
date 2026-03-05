import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let post;
  try {
    post = await prisma.post.findUnique({
      where: { slug: params.slug, published: true },
      select: { title: true, metaTitle: true, metaDesc: true, excerpt: true, coverImage: true, focusKw: true },
    });
  } catch {
    return {};
  }

  if (!post) return {};

  const title = post.metaTitle || `${post.title} | HelpWithMyAssignments`;
  const description = post.metaDesc || post.excerpt;

  return {
    title,
    description,
    keywords: post.focusKw || undefined,
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      images: post.coverImage ? [post.coverImage] : [],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export async function generateStaticParams() {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      select: { slug: true },
    });
    return posts.map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

export default async function BlogPostPage({ params }: Props) {
  let post;
  try {
    post = await prisma.post.findUnique({
      where: { slug: params.slug, published: true },
    });
  } catch {
    notFound();
  }

  if (!post) notFound();

  // Related posts
  let related: Array<{ title: string; slug: string; category: string; readTime: number }> = [];
  try {
    related = await prisma.post.findMany({
      where: { published: true, category: post.category, NOT: { id: post.id } },
      take: 3,
      select: { title: true, slug: true, category: true, readTime: true },
    });
  } catch {}

  const date = new Date(post.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: post.author },
    datePublished: post.createdAt.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    image: post.coverImage,
    publisher: {
      "@type": "Organization",
      name: "HelpWithMyAssignments",
      logo: { "@type": "ImageObject", url: "/logo.svg" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Navbar />
      <main>
        {/* Article hero */}
        <header className="article-hero">
          <div className="container">
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "24px",
                  fontSize: "0.85rem",
                  color: "var(--muted2)",
                }}
              >
                <Link href="/" style={{ color: "var(--muted2)" }}>
                  Home
                </Link>
                <span>›</span>
                <Link href="/blog" style={{ color: "var(--muted2)" }}>
                  Blog
                </Link>
                <span>›</span>
                <span style={{ color: "var(--muted)" }}>{post.category}</span>
              </nav>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                <span className="badge">{post.category}</span>
                <span style={{ color: "var(--muted2)", fontSize: "0.85rem" }}>
                  {post.readTime} min read
                </span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.15,
                  marginBottom: "20px",
                }}
              >
                {post.title}
              </h1>

              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                }}
              >
                {post.excerpt}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  paddingTop: "20px",
                  borderTop: "1px solid var(--border)",
                  fontSize: "0.875rem",
                  color: "var(--muted2)",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, var(--lime), var(--cyan))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "0.8rem",
                    color: "#000",
                    flexShrink: 0,
                  }}
                >
                  {post.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <span style={{ color: "var(--white)", fontWeight: 600 }}>
                    {post.author}
                  </span>
                  <span style={{ margin: "0 8px" }}>·</span>
                  <span>{date}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Cover image */}
        {post.coverImage && (
          <div
            style={{
              width: "100%",
              maxWidth: "900px",
              margin: "0 auto",
              aspectRatio: "16/7",
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              marginTop: "-20px",
            }}
          >
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        )}

        {/* Article content */}
        <article className="article-content">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Related posts */}
        {related.length > 0 && (
          <section
            style={{
              borderTop: "1px solid var(--border)",
              padding: "60px 0 100px",
            }}
          >
            <div className="container">
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  marginBottom: "28px",
                  letterSpacing: "-0.02em",
                }}
              >
                Related Articles
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "16px",
                }}
              >
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="glass"
                    style={{
                      padding: "20px",
                      borderRadius: "var(--radius)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      transition: "all 0.3s",
                    }}
                  >
                    <span className="badge" style={{ alignSelf: "flex-start" }}>
                      {r.category}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {r.title}
                    </span>
                    <span
                      style={{ fontSize: "0.8rem", color: "var(--muted2)" }}
                    >
                      {r.readTime} min read
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
