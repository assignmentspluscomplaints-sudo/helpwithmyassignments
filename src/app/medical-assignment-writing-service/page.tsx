// src/app/medical-assignment-writing-service/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// SEO Metadata for Medical Assignment Writing Service Page
export const metadata: Metadata = {
  title: 'Medical Assignment Writing Service | Expert Medical Assignment Help',
  description: 'Need professional medical assignment help? Our expert medical writers provide comprehensive assistance with nursing, medicine, pharmacology, anatomy, physiology, pathology, and more. 100% original, well-researched medical assignments. Qualified medical professionals. 24/7 support.',
  keywords: [
    'medical assignment writing service',
    'medical assignment help',
    'nursing assignment help',
    'medicine assignment help',
    'pharmacology assignment help',
    'anatomy assignment help',
    'physiology assignment help',
    'pathology assignment help',
    'clinical medicine assignment help',
    'medical case study help',
    'medical research paper help',
    'medical dissertation help',
    'healthcare assignment help',
    'public health assignment help',
    'biomedical science assignment help',
    'medical ethics assignment help',
    'patient care assignment help',
    'medical terminology help',
    'medical report writing',
    'clinical case presentation',
    'medical literature review',
    'evidence-based medicine help',
    'medical statistics help',
    'medical essay writing'
  ],
  authors: [{ name: 'HelpWithMyAssignments Medical Division' }],
  creator: 'HelpWithMyAssignments',
  publisher: 'HelpWithMyAssignments',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/medical-assignment-writing-service',
  },
  openGraph: {
    title: 'Medical Assignment Writing Service | Expert Medical Assignment Help',
    description: '🏥 Get expert medical assignment help from qualified healthcare professionals. Nursing, medicine, pharmacology, anatomy, physiology & more. 100% original research. 24/7 support.',
    url: '/medical-assignment-writing-service',
    siteName: 'HelpWithMyAssignments',
    images: [
      {
        url: '/images/og-medical-assignment-service.jpg',
        width: 1200,
        height: 630,
        alt: 'Medical Assignment Writing Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Assignment Writing Service',
    description: '🏥 Expert medical assignment help. Get your perfect medical assignment today!',
    images: ['/images/twitter-medical-assignment-service.jpg'],
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
  classification: 'Medical Academic Writing Services',
}

// Structured Data for Rich Results - Service Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://helpassignments.com/medical-assignment-writing-service",
  "name": "Medical Assignment Writing Service",
  "description": "Professional medical assignment help from qualified healthcare professionals. Comprehensive assistance with nursing, medicine, pharmacology, anatomy, physiology, pathology, and all medical disciplines. Each assignment is crafted from scratch, follows your specific guidelines, and adheres to medical writing standards including AMA, APA, and Vancouver citation styles.",
  "url": "https://helpassignments.com/medical-assignment-writing-service",
  "provider": {
    "@type": "Organization",
    "name": "HelpWithMyAssignments",
    "url": "https://helpassignments.com"
  },
  "serviceType": "Medical Assignment Writing Service",
  "areaServed": {
    "@type": "Country",
    "name": "Multiple Countries"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Medical Assignment Types",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Nursing Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Medicine Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pharmacology Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Anatomy & Physiology Help"
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
          "name": "Medical Research Paper Help"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "4123",
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
      "name": "Medical Assignment Writing Service",
      "item": "https://helpassignments.com/medical-assignment-writing-service"
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
      "name": "What medical subjects do your experts cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our medical experts cover all major areas including nursing (fundamentals, medical-surgical, pediatric, mental health), medicine (clinical medicine, internal medicine, emergency medicine), pharmacology, anatomy and physiology, pathology, biochemistry, microbiology, public health, epidemiology, healthcare management, medical ethics, evidence-based medicine, and all specialized medical fields."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help with medical case studies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our experts excel at medical case studies including patient history, clinical findings, diagnostic assessments, treatment plans, and outcomes. We follow proper medical case study format and include relevant medical literature support."
      }
    },
    {
      "@type": "Question",
      "name": "Who writes my medical assignment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your medical assignment will be written by a qualified healthcare professional with degrees in Medicine, Nursing, Pharmacy, or related health sciences. Our writers include medical doctors, nurses, pharmacists, and healthcare academics with extensive clinical and teaching experience."
      }
    },
    {
      "@type": "Question",
      "name": "What citation styles do you use for medical assignments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are proficient in all major medical citation styles including AMA (American Medical Association), Vancouver, APA 7th edition, and NLM (National Library of Medicine). We ensure perfect formatting of in-text citations and reference lists according to your requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Is my medical assignment original and plagiarism-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every medical assignment is crafted from scratch based on your specific requirements. We never resell or recycle papers. All work is checked with advanced plagiarism detection software, and we provide a free plagiarism report upon request. All medical content is accurate and properly cited from reputable sources."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with evidence-based medicine assignments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in evidence-based medicine (EBM) assignments including PICO questions, literature searches, critical appraisal of evidence, and applying research findings to clinical practice. Our experts are trained in EBM principles and methodology."
      }
    }
  ]
}

