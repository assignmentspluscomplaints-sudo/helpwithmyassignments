"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        setLoading(false);
        return;
      }

      // ✅ Do NOT call /api/auth/verify here.
      // On Hostinger the browser hasn't committed the Set-Cookie header
      // before the next fetch fires, so verify returns 401 every time
      // → causes the endless redirect / "network error" loop.
      // The middleware checks the cookie server-side on every page load,
      // so just navigate directly — it will work.
      router.push("/admin/posts");
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: "10%",
          right: "20%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(180,255,80,0.06), transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div style={{ width: "100%", maxWidth: "420px", animation: "fadeUp 0.6s ease forwards" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "1.25rem",
              marginBottom: "8px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "var(--lime)",
                display: "inline-block",
              }}
            />
            HelpWith<span style={{ color: "var(--lime)" }}>My</span>Assignments
          </div>
          <p
            style={{
              color: "var(--muted2)",
              fontSize: "0.85rem",
              fontFamily: "var(--font-display)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Admin Panel
          </p>
        </div>

        <div className="glass-strong" style={{ padding: "40px" }}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              fontWeight: 800,
              marginBottom: "8px",
            }}
          >
            Sign In
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "28px" }}>
            Access your blog management dashboard
          </p>

          {error && (
            <div
              style={{
                background: "rgba(247, 37, 133, 0.08)",
                border: "1px solid rgba(247, 37, 133, 0.25)",
                borderRadius: "10px",
                padding: "12px 16px",
                marginBottom: "20px",
                fontSize: "0.875rem",
                color: "#ff6b9d",
              }}
            >
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group" style={{ marginBottom: "28px" }}>
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••"
                required
                autoComplete="current-password"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
              disabled={loading}
            >
              {loading ? (
                <span
                  className="loader"
                  style={{ width: "18px", height: "18px", borderWidth: "2px" }}
                />
              ) : (
                <>
                  Sign In
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>

        <p style={{ textAlign: "center", marginTop: "20px", color: "var(--muted2)", fontSize: "0.8rem" }}>
          Protected area · HelpWithMyAssignments Admin
        </p>
      </div>
    </div>
  );
}