import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocationLink from "@/components/LocationLink";
import FaqItem from "@/components/FaqItem";
import { prisma } from "@/lib/prisma";
import BlogCard from "@/components/BlogCard";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Best Assignment Writing Service | Expert Help Online",
  description: "Top-rated assignment writing service trusted by 50,000+ students. Get expert help with essays, dissertations, coursework & more. 24/7 support. Plagiarism-free guaranteed.",
  alternates: {
    canonical: "https://yourdomain.com",
  },
};

const features = [
  {
    icon: "⚡",
    title: "Instant Delivery",
    desc: "Tight deadline? No stress. We deliver quality academic support within hours — even same-day for urgent requests.",
  },
  {
    icon: "🎓",
    title: "PhD-Level Experts",
    desc: "Our writers hold advanced degrees in 100+ subjects. Every assignment is handled by a subject-matter specialist.",
  },
  {
    icon: "🔒",
    title: "100% Confidential",
    desc: "Your identity is never shared. We use bank-level encryption to protect your data and academic privacy.",
  },
  {
    icon: "✅",
    title: "Zero Plagiarism",
    desc: "Every paper is original, checked with Turnitin before delivery. Your academic integrity stays intact.",
  },
  {
    icon: "💬",
    title: "24/7 Support",
    desc: "Real humans, real help. Our support team is online around the clock to answer every question.",
  },
  {
    icon: "💰",
    title: "Best Price Match",
    desc: "High quality doesn't mean high prices. Get expert academic support that won't drain your student budget.",
  },
];

const subjects = [
  { icon: "⚖️", name: "Law", href: "/law-assignment-writing-service", description: "Expert law assignment help" },
  { icon: "🏥", name: "Nursing", href: "/nursing-assignment-writing-service", description: "Professional nursing paper writing" },
  { icon: "📊", name: "MBA", href: "/mba-assignment-writing-service", description: "Business school assignment help" },
  { icon: "💻", name: "Programming", href: "/programming-assignment-writing-service", description: "Coding and software assignments" },
  { icon: "💰", name: "Finance", href: "/finance-assignment-writing-service", description: "Financial analysis and reports" },
  { icon: "🔬", name: "Science", href: "/science-assignment-help", description: "Lab reports and research papers" },
  { icon: "📈", name: "Marketing", href: "/marketing-assignment-help", description: "Marketing strategies and analysis" },
  { icon: "🏗️", name: "Engineering", href: "/engineering-assignment-writing-service", description: "Engineering projects and calculations" },
];

const locations = [
  { flag: "🇦🇺", country: "Australia", href: "/countries/au", cities: ["Sydney", "Melbourne", "Perth", "Brisbane"] },
  { flag: "🇬🇧", country: "United Kingdom", href: "/countries/uk", cities: ["London", "Manchester", "Birmingham"] },
  { flag: "🇺🇸", country: "United States", href: "/countries/us", cities: ["New York", "Los Angeles", "Chicago"] },
  { flag: "🇨🇦", country: "Canada", href: "/countries/ca", cities: ["Toronto", "Vancouver", "Montreal"] },
  { flag: "🇦🇪", country: "UAE", href: "/countries/uae", cities: ["Dubai", "Abu Dhabi"] },
  { flag: "🇮🇳", country: "India", href: "/countries/in", cities: ["Mumbai", "Delhi", "Bangalore"] },
];

const testimonials = [
  {
    text: "Submitted my law assignment at 6 AM and received expert help within 3 hours. The quality was incredible. Scored 94%. Absolutely recommend.",
    name: "Sarah M.",
    meta: "Law Student, University of Sydney",
    initials: "SM",
    rating: 5,
  },
  {
    text: "Been using this service for 2 years. Never missed a deadline. Writers actually understand the subject — not just generic content.",
    name: "James T.",
    meta: "MBA Student, London Business School",
    initials: "JT",
    rating: 5,
  },
  {
    text: "The nursing coursework was medically accurate and properly cited. My professor was impressed. Worth every penny.",
    name: "Priya R.",
    meta: "Nursing Student, University of Toronto",
    initials: "PR",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Is using an assignment writing service academically ethical?",
    a: "Our service provides academic support and reference material — similar to a tutor or study guide. We help students understand concepts and structure their work. It's your responsibility to use the work as a reference in accordance with your institution's policies.",
  },
  {
    q: "How quickly can you deliver my assignment?",
    a: "We offer delivery within 3 hours for urgent requests, all the way up to 2 weeks for complex dissertations. Our turnaround depends on assignment type and length. Contact us for exact timelines.",
  },
  {
    q: "Is my information kept confidential?",
    a: "Absolutely. We never share your personal details with anyone. Our platform uses SSL encryption and we have a strict no-disclosure policy with all our writers.",
  },
  {
    q: "What if I'm not satisfied with the work?",
    a: "We offer unlimited free revisions until you're happy. If we truly can't meet your requirements, we have a refund policy in place. Your satisfaction is our guarantee.",
  },
  {
    q: "Do you cover all university levels?",
    a: "Yes — from undergraduate to PhD level. We have specialist writers for every academic level and subject area.",
  },
];