// Medical categories data
const medicalCategories = [
  {
    title: "Nursing",
    description: "Comprehensive assistance with all nursing specialties and levels.",
    icon: "👩‍⚕️",
    topics: ["Fundamentals of Nursing", "Medical-Surgical Nursing", "Pediatric Nursing", "Mental Health Nursing", "Maternal & Child Health", "Critical Care Nursing", "Community Health Nursing", "Nursing Leadership", "Nursing Research", "Nursing Ethics"]
  },
  {
    title: "Medicine",
    description: "Expert help with clinical medicine and medical specialties.",
    icon: "🏥",
    topics: ["Internal Medicine", "Emergency Medicine", "Family Medicine", "Pediatrics", "Psychiatry", "Dermatology", "Neurology", "Cardiology", "Endocrinology", "Gastroenterology"]
  },
  {
    title: "Pharmacology",
    description: "Professional assistance with drug classifications, mechanisms, and therapeutics.",
    icon: "💊",
    topics: ["Drug Classifications", "Pharmacokinetics", "Pharmacodynamics", "Clinical Pharmacology", "Adverse Drug Reactions", "Drug Interactions", "Therapeutic Drug Monitoring", "Prescribing Guidelines", "Patient Education", "Medication Safety"]
  },
  {
    title: "Anatomy & Physiology",
    description: "Comprehensive help with human anatomy and physiological systems.",
    icon: "🧬",
    topics: ["Gross Anatomy", "Microscopic Anatomy", "Cardiovascular System", "Respiratory System", "Nervous System", "Musculoskeletal System", "Endocrine System", "Digestive System", "Renal System", "Reproductive System"]
  },
  {
    title: "Pathology",
    description: "Expert assistance with disease processes and pathological conditions.",
    icon: "🔬",
    topics: ["General Pathology", "Systemic Pathology", "Cellular Injury", "Inflammation", "Neoplasia", "Genetic Disorders", "Infectious Diseases", "Immunopathology", "Cardiovascular Pathology", "Neuropathology"]
  },
  {
    title: "Biochemistry",
    description: "Professional help with biochemical processes in health and disease.",
    icon: "⚗️",
    topics: ["Metabolic Pathways", "Enzymology", "Molecular Biology", "Protein Structure", "Carbohydrate Metabolism", "Lipid Metabolism", "Clinical Biochemistry", "Genetic Biochemistry", "Hormone Biochemistry", "Nutritional Biochemistry"]
  },
  {
    title: "Microbiology",
    description: "Comprehensive assistance with microorganisms and infectious diseases.",
    icon: "🔬",
    topics: ["Bacteriology", "Virology", "Mycology", "Parasitology", "Immunology", "Pathogenic Microbiology", "Clinical Microbiology", "Antimicrobial Therapy", "Infection Control", "Diagnostic Microbiology"]
  },
  {
    title: "Public Health",
    description: "Expert help with population health, epidemiology, and health promotion.",
    icon: "🌍",
    topics: ["Epidemiology", "Biostatistics", "Health Promotion", "Disease Prevention", "Environmental Health", "Global Health", "Health Policy", "Community Health", "Behavioral Health", "Health Education"]
  },
  {
    title: "Healthcare Management",
    description: "Professional assistance with healthcare administration and leadership.",
    icon: "📋",
    topics: ["Healthcare Systems", "Health Policy", "Quality Improvement", "Patient Safety", "Healthcare Finance", "Health Informatics", "Strategic Planning", "Healthcare Leadership", "Ethics in Healthcare", "Regulatory Compliance"]
  },
  {
    title: "Medical Ethics",
    description: "Comprehensive help with ethical issues in medicine and healthcare.",
    icon: "⚖️",
    topics: ["Informed Consent", "Patient Confidentiality", "End-of-Life Care", "Medical Research Ethics", "Genetic Ethics", "Reproductive Ethics", "Resource Allocation", "Professional Boundaries", "Ethical Decision Making", "Healthcare Justice"]
  },
  {
    title: "Evidence-Based Medicine",
    description: "Expert assistance with EBM principles and application.",
    icon: "📊",
    topics: ["PICO Questions", "Literature Search", "Critical Appraisal", "Systematic Reviews", "Meta-analysis", "Clinical Guidelines", "Evidence Implementation", "Outcome Measurement", "Research Translation", "Clinical Decision Making"]
  },
  {
    title: "Medical Research",
    description: "Professional help with medical research papers and proposals.",
    icon: "📚",
    topics: ["Research Design", "Clinical Trials", "Observational Studies", "Data Collection", "Statistical Analysis", "Research Ethics", "Grant Proposals", "Manuscript Writing", "Literature Reviews", "Dissertations"]
  }
]

