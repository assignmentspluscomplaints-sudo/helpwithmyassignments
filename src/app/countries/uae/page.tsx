// src/app/countries/uae/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// SEO Metadata for UAE Audience
export const metadata: Metadata = {
  title: 'Assignment Help in UAE – 24/7 Academic Writing Experts | HelpWithMyAssignments',
  description: 'Need assignment writing service in UAE? Get 100% plagiarism-free MBA, engineering & PhD thesis help from UAE academic experts. Affordable AED pricing. 24/7 WhatsApp support. Trusted by 30,000+ UAE students.',
  keywords: [
    'assignment writing service in uae',
    'assignment help uae',
    'online assignment help uae',
    'essay writing service uae',
    'dissertation writing service uae',
    'thesis writing service uae',
    'research paper writing service uae',
    'cheap assignment help uae',
    'best assignment writing service uae',
    'urgent assignment help uae',
    'mba assignment help uae',
    'engineering assignment help uae',
    'phd thesis writing service uae',
    'plagiarism free assignment help uae',
    '24/7 assignment help uae',
    'college assignment help uae',
    'university assignment help uae',
    'online academic writing services uae',
    'coursework writing service uae',
    'literature review writing service uae',
    'homework help uae',
    'write my assignment uae',
    'assignment help dubai',
    'assignment help abu dhabi',
    'assignment help sharjah'
  ],
  authors: [{ name: 'HelpWithMyAssignments UAE' }],
  creator: 'HelpWithMyAssignments',
  publisher: 'HelpWithMyAssignments',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/countries/uae',
  },
  openGraph: {
    title: 'Assignment Help in UAE – 24/7 Academic Writing Experts',
    description: '🏆 UAE\'s Most Trusted Assignment Help Service. 2000+ UAE PhD experts covering all UAE universities. Get your free quote today!',
    url: '/countries/uae',
    siteName: 'HelpWithMyAssignments UAE',
    images: [
      {
        url: '/images/uae/og-uae-assignment-help.jpg',
        width: 1200,
        height: 630,
        alt: 'Assignment Writing Service UAE - Expert Help',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Assignment Help in UAE 🇦🇪',
    description: '🏆 #1 Assignment Help in UAE. Trusted by 30,000+ UAE students. Get HD grades now!',
    images: ['/images/uae/twitter-uae-assignment-help.jpg'],
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
    google: 'your-google-verification-code-uae',
    other: {
      'facebook-domain-verification': ['your-facebook-verification-code-uae'],
    },
  },
  category: 'education',
  classification: 'Academic Writing Services UAE',
  other: {
    'geo.region': 'AE',
    'geo.placename': 'United Arab Emirates',
    'geo.position': '23.4241;53.8478',
    'ICBM': '23.4241, 53.8478',
  },
}

// Structured Data for Rich Results
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://helpassignments.com/countries/uae",
  "name": "Assignment Help UAE",
  "description": "Premium assignment writing service for UAE students. Expert help from PhD qualified writers across all UAE universities (UAEU, AUS, Zayed University, University of Dubai). Specializing in MBA, engineering, and thesis writing services.",
  "url": "https://helpassignments.com/countries/uae",
  "logo": "https://helpassignments.com/images/uae/logo.png",
  "image": "https://helpassignments.com/images/uae/hero-uae-assignment-help.jpg",
  "priceRange": "AED",
  "telephone": "+971-50-123-4567",
  "email": "help@helpassignments.ae",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AE",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "postalCode": "00000",
    "streetAddress": "Sheikh Zayed Road"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "25.2048",
    "longitude": "55.2708"
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
    "https://www.facebook.com/helpassignmentsuae",
    "https://www.instagram.com/helpassignments_uae",
    "https://www.linkedin.com/company/helpwithmyassignments-uae"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Academic Writing Services UAE",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Assignment Writing Service UAE",
          "description": "Professional assignment writing help for UAE students"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "MBA Assignment Help UAE",
          "description": "Comprehensive MBA assignment assistance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Engineering Assignment Help UAE",
          "description": "Expert engineering assignment support"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "PhD Thesis Writing Service UAE",
          "description": "Professional PhD thesis writing assistance"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "12453",
    "bestRating": "5",
    "worstRating": "1",
    "itemReviewed": {
      "@type": "Service",
      "name": "Assignment Help UAE"
    }
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
      "name": "Assignment Help UAE",
      "item": "https://helpassignments.com/countries/uae"
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
      "name": "Is your assignment writing service in UAE legit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our assignment help service is 100% legitimate and trusted by over 30,000 UAE students from UAE University, American University of Sharjah, Zayed University, University of Dubai, and other top institutions. We provide original, high-quality academic content to help students understand complex topics and improve their writing skills."
      }
    },
    {
      "@type": "Question",
      "name": "What are your charges in AED?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our assignment help starts from just 99 AED per page, making it affordable for UAE students. We accept payments via credit/debit cards, PayPal, and bank transfer. No hidden charges – transparent pricing in UAE Dirhams."
      }
    },
    {
      "@type": "Question",
      "name": "Can you write my assignment urgently?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our urgent assignment help service handles deadlines as tight as 6 hours. Whether you need help with MBA assignments, engineering projects, or last-minute essays, our UAE expert writers are available 24/7 to help you submit on time."
      }
    },
    {
      "@type": "Question",
      "name": "Is your work plagiarism-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every assignment we deliver is 100% original and plagiarism-free. We check all work with advanced plagiarism detection software (similar to Turnitin) and provide a free plagiarism report upon request. Our thesis writing service guarantees unique content tailored to your requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Who will write my assignment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your assignment will be written by a qualified expert with advanced degrees (Master's or PhD) from top international and UAE universities. Our writers specialize in various subjects and are familiar with UAE academic standards and MOE guidelines."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help students from all UAE cities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide assignment help to students across UAE including Dubai, Abu Dhabi, Sharjah, Al Ain, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. Our online academic writing services are available to students from every emirate."
      }
    }
  ]
}

