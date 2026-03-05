// src/app/case-study-writing-service/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// SEO Metadata for Case Study Writing Service Page
export const metadata: Metadata = {
  title: 'Case Study Writing Service | Expert Case Study Help',
  description: 'Business, psychology, nursing, or law case studies require specific analytical frameworks. Our case study writing service delivers comprehensive analyses that apply relevant theories, examine multiple perspectives, and provide actionable recommendations. We follow your discipline\'s specific case study format and citation style.',
  keywords: [
    'case study writing service',
    'case study help',
    'business case study help',
    'psychology case study help',
    'nursing case study help',
    'law case study help',
    'marketing case study help',
    'management case study help',
    'medical case study help',
    'case study analysis',
    'case study format',
    'case study framework',
    'SWOT analysis case study',
    'PESTLE analysis case study',
    'Porter\'s five forces case study',
    'nursing care plan case study',
    'legal case brief help',
    'clinical case study help',
    'case study methodology',
    'case study research',
    'case study presentation',
    'case study report',
    'case study assignment help',
    'case study solution'
  ],
  authors: [{ name: 'HelpWithMyAssignments Case Study Division' }],
  creator: 'HelpWithMyAssignments',
  publisher: 'HelpWithMyAssignments',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/case-study-writing-service',
  },
  openGraph: {
    title: 'Case Study Writing Service | Expert Case Study Help',
    description: '📊 Business, psychology, nursing, or law case studies require specific analytical frameworks. Our case study writing service delivers comprehensive analyses that apply relevant theories, examine multiple perspectives, and provide actionable recommendations.',
    url: '/case-study-writing-service',
    siteName: 'HelpWithMyAssignments',
    images: [
      {
        url: '/images/og-case-study-service.jpg',
        width: 1200,
        height: 630,
        alt: 'Case Study Writing Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Study Writing Service',
    description: '📊 Expert case study help. Comprehensive analyses with actionable recommendations.',
    images: ['/images/twitter-case-study-service.jpg'],
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
  classification: 'Case Study Writing Services',
}

// Structured Data for Rich Results - Service Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://helpassignments.com/case-study-writing-service",
  "name": "Case Study Writing Service",
  "description": "Business, psychology, nursing, or law case studies require specific analytical frameworks. Our case study writing service delivers comprehensive analyses that apply relevant theories, examine multiple perspectives, and provide actionable recommendations. We follow your discipline's specific case study format and citation style.",
  "url": "https://helpassignments.com/case-study-writing-service",
  "provider": {
    "@type": "Organization",
    "name": "HelpWithMyAssignments",
    "url": "https://helpassignments.com"
  },
  "serviceType": "Case Study Writing Service",
  "areaServed": {
    "@type": "Country",
    "name": "Multiple Countries"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Case Study Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Case Study Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Psychology Case Study Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Nursing Case Study Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Law Case Study Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Medical Case Study Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Marketing Case Study Help"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "3456",
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
      "name": "Case Study Writing Service",
      "item": "https://helpassignments.com/case-study-writing-service"
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
      "name": "What types of case studies do you write?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We write all types of case studies including business case studies, psychology case studies, nursing case studies, law case studies (case briefs), medical case studies, marketing case studies, management case studies, educational case studies, social work case studies, and case study research papers across all academic disciplines."
      }
    },
    {
      "@type": "Question",
      "name": "Do you apply discipline-specific frameworks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We apply the appropriate analytical frameworks for each discipline: SWOT, PESTLE, Porter's Five Forces for business; DSM-5 criteria and therapeutic approaches for psychology; nursing process and care plans for nursing; IRAC, CRAC, and legal analysis for law; clinical reasoning and evidence-based practice for medical case studies."
      }
    },
    {
      "@type": "Question",
      "name": "Who writes my case study?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your case study will be written by an expert with advanced degrees in your specific discipline. Our writers include business consultants, psychologists, nurses, lawyers, medical professionals, and academics with extensive experience in case study analysis and writing."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide actionable recommendations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every case study includes practical, actionable recommendations based on thorough analysis. We ensure recommendations are feasible, evidence-based, and directly address the problems identified in the case."
      }
    },
    {
      "@type": "Question",
      "name": "What citation styles do you use for case studies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We format case studies in your required citation style: APA for psychology, nursing, education; MLA for humanities; Chicago for history and business; Harvard for business; AMA/Vancouver for medical; Bluebook for legal case studies. We ensure perfect formatting throughout."
      }
    },
    {
      "@type": "Question",
      "name": "Do you follow specific case study formats?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we follow discipline-specific case study formats including business case analysis format, psychological case formulation, nursing care plan format, legal case brief format, medical case presentation format, and research case study format. We tailor each case study to your specific requirements."
      }
    }
  ]
}