// Medical specialties data
const medicalSpecialties = [
  { name: "Nursing (BSN)", icon: "👩‍⚕️" },
  { name: "Nursing (MSN)", icon: "👩‍⚕️" },
  { name: "Medicine (MD)", icon: "👨‍⚕️" },
  { name: "Pharmacy (PharmD)", icon: "💊" },
  { name: "Public Health (MPH)", icon: "🌍" },
  { name: "Physician Assistant", icon: "🩺" },
  { name: "Physical Therapy", icon: "🏃" },
  { name: "Occupational Therapy", icon: "🤲" },
  { name: "Dentistry", icon: "🦷" },
  { name: "Veterinary Medicine", icon: "🐾" },
  { name: "Biomedical Sciences", icon: "🔬" },
  { name: "Healthcare Administration", icon: "📋" }
]

// Medical citation styles data
const medicalCitationStyles = [
  { name: "AMA Style", description: "American Medical Association - standard for medical journals" },
  { name: "Vancouver Style", description: "Uniform requirements for biomedical journals" },
  { name: "APA 7th Edition", description: "American Psychological Association - social sciences in medicine" },
  { name: "NLM Style", description: "National Library of Medicine - biomedical citations" },
  { name: "ICMJE Recommendations", description: "International Committee of Medical Journal Editors" },
  { name: "Harvard (Medical)", description: "Harvard referencing for medical sciences" }
]

// Assignment types data
const assignmentTypes = [
  { name: "Medical Case Studies", description: "Comprehensive case analyses with patient history, diagnosis, and treatment plans" },
  { name: "Nursing Care Plans", description: "Detailed care plans with assessment, diagnosis, interventions, and evaluation" },
  { name: "Medical Essays", description: "Well-researched essays on medical topics with critical analysis" },
  { name: "Research Papers", description: "Scholarly research papers with literature review and evidence-based recommendations" },
  { name: "Literature Reviews", description: "Systematic reviews of medical literature on specific topics" },
  { name: "Clinical Reflections", description: "Reflective essays on clinical experiences using reflective models" },
  { name: "Medical Reports", description: "Professional medical reports including patient reports and clinical summaries" },
  { name: "Pharmacology Assignments", description: "Drug studies, mechanisms, and therapeutic applications" },
  { name: "Anatomy Assignments", description: "Detailed anatomical descriptions and physiological explanations" },
  { name: "Pathophysiology Papers", description: "Analysis of disease processes and pathological mechanisms" },
  { name: "Dissertations & Theses", description: "Extended research projects for medical degrees" },
  { name: "Evidence-Based Practice Projects", description: "EBP projects with PICO questions and evidence implementation" }
]

// Medical databases data
const medicalDatabases = [
  { name: "PubMed", icon: "📚" },
  { name: "MEDLINE", icon: "📊" },
  { name: "CINAHL", icon: "🏥" },
  { name: "Cochrane Library", icon: "📑" },
  { name: "Embase", icon: "🔍" },
  { name: "Web of Science", icon: "🌐" },
  { name: "Scopus", icon: "📈" },
  { name: "Google Scholar", icon: "📖" },
  { name: "ScienceDirect", icon: "🔬" },
  { name: "JSTOR", icon: "📚" },
  { name: "PsycINFO", icon: "🧠" },
  { name: "UpToDate", icon: "⚡" }
]

