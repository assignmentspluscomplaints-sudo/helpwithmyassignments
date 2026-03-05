import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <span className="navbar-logo-dot" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--lime)", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.15rem" }}>
                HelpWith<span style={{ color: "var(--lime)" }}>My</span>Assignments
              </span>
            </div>
            <p>
              Trusted by 50,000+ students worldwide. Expert academic support for every subject, every deadline.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              {["🐦", "📘", "📸", "💼"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.9rem",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--lime)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(180,255,80,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.background = "none";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {[
                ["Assignment Writing", "/assignment-writing-service"],
                ["Essay Help", "/essay-writing-service"],
                ["Dissertation Help", "/dissertation-help"],
                ["Coursework Help", "/coursework-help"],
                ["Law Assignment", "/law-assignment-writing-service"],
                ["Nursing Assignment", "/nursing-assignment-writing-service"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="footer-col">
            <h4>Locations</h4>
            <ul>
              {[
                ["Australia", "/australia"],
                ["United Kingdom", "/uk"],
                ["United States", "/us"],
                ["Canada", "/canada"],
                ["UAE", "/uae"],
                ["India", "/india"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              {[
                ["About Us", "/about"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
                ["Privacy Policy", "/privacy-policy"],
                ["Terms of Service", "/terms"],
                ["Refund Policy", "/refund-policy"],
                ["Disclaimer", "/disclaimer"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} HelpWithMyAssignments. All rights reserved.</p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.8rem",
              color: "var(--lime)",
            }}
          >
            Academic Support · 24/7 Available · 100% Confidential
          </p>
        </div>
      </div>
    </footer>
  );
}
