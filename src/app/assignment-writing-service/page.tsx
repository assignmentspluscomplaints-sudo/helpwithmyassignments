// src/app/assignment-writing-service/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// SEO Metadata for Assignment Writing Service Page
export const metadata: Metadata = {
  title: 'Assignment Writing Service | Expert Academic Help',
  description: 'Need professional assignment help? Our expert writers provide comprehensive assistance with essays, research papers, dissertations, case studies, and more across all subjects. 100% original, well-researched assignments. Qualified experts. 24/7 support.',
  keywords: [
    'assignment writing service',
    'assignment help',
    'essay writing service',
    'research paper help',
    'dissertation help',
    'case study help',
    'homework help',
    'online assignment help',
    'academic writing service',
    'college assignment help',
    'university assignment help',
    'assignment writer',
    'write my assignment',
    'assignment helper',
    'assignment assistance',
    'urgent assignment help',
    'cheap assignment help',
    'professional assignment writers',
    'assignment writing experts',
    'academic assignment help',
    'custom assignment writing',
    'assignment writing online',
    'best assignment help',
    'assignment writing company'
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
    canonical: '/assignment-writing-service',
  },
  openGraph: {
    title: 'Assignment Writing Service | Expert Academic Help',
    description: '📚 Need professional assignment help? Our expert writers provide comprehensive assistance with essays, research papers, dissertations, case studies, and more across all subjects. 100% original work. 24/7 support.',
    url: '/assignment-writing-service',
    siteName: 'HelpWithMyAssignments',
    images: [
      {
        url: '/images/og-assignment-service.jpg',
        width: 1200,
        height: 630,
        alt: 'Assignment Writing Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Assignment Writing Service',
    description: '📚 Expert assignment help across all subjects. Get your perfect assignment today!',
    images: ['/images/twitter-assignment-service.jpg'],
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
  classification: 'Assignment Writing Services',
}

// Structured Data for Rich Results - Service Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://helpassignments.com/assignment-writing-service",
  "name": "Assignment Writing Service",
  "description": "Professional assignment help from qualified experts. Comprehensive assistance with essays, research papers, dissertations, case studies, and all academic assignments across every subject. Each assignment is crafted from scratch, follows your specific guidelines, and adheres to required formatting styles.",
  "url": "https://helpassignments.com/assignment-writing-service",
  "provider": {
    "@type": "Organization",
    "name": "HelpWithMyAssignments",
    "url": "https://helpassignments.com"
  },
  "serviceType": "Assignment Writing Service",
  "areaServed": {
    "@type": "Country",
    "name": "Multiple Countries"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Assignment Types",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Essay Writing Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Research Paper Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dissertation Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Case Study Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Homework Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Coursework Help"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "8765",
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
      "name": "Assignment Writing Service",
      "item": "https://helpassignments.com/assignment-writing-service"
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
      "name": "What types of assignments do you write?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We write all types of academic assignments including essays, research papers, dissertations, theses, case studies, coursework, homework, lab reports, presentations, term papers, capstone projects, literature reviews, annotated bibliographies, reflective journals, and more across all subjects and academic levels."
      }
    },
    {
      "@type": "Question",
      "name": "What subjects do you cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We cover all academic subjects including Business, Management, Marketing, Finance, Accounting, Economics, Law, Nursing, Medicine, Psychology, Sociology, Education, History, Literature, Philosophy, Computer Science, Engineering, Mathematics, Statistics, Physics, Chemistry, Biology, Environmental Science, Political Science, International Relations, and many more."
      }
    },
    {
      "@type": "Question",
      "name": "Who writes my assignment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your assignment will be written by a qualified expert with advanced degrees (Bachelor's, Master's, or PhD) in your specific subject area. Our writers include academics, researchers, and industry professionals with extensive experience in academic writing."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide plagiarism-free work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every assignment is crafted from scratch based on your specific requirements. We never resell or recycle papers. All work is checked with advanced plagiarism detection software, and we provide a free plagiarism report upon request."
      }
    },
    {
      "@type": "Question",
      "name": "What citation styles do you use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are proficient in all major citation styles including APA 7th, MLA 9th, Chicago/Turabian, Harvard, Vancouver, IEEE, AMA, and discipline-specific styles. We ensure perfect formatting of in-text citations and reference lists."
      }
    },
    {
      "@type": "Question",
      "name": "Can you handle urgent deadlines?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in urgent assignments with deadlines as tight as 3-6 hours. Our experts work efficiently to deliver high-quality work within your time constraints without compromising on quality."
      }
    }
  ]
}

