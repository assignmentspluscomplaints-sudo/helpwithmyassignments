// src/app/countries/in/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// SEO Metadata for Indian Audience
export const metadata: Metadata = {
  title: 'Assignment Help in India – 24/7 Academic Writing Experts | HelpWithMyAssignments',
  description: 'Need assignment writing service in India? Get 100% plagiarism-free MBA, engineering & PhD thesis help from Indian academic experts. Affordable INR pricing. 24/7 WhatsApp support. Trusted by 50,000+ Indian students.',
  keywords: [
    'assignment writing service in india',
    'assignment help india',
    'online assignment help india',
    'essay writing service india',
    'dissertation writing service india',
    'thesis writing service india',
    'research paper writing service india',
    'cheap assignment help india',
    'best assignment writing service india',
    'urgent assignment help india',
    'mba assignment help india',
    'engineering assignment help india',
    'phd thesis writing service india',
    'plagiarism free assignment help india',
    '24/7 assignment help india',
    'college assignment help india',
    'university assignment help india',
    'online academic writing services india',
    'coursework writing service india',
    'literature review writing service india',
    'homework help india',
    'write my assignment india'
  ],
  authors: [{ name: 'HelpWithMyAssignments India' }],
  creator: 'HelpWithMyAssignments',
  publisher: 'HelpWithMyAssignments',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/countries/in',
  },
  openGraph: {
    title: 'Assignment Help in India – 24/7 Academic Writing Experts',
    description: '🏆 India\'s Most Trusted Assignment Help Service. 3000+ Indian PhD experts covering IITs, NITs, and all Indian universities. Get your free quote today!',
    url: '/countries/in',
    siteName: 'HelpWithMyAssignments India',
    images: [
      {
        url: '/images/in/og-india-assignment-help.jpg',
        width: 1200,
        height: 630,
        alt: 'Assignment Writing Service India - Expert Help',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Assignment Help in India 🇮🇳',
    description: '🏆 #1 Assignment Help in India. Trusted by 50,000+ Indian students. Get HD grades now!',
    images: ['/images/in/twitter-india-assignment-help.jpg'],
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
    google: 'your-google-verification-code-in',
    other: {
      'facebook-domain-verification': ['your-facebook-verification-code-in'],
    },
  },
  category: 'education',
  classification: 'Academic Writing Services India',
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'geo.position': '20.5937;78.9629',
    'ICBM': '20.5937, 78.9629',
  },
}

// Structured Data for Rich Results
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://helpassignments.com/countries/in",
  "name": "Assignment Help India",
  "description": "Premium assignment writing service for Indian students. Expert help from PhD qualified writers across all Indian universities (IITs, NITs, DU, Mumbai University). Specializing in MBA, engineering, and thesis writing services.",
  "url": "https://helpassignments.com/countries/in",
  "logo": "https://helpassignments.com/images/in/logo.png",
  "image": "https://helpassignments.com/images/in/hero-india-assignment-help.jpg",
  "priceRange": "₹₹",
  "telephone": "+91-98765-43210",
  "email": "help@helpassignments.in",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110001",
    "streetAddress": "Connaught Place"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.6139",
    "longitude": "77.2090"
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
    "https://www.facebook.com/helpassignmentsindia",
    "https://www.instagram.com/helpassignments_india",
    "https://www.linkedin.com/company/helpwithmyassignments-india"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Academic Writing Services India",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Assignment Writing Service India",
          "description": "Professional assignment writing help for Indian students"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "MBA Assignment Help India",
          "description": "Comprehensive MBA assignment assistance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Engineering Assignment Help India",
          "description": "Expert engineering assignment support"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "PhD Thesis Writing Service India",
          "description": "Professional PhD thesis writing assistance"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "18743",
    "bestRating": "5",
    "worstRating": "1",
    "itemReviewed": {
      "@type": "Service",
      "name": "Assignment Help India"
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
      "name": "Assignment Help India",
      "item": "https://helpassignments.com/countries/in"
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
      "name": "Is your assignment writing service in India legit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our assignment help service is 100% legitimate and trusted by over 50,000 Indian students from IITs, NITs, Delhi University, Mumbai University, and other top institutions. We provide original, high-quality academic content to help students understand complex topics and improve their writing skills."
      }
    },
    {
      "@type": "Question",
      "name": "What are your charges in INR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our assignment help starts from just ₹499 per page, making it affordable for Indian students. We accept payments via UPI, PhonePe, Google Pay, Paytm, credit/debit cards, and net banking. No hidden charges – transparent pricing in Indian rupees."
      }
    },
    {
      "@type": "Question",
      "name": "Can you write my assignment urgently?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our urgent assignment help service handles deadlines as tight as 6 hours. Whether you need help with MBA assignments, engineering projects, or last-minute essays, our Indian expert writers are available 24/7 to help you submit on time."
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
        "text": "Your assignment will be written by a qualified Indian expert with advanced degrees (Master's or PhD) from top Indian universities like IITs, NITs, DU, and JNU. Our writers specialize in various subjects and are familiar with UGC, AICTE, and university-specific guidelines."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help students from all Indian cities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide assignment help to students across India including Delhi, Mumbai, Bangalore, Hyderabad, Pune, Chennai, Kolkata, Ahmedabad, and all major cities. Our online academic writing services are available to students from every Indian state and union territory."
      }
    }
  ]
}

