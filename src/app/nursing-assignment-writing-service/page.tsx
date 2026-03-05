// src/app/nursing-assignment-writing-service/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// SEO Metadata for Nursing Assignment Writing Service Page
export const metadata: Metadata = {
  title: 'Nursing Assignment Writing Service | Expert Nursing Assignment Help',
  description: 'Need professional nursing assignment help? Our expert nursing writers provide comprehensive assistance with fundamentals, medical-surgical, pediatric, mental health, community health, and more. 100% original, well-researched nursing assignments. Qualified nursing professionals. 24/7 support.',
  keywords: [
    'nursing assignment writing service',
    'nursing assignment help',
    'nursing essay help',
    'nursing research paper help',
    'nursing case study help',
    'fundamentals of nursing assignment',
    'medical surgical nursing assignment',
    'pediatric nursing assignment help',
    'mental health nursing assignment',
    'community health nursing assignment',
    'nursing care plan help',
    'nursing dissertation help',
    'nursing literature review',
    'nursing reflection essay',
    'evidence based practice nursing',
    'nursing theory assignment',
    'nursing pharmacology help',
    'nursing leadership assignment',
    'nursing ethics assignment',
    'nursing capstone project help'
  ],
  authors: [{ name: 'HelpWithMyAssignments Nursing Division' }],
  creator: 'HelpWithMyAssignments',
  publisher: 'HelpWithMyAssignments',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/nursing-assignment-writing-service',
  },
  openGraph: {
    title: 'Nursing Assignment Writing Service | Expert Nursing Assignment Help',
    description: '🏥 Get expert nursing assignment help from qualified nursing professionals. Fundamentals, medical-surgical, pediatric, mental health, community health & more. 100% original research. APA 7th edition experts. 24/7 support.',
    url: '/nursing-assignment-writing-service',
    siteName: 'HelpWithMyAssignments',
    images: [
      {
        url: '/images/og-nursing-assignment-service.jpg',
        width: 1200,
        height: 630,
        alt: 'Nursing Assignment Writing Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nursing Assignment Writing Service',
    description: '🏥 Expert nursing assignment help. Get your perfect nursing assignment today!',
    images: ['/images/twitter-nursing-assignment-service.jpg'],
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
  classification: 'Nursing Academic Writing Services',
}

// Structured Data for Rich Results - Service Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://helpassignments.com/nursing-assignment-writing-service",
  "name": "Nursing Assignment Writing Service",
  "description": "Professional nursing assignment help from qualified nursing professionals. Comprehensive assistance with fundamentals of nursing, medical-surgical nursing, pediatric nursing, mental health nursing, community health nursing, and all nursing disciplines. Each assignment is crafted from scratch, follows your specific guidelines, and adheres to APA 7th edition and other academic standards.",
  "url": "https://helpassignments.com/nursing-assignment-writing-service",
  "provider": {
    "@type": "Organization",
    "name": "HelpWithMyAssignments",
    "url": "https://helpassignments.com"
  },
  "serviceType": "Nursing Assignment Writing Service",
  "areaServed": {
    "@type": "Country",
    "name": "Multiple Countries"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Nursing Assignment Types",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fundamentals of Nursing Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Medical-Surgical Nursing Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pediatric Nursing Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mental Health Nursing Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Community Health Nursing Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Nursing Care Plan Help"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "4128",
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
      "name": "Nursing Assignment Writing Service",
      "item": "https://helpassignments.com/nursing-assignment-writing-service"
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
      "name": "What areas of nursing do your experts cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our nursing experts cover all major areas including fundamentals of nursing, medical-surgical nursing, pediatric nursing, mental health nursing, community health nursing, maternal and child health nursing, critical care nursing, nursing leadership and management, nursing research, evidence-based practice, nursing ethics, pharmacology for nurses, and all specialty areas."
      }
    },
    {
      "@type": "Question",
      "name": "Do you follow specific formatting styles like APA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our nursing experts are proficient in APA 7th edition, which is the standard formatting style for nursing and health sciences. We ensure your nursing assignment adheres to APA guidelines including title page, abstract, headings, in-text citations, references, and overall formatting."
      }
    },
    {
      "@type": "Question",
      "name": "Who writes my nursing assignment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your nursing assignment will be written by a qualified nursing professional with BSN, MSN, or DNP/PhD degrees. Our writers include registered nurses, nurse educators, and nursing researchers who have clinical experience and academic expertise in various nursing specialties."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with nursing care plans?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our nursing experts excel at creating comprehensive nursing care plans including assessment, nursing diagnosis (NANDA), planning, implementation, and evaluation. We ensure care plans are individualized, evidence-based, and follow proper nursing process format."
      }
    },
    {
      "@type": "Question",
      "name": "Is my nursing assignment original and plagiarism-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every nursing assignment is crafted from scratch based on your specific requirements. We never resell or recycle papers. All work is checked with advanced plagiarism detection software, and we provide a free plagiarism report upon request. Our nursing research is thorough and properly cited."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help with nursing dissertations and capstone projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide comprehensive assistance for BSN, MSN, and DNP students with dissertations, capstone projects, and research papers. Our experts can help with proposal development, literature review, methodology, data analysis, and final write-up following academic guidelines."
      }
    }
  ]
}