// Assignment types data
const assignmentTypes = [
  {
    title: "Essays",
    description: "Argumentative, descriptive, narrative, expository, persuasive, analytical, compare and contrast, and more.",
    icon: "📝",
    link: "/essay-writing-service"
  },
  {
    title: "Research Papers",
    description: "Term papers, capstone projects, journal articles, literature reviews, and research proposals.",
    icon: "📚",
    link: "/research-paper-writing-service"
  },
  {
    title: "Dissertations & Theses",
    description: "PhD dissertations, Master's theses, proposals, and defense preparation.",
    icon: "🎓",
    link: "/dissertation-writing-service"
  },
  {
    title: "Case Studies",
    description: "Business, psychology, nursing, law, medical, and marketing case study analyses.",
    icon: "📊",
    link: "/case-study-writing-service"
  },
  {
    title: "Coursework",
    description: "Discussion posts, response papers, lab reports, presentations, and weekly assignments.",
    icon: "📅",
    link: "/coursework-help"
  },
  {
    title: "Homework",
    description: "Problem sets, exercises, worksheets, and assignments across all subjects.",
    icon: "✏️"
  },
  {
    title: "Lab Reports",
    description: "Scientific lab reports with methodology, data analysis, results, and discussion.",
    icon: "🔬"
  },
  {
    title: "Presentations",
    description: "PowerPoint decks, speaker notes, visual aids, and presentation scripts.",
    icon: "📊"
  },
  {
    title: "Literature Reviews",
    description: "Systematic reviews, annotated bibliographies, and theoretical frameworks.",
    icon: "📖"
  },
  {
    title: "Reflective Journals",
    description: "Personal reflections, learning journals, and reflective essays.",
    icon: "💭"
  },
  {
    title: "Annotated Bibliographies",
    description: "Summaries and evaluations of sources with proper citations.",
    icon: "📋"
  },
  {
    title: "Critical Analyses",
    description: "Critical reviews, article critiques, and analytical evaluations.",
    icon: "🔍"
  }
]

// Subject areas data
const subjectAreas = [
  { name: "Business & Management", icon: "💼" },
  { name: "Marketing", icon: "📊" },
  { name: "Finance & Accounting", icon: "💰" },
  { name: "Economics", icon: "📈" },
  { name: "Law", icon: "⚖️" },
  { name: "Nursing & Healthcare", icon: "🏥" },
  { name: "Medicine", icon: "🩺" },
  { name: "Psychology", icon: "🧠" },
  { name: "Sociology", icon: "👥" },
  { name: "Education", icon: "🎓" },
  { name: "History", icon: "🏛️" },
  { name: "Literature", icon: "📚" },
  { name: "Philosophy", icon: "🤔" },
  { name: "Political Science", icon: "🏛️" },
  { name: "International Relations", icon: "🌐" },
  { name: "Computer Science", icon: "💻" },
  { name: "Engineering", icon: "⚙️" },
  { name: "Mathematics", icon: "📐" },
  { name: "Statistics", icon: "📊" },
  { name: "Physics", icon: "⚛️" },
  { name: "Chemistry", icon: "🧪" },
  { name: "Biology", icon: "🔬" },
  { name: "Environmental Science", icon: "🌍" }
]

// Academic levels data
const academicLevels = [
  { level: "High School", description: "Essays, homework, and projects for high school students" },
  { level: "College / Undergraduate", description: "Essays, research papers, and coursework for college students" },
  { level: "Master's / Graduate", description: "Theses, research papers, and advanced coursework" },
  { level: "PhD / Doctoral", description: "Dissertations, proposals, and defense preparation" }
]

