// src/app/services/research-paper-writing/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// SEO Metadata for Research Paper Writing Service Page
export const metadata: Metadata = {
  title: 'Research Paper Writing Service | Expert Academic Research Help',
  description: 'Need professional research paper writing help? Our expert writers provide comprehensive assistance with term papers, capstone projects, journal articles, literature reviews, and more. 100% original, well-researched papers. Qualified academics. 24/7 support.',
  keywords: [
    'research paper writing service',
    'research paper help',
    'term paper writing service',
    'capstone project help',
    'journal article writing',
    'literature review help',
    'research proposal help',
    'academic research paper',
    'college research paper',
    'university research paper',
    'graduate research paper',
    'research paper writer',
    'write my research paper',
    'research paper assistance',
    'custom research paper',
    'research paper help online',
    'research paper writing help',
    'research paper service',
    'academic writing service',
    'scholarly writing help',
    'research paper format',
    'APA research paper',
    'MLA research paper',
    'Chicago style research paper',
    'Harvard referencing paper'
  ],
  authors: [{ name: 'HelpWithMyAssignments Research Division' }],
  creator: 'HelpWithMyAssignments',
  publisher: 'HelpWithMyAssignments',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/services/research-paper-writing',
  },
  openGraph: {
    title: 'Research Paper Writing Service | Expert Academic Research Help',
    description: '📚 Need professional research paper writing help? Our expert writers provide comprehensive assistance with term papers, capstone projects, journal articles, literature reviews, and more. 100% original, well-researched papers.',
    url: '/services/research-paper-writing',
    siteName: 'HelpWithMyAssignments',
    images: [
      {
        url: '/images/og-research-paper-service.jpg',
        width: 1200,
        height: 630,
        alt: 'Research Paper Writing Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Research Paper Writing Service',
    description: '📚 Expert research paper help. Get your perfect research paper today!',
    images: ['/images/twitter-research-paper-service.jpg'],
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
  classification: 'Research Paper Writing Services',
}

// Structured Data for Rich Results - Service Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://helpassignments.com/services/research-paper-writing",
  "name": "Research Paper Writing Service",
  "description": "Professional research paper writing help from qualified academics. Comprehensive assistance with term papers, capstone projects, journal articles, literature reviews, research proposals, and all types of research papers across every academic discipline. Each paper is crafted from scratch, follows your specific guidelines, and adheres to required formatting styles.",
  "url": "https://helpassignments.com/services/research-paper-writing",
  "provider": {
    "@type": "Organization",
    "name": "HelpWithMyAssignments",
    "url": "https://helpassignments.com"
  },
  "serviceType": "Research Paper Writing Service",
  "areaServed": {
    "@type": "Country",
    "name": "Multiple Countries"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Research Paper Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Term Paper Writing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Capstone Project Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Journal Article Writing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Literature Review"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Research Proposal"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Research Paper Editing"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "3678",
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
      "name": "Research Paper Writing",
      "item": "https://helpassignments.com/services/research-paper-writing"
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
      "name": "What types of research papers do you write?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We write all types of research papers including term papers, capstone projects, journal articles, conference papers, research proposals, literature reviews, case studies, argumentative research papers, analytical research papers, empirical studies, and theoretical papers across all academic disciplines."
      }
    },
    {
      "@type": "Question",
      "name": "Do you use credible academic sources?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we exclusively use credible, peer-reviewed sources from academic databases such as JSTOR, PubMed, Scopus, Web of Science, Google Scholar, ProQuest, and discipline-specific databases. All sources are properly cited in your required format."
      }
    },
    {
      "@type": "Question",
      "name": "Who writes my research paper?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your research paper will be written by a qualified expert with advanced degrees (Master's or PhD) in your subject area. Our writers include academics, researchers, and subject matter experts with extensive experience in scholarly writing and research."
      }
    },
    {
      "@type": "Question",
      "name": "What citation styles do you use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are proficient in all major citation styles including APA 7th edition, MLA 9th edition, Chicago/Turabian, Harvard, Vancouver, IEEE, and discipline-specific styles like AMA, ACS, APSA, and Bluebook. We ensure perfect formatting of in-text citations and reference lists."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide plagiarism-free work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every research paper is crafted from scratch based on your specific requirements. We never resell or recycle papers. All work is checked with advanced plagiarism detection software, and we provide a free plagiarism report upon request."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with data analysis for research papers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer comprehensive data analysis assistance for quantitative, qualitative, and mixed methods research. Our experts are proficient in SPSS, R, Python, NVivo, and other analysis software. We provide thorough interpretation of results."
      }
    }
  ]
}