// Nursing categories data
const nursingCategories = [
  {
    title: "Fundamentals of Nursing",
    description: "Comprehensive assistance with basic nursing concepts, skills, and principles. Includes nursing process, vital signs, hygiene, mobility, safety, and foundational nursing theories.",
    icon: "📚",
    topics: ["Nursing Process", "Vital Signs", "Patient Safety", "Hygiene Care", "Mobility & Positioning", "Infection Control"]
  },
  {
    title: "Medical-Surgical Nursing",
    description: "Expert help with adult health nursing, including care of patients with medical and surgical conditions. Covers cardiovascular, respiratory, gastrointestinal, and other body systems.",
    icon: "🏥",
    topics: ["Cardiovascular Disorders", "Respiratory Disorders", "GI Disorders", "Endocrine Disorders", "Oncology Nursing", "Perioperative Care"]
  },
  {
    title: "Pediatric Nursing",
    description: "Professional assistance with nursing care for infants, children, and adolescents. Includes growth and development, common childhood illnesses, and family-centered care.",
    icon: "👶",
    topics: ["Growth & Development", "Childhood Illnesses", "Pediatric Assessment", "Immunizations", "Pediatric Emergencies", "Family-Centered Care"]
  },
  {
    title: "Mental Health Nursing",
    description: "Comprehensive help with psychiatric nursing, including therapeutic communication, mental health disorders, psychopharmacology, and crisis intervention.",
    icon: "🧠",
    topics: ["Therapeutic Communication", "Anxiety Disorders", "Mood Disorders", "Schizophrenia", "Substance Abuse", "Crisis Intervention"]
  },
  {
    title: "Community Health Nursing",
    description: "Expert assistance with population-based nursing, including epidemiology, health promotion, disease prevention, and community assessment.",
    icon: "🌍",
    topics: ["Epidemiology", "Health Promotion", "Disease Prevention", "Community Assessment", "Vulnerable Populations", "Public Health Interventions"]
  },
  {
    title: "Maternal & Child Health Nursing",
    description: "Professional help with obstetrical nursing and care of mothers and newborns. Includes pregnancy, labor and delivery, postpartum care, and newborn assessment.",
    icon: "🤱",
    topics: ["Prenatal Care", "Labor & Delivery", "Postpartum Care", "Newborn Assessment", "High-Risk Pregnancy", "Breastfeeding Support"]
  },
  {
    title: "Critical Care Nursing",
    description: "Comprehensive assistance with intensive care nursing, including hemodynamic monitoring, ventilators, code management, and care of critically ill patients.",
    icon: "💓",
    topics: ["Hemodynamic Monitoring", "Mechanical Ventilation", "Code Management", "Sepsis Management", "Trauma Nursing", "ICU Pharmacology"]
  },
  {
    title: "Nursing Leadership & Management",
    description: "Expert help with nursing leadership, management theories, delegation, conflict resolution, quality improvement, and healthcare policy.",
    icon: "👩‍⚕️",
    topics: ["Leadership Theories", "Delegation", "Conflict Resolution", "Quality Improvement", "Healthcare Policy", "Resource Management"]
  },
  {
    title: "Nursing Research & EBP",
    description: "Professional assistance with nursing research methods, evidence-based practice, literature reviews, and research proposal development.",
    icon: "🔬",
    topics: ["Research Methods", "Evidence-Based Practice", "Literature Review", "Research Proposal", "Data Analysis", "Research Critique"]
  },
  {
    title: "Nursing Ethics & Legal Issues",
    description: "Comprehensive help with ethical dilemmas, legal aspects of nursing practice, patient rights, informed consent, and professional boundaries.",
    icon: "⚖️",
    topics: ["Ethical Principles", "Patient Rights", "Informed Consent", "Legal Liability", "Confidentiality", "Professional Boundaries"]
  },
  {
    title: "Pharmacology for Nurses",
    description: "Expert assistance with drug classifications, mechanisms of action, side effects, nursing considerations, and patient education for medications.",
    icon: "💊",
    topics: ["Drug Classifications", "Pharmacokinetics", "Medication Administration", "Adverse Effects", "Drug Interactions", "Patient Education"]
  },
  {
    title: "Nursing Care Plans",
    description: "Professional help with creating comprehensive, individualized nursing care plans using NANDA diagnoses, NIC interventions, and NOC outcomes.",
    icon: "📋",
    topics: ["NANDA Diagnoses", "NIC Interventions", "NOC Outcomes", "Assessment", "Planning", "Evaluation"]
  }
]

