// src/app/editing-essay/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// SEO Metadata for Editing Essay Page
export const metadata: Metadata = {
  title: 'Editing & Proofreading for Essays | Professional Essay Editing Service',
  description: 'Already written your essay but need a second look? Our editing essay service polishes your work, fixing grammar errors, improving flow, and ensuring proper citation format. We help you elevate your draft to achieve higher grades. From $12.99 CAD.',
  keywords: [
    'editing essay',
    'essay editing service',
    'proofreading service',
    'essay proofreading',
    'academic editing',
    'paper editing',
    'thesis editing',
    'dissertation editing',
    'grammar check',
    'spelling check',
    'punctuation correction',
    'sentence structure',
    'flow improvement',
    'clarity editing',
    'citation formatting',
    'APA editing',
    'MLA editing',
    'Chicago editing',
    'Harvard editing',
    'essay polishing',
    'manuscript editing',
    'document editing',
    'academic proofreading',
    'college essay editing',
    'university paper editing'
  ],
  authors: [{ name: 'HelpWithMyAssignments Editing Division' }],
  creator: 'HelpWithMyAssignments',
  publisher: 'HelpWithMyAssignments',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/editing-essay',
  },
  openGraph: {
    title: 'Editing & Proofreading for Essays | Professional Essay Editing Service',
    description: '📝 Already written your essay but need a second look? Our editing essay service polishes your work, fixing grammar errors, improving flow, and ensuring proper citation format. From $12.99 CAD.',
    url: '/editing-essay',
    siteName: 'HelpWithMyAssignments',
    images: [
      {
        url: '/images/og-editing-essay.jpg',
        width: 1200,
        height: 630,
        alt: 'Editing & Proofreading for Essays',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Editing & Proofreading for Essays',
    description: '📝 Professional essay editing service. Polish your work for higher grades.',
    images: ['/images/twitter-editing-essay.jpg'],
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
  classification: 'Editing & Proofreading Services',
}

// Structured Data for Rich Results - Service Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://helpassignments.com/editing-essay",
  "name": "Editing & Proofreading for Essays",
  "description": "Already written your essay but need a second look? Our editing essay service polishes your work, fixing grammar errors, improving flow, and ensuring proper citation format. We help you elevate your draft to achieve higher grades.",
  "url": "https://helpassignments.com/editing-essay",
  "provider": {
    "@type": "Organization",
    "name": "HelpWithMyAssignments",
    "url": "https://helpassignments.com"
  },
  "serviceType": "Editing & Proofreading Service",
  "areaServed": {
    "@type": "Country",
    "name": "Multiple Countries"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Editing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Essay Editing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Proofreading"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Citation Formatting"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Grammar Correction"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Flow Improvement"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "3124",
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
      "name": "Editing & Proofreading",
      "item": "https://helpassignments.com/editing-essay"
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
      "name": "What does your editing service include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our editing service includes comprehensive grammar and spelling correction, punctuation fixes, sentence structure improvement, clarity enhancement, flow and coherence optimization, citation formatting (APA, MLA, Chicago, Harvard, etc.), and overall readability improvement. We ensure your essay is polished and ready for submission."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between editing and proofreading?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Proofreading focuses on surface-level errors like spelling, grammar, and punctuation. Editing goes deeper to improve sentence structure, clarity, flow, organization, and overall argument strength. Our service combines both to ensure your essay is flawless and compelling."
      }
    },
    {
      "@type": "Question",
      "name": "Do you check citations and references?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we thoroughly check all in-text citations and reference lists to ensure they follow your required citation style (APA, MLA, Chicago, Harvard, etc.). We verify formatting, punctuation, and completeness of all citations."
      }
    },
    {
      "@type": "Question",
      "name": "Who edits my essay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your essay will be edited by professional editors with advanced degrees and extensive experience in academic editing. All our editors are native English speakers trained in various citation styles and academic writing conventions."
      }
    },
    {
      "@type": "Question",
      "name": "How long does editing take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard editing turnaround is 24-48 hours. We also offer express editing (12 hours) and same-day editing for urgent needs. Contact us for specific timelines based on your document length."
      }
    },
    {
      "@type": "Question",
      "name": "Do you edit essays in all subjects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we edit essays across all academic disciplines including humanities, social sciences, natural sciences, business, law, nursing, engineering, and more. Our editors have diverse subject expertise."
      }
    }
  ]
}

