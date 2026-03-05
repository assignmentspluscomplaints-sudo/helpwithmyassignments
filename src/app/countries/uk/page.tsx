// File: src/app/countries/uk/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'UK Essay Writing Services | Trusted Academic Help for British Students',
  description: '🇬🇧 #1 essay writing services in the UK. 3000+ British academic writers covering London, Manchester, Birmingham & all UK unis. Plagiarism-free, on-time delivery, affordable prices. Get your free quote today!',
  openGraph: {
    title: 'UK Essay Writing Services | Trusted Academic Help for British Students',
    description: '🏆 Britain\'s most trusted academic writing service. Expert help for essays, assignments, dissertations, and more. Get top grades with our UK-based PhD writers.',
    url: 'https://yourwebsite.com/countries/uk',
    siteName: 'UK Academic Writing Services',
    locale: 'en_GB',
    images: [
      {
        url: '/images/uk/og-uk-academic-help.jpg',
        width: 1200,
        height: 630,
        alt: 'UK Essay Writing Services - Expert Academic Help',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK Essay Writing Services 🇬🇧',
    description: '🏆 #1 academic help in the UK. Trusted by 30,000+ British students. Get HD grades now!',
    images: ['/images/uk/twitter-uk-academic-help.jpg'],
    creator: '@ukacademichelp',
  },
  alternates: {
    canonical: '/countries/uk',
    languages: {
      'en-GB': '/countries/uk',
    },
  },
  keywords: [
    'essay writing services',
    'essay writing service',
    'best essay writing services',
    'cheap essay writing services',
    'assignment writing services',
    'assignment writing service',
    'assignment writer',
    'write my assignment',
    'dissertation writing services',
    'dissertation writing service',
    'dissertation help',
    'thesis writing services',
    'thesis writing service',
    'research paper writing services',
    'paper writing service',
    'paper writer',
    'academic writing services',
    'writing services for essays',
    'coursework writing services',
    'article writing services',
  ],
}

// Structured data for rich results
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'UK Academic Writing Services',
  description: 'Premium academic writing services for UK students. Expert help from British qualified writers across all UK universities.',
  url: 'https://yourwebsite.com/countries/uk',
  logo: 'https://yourwebsite.com/images/uk/logo.png',
  image: 'https://yourwebsite.com/images/uk/hero-uk-academic-help.jpg',
  priceRange: '££',
  telephone: '+44-20-1234-5678',
  email: 'help@ukacademicwriting.co.uk',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
    addressLocality: 'London',
    addressRegion: 'Greater London',
    postalCode: 'EC1A 1BB',
    streetAddress: '123 Fleet Street',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '51.5142',
    longitude: '-0.1101',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  sameAs: [
    'https://www.facebook.com/ukacademicwriting',
    'https://www.instagram.com/ukacademichelp',
    'https://www.linkedin.com/company/uk-academic-writing',
    'https://twitter.com/ukacademichelp',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Academic Writing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Essay Writing Service',
          description: 'Professional essay writing help for UK students',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dissertation Writing Service',
          description: 'PhD-level dissertation writing assistance',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Assignment Writing Service',
          description: 'Comprehensive assignment writing support',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '12754',
    bestRating: '5',
    worstRating: '1',
    itemReviewed: {
      '@type': 'Service',
      name: 'UK Academic Writing Service',
    },
  },
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://yourwebsite.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'United Kingdom',
      item: 'https://yourwebsite.com/countries/uk',
    },
  ],
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are your essay writing services legal in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our services are 100% legal in the UK. We provide reference materials and model answers to help British students understand complex topics and improve their academic writing skills.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have UK-based writers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! We have 3000+ UK-qualified PhD writers across Britain, including experts from Russell Group universities like Oxford, Cambridge, Imperial College London, and UCL.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of essay writing services in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our prices start from just £13.50 per page for undergraduate essays. We offer competitive rates while maintaining high quality — making us one of the best value cheap essay writing services in the UK.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you follow UK academic guidelines?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all our writers are familiar with UK academic standards, including Harvard (UK style), APA 7th, MLA, OSCOLA for law, and specific requirements of British universities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you handle urgent assignments in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we specialise in urgent assignments with deadlines as tight as 3 hours. Our UK team works 24/7 to ensure your assignment is delivered on time, every time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide plagiarism-free work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every assignment comes with a free Turnitin UK plagiarism report. We guarantee 100% original content tailored to your requirements with no AI-generated text.',
      },
    },
  ],
}

