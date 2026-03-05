// src/app/cheap-assignment-writing-service/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// SEO Metadata for Cheap Assignment Writing Service Page
export const metadata: Metadata = {
  title: 'Cheap Assignment Help | Affordable Assignment Writing Service',
  description: 'Quality assignments at student-friendly prices. Our cheap assignment help service delivers high-quality work without breaking your budget. Affordable rates, no hidden fees, and the same quality as premium services. Starting at just $12.99/page.',
  keywords: [
    'cheap assignment help',
    'affordable assignment writing service',
    'budget assignment help',
    'cheap essay writing',
    'affordable essays',
    'low cost assignment',
    'student budget assignment help',
    'cheap homework help',
    'affordable research paper',
    'economical writing service',
    'value assignment service',
    'cheap dissertation help',
    'budget friendly writing',
    'cheap academic writing',
    'affordable paper writing',
    'discount assignment help',
    'cheap writing service',
    'student friendly prices',
    'best value assignment help',
    'cheap custom writing',
    'affordable essay service',
    'budget friendly essays',
    'cheap assignment writers'
  ],
  authors: [{ name: 'HelpWithMyAssignments' }],
  creator: 'HelpWithMyAssignments',
  publisher: 'HelpWithMyAssignments',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/cheap-assignment-writing-service',
  },
  openGraph: {
    title: 'Cheap Assignment Help | Affordable Assignment Writing Service',
    description: '💰 Quality assignments at student-friendly prices. Our cheap assignment help service delivers high-quality work without breaking your budget. Starting at just $12.99/page.',
    url: '/cheap-assignment-writing-service',
    siteName: 'HelpWithMyAssignments',
    images: [
      {
        url: '/images/og-cheap-assignment-service.jpg',
        width: 1200,
        height: 630,
        alt: 'Cheap Assignment Help',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cheap Assignment Help',
    description: '💰 Affordable assignment writing service. Quality work at student-friendly prices.',
    images: ['/images/twitter-cheap-assignment-service.jpg'],
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
  category: 'education',
  classification: 'Cheap Assignment Writing Services',
}

// Structured Data for Rich Results - Service Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://helpassignments.com/cheap-assignment-writing-service",
  "name": "Cheap Assignment Help",
  "description": "Quality assignments at student-friendly prices. Our cheap assignment help service delivers high-quality work without breaking your budget. Affordable rates, no hidden fees, and the same quality as premium services.",
  "url": "https://helpassignments.com/cheap-assignment-writing-service",
  "provider": {
    "@type": "Organization",
    "name": "HelpWithMyAssignments",
    "url": "https://helpassignments.com"
  },
  "serviceType": "Cheap Assignment Writing Service",
  "areaServed": {
    "@type": "Country",
    "name": "Multiple Countries"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cheap Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cheap Essay Writing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Affordable Research Paper"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Budget Dissertation Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cheap Homework Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Affordable Coursework"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "9876",
    "bestRating": "5",
    "worstRating": "1"
  }
}

// Breadcrumb structured data
const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://helpassignments.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Cheap Assignment Help",
      "item": "https://helpassignments.com/cheap-assignment-writing-service"
    }
  ]
}

// FAQ Schema structured data
const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is cheap assignment help still good quality?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We believe every student deserves quality help, regardless of budget. Our cheap service maintains the same high standards as our premium services. We achieve this through efficient processes and a large team of qualified writers, not by cutting corners on quality."
      }
    },
    {
      "@type": "Question",
      "name": "How can you offer such low prices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We maintain low prices through efficient operations, a large network of writers across different regions, and by focusing on volume rather than high margins. We never compromise on quality or use pre-written content."
      }
    },
    {
      "@type": "Question",
      "name": "Are there any hidden fees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No hidden fees whatsoever! The price you see is the price you pay. We believe in complete transparency with our students. All features like revisions, plagiarism reports, and formatting are included."
      }
    },
    {
      "@type": "Question",
      "name": "What's included in the cheap price?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our cheap price includes everything: original content from scratch, unlimited revisions, plagiarism report, formatting in your required style, and 24/7 support. You get the complete package, just at a student-friendly price."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer discounts for large orders?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer additional discounts for longer assignments, multiple pages, and returning customers. Check our pricing calculator or contact us for special offers."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know the quality won't suffer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can check our reviews, ask for a sample, or start with a small order to test our quality. We're confident you'll be satisfied, which is why we offer a money-back guarantee if you're not happy with the quality."
      }
    }
  ]
}