// Research paper types data
const researchPaperTypes = [
  {
    title: "Term Papers",
    description: "Comprehensive papers that demonstrate understanding of course material through research and analysis.",
    icon: "📝",
    features: ["Course-specific requirements", "Integration of class concepts", "Proper citations", "Critical analysis"]
  },
  {
    title: "Capstone Projects",
    description: "Multifaceted projects that serve as a culminating academic and intellectual experience.",
    icon: "🎓",
    features: ["Synthesis of learning", "Real-world application", "Comprehensive research", "Professional presentation"]
  },
  {
    title: "Journal Articles",
    description: "Scholarly articles suitable for publication in academic journals.",
    icon: "📚",
    features: ["Publication-ready format", "Peer-reviewed standards", "Original research", "Contribution to field"]
  },
  {
    title: "Literature Reviews",
    description: "Comprehensive surveys of scholarly sources on a specific topic.",
    icon: "🔍",
    features: ["Exhaustive source coverage", "Thematic organization", "Critical evaluation", "Research gap identification"]
  },
  {
    title: "Research Proposals",
    description: "Detailed plans for proposed research projects.",
    icon: "📋",
    features: ["Research questions", "Methodology", "Timeline", "Budget considerations"]
  },
  {
    title: "Case Studies",
    description: "In-depth investigations of a single individual, group, event, or phenomenon.",
    icon: "📊",
    features: ["Rich contextual detail", "Multiple data sources", "Pattern identification", "Theoretical application"]
  },
  {
    title: "Argumentative Papers",
    description: "Papers that take a position on a controversial issue and support it with evidence.",
    icon: "⚖️",
    features: ["Clear position", "Counterargument consideration", "Evidence-based claims", "Persuasive reasoning"]
  },
  {
    title: "Analytical Papers",
    description: "Papers that examine and interpret information, texts, or phenomena.",
    icon: "🔬",
    features: ["Breakdown of components", "Interpretation of meaning", "Pattern recognition", "Insightful conclusions"]
  }
]

// Research process data
const researchProcess = [
  {
    step: "1",
    title: "Topic Selection & Refinement",
    description: "We help you choose a focused, researchable topic and develop clear research questions.",
    icon: "🎯"
  },
  {
    step: "2",
    title: "Literature Search",
    description: "Comprehensive search of academic databases for peer-reviewed sources.",
    icon: "🔍"
  },
  {
    step: "3",
    title: "Thesis Development",
    description: "Creation of a strong, arguable thesis statement that guides your paper.",
    icon: "💡"
  },
  {
    step: "4",
    title: "Outline Creation",
    description: "Detailed outline ensuring logical flow and comprehensive coverage.",
    icon: "📋"
  },
  {
    step: "5",
    title: "Drafting",
    description: "Writing each section with clear arguments and proper source integration.",
    icon: "✍️"
  },
  {
    step: "6",
    title: "Revision & Editing",
    description: "Thorough revision for clarity, coherence, and academic tone.",
    icon: "✨"
  },
  {
    step: "7",
    title: "Citation Formatting",
    description: "Perfect formatting of in-text citations and reference list.",
    icon: "📚"
  },
  {
    step: "8",
    title: "Final Review",
    description: "Comprehensive quality check before delivery.",
    icon: "✅"
  }
]

// Subject areas data
const subjectAreas = [
  { name: "Humanities", icon: "📚" },
  { name: "Social Sciences", icon: "👥" },
  { name: "Natural Sciences", icon: "🔬" },
  { name: "Health Sciences", icon: "🏥" },
  { name: "Engineering", icon: "⚙️" },
  { name: "Business", icon: "💼" },
  { name: "Education", icon: "🎓" },
  { name: "Psychology", icon: "🧠" },
  { name: "History", icon: "🏛️" },
  { name: "Literature", icon: "📖" },
  { name: "Political Science", icon: "🏛️" },
  { name: "Economics", icon: "📊" },
  { name: "Sociology", icon: "👥" },
  { name: "Philosophy", icon: "🤔" },
  { name: "Communication", icon: "💬" },
  { name: "Environmental Science", icon: "🌍" }
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
  { name: "ACS", disciplines: "Chemistry" },
  { name: "APSA", disciplines: "Political Science" },
  { name: "Bluebook", disciplines: "Law" }
]

// Features data
const features = [
  {
    title: "PhD Qualified Writers",
    description: "All our research paper writers hold advanced degrees (Master's or PhD) in their respective fields.",
    icon: "🎓"
  },
  {
    title: "Peer-Reviewed Sources",
    description: "We use only credible, peer-reviewed sources from academic databases.",
    icon: "📚"
  },
  {
    title: "100% Original Content",
    description: "Every paper is written from scratch. Free plagiarism report included.",
    icon: "✅"
  },
  {
    title: "Perfect Formatting",
    description: "Expert formatting in APA, MLA, Chicago, Harvard, and all other citation styles.",
    icon: "📋"
  },
  {
    title: "On-Time Delivery",
    description: "We respect your deadlines and deliver your paper on time, every time.",
    icon: "⏰"
  },
  {
    title: "Unlimited Revisions",
    description: "Free revisions until you're completely satisfied with your paper.",
    icon: "🔄"
  }
]

