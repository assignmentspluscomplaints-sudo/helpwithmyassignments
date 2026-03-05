import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import PricingCalculator from '@/components/PricingCalculator'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// SEO Title: Essay Writing Services in Canada | Paper & Research Help
// Meta Description: Need essay writing services in Canada? Get expert paper writers, plagiarism-free research papers & 24/7 student support. Affordable CAD pricing.
// URL: /essay-writing-services-canada

// Dynamic metadata for Canadian market
export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourcanadianessays.com'
  
  return {
    metadataBase: new URL(baseUrl),
    title: 'Essay Writing Services in Canada | Paper & Research Help 🇨🇦',
    description: 'Need essay writing services in Canada? Get expert paper writers, plagiarism-free research papers & 24/7 student support. Affordable CAD pricing. Trusted by 35,000+ Canadian students.',
    keywords: [
      'essay writing services',
      'essay writing service',
      'essay service writing',
      'paper writing service',
      'research paper writing service',
      'article writing services',
      'writing services',
      'paper writer',
      'editing essay',
      'writing help',
      'essayservice',
      'write my essays',
      'write my essay for me',
      'essay helper',
      'essay writing services Canada',
      'paper writing service Canada',
      'research paper writing service Canada',
      'write my essay for me in Canada',
      'essay help Canada',
      'Canadian essay writing service',
      'university essay help Toronto',
      'college paper help Vancouver',
      'assignment help Calgary',
      'essay writer Montreal',
      'academic writing service Canada'
    ],
    authors: [{ name: 'Canadian Essay Experts' }],
    creator: 'Canadian Essay Help',
    publisher: 'Canadian Academic Services',
    formatDetection: {
      email: false,
      address: true,
      telephone: true,
    },
    alternates: {
      canonical: '/essay-writing-services-canada',
      languages: {
        'en-CA': '/essay-writing-services-canada',
        'fr-CA': '/fr/services-redaction-dissertation-canada',
      },
    },
    openGraph: {
      title: 'Essay Writing Services in Canada | Paper & Research Help 🇨🇦',
      description: '🏆 Canada\'s Most Trusted Essay Writing Service. 2500+ Canadian PhD experts covering all Canadian universities. Get your free quote today!',
      url: '/essay-writing-services-canada',
      siteName: 'Canadian Essay Help',
      images: [
        {
          url: '/images/ca/og-canadian-essay-help.jpg',
          width: 1200,
          height: 630,
          alt: 'Canadian Essay Writing Service - Expert Help',
        },
      ],
      locale: 'en_CA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Essay Writing Services in Canada 🇨🇦',
      description: '🏆 #1 Essay Help in Canada. Trusted by 35,000+ Canadian students. Get HD grades now!',
      images: ['/images/ca/twitter-canadian-essay-help.jpg'],
      creator: '@canadianessays',
      site: '@canadianessays',
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
    verification: {
      google: 'your-google-verification-code-ca',
      other: {
        'facebook-domain-verification': ['your-facebook-verification-code-ca'],
      },
    },
    category: 'education',
    classification: 'Academic Writing Services',
    other: {
      'geo.region': 'CA',
      'geo.placename': 'Canada',
      'geo.position': '56.1304;-106.3468',
      'ICBM': '56.1304, -106.3468',
    },
  }
}

