// src/components/HoverLink.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function HoverLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={href}
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        transform: hover ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.2s ease",
      }}
    >
      {children}
    </Link>
  );
}