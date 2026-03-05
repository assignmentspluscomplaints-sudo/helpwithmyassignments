// src/app/urgent-essay-help/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// SEO Metadata for Urgent Essay Help Page
export const metadata: Metadata = {
  title: 'Urgent Essay Helper | 3-Hour Essay Writing Service',
  description: 'Need an essay helper right now? Our urgent service handles deadlines as tight as 3 hours. Whether it\'s a last-minute assignment or an emergency revision, our writers are ready to help you submit on time. 24/7 Availability.',
  keywords: [
    'urgent essay helper',
    'urgent essay help',
    'emergency essay help',
    'last minute essay help',
    '3 hour essay',
    '6 hour essay',
    '12 hour essay',
    '24 hour essay',
    'rush essay service',
    'emergency assignment help',
    'urgent writing service',
    'fast essay writing',
    'quick essay help',
    'same day essay',
    'overnight essay',
    'deadline tomorrow essay',
    'urgent paper help',
    'emergency research paper',
    'last minute assignment',
    'urgent homework help',
    'fast academic help',
    'immediate essay help',
    '24/7 essay service',
    'anytime essay help'
  ],
  authors: [{ name: 'HelpWithMyAssignments Urgent Response Team' }],
  creator: 'HelpWithMyAssignments',
  publisher: 'HelpWithMyAssignments',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/urgent-essay-help',
  },
  openGraph: {
    title: 'Urgent Essay Helper | 3-Hour Essay Writing Service',
    description: '⏰ Need an essay helper right now? Our urgent service handles deadlines as tight as 3 hours. 24/7 Availability. Last-minute assignments, emergency revisions, and immediate help when you need it most.',
    url: '/urgent-essay-help',
    siteName: 'HelpWithMyAssignments',
    images: [
      {
        url: '/images/og-urgent-essay-help.jpg',
        width: 1200,
        height: 630,
        alt: 'Urgent Essay Helper',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Urgent Essay Helper',
    description: '⏰ 3-Hour Essay Writing Service. 24/7 Availability. Emergency help when you need it.',
    images: ['/images/twitter-urgent-essay-help.jpg'],
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
  classification: 'Urgent Essay Writing Services',
}

// Structured Data for Rich Results - Service Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://helpassignments.com/urgent-essay-help",
  "name": "Urgent Essay Helper",
  "description": "Need an essay helper right now? Our urgent service handles deadlines as tight as 3 hours. Whether it's a last-minute assignment or an emergency revision, our writers are ready to help you submit on time. 24/7 Availability.",
  "url": "https://helpassignments.com/urgent-essay-help",
  "provider": {
    "@type": "Organization",
    "name": "HelpWithMyAssignments",
    "url": "https://helpassignments.com"
  },
  "serviceType": "Urgent Essay Writing Service",
  "areaServed": {
    "@type": "Country",
    "name": "Multiple Countries"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Urgent Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "3-Hour Essay"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "6-Hour Essay"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "12-Hour Essay"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "24-Hour Essay"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Revision"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "4567",
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
      "name": "Urgent Essay Help",
      "item": "https://helpassignments.com/urgent-essay-help"
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
      "name": "How fast can you write my essay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer multiple urgent deadlines: 3 hours, 6 hours, 12 hours, and 24 hours. The shortest deadline is 3 hours for up to 1000 words. For longer essays, we recommend at least 6-12 hours to ensure quality."
      }
    },
    {
      "@type": "Question",
      "name": "Is the quality still good with urgent deadlines?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our urgent service writers are specifically trained to work efficiently without compromising quality. They are experienced in producing high-quality work under tight deadlines and follow the same rigorous standards as our regular service."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work 24/7?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our urgent service operates 24 hours a day, 7 days a week, 365 days a year. We have writers working in all time zones to ensure someone is always available to help you, even at 3 AM."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with last-minute revisions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer emergency revision services. If you need changes to an existing essay urgently, our writers can make revisions quickly to meet your deadline."
      }
    },
    {
      "@type": "Question",
      "name": "What subjects can you handle urgently?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We can handle urgent essays across all subjects including literature, history, psychology, sociology, business, marketing, nursing, and more. Our urgent response team includes writers from diverse disciplines."
      }
    },
    {
      "@type": "Question",
      "name": "How do I request urgent help?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply select your deadline (3h, 6h, 12h, or 24h) when placing your order, and our system will automatically match you with an available urgent response writer. You can also contact us directly for immediate assistance."
      }
    }
  ]
}

// Urgent deadlines data
const urgentDeadlines = [
  {
    hours: "3",
    label: "3 Hours",
    description: "For short essays up to 1000 words",
    price: "$29.99 CAD",
    icon: "⚡",
    suitable: ["500-word essays", "Short responses", "Discussion posts", "Brief analyses"]
  },
  {
    hours: "6",
    label: "6 Hours",
    description: "For standard essays up to 2000 words",
    price: "$24.99 CAD",
    icon: "🔥",
    suitable: ["1000-1500 word essays", "Short research papers", "Case studies", "Critical analyses"]
  },
  {
    hours: "12",
    label: "12 Hours",
    description: "For longer essays up to 3000 words",
    price: "$19.99 CAD",
    icon: "⭐",
    suitable: ["2000-2500 word essays", "Literature reviews", "Extended analyses", "Research summaries"]
  },
  {
    hours: "24",
    label: "24 Hours",
    description: "For comprehensive papers up to 5000 words",
    price: "$14.99 CAD",
    icon: "✨",
    suitable: ["3000-4000 word papers", "Research papers", "Term papers", "Comprehensive essays"]
  }
]

