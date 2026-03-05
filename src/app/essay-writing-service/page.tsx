// src/app/essay-writing-service/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// SEO Metadata for Essay Writing Service Page
export const metadata: Metadata = {
  title: 'Professional Essay Writing Service | Get Help from Expert Writers',
  description: 'Need a compelling argumentative essay, reflective personal statement, or analytical literary analysis? Our essay writing services cover all types and formats. 100% original, plagiarism-free essays crafted from scratch. APA/MLA/Chicago style experts. 24/7 support.',
  keywords: [
    'essay writing service',
    'professional essay writing',
    'argumentative essay help',
    'personal statement writing',
    'literary analysis essay',
    'college application essay help',
    'APA format essay',
    'MLA format essay',
    'Chicago style essay',
    'graduate level essay',
    '500 word essay',
    '5000 word essay',
    'essay writer online',
    'write my essay',
    'essay help',
    'academic essay writing',
    'university essay help',
    'college essay writing service'
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
    canonical: '/essay-writing-service',
  },
  openGraph: {
    title: 'Professional Essay Writing Service | Expert Writers',
    description: '🏆 Get expertly crafted essays from scratch. Argumentative, reflective, analytical, personal statements & more. APA/MLA/Chicago style. 100% original. 24/7 support.',
    url: '/essay-writing-service',
    siteName: 'HelpWithMyAssignments',
    images: [
      {
        url: '/images/og-essay-writing-service.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Essay Writing Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Essay Writing Service',
    description: '🏆 Expert essay writing help. Get your perfect essay today!',
    images: ['/images/twitter-essay-writing-service.jpg'],
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
  classification: 'Academic Writing Services',
}

// Structured Data for Rich Results - Service Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://helpassignments.com/essay-writing-service",
  "name": "Professional Essay Writing Service",
  "description": "Need a compelling argumentative essay, a reflective personal statement, or an analytical literary analysis? Our essay writing services cover all types and formats. Each essay is crafted from scratch, follows your specific guidelines, and adheres to APA, MLA, or Chicago style.",
  "url": "https://helpassignments.com/essay-writing-service",
  "provider": {
    "@type": "Organization",
    "name": "HelpWithMyAssignments",
    "url": "https://helpassignments.com"
  },
  "serviceType": "Essay Writing Service",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Essay Types",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Argumentative Essay Writing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Reflective Personal Statement"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Analytical Literary Analysis"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "College Application Essay"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Graduate Level Analysis"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "8754",
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
      "name": "Essay Writing Service",
      "item": "https://helpassignments.com/essay-writing-service"
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
      "name": "What types of essays do you write?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We write all types of essays including argumentative essays, reflective personal statements, analytical literary analyses, compare and contrast essays, cause and effect essays, descriptive essays, narrative essays, expository essays, persuasive essays, and college application essays."
      }
    },
    {
      "@type": "Question",
      "name": "Do you follow specific formatting styles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our expert writers are proficient in all major formatting styles including APA (7th edition), MLA (9th edition), Chicago/Turabian, Harvard, and IEEE. We ensure your essay adheres to the specific guidelines you provide."
      }
    },
    {
      "@type": "Question",
      "name": "Can you write essays of any length?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We handle essays of all lengths, from 500-word college application essays to 5000-word graduate-level analyses. Whether you need a short reflection paper or an extensive research essay, we deliver excellence every time."
      }
    },
    {
      "@type": "Question",
      "name": "Is my essay original and plagiarism-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every essay is crafted from scratch based on your specific guidelines. We never resell or recycle papers. All work is checked with advanced plagiarism detection software, and we provide a free plagiarism report upon request."
      }
    },
    {
      "@type": "Question",
      "name": "Who writes my essay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your essay will be written by a qualified expert with advanced degrees (Master's or PhD) in your subject area. Our writers specialize in various disciplines and are experienced in academic writing across all essay types and formats."
      }
    },
    {
      "@type": "Question",
      "name": "What if I need revisions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer unlimited free revisions until you're completely satisfied with your essay. Your satisfaction is our priority, and we work with you to ensure the final product meets all your requirements."
      }
    }
  ]
}

