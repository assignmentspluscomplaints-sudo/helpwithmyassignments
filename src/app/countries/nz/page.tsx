// src/app/countries/nz/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

// New Zealand universities data from public folder
const nzUniversities = [
  { name: 'University of Auckland', logo: '/nzuniversities/University of Auckland.png', alt: 'University of Auckland Logo' },
  { name: 'University of Otago', logo: '/nzuniversities/University of Otago.png', alt: 'University of Otago Logo' },
  { name: 'University of Canterbury', logo: '/nzuniversities/University of Canterbury.png', alt: 'University of Canterbury Logo' },
  { name: 'Victoria University of Wellington', logo: '/nzuniversities/Victoria University of Wellington.png', alt: 'Victoria University of Wellington Logo' },
  { name: 'Massey University', logo: '/nzuniversities/Massey University.png', alt: 'Massey University Logo' },
  { name: 'University of Waikato', logo: '/nzuniversities/University of Waikato.png', alt: 'University of Waikato Logo' },
  { name: 'Auckland University of Technology', logo: '/nzuniversities/Auckland University of Technology.png', alt: 'AUT Logo' },
  { name: 'Lincoln University', logo: '/nzuniversities/Lincoln University.png', alt: 'Lincoln University Logo' },
  { name: 'Unitec Institute of Technology', logo: '/nzuniversities/Unitec Institute of Technology.png', alt: 'Unitec Logo' },
  { name: 'Otago Polytechnic', logo: '/nzuniversities/Otago Polytechnic.png', alt: 'Otago Polytechnic Logo' },
  { name: 'Ara Institute of Canterbury', logo: '/nzuniversities/Ara Institute of Canterbury.png', alt: 'Ara Institute Logo' },
  { name: 'Manukau Institute of Technology', logo: '/nzuniversities/Manukau Institute of Technology.png', alt: 'Manukau Institute of Technology Logo' },
  { name: 'Wellington Institute of Technology', logo: '/nzuniversities/Wellington Institute of Technology.png', alt: 'WelTec Logo' },
  { name: 'Eastern Institute of Technology', logo: '/nzuniversities/Eastern Institute of Technology.png', alt: 'EIT Logo' },
  { name: 'NorthTec', logo: '/nzuniversities/NorthTec.png', alt: 'NorthTec Logo' },
  { name: 'Whitireia New Zealand', logo: '/nzuniversities/Whitireia New Zealand.png', alt: 'Whitireia Logo' },
  { name: 'Southern Institute of Technology', logo: '/nzuniversities/Southern Institute of Technology.jpg', alt: 'SIT Logo' },
]

export const metadata: Metadata = {
  title: 'Assignment Help in New Zealand | Online Assignment Writing Service NZ',
  description: 'Get professional assignment help in New Zealand. We offer essay writing, dissertation help, thesis writing & online academic writing services for NZ students. 24/7 support & affordable prices.',
  keywords: [
    'assignment writing service nz',
    'assignment help nz',
    'online assignment help nz',
    'essay writing service nz',
    'dissertation writing service nz',
    'thesis writing service nz',
    'research paper writing service nz',
    'coursework writing service nz',
    'cheap assignment help nz',
    'urgent assignment help nz',
    'university assignment help nz',
    'college assignment help nz',
  ],
  authors: [{ name: 'AssignmentsPlus NZ' }],
  creator: 'AssignmentsPlus New Zealand',
  publisher: 'AssignmentsPlus Academic Services',
  alternates: {
    canonical: '/countries/nz',
  },
  openGraph: {
    title: 'Assignment Help in New Zealand | Online Assignment Writing Service NZ',
    description: 'Professional assignment writing service for NZ students. Expert help for universities & polytechnics across New Zealand.',
    url: '/countries/nz',
    siteName: 'AssignmentsPlus NZ',
    images: [
      {
        url: '/images/nz/og-assignment-help-nz.jpg',
        width: 1200,
        height: 630,
        alt: 'Assignment Help New Zealand - Expert Academic Writing Service',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Assignment Help New Zealand 🇳🇿',
    description: 'Professional assignment writing service for NZ students. 24/7 support & affordable prices.',
    images: ['/images/nz/twitter-assignment-help-nz.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: 'education',
  classification: 'Academic Writing Services New Zealand',
  other: {
    'geo.region': 'NZ',
    'geo.placename': 'New Zealand',
  },
}

// Structured data for rich results
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Assignment Help New Zealand',
  description: 'Premium assignment writing service for New Zealand students. Expert help from qualified academic writers.',
  url: 'https://assignmentsplus.co.nz/countries/nz',
  priceRange: '$$',
  email: 'help@assignmentsplus.co.nz',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NZ',
    addressLocality: 'Auckland',
    addressRegion: 'Auckland',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '8247',
    bestRating: '5',
    worstRating: '1',
  },
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is your assignment writing service legal in New Zealand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our service is 100% legal in New Zealand. We provide reference materials and model answers to help NZ students understand complex topics and improve their academic writing skills.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have New Zealand-based writers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We have expert writers familiar with New Zealand academic standards, including requirements from universities like University of Auckland, Otago, Canterbury, and Victoria University of Wellington.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of assignment help in NZ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our prices start from just $18 NZD per page. Contact us for an instant, accurate quote based on your specific requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you follow New Zealand academic guidelines?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all our writers are familiar with New Zealand academic standards, including APA 7th, Harvard, and specific requirements of NZ universities and polytechnics.',
      },
    },
  ],
}

