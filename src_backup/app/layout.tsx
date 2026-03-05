import type { Metadata } from "next";
import "./globals.css"; // Changed from "../styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://helpwithmyassignments.com"
  ),
  title: {
    default: "Best Assignment Writing Service | Expert Help Online",
    template: "%s | HelpWithMyAssignments",
  },
  description:
    "Top-rated assignment writing service trusted by 50,000+ students worldwide. Expert academic support for essays, dissertations, coursework & more. Get instant help today.",
  keywords: [
    "assignment writing service",
    "assignment writing help",
    "online assignment writing service",
    "assignment help online",
    "best assignment writing service",
    "cheap assignment writing service",
    "urgent assignment writing help",
  ],
  openGraph: {
    type: "website",
    siteName: "HelpWithMyAssignments",
    title: "Best Assignment Writing Service | Expert Help Online",
    description:
      "Top-rated assignment writing service trusted by 50,000+ students worldwide.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Assignment Writing Service | Expert Help Online",
    description:
      "Top-rated assignment writing service trusted by 50,000+ students worldwide.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "HelpWithMyAssignments",
  description:
    "Professional assignment writing service providing expert academic support to students worldwide.",
  url: "https://helpwithmyassignments.com",
  logo: "https://helpwithmyassignments.com/logo.svg",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "12500",
    bestRating: "5",
  },
  areaServed: ["Australia", "United Kingdom", "United States", "Canada", "UAE", "India"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Assignment Writing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Essay Writing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dissertation Help" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Coursework Help" } },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}