// Features data
const features = [
  {
    title: "Qualified Experts",
    description: "All our writers have advanced degrees in their fields and extensive academic writing experience.",
    icon: "🎓"
  },
  {
    title: "100% Original Content",
    description: "Every assignment is written from scratch. Free plagiarism report included with every order.",
    icon: "✅"
  },
  {
    title: "On-Time Delivery",
    description: "We respect your deadlines. 98% of orders are delivered before the due date.",
    icon: "⏰"
  },
  {
    title: "Unlimited Revisions",
    description: "We offer unlimited free revisions until you're completely satisfied with your assignment.",
    icon: "🔄"
  },
  {
    title: "24/7 Support",
    description: "Our customer support team is available around the clock to answer your questions.",
    icon: "💬"
  },
  {
    title: "Confidential & Secure",
    description: "Your personal information and assignment details are kept strictly confidential.",
    icon: "🔒"
  }
]

// Citation styles data
const citationStyles = [
  { name: "APA 7th Edition", disciplines: "Psychology, Education, Nursing, Social Sciences" },
  { name: "MLA 9th Edition", disciplines: "Humanities, Literature, Arts" },
  { name: "Chicago/Turabian", disciplines: "History, Business, Fine Arts" },
  { name: "Harvard", disciplines: "Business, Economics, Social Sciences" },
  { name: "Vancouver", disciplines: "Medicine, Biomedical Sciences" },
  { name: "IEEE", disciplines: "Engineering, Computer Science" },
  { name: "AMA", disciplines: "Medicine, Health Sciences" },
  { name: "Bluebook", disciplines: "Law" }
]