export default function NewZealandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
                    <span className={styles.nzFlag}>🇳🇿</span>
                    <span className={styles.badgeText}>New Zealand's Trusted Academic Writing Service</span>
                  </div>
                  
                  <h1 className={styles.heroTitle}>
                    Assignment Help in New Zealand – <span className={styles.highlight}>24/7 Online Academic Writing Service</span>
                  </h1>
                  
                  <p className={styles.heroDescription}>
                    Help for NZ universities & international students. Get expert assistance with essays, dissertations, theses, and more from qualified academic writers.
                  </p>
                  
                  <div className={styles.heroStats}>
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>15K+</span>
                      <span className={styles.statLabel}>Happy Students</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>1000+</span>
                      <span className={styles.statLabel}>Subject Experts</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>4.9/5</span>
                      <span className={styles.statLabel}>Student Rating</span>
                    </div>
                  </div>
                  
                  <div className={styles.heroCta}>
                    <Link href="/contact" className={styles.primaryButton}>
                      Get Assignment Help Now
                    </Link>
                  </div>
                  
                  <div className={styles.trustBadges}>
                    <div className={styles.trustItem}>
                      <span className={styles.trustIcon}>✓</span>
                      <span>100% plagiarism-free</span>
                    </div>
                    <div className={styles.trustItem}>
                      <span className={styles.trustIcon}>✓</span>
                      <span>Affordable pricing</span>
                    </div>
                    <div className={styles.trustItem}>
                      <span className={styles.trustIcon}>✓</span>
                      <span>On-time delivery</span>
                    </div>
                  </div>
                </div>
                
                <div className={styles.heroVisual}>
                  <div className={styles.heroImageWrapper}>
                    <div className={styles.heroCard}>
                      <h3 className={styles.heroCardTitle}>Get Instant Help</h3>
                      <p className={styles.heroCardText}>Share your requirements and get a free quote</p>
                      <Link href="/contact" className={styles.primaryButton}>
                      Get Assignment Help Now
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
            <p className={styles.universitiesTagline}>Trusted by students from New Zealand's leading institutions</p>
            <div className={styles.universitiesMarquee}>
              <div className={styles.universitiesTrack}>
                {nzUniversities.map((uni, index) => (
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
                {nzUniversities.map((uni, index) => (
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
              Why Choose AssignmentsPlus for NZ Students
            </h2>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>👨‍🎓</div>
                <h3 className={styles.featureTitle}>Native subject experts</h3>
                <p className={styles.featureDescription}>
                  Qualified writers with expertise in New Zealand academic curriculum and standards
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🕒</div>
                <h3 className={styles.featureTitle}>24/7 support</h3>
                <p className={styles.featureDescription}>
                  Round-the-clock assistance for all your academic needs, including urgent deadlines
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📝</div>
                <h3 className={styles.featureTitle}>100% plagiarism-free</h3>
                <p className={styles.featureDescription}>
                  Every assignment is original and checked with advanced plagiarism detection tools
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>💰</div>
                <h3 className={styles.featureTitle}>Affordable pricing</h3>
                <p className={styles.featureDescription}>
                  Student-friendly prices starting from just $18 NZD per page
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⏱️</div>
                <h3 className={styles.featureTitle}>On-time delivery</h3>
                <p className={styles.featureDescription}>
                  We respect your deadlines and guarantee timely submission of all assignments
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔄</div>
                <h3 className={styles.featureTitle}>Free revisions</h3>
                <p className={styles.featureDescription}>
                  Unlimited revisions until you're completely satisfied with your work
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.services}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Our Services in New Zealand
            </h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive academic writing support for every need
            </p>
            
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Assignment Writing Service NZ</h3>
                <p className={styles.serviceDescription}>
                  Complete assignment help tailored to New Zealand academic standards
                </p>
                <span className={styles.servicePrice}>from $18 NZD</span>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Essay Writing Service NZ</h3>
                <p className={styles.serviceDescription}>
                  High-quality essays crafted by subject matter experts
                </p>
                <span className={styles.servicePrice}>from $20 NZD</span>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Dissertation Writing Service NZ</h3>
                <p className={styles.serviceDescription}>
                  Comprehensive dissertation support from proposal to completion
                </p>
                <span className={styles.servicePrice}>from $35 NZD</span>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Thesis Writing Service NZ</h3>
                <p className={styles.serviceDescription}>
                  Expert thesis writing and editing for postgraduate students
                </p>
                <span className={styles.servicePrice}>from $38 NZD</span>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Research Paper Writing Service NZ</h3>
                <p className={styles.serviceDescription}>
                  Well-researched academic papers with proper citations
                </p>
                <span className={styles.servicePrice}>from $22 NZD</span>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Coursework Writing Service NZ</h3>
                <p className={styles.serviceDescription}>
                  Comprehensive coursework assistance across all subjects
                </p>
                <span className={styles.servicePrice}>from $19 NZD</span>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Help Section */}
        <section className={styles.whoWeHelp}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Who We Help
            </h2>
            
            <div className={styles.whoWeHelpGrid}>
              <div className={styles.whoWeHelpCard}>
                <div className={styles.whoWeHelpIcon}>🏛️</div>
                <h3 className={styles.whoWeHelpTitle}>University students</h3>
                <p className={styles.whoWeHelpDescription}>
                  Undergraduate and postgraduate students from all NZ universities
                </p>
              </div>
              
              <div className={styles.whoWeHelpCard}>
                <div className={styles.whoWeHelpIcon}>📚</div>
                <h3 className={styles.whoWeHelpTitle}>College students</h3>
                <p className={styles.whoWeHelpDescription}>
                  Students from polytechnics, institutes of technology, and colleges
                </p>
              </div>
              
              <div className={styles.whoWeHelpCard}>
                <div className={styles.whoWeHelpIcon}>🌏</div>
                <h3 className={styles.whoWeHelpTitle}>International students</h3>
                <p className={styles.whoWeHelpDescription}>
                  Support for international students adapting to NZ academic standards
                </p>
              </div>
              
              <div className={styles.whoWeHelpCard}>
                <div className={styles.whoWeHelpIcon}>💼</div>
                <h3 className={styles.whoWeHelpTitle}>Working professionals</h3>
                <p className={styles.whoWeHelpDescription}>
                  Flexible assistance for those balancing work and study
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
            
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Share requirements</h3>
                <p className={styles.stepDescription}>
                  Tell us about your assignment, deadline, and specific requirements
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Get expert writer</h3>
                <p className={styles.stepDescription}>
                  We match you with a qualified subject expert for your assignment
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Receive plagiarism-free work</h3>
                <p className={styles.stepDescription}>
                  Get your completed assignment before the deadline
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantees Section */}
        <section className={styles.guarantees}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Our Guarantees
            </h2>
            
            <div className={styles.guaranteesGrid}>
              <div className={styles.guaranteeCard}>
                <div className={styles.guaranteeIcon}>🔒</div>
                <h3 className={styles.guaranteeTitle}>Confidentiality</h3>
                <p className={styles.guaranteeDescription}>
                  Your personal information is always kept secure and private
                </p>
              </div>
              
              <div className={styles.guaranteeCard}>
                <div className={styles.guaranteeIcon}>🔄</div>
                <h3 className={styles.guaranteeTitle}>Free revisions</h3>
                <p className={styles.guaranteeDescription}>
                  Unlimited revisions until you're completely satisfied
                </p>
              </div>
              
              <div className={styles.guaranteeCard}>
                <div className={styles.guaranteeIcon}>💰</div>
                <h3 className={styles.guaranteeTitle}>Money-back guarantee</h3>
                <p className={styles.guaranteeDescription}>
                  Full refund if we don't meet your requirements
                </p>
              </div>
              
              <div className={styles.guaranteeCard}>
                <div className={styles.guaranteeIcon}>📄</div>
                <h3 className={styles.guaranteeTitle}>Plagiarism-free content</h3>
                <p className={styles.guaranteeDescription}>
                  Every assignment is original and checked for plagiarism
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
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Is your assignment writing service legal in New Zealand?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, our service is 100% legal in New Zealand. We provide reference materials and model answers to help NZ students understand complex topics and improve their academic writing skills.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you have New Zealand-based writers?
                </h3>
                <p className={styles.faqAnswer}>
                  We have expert writers familiar with New Zealand academic standards, including requirements from universities like University of Auckland, Otago, Canterbury, and Victoria University of Wellington.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What is the cost of assignment help in NZ?
                </h3>
                <p className={styles.faqAnswer}>
                  Our prices start from just $18 NZD per page. Contact us for an instant, accurate quote based on your specific requirements.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you follow New Zealand academic guidelines?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, all our writers are familiar with New Zealand academic standards, including APA 7th, Harvard, and specific requirements of NZ universities and polytechnics.
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
                Ready to Excel in Your Studies?
              </h2>
              <p className={styles.ctaText}>
                Get professional assignment help tailored to New Zealand academic standards. Our experts are ready to assist you 24/7.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Get Help with My Assignment in NZ
                </Link>
              </div>
              <div className={styles.ctaTrust}>
                <span> Confidentiality guaranteed</span>
                <span> Free revisions</span>
                <span> Money-back guarantee</span>
                <span> Plagiarism-free content</span>
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