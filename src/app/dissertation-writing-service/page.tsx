// src/app/dissertation-writing-service/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// SEO Metadata for Dissertation Writing Service Page
export const metadata: Metadata = {
  title: 'Dissertation Writing Services | Expert PhD Dissertation Help',
  description: 'Your dissertation defines your academic career. Don\'t leave it to chance. Our dissertation writing services pair you with PhD experts who\'ve successfully defended their own dissertations at top US universities. From proposal to literature review, methodology to discussion, and conclusion to defense preparation, we guide you through every chapter.',
  keywords: [
    'dissertation writing services',
    'dissertation help',
    'phd dissertation help',
    'dissertation consulting',
    'dissertation proposal help',
    'literature review help',
    'methodology chapter help',
    'results chapter help',
    'discussion chapter help',
    'conclusion chapter help',
    'dissertation defense preparation',
    'thesis writing service',
    'doctoral dissertation help',
    'dissertation editing',
    'dissertation proofreading',
    'statistical analysis for dissertation',
    'qualitative dissertation help',
    'quantitative dissertation help',
    'mixed methods dissertation',
    'IRB approval help',
    'dissertation committee feedback',
    'dissertation formatting',
    'APA dissertation formatting',
    'dissertation abstract help'
  ],
  authors: [{ name: 'HelpWithMyAssignments Dissertation Division' }],
  creator: 'HelpWithMyAssignments',
  publisher: 'HelpWithMyAssignments',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/dissertation-writing-service',
  },
  openGraph: {
    title: 'Dissertation Writing Services | Expert PhD Dissertation Help',
    description: '🎓 Your dissertation defines your academic career. Work with PhD experts who\'ve successfully defended their own dissertations at top US universities. From proposal to defense preparation, we guide you through every chapter.',
    url: '/dissertation-writing-service',
    siteName: 'HelpWithMyAssignments',
    images: [
      {
        url: '/images/og-dissertation-service.jpg',
        width: 1200,
        height: 630,
        alt: 'Dissertation Writing Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dissertation Writing Services',
    description: '🎓 Expert PhD dissertation help. Work with successful PhD graduates.',
    images: ['/images/twitter-dissertation-service.jpg'],
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
  classification: 'Dissertation Writing Services',
}

// Structured Data for Rich Results - Service Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://helpassignments.com/dissertation-writing-service",
  "name": "Dissertation Writing Services",
  "description": "Your dissertation defines your academic career. Don't leave it to chance. Our dissertation writing services pair you with PhD experts who've successfully defended their own dissertations at top US universities. From proposal to literature review, methodology to discussion, and conclusion to defense preparation, we guide you through every chapter. We understand IRB requirements, statistical analysis, and what your committee expects.",
  "url": "https://helpassignments.com/dissertation-writing-service",
  "provider": {
    "@type": "Organization",
    "name": "HelpWithMyAssignments",
    "url": "https://helpassignments.com"
  },
  "serviceType": "Dissertation Writing Service",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Dissertation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dissertation Proposal Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Literature Review Assistance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Methodology Chapter Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Statistical Analysis"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Results & Discussion"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dissertation Defense Preparation"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "2143",
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
      "name": "Dissertation Writing Services",
      "item": "https://helpassignments.com/dissertation-writing-service"
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
      "name": "Who writes my dissertation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your dissertation will be written by a PhD expert who has successfully defended their own dissertation at a top US university. Our experts hold doctoral degrees in their respective fields and have extensive experience guiding doctoral candidates through the dissertation process. They understand what your committee expects at every stage."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help with all dissertation chapters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide comprehensive assistance with all dissertation chapters including Chapter 1 (Introduction), Chapter 2 (Literature Review), Chapter 3 (Methodology), Chapter 4 (Results/Findings), Chapter 5 (Discussion), and Chapter 6 (Conclusion). We also help with proposals, abstracts, and defense preparation."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with IRB approval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our experts are familiar with IRB (Institutional Review Board) requirements and can help you prepare your IRB application, including consent forms, recruitment materials, and research protocols. We ensure your application meets all ethical guidelines for research with human subjects."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide statistical analysis assistance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer comprehensive statistical analysis assistance for quantitative dissertations. Our experts are proficient in SPSS, R, Python, Stata, SAS, and other statistical software. We help with data cleaning, assumption testing, statistical tests (t-tests, ANOVA, regression, factor analysis, SEM, etc.), and interpretation of results."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help with qualitative dissertations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we have experts in all qualitative methodologies including phenomenology, grounded theory, ethnography, case study, narrative inquiry, and content analysis. We help with coding, theme development, and writing up qualitative findings in a rigorous, compelling manner."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with dissertation defense preparation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide comprehensive defense preparation including creating your defense presentation, anticipating committee questions, developing strong answers, and conducting mock defenses. Our experts have successfully defended their own dissertations and know what committees look for."
      }
    }
  ]
}