// UAE Universities Data
const uaeUniversities = [
  { name: 'Abu Dhabi University', logo: '/uaeuniversities/Abu Dhabi University.png', alt: 'Abu Dhabi University Logo' },
  { name: 'American University in Dubai', logo: '/uaeuniversities/American University in Dubai.png', alt: 'American University in Dubai Logo' },
  { name: 'American University of Sharjah', logo: '/uaeuniversities/American University of Sharjah.png', alt: 'American University of Sharjah Logo' },
  { name: 'Canadian University Dubai', logo: '/uaeuniversities/Canadian University Dubai.png', alt: 'Canadian University Dubai Logo' },
  { name: 'Heriot-Watt University Dubai', logo: '/uaeuniversities/Heriot-Watt University Dubai.png', alt: 'Heriot-Watt University Dubai Logo' },
  { name: 'Higher Colleges of Technology', logo: '/uaeuniversities/Higher Colleges of Technology.png', alt: 'Higher Colleges of Technology Logo' },
  { name: 'Middlesex University Dubai', logo: '/uaeuniversities/Middlesex University Dubai.png', alt: 'Middlesex University Dubai Logo' },
  { name: 'Murdoch University Dubai', logo: '/uaeuniversities/Murdoch University Dubai.png', alt: 'Murdoch University Dubai Logo' },
  { name: 'United Arab Emirates University', logo: '/uaeuniversities/United Arab Emirates University.png', alt: 'United Arab Emirates University Logo' },
  { name: 'University of Dubai', logo: '/uaeuniversities/University of Dubai.png', alt: 'University of Dubai Logo' },
  { name: 'University of Sharjah', logo: '/uaeuniversities/University of Sharjah.png', alt: 'University of Sharjah Logo' },
  { name: 'University of Wollongong in Dubai', logo: '/uaeuniversities/University of Wollongong in Dubai.png', alt: 'University of Wollongong in Dubai Logo' },
  { name: 'Zayed University', logo: '/uaeuniversities/Zayed University.png', alt: 'Zayed University Logo' },
]

// Combine all universities for marquee
const allUniversities = [...uaeUniversities]

// UAE cities for location targeting
const uaeCities = [
  { name: 'Dubai', slug: 'dubai', emirate: 'Dubai' },
  { name: 'Abu Dhabi', slug: 'abu-dhabi', emirate: 'Abu Dhabi' },
  { name: 'Sharjah', slug: 'sharjah', emirate: 'Sharjah' },
  { name: 'Al Ain', slug: 'al-ain', emirate: 'Abu Dhabi' },
  { name: 'Ajman', slug: 'ajman', emirate: 'Ajman' },
  { name: 'Ras Al Khaimah', slug: 'ras-al-khaimah', emirate: 'Ras Al Khaimah' },
  { name: 'Fujairah', slug: 'fujairah', emirate: 'Fujairah' },
  { name: 'Umm Al Quwain', slug: 'umm-al-quwain', emirate: 'Umm Al Quwain' },
]

