"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Post {
  id: number;
  title: string;
  slug: string;
  category: string;
  published: boolean;
  readTime: number;
  author: string;
  createdAt: string;
}

export default function AdminPosts() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<number | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: string } | null>(null);

  const showToast = (msg: string, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const checkAuth = useCallback(async () => {
    const res = await fetch("/api/auth/verify");
    if (!res.ok) router.push("/admin/login");
  }, [router]);

  const fetchPosts = useCallback(async () => {
    try {
      const res = await fetch("/api/posts?admin=true");
      const data = await res.json();
      setPosts(data.posts || []);
    } catch {
      showToast("Failed to load posts", "error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
    fetchPosts();
  }, [checkAuth, fetchPosts]);

  const togglePublish = async (post: Post) => {
    try {
      const res = await fetch(`/api/posts/${post.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !post.published }),
      });
      if (res.ok) {
        setPosts((prev) =>
          prev.map((p) =>
            p.id === post.id ? { ...p, published: !p.published } : p
          )
        );
        showToast(
          post.published ? "Post unpublished" : "Post published!"
        );
      }
    } catch {
      showToast("Failed to update", "error");
    }
  };

  const deletePost = async (id: number) => {
    if (!confirm("Delete this post? This cannot be undone.")) return;
    setDeleting(id);
    try {
      const res = await fetch(`/api/posts/${id}`, { method: "DELETE" });
      if (res.ok) {
        setPosts((prev) => prev.filter((p) => p.id !== id));
        showToast("Post deleted");
      }
    } catch {
      showToast("Failed to delete", "error");
    } finally {
      setDeleting(null);
    }
  };

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-logo">
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--lime)", display: "inline-block" }} />
          <span>HWM<span style={{ color: "var(--lime)" }}>A</span></span>
          <span style={{ fontSize: "0.75rem", color: "var(--muted2)", marginLeft: "auto", fontFamily: "var(--font-body)" }}>Admin</span>
        </div>

        <ul className="admin-nav">
          <li>
            <Link href="/admin/posts" className="active">
              <span>📄</span> All Posts
            </Link>
          </li>
          <li>
            <Link href="/admin/create">
              <span>✏️</span> New Post
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <span>🌐</span> View Blog
            </Link>
          </li>
          <li>
            <Link href="/">
              <span>🏠</span> View Site
            </Link>
          </li>
        </ul>

        <div style={{ padding: "12px", marginTop: "auto" }}>
          <button
            onClick={logout}
            className="btn btn-ghost btn-sm"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="admin-main">
        <div className="admin-header">
          <div>
            <h1 className="admin-title">All Posts</h1>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem", marginTop: "4px" }}>
              {posts.length} total · {posts.filter((p) => p.published).length} published
            </p>
          </div>
          <Link href="/admin/create" className="btn btn-primary btn-sm">
            + New Post
          </Link>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          {[
            { label: "Total Posts", value: posts.length, icon: "📄" },
            { label: "Published", value: posts.filter((p) => p.published).length, icon: "✅" },
            { label: "Drafts", value: posts.filter((p) => !p.published).length, icon: "📝" },
          ].map((s) => (
            <div
              key={s.label}
              className="glass"
              style={{ padding: "20px", display: "flex", alignItems: "center", gap: "16px" }}
            >
              <span style={{ fontSize: "1.5rem" }}>{s.icon}</span>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div style={{ color: "var(--muted2)", fontSize: "0.8rem", marginTop: "2px" }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="glass" style={{ overflow: "hidden" }}>
          {loading ? (
            <div style={{ padding: "60px", textAlign: "center", display: "flex", justifyContent: "center" }}>
              <div className="loader" />
            </div>
          ) : posts.length === 0 ? (
            <div style={{ padding: "60px", textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>📝</div>
              <p style={{ color: "var(--muted)", marginBottom: "20px" }}>No posts yet</p>
              <Link href="/admin/create" className="btn btn-primary btn-sm">
                Create First Post
              </Link>
            </div>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Author</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th style={{ textAlign: "right" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td>
                      <div>
                        <div
                          style={{
                            fontWeight: 600,
                            color: "var(--white)",
                            fontSize: "0.875rem",
                            marginBottom: "2px",
                          }}
                        >
                          {post.title}
                        </div>
                        <div style={{ color: "var(--muted2)", fontSize: "0.75rem" }}>
                          /blog/{post.slug}
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge" style={{ fontSize: "0.7rem" }}>
                        {post.category}
                      </span>
                    </td>
                    <td style={{ fontSize: "0.85rem" }}>{post.author}</td>
                    <td>
                      <span className={`status-pill ${post.published ? "published" : "draft"}`}>
                        {post.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td style={{ fontSize: "0.8rem", whiteSpace: "nowrap" }}>
                      {new Date(post.createdAt).toLocaleDateString()}
                    </td>
                    <td>
                      <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                        <Link
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          className="btn btn-ghost btn-sm"
                          style={{ padding: "6px 10px", fontSize: "0.75rem" }}
                        >
                          👁
                        </Link>
                        <Link
                          href={`/admin/edit/${post.id}`}
                          className="btn btn-ghost btn-sm"
                          style={{ padding: "6px 10px", fontSize: "0.75rem" }}
                        >
                          ✏️
                        </Link>
                        <button
                          onClick={() => togglePublish(post)}
                          className="btn btn-ghost btn-sm"
                          style={{
                            padding: "6px 10px",
                            fontSize: "0.75rem",
                            color: post.published ? "var(--muted)" : "var(--lime)",
                          }}
                        >
                          {post.published ? "Unpublish" : "Publish"}
                        </button>
                        <button
                          onClick={() => deletePost(post.id)}
                          className="btn btn-sm"
                          disabled={deleting === post.id}
                          style={{
                            padding: "6px 10px",
                            fontSize: "0.75rem",
                            background: "rgba(247,37,133,0.08)",
                            border: "1px solid rgba(247,37,133,0.2)",
                            color: "#ff6b9d",
                            borderRadius: "8px",
                          }}
                        >
                          {deleting === post.id ? "..." : "🗑"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>

      {/* Toast */}
      {toast && (
        <div className={`toast ${toast.type}`}>
          <span>{toast.type === "success" ? "✅" : "❌"}</span>
          {toast.msg}
        </div>
      )}
    </div>
  );
}