export default function AssignmentWritingServicePage() {
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
              <div className={styles.heroIcon}>📚</div>
              <h1 className={styles.heroTitle}>
                Professional <span className={styles.highlight}>Assignment Writing Service</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Need expert help with your academic assignments? Our professional assignment writing service provides comprehensive assistance with essays, research papers, dissertations, case studies, and more across all subjects. Each assignment is <strong>crafted from scratch, thoroughly researched, and meticulously formatted</strong> to meet your specific requirements.
              </p>
              <div className={styles.heroCta}>
                <Link href="#pricing" className={styles.primaryButton}>
                  Explore Our Services
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Order Your Assignment
                </Link>
              </div>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>Qualified Experts</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>98%</span>
                  <span className={styles.statLabel}>On-Time Delivery</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>4.9/5</span>
                  <span className={styles.statLabel}>Student Rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Assignment Types Section */}
        <section id="pricing" className={styles.assignmentTypes}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Types of Assignments We Write
            </h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive assistance for every academic need
            </p>
            
            <div className={styles.assignmentTypesGrid}>
              {assignmentTypes.map((type, index) => (
                <div key={index} className={styles.assignmentTypeCard}>
                  <div className={styles.assignmentTypeIcon}>{type.icon}</div>
                  <h3 className={styles.assignmentTypeTitle}>{type.title}</h3>
                  <p className={styles.assignmentTypeDescription}>{type.description}</p>
                  {type.link ? (
                    <Link href={type.link} className={styles.assignmentTypeLink}>
                      Learn More →
                    </Link>
                  ) : (
                    <Link href="/contact" className={styles.assignmentTypeLink}>
                      Get Help →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subject Areas Section */}
        <section className={styles.subjectAreas}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Subjects We Cover
            </h2>
            <p className={styles.sectionSubtitle}>
              Experts in every academic discipline
            </p>
            
            <div className={styles.subjectsGrid}>
              {subjectAreas.map((subject, index) => (
                <div key={index} className={styles.subjectCard}>
                  <div className={styles.subjectIcon}>{subject.icon}</div>
                  <h3 className={styles.subjectName}>{subject.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Levels Section */}
        <section className={styles.academicLevels}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              All Academic Levels
            </h2>
            <p className={styles.sectionSubtitle}>
              From high school to PhD — we support students at every stage
            </p>
            
            <div className={styles.levelsGrid}>
              {academicLevels.map((level, index) => (
                <div key={index} className={styles.levelCard}>
                  <h3 className={styles.levelTitle}>{level.level}</h3>
                  <p className={styles.levelDescription}>{level.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Citation Styles Section */}
        <section className={styles.citationStyles}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Citation Styles We Master
            </h2>
            <p className={styles.sectionSubtitle}>
              Perfect formatting in any style you need
            </p>
            
            <div className={styles.citationGrid}>
              {citationStyles.map((style, index) => (
                <div key={index} className={styles.citationCard}>
                  <h3 className={styles.citationName}>{style.name}</h3>
                  <p className={styles.citationDisciplines}>{style.disciplines}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Why Students Choose Us
            </h2>
            <p className={styles.sectionSubtitle}>
              The trusted choice for thousands of students worldwide
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
              Get your perfect assignment in 4 simple steps
            </p>
            
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Submit Requirements</h3>
                <p className={styles.stepDescription}>
                  Fill out our order form with your assignment details, including topic, length, deadline, formatting style, and any specific instructions.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Get Matched with Expert</h3>
                <p className={styles.stepDescription}>
                  We match you with a qualified expert who holds an advanced degree in your subject area and has experience with similar assignments.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Review & Revise</h3>
                <p className={styles.stepDescription}>
                  Receive your draft, review it carefully, and request any revisions. We offer unlimited free revisions until you're completely satisfied.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3 className={styles.stepTitle}>Download & Submit</h3>
                <p className={styles.stepDescription}>
                  Download your final, polished assignment. It's ready to submit and guaranteed to meet your requirements and academic standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              What Students Say
            </h2>
            <p className={styles.sectionSubtitle}>
              Trusted by thousands of students worldwide
            </p>
            
            <div className={styles.testimonialsGrid}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "I was struggling with my research paper and had a tight deadline. The expert delivered an amazing paper with perfect APA formatting. Got an A! Will definitely use again."
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Sarah J.</div>
                  <div className={styles.authorUni}>Psychology Major</div>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "The case study analysis was comprehensive and applied all the right frameworks. My professor was impressed with the depth of analysis. Highly recommended!"
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Michael T.</div>
                  <div className={styles.authorUni}>MBA Student</div>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "I needed help with my nursing care plan, and the expert delivered exactly what I needed. Accurate medical terminology, proper format, and on time. Lifesaver!"
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Jennifer L.</div>
                  <div className={styles.authorUni}>Nursing Student</div>
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
              Everything you need to know about our assignment writing service
            </p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What types of assignments do you write?
                </h3>
                <p className={styles.faqAnswer}>
                  We write all types of academic assignments including essays, research papers, dissertations, theses, case studies, coursework, homework, lab reports, presentations, term papers, capstone projects, literature reviews, annotated bibliographies, reflective journals, and more across all subjects and academic levels.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What subjects do you cover?
                </h3>
                <p className={styles.faqAnswer}>
                  We cover all academic subjects including Business, Management, Marketing, Finance, Accounting, Economics, Law, Nursing, Medicine, Psychology, Sociology, Education, History, Literature, Philosophy, Computer Science, Engineering, Mathematics, Statistics, Physics, Chemistry, Biology, Environmental Science, Political Science, International Relations, and many more.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Who writes my assignment?
                </h3>
                <p className={styles.faqAnswer}>
                  Your assignment will be written by a qualified expert with advanced degrees (Bachelor's, Master's, or PhD) in your specific subject area. Our writers include academics, researchers, and industry professionals with extensive experience in academic writing.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you provide plagiarism-free work?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, every assignment is crafted from scratch based on your specific requirements. We never resell or recycle papers. All work is checked with advanced plagiarism detection software, and we provide a free plagiarism report upon request.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What citation styles do you use?
                </h3>
                <p className={styles.faqAnswer}>
                  We are proficient in all major citation styles including APA 7th, MLA 9th, Chicago/Turabian, Harvard, Vancouver, IEEE, AMA, and discipline-specific styles. We ensure perfect formatting of in-text citations and reference lists.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you handle urgent deadlines?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we specialize in urgent assignments with deadlines as tight as 3-6 hours. Our experts work efficiently to deliver high-quality work within your time constraints without compromising on quality.
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
                Ready to Ace Your Assignment?
              </h2>
              <p className={styles.ctaText}>
                Whether you need an essay, research paper, dissertation, or any other assignment — our expert writers are ready to help. Get 100% original, well-researched work tailored to your requirements.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Order Your Assignment Now
                </Link>
                <Link href="#pricing" className={styles.ctaSecondary}>
                  View Assignment Types
                </Link>
              </div>
              <div className={styles.ctaTrust}>
                <span>100% Money Back Guarantee</span>
                <span>Free Plagiarism Report</span>
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