"use client";

import Link from "next/link";

export default function LocationLink({
  href,
  flag,
  country,
}: {
  href: string;
  flag: string;
  country: string;
}) {
  return (
    <Link
      href={href}
      className="glass"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "16px 24px",
        borderRadius: "100px",
        transition: "all 0.3s",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border-accent)";
        el.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.style.transform = "translateY(0)";
      }}
    >
      <span style={{ fontSize: "1.4rem" }}>{flag}</span>
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "0.95rem",
        }}
      >
        {country}
      </span>
    </Link>
  );
}