// Essay types data
const essayTypes = [
  {
    title: "Argumentative Essay",
    description: "Present a well-reasoned argument on a controversial topic with clear claims, evidence, and counterarguments. Our experts help you build compelling arguments that persuade your readers.",
    icon: "⚖️",
    price: "from $19.99"
  },
  {
    title: "Reflective Personal Statement",
    description: "Share your personal journey, experiences, and insights in a compelling narrative. Perfect for college applications, scholarships, or personal development courses.",
    icon: "📝",
    price: "from $24.99"
  },
  {
    title: "Analytical Literary Analysis",
    description: "Dive deep into literature with critical analysis of themes, characters, symbolism, and literary devices. Our literature experts provide insightful interpretations.",
    icon: "📚",
    price: "from $22.99"
  },
  {
    title: "Compare and Contrast Essay",
    description: "Examine similarities and differences between two or more subjects, ideas, or works. We help you identify meaningful comparisons and draw insightful conclusions.",
    icon: "🔄",
    price: "from $19.99"
  },
  {
    title: "Cause and Effect Essay",
    description: "Explore the relationships between events, actions, and outcomes. Our writers help you trace causal chains and analyze the significance of various factors.",
    icon: "🔗",
    price: "from $19.99"
  },
  {
    title: "Descriptive Essay",
    description: "Paint vivid pictures with words using sensory details and figurative language. Perfect for creative writing assignments that require rich, immersive descriptions.",
    icon: "🎨",
    price: "from $17.99"
  },
  {
    title: "Narrative Essay",
    description: "Tell a compelling story from your perspective with engaging plot, characters, and narrative arc. Our writers help you craft narratives that captivate readers.",
    icon: "📖",
    price: "from $17.99"
  },
  {
    title: "Expository Essay",
    description: "Explain complex topics clearly and objectively with factual information and logical organization. Ideal for informative assignments across all subjects.",
    icon: "🔍",
    price: "from $18.99"
  },
  {
    title: "Persuasive Essay",
    description: "Convince your audience to adopt your viewpoint using rhetorical strategies and compelling evidence. Our experts help you craft persuasive arguments that resonate.",
    icon: "💬",
    price: "from $19.99"
  },
  {
    title: "College Application Essay",
    description: "Stand out from the crowd with a personal essay that showcases your unique qualities, experiences, and aspirations. We help you tell your authentic story.",
    icon: "🎓",
    price: "from $29.99"
  },
  {
    title: "Graduate Level Analysis",
    description: "Advanced academic writing for graduate students requiring sophisticated analysis, theoretical frameworks, and scholarly rigor. Our PhD experts deliver excellence.",
    icon: "🔬",
    price: "from $34.99"
  }
]

// Formatting styles data
const formattingStyles = [
  { name: "APA 7th Edition", description: "American Psychological Association style for social sciences, education, and psychology" },
  { name: "MLA 9th Edition", description: "Modern Language Association style for humanities, literature, and arts" },
  { name: "Chicago/Turabian", description: "Chicago Manual of Style for history, business, and fine arts" },
  { name: "Harvard", description: "Harvard referencing style for business, economics, and social sciences" },
  { name: "IEEE", description: "Institute of Electrical and Electronics Engineers style for engineering and computer science" },
  { name: "AMA", description: "American Medical Association style for medicine and health sciences" }
]

// Word count examples
const wordCounts = [
  { count: "500 words", description: "Short essays, personal statements, discussion posts", price: "from $5.99" },
  { count: "1000 words", description: "Standard undergraduate essays, short analyses", price: "from $10.99" },
  { count: "2000 words", description: "Extended essays, research summaries", price: "from $19.99" },
  { count: "3000 words", description: "In-depth analyses, term papers", price: "from $29.99" },
  { count: "5000 words", description: "Graduate-level essays, comprehensive research", price: "from $49.99" }
]