export default async function HomePage() {
  // Fetch latest 3 posts for homepage
  let latestPosts: Array<{
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    coverImage: string | null;
    category: string | null;
    author: string | null;
    readTime: number | null;
    createdAt: Date;
  }> = [];

  try {
    latestPosts = await prisma.post.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      take: 3,
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImage: true,
        category: true,
        author: true,
        readTime: true,
        createdAt: true,
      },
    });
  } catch {
    // DB might not be set up yet
  }

  // Service schema for this page
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Assignment Writing Service",
    "provider": {
      "@type": "Organization",
      "name": "Expert Assignment Help",
      "url": "https://yourdomain.com"
    },
    "areaServed": ["US", "GB", "AU", "CA", "AE", "IN"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Academic Writing Services",
      "itemListElement": subjects.map((subject, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": subject.name,
          "description": subject.description,
          "url": `https://yourdomain.com${subject.href}`
        }
      }))
    }
  };

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <Navbar />
      <main>
        {/* HERO SECTION with h1 */}
        <section className="hero" aria-label="Hero section">
          <div className="hero-bg">
            <div className="hero-orb hero-orb-1" />
            <div className="hero-orb hero-orb-2" />
            <div className="hero-orb hero-orb-3" />
            {/* Grid pattern - decorative */}
            <svg
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                opacity: 0.03,
              }}
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="grid"
                  x="0"
                  y="0"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 60 0 L 0 0 0 60"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="container">
            <div className="hero-grid">
              <div className="hero-content animate-fade-up">
                <div className="hero-eyebrow">
                  <span className="badge">
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "var(--lime)",
                        display: "inline-block",
                        animation: "pulse-glow 1.5s infinite",
                      }}
                      aria-hidden="true"
                    />
                    Trusted by 50,000+ Students
                  </span>
                </div>

                {/* Primary H1 with main keyword */}
                <h1 className="hero-title">
                  Top-Rated{" "}
                  <span className="text-gradient">Assignment Writing</span>{" "}
                  Service
                </h1>

                <p className="hero-subtitle">
                  Expert academic support for every subject, every deadline. Get
                  plagiarism-free, high-quality work delivered by PhD writers — in
                  hours, not days.
                </p>

                <div className="hero-actions">
                  <Link href="/contact" className="btn btn-primary btn-lg">
                    Order Assignment Help
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link href="/how-it-works" className="btn btn-outline btn-lg">
                    How It Works
                  </Link>
                </div>

                <div className="hero-stats">
                  {[
                    { value: "50K+", label: "Happy Students" },
                    { value: "4.9★", label: "Average Rating" },
                    { value: "99%", label: "On-time Delivery" },
                  ].map((s) => (
                    <div className="hero-stat" key={s.label}>
                      <span className="hero-stat-value">{s.value}</span>
                      <span className="hero-stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="hero-visual animate-fade-up delay-3"
                aria-hidden="true"
              >
                <div className="hero-card-stack">
                  {/* Floating badges */}
                  <div className="hero-card-floating hero-card-floating-1">
                    <div
                      className="card-floating-icon"
                      style={{ background: "rgba(180,255,80,0.15)" }}
                    >
                      ✅
                    </div>
                    <div>
                      <div style={{ color: "var(--lime)", fontSize: "0.9rem" }}>
                        100% Original
                      </div>
                      <div
                        style={{
                          color: "var(--muted2)",
                          fontSize: "0.75rem",
                          fontWeight: 400,
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        Turnitin verified
                      </div>
                    </div>
                  </div>
                  <div className="hero-card-floating hero-card-floating-2">
                    <div
                      className="card-floating-icon"
                      style={{ background: "rgba(0,229,255,0.15)" }}
                    >
                      ⚡
                    </div>
                    <div>
                      <div style={{ color: "var(--cyan)", fontSize: "0.9rem" }}>
                        3hr Delivery
                      </div>
                      <div
                        style={{
                          color: "var(--muted2)",
                          fontSize: "0.75rem",
                          fontWeight: 400,
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        Urgent orders welcome
                      </div>
                    </div>
                  </div>

                  {/* Main card */}
                  <div className="hero-card-main">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 700,
                            marginBottom: "4px",
                          }}
                        >
                          New Order
                        </div>
                        <div
                          style={{
                            color: "var(--muted2)",
                            fontSize: "0.8rem",
                          }}
                        >
                          Law Essay · 2000 words
                        </div>
                      </div>
                      <span className="status-pill published">Active</span>
                    </div>

                    <div
                      style={{
                        borderRadius: "10px",
                        background: "var(--bg)",
                        padding: "14px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      {["Research", "Outline", "Writing", "Review"].map(
                        (step, i) => (
                          <div
                            key={step}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                            }}
                          >
                            <div
                              style={{
                                width: "18px",
                                height: "18px",
                                borderRadius: "50%",
                                background:
                                  i < 3
                                    ? "rgba(180,255,80,0.15)"
                                    : "var(--surface)",
                                border:
                                  i < 3
                                    ? "1px solid rgba(180,255,80,0.3)"
                                    : "1px solid var(--border)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "0.6rem",
                                color:
                                  i < 3 ? "var(--lime)" : "var(--muted2)",
                                flexShrink: 0,
                              }}
                            >
                              {i < 3 ? "✓" : "○"}
                            </div>
                            <div
                              style={{
                                flex: 1,
                                height: "6px",
                                borderRadius: "100px",
                                background: "var(--border)",
                                overflow: "hidden",
                              }}
                            >
                              <div
                                style={{
                                  height: "100%",
                                  width:
                                    i === 0
                                      ? "100%"
                                      : i === 1
                                      ? "100%"
                                      : i === 2
                                      ? "75%"
                                      : "0%",
                                  background:
                                    "linear-gradient(90deg, var(--lime), var(--cyan))",
                                  borderRadius: "100px",
                                  transition: "width 1s ease",
                                }}
                              />
                            </div>
                            <span
                              style={{
                                fontSize: "0.75rem",
                                color: "var(--muted2)",
                                width: "50px",
                                textAlign: "right",
                              }}
                            >
                              {step}
                            </span>
                          </div>
                        )
                      )}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "12px",
                        background: "rgba(180,255,80,0.05)",
                        borderRadius: "10px",
                        border: "1px solid rgba(180,255,80,0.15)",
                      }}
                    >
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "var(--lime)",
                          animation: "pulse-glow 1.5s infinite",
                          flexShrink: 0,
                        }}
                        aria-hidden="true"
                      />
                      <span
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--lime)",
                          fontFamily: "var(--font-display)",
                          fontWeight: 600,
                        }}
                      >
                        Expert assigned · Delivering in 2h 45m
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE - decorative */}
        <section className="marquee-section" aria-label="Services we offer">
          <div className="marquee-track">
            {[
              "Essay Writing",
              "Dissertation Help",
              "Law Assignments",
              "Nursing Papers",
              "MBA Projects",
              "Programming Help",
              "Finance Reports",
              "Coursework Support",
              "Research Papers",
              "Case Studies",
              "Essay Writing",
              "Dissertation Help",
              "Law Assignments",
              "Nursing Papers",
              "MBA Projects",
              "Programming Help",
              "Finance Reports",
              "Coursework Support",
              "Research Papers",
              "Case Studies",
            ].map((item, i) => (
              <span key={i} className="marquee-item">
                <span className="marquee-dot" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* FEATURES SECTION with h2 */}
        <section
          style={{ padding: "100px 0" }}
          aria-labelledby="features-heading"
        >
          <div className="container">
            <div className="section-header center">
              <span className="badge badge-cyan">Why Choose Us</span>
              <h2
                id="features-heading"
                className="section-title"
              >
                Academic Support{" "}
                <span className="text-gradient">Built Different</span>
              </h2>
              <p className="section-desc">
                We're not another essay mill. We're a genuine academic support
                service designed to help you understand, improve, and succeed.
              </p>
            </div>

            <div className="grid-3">
              {features.map((f, i) => (
                <article
                  key={f.title}
                  className={`feature-card animate-fade-up delay-${(i % 3) + 1}`}
                >
                  <div className="feature-icon" aria-hidden="true">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS with h2 */}
        <section
          style={{
            padding: "100px 0",
            background: "var(--bg2)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
          aria-labelledby="process-heading"
        >
          <div className="container">
            <div className="section-header center">
              <span className="badge">Simple Process</span>
              <h2 id="process-heading" className="section-title">
                From Order to{" "}
                <span style={{ color: "var(--lime)" }}>A-Grade</span> in 4 Steps
              </h2>
            </div>

            <div className="steps-grid">
              {[
                {
                  n: "01",
                  title: "Submit Your Brief",
                  desc: "Tell us your subject, word count, deadline, and any specific requirements.",
                },
                {
                  n: "02",
                  title: "Get Matched",
                  desc: "We pair you with the most qualified expert for your subject instantly.",
                },
                {
                  n: "03",
                  title: "Expert Writes",
                  desc: "Your writer crafts an original, well-researched piece just for you.",
                },
                {
                  n: "04",
                  title: "Review & Download",
                  desc: "Check the work, request revisions if needed, then download your final file.",
                },
              ].map((s) => (
                <div className="step-card" key={s.n}>
                  <div className="step-number" aria-hidden="true">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SUBJECTS SECTION - internal linking structure */}
        <section
          style={{ padding: "100px 0" }}
          aria-labelledby="subjects-heading"
        >
          <div className="container">
            <div className="section-header">
              <span className="badge badge-purple">Niche Expertise</span>
              <h2 id="subjects-heading" className="section-title">
                Every Subject,{" "}
                <span className="text-gradient">Every Level</span>
              </h2>
              <p className="section-desc">
                From first-year undergrad to doctoral research — our expert
                network covers 100+ subjects.
              </p>
            </div>

            <div className="grid-4">
              {subjects.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  className="feature-card"
                  style={{
                    textDecoration: "none",
                    textAlign: "center",
                    padding: "28px",
                    gap: "12px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  aria-label={`${s.name} ${s.description}`}
                >
                  <div style={{ fontSize: "2rem" }} aria-hidden="true">{s.icon}</div>
                  <h3 style={{ fontSize: "1rem" }}>{s.name}</h3>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--lime)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    Get {s.name} Help →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS with review schema */}
        <section
          style={{
            padding: "100px 0",
            background: "var(--bg2)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
          aria-labelledby="testimonials-heading"
        >
          <div className="container">
            <div className="section-header center">
              <span className="badge">Student Reviews</span>
              <h2 id="testimonials-heading" className="section-title">
                Loved by Students{" "}
                <span style={{ color: "var(--lime)" }}>Worldwide</span>
              </h2>
            </div>

            <div className="grid-3">
              {testimonials.map((t) => (
                <article key={t.name} className="testimonial-card" itemScope itemType="https://schema.org/Review">
                  <meta itemProp="author" content={t.name} />
                  <meta itemProp="reviewRating" content={t.rating.toString()} />
                  <div className="testimonial-stars" aria-label={`${t.rating} out of 5 stars`}>
                    {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
                  </div>
                  <p className="testimonial-text" itemProp="reviewBody">&ldquo;{t.text}&rdquo;</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar" aria-hidden="true">{t.initials}</div>
                    <div>
                      <div className="testimonial-name" itemProp="name">{t.name}</div>
                      <div className="testimonial-meta">{t.meta}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG SECTION with latest content */}
        {latestPosts.length > 0 && (
          <section style={{ padding: "100px 0" }} aria-labelledby="blog-heading">
            <div className="container">
              <div
                className="section-header"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  gap: "16px",
                }}
              >
                <div>
                  <span className="badge" style={{ marginBottom: "12px", display: "inline-flex" }}>
                    Latest Articles
                  </span>
                  <h2 id="blog-heading" className="section-title">
                    Academic Insights &{" "}
                    <span className="text-gradient">Study Tips</span>
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="btn btn-outline btn-sm"
                  style={{ flexShrink: 0 }}
                >
                  View All Posts →
                </Link>
              </div>

              <div className="grid-3">
                {latestPosts.map((post) => (
                  <BlogCard key={post.id} {...post} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ SECTION with structured data */}
        <section
          style={{
            padding: "100px 0",
            background: "var(--bg2)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
          aria-labelledby="faq-heading"
        >
          <div className="container">
            <div style={{ maxWidth: "760px", margin: "0 auto" }}>
              <div className="section-header center">
                <span className="badge">FAQ</span>
                <h2 id="faq-heading" className="section-title">
                  Frequently Asked{" "}
                  <span style={{ color: "var(--lime)" }}>Questions</span>
                </h2>
              </div>

              <div
                style={{ display: "flex", flexDirection: "column", gap: "12px" }}
                itemScope
                itemType="https://schema.org/FAQPage"
              >
                {faqs.map((faq) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="cta-section" aria-labelledby="cta-heading">
          <div className="container">
            <div className="cta-card">
              <h2 id="cta-heading" className="cta-title">
                Ready to Ace Your{" "}
                <span className="text-gradient">Next Assignment?</span>
              </h2>
              <p className="cta-subtitle">
                Join 50,000+ students who trust us for expert academic support.
                Get started in under 2 minutes.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Order Assignment Writing Help
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/contact" className="btn btn-ghost btn-lg">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}