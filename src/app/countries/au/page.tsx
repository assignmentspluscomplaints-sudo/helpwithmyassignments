import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import PricingCalculator from '@/components/PricingCalculator'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// Dynamic metadata for Australian market
export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://youraustralianassignments.com'
  
  return {
    metadataBase: new URL(baseUrl),
    title: 'Best Assignment Writing Service Australia | Expert Assignment Help 🇦🇺',
    description: '⭐ #1 Assignment Writing Service in Australia. 5000+ Australian PhD experts. 100% plagiarism-free, on-time delivery. Get HD grades with our Australian assignment help. Available 24/7!',
    keywords: [
      'assignment writing service australia',
      'assignment help australia',
      'australian assignment writing service',
      'assignment writing help sydney',
      'assignment help melbourne',
      'assignment help perth',
      'best assignment writing service australia',
      'cheap assignment writing service australia',
      'university assignment help australia',
      'online assignment writing service australia',
      'urgent assignment help australia',
      'custom assignment writing australia',
      'mba assignment help australia',
      'nursing assignment help australia',
      'law assignment help australia',
      'assignment help near me australia',
      'australian academic writing service',
      'assignment writers australia',
      'essay writing service australia',
      'dissertation help australia'
    ],
    authors: [{ name: 'Australian Assignment Experts' }],
    creator: 'Australian Assignment Help',
    publisher: 'Australian Assignment Services',
    formatDetection: {
      email: false,
      address: true,
      telephone: true,
    },
    alternates: {
      canonical: '/countries/au',
      languages: {
        'en-AU': '/countries/au',
      },
    },
    openGraph: {
      title: 'Best Assignment Writing Service Australia | Expert Assignment Help 🇦🇺',
      description: '🏆 Australia\'s Most Trusted Assignment Writing Service. 5000+ Australian PhD experts covering all Australian universities. Get your free quote today!',
      url: '/countries/au',
      siteName: 'Australian Assignment Help',
      images: [
        {
          url: '/images/au/og-australian-assignment-help.jpg',
          width: 1200,
          height: 630,
          alt: 'Australian Assignment Writing Service - Expert Help',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Best Assignment Writing Service Australia 🇦🇺',
      description: '🏆 #1 Assignment Help in Australia. Trusted by 50,000+ Australian students. Get HD grades now!',
      images: ['/images/au/twitter-australian-assignment-help.jpg'],
      creator: '@auassignmenthelp',
      site: '@auassignmenthelp',
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
      google: 'your-google-verification-code-au',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
      other: {
        'facebook-domain-verification': ['your-facebook-verification-code-au'],
      },
    },
    category: 'education',
    classification: 'Academic Writing Services',
    other: {
      'geo.region': 'AU',
      'geo.placename': 'Australia',
      'geo.position': '-25.2744;133.7751',
      'ICBM': '-25.2744, 133.7751',
    },
  }
}

// Structured Data for Rich Results
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://youraustralianassignments.com/countries/au",
  "name": "Australian Assignment Writing Service",
  "description": "Premium assignment writing service for Australian students. Expert help from PhD qualified writers across all Australian universities.",
  "url": "https://youraustralianassignments.com/countries/au",
  "logo": "https://youraustralianassignments.com/images/au/logo.png",
  "image": "https://youraustralianassignments.com/images/au/hero-australian-assignment-help.jpg",
  "priceRange": "$$",
  "telephone": "+61-2-1234-5678",
  "email": "help@australianassignments.com.au",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AU",
    "addressLocality": "Sydney",
    "addressRegion": "NSW",
    "postalCode": "2000",
    "streetAddress": "123 George Street"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-33.8688",
    "longitude": "151.2093"
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
    "https://www.facebook.com/australianassignmenthelp",
    "https://www.instagram.com/auassignmenthelp",
    "https://www.linkedin.com/company/australian-assignment-help",
    "https://twitter.com/auassignmenthelp"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Assignment Writing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Essay Writing Service",
          "description": "Professional essay writing help for Australian students"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dissertation Help",
          "description": "PhD level dissertation writing assistance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Assignment Help",
          "description": "Comprehensive assignment writing support"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "15427",
    "bestRating": "5",
    "worstRating": "1",
    "itemReviewed": {
      "@type": "Service",
      "name": "Australian Assignment Writing Service"
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
        "name": "Emma Thompson"
      },
      "reviewBody": "Best assignment help in Australia! Got HD for my Sydney University assignment."
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
      "item": "https://youraustralianassignments.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Australia",
      "item": "https://youraustralianassignments.com/countries/au"
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
      "name": "Is your assignment writing service legal in Australia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our service is 100% legal in Australia. We provide reference materials and model answers to help Australian students understand complex topics and improve their academic writing skills."
      }
    },
    {
      "@type": "Question",
      "name": "Do you have Australian writers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We have 5000+ PhD qualified writers across Australia, including experts from Group of Eight universities like University of Melbourne, ANU, University of Sydney, and UNSW."
      }
    },
    {
      "@type": "Question",
      "name": "What is the cost of assignment help in Australia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our prices start from just $16.5 AUD per page for high school assignments. Use our price calculator above for an instant, accurate quote based on your specific requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Do you follow Australian academic guidelines?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all our writers are familiar with Australian academic standards, including AGLC, Harvard (Australian style), APA 7th, and specific requirements of Australian universities."
      }
    },
    {
      "@type": "Question",
      "name": "Can you handle urgent assignments in Australia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in urgent assignments with deadlines as tight as 3 hours. Our Australian team works 24/7 to ensure your assignment is delivered on time, every time."
      }
    }
  ]
}