// Dissertation chapter data
const dissertationChapters = [
  {
    number: "1",
    title: "Introduction",
    description: "Set the stage for your research with a compelling introduction that establishes the research problem, purpose, research questions, and significance of your study.",
    icon: "📌",
    topics: ["Background of the Study", "Problem Statement", "Purpose Statement", "Research Questions", "Theoretical Framework", "Significance of the Study", "Definition of Terms", "Assumptions & Limitations"]
  },
  {
    number: "2",
    title: "Literature Review",
    description: "Conduct a comprehensive review of existing literature to situate your research within the scholarly conversation and identify gaps your study will address.",
    icon: "📚",
    topics: ["Theoretical Foundations", "Historical Context", "Current Research", "Thematic Organization", "Synthesis of Sources", "Identification of Gaps", "Conceptual Framework", "Chapter Summary"]
  },
  {
    number: "3",
    title: "Methodology",
    description: "Detail your research approach, design, data collection methods, and analysis procedures with the rigor expected by your dissertation committee.",
    icon: "🔬",
    topics: ["Research Design", "Quantitative Methods", "Qualitative Methods", "Mixed Methods", "Population & Sampling", "Data Collection Instruments", "Data Analysis Procedures", "Ethical Considerations & IRB"]
  },
  {
    number: "4",
    title: "Results / Findings",
    description: "Present your findings clearly and systematically, using tables, figures, and narrative to communicate what your data revealed.",
    icon: "📊",
    topics: ["Descriptive Statistics", "Statistical Test Results", "Qualitative Themes", "Data Presentation", "Tables & Figures", "Research Question Answers", "Unexpected Findings", "Chapter Summary"]
  },
  {
    number: "5",
    title: "Discussion",
    description: "Interpret your findings, explain their meaning, and connect them back to your literature review and theoretical framework.",
    icon: "💭",
    topics: ["Interpretation of Findings", "Connection to Literature", "Theoretical Implications", "Explanation of Results", "Unexpected Findings", "Integration of Sources", "Chapter Summary", "Transition to Conclusion"]
  },
  {
    number: "6",
    title: "Conclusion",
    description: "Synthesize your entire study, discuss implications, acknowledge limitations, and provide recommendations for future research and practice.",
    icon: "🎯",
    topics: ["Summary of Study", "Conclusions", "Implications for Practice", "Implications for Policy", "Limitations", "Recommendations for Research", "Personal Reflection", "Concluding Remarks"]
  }
]

// Research methodology data
const researchMethodologies = [
  {
    type: "Quantitative",
    icon: "📈",
    methods: ["Experimental Design", "Quasi-Experimental", "Correlational Studies", "Survey Research", "Longitudinal Studies", "Cross-Sectional Studies", "Causal-Comparative", "Secondary Data Analysis"]
  },
  {
    type: "Qualitative",
    icon: "💬",
    methods: ["Phenomenology", "Grounded Theory", "Ethnography", "Case Study", "Narrative Inquiry", "Content Analysis", "Discourse Analysis", "Action Research"]
  },
  {
    type: "Mixed Methods",
    icon: "🔄",
    methods: ["Convergent Design", "Explanatory Sequential", "Exploratory Sequential", "Embedded Design", "Transformative Design", "Multiphase Design"]
  }
]

