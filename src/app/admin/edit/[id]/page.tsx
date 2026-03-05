"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";

const CATEGORIES = [
  "General", "Essay Writing", "Dissertation", "Study Tips",
  "Law", "Nursing", "MBA", "Programming", "Finance", "Research", "Assignment Help",
];

function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/(^-|-$)/g, "");
}

export default function AdminEdit() {
  const router = useRouter();
  const params = useParams();
  const editorRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const [form, setForm] = useState({
    title: "", slug: "", excerpt: "", coverImage: "",
    metaTitle: "", metaDesc: "", focusKw: "",
    category: "General", author: "Admin", readTime: "5", published: false,
  });

  useEffect(() => {
    const init = async () => {
      // ✅ Removed /api/auth/verify call — middleware handles auth server-side.
      // Just fetch the post directly; 401 means session expired → redirect to login.
      const res = await fetch(`/api/posts/${params.id}`, { credentials: "include" });
      if (!res.ok) {
        router.push(res.status === 401 ? "/admin/login" : "/admin/posts");
        return;
      }
      const data = await res.json();
      const post = data.post;
      setForm({
        title: post.title, slug: post.slug, excerpt: post.excerpt,
        coverImage: post.coverImage || "", metaTitle: post.metaTitle || "",
        metaDesc: post.metaDesc || "", focusKw: post.focusKw || "",
        category: post.category, author: post.author,
        readTime: String(post.readTime), published: post.published,
      });
      if (editorRef.current) editorRef.current.innerHTML = post.content;
      setLoading(false);
    };
    init();
  }, [params.id, router]);

  const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(null), 3000); };
  const exec = (command: string, value?: string) => { editorRef.current?.focus(); document.execCommand(command, false, value); };

  const insertHeading = (level: number) => {
    editorRef.current?.focus();
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;
    const range = selection.getRangeAt(0);
    const text = range.toString() || `Heading ${level}`;
    const heading = document.createElement(`h${level}`);
    heading.textContent = text;
    range.deleteContents();
    range.insertNode(heading);
    const newRange = document.createRange();
    newRange.setStartAfter(heading);
    newRange.collapse(true);
    selection.removeAllRanges();
    selection.addRange(newRange);
    const p = document.createElement("p");
    p.innerHTML = "<br>";
    heading.insertAdjacentElement("afterend", p);
  };

  const handleSave = async () => {
    const content = editorRef.current?.innerHTML || "";
    if (!form.title.trim() || !form.slug.trim() || !form.excerpt.trim()) {
      showToast("❌ Title, slug and excerpt required"); return;
    }
    setSaving(true);
    try {
      const res = await fetch(`/api/posts/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, content, readTime: parseInt(form.readTime) }),
        credentials: "include",
      });
      if (!res.ok) { const d = await res.json(); showToast(`❌ ${d.error || "Failed"}`); return; }
      showToast("✅ Post updated!");
      setTimeout(() => router.push("/admin/posts"), 1000);
    } catch { showToast("❌ Network error"); }
    finally { setSaving(false); }
  };

  const toolbarBtns = [
    { label: "H1", action: () => insertHeading(1) }, { label: "H2", action: () => insertHeading(2) }, { label: "H3", action: () => insertHeading(3) },
    { label: "sep" },
    { label: "B", action: () => exec("bold") }, { label: "I", action: () => exec("italic") }, { label: "U", action: () => exec("underline") },
    { label: "sep" },
    { label: "UL", action: () => exec("insertUnorderedList") }, { label: "OL", action: () => exec("insertOrderedList") },
    { label: "sep" },
    { label: "🔗", action: () => { const u = prompt("URL:"); if (u) exec("createLink", u); } },
    { label: "❝", action: () => exec("formatBlock", "blockquote") },
    { label: "sep" },
    { label: "↩", action: () => exec("undo") }, { label: "↪", action: () => exec("redo") },
  ];

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="loader" />
      </div>
    );
  }

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-logo">
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--lime)", display: "inline-block" }} />
          <span>HWM<span style={{ color: "var(--lime)" }}>A</span></span>
        </div>
        <ul className="admin-nav">
          <li><Link href="/admin/posts"><span>📄</span> All Posts</Link></li>
          <li><Link href="/admin/create"><span>✏️</span> New Post</Link></li>
          <li><Link href="/blog"><span>🌐</span> View Blog</Link></li>
        </ul>
      </aside>

      <main className="admin-main">
        <div className="admin-header">
          <div>
            <h1 className="admin-title">Edit Post</h1>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem", marginTop: "4px" }}>
              {form.published ? "✅ Published" : "📝 Draft"} · /blog/{form.slug}
            </p>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Link href="/admin/posts" className="btn btn-ghost btn-sm">← Back</Link>
            <button className="btn btn-primary btn-sm" onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Update Post"}
            </button>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "24px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Post Title *</label>
              <input type="text" className="form-input" value={form.title} onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))} placeholder="Post title..." />
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">URL Slug *</label>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "var(--muted2)", fontSize: "0.85rem", pointerEvents: "none" }}>/blog/</span>
                <input type="text" className="form-input" value={form.slug} onChange={(e) => setForm((p) => ({ ...p, slug: slugify(e.target.value) }))} style={{ paddingLeft: "58px" }} />
              </div>
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Excerpt *</label>
              <textarea className="form-textarea" value={form.excerpt} rows={3} onChange={(e) => setForm((p) => ({ ...p, excerpt: e.target.value }))} placeholder="Brief summary..." />
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Content * — Use H1, H2, H3 for SEO structure</label>
              <div className="content-editor">
                <div className="editor-toolbar">
                  {toolbarBtns.map((btn, i) =>
                    btn.label === "sep" ? <div key={i} className="editor-separator" /> :
                    <button key={i} type="button" className="editor-btn" onClick={btn.action}>{btn.label}</button>
                  )}
                </div>
                <div ref={editorRef} className="editor-content" contentEditable suppressContentEditableWarning style={{ minHeight: "400px" }} />
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div className="glass" style={{ padding: "20px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 700, marginBottom: "16px" }}>Settings</h3>
              <div className="form-group" style={{ marginBottom: "12px" }}>
                <label className="form-label">Status</label>
                <div style={{ display: "flex", gap: "8px" }}>
                  {[{ v: false, l: "Draft" }, { v: true, l: "Published" }].map(({ v, l }) => (
                    <button key={l} type="button" onClick={() => setForm((p) => ({ ...p, published: v }))} className="btn btn-sm"
                      style={{ flex: 1, justifyContent: "center", background: form.published === v ? "rgba(180,255,80,0.1)" : "var(--surface)", border: `1px solid ${form.published === v ? "rgba(180,255,80,0.3)" : "var(--border)"}`, color: form.published === v ? "var(--lime)" : "var(--muted)", borderRadius: "8px" }}>
                      {l}
                    </button>
                  ))}
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: "12px" }}>
                <label className="form-label">Category</label>
                <select className="form-select" value={form.category} onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))}>
                  {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div className="form-group" style={{ marginBottom: "12px" }}>
                <label className="form-label">Author</label>
                <input type="text" className="form-input" value={form.author} onChange={(e) => setForm((p) => ({ ...p, author: e.target.value }))} />
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Read Time (mins)</label>
                <input type="number" className="form-input" value={form.readTime} min="1" max="60" onChange={(e) => setForm((p) => ({ ...p, readTime: e.target.value }))} />
              </div>
            </div>
            <div className="glass" style={{ padding: "20px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 700, marginBottom: "16px" }}>Cover Image</h3>
              <input type="url" className="form-input" value={form.coverImage} onChange={(e) => setForm((p) => ({ ...p, coverImage: e.target.value }))} placeholder="https://..." />
            </div>
            <div className="glass" style={{ padding: "20px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 700, marginBottom: "16px" }}>SEO</h3>
              <div className="form-group" style={{ marginBottom: "12px" }}>
                <label className="form-label">Focus Keyword</label>
                <input type="text" className="form-input" value={form.focusKw} onChange={(e) => setForm((p) => ({ ...p, focusKw: e.target.value }))} placeholder="assignment writing service" />
              </div>
              <div className="form-group" style={{ marginBottom: "12px" }}>
                <label className="form-label">Meta Title ({form.metaTitle.length}/60)</label>
                <input type="text" className="form-input" value={form.metaTitle} onChange={(e) => setForm((p) => ({ ...p, metaTitle: e.target.value }))} maxLength={70} />
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Meta Description ({form.metaDesc.length}/155)</label>
                <textarea className="form-textarea" value={form.metaDesc} rows={3} onChange={(e) => setForm((p) => ({ ...p, metaDesc: e.target.value }))} maxLength={160} />
              </div>
            </div>
          </div>
        </div>
      </main>

      {toast && <div className={`toast ${toast.startsWith("✅") ? "success" : "error"}`}>{toast}</div>}
    </div>
  );
}