// Australian Universities Data
const australianUniversities = [
  { name: 'University of Sydney', logo: '/auuniversities/usyd.png', alt: 'University of Sydney Logo' },
  { name: 'University of Melbourne', logo: '/auuniversities/melbourne.png', alt: 'University of Melbourne Logo' },
  { name: 'UNSW Sydney', logo: '/auuniversities/unsw.png', alt: 'UNSW Sydney Logo' },
  { name: 'Australian National University', logo: '/auuniversities/anu.png', alt: 'ANU Logo' },
  { name: 'Monash University', logo: '/auuniversities/Monash.png', alt: 'Monash University Logo' },
  { name: 'University of Queensland', logo: '/auuniversities/uq.png', alt: 'UQ Logo' },
  { name: 'University of Western Australia', logo: '/auuniversities/uwa.png', alt: 'UWA Logo' },
  { name: 'University of Adelaide', logo: '/auuniversities/adelaide.png', alt: 'Adelaide University Logo' },
  { name: 'University of Technology Sydney', logo: '/auuniversities/uts.png', alt: 'UTS Logo' },
  { name: 'Macquarie University', logo: '/auuniversities/macquarie.png', alt: 'Macquarie University Logo' },
  { name: 'RMIT University', logo: '/auuniversities/rmit.png', alt: 'RMIT Logo' },
  { name: 'Curtin University', logo: '/auuniversities/curtin.png', alt: 'Curtin University Logo' },
  { name: 'Queensland University of Technology', logo: '/auuniversities/qut.png', alt: 'QUT Logo' },
  { name: 'Deakin University', logo: '/auuniversities/deakin.png', alt: 'Deakin University Logo' },
  { name: 'Griffith University', logo: '/auuniversities/griffith.png', alt: 'Griffith University Logo' },
  { name: 'La Trobe University', logo: '/auuniversities/latrobe.png', alt: 'La Trobe University Logo' },
]

// Australian cities for location pages
const australianCities = [
  { name: 'Sydney', slug: 'sydney', state: 'NSW' },
  { name: 'Melbourne', slug: 'melbourne', state: 'VIC' },
  { name: 'Brisbane', slug: 'brisbane', state: 'QLD' },
  { name: 'Perth', slug: 'perth', state: 'WA' },
  { name: 'Adelaide', slug: 'adelaide', state: 'SA' },
  { name: 'Canberra', slug: 'canberra', state: 'ACT' },
  { name: 'Hobart', slug: 'hobart', state: 'TAS' },
  { name: 'Darwin', slug: 'darwin', state: 'NT' },
  { name: 'Gold Coast', slug: 'gold-coast', state: 'QLD' },
  { name: 'Newcastle', slug: 'newcastle', state: 'NSW' },
]