// Editing services data
const editingServices = [
  {
    title: "Grammar & Spelling",
    description: "Comprehensive correction of grammatical errors, spelling mistakes, and punctuation issues.",
    icon: "✓",
    features: ["Subject-verb agreement", "Verb tense consistency", "Pronoun usage", "Spelling errors", "Punctuation marks", "Capitalization"]
  },
  {
    title: "Sentence Structure",
    description: "Improving sentence clarity, variety, and flow for better readability.",
    icon: "📝",
    features: ["Run-on sentences", "Sentence fragments", "Word order", "Parallel structure", "Transitions", "Rhythm & flow"]
  },
  {
    title: "Clarity & Precision",
    description: "Enhancing word choice and eliminating ambiguity for clearer communication.",
    icon: "💡",
    features: ["Word choice", "Vague language", "Redundancy", "Conciseness", "Jargon removal", "Precise terminology"]
  },
  {
    title: "Flow & Coherence",
    description: "Ensuring logical progression of ideas and smooth transitions between paragraphs.",
    icon: "🌊",
    features: ["Paragraph transitions", "Idea progression", "Logical flow", "Topic sentences", "Cohesive devices", "Overall structure"]
  },
  {
    title: "Citation Formatting",
    description: "Perfect formatting of in-text citations and reference lists in any style.",
    icon: "📚",
    features: ["APA 7th edition", "MLA 9th edition", "Chicago/Turabian", "Harvard style", "Vancouver style", "IEEE style"]
  },
  {
    title: "Argument Strengthening",
    description: "Enhancing your thesis, supporting evidence, and overall argument quality.",
    icon: "⚡",
    features: ["Thesis clarity", "Evidence integration", "Argument logic", "Counterarguments", "Critical analysis", "Conclusion impact"]
  }
]

// Levels of editing data
const editingLevels = [
  {
    level: "Proofreading",
    price: "$12.99 CAD",
    description: "Surface-level correction of errors",
    includes: ["Spelling", "Grammar", "Punctuation", "Basic formatting"]
  },
  {
    level: "Copy Editing",
    price: "$18.99 CAD",
    description: "Comprehensive text improvement",
    includes: ["Everything in Proofreading", "Sentence structure", "Word choice", "Clarity", "Flow", "Citation checking"]
  },
  {
    level: "Developmental Editing",
    price: "$24.99 CAD",
    description: "In-depth structural improvement",
    includes: ["Everything in Copy Editing", "Argument strengthening", "Organization", "Content development", "Thesis refinement", "Critical feedback"]
  }
]

// Document types data
const documentTypes = [
  { name: "Essays", icon: "📝" },
  { name: "Research Papers", icon: "📚" },
  { name: "Dissertations", icon: "🎓" },
  { name: "Theses", icon: "📖" },
  { name: "Articles", icon: "📰" },
  { name: "Reports", icon: "📊" },
  { name: "Personal Statements", icon: "✍️" },
  { name: "Cover Letters", icon: "💼" },
  { name: "Assignments", icon: "📋" },
  { name: "Manuscripts", icon: "📄" }
]

// Benefits data
const benefits = [
  {
    title: "Higher Grades",
    description: "Polished, error-free essays consistently earn higher marks from professors.",
    icon: "🎓"
  },
  {
    title: "Professional Polish",
    description: "Give your work the professional finish it deserves with expert editing.",
    icon: "✨"
  },
  {
    title: "Citation Accuracy",
    description: "Avoid point deductions for incorrect citations with our thorough checking.",
    icon: "✅"
  },
  {
    title: "Clarity & Impact",
    description: "Make your arguments clearer and more persuasive with improved writing.",
    icon: "💪"
  }
]

