import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import PricingCalculator from '@/components/PricingCalculator'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// Dynamic metadata for US market
export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourassignmentservice.com'
  
  return {
    metadataBase: new URL(baseUrl),
    title: 'Best Assignment Writing Service USA | Essay, Dissertation & Research Paper Help 🇺🇸',
    description: '⭐ #1 Assignment Writing Service in USA. 5000+ US PhD experts. 100% plagiarism-free, on-time delivery. Get A+ grades with our US-based assignment help. Available 24/7!',
    keywords: [
      'dissertation writing services',
      'research paper writing services',
      'essay writing services',
      'essay writing service',
      'writing assistance',
      'write me an essay',
      'write my paper',
      'essay help',
      'assignment writing service',
      'best assignment writing service',
      'professional assignment writing service',
      'cheap assignment writing service',
      'assignment writer',
      'help with assignment writing',
      'write my assignment',
      'help me assignment',
      'online coursework help',
      'coursework writing service',
      'write my coursework',
      'case study writing service',
      'nursing assignment writing help',
      'mba assignment writing services',
      'law assignment writing',
      'assignment writing for college students',
      'assignment writing format'
    ],
    authors: [{ name: 'US Assignment Experts' }],
    creator: 'American Assignment Help',
    publisher: 'US Assignment Services',
    formatDetection: {
      email: false,
      address: true,
      telephone: true,
    },
    alternates: {
      canonical: '/countries/us',
      languages: {
        'en-US': '/countries/us',
      },
    },
    openGraph: {
      title: 'Best Assignment Writing Service USA | Expert Assignment Help 🇺🇸',
      description: '🏆 America\'s Most Trusted Assignment Writing Service. 5000+ US PhD experts covering all American universities. Get your free quote today!',
      url: '/countries/us',
      siteName: 'US Assignment Help',
      images: [
        {
          url: '/images/us/og-us-assignment-help.jpg',
          width: 1200,
          height: 630,
          alt: 'US Assignment Writing Service - Expert Help',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Best Assignment Writing Service USA 🇺🇸',
      description: '🏆 #1 Assignment Help in USA. Trusted by 50,000+ American students. Get A+ grades now!',
      images: ['/images/us/twitter-us-assignment-help.jpg'],
      creator: '@usassignmenthelp',
      site: '@usassignmenthelp',
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
      google: 'your-google-verification-code-us',
      other: {
        'facebook-domain-verification': ['your-facebook-verification-code-us'],
      },
    },
    category: 'education',
    classification: 'Academic Writing Services',
    other: {
      'geo.region': 'US',
      'geo.placename': 'United States',
      'geo.position': '39.8283;-98.5795',
      'ICBM': '39.8283, -98.5795',
    },
  }
}

// Structured Data for Rich Results
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://yourassignmentservice.com/countries/us",
  "name": "US Assignment Writing Service",
  "description": "Premium assignment writing service for American students. Expert help from PhD qualified writers across all US universities including Ivy League institutions.",
  "url": "https://yourassignmentservice.com/countries/us",
  "logo": "https://yourassignmentservice.com/images/us/logo.png",
  "image": "https://yourassignmentservice.com/images/us/hero-us-assignment-help.jpg",
  "priceRange": "$$",
  "telephone": "+1-212-123-4567",
  "email": "help@usassignments.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10001",
    "streetAddress": "350 Fifth Avenue"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.7489",
    "longitude": "-73.9857"
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
    "https://www.facebook.com/usassignmenthelp",
    "https://www.instagram.com/usassignmenthelp",
    "https://www.linkedin.com/company/us-assignment-help",
    "https://twitter.com/usassignmenthelp"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Assignment Writing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dissertation Writing Services",
          "description": "PhD-level dissertation writing assistance for American doctoral students"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Research Paper Writing Services",
          "description": "Comprehensive research paper help following US academic standards"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Essay Writing Services",
          "description": "Professional essay writing help for American college students"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "18427",
    "bestRating": "5",
    "worstRating": "1",
    "itemReviewed": {
      "@type": "Service",
      "name": "US Assignment Writing Service"
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
        "name": "Jessica Williams"
      },
      "reviewBody": "Best dissertation writing service! Got A+ on my Harvard PhD dissertation."
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
      "item": "https://yourassignmentservice.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "USA",
      "item": "https://yourassignmentservice.com/countries/us"
    }
  ]
}

