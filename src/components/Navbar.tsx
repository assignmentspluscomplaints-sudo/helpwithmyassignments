"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// Add these constants or import them from your constants file
const COUNTRIES = [
  { code: "us", name: "United States", flag: "🇺🇸", path: "/countries/us" },
  { code: "uk", name: "United Kingdom", flag: "🇬🇧", path: "/countries/uk" },
  { code: "ca", name: "Canada", flag: "🇨🇦", path: "/countries/ca" },
  { code: "au", name: "Australia", flag: "🇦🇺", path: "/countries/au" },
  { code: "nz", name: "New Zealand", flag: "🇳🇿", path: "/countries/nz" },
  { code: "au", name: "India", flag: "🇮🇳", path: "/countries/in" },
  { code: "nz", name: "United Arab Emirates", flag: "🇦🇪", path: "/countries/uae" },
];

const SERVICES = [
  { name: "Essay Writing", path: "/services/essay-writing" },
  { name: "Dissertation Help", path: "/services/dissertation" },
  { name: "Assignment Help", path: "/services/assignment" },
  { name: "Coursework Help", path: "/services/coursework" },
];

const SITE = {
  phone: "+1 (555) 123-4567",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [countriesDropdownOpen, setCountriesDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setMenuOpen(false);
    setCountriesDropdownOpen(false);
    setServicesDropdownOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target || !target.closest(".dropdown-container")) {
        setCountriesDropdownOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="navbar-inner">
            {/* Logo */}
            <Link href="/" className="navbar-logo" onClick={closeMobileMenu}>
              <Image
                src="/logo.png"
                alt="HelpWithMyAssignments Logo"
                width={40}
                height={40}
                className="navbar-logo-image"
              />
              <span className="navbar-logo-text">
                HelpWith<span style={{ color: "var(--lime)" }}>My</span>Assignments
              </span>
            </Link>

            {/* Desktop links with dropdowns */}
            <ul className="navbar-links">
              <li className="nav-item">
                <Link
                  href="/"
                  className={pathname === "/" ? "active" : ""}
                >
                  Home
                </Link>
              </li>

              {/* Countries Dropdown */}
              <li className="nav-item dropdown-container">
                <button
                  className={`nav-link dropdown-toggle ${countriesDropdownOpen ? "active" : ""}`}
                  onClick={() => setCountriesDropdownOpen(!countriesDropdownOpen)}
                  aria-expanded={countriesDropdownOpen}
                  aria-haspopup="true"
                >
                  Countries
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {countriesDropdownOpen && (
                  <ul className="dropdown-menu" role="menu">
                    {COUNTRIES.map((country) => (
                      <li key={country.code} role="none">
                        <Link
                          href={country.path}
                          className="dropdown-link"
                          role="menuitem"
                          onClick={() => setCountriesDropdownOpen(false)}
                        >
                          <span className="flag">{country.flag}</span>
                          {country.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>



              {links.slice(1).map((l) => (
                <li key={l.href} className="nav-item">
                  <Link
                    href={l.href}
                    className={pathname === l.href ? "active" : ""}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA and Contact */}
            <div className="navbar-cta">
              <Link href="/contact" className="btn btn-primary btn-sm">
                Start Order
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <button
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
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
        <>
          <div className="mobile-menu">
            <button
              onClick={closeMobileMenu}
              className="mobile-menu-close"
              aria-label="Close menu"
            >
              ✕
            </button>
            
            {/* Mobile Navigation */}
            <nav className="mobile-nav">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className={`mobile-menu-link ${pathname === "/" ? "active" : ""}`}
              >
                🏠 Home
              </Link>

              {/* Countries Dropdown for Mobile */}
              <details className="mobile-dropdown">
                <summary className="mobile-dropdown-summary">
                  🌍 Countries
                </summary>
                <div className="mobile-dropdown-content">
                  {COUNTRIES.map((country) => (
                    <Link
                      key={country.code}
                      href={country.path}
                      onClick={closeMobileMenu}
                      className="mobile-dropdown-link"
                    >
                      <span className="flag">{country.flag}</span>
                      {country.name}
                    </Link>
                  ))}
                </div>
              </details>

              <Link
                href="/about"
                onClick={closeMobileMenu}
                className={`mobile-menu-link ${pathname === "/about" ? "active" : ""}`}
              >
                ℹ️ About
              </Link>

              <Link
                href="/blog"
                onClick={closeMobileMenu}
                className={`mobile-menu-link ${pathname === "/blog" ? "active" : ""}`}
              >
                📝 Blog
              </Link>

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className={`mobile-menu-link ${pathname === "/contact" ? "active" : ""}`}
              >
                ✉️ Contact
              </Link>

              {/* Mobile CTA */}
              <div className="mobile-cta">

                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="btn btn-primary btn-lg mobile-order-btn"
                >
                  Start Order
                </Link>
              </div>
            </nav>
          </div>
          
          {/* Mobile Overlay */}
          <div className="mobile-overlay" onClick={closeMobileMenu} />
        </>
      )}
    </>
  );
}