export default function EssayWritingServicePage() {
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
              <h1 className={styles.heroTitle}>
                Professional <span className={styles.highlight}>Essay Writing Service</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Need a compelling argumentative essay, a reflective personal statement, or an analytical literary analysis? Our essay writing services cover all types and formats. Each essay is crafted from scratch, follows your specific guidelines, and adheres to APA, MLA, or Chicago style. Whether it's a 500-word college application essay or a 5000-word graduate-level analysis, we deliver excellence every time.
              </p>
              <div className={styles.heroCta}>
                <Link href="#pricing" className={styles.primaryButton}>
                  View Pricing & Essay Types
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Order Your Essay Now
                </Link>
              </div>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>5000+</span>
                  <span className={styles.statLabel}>Essays Written</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>4.9/5</span>
                  <span className={styles.statLabel}>Customer Rating</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>100%</span>
                  <span className={styles.statLabel}>Original Content</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Essay Types Section */}
        <section id="pricing" className={styles.essayTypes}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              All Essay Types We Write
            </h2>
            <p className={styles.sectionSubtitle}>
              From argumentative essays to personal statements — we cover every academic essay type with precision and expertise.
            </p>
            
            <div className={styles.essayTypesGrid}>
              {essayTypes.map((type, index) => (
                <div key={index} className={styles.essayTypeCard}>
                  <div className={styles.essayTypeIcon}>{type.icon}</div>
                  <h3 className={styles.essayTypeTitle}>{type.title}</h3>
                  <p className={styles.essayTypeDescription}>{type.description}</p>
                  <div className={styles.essayTypePrice}>{type.price}</div>
                  <Link href="/contact" className={styles.essayTypeLink}>
                    Order Now →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formatting Styles Section */}
        <section className={styles.formatting}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Formatting Styles We Master
            </h2>
            <p className={styles.sectionSubtitle}>
              Your essay will be perfectly formatted in your required style — APA, MLA, Chicago, and more.
            </p>
            
            <div className={styles.formattingGrid}>
              {formattingStyles.map((style, index) => (
                <div key={index} className={styles.formattingCard}>
                  <h3 className={styles.formattingTitle}>{style.name}</h3>
                  <p className={styles.formattingDescription}>{style.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Word Count Section */}
        <section className={styles.wordCount}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Essays of Any Length
            </h2>
            <p className={styles.sectionSubtitle}>
              Whether you need a 500-word college essay or a 5000-word graduate analysis, we've got you covered.
            </p>
            
            <div className={styles.wordCountGrid}>
              {wordCounts.map((item, index) => (
                <div key={index} className={styles.wordCountCard}>
                  <h3 className={styles.wordCountNumber}>{item.count}</h3>
                  <p className={styles.wordCountDescription}>{item.description}</p>
                  <div className={styles.wordCountPrice}>{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Why Choose Our Essay Writing Service
            </h2>
            <p className={styles.sectionSubtitle}>
              We deliver excellence in every essay, every time.
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📝</div>
                <h3 className={styles.featureTitle}>Crafted From Scratch</h3>
                <p className={styles.featureDescription}>
                  Every essay is written from scratch based on your specific guidelines. We never resell or recycle papers.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🎯</div>
                <h3 className={styles.featureTitle}>Follows Your Guidelines</h3>
                <p className={styles.featureDescription}>
                  Your instructions, sources, and requirements are followed precisely. We tailor every essay to your needs.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📚</div>
                <h3 className={styles.featureTitle}>APA/MLA/Chicago Style</h3>
                <p className={styles.featureDescription}>
                  Expert formatting in all major academic styles. Perfect citations, proper structure, and consistent formatting.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>✅</div>
                <h3 className={styles.featureTitle}>100% Original Content</h3>
                <p className={styles.featureDescription}>
                  Plagiarism-free guarantee with free Turnitin report available. Your essay is checked for originality.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⏱️</div>
                <h3 className={styles.featureTitle}>On-Time Delivery</h3>
                <p className={styles.featureDescription}>
                  We respect your deadlines. Your essay will be delivered on time, every time, even with urgent deadlines.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔄</div>
                <h3 className={styles.featureTitle}>Free Revisions</h3>
                <p className={styles.featureDescription}>
                  Unlimited free revisions until you're completely satisfied with your essay. Your satisfaction is guaranteed.
                </p>
              </div>
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
              Get your perfect essay in 4 simple steps
            </p>
            
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Submit Requirements</h3>
                <p className={styles.stepDescription}>
                  Fill out our order form with your essay topic, type, length, formatting style, and any specific instructions or sources.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Choose Your Expert</h3>
                <p className={styles.stepDescription}>
                  Get matched with a qualified writer who specializes in your subject area and has experience with your essay type.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Review & Revise</h3>
                <p className={styles.stepDescription}>
                  Receive your draft, review it carefully, and request any revisions. We offer unlimited free revisions until you're satisfied.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3 className={styles.stepTitle}>Download & Submit</h3>
                <p className={styles.stepDescription}>
                  Download your final, polished essay. It's ready to submit and guaranteed to meet your requirements.
                </p>
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
              Everything you need to know about our essay writing service
            </p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What types of essays do you write?
                </h3>
                <p className={styles.faqAnswer}>
                  We write all types of essays including argumentative essays, reflective personal statements, analytical literary analyses, compare and contrast essays, cause and effect essays, descriptive essays, narrative essays, expository essays, persuasive essays, and college application essays.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you follow specific formatting styles?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, our expert writers are proficient in all major formatting styles including APA (7th edition), MLA (9th edition), Chicago/Turabian, Harvard, and IEEE. We ensure your essay adheres to the specific guidelines you provide.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you write essays of any length?
                </h3>
                <p className={styles.faqAnswer}>
                  Absolutely! We handle essays of all lengths, from 500-word college application essays to 5000-word graduate-level analyses. Whether you need a short reflection paper or an extensive research essay, we deliver excellence every time.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Is my essay original and plagiarism-free?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, every essay is crafted from scratch based on your specific guidelines. We never resell or recycle papers. All work is checked with advanced plagiarism detection software, and we provide a free plagiarism report upon request.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Who writes my essay?
                </h3>
                <p className={styles.faqAnswer}>
                  Your essay will be written by a qualified expert with advanced degrees (Master's or PhD) in your subject area. Our writers specialize in various disciplines and are experienced in academic writing across all essay types and formats.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What if I need revisions?
                </h3>
                <p className={styles.faqAnswer}>
                  We offer unlimited free revisions until you're completely satisfied with your essay. Your satisfaction is our priority, and we work with you to ensure the final product meets all your requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Ready to Get Your Perfect Essay?
              </h2>
              <p className={styles.ctaText}>
                Whether you need an argumentative essay, personal statement, or literary analysis — our expert writers are ready to help. Get a 100% original, well-researched essay crafted to your exact requirements.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Order Your Essay Now
                </Link>
                <Link href="/pricing" className={styles.ctaSecondary}>
                  View Pricing
                </Link>
              </div>
              <div className={styles.ctaTrust}>
                <span>100% Money Back Guarantee</span>
                <span>Free Plagiarism Report</span>
                <span>Unlimited Free Revisions</span>
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