// Why choose urgent data
const whyChoose = [
  {
    title: "24/7 Availability",
    description: "Our team works around the clock. Day or night, weekend or holiday, we're here when you need us.",
    icon: "⏰"
  },
  {
    title: "Rapid Response Team",
    description: "Specially trained writers who excel at producing high-quality work under tight deadlines.",
    icon: "🚀"
  },
  {
    title: "Instant Matching",
    description: "Get matched with an available writer within minutes of placing your order.",
    icon: "⚡"
  },
  {
    title: "Quality Guarantee",
    description: "Even with urgent deadlines, we never compromise on quality. Every essay meets our high standards.",
    icon: "✅"
  }
]

// Urgent scenarios data
const urgentScenarios = [
  {
    title: "Forgot About an Assignment",
    description: "Assignment slipped your mind and it's due tomorrow? We've got you covered.",
    icon: "😰"
  },
  {
    title: "Unexpected Emergency",
    description: "Life happens. When unexpected events disrupt your plans, we're your backup.",
    icon: "🆘"
  },
  {
    title: "Professor Moved the Deadline",
    description: "Deadline suddenly moved up? No problem. We'll adjust and deliver.",
    icon: "📅"
  },
  {
    title: "Need Major Revisions",
    description: "Got feedback but no time to implement it? Our emergency revision service can help.",
    icon: "🔄"
  },
  {
    title: "Multiple Assignments Due",
    description: "Overwhelmed with multiple deadlines? Let us handle one while you focus on others.",
    icon: "📚"
  },
  {
    title: "Technical Issues",
    description: "Computer crashed or lost your work? We'll help you recover and meet your deadline.",
    icon: "💻"
  }
]

