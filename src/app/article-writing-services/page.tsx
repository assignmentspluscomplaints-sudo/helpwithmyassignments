// src/app/services/article-writing-services/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// SEO Metadata for Article Writing Services Page
export const metadata: Metadata = {
  title: 'Article Writing Services | Professional Article Writers',
  description: 'Need high-quality article writing services? Our professional article writers create engaging, well-researched articles for blogs, websites, magazines, and academic publications. SEO-optimized content. 100% original. Fast delivery.',
  keywords: [
    'article writing services',
    'article writers',
    'content writing services',
    'blog writing services',
    'web content writing',
    'magazine article writing',
    'SEO article writing',
    'academic article writing',
    'journal article writing',
    'feature article writing',
    'news article writing',
    'opinion article writing',
    'review article writing',
    'professional article writers',
    'article writing help',
    'article writing company',
    'article content writing',
    'article writing online',
    'article writing service USA',
    'article writing service UK',
    'article writing service Australia',
    'affordable article writing',
    'custom article writing',
    'article writing experts'
  ],
  authors: [{ name: 'HelpWithMyAssignments Article Writing Division' }],
  creator: 'HelpWithMyAssignments',
  publisher: 'HelpWithMyAssignments',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/services/article-writing-services',
  },
  openGraph: {
    title: 'Article Writing Services | Professional Article Writers',
    description: '📝 Need high-quality article writing services? Our professional article writers create engaging, well-researched articles for blogs, websites, magazines, and academic publications. SEO-optimized content. 100% original. Fast delivery.',
    url: '/services/article-writing-services',
    siteName: 'HelpWithMyAssignments',
    images: [
      {
        url: '/images/og-article-writing-service.jpg',
        width: 1200,
        height: 630,
        alt: 'Article Writing Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Article Writing Services',
    description: '📝 Professional article writing services. Engaging, well-researched content for any platform.',
    images: ['/images/twitter-article-writing-service.jpg'],
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
  category: 'content',
  classification: 'Article Writing Services',
}

// Structured Data for Rich Results - Service Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://helpassignments.com/services/article-writing-services",
  "name": "Article Writing Services",
  "description": "Professional article writing services from expert writers. We create engaging, well-researched articles for blogs, websites, magazines, and academic publications. Each article is SEO-optimized, 100% original, and tailored to your target audience.",
  "url": "https://helpassignments.com/services/article-writing-services",
  "provider": {
    "@type": "Organization",
    "name": "HelpWithMyAssignments",
    "url": "https://helpassignments.com"
  },
  "serviceType": "Article Writing Service",
  "areaServed": {
    "@type": "Country",
    "name": "Multiple Countries"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Article Writing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Blog Article Writing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Website Content Writing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Magazine Article Writing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Article Writing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Academic Article Writing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Journal Article Writing"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "2567",
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
      "name": "Services",
      "item": "https://helpassignments.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Article Writing Services",
      "item": "https://helpassignments.com/services/article-writing-services"
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
      "name": "What types of articles do you write?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We write all types of articles including blog posts, website content, magazine articles, newspaper articles, feature articles, opinion pieces, review articles, SEO articles, academic articles, journal articles, newsletter articles, guest posts, and press releases across all industries and niches."
      }
    },
    {
      "@type": "Question",
      "name": "Do you write SEO-optimized articles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our articles are SEO-optimized with proper keyword placement, meta descriptions, headings, and internal linking structure. We follow the latest SEO best practices to help your content rank well in search engines."
      }
    },
    {
      "@type": "Question",
      "name": "Who writes my articles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your articles will be written by professional writers with expertise in your specific industry or niche. Our writers have years of experience in content creation and understand how to engage readers while meeting your objectives."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide original, plagiarism-free content?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every article is crafted from scratch based on your requirements. We never resell or recycle content. All work is checked with advanced plagiarism detection software, and we provide a free plagiarism report upon request."
      }
    },
    {
      "@type": "Question",
      "name": "Can you write articles on any topic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we have writers with expertise across virtually every industry and niche including technology, health, finance, business, marketing, lifestyle, travel, education, science, law, and many more. We research each topic thoroughly to ensure accuracy and depth."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer revisions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer unlimited free revisions until you're completely satisfied with your articles. Your satisfaction is our priority, and we work with you to ensure the final content meets all your requirements."
      }
    }
  ]
}