// UK Universities Data (from the provided public folder)
const ukUniversities = [
  { name: 'University of Birmingham', logo: '/ukuniversities/University of Birmingham.png', alt: 'University of Birmingham Logo' },
  { name: 'University of Manchester', logo: '/ukuniversities/University of Manchester.png', alt: 'University of Manchester Logo' },
  { name: 'University of Nottingham', logo: '/ukuniversities/University of Nottingham.png', alt: 'University of Nottingham Logo' },
  { name: 'University of Leicester', logo: '/ukuniversities/University of Leicester.png', alt: 'University of Leicester Logo' },
  { name: 'University of Hertfordshire', logo: '/ukuniversities/University of Hertfordshire.png', alt: 'University of Hertfordshire Logo' },
  { name: 'University of Greenwich', logo: '/ukuniversities/University of Greenwich.png', alt: 'University of Greenwich Logo' },
  { name: 'University of East London', logo: '/ukuniversities/University of East London.png', alt: 'University of East London Logo' },
  { name: 'University of the West of England', logo: '/ukuniversities/University of the West of England.png', alt: 'UWE Bristol Logo' },
  { name: 'University of Westminster', logo: '/ukuniversities/University of Westminster.png', alt: 'University of Westminster Logo' },
  { name: 'University of Bedfordshire', logo: '/ukuniversities/University of Bedfordshire.png', alt: 'University of Bedfordshire Logo' },
  { name: 'University of Roehampton', logo: '/ukuniversities/University of Roehampton.png', alt: 'University of Roehampton Logo' },
  { name: 'University of Salford', logo: '/ukuniversities/University of Salford.png', alt: 'University of Salford Logo' },
  { name: 'Northumbria University', logo: '/ukuniversities/Northumbria University.png', alt: 'Northumbria University Logo' },
  { name: 'Middlesex University', logo: '/ukuniversities/Middlesex University.png', alt: 'Middlesex University Logo' },
  { name: 'De Montfort University', logo: '/ukuniversities/De Montfort University.png', alt: 'De Montfort University Logo' },
  { name: 'Coventry University', logo: '/ukuniversities/Coventry University.png', alt: 'Coventry University Logo' },
  { name: 'Birmingham City University', logo: '/ukuniversities/Birmingham City University.png', alt: 'Birmingham City University Logo' },
]

// UK Cities
const ukCities = [
  { name: 'London', region: 'Greater London' },
  { name: 'Manchester', region: 'Greater Manchester' },
  { name: 'Birmingham', region: 'West Midlands' },
  { name: 'Leeds', region: 'West Yorkshire' },
  { name: 'Nottingham', region: 'Nottinghamshire' },
  { name: 'Sheffield', region: 'South Yorkshire' },
  { name: 'Leicester', region: 'Leicestershire' },
  { name: 'Coventry', region: 'West Midlands' },
  { name: 'Bristol', region: 'Bristol' },
  { name: 'Liverpool', region: 'Merseyside' },
  { name: 'Newcastle', region: 'Tyne and Wear' },
  { name: 'Glasgow', region: 'Glasgow' },
  { name: 'Edinburgh', region: 'Edinburgh' },
  { name: 'Cardiff', region: 'Cardiff' },
  { name: 'Belfast', region: 'Belfast' },
  { name: 'Oxford', region: 'Oxfordshire' },
  { name: 'Cambridge', region: 'Cambridgeshire' },
]

// Services Data
const servicesData = [
  { title: 'Essay Writing Service', description: 'High-quality essays for UK universities on any topic.', href: '/essay-writing-service', price: 'from £13.50' },
  { title: 'Assignment Writing Service', description: 'Complete assignment help from UK experts.', href: '/assignment-writing-service', price: 'from £15.00' },
  { title: 'Dissertation Writing Service', description: 'PhD-level dissertation and thesis assistance.', href: '/dissertation-writing-service', price: 'from £30.00' },
  { title: 'Research Paper Writing Service', description: 'Comprehensive research papers with proper citations.', href: '/research-paper-writing', price: 'from £18.50' },
  { title: 'Coursework Writing Service', description: 'Subject-specific coursework help for UK students.', href: '/coursework-help', price: 'from £14.00' },
  { title: 'Academic Article Writing Service', description: 'Journal-ready articles and literature reviews.', href: '/article-writing-services', price: 'from £22.00' },
]

// Process Steps
const processSteps = [
  { step: '1', title: 'Place Your Order', description: 'Fill in your requirements, deadline, and upload any materials.' },
  { step: '2', title: 'Get Matched with a UK Writer', description: 'We assign a subject expert from our UK team who matches your needs.' },
  { step: '3', title: 'Review & Download', description: 'Receive your completed work, request revisions if needed, and download.' },
]