// FAQ structured data
const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is your assignment writing service legit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We've been helping US students for over a decade. We're completely legitimate — we provide reference materials and model answers that help students understand complex topics and improve their own writing. Thousands of 5-star reviews from students at Harvard, Stanford, MIT, and other top universities speak for themselves."
      }
    },
    {
      "@type": "Question",
      "name": "Can you write my essay for me today?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer urgent delivery options as fast as 3 hours. Simply place your order, select your deadline, and we'll match you with a writer who can start immediately. Our team works 24/7 across all US time zones to ensure you never miss a deadline."
      }
    },
    {
      "@type": "Question",
      "name": "Is it plagiarism-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "100%. Every assignment is written from scratch and checked with Turnitin and Copyscape before delivery. You'll receive a free plagiarism report with your order. We guarantee original work or your money back."
      }
    },
    {
      "@type": "Question",
      "name": "Who will write my paper?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your paper will be written by a PhD or Master's level expert in your specific subject area. All our writers are native English speakers with degrees from accredited US universities. You can review their qualifications before they start working on your assignment."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help with nursing/MBA/law assignments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We have specialized writers for nursing (BSN, MSN, DNP), MBA (all concentrations), and law (JD, LLM) assignments. These writers understand the specific requirements, citation styles (APA, Bluebook), and professional standards of their fields."
      }
    },
    {
      "@type": "Question",
      "name": "Is this confidential?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your privacy is our priority. All communications are encrypted, and we never share your personal information. Your identity remains completely anonymous. We don't advertise your name or university anywhere. What happens between you and your writer stays confidential."
      }
    }
  ]
}

// US Universities Data from your provided images
const usUniversities = [
  { name: 'Harvard University', logo: '/us universities/Harvard University.png', alt: 'Harvard University Logo' },
  { name: 'MIT', logo: '/us universities/MIT.png', alt: 'MIT Logo' },
  { name: 'Stanford University', logo: '/us universities/Stanford University.png', alt: 'Stanford University Logo' },
  { name: 'Yale University', logo: '/us universities/Yale University.png', alt: 'Yale University Logo' },
  { name: 'Columbia University', logo: '/us universities/columbia-university.png', alt: 'Columbia University Logo' },
  { name: 'University of Pennsylvania', logo: '/us universities/University of Pennsylvania.png', alt: 'UPenn Logo' },
  { name: 'Cornell University', logo: '/us universities/Cornell University.png', alt: 'Cornell University Logo' },
  { name: 'University of California', logo: '/us universities/University of California.png', alt: 'UC System Logo' },
  { name: 'University of Southern California', logo: '/us universities/University of Southern California (USC).png', alt: 'USC Logo' },
  { name: 'NYU', logo: '/us universities/NYU.png', alt: 'NYU Logo' },
  { name: 'Boston University', logo: '/us universities/Boston University.png', alt: 'Boston University Logo' },
  { name: 'Carnegie Mellon University', logo: '/us universities/Carnegie_Mellon_University.png', alt: 'Carnegie Mellon Logo' },
  { name: 'Northeastern University', logo: '/us universities/Northeastern University.png', alt: 'Northeastern University Logo' },
  { name: 'Purdue University', logo: '/us universities/Purdue University-West Lafayette.png', alt: 'Purdue University Logo' },
  { name: 'UIUC', logo: '/us universities/UIUC.png', alt: 'UIUC Logo' },
]