export default function MedicalAssignmentWritingServicePage() {
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
                Medical Assignment <span className={styles.highlight}>Writing Service</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Need professional medical assignment help? Our expert medical writers provide comprehensive assistance with nursing, medicine, pharmacology, anatomy, physiology, pathology, and more. Each assignment features <strong>accurate medical content, evidence-based information, and proper citations</strong> following your specific requirements.
              </p>
              <div className={styles.heroCta}>
                <Link href="#pricing" className={styles.primaryButton}>
                  Explore Medical Services
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Order Your Medical Assignment
                </Link>
              </div>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>350+</span>
                  <span className={styles.statLabel}>Medical Experts</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>97%</span>
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

        {/* Medical Specialties Section */}
        <section className={styles.medicalSpecialties}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Medical Programs We Support
            </h2>
            <p className={styles.sectionSubtitle}>
              Our experts are qualified across all healthcare disciplines
            </p>
            
            <div className={styles.specialtiesGrid}>
              {medicalSpecialties.map((specialty, index) => (
                <div key={index} className={styles.specialtyCard}>
                  <div className={styles.specialtyIcon}>{specialty.icon}</div>
                  <h3 className={styles.specialtyName}>{specialty.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Categories Section */}
        <section id="pricing" className={styles.medicalCategories}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              All Medical Subjects We Cover
            </h2>
            <p className={styles.sectionSubtitle}>
              From nursing to public health — we have experts in every medical field
            </p>
            
            <div className={styles.medicalCategoriesGrid}>
              {medicalCategories.map((category, index) => (
                <div key={index} className={styles.medicalCategoryCard}>
                  <div className={styles.medicalCategoryIcon}>{category.icon}</div>
                  <h3 className={styles.medicalCategoryTitle}>{category.title}</h3>
                  <p className={styles.medicalCategoryDescription}>{category.description}</p>
                  <div className={styles.medicalCategoryTopics}>
                    {category.topics.slice(0, 5).map((topic, i) => (
                      <span key={i} className={styles.topicTag}>{topic}</span>
                    ))}
                    {category.topics.length > 5 && (
                      <span className={styles.topicTag}>+{category.topics.length - 5} more</span>
                    )}
                  </div>
                  <Link href="/contact" className={styles.medicalCategoryLink}>
                    Get Help →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Databases Section */}
        <section className={styles.medicalDatabases}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Medical Databases We Access
            </h2>
            <p className={styles.sectionSubtitle}>
              We use only reputable, peer-reviewed medical sources
            </p>
            
            <div className={styles.databasesGrid}>
              {medicalDatabases.map((db, index) => (
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
              Medical Citation Styles
            </h2>
            <p className={styles.sectionSubtitle}>
              Perfect formatting in all major medical citation styles
            </p>
            
            <div className={styles.citationGrid}>
              {medicalCitationStyles.map((style, index) => (
                <div key={index} className={styles.citationCard}>
                  <h3 className={styles.citationName}>{style.name}</h3>
                  <p className={styles.citationDescription}>{style.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Assignment Types Section */}
        <section className={styles.assignmentTypes}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Types of Medical Assignments We Write
            </h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive assistance for all your medical academic needs
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
              Why Choose Our Medical Assignment Service
            </h2>
            <p className={styles.sectionSubtitle}>
              We deliver excellence in every medical assignment
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>👩‍⚕️</div>
                <h3 className={styles.featureTitle}>Qualified Medical Professionals</h3>
                <p className={styles.featureDescription}>
                  Your assignment will be written by qualified healthcare professionals with degrees in Medicine, Nursing, Pharmacy, or related fields. Many have clinical experience in hospitals and healthcare settings.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📋</div>
                <h3 className={styles.featureTitle}>Evidence-Based Content</h3>
                <p className={styles.featureDescription}>
                  All medical content is evidence-based, drawing from current research, clinical guidelines, and reputable medical sources. We prioritize the most recent and relevant evidence.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📊</div>
                <h3 className={styles.featureTitle}>Clinical Case Expertise</h3>
                <p className={styles.featureDescription}>
                  Our experts excel at medical case studies, providing comprehensive analyses with differential diagnoses, treatment plans, and evidence-based rationales.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📚</div>
                <h3 className={styles.featureTitle}>Proper Medical Citations</h3>
                <p className={styles.featureDescription}>
                  We are proficient in AMA, Vancouver, APA, and other medical citation styles. All sources are properly cited with accurate reference formatting.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔬</div>
                <h3 className={styles.featureTitle}>Accurate Medical Terminology</h3>
                <p className={styles.featureDescription}>
                  Our writers use precise medical terminology correctly and consistently throughout your assignment, demonstrating professional-level knowledge.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>✅</div>
                <h3 className={styles.featureTitle}>Plagiarism-Free Work</h3>
                <p className={styles.featureDescription}>
                  Every medical assignment is crafted from scratch. All content is original and properly cited. Free plagiarism report available.
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
              Get your perfect medical assignment in 4 simple steps
            </p>
            
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Submit Requirements</h3>
                <p className={styles.stepDescription}>
                  Fill out our order form with your medical topic, specific questions, patient case details, citation style, and any special instructions.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Get Matched with Expert</h3>
                <p className={styles.stepDescription}>
                  We match you with a qualified medical professional who specializes in your specific area and has experience with similar assignments.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Review & Revise</h3>
                <p className={styles.stepDescription}>
                  Receive your draft with all medical content and citations. Review carefully and request any revisions. Unlimited free revisions until you're satisfied.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3 className={styles.stepTitle}>Submit with Confidence</h3>
                <p className={styles.stepDescription}>
                  Download your final, polished medical assignment. Ready to submit and guaranteed to meet your requirements and academic standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Medical Section */}
        <section className={styles.whyMedical}>
          <div className={styles.container}>
            <div className={styles.whyMedicalContent}>
              <h2 className={styles.sectionTitle}>
                Why Medical Students Trust Us
              </h2>
              <p className={styles.sectionSubtitle}>
                We understand the unique demands of medical education
              </p>
              
              <div className={styles.whyMedicalGrid}>
                <div className={styles.whyMedicalItem}>
                  <div className={styles.whyMedicalIcon}>⏰</div>
                  <h3 className={styles.whyMedicalTitle}>Clinical Accuracy</h3>
                  <p className={styles.whyMedicalDescription}>
                    Medical assignments require precision. Our experts ensure all clinical information is accurate, current, and reflects best practices in patient care.
                  </p>
                </div>
                
                <div className={styles.whyMedicalItem}>
                  <div className={styles.whyMedicalIcon}>📊</div>
                  <h3 className={styles.whyMedicalTitle}>Evidence-Based Practice</h3>
                  <p className={styles.whyMedicalDescription}>
                    We incorporate the latest research and clinical guidelines, demonstrating the evidence-based approach expected in modern healthcare.
                  </p>
                </div>
                
                <div className={styles.whyMedicalItem}>
                  <div className={styles.whyMedicalIcon}>📝</div>
                  <h3 className={styles.whyMedicalTitle}>Case Study Excellence</h3>
                  <p className={styles.whyMedicalDescription}>
                    Our case studies follow proper medical format with comprehensive patient histories, differential diagnoses, and evidence-based treatment plans.
                  </p>
                </div>
                
                <div className={styles.whyMedicalItem}>
                  <div className={styles.whyMedicalIcon}>🔬</div>
                  <h3 className={styles.whyMedicalTitle}>Research Integration</h3>
                  <p className={styles.whyMedicalDescription}>
                    We integrate current medical research throughout your assignments, demonstrating your engagement with the latest scientific literature.
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
              Everything you need to know about our medical assignment writing service
            </p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What medical subjects do your experts cover?
                </h3>
                <p className={styles.faqAnswer}>
                  Our medical experts cover all major areas including nursing (fundamentals, medical-surgical, pediatric, mental health), medicine (clinical medicine, internal medicine, emergency medicine), pharmacology, anatomy and physiology, pathology, biochemistry, microbiology, public health, epidemiology, healthcare management, medical ethics, evidence-based medicine, and all specialized medical fields.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you help with medical case studies?
                </h3>
                <p className={styles.faqAnswer}>
                  Absolutely! Our experts excel at medical case studies including patient history, clinical findings, diagnostic assessments, treatment plans, and outcomes. We follow proper medical case study format and include relevant medical literature support.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Who writes my medical assignment?
                </h3>
                <p className={styles.faqAnswer}>
                  Your medical assignment will be written by a qualified healthcare professional with degrees in Medicine, Nursing, Pharmacy, or related health sciences. Our writers include medical doctors, nurses, pharmacists, and healthcare academics with extensive clinical and teaching experience.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What citation styles do you use for medical assignments?
                </h3>
                <p className={styles.faqAnswer}>
                  We are proficient in all major medical citation styles including AMA (American Medical Association), Vancouver, APA 7th edition, and NLM (National Library of Medicine). We ensure perfect formatting of in-text citations and reference lists according to your requirements.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Is my medical assignment original and plagiarism-free?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, every medical assignment is crafted from scratch based on your specific requirements. We never resell or recycle papers. All work is checked with advanced plagiarism detection software, and we provide a free plagiarism report upon request. All medical content is accurate and properly cited from reputable sources.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you help with evidence-based medicine assignments?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we specialize in evidence-based medicine (EBM) assignments including PICO questions, literature searches, critical appraisal of evidence, and applying research findings to clinical practice. Our experts are trained in EBM principles and methodology.
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
                Ready to Excel in Your Medical Assignment?
              </h2>
              <p className={styles.ctaText}>
                Whether you need help with nursing, medicine, pharmacology, or any other medical subject — our expert healthcare professionals are ready to assist. Get 100% original, evidence-based content with accurate medical terminology and proper citations.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Order Your Medical Assignment
                </Link>
                <Link href="#pricing" className={styles.ctaSecondary}>
                  View Medical Subjects
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