// Article types data
const articleTypes = [
  {
    title: "Blog Articles",
    description: "Engaging, informative blog posts that attract readers and keep them coming back for more.",
    icon: "📝",
    features: ["SEO-optimized", "Reader-friendly", "Shareable content", "Consistent voice"]
  },
  {
    title: "Website Content",
    description: "Professional web content that clearly communicates your message and converts visitors.",
    icon: "💻",
    features: ["Clear messaging", "Call-to-action", "Brand voice", "User-focused"]
  },
  {
    title: "Magazine Articles",
    description: "Polished, publication-ready articles for print and digital magazines.",
    icon: "📰",
    features: ["Publication standards", "Engaging narrative", "Professional tone", "Editorial quality"]
  },
  {
    title: "SEO Articles",
    description: "Strategically optimized content designed to rank well in search engines.",
    icon: "🔍",
    features: ["Keyword optimization", "Meta descriptions", "Internal linking", "Search-friendly structure"]
  },
  {
    title: "Academic Articles",
    description: "Scholarly articles with proper research, citations, and academic rigor.",
    icon: "🎓",
    features: ["Peer-reviewed standards", "Proper citations", "Academic tone", "Research-based"]
  },
  {
    title: "Journal Articles",
    description: "Publication-ready articles for academic and professional journals.",
    icon: "📚",
    features: ["Journal guidelines", "Literature review", "Methodology", "Original contribution"]
  },
  {
    title: "Feature Articles",
    description: "In-depth, narrative-driven articles that explore topics comprehensively.",
    icon: "✨",
    features: ["Compelling storytelling", "In-depth research", "Multiple sources", "Engaging narrative"]
  },
  {
    title: "Opinion Pieces",
    description: "Persuasive articles that present and defend a clear viewpoint.",
    icon: "💭",
    features: ["Clear position", "Evidence-based", "Persuasive arguments", "Thought leadership"]
  },
  {
    title: "Review Articles",
    description: "Critical evaluations of products, services, books, or research.",
    icon: "⭐",
    features: ["Balanced assessment", "Key criteria", "Pros and cons", "Recommendations"]
  },
  {
    title: "News Articles",
    description: "Timely, factual reporting on current events and developments.",
    icon: "📡",
    features: ["Factual accuracy", "Timely reporting", "Multiple sources", "Objective tone"]
  },
  {
    title: "Newsletter Content",
    description: "Engaging newsletter articles that keep your audience informed and connected.",
    icon: "✉️",
    features: ["Concise writing", "Value-focused", "Reader engagement", "Consistent format"]
  },
  {
    title: "Guest Posts",
    description: "High-quality content for publication on other websites and blogs.",
    icon: "🤝",
    features: ["Publication guidelines", "Audience-appropriate", "Author bio", "Value-driven"]
  }
]

// Industries we serve data
const industries = [
  { name: "Technology", icon: "💻" },
  { name: "Health & Wellness", icon: "🏥" },
  { name: "Finance", icon: "💰" },
  { name: "Business", icon: "💼" },
  { name: "Marketing", icon: "📊" },
  { name: "Travel", icon: "✈️" },
  { name: "Lifestyle", icon: "🌟" },
  { name: "Education", icon: "🎓" },
  { name: "Science", icon: "🔬" },
  { name: "Law", icon: "⚖️" },
  { name: "Real Estate", icon: "🏠" },
  { name: "Fashion", icon: "👗" },
  { name: "Food & Beverage", icon: "🍔" },
  { name: "Sports", icon: "⚽" },
  { name: "Entertainment", icon: "🎬" },
  { name: "Environment", icon: "🌍" }
]

// Writing styles data
const writingStyles = [
  { name: "Conversational", description: "Friendly, approachable tone that connects with readers" },
  { name: "Professional", description: "Polished, authoritative tone for business audiences" },
  { name: "Academic", description: "Formal, scholarly tone with proper citations" },
  { name: "Journalistic", description: "Objective, factual tone for news and features" },
  { name: "Persuasive", description: "Compelling tone designed to convince and convert" },
  { name: "Technical", description: "Precise, detailed tone for complex topics" },
  { name: "Creative", description: "Imaginative, engaging tone for storytelling" },
  { name: "SEO-focused", description: "Strategically optimized for search engines" }
]

// Features data
const features = [
  {
    title: "Expert Writers",
    description: "Our writers are professionals with years of experience in content creation across multiple industries.",
    icon: "✍️"
  },
  {
    title: "SEO Optimized",
    description: "All articles are optimized for search engines with proper keyword placement and structure.",
    icon: "🔍"
  },
  {
    title: "100% Original",
    description: "Every article is written from scratch. Free plagiarism report included with every order.",
    icon: "✅"
  },
  {
    title: "Thorough Research",
    description: "We research each topic thoroughly to ensure accuracy, depth, and credibility.",
    icon: "📚"
  },
  {
    title: "Fast Turnaround",
    description: "We deliver high-quality articles quickly, even with tight deadlines.",
    icon: "⏰"
  },
  {
    title: "Unlimited Revisions",
    description: "Free revisions until you're completely satisfied with your articles.",
    icon: "🔄"
  }
]

