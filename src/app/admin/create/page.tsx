"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CATEGORIES = [
  "General",
  "Essay Writing",
  "Dissertation",
  "Study Tips",
  "Law",
  "Nursing",
  "MBA",
  "Programming",
  "Finance",
  "Research",
  "Assignment Help",
];

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function AdminCreate() {
  const router = useRouter();
  const editorRef = useRef<HTMLDivElement>(null);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    coverImage: "",
    metaTitle: "",
    metaDesc: "",
    focusKw: "",
    category: "General",
    author: "Admin",
    readTime: "5",
    published: false,
  });

  useEffect(() => {
    fetch("/api/auth/verify").then((r) => {
      if (!r.ok) router.push("/admin/login");
    });
  }, [router]);

  // Auto-generate slug from title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setForm((prev) => ({
      ...prev,
      title,
      slug: slugify(title),
      metaTitle: title ? `${title} | HelpWithMyAssignments` : "",
    }));
  };

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  // Toolbar actions
  const exec = (command: string, value?: string) => {
    editorRef.current?.focus();
    document.execCommand(command, false, value);
  };

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
    // Move cursor after
    const newRange = document.createRange();
    newRange.setStartAfter(heading);
    newRange.collapse(true);
    selection.removeAllRanges();
    selection.addRange(newRange);
    // Add paragraph after for continuation
    const p = document.createElement("p");
    p.innerHTML = "<br>";
    heading.insertAdjacentElement("afterend", p);
  };

  const handleSave = async (publishNow = false) => {
    const content = editorRef.current?.innerHTML || "";

    if (!form.title.trim() || !form.slug.trim() || !form.excerpt.trim()) {
      showToast("❌ Title, slug and excerpt are required");
      return;
    }
    if (!content || content === "<br>" || content.trim() === "") {
      showToast("❌ Content cannot be empty");
      return;
    }

    setSaving(true);
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          content,
          readTime: parseInt(form.readTime),
          published: publishNow || form.published,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        showToast(`❌ ${data.error || "Failed to save"}`);
        return;
      }

      showToast("✅ Post saved!");
      setTimeout(() => router.push("/admin/posts"), 1000);
    } catch {
      showToast("❌ Network error");
    } finally {
      setSaving(false);
    }
  };

  const toolbarBtns = [
    { label: "H1", action: () => insertHeading(1), title: "Heading 1 (H1 - SEO Main)" },
    { label: "H2", action: () => insertHeading(2), title: "Heading 2" },
    { label: "H3", action: () => insertHeading(3), title: "Heading 3" },
    { label: "sep" },
    { label: "B", action: () => exec("bold"), title: "Bold" },
    { label: "I", action: () => exec("italic"), title: "Italic" },
    { label: "U", action: () => exec("underline"), title: "Underline" },
    { label: "sep" },
    { label: "UL", action: () => exec("insertUnorderedList"), title: "Bullet List" },
    { label: "OL", action: () => exec("insertOrderedList"), title: "Numbered List" },
    { label: "sep" },
    { label: "🔗", action: () => {
      const url = prompt("Enter URL:");
      if (url) exec("createLink", url);
    }, title: "Insert Link" },
    { label: "❝", action: () => exec("formatBlock", "blockquote"), title: "Blockquote" },
    { label: "sep" },
    { label: "↩", action: () => exec("undo"), title: "Undo" },
    { label: "↪", action: () => exec("redo"), title: "Redo" },
  ];

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-logo">
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--lime)", display: "inline-block" }} />
          <span>HWM<span style={{ color: "var(--lime)" }}>A</span></span>
        </div>
        <ul className="admin-nav">
          <li><Link href="/admin/posts"><span>📄</span> All Posts</Link></li>
          <li><Link href="/admin/create" className="active"><span>✏️</span> New Post</Link></li>
          <li><Link href="/blog"><span>🌐</span> View Blog</Link></li>
          <li><Link href="/"><span>🏠</span> View Site</Link></li>
        </ul>
      </aside>

      {/* Main */}
      <main className="admin-main">
        <div className="admin-header">
          <div>
            <h1 className="admin-title">New Post</h1>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem", marginTop: "4px" }}>
              Create SEO-optimized blog content
            </p>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => handleSave(false)}
              disabled={saving}
            >
              Save as Draft
            </button>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => handleSave(true)}
              disabled={saving}
            >
              {saving ? "Saving..." : "Publish Post"}
            </button>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "24px" }}>
          {/* Left: main editor */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Title */}
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Post Title *</label>
              <input
                type="text"
                className="form-input"
                value={form.title}
                onChange={handleTitleChange}
                placeholder="Your amazing post title..."
                style={{ fontSize: "1rem" }}
              />
            </div>

            {/* Slug */}
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">URL Slug *</label>
              <div style={{ position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    left: "14px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "var(--muted2)",
                    fontSize: "0.85rem",
                    pointerEvents: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  /blog/
                </span>
                <input
                  type="text"
                  className="form-input"
                  value={form.slug}
                  onChange={(e) => setForm((p) => ({ ...p, slug: slugify(e.target.value) }))}
                  placeholder="my-post-slug"
                  style={{ paddingLeft: "58px" }}
                />
              </div>
            </div>

            {/* Excerpt */}
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Excerpt / Summary * (shown in cards)</label>
              <textarea
                className="form-textarea"
                value={form.excerpt}
                onChange={(e) => setForm((p) => ({ ...p, excerpt: e.target.value }))}
                placeholder="A brief, compelling description of this post (also used as meta description if not specified)..."
                rows={3}
              />
            </div>

            {/* Content Editor */}
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">
                Content * &nbsp;
                <span style={{ color: "var(--muted2)", fontWeight: 400 }}>
                  — Use H1 for main heading, H2 for sections, H3 for subsections
                </span>
              </label>
              <div className="content-editor">
                <div className="editor-toolbar">
                  {toolbarBtns.map((btn, i) =>
                    btn.label === "sep" ? (
                      <div key={i} className="editor-separator" />
                    ) : (
                      <button
                        key={i}
                        type="button"
                        className="editor-btn"
                        onClick={btn.action}
                        title={btn.title}
                      >
                        {btn.label}
                      </button>
                    )
                  )}
                </div>
                <div
                  ref={editorRef}
                  className="editor-content"
                  contentEditable
                  suppressContentEditableWarning
                  data-placeholder="Start writing your content here... Click H1 to add a main heading, H2 for sections, H3 for sub-sections. Use B for bold, I for italic."
                  style={{ minHeight: "400px" }}
                  onInput={() => {
                    const el = editorRef.current;
                    if (!el) return;
                    if (!el.innerHTML || el.innerHTML === "<br>") {
                      el.setAttribute("data-empty", "true");
                    } else {
                      el.removeAttribute("data-empty");
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right: sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Publish options */}
            <div className="glass" style={{ padding: "20px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 700, marginBottom: "16px" }}>
                Publish Settings
              </h3>
              <div className="form-group" style={{ marginBottom: "12px" }}>
                <label className="form-label">Category</label>
                <select
                  className="form-select"
                  value={form.category}
                  onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))}
                >
                  {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div className="form-group" style={{ marginBottom: "12px" }}>
                <label className="form-label">Author</label>
                <input
                  type="text"
                  className="form-input"
                  value={form.author}
                  onChange={(e) => setForm((p) => ({ ...p, author: e.target.value }))}
                  placeholder="Author name"
                />
              </div>
              <div className="form-group" style={{ marginBottom: "0" }}>
                <label className="form-label">Read Time (minutes)</label>
                <input
                  type="number"
                  className="form-input"
                  value={form.readTime}
                  onChange={(e) => setForm((p) => ({ ...p, readTime: e.target.value }))}
                  min="1"
                  max="60"
                />
              </div>
            </div>

            {/* Cover image */}
            <div className="glass" style={{ padding: "20px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 700, marginBottom: "16px" }}>
                Cover Image
              </h3>
              <div className="form-group" style={{ marginBottom: "0" }}>
                <label className="form-label">Image URL</label>
                <input
                  type="url"
                  className="form-input"
                  value={form.coverImage}
                  onChange={(e) => setForm((p) => ({ ...p, coverImage: e.target.value }))}
                  placeholder="https://..."
                />
              </div>
              {form.coverImage && (
                <div
                  style={{
                    marginTop: "12px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    aspectRatio: "16/9",
                    background: "var(--bg)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={form.coverImage}
                    alt="Cover preview"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
              )}
            </div>

            {/* SEO Settings */}
            <div className="glass" style={{ padding: "20px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 700, marginBottom: "4px" }}>
                SEO Settings
              </h3>
              <p style={{ color: "var(--muted2)", fontSize: "0.78rem", marginBottom: "16px" }}>
                Optimize for search engines
              </p>

              <div className="form-group" style={{ marginBottom: "12px" }}>
                <label className="form-label">
                  Focus Keyword
                </label>
                <input
                  type="text"
                  className="form-input"
                  value={form.focusKw}
                  onChange={(e) => setForm((p) => ({ ...p, focusKw: e.target.value }))}
                  placeholder="e.g. assignment writing service"
                />
              </div>

              <div className="form-group" style={{ marginBottom: "12px" }}>
                <label className="form-label">
                  Meta Title
                  <span style={{ color: form.metaTitle.length > 60 ? "var(--pink)" : "var(--muted2)", marginLeft: "8px" }}>
                    {form.metaTitle.length}/60
                  </span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  value={form.metaTitle}
                  onChange={(e) => setForm((p) => ({ ...p, metaTitle: e.target.value }))}
                  placeholder="SEO page title..."
                  maxLength={70}
                />
              </div>

              <div className="form-group" style={{ marginBottom: "0" }}>
                <label className="form-label">
                  Meta Description
                  <span style={{ color: form.metaDesc.length > 155 ? "var(--pink)" : "var(--muted2)", marginLeft: "8px" }}>
                    {form.metaDesc.length}/155
                  </span>
                </label>
                <textarea
                  className="form-textarea"
                  value={form.metaDesc}
                  onChange={(e) => setForm((p) => ({ ...p, metaDesc: e.target.value }))}
                  placeholder="A concise description for search results..."
                  rows={3}
                  maxLength={160}
                />
              </div>

              {/* SEO preview */}
              {(form.metaTitle || form.title) && (
                <div
                  style={{
                    marginTop: "12px",
                    padding: "12px",
                    background: "var(--bg)",
                    borderRadius: "8px",
                    border: "1px solid var(--border)",
                  }}
                >
                  <p style={{ fontSize: "0.72rem", color: "var(--muted2)", marginBottom: "6px", fontFamily: "var(--font-display)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    Google Preview
                  </p>
                  <p style={{ fontSize: "0.85rem", color: "#8ab4f8", marginBottom: "2px" }}>
                    {form.metaTitle || form.title}
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "#34a853" }}>
                    helpwithmyassignments.com/blog/{form.slug || "your-slug"}
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "#bdc1c6", marginTop: "2px", lineHeight: 1.5 }}>
                    {form.metaDesc || form.excerpt || "Add a meta description..."}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {toast && (
        <div className={`toast ${toast.startsWith("✅") ? "success" : "error"}`}>
          {toast}
        </div>
      )}
    </div>
  );
}