// Structured Data for Rich Results - Service Schema (LocalBusiness / ProfessionalService with Canada location)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://yourcanadianessays.com/essay-writing-services-canada",
  "name": "Canadian Essay Writing Service",
  "description": "Premium essay writing service for Canadian students. Expert help from PhD qualified writers across all Canadian universities. Specializing in essay writing services, paper writing service, and research paper writing service.",
  "url": "https://yourcanadianessays.com/essay-writing-services-canada",
  "logo": "https://yourcanadianessays.com/images/ca/logo.png",
  "image": "https://yourcanadianessays.com/images/ca/hero-canadian-essay-help.jpg",
  "priceRange": "$$",
  "telephone": "+1-416-123-4567",
  "email": "help@canadianessays.ca",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CA",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "postalCode": "M5V 2T6",
    "streetAddress": "123 Queen Street West"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "43.6477",
    "longitude": "-79.3845"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/canadianessayhelp",
    "https://www.instagram.com/canadianessays",
    "https://www.linkedin.com/company/canadian-essay-help",
    "https://twitter.com/canadianessays"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Academic Writing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Essay Writing Services",
          "description": "Professional essay writing help for Canadian students"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Paper Writing Service",
          "description": "Comprehensive paper writing assistance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Research Paper Writing Service",
          "description": "In-depth research paper writing support"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Editing Essay",
          "description": "Professional essay editing and proofreading"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "12543",
    "bestRating": "5",
    "worstRating": "1",
    "itemReviewed": {
      "@type": "Service",
      "name": "Canadian Essay Writing Service"
    }
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Emily Chen"
      },
      "reviewBody": "Best essay writing service in Canada! Got A+ for my University of Toronto assignment."
    }
  ]
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
      "item": "https://yourcanadianessays.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Essay Writing Services Canada",
      "item": "https://yourcanadianessays.com/essay-writing-services-canada"
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
      "name": "Is your essay writing service in Canada legit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our essay writing service is 100% legitimate and trusted by over 35,000 Canadian students. We provide original, high-quality academic content to help students understand complex topics and improve their writing skills. All work is for research and reference purposes only."
      }
    },
    {
      "@type": "Question",
      "name": "Can you write my essay for me today?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our essay writing service specializes in urgent orders with deadlines as tight as 3 hours. Simply submit your requirements, and we'll match you with a qualified paper writer who can complete your essay today."
      }
    },
    {
      "@type": "Question",
      "name": "Is the work plagiarism-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every paper we deliver is 100% original and plagiarism-free. We check all work with advanced plagiarism detection software (similar to Turnitin) and provide a free plagiarism report upon request. Our research paper writing service guarantees unique content tailored to your requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Who will be my paper writer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your paper will be written by a qualified expert with advanced degrees (Master's or PhD) from Canadian or international universities. Our writers specialize in various academic disciplines and are familiar with Canadian academic standards, including APA, MLA, Chicago, and Harvard formats."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help Canadian college & university students?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we work with students from all Canadian colleges and universities, including University of Toronto, UBC, McGill, York University, Western University, and many more. Our essay writing services are tailored to meet the specific requirements of Canadian academic institutions."
      }
    },
    {
      "@type": "Question",
      "name": "Is my information confidential?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We take your privacy seriously. All personal information and communication with our essay writing service is encrypted and strictly confidential. We never share your data with third parties, and your work remains completely anonymous."
      }
    }
  ]
}

// Canadian Universities Data from your public folder
const canadianUniversities = [
  { name: 'University of Toronto', logo: '/cauniversities/University of Toronto.png', alt: 'University of Toronto Logo' },
  { name: 'University of British Columbia (UBC)', logo: '/cauniversities/University of British Columbia (UBC).png', alt: 'UBC Logo' },
  { name: 'McGill University', logo: '/cauniversities/McGill University.png', alt: 'McGill University Logo' },
  { name: 'York University', logo: '/cauniversities/York University.png', alt: 'York University Logo' },
  { name: 'University of Alberta', logo: '/cauniversities/University of Alberta.png', alt: 'University of Alberta Logo' },
  { name: 'University of Ottawa', logo: '/cauniversities/University of Ottawa.png', alt: 'University of Ottawa Logo' },
  { name: 'Western University', logo: '/cauniversities/Western University.png', alt: 'Western University Logo' },
  { name: 'Queen\'s University', logo: '/cauniversities/Queen’s University.png', alt: 'Queen\'s University Logo' },
  { name: 'Concordia University', logo: '/cauniversities/Concordia University.png', alt: 'Concordia University Logo' },
  { name: 'Conestoga College', logo: '/cauniversities/Conestoga College.png', alt: 'Conestoga College Logo' },
  { name: 'Fanshawe College', logo: '/cauniversities/Fanshawe College.png', alt: 'Fanshawe College Logo' },
  { name: 'Seneca College', logo: '/cauniversities/Seneca College.png', alt: 'Seneca College Logo' },
  { name: 'Kwantlen Polytechnic University (KPU)', logo: '/cauniversities/Kwantlen Polytechnic University (KPU).png', alt: 'KPU Logo' },
  { name: 'Lambton College', logo: '/cauniversities/Lambton College.png', alt: 'Lambton College Logo' },
  { name: 'St. Clair College', logo: '/cauniversities/St. Clair College.png', alt: 'St. Clair College Logo' },
]