// Indian Universities Data
const indianUniversities = [
  { name: 'Amity University', logo: '/in universities/Amity University.png', alt: 'Amity University Logo' },
  { name: 'BMS College of Engineering', logo: '/in universities/BMS College of Engineering.png', alt: 'BMS College of Engineering Logo' },
  { name: 'Christ University', logo: '/in universities/Christ University.png', alt: 'Christ University Logo' },
  { name: 'Indian Institute of Technology', logo: '/in universities/Indian Institute of Technology.png', alt: 'IIT Logo' },
  { name: 'Manipal Institute of Technology', logo: '/in universities/Manipal Institute of Technology.png', alt: 'Manipal Institute of Technology Logo' },
  { name: 'National Institute of Technology Trichy', logo: '/in universities/National Institute of Technology Trichy.png', alt: 'NIT Trichy Logo' },
  { name: 'SRM Institute of Science and Technology', logo: '/in universities/SRM Institute of Science and Technology.png', alt: 'SRM University Logo' },
  { name: 'Symbiosis International University', logo: '/in universities/Symbiosis International University.png', alt: 'Symbiosis University Logo' },
  { name: 'University of Delhi', logo: '/in universities/University of Delhi.png', alt: 'Delhi University Logo' },
  { name: 'Vellore Institute of Technology', logo: '/in universities/Vellore Institute of Technology.png', alt: 'VIT University Logo' },
]

// Additional universities for the "Trusted by Students From Top Indian Universities" section
const featuredUniversities: any[] = [
]

// Combine all universities for marquee
const allUniversities = [...indianUniversities, ...featuredUniversities]

// Indian cities for location targeting
const indianCities = [
  { name: 'Delhi', slug: 'delhi', state: 'Delhi' },
  { name: 'Mumbai', slug: 'mumbai', state: 'Maharashtra' },
  { name: 'Bangalore', slug: 'bangalore', state: 'Karnataka' },
  { name: 'Hyderabad', slug: 'hyderabad', state: 'Telangana' },
  { name: 'Pune', slug: 'pune', state: 'Maharashtra' },
  { name: 'Chennai', slug: 'chennai', state: 'Tamil Nadu' },
  { name: 'Kolkata', slug: 'kolkata', state: 'West Bengal' },
  { name: 'Ahmedabad', slug: 'ahmedabad', state: 'Gujarat' },
  { name: 'Jaipur', slug: 'jaipur', state: 'Rajasthan' },
  { name: 'Lucknow', slug: 'lucknow', state: 'Uttar Pradesh' },
  { name: 'Chandigarh', slug: 'chandigarh', state: 'Chandigarh' },
  { name: 'Bhopal', slug: 'bhopal', state: 'Madhya Pradesh' },
]