// Statistical analysis data
const statisticalAnalysis = [
  { name: "Descriptive Statistics", description: "Mean, median, mode, standard deviation, frequencies" },
  { name: "t-Tests", description: "Independent samples, paired samples, one-sample" },
  { name: "ANOVA/MANOVA", description: "One-way, two-way, repeated measures, ANCOVA" },
  { name: "Correlation", description: "Pearson, Spearman, point-biserial" },
  { name: "Regression", description: "Linear, multiple, logistic, hierarchical" },
  { name: "Factor Analysis", description: "EFA, CFA, PCA" },
  { name: "Structural Equation Modeling", description: "SEM, path analysis" },
  { name: "Non-parametric Tests", description: "Chi-square, Mann-Whitney, Kruskal-Wallis, Wilcoxon" }
]

// Software expertise data
const softwareExpertise = [
  { name: "SPSS", category: "Statistical Analysis" },
  { name: "R", category: "Statistical Computing" },
  { name: "Python", category: "Data Analysis" },
  { name: "Stata", category: "Statistical Analysis" },
  { name: "SAS", category: "Statistical Analysis" },
  { name: "NVivo", category: "Qualitative Analysis" },
  { name: "ATLAS.ti", category: "Qualitative Analysis" },
  { name: "MAXQDA", category: "Mixed Methods" },
  { name: "Mplus", category: "SEM" },
  { name: "AMOS", category: "SEM" },
  { name: "SmartPLS", category: "PLS-SEM" },
  { name: "JASP", category: "Statistical Analysis" },
  { name: "Jamovi", category: "Statistical Analysis" },
  { name: "Excel", category: "Data Analysis" },
  { name: "Tableau", category: "Data Visualization" }
]

// Top universities data
const topUniversities = [
  { name: "Harvard University", icon: "" },
  { name: "Stanford University", icon: "" },
  { name: "MIT", icon: "" },
  { name: "Yale University", icon: "" },
  { name: "Princeton University", icon: "" },
  { name: "Columbia University", icon: "" },
  { name: "University of Chicago", icon: "" },
  { name: "University of Pennsylvania", icon: "" },
  { name: "California Institute of Technology", icon: "" },
  { name: "Duke University", icon: "" },
  { name: "Johns Hopkins University", icon: "" },
  { name: "Northwestern University", icon: "" }
]