// US cities for location pages
const usCities = [
  { name: 'New York', slug: 'new-york', state: 'NY' },
  { name: 'Los Angeles', slug: 'los-angeles', state: 'CA' },
  { name: 'Chicago', slug: 'chicago', state: 'IL' },
  { name: 'Houston', slug: 'houston', state: 'TX' },
  { name: 'Phoenix', slug: 'phoenix', state: 'AZ' },
  { name: 'Philadelphia', slug: 'philadelphia', state: 'PA' },
  { name: 'San Antonio', slug: 'san-antonio', state: 'TX' },
  { name: 'San Diego', slug: 'san-diego', state: 'CA' },
  { name: 'Dallas', slug: 'dallas', state: 'TX' },
  { name: 'San Jose', slug: 'san-jose', state: 'CA' },
  { name: 'Boston', slug: 'boston', state: 'MA' },
  { name: 'Washington DC', slug: 'washington-dc', state: 'DC' },
]

// Subject areas popular in the US
const usSubjects = [
  { name: 'Nursing Assignment Help', slug: 'nursing', icon: '🏥' },
  { name: 'MBA Assignment Help', slug: 'mba', icon: '💼' },
  { name: 'Law Assignment Help', slug: 'law', icon: '⚖️' },
  { name: 'Engineering Assignment Help', slug: 'engineering', icon: '🔧' },
  { name: 'Computer Science Help', slug: 'computer-science', icon: '💻' },
  { name: 'Medical Sciences Help', slug: 'medical', icon: '🔬' },
  { name: 'Accounting Help', slug: 'accounting', icon: '📊' },
  { name: 'Psychology Help', slug: 'psychology', icon: '🧠' },
]

