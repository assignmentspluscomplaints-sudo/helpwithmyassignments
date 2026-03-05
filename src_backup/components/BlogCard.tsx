import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: string | null;
  category: string;
  author: string;
  readTime: number;
  createdAt: Date | string;
}

export default function BlogCard({
  title,
  slug,
  excerpt,
  coverImage,
  category,
  author,
  readTime,
  createdAt,
}: BlogCardProps) {
  const date = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${slug}`} style={{ display: "block" }}>
      <article className="blog-card">
        {/* Cover image */}
        <div className="blog-card-image">
          {coverImage ? (
            <Image src={coverImage} alt={title} fill style={{ objectFit: "cover" }} />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                background: `linear-gradient(135deg, rgba(180,255,80,0.06) 0%, rgba(0,229,255,0.06) 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2.5rem",
              }}
            >
              📝
            </div>
          )}
        </div>

        {/* Body */}
        <div className="blog-card-body">
          <div className="blog-card-meta">
            <span className="badge">{category}</span>
          </div>

          <h2 className="blog-card-title">{title}</h2>
          <p className="blog-card-excerpt">{excerpt}</p>

          <div className="blog-card-footer">
            <span>{author}</span>
            <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span>{date}</span>
              <span>·</span>
              <span>{readTime} min read</span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