// Pricing table data
const pricingPlans = [
  {
    level: "High School",
    price: "$12.99",
    perPage: "per page",
    description: "Perfect for high school essays and assignments",
    features: [
      "Original content",
      "Basic formatting",
      "On-time delivery",
      "24/7 support"
    ]
  },
  {
    level: "College / University",
    price: "$16.99",
    perPage: "per page",
    description: "Ideal for undergraduate essays and research papers",
    features: [
      "Everything in High School",
      "Advanced research",
      "APA/MLA/Chicago formatting",
      "Unlimited revisions",
      "Plagiarism report"
    ],
    popular: true
  },
  {
    level: "Master's / PhD",
    price: "$21.99",
    perPage: "per page",
    description: "For graduate-level theses and dissertations",
    features: [
      "Everything in College",
      "PhD qualified writers",
      "Advanced research",
      "Critical analysis",
      "Publication ready"
    ]
  }
]

// Value features data
const valueFeatures = [
  {
    title: "No Hidden Fees",
    description: "The price you see is exactly what you pay. No surprise charges ever.",
    icon: "💰"
  },
  {
    title: "Free Revisions",
    description: "Unlimited revisions at no extra cost until you're completely satisfied.",
    icon: "🔄"
  },
  {
    title: "Free Plagiarism Report",
    description: "Every order includes a free plagiarism report to guarantee originality.",
    icon: "✅"
  },
  {
    title: "Discounts Available",
    description: "Additional savings for longer assignments and returning customers.",
    icon: "🏷️"
  },
  {
    title: "Same Quality",
    description: "Our cheap service uses the same expert writers as our premium service.",
    icon: "⭐"
  },
  {
    title: "Money-Back Guarantee",
    description: "Not satisfied? We'll refund your money, no questions asked.",
    icon: "🛡️"
  }
]

// Comparison data
const comparisonData = [
  {
    feature: "Price per page",
    otherServices: "$25 - $40",
    ourService: "$12.99 - $21.99"
  },
  {
    feature: "Original content",
    otherServices: "✓",
    ourService: "✓"
  },
  {
    feature: "Unlimited revisions",
    otherServices: "Limited or extra cost",
    ourService: "✓ Free"
  },
  {
    feature: "Plagiarism report",
    otherServices: "Extra $5-10",
    ourService: "✓ Free"
  },
  {
    feature: "Formatting included",
    otherServices: "Sometimes extra",
    ourService: "✓ Included"
  },
  {
    feature: "24/7 support",
    otherServices: "Limited hours",
    ourService: "✓ 24/7"
  }
]

// Testimonials data
const testimonials = [
  {
    name: "Alex M.",
    course: "Business Student",
    text: "I was skeptical about cheap services, but this one proved me wrong. Got my essay for $16.99/page and it was better than ones I've paid $30 for elsewhere. Will definitely be back!",
    rating: "★★★★★"
  },
  {
    name: "Priya K.",
    course: "Nursing Student",
    text: "As a student on a tight budget, this service has been a lifesaver. The quality is consistently good and the prices actually fit my budget. My care plans have never looked better!",
    rating: "★★★★★"
  },
  {
    name: "Carlos R.",
    course: "Engineering Major",
    text: "I've used them for multiple assignments now. The quality is reliable and the prices are fair. No hidden fees, no upsells, just good work at a fair price. Exactly what students need.",
    rating: "★★★★★"
  }
]

export default function CheapAssignmentWritingServicePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      {/* Navbar */}
      <Navbar />

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroPattern}></div>
          </div>
          
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.budgetBadge}>
                <span className={styles.budgetIcon}>💰</span>
                <span className={styles.budgetText}>BUDGET FRIENDLY</span>
              </div>
              <h1 className={styles.heroTitle}>
                Cheap <span className={styles.highlight}>Assignment Help</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Quality assignments at <strong>student-friendly prices</strong>. Our cheap assignment help service delivers high-quality work without breaking your budget. Affordable rates, no hidden fees, and the same quality as premium services.
              </p>
              <div className={styles.priceTag}>
                <span className={styles.priceLabel}>Starting at just</span>
                <span className={styles.priceValue}>$12.99</span>
                <span className={styles.pricePer}>/page</span>
              </div>
              <div className={styles.heroCta}>
                <Link href="#pricing" className={styles.primaryButton}>
                  View Prices
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Order Now
                </Link>
              </div>
              <div className={styles.guaranteeBadge}>
                <span>✓ No Hidden Fees</span>
                <span>✓ Free Revisions</span>
                <span>✓ Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Banner */}
        <section className={styles.valueBanner}>
          <div className={styles.container}>
            <div className={styles.valueBannerContent}>
              <h2 className={styles.valueBannerTitle}>Great Quality Doesn't Have to Cost a Fortune</h2>
              <p className={styles.valueBannerText}>
                We believe every student deserves access to quality academic help, regardless of their budget. That's why we've optimized our service to deliver premium quality at affordable prices.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className={styles.pricing}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Simple, Transparent Pricing
            </h2>
            <p className={styles.sectionSubtitle}>
              One price. Everything included. No surprises.
            </p>
            
            <div className={styles.pricingGrid}>
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`${styles.pricingCard} ${plan.popular ? styles.popularCard : ''}`}>
                  {plan.popular && <div className={styles.popularBadge}>MOST POPULAR</div>}
                  <h3 className={styles.pricingLevel}>{plan.level}</h3>
                  <div className={styles.pricingPrice}>
                    <span className={styles.pricingAmount}>{plan.price}</span>
                    <span className={styles.pricingPeriod}>{plan.perPage}</span>
                  </div>
                  <p className={styles.pricingDescription}>{plan.description}</p>
                  <ul className={styles.pricingFeatures}>
                    {plan.features.map((feature, i) => (
                      <li key={i} className={styles.pricingFeature}>
                        <span className={styles.checkMark}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={styles.pricingLink}>
                    Choose Plan
                  </Link>
                </div>
              ))}
            </div>
            
            <p className={styles.pricingNote}>
              *Prices are per page (275 words). Discounts available for longer assignments.
            </p>
          </div>
        </section>

        {/* Value Features Section */}
        <section className={styles.valueFeatures}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              More Value, Same Quality
            </h2>
            <p className={styles.sectionSubtitle}>
              Just because it's cheap doesn't mean we cut corners
            </p>
            
            <div className={styles.valueFeaturesGrid}>
              {valueFeatures.map((feature, index) => (
                <div key={index} className={styles.valueFeatureCard}>
                  <div className={styles.valueFeatureIcon}>{feature.icon}</div>
                  <h3 className={styles.valueFeatureTitle}>{feature.title}</h3>
                  <p className={styles.valueFeatureDescription}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className={styles.comparison}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              How We Compare
            </h2>
            <p className={styles.sectionSubtitle}>
              Better value without compromising on quality
            </p>
            
            <div className={styles.comparisonTable}>
              <div className={styles.comparisonHeader}>
                <div className={styles.comparisonFeature}>Feature</div>
                <div className={styles.comparisonOther}>Other Services</div>
                <div className={styles.comparisonUs}>Our Service</div>
              </div>
              
              {comparisonData.map((item, index) => (
                <div key={index} className={styles.comparisonRow}>
                  <div className={styles.comparisonFeature}>{item.feature}</div>
                  <div className={styles.comparisonOther}>{item.otherServices}</div>
                  <div className={styles.comparisonUs}>{item.ourService}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Students Love Our Value
            </h2>
            <p className={styles.sectionSubtitle}>
              Thousands of students have saved money without sacrificing quality
            </p>
            
            <div className={styles.testimonialsGrid}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className={styles.testimonialCard}>
                  <div className={styles.testimonialRating}>{testimonial.rating}</div>
                  <p className={styles.testimonialText}>"{testimonial.text}"</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorName}>{testimonial.name}</div>
                    <div className={styles.authorCourse}>{testimonial.course}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faq}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Frequently Asked Questions
            </h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to know about our cheap assignment help
            </p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Is cheap assignment help still good quality?
                </h3>
                <p className={styles.faqAnswer}>
                  Absolutely! We believe every student deserves quality help, regardless of budget. Our cheap service maintains the same high standards as our premium services. We achieve this through efficient processes and a large team of qualified writers, not by cutting corners on quality.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  How can you offer such low prices?
                </h3>
                <p className={styles.faqAnswer}>
                  We maintain low prices through efficient operations, a large network of writers across different regions, and by focusing on volume rather than high margins. We never compromise on quality or use pre-written content.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Are there any hidden fees?
                </h3>
                <p className={styles.faqAnswer}>
                  No hidden fees whatsoever! The price you see is the price you pay. We believe in complete transparency with our students. All features like revisions, plagiarism reports, and formatting are included.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What's included in the cheap price?
                </h3>
                <p className={styles.faqAnswer}>
                  Our cheap price includes everything: original content from scratch, unlimited revisions, plagiarism report, formatting in your required style, and 24/7 support. You get the complete package, just at a student-friendly price.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you offer discounts for large orders?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes! We offer additional discounts for longer assignments, multiple pages, and returning customers. Check our pricing calculator or contact us for special offers.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  How do I know the quality won't suffer?
                </h3>
                <p className={styles.faqAnswer}>
                  You can check our reviews, ask for a sample, or start with a small order to test our quality. We're confident you'll be satisfied, which is why we offer a money-back guarantee if you're not happy with the quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Quality Help Within Your Budget
              </h2>
              <p className={styles.ctaText}>
                Don't let a tight budget force you to choose between quality and affordability. Get both with our cheap assignment help service.
              </p>
              <div className={styles.ctaPrice}>
                <span className={styles.ctaPriceLabel}>Starting from</span>
                <span className={styles.ctaPriceValue}>$12.99</span>
                <span className={styles.ctaPricePer}>/page</span>
              </div>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Order Now
                </Link>
                <Link href="#pricing" className={styles.ctaSecondary}>
                  View All Prices
                </Link>
              </div>
              <div className={styles.ctaGuarantees}>
                <span>✓ No Hidden Fees</span>
                <span>✓ Free Revisions</span>
                <span>✓ Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}