// Assignment types data
const assignmentTypes = [
  { name: "Nursing Essays", description: "Well-researched essays on nursing topics with critical analysis and evidence-based arguments" },
  { name: "Nursing Care Plans", description: "Comprehensive care plans with NANDA diagnoses, NIC interventions, and NOC outcomes" },
  { name: "Nursing Case Studies", description: "In-depth analysis of patient cases with nursing implications and interventions" },
  { name: "Nursing Research Papers", description: "Scholarly research papers with literature review and evidence-based recommendations" },
  { name: "Reflective Essays", description: "Personal reflections on clinical experiences using Gibbs or Johns' reflective models" },
  { name: "Nursing Dissertations", description: "Extended research projects for BSN, MSN, and DNP programs" },
  { name: "Capstone Projects", description: "Comprehensive projects synthesizing nursing knowledge and practice" },
  { name: "Literature Reviews", description: "Systematic reviews of nursing literature on specific topics" },
  { name: "Annotated Bibliographies", description: "Summaries and evaluations of nursing research sources" },
  { name: "Discussion Posts", description: "Engaging discussion posts for online nursing courses" }
]

// Nursing specialties data
const nursingSpecialties = [
  { name: "BSN (Bachelor of Science in Nursing)", icon: "🎓" },
  { name: "MSN (Master of Science in Nursing)", icon: "📘" },
  { name: "DNP (Doctor of Nursing Practice)", icon: "📙" },
  { name: "PhD in Nursing", icon: "🔬" },
  { name: "RN to BSN Programs", icon: "🔄" },
  { name: "Nurse Practitioner", icon: "👩‍⚕️" },
  { name: "Clinical Nurse Specialist", icon: "🏥" },
  { name: "Nurse Educator", icon: "📚" },
  { name: "Nurse Administrator", icon: "📊" },
  { name: "Nurse Researcher", icon: "🔍" }
]