// Subject areas popular in Australia
const australianSubjects = [
  { name: 'Nursing Assignment Help', slug: 'nursing-assignment-writing-service', icon: '🏥' },
  { name: 'MBA Assignment Help', slug: 'mba-assignment-writing-service', icon: '💼' },
  { name: 'Law Assignment Help', slug: 'law-assignment-writing-service', icon: '⚖️' },
  { name: 'Engineering Assignment Help', slug: 'engineering-assignment-writing-service', icon: '🔧' },
  { name: 'IT & Programming Help', slug: 'computer-science-assignment-writing-service', icon: '💻' },
  { name: 'Medical Science Help', slug: 'medical-assignment-writing-service', icon: '🔬' },
  { name: 'Accounting Assignment Help', slug: 'accounting-assignment-writing-service', icon: '📊' },
  { name: 'Education Assignment Help', slug: 'coursework-help', icon: '📚' },
]

// Main Page Component - NOT async
export default function AustralianHomePage() {
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
                    <span className={styles.australiaFlag}>🇦🇺</span>
                    <span className={styles.badgeText}>Australia's #1 Assignment Help Service</span>
                  </div>
                  
                  <h1 className={styles.heroTitle}>
                    Best Assignment Writing Service <span className={styles.highlight}>in Australia</span>
                  </h1>
                  
                  <p className={styles.heroDescription}>
                    Trusted by 50,000+ Australian students across all Go8 universities. 
                    Get HD grades with our expert assignment writing help. 
                    PhD qualified writers, 100% plagiarism-free, on-time delivery guaranteed.
                  </p>
                  
                  <div className={styles.heroStats}>
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>50K+</span>
                      <span className={styles.statLabel}>Happy Students</span>
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
                      Get Instant Price Quote
                    </Link>
                  </div>
                  
                  <div className={styles.trustBadges}>
                    <div className={styles.trustItem}>
                      <span className={styles.trustIcon}>✓</span>
                      <span>Australian Writers</span>
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
                      <PricingCalculator />
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* University Logos Section - Scrolling Social Proof */}
        <section className={styles.universities}>
          <div className={styles.container}>
            <p className={styles.universitiesTagline}>Trusted by students from Australia's leading universities</p>
            <div className={styles.universitiesMarquee}>
              <div className={styles.universitiesTrack}>
                {australianUniversities.map((uni, index) => (
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
                {australianUniversities.map((uni, index) => (
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

        {/* Features Section */}
        <section className={styles.features}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Why Australian Students Choose Us
            </h2>
            <p className={styles.sectionSubtitle}>
              Premium assignment writing service tailored for Australian academic standards
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🇦🇺</div>
                <h3 className={styles.featureTitle}>Australian Writers</h3>
                <p className={styles.featureDescription}>
                  5000+ PhD qualified writers from Australian universities who understand local academic requirements
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⏱️</div>
                <h3 className={styles.featureTitle}>On-Time Delivery</h3>
                <p className={styles.featureDescription}>
                  We respect your deadlines. 98% of our assignments are delivered before the due date
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔍</div>
                <h3 className={styles.featureTitle}>Plagiarism Free</h3>
                <p className={styles.featureDescription}>
                  Every assignment is checked with Turnitin and comes with a free plagiarism report
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>💰</div>
                <h3 className={styles.featureTitle}>Best Price Guarantee</h3>
                <p className={styles.featureDescription}>
                  Starting from just $16.5 AUD per page. We match any genuine Australian competitor quote
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔄</div>
                <h3 className={styles.featureTitle}>Unlimited Revisions</h3>
                <p className={styles.featureDescription}>
                  Free revisions until you're completely satisfied with your assignment
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🌙</div>
                <h3 className={styles.featureTitle}>24/7 Support</h3>
                <p className={styles.featureDescription}>
                  Australian-based support team available 24/7 to help with your queries
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Calculator Anchor */}
        <div id="pricing-calculator" className={styles.calculatorAnchor}></div>

        {/* Services Section */}
        <section className={styles.services}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Comprehensive Assignment Writing Services
            </h2>
            <p className={styles.sectionSubtitle}>
              Expert help for every type of academic assignment
            </p>
            
            <div className={styles.servicesGrid}>
              <Link href="/assignment-writing-service" className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Assignment Writing Service</h3>
                <p className={styles.serviceDescription}>
                  Complete assignment help from Australian experts
                </p>
                <span className={styles.servicePrice}>from $16.5 AUD</span>
              </Link>
              
              <Link href="/essay-writing-service" className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Essay Writing Service</h3>
                <p className={styles.serviceDescription}>
                  High-quality essays tailored to Australian standards
                </p>
                <span className={styles.servicePrice}>from $18.15 AUD</span>
              </Link>
              
              <Link href="/dissertation-writing-service" className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Dissertation Help</h3>
                <p className={styles.serviceDescription}>
                  PhD-level dissertation and thesis assistance
                </p>
                <span className={styles.servicePrice}>from $30.25 AUD</span>
              </Link>
              
              <Link href="/urgent-essay-help" className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Urgent Assignment Help</h3>
                <p className={styles.serviceDescription}>
                  Last-minute assignments delivered in hours
                </p>
                <span className={styles.servicePrice}>24/7 Availability</span>
              </Link>
              
              <Link href="/cheap-assignment-writing-service" className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Cheap Assignment Help</h3>
                <p className={styles.serviceDescription}>
                  Quality assignments at student-friendly prices
                </p>
                <span className={styles.servicePrice}>Budget Friendly</span>
              </Link>
              
              <Link href="/online-assignment-help" className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Online Assignment Help</h3>
                <p className={styles.serviceDescription}>
                  Get help anytime, anywhere in Australia
                </p>
                <span className={styles.servicePrice}>24/7 Access</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Subject Areas */}
        <section className={styles.subjects}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Subject-Specific Assignment Help
            </h2>
            <p className={styles.sectionSubtitle}>
              Expert writers for every discipline
            </p>
            
            <div className={styles.subjectsGrid}>
              {australianSubjects.map((subject) => (
                <Link 
                  href={`/${subject.slug}`} 
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

        {/* Testimonials */}
        <section className={styles.testimonials}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              What Australian Students Say
            </h2>
            <p className={styles.sectionSubtitle}>
              Join 50,000+ happy students who aced their assignments
            </p>
            
            <div className={styles.testimonialsGrid}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "Got 85% on my nursing assignment from Uni of Melbourne. The writer understood Australian healthcare perfectly. Highly recommended!"
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Sarah Chen</div>
                  <div className={styles.authorUni}>University of Melbourne</div>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "Needed urgent help with my UNSW law assignment. They delivered in 8 hours and it was perfect. AGLC referencing was spot on!"
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>James Wilson</div>
                  <div className={styles.authorUni}>UNSW Sydney</div>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "Best assignment help in Australia. My MBA paper from Monash got distinction. Will definitely use again!"
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Priya Sharma</div>
                  <div className={styles.authorUni}>Monash University</div>
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
              Everything you need to know about our Australian assignment writing service
            </p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Is your assignment writing service legal in Australia?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, our service is 100% legal in Australia. We provide reference materials and model answers to help Australian students understand complex topics and improve their academic writing skills.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you have Australian writers?
                </h3>
                <p className={styles.faqAnswer}>
                  Absolutely! We have 5000+ PhD qualified writers across Australia, including experts from Group of Eight universities like University of Melbourne, ANU, University of Sydney, and UNSW.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What is the cost of assignment help in Australia?
                </h3>
                <p className={styles.faqAnswer}>
                  Our prices start from just $16.5 AUD per page for high school assignments. Use our price calculator above for an instant, accurate quote based on your specific requirements.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you follow Australian academic guidelines?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, all our writers are familiar with Australian academic standards, including AGLC, Harvard (Australian style), APA 7th, and specific requirements of Australian universities.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you handle urgent assignments in Australia?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we specialize in urgent assignments with deadlines as tight as 3 hours. Our Australian team works 24/7 to ensure your assignment is delivered on time, every time.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you provide Turnitin reports?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, every assignment comes with a free Turnitin plagiarism report. We guarantee 100% original content tailored to your requirements.
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
                Ready to Ace Your Australian Assignment?
              </h2>
              <p className={styles.ctaText}>
                Join 50,000+ Australian students who trust us with their grades. Get HD quality assignments from PhD experts.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Get Your Free Quote
                </Link>
                <a href="tel:+61212345678" className={styles.ctaSecondary}>
                  Call Us Now: +91 830 744 9029
                </a>
              </div>
              <div className={styles.ctaTrust}>
                <span> 100% Money Back Guarantee</span>
                <span> Free Plagiarism Report</span>
                <span> Free Revisions</span>
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