export default function UrgentEssayHelpPage() {
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
              <div className={styles.urgentBadge}>
                <span className={styles.urgentPulse}></span>
                <span className={styles.urgentText}>URGENT • 24/7 AVAILABLE</span>
              </div>
              <div className={styles.heroIcon}>⏰</div>
              <h1 className={styles.heroTitle}>
                Urgent <span className={styles.highlight}>Essay Helper</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Need an essay helper right now? Our urgent service handles deadlines as tight as <strong>3 hours</strong>. Whether it's a last-minute assignment or an emergency revision, our writers are ready to help you submit on time. <strong>24/7 Availability</strong>.
              </p>
              <div className={styles.heroCta}>
                <Link href="#deadlines" className={styles.primaryButton}>
                  View Urgent Deadlines
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Get Help Now
                </Link>
              </div>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>5000+</span>
                  <span className={styles.statLabel}>Urgent Orders</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>3h</span>
                  <span className={styles.statLabel}>Fastest Delivery</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>4.8/5</span>
                  <span className={styles.statLabel}>Urgent Rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Urgent Warning Banner */}
        <section className={styles.warningBanner}>
          <div className={styles.container}>
            <div className={styles.warningContent}>
              <div className={styles.warningIcon}>⚠️</div>
              <p className={styles.warningText}>
                <strong>Running out of time?</strong> Don't panic. Our urgent response team is standing by 24/7 to help you meet your deadline.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Urgent Section */}
        <section className={styles.whyChoose}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Why Choose Our Urgent Service
            </h2>
            <p className={styles.sectionSubtitle}>
              When every minute counts, we deliver
            </p>
            
            <div className={styles.whyChooseGrid}>
              {whyChoose.map((item, index) => (
                <div key={index} className={styles.whyChooseCard}>
                  <div className={styles.whyChooseIcon}>{item.icon}</div>
                  <h3 className={styles.whyChooseTitle}>{item.title}</h3>
                  <p className={styles.whyChooseDescription}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Urgent Deadlines Section */}
        <section id="deadlines" className={styles.urgentDeadlines}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Urgent Deadlines We Offer
            </h2>
            <p className={styles.sectionSubtitle}>
              Select the turnaround time that matches your deadline
            </p>
            
            <div className={styles.deadlinesGrid}>
              {urgentDeadlines.map((deadline, index) => (
                <div key={index} className={styles.deadlineCard}>
                  <div className={styles.deadlineIcon}>{deadline.icon}</div>
                  <div className={styles.deadlineTime}>{deadline.label}</div>
                  <div className={styles.deadlinePrice}>{deadline.price}</div>
                  <p className={styles.deadlineDescription}>{deadline.description}</p>
                  <div className={styles.deadlineSuitable}>
                    <h4 className={styles.suitableTitle}>Best for:</h4>
                    <ul className={styles.suitableList}>
                      {deadline.suitable.map((item, i) => (
                        <li key={i} className={styles.suitableItem}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/contact" className={styles.deadlineLink}>
                    Select {deadline.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Urgent Scenarios Section */}
        <section className={styles.urgentScenarios}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Common Urgent Situations
            </h2>
            <p className={styles.sectionSubtitle}>
              You're not alone — we've helped students in all these scenarios
            </p>
            
            <div className={styles.scenariosGrid}>
              {urgentScenarios.map((scenario, index) => (
                <div key={index} className={styles.scenarioCard}>
                  <div className={styles.scenarioIcon}>{scenario.icon}</div>
                  <h3 className={styles.scenarioTitle}>{scenario.title}</h3>
                  <p className={styles.scenarioDescription}>{scenario.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className={styles.howItWorks}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              How It Works — Fast
            </h2>
            <p className={styles.sectionSubtitle}>
              Get help in minutes, not hours
            </p>
            
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Place Your Order</h3>
                <p className={styles.stepDescription}>
                  Select your urgent deadline (3h, 6h, 12h, or 24h) and provide your requirements.
                </p>
                <div className={styles.stepTime}>Takes: 2-3 minutes</div>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Instant Match</h3>
                <p className={styles.stepDescription}>
                  Our system immediately matches you with an available urgent response writer.
                </p>
                <div className={styles.stepTime}>Takes: 1-2 minutes</div>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Writing Begins</h3>
                <p className={styles.stepDescription}>
                  Your writer starts working on your essay immediately, with your deadline in mind.
                </p>
                <div className={styles.stepTime}>Immediate start</div>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3 className={styles.stepTitle}>Receive & Submit</h3>
                <p className={styles.stepDescription}>
                  Get your completed essay before your deadline, review, and submit with confidence.
                </p>
                <div className={styles.stepTime}>Before deadline</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Saved by Our Urgent Service
            </h2>
            <p className={styles.sectionSubtitle}>
              Real stories from students who made impossible deadlines
            </p>
            
            <div className={styles.testimonialsGrid}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "I completely forgot about my 2000-word essay due in 6 hours. I was panicking. These amazing people delivered it in 5 hours and it was excellent quality. Got an A-! Lifesavers!"
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Sarah K.</div>
                  <div className={styles.authorUni}>Psychology Student</div>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "My professor moved the deadline up by 2 days and I had 3 other assignments due. Ordered a 12-hour essay and it was perfect. The writer followed all my instructions and the citations were flawless."
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Mike T.</div>
                  <div className={styles.authorUni}>Business Major</div>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "It was 2 AM and my essay needed major revisions before the 8 AM deadline. I submitted for emergency revision and had the updated essay in my inbox by 5 AM. Still can't believe it."
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Jennifer L.</div>
                  <div className={styles.authorUni}>Nursing Student</div>
                </div>
              </div>
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
              Everything you need to know about our urgent service
            </p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  How fast can you write my essay?
                </h3>
                <p className={styles.faqAnswer}>
                  We offer multiple urgent deadlines: 3 hours, 6 hours, 12 hours, and 24 hours. The shortest deadline is 3 hours for up to 1000 words. For longer essays, we recommend at least 6-12 hours to ensure quality.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Is the quality still good with urgent deadlines?
                </h3>
                <p className={styles.faqAnswer}>
                  Absolutely! Our urgent service writers are specifically trained to work efficiently without compromising quality. They are experienced in producing high-quality work under tight deadlines and follow the same rigorous standards as our regular service.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you work 24/7?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, our urgent service operates 24 hours a day, 7 days a week, 365 days a year. We have writers working in all time zones to ensure someone is always available to help you, even at 3 AM.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you help with last-minute revisions?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes! We offer emergency revision services. If you need changes to an existing essay urgently, our writers can make revisions quickly to meet your deadline.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What subjects can you handle urgently?
                </h3>
                <p className={styles.faqAnswer}>
                  We can handle urgent essays across all subjects including literature, history, psychology, sociology, business, marketing, nursing, and more. Our urgent response team includes writers from diverse disciplines.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  How do I request urgent help?
                </h3>
                <p className={styles.faqAnswer}>
                  Simply select your deadline (3h, 6h, 12h, or 24h) when placing your order, and our system will automatically match you with an available urgent response writer. You can also contact us directly for immediate assistance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency CTA Section */}
        <section className={styles.emergencyCta}>
          <div className={styles.container}>
            <div className={styles.emergencyContent}>
              <div className={styles.emergencyIcon}>🆘</div>
              <h2 className={styles.emergencyTitle}>
                Emergency? We're Here 24/7
              </h2>
              <p className={styles.emergencyText}>
                Don't let a tight deadline stress you out. Our urgent response team is available right now to help you submit on time.
              </p>
              <div className={styles.emergencyButtons}>
                <Link href="/contact" className={styles.emergencyPrimary}>
                  Get Help Now
                </Link>
                <Link href="#deadlines" className={styles.emergencySecondary}>
                  View Deadlines
                </Link>
              </div>
              <div className={styles.emergencyGuarantee}>
                <span>✓ 3-Hour Delivery Available</span>
                <span>✓ 24/7 Support</span>
                <span>✓ Quality Guaranteed</span>
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