export default function ResearchPaperWritingPage() {
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
                Professional <span className={styles.highlight}>Research Paper Writing Service</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Need expert help with your research paper? Our professional research paper writing service provides comprehensive assistance with term papers, capstone projects, journal articles, literature reviews, and more. Each paper is <strong>thoroughly researched, critically analyzed, and meticulously formatted</strong> to meet the highest academic standards.
              </p>
              <div className={styles.heroCta}>
                <Link href="#pricing" className={styles.primaryButton}>
                  View Paper Types
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Order Your Research Paper
                </Link>
              </div>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>400+</span>
                  <span className={styles.statLabel}>Research Experts</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>98%</span>
                  <span className={styles.statLabel}>A Grades</span>
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

        {/* Research Paper Types Section */}
        <section id="pricing" className={styles.paperTypes}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Types of Research Papers We Write
            </h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive assistance for every research need
            </p>
            
            <div className={styles.paperTypesGrid}>
              {researchPaperTypes.map((type, index) => (
                <div key={index} className={styles.paperTypeCard}>
                  <div className={styles.paperTypeIcon}>{type.icon}</div>
                  <h3 className={styles.paperTypeTitle}>{type.title}</h3>
                  <p className={styles.paperTypeDescription}>{type.description}</p>
                  <div className={styles.paperTypeFeatures}>
                    {type.features.map((feature, i) => (
                      <span key={i} className={styles.featureTag}>{feature}</span>
                    ))}
                  </div>
                  <Link href="/contact" className={styles.paperTypeLink}>
                    Get Help →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Process Section */}
        <section className={styles.researchProcess}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Our Research Process
            </h2>
            <p className={styles.sectionSubtitle}>
              A systematic approach to producing high-quality research papers
            </p>
            
            <div className={styles.processGrid}>
              {researchProcess.map((step, index) => (
                <div key={index} className={styles.processCard}>
                  <div className={styles.processStep}>{step.step}</div>
                  <div className={styles.processIcon}>{step.icon}</div>
                  <h3 className={styles.processTitle}>{step.title}</h3>
                  <p className={styles.processDescription}>{step.description}</p>
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
              Research paper experts in every academic discipline
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
              Why Choose Our Research Paper Service
            </h2>
            <p className={styles.sectionSubtitle}>
              Excellence in every research paper we deliver
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
              Get your perfect research paper in 4 simple steps
            </p>
            
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Submit Requirements</h3>
                <p className={styles.stepDescription}>
                  Share your topic, paper type, length, citation style, and any specific sources or instructions. The more details, the better.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Get Matched with Expert</h3>
                <p className={styles.stepDescription}>
                  We match you with a qualified researcher who holds an advanced degree in your subject area.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Research & Writing</h3>
                <p className={styles.stepDescription}>
                  Your expert conducts thorough research, develops arguments, and writes your paper with careful attention to your requirements.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3 className={styles.stepTitle}>Review & Submit</h3>
                <p className={styles.stepDescription}>
                  Receive your paper, review it, and request any revisions. Download your final, perfectly formatted research paper.
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
              Everything you need to know about our research paper writing service
            </p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What types of research papers do you write?
                </h3>
                <p className={styles.faqAnswer}>
                  We write all types of research papers including term papers, capstone projects, journal articles, conference papers, research proposals, literature reviews, case studies, argumentative research papers, analytical research papers, empirical studies, and theoretical papers across all academic disciplines.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you use credible academic sources?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we exclusively use credible, peer-reviewed sources from academic databases such as JSTOR, PubMed, Scopus, Web of Science, Google Scholar, ProQuest, and discipline-specific databases. All sources are properly cited in your required format.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Who writes my research paper?
                </h3>
                <p className={styles.faqAnswer}>
                  Your research paper will be written by a qualified expert with advanced degrees (Master's or PhD) in your subject area. Our writers include academics, researchers, and subject matter experts with extensive experience in scholarly writing and research.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What citation styles do you use?
                </h3>
                <p className={styles.faqAnswer}>
                  We are proficient in all major citation styles including APA 7th edition, MLA 9th edition, Chicago/Turabian, Harvard, Vancouver, IEEE, and discipline-specific styles like AMA, ACS, APSA, and Bluebook. We ensure perfect formatting of in-text citations and reference lists.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you provide plagiarism-free work?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, every research paper is crafted from scratch based on your specific requirements. We never resell or recycle papers. All work is checked with advanced plagiarism detection software, and we provide a free plagiarism report upon request.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you help with data analysis for research papers?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we offer comprehensive data analysis assistance for quantitative, qualitative, and mixed methods research. Our experts are proficient in SPSS, R, Python, NVivo, and other analysis software. We provide thorough interpretation of results.
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
                Ready to Excel in Your Research Paper?
              </h2>
              <p className={styles.ctaText}>
                Whether you need a term paper, capstone project, or journal article — our expert researchers are ready to help. Get 100% original, well-researched work tailored to your requirements.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Order Your Research Paper
                </Link>
                <Link href="#pricing" className={styles.ctaSecondary}>
                  View Paper Types
                </Link>
              </div>
              <div className={styles.ctaTrust}>
                <span>100% Original Research</span>
                <span>Peer-Reviewed Sources</span>
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