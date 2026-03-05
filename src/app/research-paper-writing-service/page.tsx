// src/app/research-paper-writing-service/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// SEO Metadata for Research Paper Writing Service Page
export const metadata: Metadata = {
  title: 'Research Paper Writing Services | Expert Academic Research Help',
  description: 'Research papers require critical thinking, credible sources, and proper structure. Our research paper writing services deliver all three. We help you develop strong thesis statements, find peer-reviewed sources through academic databases, and present findings coherently. Whether it\'s a term paper, capstone project, or journal article, our writers ensure your work stands out.',
  keywords: [
    'research paper writing services',
    'research paper help',
    'academic research help',
    'term paper writing service',
    'capstone project help',
    'journal article writing',
    'thesis statement help',
    'peer-reviewed sources',
    'academic databases',
    'literature review help',
    'research methodology',
    'data analysis for research',
    'research paper outline',
    'research proposal help',
    'abstract writing service',
    'discussion section help',
    'results section writing',
    'research paper editing',
    'research paper formatting',
    'APA research paper',
    'MLA research paper',
    'Chicago style research paper',
    'Harvard referencing research',
    'quantitative research paper',
    'qualitative research paper',
    'mixed methods research'
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
    canonical: '/research-paper-writing-service',
  },
  openGraph: {
    title: 'Research Paper Writing Services | Expert Academic Research Help',
    description: '📚 Research papers require critical thinking, credible sources, and proper structure. Our research paper writing services deliver all three. From thesis statements to peer-reviewed sources, we help you present findings coherently.',
    url: '/research-paper-writing-service',
    siteName: 'HelpWithMyAssignments',
    images: [
      {
        url: '/images/og-research-paper-service.jpg',
        width: 1200,
        height: 630,
        alt: 'Research Paper Writing Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Research Paper Writing Services',
    description: '📚 Expert research paper help. Strong thesis, credible sources, proper structure.',
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
  "@id": "https://helpassignments.com/research-paper-writing-service",
  "name": "Research Paper Writing Services",
  "description": "Research papers require critical thinking, credible sources, and proper structure. Our research paper writing services deliver all three. We help you develop strong thesis statements, find peer-reviewed sources through academic databases, and present findings coherently. Whether it's a term paper, capstone project, or journal article, our writers ensure your work stands out.",
  "url": "https://helpassignments.com/research-paper-writing-service",
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
      "name": "Research Paper Writing Services",
      "item": "https://helpassignments.com/research-paper-writing-service"
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
      "name": "Do you use peer-reviewed sources?",
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
      "name": "Do you help with thesis statements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We help you develop strong, arguable thesis statements that provide clear direction for your research paper. Your thesis will be specific, debatable, and supported throughout the paper with evidence from credible sources."
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
      "name": "Do you provide data analysis for research papers?",
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
    title: "Topic Development",
    description: "We help you refine your research topic, develop focused research questions, and formulate a strong, arguable thesis statement.",
    icon: "🎯"
  },
  {
    step: "2",
    title: "Literature Search",
    description: "Our experts conduct comprehensive searches of academic databases to find relevant, peer-reviewed sources for your paper.",
    icon: "🔍"
  },
  {
    step: "3",
    title: "Critical Analysis",
    description: "We critically evaluate sources, synthesize findings, and identify themes, patterns, and gaps in the literature.",
    icon: "💭"
  },
  {
    step: "4",
    title: "Structured Writing",
    description: "Your paper follows a clear structure with introduction, literature review, methodology, results, discussion, and conclusion.",
    icon: "📝"
  },
  {
    step: "5",
    title: "Proper Citation",
    description: "All sources are properly cited in your required format with a complete reference list.",
    icon: "📚"
  },
  {
    step: "6",
    title: "Revision & Polish",
    description: "Your paper undergoes thorough editing for clarity, coherence, grammar, and style before final delivery.",
    icon: "✨"
  }
]

// Academic databases data
const academicDatabases = [
  { name: "JSTOR", icon: "📚" },
  { name: "PubMed", icon: "🔬" },
  { name: "Scopus", icon: "📊" },
  { name: "Web of Science", icon: "🌐" },
  { name: "Google Scholar", icon: "📖" },
  { name: "ProQuest", icon: "📑" },
  { name: "EBSCOhost", icon: "🔍" },
  { name: "ERIC", icon: "🎓" },
  { name: "IEEE Xplore", icon: "⚡" },
  { name: "ACM Digital Library", icon: "💻" },
  { name: "PsycINFO", icon: "🧠" },
  { name: "CINAHL", icon: "🏥" }
]

// Citation styles data
const citationStyles = [
  { name: "APA 7th Edition", description: "American Psychological Association - social sciences, education, psychology" },
  { name: "MLA 9th Edition", description: "Modern Language Association - humanities, literature, arts" },
  { name: "Chicago/Turabian", description: "Chicago Manual of Style - history, business, fine arts" },
  { name: "Harvard", description: "Harvard referencing - business, economics, social sciences" },
  { name: "Vancouver", description: "Vancouver style - biomedical sciences, medicine" },
  { name: "IEEE", description: "Institute of Electrical and Electronics Engineers - engineering, computer science" },
  { name: "AMA", description: "American Medical Association - medicine, health sciences" },
  { name: "ACS", description: "American Chemical Society - chemistry" },
  { name: "APSA", description: "American Political Science Association - political science" },
  { name: "Bluebook", description: "Legal citation - law" }
]

// Disciplines data
const disciplines = [
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
  { name: "Economics", icon: "📊" }
]

export default function ResearchPaperWritingServicePage() {
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
                Research Paper <span className={styles.highlight}>Writing Services</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Research papers require critical thinking, credible sources, and proper structure. Our research paper writing services deliver all three. We help you develop <strong>strong thesis statements</strong>, find <strong>peer-reviewed sources</strong> through academic databases, and present findings coherently. Whether it's a term paper, capstone project, or journal article, our writers ensure your work stands out.
              </p>
              <div className={styles.heroCta}>
                <Link href="#pricing" className={styles.primaryButton}>
                  Explore Research Services
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Get Your Research Paper
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
                  <span className={styles.statLabel}>First-Time A Grades</span>
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

        {/* Disciplines Section */}
        <section className={styles.disciplines}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              All Academic Disciplines
            </h2>
            <p className={styles.sectionSubtitle}>
              Research paper experts in every field of study
            </p>
            
            <div className={styles.disciplinesGrid}>
              {disciplines.map((discipline, index) => (
                <div key={index} className={styles.disciplineCard}>
                  <div className={styles.disciplineIcon}>{discipline.icon}</div>
                  <h3 className={styles.disciplineName}>{discipline.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Paper Types Section */}
        <section id="pricing" className={styles.researchPaperTypes}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Types of Research Papers We Write
            </h2>
            <p className={styles.sectionSubtitle}>
              From term papers to journal articles — we handle all research paper formats
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

        {/* Academic Databases Section */}
        <section className={styles.academicDatabases}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Academic Databases We Access
            </h2>
            <p className={styles.sectionSubtitle}>
              We use only credible, peer-reviewed sources for your research
            </p>
            
            <div className={styles.databasesGrid}>
              {academicDatabases.map((db, index) => (
                <div key={index} className={styles.databaseCard}>
                  <div className={styles.databaseIcon}>{db.icon}</div>
                  <h3 className={styles.databaseName}>{db.name}</h3>
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
              Perfect formatting in any citation style you need
            </p>
            
            <div className={styles.citationGrid}>
              {citationStyles.map((style, index) => (
                <div key={index} className={styles.citationCard}>
                  <h3 className={styles.citationName}>{style.name}</h3>
                  <p className={styles.citationDescription}>{style.description}</p>
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
              What makes us the trusted choice for research papers
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🎯</div>
                <h3 className={styles.featureTitle}>Strong Thesis Statements</h3>
                <p className={styles.featureDescription}>
                  We help you develop clear, arguable thesis statements that provide direction for your entire paper and engage your readers from the start.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔍</div>
                <h3 className={styles.featureTitle}>Peer-Reviewed Sources</h3>
                <p className={styles.featureDescription}>
                  We exclusively use credible, peer-reviewed sources from academic databases. Your paper will be built on a foundation of authoritative, scholarly literature.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📊</div>
                <h3 className={styles.featureTitle}>Critical Analysis</h3>
                <p className={styles.featureDescription}>
                  Beyond summarizing sources, we provide critical analysis, synthesis, and evaluation, demonstrating the depth of thinking expected in academic research.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📝</div>
                <h3 className={styles.featureTitle}>Proper Structure</h3>
                <p className={styles.featureDescription}>
                  Your paper follows the standard research paper structure with introduction, literature review, methodology, results, discussion, and conclusion.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📚</div>
                <h3 className={styles.featureTitle}>Perfect Citations</h3>
                <p className={styles.featureDescription}>
                  All sources are properly cited in your required format with flawless in-text citations and a complete reference list.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>✨</div>
                <h3 className={styles.featureTitle}>Clear, Coherent Writing</h3>
                <p className={styles.featureDescription}>
                  Your paper will be written in clear, academic prose with logical flow, smooth transitions, and precise language appropriate for your discipline.
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
            <p className={styles.sectionSubtitle}>
              Get your perfect research paper in 4 simple steps
            </p>
            
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Share Your Requirements</h3>
                <p className={styles.stepDescription}>
                  Tell us your topic, paper type, length, citation style, and any specific sources or instructions. The more details, the better.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Get Matched with an Expert</h3>
                <p className={styles.stepDescription}>
                  We match you with a qualified researcher who holds an advanced degree in your subject area and has experience with similar papers.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Collaborate on Your Paper</h3>
                <p className={styles.stepDescription}>
                  Work with your expert through drafts and revisions. You can provide feedback and request changes until you're completely satisfied.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3 className={styles.stepTitle}>Receive Your Final Paper</h3>
                <p className={styles.stepDescription}>
                  Download your completed research paper, perfectly formatted and ready to submit. All sources are properly cited and verified.
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
              Success stories from students who trusted us with their research papers
            </p>
            
            <div className={styles.testimonialsGrid}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "My term paper required extensive research in psychology. The expert found incredible peer-reviewed sources I never would have found on my own. The analysis was brilliant, and I got an A!"
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Jessica M.</div>
                  <div className={styles.authorUni}>Psychology Major, UCLA</div>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "I was struggling with my capstone project literature review. The expert helped me organize my sources thematically and identify research gaps. My advisor was impressed with the depth of analysis."
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Michael T.</div>
                  <div className={styles.authorUni}>Business Major, NYU</div>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "The thesis statement development was incredibly helpful. My expert helped me refine my argument until it was sharp and debatable. The final paper was well-structured and persuasive."
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Emily R.</div>
                  <div className={styles.authorUni}>Political Science, Georgetown</div>
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
              Everything you need to know about our research paper writing services
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
                  Do you use peer-reviewed sources?
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
                  Do you help with thesis statements?
                </h3>
                <p className={styles.faqAnswer}>
                  Absolutely! We help you develop strong, arguable thesis statements that provide clear direction for your research paper. Your thesis will be specific, debatable, and supported throughout the paper with evidence from credible sources.
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
                  Do you provide data analysis for research papers?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we offer comprehensive data analysis assistance for quantitative, qualitative, and mixed methods research. Our experts are proficient in SPSS, R, Python, NVivo, and other analysis software. We provide thorough interpretation of results.
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
                Ready to Excel in Your Research Paper?
              </h2>
              <p className={styles.ctaText}>
                Research papers require critical thinking, credible sources, and proper structure. Let our experts help you develop a strong thesis, find peer-reviewed sources, and present your findings coherently.
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