// Disciplines data with frameworks
const disciplinesData = [
  {
    name: "Business",
    icon: "💼",
    description: "Strategic analysis of business situations with actionable recommendations",
    frameworks: ["SWOT Analysis", "PESTLE Analysis", "Porter's Five Forces", "BCG Matrix", "Ansoff Matrix", "Value Chain Analysis", "Balanced Scorecard", "Gap Analysis"],
    structure: ["Executive Summary", "Company Overview", "Problem Identification", "Situational Analysis", "Strategic Options", "Recommendations", "Implementation Plan"],
    citation: ["APA", "Harvard", "Chicago"]
  },
  {
    name: "Psychology",
    icon: "🧠",
    description: "Clinical and behavioral case analyses with theoretical foundations",
    frameworks: ["DSM-5 Criteria", "Cognitive-Behavioral Framework", "Psychodynamic Approach", "Humanistic Perspective", "Biopsychosocial Model", "Developmental Frameworks", "Attachment Theory", "Systems Theory"],
    structure: ["Client Background", "Presenting Problem", "Assessment", "Diagnosis", "Case Formulation", "Treatment Plan", "Prognosis"],
    citation: ["APA 7th Edition"]
  },
  {
    name: "Nursing",
    icon: "👩‍⚕️",
    description: "Patient-centered care analyses with nursing process framework",
    frameworks: ["Nursing Process", "ADPIE Framework", "NANDA Diagnoses", "NIC Interventions", "NOC Outcomes", "Clinical Reasoning", "Evidence-Based Practice", "Patient-Centered Care"],
    structure: ["Patient History", "Assessment Data", "Nursing Diagnoses", "Expected Outcomes", "Nursing Interventions", "Evaluation", "Recommendations"],
    citation: ["APA", "AMA", "Vancouver"]
  },
  {
    name: "Law",
    icon: "⚖️",
    description: "Legal case briefs and analyses with proper legal reasoning",
    frameworks: ["IRAC Method", "CRAC Method", "Legal Analysis", "Case Briefing", "Statutory Interpretation", "Precedent Analysis", "Legal Reasoning", "Argumentation"],
    structure: ["Case Citation", "Facts", "Procedural History", "Issue", "Rule", "Application/Analysis", "Conclusion", "Holding"],
    citation: ["Bluebook", "ALWD", "McGill Guide"]
  },
  {
    name: "Medical",
    icon: "🏥",
    description: "Clinical case presentations with diagnostic and treatment focus",
    frameworks: ["Clinical Reasoning", "Differential Diagnosis", "Evidence-Based Medicine", "Diagnostic Algorithms", "Treatment Protocols", "Patient Management", "Clinical Guidelines"],
    structure: ["Chief Complaint", "History of Present Illness", "Past Medical History", "Physical Examination", "Diagnostic Tests", "Differential Diagnosis", "Final Diagnosis", "Treatment Plan", "Follow-up"],
    citation: ["AMA", "Vancouver", "NLM"]
  },
  {
    name: "Marketing",
    icon: "📊",
    description: "Marketing strategy analyses with consumer behavior focus",
    frameworks: ["Marketing Mix (4Ps/7Ps)", "STP Model", "Consumer Decision Process", "Brand Equity Models", "Customer Journey Mapping", "Marketing Analytics", "Digital Marketing Frameworks"],
    structure: ["Company Overview", "Market Analysis", "Target Audience", "Marketing Objectives", "Marketing Strategy", "Implementation", "Evaluation Metrics"],
    citation: ["APA", "Harvard", "Chicago"]
  },
  {
    name: "Education",
    icon: "🎓",
    description: "Educational case analyses with learning theories",
    frameworks: ["Learning Theories", "Instructional Design", "Assessment Frameworks", "Developmental Stages", "Classroom Management", "Differentiated Instruction", "Educational Psychology"],
    structure: ["Student/Class Background", "Learning Context", "Identified Issues", "Educational Assessment", "Intervention Strategies", "Outcomes", "Recommendations"],
    citation: ["APA", "MLA", "Chicago"]
  },
  {
    name: "Social Work",
    icon: "👥",
    description: "Client-centered case analyses with social work frameworks",
    frameworks: ["Person-in-Environment", "Systems Theory", "Strengths-Based Approach", "Ecological Model", "Crisis Intervention", "Case Management", "Ethical Decision Making"],
    structure: ["Client Background", "Presenting Issues", "Assessment", "Intervention Plan", "Resources & Referrals", "Progress Evaluation", "Recommendations"],
    citation: ["APA", "ASA"]
  }
]