export default function ArticleWritingServicesPage() {
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
              <div className={styles.heroIcon}></div>
              <h1 className={styles.heroTitle}>
                Professional <span className={styles.highlight}>Article Writing Services</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Need high-quality articles for your blog, website, or publication? Our professional article writers create <strong>engaging, well-researched, SEO-optimized content</strong> that captures attention and delivers results. From blog posts to journal articles, we've got you covered.
              </p>
              <div className={styles.heroCta}>
                <Link href="#pricing" className={styles.primaryButton}>
                  View Article Types
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Order Your Article
                </Link>
              </div>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>300+</span>
                  <span className={styles.statLabel}>Expert Writers</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>5000+</span>
                  <span className={styles.statLabel}>Articles Written</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>4.9/5</span>
                  <span className={styles.statLabel}>Client Rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Types Section */}
        <section id="pricing" className={styles.articleTypes}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Types of Articles We Write
            </h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive content solutions for every need
            </p>
            
            <div className={styles.articleTypesGrid}>
              {articleTypes.map((type, index) => (
                <div key={index} className={styles.articleTypeCard}>
                  <div className={styles.articleTypeIcon}>{type.icon}</div>
                  <h3 className={styles.articleTypeTitle}>{type.title}</h3>
                  <p className={styles.articleTypeDescription}>{type.description}</p>
                  <div className={styles.articleTypeFeatures}>
                    {type.features.map((feature, i) => (
                      <span key={i} className={styles.featureTag}>{feature}</span>
                    ))}
                  </div>
                  <Link href="/contact" className={styles.articleTypeLink}>
                    Get Started →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className={styles.industries}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Industries We Serve
            </h2>
            <p className={styles.sectionSubtitle}>
              Expertise across virtually every niche and industry
            </p>
            
            <div className={styles.industriesGrid}>
              {industries.map((industry, index) => (
                <div key={index} className={styles.industryCard}>
                  <div className={styles.industryIcon}>{industry.icon}</div>
                  <h3 className={styles.industryName}>{industry.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Writing Styles Section */}
        <section className={styles.writingStyles}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Writing Styles We Offer
            </h2>
            <p className={styles.sectionSubtitle}>
              The right tone for your audience and purpose
            </p>
            
            <div className={styles.stylesGrid}>
              {writingStyles.map((style, index) => (
                <div key={index} className={styles.styleCard}>
                  <h3 className={styles.styleName}>{style.name}</h3>
                  <p className={styles.styleDescription}>{style.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Why Choose Our Article Writing Service
            </h2>
            <p className={styles.sectionSubtitle}>
              Quality content that delivers results
            </p>
            
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
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
              Get your perfect articles in 4 simple steps
            </p>
            
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Share Your Requirements</h3>
                <p className={styles.stepDescription}>
                  Tell us about your article needs: topic, word count, tone, target audience, and any specific guidelines or keywords.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Get Matched with Writer</h3>
                <p className={styles.stepDescription}>
                  We match you with a professional writer who has expertise in your industry and experience with your type of content.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Writing & Review</h3>
                <p className={styles.stepDescription}>
                  Your writer creates your article, and you receive it for review. Request any revisions if needed.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3 className={styles.stepTitle}>Publish with Confidence</h3>
                <p className={styles.stepDescription}>
                  Download your final, polished article, ready for publication on your blog, website, or in your chosen publication.
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
              Everything you need to know about our article writing services
            </p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What types of articles do you write?
                </h3>
                <p className={styles.faqAnswer}>
                  We write all types of articles including blog posts, website content, magazine articles, newspaper articles, feature articles, opinion pieces, review articles, SEO articles, academic articles, journal articles, newsletter articles, guest posts, and press releases across all industries and niches.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you write SEO-optimized articles?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, our articles are SEO-optimized with proper keyword placement, meta descriptions, headings, and internal linking structure. We follow the latest SEO best practices to help your content rank well in search engines.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Who writes my articles?
                </h3>
                <p className={styles.faqAnswer}>
                  Your articles will be written by professional writers with expertise in your specific industry or niche. Our writers have years of experience in content creation and understand how to engage readers while meeting your objectives.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you provide original, plagiarism-free content?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, every article is crafted from scratch based on your requirements. We never resell or recycle content. All work is checked with advanced plagiarism detection software, and we provide a free plagiarism report upon request.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you write articles on any topic?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we have writers with expertise across virtually every industry and niche including technology, health, finance, business, marketing, lifestyle, travel, education, science, law, and many more. We research each topic thoroughly to ensure accuracy and depth.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you offer revisions?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we offer unlimited free revisions until you're completely satisfied with your articles. Your satisfaction is our priority, and we work with you to ensure the final content meets all your requirements.
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
                Ready to Create Amazing Content?
              </h2>
              <p className={styles.ctaText}>
                Whether you need blog posts, website content, or journal articles — our professional writers are ready to help. Get engaging, well-researched, SEO-optimized content tailored to your needs.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Order Your Article
                </Link>
                <Link href="#pricing" className={styles.ctaSecondary}>
                  View Article Types
                </Link>
              </div>
              <div className={styles.ctaTrust}>
                <span>100% Original Content</span>
                <span>SEO Optimized</span>
                <span>Unlimited Revisions</span>
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