// Main Page Component
export default function IndiaAssignmentHelpPage() {
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
                    <span className={styles.indiaFlag}>🇮🇳</span>
                    <span className={styles.badgeText}>India's #1 Assignment Help Service</span>
                  </div>
                  
                  <h1 className={styles.heroTitle}>
                    Assignment Help in India – <span className={styles.highlight}>24/7 Academic Writing Experts</span>
                  </h1>
                  
                  <p className={styles.heroDescription}>
                    Trusted by 50,000+ Indian students from IITs, NITs, DU, and top universities. Get HD grades with our expert assignment writing service. PhD qualified Indian writers, 100% plagiarism-free, on-time delivery guaranteed. Pay in INR with confidence.
                  </p>
                  
                  <div className={styles.heroStats}>
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>50K+</span>
                      <span className={styles.statLabel}>Happy Students</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>3000+</span>
                      <span className={styles.statLabel}>Indian PhD Experts</span>
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
                      <span>Indian Academic Experts</span>
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
                      <h3 className={styles.pricingTitle}>Assignment Pricing (INR)</h3>
                      <div className={styles.pricingItem}>
                        <span>High School</span>
                        <span className={styles.price}>₹499/page</span>
                      </div>
                      <div className={styles.pricingItem}>
                        <span>College/University</span>
                        <span className={styles.price}>₹699/page</span>
                      </div>
                      <div className={styles.pricingItem}>
                        <span>MBA/Engineering</span>
                        <span className={styles.price}>₹899/page</span>
                      </div>
                      <div className={styles.pricingItem}>
                        <span>PhD Thesis</span>
                        <span className={styles.price}>₹1299/page</span>
                      </div>
                      <div className={styles.pricingNote}>
                        <span>✅ UPI • PhonePe • Paytm • Cards</span>
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
            <p className={styles.universitiesTagline}>Trusted by Students From Top Indian Universities</p>
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
              Why Choose Us for Assignment Help in India
            </h2>
            <p className={styles.sectionSubtitle}>
              What makes us the preferred choice for Indian students
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🇮🇳</div>
                <h3 className={styles.featureTitle}>Indian Academic Experts</h3>
                <p className={styles.featureDescription}>
                  Our team includes graduates from top Indian universities (IITs, NITs, DU, JNU) who understand UGC, AICTE, and university-specific guidelines perfectly.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>₹</div>
                <h3 className={styles.featureTitle}>Affordable Pricing in INR</h3>
                <p className={styles.featureDescription}>
                  Starting from just ₹499 per page. We accept UPI, PhonePe, Google Pay, Paytm, cards, and net banking. No hidden charges – transparent pricing for Indian students.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📱</div>
                <h3 className={styles.featureTitle}>24/7 WhatsApp Support</h3>
                <p className={styles.featureDescription}>
                  Get instant help on WhatsApp. Our Indian support team is available 24/7 to answer your questions and address your concerns in Hindi and English.
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
              Our Academic Services in India
            </h2>
            <p className={styles.sectionSubtitle}>
              Expert help for every type of assignment
            </p>
            
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Assignment Writing Service India</h3>
                <p className={styles.serviceDescription}>
                  Get professionally written assignments tailored to Indian university standards. Whether you need help with essays, reports, or case studies, our experts deliver high-quality, well-researched content.
                </p>
                <span className={styles.servicePrice}>from ₹499</span>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Essay Writing Service India</h3>
                <p className={styles.serviceDescription}>
                  Comprehensive essay writing assistance for argumentative, descriptive, analytical, and narrative essays. Perfect for Delhi University, Mumbai University, and other Indian colleges.
                </p>
                <span className={styles.servicePrice}>from ₹499</span>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Dissertation Writing Service India</h3>
                <p className={styles.serviceDescription}>
                  In-depth dissertation help with proper methodology, literature review, and data analysis. Our PhD writers specialize in various disciplines and can handle complex research topics.
                </p>
                <span className={styles.servicePrice}>from ₹999</span>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Thesis Writing Service India</h3>
                <p className={styles.serviceDescription}>
                  Professional thesis writing assistance for Master's and PhD students. We help with proposal, chapters, analysis, and final submission. UGC-approved format guaranteed.
                </p>
                <span className={styles.servicePrice}>from ₹1299</span>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>MBA Assignment Help India</h3>
                <p className={styles.serviceDescription}>
                  Specialized MBA assignment help for marketing, finance, HR, operations, and strategy. Our experts have experience with top B-schools like IIMs, XLRI, and Symbiosis.
                </p>
                <span className={styles.servicePrice}>from ₹699</span>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Engineering Assignment Help India</h3>
                <p className={styles.serviceDescription}>
                  Expert engineering assignment help for computer science, mechanical, civil, electrical, and electronics. Our engineers are from IITs and NITs.
                </p>
                <span className={styles.servicePrice}>from ₹699</span>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Research Paper Writing Service India</h3>
                <p className={styles.serviceDescription}>
                  Professional research paper writing for journals and conferences. Includes literature review, methodology, analysis, and proper citations in APA, MLA, or IEEE format.
                </p>
                <span className={styles.servicePrice}>from ₹899</span>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Urgent Assignment Help India</h3>
                <p className={styles.serviceDescription}>
                  Need urgent assignment help? Our 6-hour delivery service handles last-minute assignments. Whether it's a tight deadline or emergency revision, we're here to help.
                </p>
                <span className={styles.servicePrice}>24/7 Available</span>
              </div>
            </div>
          </div>
        </section>

        {/* Universities Grid Section */}
        <section className={styles.universities}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Trusted by Students From Top Indian Universities
            </h2>
            <p className={styles.sectionSubtitle}>
              We've helped students from every major Indian institution
            </p>
            
            <div className={styles.logoGrid}>
              {featuredUniversities.map((uni, index) => (
                <div key={index} className={styles.logoGridItem}>
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
                <h3 className={styles.featureTitle}>Pay Securely in INR</h3>
                <p className={styles.featureDescription}>
                  Get an instant price quote in Indian rupees. Pay via UPI, PhonePe, Google Pay, Paytm, credit/debit card, or net banking. 100% secure payment.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>3️⃣</div>
                <h3 className={styles.featureTitle}>Download Your Assignment</h3>
                <p className={styles.featureDescription}>
                  Your Indian expert completes the assignment and submits it through our secure platform. Download your completed assignment and request free revisions if needed.
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
              Everything you need to know about our assignment help service in India
            </p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Is your assignment writing service in India legit?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, our assignment help service is 100% legitimate and trusted by over 50,000 Indian students from IITs, NITs, Delhi University, Mumbai University, and other top institutions. We provide original, high-quality academic content to help students understand complex topics and improve their writing skills.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What are your charges in INR?
                </h3>
                <p className={styles.faqAnswer}>
                  Our assignment help starts from just ₹499 per page, making it affordable for Indian students. We accept payments via UPI, PhonePe, Google Pay, Paytm, credit/debit cards, and net banking. No hidden charges – transparent pricing in Indian rupees.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you write my assignment urgently?
                </h3>
                <p className={styles.faqAnswer}>
                  Absolutely! Our urgent assignment help service handles deadlines as tight as 6 hours. Whether you need help with MBA assignments, engineering projects, or last-minute essays, our Indian expert writers are available 24/7 to help you submit on time.
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
                  Your assignment will be written by a qualified Indian expert with advanced degrees (Master's or PhD) from top Indian universities like IITs, NITs, DU, and JNU. Our writers specialize in various subjects and are familiar with UGC, AICTE, and university-specific guidelines.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you help students from all Indian cities?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we provide assignment help to students across India including Delhi, Mumbai, Bangalore, Hyderabad, Pune, Chennai, Kolkata, Ahmedabad, and all major cities. Our online academic writing services are available to students from every Indian state and union territory.
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
                Join 50,000+ Indian students who trust us with their grades. Get HD quality assignments from PhD experts. Pay in INR securely.
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