// Main Page Component
export default function UAETAssignmentHelpPage() {
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
            <div className={styles.heroOverlay}></div>
          </div>
          
          <div className={styles.heroContent}>
            <div className={styles.container}>
              <div className={styles.heroGrid}>
                <div className={styles.heroText}>
                  <div className={styles.badge}>
                    <span className={styles.uaeFlag}>🇦🇪</span>
                    <span className={styles.badgeText}>UAE's #1 Assignment Help Service</span>
                  </div>
                  
                  <h1 className={styles.heroTitle}>
                    Assignment Help in UAE – <span className={styles.highlight}>24/7 Academic Writing Experts</span>
                  </h1>
                  
                  <p className={styles.heroDescription}>
                    Trusted by 30,000+ UAE students from UAEU, AUS, Zayed University, and top universities. Get HD grades with our expert assignment writing service. PhD qualified writers, 100% plagiarism-free, on-time delivery guaranteed. Pay in AED with confidence.
                  </p>
                  
                  <div className={styles.heroStats}>
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>30K+</span>
                      <span className={styles.statLabel}>Happy Students</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>2000+</span>
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
                      Get Instant Assignment Help
                    </Link>
                  </div>
                  
                  <div className={styles.trustBadges}>
                    <div className={styles.trustItem}>
                      <span className={styles.trustIcon}>✓</span>
                      <span>UAE Academic Experts</span>
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
                    <div className={styles.pricingCard}>
                      <h3 className={styles.pricingTitle}>Assignment Pricing (AED)</h3>
                      <div className={styles.pricingItem}>
                        <span>High School</span>
                        <span className={styles.price}>99 AED/page</span>
                      </div>
                      <div className={styles.pricingItem}>
                        <span>College/University</span>
                        <span className={styles.price}>149 AED/page</span>
                      </div>
                      <div className={styles.pricingItem}>
                        <span>MBA/Engineering</span>
                        <span className={styles.price}>199 AED/page</span>
                      </div>
                      <div className={styles.pricingItem}>
                        <span>PhD Thesis</span>
                        <span className={styles.price}>299 AED/page</span>
                      </div>
                      <div className={styles.pricingNote}>
                        <span>✅ Credit Card • PayPal • Bank Transfer</span>
                      </div>
                      <Link href="/contact" className={styles.pricingCta}>
                        Get Free Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* University Logos Section */}
        <section className={styles.universities}>
          <div className={styles.container}>
            <p className={styles.universitiesTagline}>Trusted by Students From Top UAE Universities</p>
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

        {/* Why Choose Us Section */}
        <section className={styles.features}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Why Choose Us for Assignment Help in UAE
            </h2>
            <p className={styles.sectionSubtitle}>
              What makes us the preferred choice for UAE students
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🇦🇪</div>
                <h3 className={styles.featureTitle}>UAE Academic Experts</h3>
                <p className={styles.featureDescription}>
                  Our team includes graduates from top UAE universities (UAEU, AUS, Zayed University) who understand MOE guidelines and university-specific requirements perfectly.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>💰</div>
                <h3 className={styles.featureTitle}>Affordable Pricing in AED</h3>
                <p className={styles.featureDescription}>
                  Starting from just 99 AED per page. We accept credit cards, PayPal, and bank transfer. No hidden charges – transparent pricing for UAE students.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📱</div>
                <h3 className={styles.featureTitle}>24/7 WhatsApp Support</h3>
                <p className={styles.featureDescription}>
                  Get instant help on WhatsApp. Our UAE support team is available 24/7 to answer your questions and address your concerns in English and Arabic.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔍</div>
                <h3 className={styles.featureTitle}>Plagiarism-Free Guarantee</h3>
                <p className={styles.featureDescription}>
                  Every assignment is written from scratch and checked with advanced plagiarism detection software. Free Turnitin report available on request.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⏱️</div>
                <h3 className={styles.featureTitle}>On-Time Delivery</h3>
                <p className={styles.featureDescription}>
                  We respect your deadlines. 98% of our orders are delivered before the due date, even with urgent 6-hour deadlines for last-minute assignments.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔄</div>
                <h3 className={styles.featureTitle}>Free Revisions</h3>
                <p className={styles.featureDescription}>
                  We offer unlimited free revisions until you're completely satisfied with your assignment. Your satisfaction is our priority.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Services Section */}
        <section className={styles.services}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Our Academic Services in UAE
            </h2>
            <p className={styles.sectionSubtitle}>
              Expert help for every type of assignment
            </p>
            
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Assignment Writing Service UAE</h3>
                <p className={styles.serviceDescription}>
                  Get professionally written assignments tailored to UAE university standards. Whether you need help with essays, reports, or case studies, our experts deliver high-quality, well-researched content.
                </p>
                <span className={styles.servicePrice}>from 99 AED</span>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Essay Writing Service UAE</h3>
                <p className={styles.serviceDescription}>
                  Comprehensive essay writing assistance for argumentative, descriptive, analytical, and narrative essays. Perfect for UAEU, AUS, University of Dubai, and other UAE universities.
                </p>
                <span className={styles.servicePrice}>from 99 AED</span>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Dissertation Writing Service UAE</h3>
                <p className={styles.serviceDescription}>
                  In-depth dissertation help with proper methodology, literature review, and data analysis. Our PhD writers specialize in various disciplines and can handle complex research topics.
                </p>
                <span className={styles.servicePrice}>from 249 AED</span>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Thesis Writing Service UAE</h3>
                <p className={styles.serviceDescription}>
                  Professional thesis writing assistance for Master's and PhD students. We help with proposal, chapters, analysis, and final submission. UAE university format guaranteed.
                </p>
                <span className={styles.servicePrice}>from 299 AED</span>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>MBA Assignment Help UAE</h3>
                <p className={styles.serviceDescription}>
                  Specialized MBA assignment help for marketing, finance, HR, operations, and strategy. Our experts have experience with top UAE business schools.
                </p>
                <span className={styles.servicePrice}>from 149 AED</span>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Engineering Assignment Help UAE</h3>
                <p className={styles.serviceDescription}>
                  Expert engineering assignment help for computer science, mechanical, civil, electrical, and electronics. Our engineers are from top international and UAE universities.
                </p>
                <span className={styles.servicePrice}>from 149 AED</span>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Research Paper Writing Service UAE</h3>
                <p className={styles.serviceDescription}>
                  Professional research paper writing for journals and conferences. Includes literature review, methodology, analysis, and proper citations in APA, MLA, or IEEE format.
                </p>
                <span className={styles.servicePrice}>from 199 AED</span>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Urgent Assignment Help UAE</h3>
                <p className={styles.serviceDescription}>
                  Need urgent assignment help? Our 6-hour delivery service handles last-minute assignments. Whether it's a tight deadline or emergency revision, we're here to help.
                </p>
                <span className={styles.servicePrice}>24/7 Available</span>
              </div>
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
              Get your assignment done in 3 simple steps
            </p>
            
            <div className={styles.featuresGrid} style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>1️⃣</div>
                <h3 className={styles.featureTitle}>Submit Your Assignment</h3>
                <p className={styles.featureDescription}>
                  Fill out our simple order form with your assignment topic, requirements, deadline, and any additional materials. Tell us exactly what you need.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>2️⃣</div>
                <h3 className={styles.featureTitle}>Pay Securely in AED</h3>
                <p className={styles.featureDescription}>
                  Get an instant price quote in UAE Dirhams. Pay via credit card, PayPal, or bank transfer. 100% secure payment.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>3️⃣</div>
                <h3 className={styles.featureTitle}>Download Your Assignment</h3>
                <p className={styles.featureDescription}>
                  Your UAE expert completes the assignment and submits it through our secure platform. Download your completed assignment and request free revisions if needed.
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
              Everything you need to know about our assignment help service in UAE
            </p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Is your assignment writing service in UAE legit?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, our assignment help service is 100% legitimate and trusted by over 30,000 UAE students from UAE University, American University of Sharjah, Zayed University, University of Dubai, and other top institutions. We provide original, high-quality academic content to help students understand complex topics and improve their writing skills.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What are your charges in AED?
                </h3>
                <p className={styles.faqAnswer}>
                  Our assignment help starts from just 99 AED per page, making it affordable for UAE students. We accept payments via credit/debit cards, PayPal, and bank transfer. No hidden charges – transparent pricing in UAE Dirhams.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you write my assignment urgently?
                </h3>
                <p className={styles.faqAnswer}>
                  Absolutely! Our urgent assignment help service handles deadlines as tight as 6 hours. Whether you need help with MBA assignments, engineering projects, or last-minute essays, our UAE expert writers are available 24/7 to help you submit on time.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Is your work plagiarism-free?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, every assignment we deliver is 100% original and plagiarism-free. We check all work with advanced plagiarism detection software (similar to Turnitin) and provide a free plagiarism report upon request. Our thesis writing service guarantees unique content tailored to your requirements.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Who will write my assignment?
                </h3>
                <p className={styles.faqAnswer}>
                  Your assignment will be written by a qualified expert with advanced degrees (Master's or PhD) from top international and UAE universities. Our writers specialize in various subjects and are familiar with UAE academic standards and MOE guidelines.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you help students from all UAE cities?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we provide assignment help to students across UAE including Dubai, Abu Dhabi, Sharjah, Al Ain, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. Our online academic writing services are available to students from every emirate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className={styles.footerCta}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Ready to Ace Your Assignment?
              </h2>
              <p className={styles.ctaText}>
                Join 30,000+ UAE students who trust us with their grades. Get HD quality assignments from PhD experts. Pay in AED securely.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Get Instant Assignment Help
                </Link>
                <Link href="/contact" className={styles.ctaSecondary}>
                  Chat on WhatsApp
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