export default function UKPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      {/* Navbar */}
      <Navbar />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div className={styles.badge}>
                  <span className={styles.ukFlag}>🇬🇧</span>
                  <span className={styles.badgeText}>UK's Most Trusted Academic Writing Service</span>
                </div>
                <h1 className={styles.heroTitle}>
                  Premium <span className={styles.highlight}>Essay Writing Services</span> for UK Students
                </h1>
                <p className={styles.heroDescription}>
                  Get top grades with our expert academic writing services. 
                  Whether you need essay help, assignment writing, or dissertation support, 
                  our UK-based PhD writers deliver 100% original, plagiarism-free work on time.
                </p>
                <div className={styles.heroStats}>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>30K+</span>
                    <span className={styles.statLabel}>UK Students</span>
                  </div>
                  <div className={styles.statDivider}></div>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>3000+</span>
                    <span className={styles.statLabel}>UK Experts</span>
                  </div>
                  <div className={styles.statDivider}></div>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>4.9/5</span>
                    <span className={styles.statLabel}>Trustpilot</span>
                  </div>
                </div>
                <div className={styles.heroCta}>
                  <Link href="/contact" className={styles.primaryButton}>Get Help Now</Link>
                  <Link href="#pricing" className={styles.secondaryButton}>View Prices</Link>
                </div>
                <div className={styles.trustBadges}>
                  <span className={styles.trustItem}>✓ 100% Plagiarism-Free</span>
                  <span className={styles.trustItem}>✓ UK Writers Only</span>
                  <span className={styles.trustItem}>✓ Free Revisions</span>
                </div>
              </div>
              <div className={styles.heroImagePlaceholder}>
                <div className={styles.heroCard}>
                  <p className={styles.heroCardTitle}>Get Your Free Quote</p>
                  <p className={styles.heroCardText}>Starting from just £13.50/page</p>
                  <div className={styles.heroCardFeatures}>
                    <span>✓ 3000+ UK PhD writers</span>
                    <span>✓ On-time delivery</span>
                    <span>✓ Free Turnitin report</span>
                  </div>
                  <Link href="/contact" className={styles.heroCardButton}>Order Now →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Universities Section */}
        <section className={styles.universities}>
          <div className={styles.container}>
            <p className={styles.universitiesTagline}>Trusted by students from UK's leading universities</p>
            <div className={styles.universitiesMarquee}>
              <div className={styles.universitiesTrack}>
                {ukUniversities.map((uni, index) => (
                  <div key={index} className={styles.universityLogo}>
                    <Image
                      src={uni.logo}
                      alt={uni.alt}
                      width={100}
                      height={50}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                ))}
                {ukUniversities.map((uni, index) => (
                  <div key={`dup-${index}`} className={styles.universityLogo}>
                    <Image
                      src={uni.logo}
                      alt={uni.alt}
                      width={100}
                      height={50}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className={styles.whyChoose}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Why UK Students Choose Our Academic Writing Services</h2>
            <p className={styles.sectionSubtitle}>We understand British academic standards and deliver excellence every time.</p>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🇬🇧</div>
                <h3>British Writers</h3>
                <p>All our writers are UK-based with degrees from Russell Group universities. They understand the British education system inside out.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📝</div>
                <h3>Plagiarism-Free Guarantee</h3>
                <p>Every paper is checked with Turnitin and comes with a free plagiarism report. We never reuse or resell work.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⏱️</div>
                <h3>On-Time Delivery</h3>
                <p>We respect your deadlines. 98% of our assignments are delivered before the due date, even urgent 3-hour orders.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>💰</div>
                <h3>Cheap Essay Writing Services</h3>
                <p>Quality doesn't have to break the bank. We offer competitive prices starting from £13.50/page without compromising on quality.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔄</div>
                <h3>Unlimited Revisions</h3>
                <p>We offer free revisions until you're 100% satisfied. Your success is our priority.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🌙</div>
                <h3>24/7 UK Support</h3>
                <p>Our British-based support team is available round the clock to answer your questions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.services}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Comprehensive Academic Writing Services</h2>
            <p className={styles.sectionSubtitle}>From essays to dissertations, we've got you covered.</p>
            <div className={styles.servicesGrid}>
              {servicesData.map((service, index) => (
                <Link key={index} href={service.href} className={styles.serviceCard}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className={styles.servicePrice}>{service.price}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className={styles.process}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>How Our Essay Writing Service Works</h2>
            <p className={styles.sectionSubtitle}>Simple, fast, and transparent process.</p>
            <div className={styles.processGrid}>
              {processSteps.map((step, index) => (
                <div key={index} className={styles.processCard}>
                  <div className={styles.stepNumber}>{step.step}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Guarantee */}
        <section className={styles.guarantee}>
          <div className={styles.container}>
            <div className={styles.guaranteeContent}>
              <h2 className={styles.sectionTitle}>100% Plagiarism-Free & Quality Guaranteed</h2>
              <p className={styles.guaranteeText}>
                When you use our <strong>essay writing services</strong>, you're not just getting any paper — you're getting a meticulously researched, 
                properly referenced, and academically sound piece of work. Every assignment goes through multiple quality checks:
              </p>
              <ul className={styles.guaranteeList}>
                <li>✓ Thorough research using UK academic databases</li>
                <li>✓ Proper UK English spelling and grammar</li>
                <li>✓ Correct referencing (Harvard, APA, OSCOLA, MHRA, etc.)</li>
                <li>✓ Plagiarism scan with Turnitin</li>
                <li>✓ Quality review by senior editors</li>
                <li>✓ Compliance with UK university guidelines</li>
              </ul>
              <p className={styles.guaranteeNote}>
                Our <strong>best essay writing services</strong> ensure you submit work that impresses your professors.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className={styles.pricing}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Affordable Prices for UK Students</h2>
            <p className={styles.sectionSubtitle}>
              We offer <strong>cheap essay writing services</strong> without compromising on quality. 
              Get the best value for your money.
            </p>
            <div className={styles.pricingGrid}>
              <div className={styles.pricingCard}>
                <h3>Undergraduate</h3>
                <p className={styles.price}>£13.50<span>/page</span></p>
                <ul>
                  <li>2:1 or First Class standard</li>
                  <li>UK writer assigned</li>
                  <li>Free plagiarism report</li>
                  <li>7-day free revisions</li>
                </ul>
                <Link href="/contact" className={styles.pricingButton}>Order Now</Link>
              </div>
              <div className={styles.pricingCard}>
                <h3>Master's</h3>
                <p className={styles.price}>£18.00<span>/page</span></p>
                <ul>
                  <li>Distinction standard</li>
                  <li>Master's level UK expert</li>
                  <li>Free plagiarism report</li>
                  <li>14-day free revisions</li>
                </ul>
                <Link href="/contact" className={styles.pricingButton}>Order Now</Link>
              </div>
              <div className={styles.pricingCard}>
                <h3>PhD</h3>
                <p className={styles.price}>£30.00<span>/page</span></p>
                <ul>
                  <li>Doctoral research level</li>
                  <li>PhD qualified writer</li>
                  <li>Free plagiarism report</li>
                  <li>30-day free revisions</li>
                </ul>
                <Link href="/contact" className={styles.pricingButton}>Order Now</Link>
              </div>
            </div>
          </div>
        </section>

        {/* UK Cities Section */}
        <section className={styles.ukCities}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Academic Writing Help Across the UK</h2>
            <p className={styles.sectionSubtitle}>
              Our <strong>assignment writing services</strong> are available to students in every major UK city.
            </p>
            <div className={styles.citiesGrid}>
              {ukCities.map((city, index) => (
                <div key={index} className={styles.cityCard}>
                  <span className={styles.cityName}>{city.name}</span>
                  <span className={styles.cityRegion}>{city.region}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faq}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.sectionSubtitle}>Everything you need to know about our UK academic writing services.</p>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>Are your essay writing services legal in the UK?</h3>
                <p>Yes, our services are 100% legal in the UK. We provide reference materials and model answers to help British students understand complex topics and improve their academic writing skills.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do you have UK-based writers?</h3>
                <p>Absolutely! We have 3000+ UK-qualified PhD writers across Britain, including experts from Russell Group universities like Oxford, Cambridge, Imperial College London, and UCL.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What is the cost of essay writing services in the UK?</h3>
                <p>Our prices start from just £13.50 per page for undergraduate essays. We offer competitive rates while maintaining high quality — making us one of the best value cheap essay writing services in the UK.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do you follow UK academic guidelines?</h3>
                <p>Yes, all our writers are familiar with UK academic standards, including Harvard (UK style), APA 7th, MLA, OSCOLA for law, and specific requirements of British universities.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can you handle urgent assignments in the UK?</h3>
                <p>Yes, we specialise in urgent assignments with deadlines as tight as 3 hours. Our UK team works 24/7 to ensure your assignment is delivered on time, every time.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do you provide plagiarism-free work?</h3>
                <p>Every assignment comes with a free Turnitin UK plagiarism report. We guarantee 100% original content tailored to your requirements with no AI-generated text.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className={styles.cta}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Improve Your Grades?</h2>
              <p className={styles.ctaText}>
                Join 30,000+ UK students who trust us with their academic success. 
                Get a custom-written paper from our <strong>best essay writing services</strong> today.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>Get Your Free Quote</Link>
                <a href="tel:+918307449029" className={styles.ctaSecondary}>Call Us: +91 830 744 9029</a>
              </div>
              <div className={styles.ctaTrust}>
                <span>100% Money-Back Guarantee</span>
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