// Main Page Component
export default function USHomePage() {
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
                    <span className={styles.usFlag}>🇺🇸</span>
                    <span className={styles.badgeText}>America's #1 Assignment Help Service</span>
                  </div>
                  
                  <h1 className={styles.heroTitle}>
                    Professional Assignment Writing Service <span className={styles.highlight}>for US Students</span>
                  </h1>
                  
                  <p className={styles.heroDescription}>
                    Need someone to <strong>write my paper</strong> or <strong>write me an essay</strong>? Get expert <strong>writing assistance</strong> from America's most trusted <strong>essay writing service</strong>. Our <strong>dissertation writing services</strong> and <strong>research paper writing services</strong> help thousands of US students achieve A+ grades every day.
                  </p>
                  
                  <div className={styles.heroStats}>
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>50K+</span>
                      <span className={styles.statLabel}>US Students</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>5000+</span>
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
                      Write My Assignment Now
                    </Link>
                    <a href="tel:+918307449029" className={styles.phoneButton}>
                      <span className={styles.phoneIcon}>📞</span>
                      <span className={styles.phoneText}>Call Now: +91 830 744 9029</span>
                    </a>
                  </div>
                </div>
                
                <div className={styles.heroVisual}>
                  <div className={styles.calculatorWrapper}>
                    <Suspense fallback={<div className={styles.calculatorSkeleton}>Loading price calculator...</div>}>
                      <PricingCalculator />
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* University Logos Section - Social Proof with US Universities */}
        <section className={styles.universities}>
          <div className={styles.container}>
            <p className={styles.universitiesTagline}>Trusted by students from America's leading universities</p>
            <div className={styles.universitiesMarquee}>
              <div className={styles.universitiesTrack}>
                {usUniversities.map((uni, index) => (
                  <div key={index} className={styles.universityLogo}>
                    <Image
                      src={uni.logo}
                      alt={uni.alt}
                      width={120}
                      height={60}
                      style={{ objectFit: 'contain' }}
                      className={styles.universityImage}
                      unoptimized={true}
                    />
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {usUniversities.map((uni, index) => (
                  <div key={`dup-${index}`} className={styles.universityLogo}>
                    <Image
                      src={uni.logo}
                      alt={uni.alt}
                      width={120}
                      height={60}
                      style={{ objectFit: 'contain' }}
                      className={styles.universityImage}
                      unoptimized={true}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className={styles.introduction}>
          <div className={styles.container}>
            <div className={styles.introContent}>
              <h2 className={styles.sectionTitle}>America's Most Trusted <span className={styles.highlight}>Assignment Writing Service</span></h2>
              <p className={styles.introText}>
                Are you burning the midnight oil, struggling with complex assignments, and thinking "I wish someone could <strong>write my paper</strong> or <strong>write me an essay</strong>"? You're not alone. Thousands of US college students face the same challenge every semester. Between part-time jobs, extracurricular activities, and maintaining a social life, finding time to craft perfect <strong>research papers</strong>, <strong>dissertations</strong>, and <strong>essays</strong> feels impossible.
              </p>
              <p className={styles.introText}>
                That's where we come in. As America's premier <strong>assignment writing service</strong>, we connect you with PhD-qualified writers from top US universities who provide the <strong>essay help</strong> you need. Whether you're looking for <strong>dissertation writing services</strong>, <strong>research paper writing services</strong>, or just some quick <strong>writing assistance</strong>, our team delivers plagiarism-free, meticulously researched work that meets the highest academic standards.
              </p>
              <div className={styles.introCta}>
                <Link href="/contact" className={styles.secondaryButton}>
                  Get Essay Help Today →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Detailed */}
        <section className={styles.servicesDetailed}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Comprehensive Academic Writing Services</h2>
            <p className={styles.sectionSubtitle}>Expert help for every type of assignment, from high school to PhD</p>
            
            <div className={styles.servicesGridDetailed}>
              {/* Essay Writing Services */}
              <div className={styles.serviceCardDetailed} id="essay-writing">
                <div className={styles.serviceIcon}>📝</div>
                <h3 className={styles.serviceTitleDetailed}>Essay Writing Services</h3>
                <p className={styles.serviceDescriptionDetailed}>
                  Need a compelling argumentative essay, a reflective personal statement, or a analytical literary analysis? Our <strong>essay writing services</strong> cover all types and formats. Each essay is crafted from scratch, follows your specific guidelines, and adheres to APA, MLA, or Chicago style. Whether it's a 500-word college application essay or a 5000-word graduate-level analysis, we deliver excellence every time. <Link href="/essay-writing-service" className={styles.internalLink}>Learn more about our essay writing services →</Link>
                </p>
              </div>

              {/* Dissertation Writing Services */}
              <div className={styles.serviceCardDetailed} id="dissertation-writing">
                <div className={styles.serviceIcon}>🎓</div>
                <h3 className={styles.serviceTitleDetailed}>Dissertation Writing Services</h3>
                <p className={styles.serviceDescriptionDetailed}>
                  Your dissertation defines your academic career. Don't leave it to chance. Our <strong>dissertation writing services</strong> pair you with PhD experts who've successfully defended their own dissertations at top US universities. From proposal to literature review, methodology to discussion, and conclusion to defense preparation, we guide you through every chapter. We understand IRB requirements, statistical analysis, and what your committee expects. <Link href="/dissertation-writing-service" className={styles.internalLink}>Explore our dissertation writing services →</Link>
                </p>
              </div>

              {/* Research Paper Writing Services */}
              <div className={styles.serviceCardDetailed} id="research-paper">
                <div className={styles.serviceIcon}>🔬</div>
                <h3 className={styles.serviceTitleDetailed}>Research Paper Writing Services</h3>
                <p className={styles.serviceDescriptionDetailed}>
                  Research papers require critical thinking, credible sources, and proper structure. Our <strong>research paper writing services</strong> deliver all three. We help you develop strong thesis statements, find peer-reviewed sources through academic databases, and present findings coherently. Whether it's a term paper, capstone project, or journal article, our writers ensure your work stands out. <Link href="/research-paper-writing-service" className={styles.internalLink}>Check our research paper writing services →</Link>
                </p>
              </div>

              {/* Coursework Writing Services */}
              <div className={styles.serviceCardDetailed} id="coursework">
                <div className={styles.serviceIcon}>📚</div>
                <h3 className={styles.serviceTitleDetailed}>Coursework Writing Services</h3>
                <p className={styles.serviceDescriptionDetailed}>
                  Juggling multiple courses? Our <strong>online coursework help</strong> and <strong>coursework writing service</strong> ensures you never miss a deadline. We handle everything from weekly discussion posts and response papers to lab reports and presentations. Get consistent, high-quality work across all your classes while you focus on what matters most. <Link href="/coursework-help" className={styles.internalLink}>Get online coursework help now →</Link>
                </p>
              </div>

              {/* Case Study Writing Service */}
              <div className={styles.serviceCardDetailed} id="case-study">
                <div className={styles.serviceIcon}>📊</div>
                <h3 className={styles.serviceTitleDetailed}>Case Study Writing Service</h3>
                <p className={styles.serviceDescriptionDetailed}>
                  Business, psychology, nursing, or law case studies require specific analytical frameworks. Our <strong>case study writing service</strong> delivers comprehensive analyses that apply relevant theories, examine multiple perspectives, and provide actionable recommendations. We follow your discipline's specific case study format and citation style. <Link href="/case-study-writing-service" className={styles.internalLink}>Try our case study writing service →</Link>
                </p>
              </div>

              {/* Nursing Assignment Help */}
              <div className={styles.serviceCardDetailed} id="nursing">
                <div className={styles.serviceIcon}>🏥</div>
                <h3 className={styles.serviceTitleDetailed}>Nursing Assignment Help</h3>
                <p className={styles.serviceDescriptionDetailed}>
                  From care plans and reflective journals to PICOT questions and systematic reviews, our <strong>nursing assignment writing help</strong> covers it all. Our nursing writers hold BSN, MSN, and DNP degrees and understand clinical guidelines, nursing theories, and evidence-based practice requirements. We follow APA 7th edition and ensure your work meets nursing program standards. 
                  <Link href="/nursing-assignment-writing-service" className={styles.internalLink}>Get nursing assignment help →</Link>
                </p>
              </div>

              {/* MBA Assignment Help */}
              <div className={styles.serviceCardDetailed} id="mba">
                <div className={styles.serviceIcon}>💼</div>
                <h3 className={styles.serviceTitleDetailed}>MBA Assignment Help</h3>
                <p className={styles.serviceDescriptionDetailed}>
                  Business school demands practical application of theoretical concepts. Our <strong>mba assignment writing services</strong> cover marketing plans, financial analyses, strategic management papers, organizational behavior case studies, and more. Our MBA-level writers bring real-world business experience to your assignments, helping you bridge theory and practice. <Link href="/mba-assignment-writing-service" className={styles.internalLink}>Explore MBA assignment help →</Link>
                </p>
              </div>

              {/* Law Assignment Help */}
              <div className={styles.serviceCardDetailed} id="law">
                <div className={styles.serviceIcon}>⚖️</div>
                <h3 className={styles.serviceTitleDetailed}>Law Assignment Help</h3>
                <p className={styles.serviceDescriptionDetailed}>
                  Legal writing requires precision, proper citation (Bluebook), and sound reasoning. Our <strong>law assignment writing</strong> experts include JD holders and practicing attorneys who understand case briefs, memoranda of law, legal research papers, and appellate briefs. We ensure your arguments are logically structured and well-supported by legal precedent. <Link href="/law-assignment-writing-service" className={styles.internalLink}>Get law assignment writing help →</Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className={styles.whyChooseUs}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Why Thousands of US Students Choose Us</h2>
            <p className={styles.sectionSubtitle}>We're not just another writing service — we're your academic partners</p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>👨‍🎓</div>
                <h3 className={styles.featureTitle}>Human Expert Writers</h3>
                <p className={styles.featureDescription}>
                  No AI-generated content. Every assignment is written by a qualified human expert with an advanced degree from a US university. Our rigorous hiring process ensures only the top 2% of applicants make it through.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔍</div>
                <h3 className={styles.featureTitle}>Plagiarism-Free Guarantee</h3>
                <p className={styles.featureDescription}>
                  Every paper is scanned through Turnitin and Copyscape before delivery. You'll receive a free plagiarism report with your order. We guarantee 100% original content tailored to your requirements.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔄</div>
                <h3 className={styles.featureTitle}>Unlimited Free Revisions</h3>
                <p className={styles.featureDescription}>
                  Not satisfied with something? Your writer will revise your paper as many times as needed until it meets your expectations — at no additional cost. Your satisfaction is our priority.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⏰</div>
                <h3 className={styles.featureTitle}>On-Time Delivery, Every Time</h3>
                <p className={styles.featureDescription}>
                  We respect your deadlines. 98.7% of our orders are delivered before the deadline. Need it in 24 hours? 12 hours? 6 hours? We've got you covered with our urgent delivery options.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>💰</div>
                <h3 className={styles.featureTitle}>Affordable, Transparent Pricing</h3>
                <p className={styles.featureDescription}>
                  Quality shouldn't break the bank. Our prices start at just $15/page. No hidden fees, no upsells. What you see is what you pay. We're a <strong>cheap assignment writing service</strong> that never compromises on quality.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔒</div>
                <h3 className={styles.featureTitle}>100% Confidentiality</h3>
                <p className={styles.featureDescription}>
                  Your privacy matters. All communications and transactions are encrypted. We never share your personal information with third parties. Your identity remains completely anonymous.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🌙</div>
                <h3 className={styles.featureTitle}>24/7 US-Based Support</h3>
                <p className={styles.featureDescription}>
                  Need help at 3 AM before your 9 AM deadline? Our customer support team is available 24/7 via live chat, phone, and email. Real humans, not chatbots, ready to assist you.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📋</div>
                <h3 className={styles.featureTitle}>Free Title & References</h3>
                <p className={styles.featureDescription}>
                  Unlike other services that charge extra for title pages and bibliographies, we include them for free. Every paper comes with a perfectly formatted reference list in your required citation style.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className={styles.howItWorks}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>How Our Assignment Writing Service Works</h2>
            <p className={styles.sectionSubtitle}>Get expert help in just a few simple steps</p>
            
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepIcon}>📝</div>
                <h3 className={styles.stepTitle}>Place Your Order</h3>
                <p className={styles.stepDescription}>
                  Fill out our simple order form with your assignment details: topic, length, deadline, citation style, and any specific instructions or materials.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepIcon}>📎</div>
                <h3 className={styles.stepTitle}>Upload Assignment Details</h3>
                <p className={styles.stepDescription}>
                  Upload your syllabus, grading rubric, lecture notes, or any reference materials. The more information you provide, the better your writer can meet your professor's expectations.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepIcon}>🤝</div>
                <h3 className={styles.stepTitle}>Get Matched with Expert Writer</h3>
                <p className={styles.stepDescription}>
                  We match you with a PhD-qualified writer who specializes in your subject area. You can review their profile, qualifications, and ratings before they start working.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepIcon}>📄</div>
                <h3 className={styles.stepTitle}>Receive Draft</h3>
                <p className={styles.stepDescription}>
                  Your writer begins researching and writing immediately. You'll receive progress updates and can communicate directly with your writer throughout the process.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>5</div>
                <div className={styles.stepIcon}>🔄</div>
                <h3 className={styles.stepTitle}>Request Revisions</h3>
                <p className={styles.stepDescription}>
                  Review the completed assignment. If anything needs adjustment, simply request revisions. Your writer will make changes until you're completely satisfied.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>6</div>
                <div className={styles.stepIcon}>✅</div>
                <h3 className={styles.stepTitle}>Download Final Work</h3>
                <p className={styles.stepDescription}>
                  Once you're happy with the final paper, download it along with your free plagiarism report. Submit with confidence and watch your grades improve.
                </p>
              </div>
            </div>
            
            <div className={styles.stepsCta}>
              <Link href="/contact" className={styles.primaryButton}>
                Start Your Order Now
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Signals Section */}
        <section className={styles.trustSignals}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Trusted by Students Across America</h2>
            <p className={styles.sectionSubtitle}>Join 50,000+ satisfied students who've improved their grades with our help</p>
            
            <div className={styles.testimonialsGrid}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "I was struggling with my dissertation proposal and needed urgent help. The <strong>dissertation writing services</strong> here are exceptional. My writer had a PhD from Columbia and guided me through the entire IRB process. Defended successfully last week!"
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Shaurya K.</div>
                  <div className={styles.authorUni}>Columbia University - PhD Candidate</div>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "I needed a 20-page research paper on neuroplasticity in 48 hours. I thought it was impossible, but their <strong>research paper writing services</strong> delivered 6 hours early! The paper was well-researched with 30+ recent sources. Got an A!"
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Mohit Malik</div>
                  <div className={styles.authorUni}>Stanford University - Neuroscience</div>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "As an international student, I often worried about my writing. I asked them to <strong>write my paper</strong> for a political science class. Not only was the grammar perfect, but the arguments were nuanced and well-supported. Best decision I made all semester."
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Priya D.</div>
                  <div className={styles.authorUni}>NYU - Political Science</div>
                </div>
              </div>
            </div>
            
            <div className={styles.trustGuarantees}>
              <div className={styles.guaranteeItem}>
                <div className={styles.guaranteeIcon}>🔒</div>
                <h4 className={styles.guaranteeTitle}>Secure Payments</h4>
                <p className={styles.guaranteeText}>256-bit SSL encryption. Your payment info is safe with us.</p>
              </div>
              
              <div className={styles.guaranteeItem}>
                <div className={styles.guaranteeIcon}>💯</div>
                <h4 className={styles.guaranteeTitle}>Money-Back Guarantee</h4>
                <p className={styles.guaranteeText}>Full refund if work doesn't meet your requirements.</p>
              </div>
              
              <div className={styles.guaranteeItem}>
                <div className={styles.guaranteeIcon}>🎓</div>
                <h4 className={styles.guaranteeTitle}>University-Level Writers</h4>
                <p className={styles.guaranteeText}>All writers hold degrees from accredited US institutions.</p>
              </div>
              
              <div className={styles.guaranteeItem}>
                <div className={styles.guaranteeIcon}>📋</div>
                <h4 className={styles.guaranteeTitle}>Free Plagiarism Report</h4>
                <p className={styles.guaranteeText}>Verify originality with your Turnitin report.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & Value Section */}
        <section className={styles.pricing}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Transparent Pricing, Exceptional Value</h2>
            <p className={styles.sectionSubtitle}>Quality <strong>cheap assignment writing service</strong> doesn't mean compromising on quality</p>
            
            <div className={styles.pricingGrid}>
              <div className={styles.pricingCard}>
                <div className={styles.pricingHeader}>
                  <h3 className={styles.pricingLevel}>High School</h3>
                  <div className={styles.pricingPrice}>$15<span className={styles.pricingPeriod}>/page</span></div>
                </div>
                <ul className={styles.pricingFeatures}>
                  <li>✓ High school-level writing</li>
                  <li>✓ 3-hour delivery available</li>
                  <li>✓ Free plagiarism report</li>
                  <li>✓ Free revisions</li>
                  <li>✓ Any citation style</li>
                </ul>
              </div>
              
              <div className={styles.pricingCard}>
                <div className={styles.pricingHeader}>
                  <h3 className={styles.pricingLevel}>College/Undergraduate</h3>
                  <div className={styles.pricingPrice}>$18<span className={styles.pricingPeriod}>/page</span></div>
                </div>
                <ul className={styles.pricingFeatures}>
                  <li>✓ College-level analysis</li>
                  <li>✓ Advanced research</li>
                  <li>✓ Critical thinking focus</li>
                  <li>✓ Professor-approved structure</li>
                  <li>✓ Free revisions</li>
                </ul>
              </div>
              
              <div className={styles.pricingCard}>
                <div className={styles.pricingHeader}>
                  <h3 className={styles.pricingLevel}>University</h3>
                  <div className={styles.pricingPrice}>$22<span className={styles.pricingPeriod}>/page</span></div>
                </div>
                <ul className={styles.pricingFeatures}>
                  <li>✓ Upper-division expertise</li>
                  <li>✓ Scholarly sources</li>
                  <li>✓ Theoretical frameworks</li>
                  <li>✓ Advanced methodology</li>
                  <li>✓ Free revisions</li>
                </ul>
              </div>
              
              <div className={styles.pricingCard}>
                <div className={styles.pricingHeader}>
                  <h3 className={styles.pricingLevel}>Master's/PhD</h3>
                  <div className={styles.pricingPrice}>$25+<span className={styles.pricingPeriod}>/page</span></div>
                </div>
                <ul className={styles.pricingFeatures}>
                  <li>✓ PhD-level expertise</li>
                  <li>✓ Original research</li>
                  <li>✓ Advanced statistics</li>
                  <li>✓ Dissertation formatting</li>
                  <li>✓ Unlimited revisions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Subject Areas - US */}
        <section className={styles.subjects}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Subject-Specific Assignment Help</h2>
            <p className={styles.sectionSubtitle}>Expert writers for every discipline across US universities</p>
            
            <div className={styles.subjectsGrid}>
              {usSubjects.map((subject) => (
                <Link 
                  href={`/${subject.slug}-assignment-writing-service`} 
                  key={subject.slug}
                  className={styles.subjectCard}
                >
                  <span className={styles.subjectIcon}>{subject.icon}</span>
                  <h3 className={styles.subjectTitle}>{subject.name}</h3>
                  <span className={styles.subjectLink}>Get Help →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>



        {/* FAQ Section */}
        <section className={styles.faq}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.sectionSubtitle}>Everything you need to know about our US assignment writing service</p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Is your assignment writing service legit?</h3>
                <p className={styles.faqAnswer}>
                  Absolutely. We've been helping US students for over a decade. We're completely legitimate — we provide reference materials and model answers that help students understand complex topics and improve their own writing. Thousands of 5-star reviews from students at Harvard, Stanford, MIT, and other top universities speak for themselves.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can you write my essay for me today?</h3>
                <p className={styles.faqAnswer}>
                  Yes! We offer urgent delivery options as fast as 3 hours. Simply place your order, select your deadline, and we'll match you with a writer who can start immediately. Our team works 24/7 across all US time zones to ensure you never miss a deadline.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Is it plagiarism-free?</h3>
                <p className={styles.faqAnswer}>
                  100%. Every assignment is written from scratch and checked with Turnitin and Copyscape before delivery. You'll receive a free plagiarism report with your order. We guarantee original work or your money back.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Who will write my paper?</h3>
                <p className={styles.faqAnswer}>
                  Your paper will be written by a PhD or Master's level expert in your specific subject area. All our writers are native English speakers with degrees from accredited US universities. You can review their qualifications before they start working on your assignment.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do you help with nursing/MBA/law assignments?</h3>
                <p className={styles.faqAnswer}>
                  Yes! We have specialized writers for nursing (BSN, MSN, DNP), MBA (all concentrations), and law (JD, LLM) assignments. These writers understand the specific requirements, citation styles (APA, Bluebook), and professional standards of their fields.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Is this confidential?</h3>
                <p className={styles.faqAnswer}>
                  Your privacy is our priority. All communications are encrypted, and we never share your personal information. Your identity remains completely anonymous. We don't advertise your name or university anywhere. What happens between you and your writer stays confidential.
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
                Ready to Ace Your Assignment?
              </h2>
              <p className={styles.ctaText}>
                Join 50,000+ American students who trust us with their grades. Get A+ quality assignments from PhD experts. No AI, no plagiarism, no excuses — just excellence.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Write My Assignment Now
                </Link>
                <a href="tel:+12121234567" className={styles.ctaSecondary}>
                  Call Us: +91 830 744 9029
                </a>
              </div>
              <div className={styles.ctaTrust}>
                <span>100% Money-Back Guarantee</span>
                <span>Free Plagiarism Report</span>
                <span>Unlimited Revisions</span>
                <span>24/7 Support</span>
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