// Additional international universities for variety
const internationalUniversities = [
  { name: 'University of California', logo: '/cauniversities/University of California.png', alt: 'UC Logo' },
  { name: 'University of Illinois at Urbana-Champaign (UIUC)', logo: '/cauniversities/University of Illinois at Urbana-Champaign (UIUC).png', alt: 'UIUC Logo' },
  { name: 'Yale University', logo: '/cauniversities/Yale University.png', alt: 'Yale University Logo' },
]

// Combine all universities
const allUniversities = [...canadianUniversities, ...internationalUniversities]

// Canadian cities for location pages
const canadianCities = [
  { name: 'Toronto', slug: 'toronto', province: 'ON' },
  { name: 'Vancouver', slug: 'vancouver', province: 'BC' },
  { name: 'Calgary', slug: 'calgary', province: 'AB' },
  { name: 'Montreal', slug: 'montreal', province: 'QC' },
  { name: 'Brampton', slug: 'brampton', province: 'ON' },
  { name: 'Ottawa', slug: 'ottawa', province: 'ON' },
  { name: 'Edmonton', slug: 'edmonton', province: 'AB' },
  { name: 'Mississauga', slug: 'mississauga', province: 'ON' },
  { name: 'Winnipeg', slug: 'winnipeg', province: 'MB' },
  { name: 'Hamilton', slug: 'hamilton', province: 'ON' },
  { name: 'Quebec City', slug: 'quebec-city', province: 'QC' },
  { name: 'Halifax', slug: 'halifax', province: 'NS' },
]

// Subject areas popular in Canada
const canadianSubjects = [
  { name: 'Essay Writing Services', slug: 'essay-writing-service', icon: '📝' },
  { name: 'Paper Writing Service', slug: 'article-writing-services', icon: '📄' },
  { name: 'Research Paper Service', slug: 'research-paper-writing-service', icon: '🔬' },
  { name: 'Editing & Proofreading', slug: 'editing-essay', icon: '✏️' },
  { name: 'Article Writing Services', slug: 'article-writing-services', icon: '📰' },
  { name: 'Dissertation Help', slug: 'dissertation-writing-service', icon: '🎓' },
  { name: 'Case Study Help', slug: 'case-study-writing-service', icon: '📊' },
  { name: 'Coursework Help', slug: 'coursework-help', icon: '📚' },
]

