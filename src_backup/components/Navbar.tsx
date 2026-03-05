"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="navbar-inner">
            {/* Logo */}
            <Link href="/" className="navbar-logo">
              <span className="navbar-logo-dot" />
              <span>
                HelpWith<span style={{ color: "var(--lime)" }}>My</span>Assignments
              </span>
            </Link>

            {/* Desktop links */}
            <ul className="navbar-links">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={pathname === l.href ? "active" : ""}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="navbar-cta">
              <Link href="/contact" className="btn btn-primary btn-sm">
                Get Help Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <button
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span className="hamburger-line" />
                <span className="hamburger-line" />
                <span className="hamburger-line" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="mobile-menu"
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="mobile-menu-close"
            aria-label="Close menu"
          >
            ✕
          </button>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`mobile-menu-link ${pathname === l.href ? "active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn btn-primary btn-lg mobile-menu-cta"
          >
            Get Help Now
          </Link>
        </div>
      )}
    </>
  );
}