// Case study formats data
const caseStudyFormats = [
  {
    type: "Teaching Case Study",
    description: "Educational cases designed for classroom discussion and learning"
  },
  {
    type: "Research Case Study",
    description: "In-depth investigation of a phenomenon for research purposes"
  },
  {
    type: "Clinical Case Study",
    description: "Detailed patient/client cases for healthcare and psychology"
  },
  {
    type: "Business Case Analysis",
    description: "Strategic analysis of business situations with recommendations"
  },
  {
    type: "Legal Case Brief",
    description: "Concise summaries of court cases with legal analysis"
  },
  {
    type: "Case Series",
    description: "Multiple related cases analyzed together"
  },
  {
    type: "Case Report",
    description: "Detailed reports of individual cases in medicine"
  },
  {
    type: "Case Formulation",
    description: "Theoretical conceptualization of client cases in therapy"
  }
]

// Analytical frameworks data
const analyticalFrameworks = [
  { name: "SWOT Analysis", category: "Strategic Management" },
  { name: "PESTLE Analysis", category: "Environmental Scanning" },
  { name: "Porter's Five Forces", category: "Industry Analysis" },
  { name: "BCG Matrix", category: "Portfolio Analysis" },
  { name: "Ansoff Matrix", category: "Growth Strategy" },
  { name: "Value Chain Analysis", category: "Operations" },
  { name: "Balanced Scorecard", category: "Performance Management" },
  { name: "IRAC Method", category: "Legal Analysis" },
  { name: "CRAC Method", category: "Legal Analysis" },
  { name: "Nursing Process", category: "Healthcare" },
  { name: "ADPIE Framework", category: "Nursing" },
  { name: "DSM-5 Criteria", category: "Psychology" },
  { name: "Biopsycosocial Model", category: "Healthcare" },
  { name: "Marketing Mix (4Ps)", category: "Marketing" },
  { name: "STP Model", category: "Marketing" },
  { name: "Gap Analysis", category: "Strategic Planning" }
]

// Citation styles by discipline
const citationByDiscipline = [
  { style: "APA 7th Edition", disciplines: ["Psychology", "Nursing", "Education", "Social Work"] },
  { style: "MLA 9th Edition", disciplines: ["Humanities", "Literature"] },
  { style: "Chicago/Turabian", disciplines: ["History", "Business", "Fine Arts"] },
  { style: "Harvard", disciplines: ["Business", "Economics"] },
  { style: "AMA", disciplines: ["Medicine", "Nursing", "Health Sciences"] },
  { style: "Vancouver", disciplines: ["Medicine", "Biomedical Sciences"] },
  { style: "Bluebook", disciplines: ["Law"] },
  { style: "NLM", disciplines: ["Medicine", "Life Sciences"] }
]