// Main Page Component
export default function CanadianEssayServicesPage() {
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
        {/* Hero Section - Above the Fold */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroPattern}></div>
            <div className={styles.heroOverlay}></div>
          </div>
          
          <div className={styles.heroContent}>
            <div className={styles.container}>
              <div className={styles.heroGrid}>
                <div className={styles.heroText}>
                  <div className={styles.badge}>
                    <span className={styles.canadaFlag}>🇨🇦</span>
                    <span className={styles.badgeText}>Canada's #1 Essay Writing Service</span>
                  </div>
                  
                  <h1 className={styles.heroTitle}>
                    Professional Essay Writing Services <span className={styles.highlight}>in Canada</span>
                  </h1>
                  
                  <p className={styles.heroDescription}>
                    Trusted by 35,000+ Canadian students across all major universities. Get HD grades with our expert essay writing service. PhD qualified paper writers, 100% plagiarism-free, on-time delivery guaranteed. Pay in CAD with confidence.
                  </p>
                  
                  <div className={styles.heroStats}>
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>35K+</span>
                      <span className={styles.statLabel}>Happy Students</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>2500+</span>
                      <span className={styles.statLabel}>PhD Experts</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>4.9/5</span>
                      <span className={styles.statLabel}>Student Rating</span>
                    </div>
                  </div>
                  
                  <div className={styles.heroCta}>
                    <Link href="/contact" className={styles.primaryButton}>
                      Write My Essay for Me – Canada
                    </Link>
                  </div>
                  
                  <div className={styles.trustBadges}>
                    <div className={styles.trustItem}>
                      <span className={styles.trustIcon}>✓</span>
                      <span>Canadian Writers</span>
                    </div>
                    <div className={styles.trustItem}>
                      <span className={styles.trustIcon}>✓</span>
                      <span>Plagiarism Free</span>
                    </div>
                    <div className={styles.trustItem}>
                      <span className={styles.trustIcon}>✓</span>
                      <span>Money Back Guarantee</span>
                    </div>
                  </div>
                </div>
                
                <div className={styles.heroVisual}>
                  <div className={styles.calculatorWrapper}>
                    <Suspense fallback={<div className={styles.calculatorSkeleton}>Loading calculator...</div>}>
                      <PricingCalculator currency="CAD" />
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* University Logos Section - Social Proof */}
        <section className={styles.universities}>
          <div className={styles.container}>
            <p className={styles.universitiesTagline}>Trusted by students from Canada's leading universities</p>
            <div className={styles.universitiesMarquee}>
              <div className={styles.universitiesTrack}>
                {allUniversities.map((uni, index) => (
                  <div key={index} className={styles.universityLogo}>
                    <Image
                      src={uni.logo}
                      alt={uni.alt}
                      width={120}
                      height={60}
                      style={{ objectFit: 'contain' }}
                      className={styles.universityImage}
                    />
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {allUniversities.map((uni, index) => (
                  <div key={`dup-${index}`} className={styles.universityLogo}>
                    <Image
                      src={uni.logo}
                      alt={uni.alt}
                      width={120}
                      height={60}
                      style={{ objectFit: 'contain' }}
                      className={styles.universityImage}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className={styles.features}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Need a Trusted Essay Writing Service in Canada?
            </h2>
            <p className={styles.sectionSubtitle}>
              We understand the pressure Canadian students face – tight deadlines, complex topics, and the constant demand for high grades. That's where we come in.
            </p>
            <div className={styles.featuresGrid} style={{ gridTemplateColumns: '1fr', maxWidth: '800px', margin: '0 auto' }}>
              <div className={styles.featureCard} style={{ textAlign: 'center', padding: '40px' }}>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--ink2)' }}>
                  Whether you need <strong>essay writing services</strong> for a last-minute assignment or comprehensive <strong>research paper writing service</strong> for your final thesis, our team of Canadian PhD experts is here to help. We provide personalized <strong>writing help</strong> that meets Canadian academic standards, so you can say <strong>"write my essay for me"</strong> with confidence. From UBC to McGill, from York to UofT – thousands of Canadian students trust us to deliver plagiarism-free, well-researched papers that boost their grades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className={styles.features}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Why Choose Our Canada-Based Writing Service
            </h2>
            <p className={styles.sectionSubtitle}>
              What makes us the preferred choice for Canadian students
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🇨🇦</div>
                <h3 className={styles.featureTitle}>Writers Familiar with Canadian Universities</h3>
                <p className={styles.featureDescription}>
                  Our team includes graduates from top Canadian universities who understand the specific requirements of Canadian professors and academic programs.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📝</div>
                <h3 className={styles.featureTitle}>Native English Writers</h3>
                <p className={styles.featureDescription}>
                  All our writers are native English speakers with advanced degrees, ensuring flawless grammar, proper flow, and academic tone in every paper.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔍</div>
                <h3 className={styles.featureTitle}>Plagiarism-Free Guarantee</h3>
                <p className={styles.featureDescription}>
                  Every essay and research paper is written from scratch and checked with advanced plagiarism detection software. Free Turnitin report available.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⏱️</div>
                <h3 className={styles.featureTitle}>On-Time Delivery</h3>
                <p className={styles.featureDescription}>
                  We respect your deadlines. 98% of our orders are delivered before the due date, even with urgent 3-hour deadlines.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔄</div>
                <h3 className={styles.featureTitle}>Free Revisions</h3>
                <p className={styles.featureDescription}>
                  We offer unlimited free revisions until you're completely satisfied with your paper. Your satisfaction is our priority.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🌙</div>
                <h3 className={styles.featureTitle}>24/7 Student Support</h3>
                <p className={styles.featureDescription}>
                  Our Canadian-based support team is available around the clock to answer your questions and address your concerns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Calculator Anchor */}
        <div id="pricing-calculator" className={styles.calculatorAnchor}></div>

        {/* Services Offered Section */}
        <section className={styles.services}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Comprehensive Academic Writing Services
            </h2>
            <p className={styles.sectionSubtitle}>
              Expert help for every type of assignment
            </p>
            
            <div className={styles.servicesGrid}>
              <Link href="/essay-writing-service" className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Essay Writing Services in Canada</h3>
                <p className={styles.serviceDescription}>
                  Get professionally written essays tailored to Canadian academic standards. Whether you need argumentative, descriptive, or analytical essays, our experts deliver high-quality, well-researched content that impresses professors. Perfect for university and college students across Canada.
                </p>
                <span className={styles.servicePrice}>from $19.99 CAD</span>
              </Link>
              
              <Link href="/paper-writing-service" className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Paper Writing Service</h3>
                <p className={styles.serviceDescription}>
                  Comprehensive paper writing assistance for term papers, reaction papers, and position papers. Our paper writers follow your exact guidelines, incorporate required sources, and ensure proper formatting in APA, MLA, or Chicago style. Ideal for students needing reliable writing help.
                </p>
                <span className={styles.servicePrice}>from $22.50 CAD</span>
              </Link>
              
              <Link href="/research-paper-writing-service" className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Research Paper Writing Service</h3>
                <p className={styles.serviceDescription}>
                  In-depth research papers with proper methodology, literature review, and data analysis. Our PhD writers specialize in various disciplines and can handle complex research topics. Each paper includes credible sources, proper citations, and original insights.
                </p>
                <span className={styles.servicePrice}>from $27.99 CAD</span>
              </Link>
              
              <Link href="/article-writing-services" className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Article Writing Services (Academic Only)</h3>
                <p className={styles.serviceDescription}>
                  Professional article writing for academic journals, literature reviews, and critical analyses. Our service focuses exclusively on scholarly articles that meet publication standards. Perfect for graduate students and researchers needing writing help with academic articles.
                </p>
                <span className={styles.servicePrice}>from $29.99 CAD</span>
              </Link>
              
              <Link href="/editing-essay" className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Editing & Proofreading for Essays</h3>
                <p className={styles.serviceDescription}>
                  Already written your essay but need a second look? Our editing essay service polishes your work, fixing grammar errors, improving flow, and ensuring proper citation format. We help you elevate your draft to achieve higher grades.
                </p>
                <span className={styles.servicePrice}>from $12.99 CAD</span>
              </Link>
              
              <Link href="/urgent-essay-help" className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Urgent Essay Helper</h3>
                <p className={styles.serviceDescription}>
                  Need an essay helper right now? Our urgent service handles deadlines as tight as 3 hours. Whether it's a last-minute assignment or an emergency revision, our writers are ready to help you submit on time.
                </p>
                <span className={styles.servicePrice}>24/7 Availability</span>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className={styles.features}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              How It Works
            </h2>
            <p className={styles.sectionSubtitle}>
              Get your essay written in 6 simple steps
            </p>
            
            <div className={styles.featuresGrid} style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>1️⃣</div>
                <h3 className={styles.featureTitle}>Submit Your Assignment</h3>
                <p className={styles.featureDescription}>
                  Fill out our simple order form with your essay topic, requirements, deadline, and any additional materials. Tell us exactly what you need.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>2️⃣</div>
                <h3 className={styles.featureTitle}>Choose Deadline & Subject</h3>
                <p className={styles.featureDescription}>
                  Select your academic level, subject area, and preferred deadline. Get an instant price quote in CAD with no hidden fees.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>3️⃣</div>
                <h3 className={styles.featureTitle}>Get Matched with Expert Paper Writer</h3>
                <p className={styles.featureDescription}>
                  We match you with a qualified paper writer who specializes in your subject and has experience with Canadian academic standards.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>4️⃣</div>
                <h3 className={styles.featureTitle}>Receive Draft</h3>
                <p className={styles.featureDescription}>
                  Your writer completes the first draft and submits it through our secure platform. You'll be notified immediately.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>5️⃣</div>
                <h3 className={styles.featureTitle}>Request Revisions</h3>
                <p className={styles.featureDescription}>
                  Review the draft and request any changes. Our free revision policy ensures the final paper meets all your requirements.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>6️⃣</div>
                <h3 className={styles.featureTitle}>Download Final Paper</h3>
                <p className={styles.featureDescription}>
                  Once you're 100% satisfied, download your completed essay. You own all rights to the final product.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Quality Guarantees Section */}
        <section className={styles.services}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Trust & Quality Guarantees
            </h2>
            <p className={styles.sectionSubtitle}>
              Your success is protected by our comprehensive guarantees
            </p>
            
            <div className={styles.servicesGrid} style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>🔒 Confidentiality</h3>
                <p className={styles.serviceDescription}>
                  All your personal information and communication with our essay writing service is encrypted and strictly confidential. We never share your data with third parties.
                </p>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>✨ Original Content</h3>
                <p className={styles.serviceDescription}>
                  Every essay is written from scratch based on your requirements. We never resell or recycle papers. You get unique content every time.
                </p>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>✅ Turnitin-Safe</h3>
                <p className={styles.serviceDescription}>
                  All papers pass plagiarism checks and are safe to submit through Turnitin. We provide a free plagiarism report upon request.
                </p>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>💰 Refund Policy</h3>
                <p className={styles.serviceDescription}>
                  Your satisfaction is guaranteed. If we fail to deliver as promised, our money-back policy ensures you're fully protected.
                </p>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>⭐ Student Testimonials</h3>
                <p className={styles.serviceDescription}>
                  "The research paper writing service saved my semester! My UBC professor was impressed." – Michael T., UBC. "Best essay helper in Canada. Will definitely use again." – Sarah L., University of Toronto.
                </p>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>🏆 Quality Assured</h3>
                <p className={styles.serviceDescription}>
                  Our quality assurance team reviews every paper before delivery to ensure it meets our high standards and your requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing for Canadian Students Section */}
        <section className={styles.features}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Pricing for Canadian Students
            </h2>
            <p className={styles.sectionSubtitle}>
              Affordable rates in CAD without compromising quality
            </p>
            
            <div className={styles.featuresGrid} style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              <div className={styles.featureCard}>
                <h3 className={styles.featureTitle}>High School</h3>
                <p className={styles.featureDescription} style={{ fontSize: '2rem', fontWeight: 700, color: '#dd3333' }}>
                  $16.99
                </p>
                <p className={styles.featureDescription}>per page (275 words)</p>
                <p className={styles.featureDescription}>Perfect for college applications and high school assignments. Includes free outline and bibliography.</p>
              </div>
              
              <div className={styles.featureCard}>
                <h3 className={styles.featureTitle}>University</h3>
                <p className={styles.featureDescription} style={{ fontSize: '2rem', fontWeight: 700, color: '#dd3333' }}>
                  $22.99
                </p>
                <p className={styles.featureDescription}>per page (275 words)</p>
                <p className={styles.featureDescription}>Ideal for undergraduate essays and papers. Includes in-depth research and proper citations.</p>
              </div>
              
              <div className={styles.featureCard}>
                <h3 className={styles.featureTitle}>Master's / PhD</h3>
                <p className={styles.featureDescription} style={{ fontSize: '2rem', fontWeight: 700, color: '#dd3333' }}>
                  $29.99
                </p>
                <p className={styles.featureDescription}>per page (275 words)</p>
                <p className={styles.featureDescription}>Advanced research, methodology, and analysis by subject-matter experts with graduate degrees.</p>
              </div>
            </div>
            
            <p style={{ textAlign: 'center', marginTop: '40px', color: 'var(--muted)', fontSize: '0.9rem' }}>
              * Discounts available for first-time customers and bulk orders. We match competitor prices for similar quality.
            </p>
          </div>
        </section>


        {/* Subject Areas */}
        <section className={styles.subjects}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Our Academic Writing Services
            </h2>
            <p className={styles.sectionSubtitle}>
              Expert help for every subject and paper type
            </p>
            
            <div className={styles.subjectsGrid}>
              {canadianSubjects.map((subject) => (
                <Link 
                  href={`/${subject.slug}`} 
                  key={subject.slug}
                  className={styles.subjectCard}
                >
                  <span className={styles.subjectIcon}>{subject.icon}</span>
                  <h3 className={styles.subjectTitle}>{subject.name}</h3>
                  <span className={styles.subjectLink}>Learn More →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className={styles.testimonials}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              What Canadian Students Say
            </h2>
            <p className={styles.sectionSubtitle}>
              Join 35,000+ happy students who improved their grades
            </p>
            
            <div className={styles.testimonialsGrid}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "I was struggling with my political science essay at UofT. The essay writing service connected me with an expert who understood Canadian politics perfectly. Got an A-!"
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Jennifer Wong</div>
                  <div className={styles.authorUni}>University of Toronto</div>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "Needed a research paper for my UBC psychology class. The paper writer followed APA 7th edition perfectly and included recent Canadian studies. Highly recommend this writing help!"
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>David Chen</div>
                  <div className={styles.authorUni}>University of British Columbia</div>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "McGill's requirements are tough, but this essay helper delivered beyond expectations. The paper was well-researched, original, and arrived before my deadline. Will use again!"
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Marie Tremblay</div>
                  <div className={styles.authorUni}>McGill University</div>
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
              Everything you need to know about our Canadian essay writing service
            </p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Is your essay writing service in Canada legit?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, our essay writing service is 100% legitimate and trusted by over 35,000 Canadian students. We provide original, high-quality academic content to help students understand complex topics and improve their writing skills. All work is for research and reference purposes only.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you write my essay for me today?
                </h3>
                <p className={styles.faqAnswer}>
                  Absolutely! Our essay writing service specializes in urgent orders with deadlines as tight as 3 hours. Simply submit your requirements, and we'll match you with a qualified paper writer who can complete your essay today.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Is the work plagiarism-free?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, every paper we deliver is 100% original and plagiarism-free. We check all work with advanced plagiarism detection software (similar to Turnitin) and provide a free plagiarism report upon request. Our research paper writing service guarantees unique content tailored to your requirements.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Who will be my paper writer?
                </h3>
                <p className={styles.faqAnswer}>
                  Your paper will be written by a qualified expert with advanced degrees (Master's or PhD) from Canadian or international universities. Our writers specialize in various academic disciplines and are familiar with Canadian academic standards, including APA, MLA, Chicago, and Harvard formats.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you help Canadian college & university students?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we work with students from all Canadian colleges and universities, including University of Toronto, UBC, McGill, York University, Western University, and many more. Our essay writing services are tailored to meet the specific requirements of Canadian academic institutions.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Is my information confidential?
                </h3>
                <p className={styles.faqAnswer}>
                  Absolutely. We take your privacy seriously. All personal information and communication with our essay writing service is encrypted and strictly confidential. We never share your data with third parties, and your work remains completely anonymous.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Ready to Ace Your Canadian Essay?
              </h2>
              <p className={styles.ctaText}>
                Join 35,000+ Canadian students who trust us with their grades. Get HD quality essays from PhD experts. Pay in CAD securely.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Write My Essay for Me (Canada)
                </Link>
                <Link href="/contact" className={styles.ctaSecondary}>
                  Get Essay Help Now
                </Link>
              </div>
              <div className={styles.ctaTrust}>
                <span>100% Money Back Guarantee</span>
                <span>Free Plagiarism Report</span>
                <span>Free Revisions</span>
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