export default function EditingEssayPage() {
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
              <div className={styles.heroIcon}>📝</div>
              <h1 className={styles.heroTitle}>
                Editing & Proofreading <span className={styles.highlight}>for Essays</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Already written your essay but need a second look? Our editing essay service polishes your work, fixing grammar errors, improving flow, and ensuring proper citation format. We help you <strong>elevate your draft to achieve higher grades</strong>.
              </p>
              <div className={styles.priceBadge}>
                <span className={styles.priceLabel}>Starting from</span>
                <span className={styles.priceValue}>$12.99 CAD</span>
              </div>
              <div className={styles.heroCta}>
                <Link href="#pricing" className={styles.primaryButton}>
                  View Editing Levels
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Submit Your Essay
                </Link>
              </div>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>3000+</span>
                  <span className={styles.statLabel}>Essays Edited</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>24-48h</span>
                  <span className={styles.statLabel}>Turnaround</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>4.9/5</span>
                  <span className={styles.statLabel}>Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefits}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Why Professional Editing Matters
            </h2>
            <p className={styles.sectionSubtitle}>
              Small improvements can make a big difference in your grades
            </p>
            
            <div className={styles.benefitsGrid}>
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>{benefit.icon}</div>
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Editing Services Section */}
        <section className={styles.editingServices}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              What We'll Improve in Your Essay
            </h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive editing that transforms good writing into exceptional work
            </p>
            
            <div className={styles.servicesGrid}>
              {editingServices.map((service, index) => (
                <div key={index} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <div className={styles.serviceFeatures}>
                    {service.features.map((feature, i) => (
                      <span key={i} className={styles.featureTag}>{feature}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Editing Levels Section */}
        <section id="pricing" className={styles.editingLevels}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Choose Your Editing Level
            </h2>
            <p className={styles.sectionSubtitle}>
              Select the service that matches your needs
            </p>
            
            <div className={styles.levelsGrid}>
              {editingLevels.map((level, index) => (
                <div key={index} className={styles.levelCard}>
                  <h3 className={styles.levelName}>{level.level}</h3>
                  <div className={styles.levelPrice}>{level.price}</div>
                  <p className={styles.levelDescription}>{level.description}</p>
                  <div className={styles.levelIncludes}>
                    {level.includes.map((item, i) => (
                      <div key={i} className={styles.includeItem}>
                        <span className={styles.checkMark}>✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className={styles.levelLink}>
                    Select This Level
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Document Types Section */}
        <section className={styles.documentTypes}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Documents We Edit
            </h2>
            <p className={styles.sectionSubtitle}>
              From essays to dissertations — we polish all academic writing
            </p>
            
            <div className={styles.documentsGrid}>
              {documentTypes.map((doc, index) => (
                <div key={index} className={styles.documentCard}>
                  <div className={styles.documentIcon}>{doc.icon}</div>
                  <h3 className={styles.documentName}>{doc.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className={styles.howItWorks}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              How It Works
            </h2>
            <p className={styles.sectionSubtitle}>
              Get your essay polished in 4 simple steps
            </p>
            
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Upload Your Essay</h3>
                <p className={styles.stepDescription}>
                  Submit your essay along with your requirements, citation style, and any specific concerns.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Choose Editing Level</h3>
                <p className={styles.stepDescription}>
                  Select the level of editing that matches your needs and budget.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Expert Edits Your Work</h3>
                <p className={styles.stepDescription}>
                  A professional editor polishes your essay, fixing errors and improving flow.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3 className={styles.stepTitle}>Receive Polished Essay</h3>
                <p className={styles.stepDescription}>
                  Download your edited essay, review the changes, and request revisions if needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Edits Section */}
        <section className={styles.sampleEdits}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Before & After
            </h2>
            <p className={styles.sectionSubtitle}>
              See the difference professional editing makes
            </p>
            
            <div className={styles.sampleGrid}>
              <div className={styles.sampleCard}>
                <h3 className={styles.sampleLabel}>Before Editing</h3>
                <div className={`${styles.sampleText} ${styles.before}`}>
                  "The study of history is important because it helps us understand the past. Many people dont realize how much the past effects the present. When we study history we can see patterns that repeat themselves over time. This can help us make better decisions in the future."
                </div>
              </div>
              
              <div className={styles.sampleCard}>
                <h3 className={styles.sampleLabel}>After Editing</h3>
                <div className={`${styles.sampleText} ${styles.after}`}>
                  "The study of history is essential because it illuminates the past and reveals its profound influence on the present. Many people fail to recognize how historical events shape contemporary society. By examining history, we can identify recurring patterns and cycles, enabling us to make more informed decisions about the future."
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
              Everything you need to know about our editing service
            </p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What does your editing service include?
                </h3>
                <p className={styles.faqAnswer}>
                  Our editing service includes comprehensive grammar and spelling correction, punctuation fixes, sentence structure improvement, clarity enhancement, flow and coherence optimization, citation formatting (APA, MLA, Chicago, Harvard, etc.), and overall readability improvement. We ensure your essay is polished and ready for submission.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What is the difference between editing and proofreading?
                </h3>
                <p className={styles.faqAnswer}>
                  Proofreading focuses on surface-level errors like spelling, grammar, and punctuation. Editing goes deeper to improve sentence structure, clarity, flow, organization, and overall argument strength. Our service combines both to ensure your essay is flawless and compelling.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you check citations and references?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we thoroughly check all in-text citations and reference lists to ensure they follow your required citation style (APA, MLA, Chicago, Harvard, etc.). We verify formatting, punctuation, and completeness of all citations.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Who edits my essay?
                </h3>
                <p className={styles.faqAnswer}>
                  Your essay will be edited by professional editors with advanced degrees and extensive experience in academic editing. All our editors are native English speakers trained in various citation styles and academic writing conventions.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  How long does editing take?
                </h3>
                <p className={styles.faqAnswer}>
                  Standard editing turnaround is 24-48 hours. We also offer express editing (12 hours) and same-day editing for urgent needs. Contact us for specific timelines based on your document length.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you edit essays in all subjects?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we edit essays across all academic disciplines including humanities, social sciences, natural sciences, business, law, nursing, engineering, and more. Our editors have diverse subject expertise.
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
                Ready to Polish Your Essay?
              </h2>
              <p className={styles.ctaText}>
                Don't let small errors cost you grades. Let our expert editors give your work the professional polish it deserves.
              </p>
              <div className={styles.priceDisplay}>
                <span className={styles.priceDisplayLabel}>Starting from</span>
                <span className={styles.priceDisplayValue}>$12.99 CAD</span>
              </div>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Submit Your Essay
                </Link>
                <Link href="#pricing" className={styles.ctaSecondary}>
                  View Editing Levels
                </Link>
              </div>
              <div className={styles.ctaTrust}>
                <span>Free Sample Edit</span>
                <span>24-48h Turnaround</span>
                <span>Satisfaction Guaranteed</span>
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