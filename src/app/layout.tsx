// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";

// Font optimization with next/font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display-alt",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
  fallback: ["Georgia", "serif"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e10" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://helpassignments.com'),
  title: {
    template: "%s | Help With My Assignments",
    default: "Help With My Assignments | Expert Academic Writing Service",
  },
  description: "Top-rated assignment writing service trusted by 50,000+ students. Get expert help with essays, dissertations, coursework & more. 24/7 support. Plagiarism-free guaranteed.",
  keywords: [
    "assignment writing service",
    "assignment writing services",
    "assignment writing help",
    "online assignment writing service",
    "assignment help online",
    "cheap assignment writing service",
    "best assignment writing service",
    "urgent assignment writing help",
    "custom assignment writing service",
    "academic writing help",
    "essay writing service",
    "dissertation help",
    "thesis writing service",
    "coursework help",
    "homework help online"
  ],
  authors: [{ name: "Help With My Assignments", url: "https://helpassignments.com" }],
  creator: "Help With My Assignments",
  publisher: "Help With My Assignments",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Help With My Assignments | Expert Academic Writing Service",
    description: "Top-rated assignment writing service trusted by 50,000+ students. Get expert help with essays, dissertations, coursework & more.",
    url: "https://helpassignments.com",
    siteName: "Help With My Assignments",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Help With My Assignments - Expert Academic Writing Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Help With My Assignments | Expert Academic Writing Service",
    description: "Top-rated assignment writing service trusted by 50,000+ students.",
    images: ["/twitter-image.jpg"],
    creator: "@helpassignments",
    site: "@helpassignments",
  },
  alternates: {
    canonical: "https://helpassignments.com",
    languages: {
      'en-US': 'https://helpassignments.com',
      'en-AU': 'https://helpassignments.com/au',
      'en-GB': 'https://helpassignments.com/uk',
      'en-CA': 'https://helpassignments.com/ca',
      'en-NZ': 'https://helpassignments.com/nz',
      'en-IE': 'https://helpassignments.com/ie',
    },
  },
  // FIXED: Use 'other' object for custom verification codes
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      'bing': 'your-bing-verification-code',
      'facebook-domain-verification': 'your-facebook-verification-code',
      'pinterest-site-verification': 'your-pinterest-code',
      'baidu-site-verification': 'your-baidu-code',
      'naver-site-verification': 'your-naver-code',
    },
  },
  category: "education",
  // SIMPLIFIED FAVICON CONFIGURATION - This is the key part
  icons: {
  icon: '/logo.png',
  shortcut: '/logo.png',
  apple: '/logo.png',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    title: "Help With My Assignments",
    statusBarStyle: "default",
  },
  applicationName: "Help With My Assignments",
  referrer: "origin-when-cross-origin",
  other: {
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#635bff',
    'msapplication-TileImage': '/mstile-150x150.png',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://helpassignments.com",
    name: "Help With My Assignments",
    url: "https://helpassignments.com",
    logo: "https://helpassignments.com/logo.png",
    image: "https://helpassignments.com/hero-image.jpg",
    description: "Premium assignment writing service with PhD experts. Get plagiarism-free academic help 24/7 for essays, dissertations, coursework, and more.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10001",
      streetAddress: "488 Madison Ave Suite 1000"
    },
    priceRange: "$$$",
    telephone: "+1-800-555-0123",
    email: "help@helpassignments.com",
    sameAs: [
      "https://facebook.com/helpassignments",
      "https://twitter.com/helpassignments",
      "https://linkedin.com/company/helpassignments",
      "https://instagram.com/helpassignments",
      "https://pinterest.com/helpassignments",
      "https://youtube.com/@helpassignments"
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59"
      }
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "52347",
      bestRating: "5",
      worstRating: "1"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${playfair.variable}`}>
      <head>
        {/* ULTRA SIMPLE FAVICON - This guarantees it works */}
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/logo.png" />
        
        {/* Preconnect to important origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}