export default function DissertationWritingServicePage() {
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
                Dissertation <span className={styles.highlight}>Writing Services</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Your dissertation defines your academic career. Don't leave it to chance. Our dissertation writing services pair you with <strong>PhD experts who've successfully defended their own dissertations at top US universities</strong>. From proposal to literature review, methodology to discussion, and conclusion to defense preparation, we guide you through every chapter. We understand IRB requirements, statistical analysis, and what your committee expects.
              </p>
              <div className={styles.heroCta}>
                <Link href="#pricing" className={styles.primaryButton}>
                  Explore Dissertation Services
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Get a Free Consultation
                </Link>
              </div>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>250+</span>
                  <span className={styles.statLabel}>PhD Experts</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>98%</span>
                  <span className={styles.statLabel}>Successful Defenses</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>4.9/5</span>
                  <span className={styles.statLabel}>Doctoral Student Rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Universities Section */}
        <section className={styles.topUniversities}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Our PhD Experts Graduated From
            </h2>
            <p className={styles.sectionSubtitle}>
              Work with scholars who've successfully defended at top universities
            </p>
            
            <div className={styles.universitiesGrid}>
              {topUniversities.map((uni, index) => (
                <div key={index} className={styles.universityCard}>
                  <div className={styles.universityIcon}>{uni.icon}</div>
                  <h3 className={styles.universityName}>{uni.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dissertation Chapters Section */}
        <section id="pricing" className={styles.dissertationChapters}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Comprehensive Chapter-by-Chapter Support
            </h2>
            <p className={styles.sectionSubtitle}>
              We guide you through every chapter of your dissertation
            </p>
            
            <div className={styles.chaptersGrid}>
              {dissertationChapters.map((chapter, index) => (
                <div key={index} className={styles.chapterCard}>
                  <div className={styles.chapterNumber}>{chapter.number}</div>
                  <div className={styles.chapterIcon}>{chapter.icon}</div>
                  <h3 className={styles.chapterTitle}>{chapter.title}</h3>
                  <p className={styles.chapterDescription}>{chapter.description}</p>
                  <div className={styles.chapterTopics}>
                    {chapter.topics.slice(0, 4).map((topic, i) => (
                      <span key={i} className={styles.topicTag}>{topic}</span>
                    ))}
                    {chapter.topics.length > 4 && (
                      <span className={styles.topicTag}>+{chapter.topics.length - 4} more</span>
                    )}
                  </div>
                  <Link href="/contact" className={styles.chapterLink}>
                    Get Help →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Methodologies Section */}
        <section className={styles.researchMethodologies}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              All Research Methodologies
            </h2>
            <p className={styles.sectionSubtitle}>
              Experts in quantitative, qualitative, and mixed methods approaches
            </p>
            
            <div className={styles.methodologiesGrid}>
              {researchMethodologies.map((methodology, index) => (
                <div key={index} className={styles.methodologyCard}>
                  <div className={styles.methodologyIcon}>{methodology.icon}</div>
                  <h3 className={styles.methodologyType}>{methodology.type}</h3>
                  <div className={styles.methodsList}>
                    {methodology.methods.map((method, i) => (
                      <span key={i} className={styles.methodTag}>{method}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistical Analysis Section */}
        <section className={styles.statisticalAnalysis}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Statistical Analysis Expertise
            </h2>
            <p className={styles.sectionSubtitle}>
              From basic statistics to advanced multivariate analysis
            </p>
            
            <div className={styles.statisticsGrid}>
              {statisticalAnalysis.map((stat, index) => (
                <div key={index} className={styles.statisticCard}>
                  <h3 className={styles.statisticName}>{stat.name}</h3>
                  <p className={styles.statisticDescription}>{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Software Expertise Section */}
        <section className={styles.softwareExpertise}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Software & Tools We Use
            </h2>
            <p className={styles.sectionSubtitle}>
              Proficiency in all major research software
            </p>
            
            <div className={styles.softwareGrid}>
              {softwareExpertise.map((software, index) => (
                <div key={index} className={styles.softwareCard}>
                  <h3 className={styles.softwareName}>{software.name}</h3>
                  <span className={styles.softwareCategory}>{software.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Why Choose Our Dissertation Service
            </h2>
            <p className={styles.sectionSubtitle}>
              What makes us the trusted choice for doctoral candidates
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🎓</div>
                <h3 className={styles.featureTitle}>PhD Experts From Top Universities</h3>
                <p className={styles.featureDescription}>
                  Your dissertation will be guided by PhD experts who have successfully defended their own dissertations at top US universities. They understand the journey because they've lived it.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📋</div>
                <h3 className={styles.featureTitle}>IRB Application Assistance</h3>
                <p className={styles.featureDescription}>
                  We help you prepare comprehensive IRB applications including consent forms, recruitment materials, and research protocols that meet all ethical guidelines for research with human subjects.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📊</div>
                <h3 className={styles.featureTitle}>Statistical Analysis Support</h3>
                <p className={styles.featureDescription}>
                  From SPSS to R, from t-tests to SEM, our statistical experts handle all aspects of quantitative analysis with clear interpretation of results.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>💬</div>
                <h3 className={styles.featureTitle}>Qualitative Analysis Expertise</h3>
                <p className={styles.featureDescription}>
                  Our qualitative experts excel at coding, theme development, and writing up findings in phenomenology, grounded theory, ethnography, case study, and other approaches.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>👥</div>
                <h3 className={styles.featureTitle}>Committee Expectations</h3>
                <p className={styles.featureDescription}>
                  We understand what dissertation committees look for at every stage. Our guidance ensures your work meets the rigorous standards of your committee members.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🎤</div>
                <h3 className={styles.featureTitle}>Defense Preparation</h3>
                <p className={styles.featureDescription}>
                  We help you prepare for your defense with presentation creation, question anticipation, answer development, and mock defense sessions to build your confidence.
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
              Your journey to a successful dissertation in 4 simple steps
            </p>
            
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Initial Consultation</h3>
                <p className={styles.stepDescription}>
                  Schedule a free consultation to discuss your dissertation topic, methodology, timeline, and specific needs. We'll match you with a PhD expert in your field.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Chapter-by-Chapter Plan</h3>
                <p className={styles.stepDescription}>
                  Your expert develops a detailed plan for each chapter with clear milestones, deadlines, and deliverables tailored to your program's requirements.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Collaborative Writing & Revision</h3>
                <p className={styles.stepDescription}>
                  Work closely with your expert through each chapter, receiving feedback, revisions, and guidance until every section meets your committee's expectations.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3 className={styles.stepTitle}>Defense Preparation</h3>
                <p className={styles.stepDescription}>
                  Prepare for your defense with presentation creation, mock defenses, and question preparation. Walk into your defense confident and prepared.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              What Doctoral Candidates Say
            </h2>
            <p className={styles.sectionSubtitle}>
              Success stories from candidates who trusted us with their dissertation
            </p>
            
            <div className={styles.testimonialsGrid}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "My dissertation was overwhelming until I found this service. My PhD expert guided me through every chapter, helped me with my statistical analysis in SPSS, and prepared me for my defense. I successfully defended last month!"
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Dr. Sarah Mitchell</div>
                  <div className={styles.authorUni}>PhD in Psychology, University of Michigan</div>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "The IRB assistance was invaluable. My expert helped me navigate the approval process smoothly. The qualitative analysis support for my phenomenological study was exceptional. Worth every penny."
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Dr. James Chen</div>
                  <div className={styles.authorUni}>PhD in Education, Stanford University</div>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "My committee was tough, but my expert knew exactly what they'd ask. The mock defense sessions were game-changing. I felt completely prepared and confident. Thank you for helping me achieve my dream!"
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Dr. Maria Rodriguez</div>
                  <div className={styles.authorUni}>PhD in Nursing, Johns Hopkins University</div>
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
              Everything you need to know about our dissertation writing services
            </p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Who writes my dissertation?
                </h3>
                <p className={styles.faqAnswer}>
                  Your dissertation will be written by a PhD expert who has successfully defended their own dissertation at a top US university. Our experts hold doctoral degrees in their respective fields and have extensive experience guiding doctoral candidates through the dissertation process. They understand what your committee expects at every stage.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you help with all dissertation chapters?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we provide comprehensive assistance with all dissertation chapters including Chapter 1 (Introduction), Chapter 2 (Literature Review), Chapter 3 (Methodology), Chapter 4 (Results/Findings), Chapter 5 (Discussion), and Chapter 6 (Conclusion). We also help with proposals, abstracts, and defense preparation.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you help with IRB approval?
                </h3>
                <p className={styles.faqAnswer}>
                  Absolutely! Our experts are familiar with IRB (Institutional Review Board) requirements and can help you prepare your IRB application, including consent forms, recruitment materials, and research protocols. We ensure your application meets all ethical guidelines for research with human subjects.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you provide statistical analysis assistance?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we offer comprehensive statistical analysis assistance for quantitative dissertations. Our experts are proficient in SPSS, R, Python, Stata, SAS, and other statistical software. We help with data cleaning, assumption testing, statistical tests (t-tests, ANOVA, regression, factor analysis, SEM, etc.), and interpretation of results.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you help with qualitative dissertations?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we have experts in all qualitative methodologies including phenomenology, grounded theory, ethnography, case study, narrative inquiry, and content analysis. We help with coding, theme development, and writing up qualitative findings in a rigorous, compelling manner.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you help with dissertation defense preparation?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we provide comprehensive defense preparation including creating your defense presentation, anticipating committee questions, developing strong answers, and conducting mock defenses. Our experts have successfully defended their own dissertations and know what committees look for.
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
                Your Dissertation Defines Your Career
              </h2>
              <p className={styles.ctaText}>
                Don't leave it to chance. Work with PhD experts who've successfully defended their own dissertations at top US universities. From proposal to defense, we guide you through every chapter with the expertise and support you deserve.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Get a Free Consultation
                </Link>
                <Link href="#pricing" className={styles.ctaSecondary}>
                  View Dissertation Services
                </Link>
              </div>
              <div className={styles.ctaTrust}>
                <span>100% Confidential</span>
                <span>PhD Experts Only</span>
                <span>Proven Success Rate</span>
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