export default function CaseStudyWritingServicePage() {
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
              <div className={styles.heroIcon}>📊</div>
              <h1 className={styles.heroTitle}>
                Case Study <span className={styles.highlight}>Writing Service</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Business, psychology, nursing, or law case studies require <strong>specific analytical frameworks</strong>. Our case study writing service delivers comprehensive analyses that apply relevant theories, examine multiple perspectives, and provide actionable recommendations. We follow your discipline's specific case study format and citation style.
              </p>
              <div className={styles.heroCta}>
                <Link href="#pricing" className={styles.primaryButton}>
                  Explore Case Study Services
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Order Your Case Study
                </Link>
              </div>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>400+</span>
                  <span className={styles.statLabel}>Case Study Experts</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>98%</span>
                  <span className={styles.statLabel}>Satisfaction Rate</span>
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
              Case Study Expertise by Discipline
            </h2>
            <p className={styles.sectionSubtitle}>
              We apply the right frameworks for your field
            </p>
            
            <div className={styles.disciplinesGrid}>
              {disciplinesData.map((discipline, index) => (
                <div key={index} className={styles.disciplineCard}>
                  <div className={styles.disciplineIcon}>{discipline.icon}</div>
                  <h3 className={styles.disciplineName}>{discipline.name}</h3>
                  <p className={styles.disciplineDescription}>{discipline.description}</p>
                  
                  <div className={styles.disciplineSection}>
                    <h4 className={styles.disciplineSectionTitle}>Key Frameworks:</h4>
                    <div className={styles.disciplineTags}>
                      {discipline.frameworks.slice(0, 4).map((fw, i) => (
                        <span key={i} className={styles.disciplineTag}>{fw}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={styles.disciplineSection}>
                    <h4 className={styles.disciplineSectionTitle}>Structure:</h4>
                    <p className={styles.disciplineStructure}>
                      {discipline.structure.slice(0, 5).join(' • ')}
                    </p>
                  </div>
                  
                  <div className={styles.disciplineFooter}>
                    <span className={styles.disciplineCitation}>
                      {discipline.citation.join(', ')}
                    </span>
                    <Link href="/contact" className={styles.disciplineLink}>
                      Get Help →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Formats Section */}
        <section className={styles.caseStudyFormats}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Types of Case Studies We Write
            </h2>
            <p className={styles.sectionSubtitle}>
              From teaching cases to clinical formulations
            </p>
            
            <div className={styles.formatsGrid}>
              {caseStudyFormats.map((format, index) => (
                <div key={index} className={styles.formatCard}>
                  <h3 className={styles.formatTitle}>{format.type}</h3>
                  <p className={styles.formatDescription}>{format.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytical Frameworks Section */}
        <section className={styles.analyticalFrameworks}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Analytical Frameworks We Apply
            </h2>
            <p className={styles.sectionSubtitle}>
              Discipline-specific frameworks for rigorous analysis
            </p>
            
            <div className={styles.frameworksGrid}>
              {analyticalFrameworks.map((framework, index) => (
                <div key={index} className={styles.frameworkCard}>
                  <h3 className={styles.frameworkName}>{framework.name}</h3>
                  <span className={styles.frameworkCategory}>{framework.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Citation Styles Section */}
        <section className={styles.citationStyles}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Citation Styles by Discipline
            </h2>
            <p className={styles.sectionSubtitle}>
              Perfect formatting in your required style
            </p>
            
            <div className={styles.citationGrid}>
              {citationByDiscipline.map((item, index) => (
                <div key={index} className={styles.citationCard}>
                  <h3 className={styles.citationStyle}>{item.style}</h3>
                  <div className={styles.citationDisciplines}>
                    {item.disciplines.map((d, i) => (
                      <span key={i} className={styles.citationDiscipline}>{d}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Why Choose Our Case Study Service
            </h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive, framework-driven case study analysis
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📊</div>
                <h3 className={styles.featureTitle}>Discipline-Specific Frameworks</h3>
                <p className={styles.featureDescription}>
                  We apply the right analytical frameworks for your field: SWOT for business, DSM-5 for psychology, nursing process for healthcare, IRAC for law, and more.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🎯</div>
                <h3 className={styles.featureTitle}>Actionable Recommendations</h3>
                <p className={styles.featureDescription}>
                  Every case study includes practical, feasible recommendations that directly address the problems identified and are supported by your analysis.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📋</div>
                <h3 className={styles.featureTitle}>Proper Case Study Format</h3>
                <p className={styles.featureDescription}>
                  We follow the specific format required for your discipline, whether it's a business case analysis, clinical formulation, legal brief, or research case study.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔍</div>
                <h3 className={styles.featureTitle}>Multiple Perspective Analysis</h3>
                <p className={styles.featureDescription}>
                  We examine cases from multiple angles, considering different stakeholders, theoretical lenses, and potential interpretations to provide comprehensive insight.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📚</div>
                <h3 className={styles.featureTitle}>Theory Application</h3>
                <p className={styles.featureDescription}>
                  We explicitly connect case details to relevant theories, demonstrating how academic concepts apply to real-world situations.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>✅</div>
                <h3 className={styles.featureTitle}>Perfect Citations</h3>
                <p className={styles.featureDescription}>
                  All sources are properly cited in your required style with flawless in-text citations and reference lists. Free plagiarism report available.
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
              Get your perfect case study in 4 simple steps
            </p>
            
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Share Your Case</h3>
                <p className={styles.stepDescription}>
                  Provide your case details, discipline, required frameworks, format, citation style, and any specific questions or requirements.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Get Matched with Expert</h3>
                <p className={styles.stepDescription}>
                  We match you with a discipline-specific expert who has extensive experience with case study analysis in your field.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Framework Application</h3>
                <p className={styles.stepDescription}>
                  Your expert applies the appropriate analytical frameworks, examines multiple perspectives, and develops actionable recommendations.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3 className={styles.stepTitle}>Review & Submit</h3>
                <p className={styles.stepDescription}>
                  Receive your completed case study, review it carefully, and request any revisions. Unlimited free revisions until you're satisfied.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Example Section */}
        <section className={styles.caseStudyExample}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              What's Included in Your Case Study
            </h2>
            <p className={styles.sectionSubtitle}>
              Every case study follows discipline-specific standards
            </p>
            
            <div className={styles.exampleGrid}>
              <div className={styles.exampleCard}>
                <h3 className={styles.exampleTitle}>Executive Summary / Abstract</h3>
                <p className={styles.exampleText}>Concise overview of the case, key issues, analysis, and recommendations</p>
              </div>
              <div className={styles.exampleCard}>
                <h3 className={styles.exampleTitle}>Background / Context</h3>
                <p className={styles.exampleText}>Detailed description of the case situation, relevant history, and contextual factors</p>
              </div>
              <div className={styles.exampleCard}>
                <h3 className={styles.exampleTitle}>Problem / Issue Identification</h3>
                <p className={styles.exampleText}>Clear articulation of the main problems or issues to be addressed</p>
              </div>
              <div className={styles.exampleCard}>
                <h3 className={styles.exampleTitle}>Framework Analysis</h3>
                <p className={styles.exampleText}>Application of discipline-specific analytical frameworks (SWOT, IRAC, nursing process, etc.)</p>
              </div>
              <div className={styles.exampleCard}>
                <h3 className={styles.exampleTitle}>Alternative Perspectives</h3>
                <p className={styles.exampleText}>Consideration of different viewpoints, options, or interpretations</p>
              </div>
              <div className={styles.exampleCard}>
                <h3 className={styles.exampleTitle}>Recommendations</h3>
                <p className={styles.exampleText}>Actionable, evidence-based recommendations with implementation guidance</p>
              </div>
              <div className={styles.exampleCard}>
                <h3 className={styles.exampleTitle}>Conclusion</h3>
                <p className={styles.exampleText}>Synthesis of key findings and final thoughts</p>
              </div>
              <div className={styles.exampleCard}>
                <h3 className={styles.exampleTitle}>References</h3>
                <p className={styles.exampleText}>Properly formatted citations in your required style</p>
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
              Everything you need to know about our case study writing service
            </p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What types of case studies do you write?
                </h3>
                <p className={styles.faqAnswer}>
                  We write all types of case studies including business case studies, psychology case studies, nursing case studies, law case studies (case briefs), medical case studies, marketing case studies, management case studies, educational case studies, social work case studies, and case study research papers across all academic disciplines.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you apply discipline-specific frameworks?
                </h3>
                <p className={styles.faqAnswer}>
                  Absolutely! We apply the appropriate analytical frameworks for each discipline: SWOT, PESTLE, Porter's Five Forces for business; DSM-5 criteria and therapeutic approaches for psychology; nursing process and care plans for nursing; IRAC, CRAC, and legal analysis for law; clinical reasoning and evidence-based practice for medical case studies.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Who writes my case study?
                </h3>
                <p className={styles.faqAnswer}>
                  Your case study will be written by an expert with advanced degrees in your specific discipline. Our writers include business consultants, psychologists, nurses, lawyers, medical professionals, and academics with extensive experience in case study analysis and writing.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you provide actionable recommendations?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, every case study includes practical, actionable recommendations based on thorough analysis. We ensure recommendations are feasible, evidence-based, and directly address the problems identified in the case.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What citation styles do you use for case studies?
                </h3>
                <p className={styles.faqAnswer}>
                  We format case studies in your required citation style: APA for psychology, nursing, education; MLA for humanities; Chicago for history and business; Harvard for business; AMA/Vancouver for medical; Bluebook for legal case studies. We ensure perfect formatting throughout.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you follow specific case study formats?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we follow discipline-specific case study formats including business case analysis format, psychological case formulation, nursing care plan format, legal case brief format, medical case presentation format, and research case study format. We tailor each case study to your specific requirements.
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
                Need a Comprehensive Case Study?
              </h2>
              <p className={styles.ctaText}>
                Whether it's business, psychology, nursing, law, or any other discipline — our experts will apply the right frameworks, examine multiple perspectives, and provide actionable recommendations tailored to your case.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Order Your Case Study
                </Link>
                <Link href="#pricing" className={styles.ctaSecondary}>
                  View Disciplines
                </Link>
              </div>
              <div className={styles.ctaTrust}>
                <span>Discipline-Specific Frameworks</span>
                <span>Actionable Recommendations</span>
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