export default function NursingAssignmentWritingServicePage() {
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
                Nursing Assignment <span className={styles.highlight}>Writing Service</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Need professional nursing assignment help? Our expert nursing writers provide comprehensive assistance with fundamentals, medical-surgical, pediatric, mental health, community health, and more. Each assignment is crafted from scratch, follows your specific guidelines, and adheres to APA 7th edition standards.
              </p>
              <div className={styles.heroCta}>
                <Link href="#pricing" className={styles.primaryButton}>
                  View Nursing Services
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Order Your Nursing Assignment
                </Link>
              </div>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>Nursing Experts</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>4.9/5</span>
                  <span className={styles.statLabel}>Student Rating</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>8000+</span>
                  <span className={styles.statLabel}>Nursing Assignments</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nursing Specialties Section */}
        <section className={styles.nursingSpecialties}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Nursing Programs We Support
            </h2>
            <p className={styles.sectionSubtitle}>
              Our experts are qualified across all nursing education levels
            </p>
            
            <div className={styles.specialtiesGrid}>
              {nursingSpecialties.map((specialty, index) => (
                <div key={index} className={styles.specialtyCard}>
                  <div className={styles.specialtyIcon}>{specialty.icon}</div>
                  <h3 className={styles.specialtyName}>{specialty.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nursing Categories Section */}
        <section id="pricing" className={styles.nursingCategories}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              All Nursing Subjects We Cover
            </h2>
            <p className={styles.sectionSubtitle}>
              From fundamentals to advanced specialties — we have experts in every nursing discipline
            </p>
            
            <div className={styles.nursingCategoriesGrid}>
              {nursingCategories.map((category, index) => (
                <div key={index} className={styles.nursingCategoryCard}>
                  <div className={styles.nursingCategoryIcon}>{category.icon}</div>
                  <h3 className={styles.nursingCategoryTitle}>{category.title}</h3>
                  <p className={styles.nursingCategoryDescription}>{category.description}</p>
                  <div className={styles.nursingCategoryTopics}>
                    {category.topics.map((topic, i) => (
                      <span key={i} className={styles.topicTag}>{topic}</span>
                    ))}
                  </div>
                  <Link href="/contact" className={styles.nursingCategoryLink}>
                    Get Help →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Assignment Types Section */}
        <section className={styles.assignmentTypes}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Types of Nursing Assignments We Write
            </h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive assistance for all your nursing academic needs
            </p>
            
            <div className={styles.assignmentTypesGrid}>
              {assignmentTypes.map((type, index) => (
                <div key={index} className={styles.assignmentTypeCard}>
                  <h3 className={styles.assignmentTypeName}>{type.name}</h3>
                  <p className={styles.assignmentTypeDescription}>{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Why Choose Our Nursing Assignment Service
            </h2>
            <p className={styles.sectionSubtitle}>
              We deliver excellence in every nursing assignment, every time
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>👩‍⚕️</div>
                <h3 className={styles.featureTitle}>Qualified Nursing Professionals</h3>
                <p className={styles.featureDescription}>
                  Your assignment will be written by qualified nursing professionals with BSN, MSN, or DNP/PhD degrees. Many are registered nurses with clinical experience and academic expertise.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📋</div>
                <h3 className={styles.featureTitle}>NANDA, NIC, NOC Expertise</h3>
                <p className={styles.featureDescription}>
                  Our experts are proficient in using NANDA International nursing diagnoses, Nursing Interventions Classification (NIC), and Nursing Outcomes Classification (NOC) in care plans.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📚</div>
                <h3 className={styles.featureTitle}>APA 7th Edition Masters</h3>
                <p className={styles.featureDescription}>
                  We ensure your nursing assignment follows APA 7th edition guidelines perfectly, including title page, headings, in-text citations, references, and overall formatting.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔬</div>
                <h3 className={styles.featureTitle}>Evidence-Based Practice</h3>
                <p className={styles.featureDescription}>
                  Our nursing assignments are grounded in current evidence-based practice, using the latest research, clinical guidelines, and best practices in nursing care.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>✅</div>
                <h3 className={styles.featureTitle}>100% Original Content</h3>
                <p className={styles.featureDescription}>
                  Every nursing assignment is crafted from scratch based on your requirements. We never resell or recycle papers. Free plagiarism report available.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔄</div>
                <h3 className={styles.featureTitle}>Reflective Model Expertise</h3>
                <p className={styles.featureDescription}>
                  Our experts excel at reflective writing using Gibbs Reflective Cycle, Johns' Model of Reflection, and other frameworks commonly used in nursing education.
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
              Get your perfect nursing assignment in 4 simple steps
            </p>
            
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Submit Requirements</h3>
                <p className={styles.stepDescription}>
                  Fill out our order form with your nursing topic, subject area, assignment type, formatting style, and any specific instructions or sources.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Get Matched with Expert</h3>
                <p className={styles.stepDescription}>
                  We match you with a qualified nursing professional who specializes in your specific area and has experience with your academic level.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Review & Revise</h3>
                <p className={styles.stepDescription}>
                  Receive your draft, review it carefully, and request any revisions. We offer unlimited free revisions until you're satisfied.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3 className={styles.stepTitle}>Submit with Confidence</h3>
                <p className={styles.stepDescription}>
                  Download your final, polished nursing assignment. It's ready to submit and guaranteed to meet your requirements and academic standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Nursing Section */}
        <section className={styles.whyNursing}>
          <div className={styles.container}>
            <div className={styles.whyNursingContent}>
              <h2 className={styles.sectionTitle}>
                Why Nursing Students Trust Us
              </h2>
              <p className={styles.sectionSubtitle}>
                We understand the unique challenges of nursing education
              </p>
              
              <div className={styles.whyNursingGrid}>
                <div className={styles.whyNursingItem}>
                  <div className={styles.whyNursingIcon}>⏰</div>
                  <h3 className={styles.whyNursingTitle}>Clinical Hours & Deadlines</h3>
                  <p className={styles.whyNursingDescription}>
                    We know nursing students juggle clinical rotations, lectures, and assignments. Our experts work around your schedule to meet tight deadlines.
                  </p>
                </div>
                
                <div className={styles.whyNursingItem}>
                  <div className={styles.whyNursingIcon}>📊</div>
                  <h3 className={styles.whyNursingTitle}>Clinical Reasoning</h3>
                  <p className={styles.whyNursingDescription}>
                    Our assignments demonstrate proper clinical reasoning and critical thinking, helping you understand how to apply theory to practice.
                  </p>
                </div>
                
                <div className={styles.whyNursingItem}>
                  <div className={styles.whyNursingIcon}>📝</div>
                  <h3 className={styles.whyNursingTitle}>NCLEX-Style Questions</h3>
                  <p className={styles.whyNursingDescription}>
                    We incorporate NCLEX-style critical thinking and prioritization in our assignments, preparing you for your licensing exam.
                  </p>
                </div>
                
                <div className={styles.whyNursingItem}>
                  <div className={styles.whyNursingIcon}>🤝</div>
                  <h3 className={styles.whyNursingTitle}>Patient-Centered Care</h3>
                  <p className={styles.whyNursingDescription}>
                    Our assignments emphasize holistic, patient-centered care, reflecting the core values of the nursing profession.
                  </p>
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
              Everything you need to know about our nursing assignment writing service
            </p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What areas of nursing do your experts cover?
                </h3>
                <p className={styles.faqAnswer}>
                  Our nursing experts cover all major areas including fundamentals of nursing, medical-surgical nursing, pediatric nursing, mental health nursing, community health nursing, maternal and child health nursing, critical care nursing, nursing leadership and management, nursing research, evidence-based practice, nursing ethics, pharmacology for nurses, and all specialty areas.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you follow specific formatting styles like APA?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, our nursing experts are proficient in APA 7th edition, which is the standard formatting style for nursing and health sciences. We ensure your nursing assignment adheres to APA guidelines including title page, abstract, headings, in-text citations, references, and overall formatting.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Who writes my nursing assignment?
                </h3>
                <p className={styles.faqAnswer}>
                  Your nursing assignment will be written by a qualified nursing professional with BSN, MSN, or DNP/PhD degrees. Our writers include registered nurses, nurse educators, and nursing researchers who have clinical experience and academic expertise in various nursing specialties.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you help with nursing care plans?
                </h3>
                <p className={styles.faqAnswer}>
                  Absolutely! Our nursing experts excel at creating comprehensive nursing care plans including assessment, nursing diagnosis (NANDA), planning, implementation, and evaluation. We ensure care plans are individualized, evidence-based, and follow proper nursing process format.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Is my nursing assignment original and plagiarism-free?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, every nursing assignment is crafted from scratch based on your specific requirements. We never resell or recycle papers. All work is checked with advanced plagiarism detection software, and we provide a free plagiarism report upon request. Our nursing research is thorough and properly cited.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you help with nursing dissertations and capstone projects?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we provide comprehensive assistance for BSN, MSN, and DNP students with dissertations, capstone projects, and research papers. Our experts can help with proposal development, literature review, methodology, data analysis, and final write-up following academic guidelines.
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
                Ready to Ace Your Nursing Assignment?
              </h2>
              <p className={styles.ctaText}>
                Whether you need help with fundamentals, care plans, or advanced nursing research — our expert nursing writers are ready to assist. Get a 100% original, well-researched nursing assignment crafted to your exact requirements.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Order Your Nursing Assignment
                </Link>
                <Link href="#pricing" className={styles.ctaSecondary}>
                  View Nursing Subjects
                </Link>
              </div>
              <div className={styles.ctaTrust}>
                <span>100% Money Back Guarantee</span>
                <span>Free Plagiarism Report</span>
                <span>Unlimited Free Revisions</span>
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