// src/app/psychology-assignment-writing-service/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// SEO Metadata for Psychology Assignment Writing Service Page
export const metadata: Metadata = {
  title: 'Psychology Assignment Writing Service | Expert Psychology Help',
  description: 'Need professional psychology assignment help? Our expert psychology writers provide comprehensive assistance with clinical, cognitive, developmental, social psychology, and more. 100% original research. Qualified psychologists. 24/7 support.',
  keywords: [
    'psychology assignment writing service',
    'psychology assignment help',
    'clinical psychology assignment help',
    'cognitive psychology assignment help',
    'developmental psychology assignment help',
    'social psychology assignment help',
    'abnormal psychology assignment help',
    'biological psychology assignment help',
    'forensic psychology assignment help',
    'educational psychology assignment help',
    'organizational psychology assignment help',
    'health psychology assignment help',
    'neuropsychology assignment help',
    'research methods in psychology',
    'psychological assessment help',
    'psychometric testing help',
    'psychology case study help',
    'psychology research paper help',
    'psychology literature review',
    'psychology dissertation help',
    'APA format psychology papers',
    'psychological theories',
    'personality psychology help',
    'counseling psychology help'
  ],
  authors: [{ name: 'HelpWithMyAssignments Psychology Division' }],
  creator: 'HelpWithMyAssignments',
  publisher: 'HelpWithMyAssignments',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/psychology-assignment-writing-service',
  },
  openGraph: {
    title: 'Psychology Assignment Writing Service | Expert Psychology Help',
    description: '🧠 Get expert psychology assignment help from qualified psychologists. Clinical, cognitive, developmental, social psychology & more. 100% original research. APA format. 24/7 support.',
    url: '/psychology-assignment-writing-service',
    siteName: 'HelpWithMyAssignments',
    images: [
      {
        url: '/images/og-psychology-assignment-service.jpg',
        width: 1200,
        height: 630,
        alt: 'Psychology Assignment Writing Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psychology Assignment Writing Service',
    description: '🧠 Expert psychology assignment help. Get your perfect psychology assignment today!',
    images: ['/images/twitter-psychology-assignment-service.jpg'],
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
  classification: 'Psychology Academic Writing Services',
}

// Structured Data for Rich Results - Service Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://helpassignments.com/psychology-assignment-writing-service",
  "name": "Psychology Assignment Writing Service",
  "description": "Professional psychology assignment help from qualified psychologists. Comprehensive assistance with clinical psychology, cognitive psychology, developmental psychology, social psychology, abnormal psychology, and all psychology disciplines. Each assignment features accurate application of psychological theories, proper research methodology, and APA 7th edition formatting.",
  "url": "https://helpassignments.com/psychology-assignment-writing-service",
  "provider": {
    "@type": "Organization",
    "name": "HelpWithMyAssignments",
    "url": "https://helpassignments.com"
  },
  "serviceType": "Psychology Assignment Writing Service",
  "areaServed": {
    "@type": "Country",
    "name": "Multiple Countries"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Psychology Assignment Types",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Clinical Psychology Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cognitive Psychology Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Developmental Psychology Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Social Psychology Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Abnormal Psychology Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Psychology Research Paper Help"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "3876",
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
      "name": "Psychology Assignment Writing Service",
      "item": "https://helpassignments.com/psychology-assignment-writing-service"
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
      "name": "What psychology topics do your experts cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our psychology experts cover all major areas including clinical psychology, cognitive psychology, developmental psychology, social psychology, abnormal psychology, biological psychology, forensic psychology, educational psychology, organizational psychology, health psychology, neuropsychology, personality psychology, counseling psychology, and research methods in psychology."
      }
    },
    {
      "@type": "Question",
      "name": "Do you follow APA 7th edition guidelines?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all psychology assignments are formatted according to APA 7th edition guidelines, including title page, abstract, headings, in-text citations, references, and overall formatting. We ensure perfect compliance with the latest APA standards."
      }
    },
    {
      "@type": "Question",
      "name": "Who writes my psychology assignment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your psychology assignment will be written by a qualified psychologist with Bachelor's, Master's, or PhD degrees in Psychology. Our writers include clinical psychologists, counseling psychologists, researchers, and academics with extensive experience in psychological writing and research."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with psychological case studies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our experts excel at psychological case studies including client background, presenting problems, assessment, diagnosis (using DSM-5 criteria), case formulation, treatment planning, and prognosis. We apply appropriate theoretical frameworks to each case."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide help with research methods and statistics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide comprehensive assistance with psychological research methods including experimental design, surveys, observational studies, qualitative research, and statistical analysis using SPSS, R, and other software. We help with methodology chapters, data analysis, and results interpretation."
      }
    },
    {
      "@type": "Question",
      "name": "Is my psychology assignment original and plagiarism-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every psychology assignment is crafted from scratch based on your specific requirements. We never resell or recycle papers. All work is checked with advanced plagiarism detection software, and we provide a free plagiarism report upon request. All psychological content is original and properly cited from peer-reviewed sources."
      }
    }
  ]
}

// Psychology branches data
const psychologyBranches = [
  {
    title: "Clinical Psychology",
    description: "Assessment, diagnosis, and treatment of mental health disorders using evidence-based approaches.",
    icon: "🧠",
    topics: ["Psychopathology", "Psychotherapy", "Assessment", "DSM-5", "Treatment Planning", "Clinical Interviewing", "Cognitive-Behavioral Therapy", "Psychodynamic Therapy", "Humanistic Therapy", "Ethics in Clinical Practice"]
  },
  {
    title: "Cognitive Psychology",
    description: "Study of mental processes including perception, attention, memory, language, and problem-solving.",
    icon: "💭",
    topics: ["Attention", "Memory Systems", "Perception", "Language Processing", "Decision Making", "Problem Solving", "Cognitive Neuroscience", "Mental Imagery", "Consciousness", "Cognitive Development"]
  },
  {
    title: "Developmental Psychology",
    description: "Study of psychological changes across the lifespan from infancy through old age.",
    icon: "👶",
    topics: ["Child Development", "Adolescent Development", "Adult Development", "Aging", "Attachment Theory", "Piaget's Theory", "Erikson's Stages", "Vygotsky's Theory", "Moral Development", "Identity Formation"]
  },
  {
    title: "Social Psychology",
    description: "Study of how people's thoughts, feelings, and behaviors are influenced by others.",
    icon: "👥",
    topics: ["Social Cognition", "Attitudes", "Persuasion", "Conformity", "Obedience", "Group Dynamics", "Prejudice", "Aggression", "Prosocial Behavior", "Interpersonal Relationships"]
  },
  {
    title: "Abnormal Psychology",
    description: "Study of atypical behavior patterns and psychological disorders.",
    icon: "📊",
    topics: ["Anxiety Disorders", "Mood Disorders", "Schizophrenia Spectrum", "Personality Disorders", "Eating Disorders", "Substance Use Disorders", "Trauma-Related Disorders", "Obsessive-Compulsive Disorders", "Dissociative Disorders", "Neurodevelopmental Disorders"]
  },
  {
    title: "Biological Psychology",
    description: "Study of the biological bases of behavior and mental processes.",
    icon: "🧬",
    topics: ["Neuroanatomy", "Neurotransmitters", "Brain Structures", "Hormones", "Genetics", "Evolutionary Psychology", "Psychopharmacology", "Neuroplasticity", "Sensation & Perception", "Motivation & Emotion"]
  },
  {
    title: "Forensic Psychology",
    description: "Application of psychological principles to legal and criminal justice systems.",
    icon: "⚖️",
    topics: ["Criminal Profiling", "Eyewitness Testimony", "Jury Decision Making", "Competency Evaluations", "Insanity Defense", "Risk Assessment", "Forensic Assessment", "Expert Testimony", "Correctional Psychology", "Police Psychology"]
  },
  {
    title: "Educational Psychology",
    description: "Study of how people learn and the psychological processes involved in education.",
    icon: "🎓",
    topics: ["Learning Theories", "Motivation", "Classroom Management", "Instructional Design", "Assessment", "Special Education", "Gifted Education", "Learning Disabilities", "Educational Technology", "Student Development"]
  },
  {
    title: "Organizational Psychology",
    description: "Application of psychological principles to workplace environments and organizations.",
    icon: "💼",
    topics: ["Employee Selection", "Training & Development", "Performance Appraisal", "Leadership", "Motivation at Work", "Job Satisfaction", "Organizational Culture", "Team Dynamics", "Work-Life Balance", "Organizational Change"]
  },
  {
    title: "Health Psychology",
    description: "Study of how psychological factors influence health, illness, and healthcare.",
    icon: "🏥",
    topics: ["Stress & Coping", "Health Behavior Change", "Patient-Provider Communication", "Chronic Illness Management", "Pain Management", "Psychoneuroimmunology", "Health Promotion", "Adherence to Treatment", "End-of-Life Care", "Behavioral Medicine"]
  },
  {
    title: "Neuropsychology",
    description: "Study of the relationship between brain function and behavior.",
    icon: "🔬",
    topics: ["Brain-Behavior Relationships", "Neuropsychological Assessment", "Cognitive Rehabilitation", "Traumatic Brain Injury", "Neurodegenerative Disorders", "Stroke", "Epilepsy", "Neurodevelopmental Disorders", "Functional Neuroimaging", "Clinical Neuropsychology"]
  },
  {
    title: "Personality Psychology",
    description: "Study of individual differences in patterns of thinking, feeling, and behaving.",
    icon: "🌟",
    topics: ["Trait Theories", "Psychodynamic Theories", "Humanistic Theories", "Social-Cognitive Theories", "Personality Assessment", "Self-Concept", "Identity", "Temperament", "Personality Disorders", "Cross-Cultural Personality"]
  }
]

// Psychological theories data
const psychologicalTheories = [
  { name: "Psychoanalytic Theory", founder: "Sigmund Freud" },
  { name: "Behaviorism", founder: "John B. Watson, B.F. Skinner" },
  { name: "Cognitive Psychology", founder: "Jean Piaget, Ulric Neisser" },
  { name: "Humanistic Psychology", founder: "Carl Rogers, Abraham Maslow" },
  { name: "Social Learning Theory", founder: "Albert Bandura" },
  { name: "Attachment Theory", founder: "John Bowlby, Mary Ainsworth" },
  { name: "Piaget's Cognitive Development", founder: "Jean Piaget" },
  { name: "Erikson's Psychosocial Theory", founder: "Erik Erikson" },
  { name: "Vygotsky's Sociocultural Theory", founder: "Lev Vygotsky" },
  { name: "Kohlberg's Moral Development", founder: "Lawrence Kohlberg" },
  { name: "Gardner's Multiple Intelligences", founder: "Howard Gardner" },
  { name: "Sternberg's Triarchic Theory", founder: "Robert Sternberg" }
]

// Research methods data
const researchMethods = [
  { name: "Experimental Design", description: "Controlled experiments with independent and dependent variables" },
  { name: "Correlational Studies", description: "Examining relationships between variables" },
  { name: "Surveys & Questionnaires", description: "Self-report data collection methods" },
  { name: "Observational Methods", description: "Naturalistic and structured observation" },
  { name: "Case Studies", description: "In-depth examination of individuals or small groups" },
  { name: "Longitudinal Studies", description: "Research conducted over extended periods" },
  { name: "Cross-Sectional Studies", description: "Comparing different age groups at one time" },
  { name: "Qualitative Research", description: "Interviews, focus groups, thematic analysis" },
  { name: "Meta-Analysis", description: "Statistical synthesis of multiple studies" },
  { name: "Quasi-Experimental Design", description: "Research without random assignment" }
]

// Assessment tools data
const assessmentTools = [
  { name: "WAIS-IV", category: "Intelligence" },
  { name: "WISC-V", category: "Child Intelligence" },
  { name: "MMPI-3", category: "Personality" },
  { name: "Beck Depression Inventory", category: "Depression" },
  { name: "SCID-5", category: "Clinical Interview" },
  { name: "WAIS-IV", category: "Memory" },
  { name: "Rorschach Inkblot Test", category: "Projective" },
  { name: "TAT", category: "Projective" },
  { name: "NEO-PI-3", category: "Personality" },
  { name: "Vineland-3", category: "Adaptive Behavior" },
  { name: "Conners' Rating Scales", category: "ADHD" },
  { name: "ADOS-2", category: "Autism" }
]

// Statistical software data
const statisticalSoftware = [
  { name: "SPSS", category: "Statistical Analysis" },
  { name: "R", category: "Statistical Computing" },
  { name: "Python", category: "Data Analysis" },
  { name: "SAS", category: "Statistical Analysis" },
  { name: "Stata", category: "Statistical Analysis" },
  { name: "Mplus", category: "SEM" },
  { name: "AMOS", category: "SEM" },
  { name: "JASP", category: "Free Statistics" },
  { name: "Jamovi", category: "Free Statistics" },
  { name: "NVivo", category: "Qualitative Analysis" }
]

// Assignment types data
const assignmentTypes = [
  { name: "Psychology Essays", description: "Well-researched essays on psychological topics with critical analysis and theory application" },
  { name: "Research Papers", description: "Scholarly research papers with literature review, methodology, and discussion" },
  { name: "Case Studies", description: "Comprehensive psychological case analyses with diagnosis and treatment planning" },
  { name: "Literature Reviews", description: "Systematic reviews of psychological literature on specific topics" },
  { name: "Lab Reports", description: "Experimental reports with introduction, method, results, and discussion" },
  { name: "Critical Analyses", description: "Critical evaluation of psychological theories or research" },
  { name: "Reflective Essays", description: "Personal reflections on psychological concepts and experiences" },
  { name: "Annotated Bibliographies", description: "Summaries and evaluations of psychological sources" },
  { name: "Dissertations & Theses", description: "Extended research projects for psychology degrees" },
  { name: "Discussion Posts", description: "Engaging discussion posts for online psychology courses" },
  { name: "Article Critiques", description: "Critical evaluation of published psychological research" },
  { name: "Research Proposals", description: "Detailed proposals for psychological research studies" }
]

export default function PsychologyAssignmentWritingServicePage() {
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
                Psychology Assignment <span className={styles.highlight}>Writing Service</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Need professional psychology assignment help? Our expert psychology writers provide comprehensive assistance with clinical, cognitive, developmental, social psychology, and more. Each assignment features <strong>accurate application of psychological theories, proper research methodology, and APA 7th edition formatting</strong>.
              </p>
              <div className={styles.heroCta}>
                <Link href="#pricing" className={styles.primaryButton}>
                  Explore Psychology Services
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Order Your Psychology Assignment
                </Link>
              </div>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>300+</span>
                  <span className={styles.statLabel}>Psychology Experts</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>100%</span>
                  <span className={styles.statLabel}>APA Compliant</span>
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

        {/* Psychological Theories Section */}
        <section className={styles.psychologicalTheories}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Key Psychological Theories We Apply
            </h2>
            <p className={styles.sectionSubtitle}>
              From Freud to Bandura — we integrate major theoretical perspectives
            </p>
            
            <div className={styles.theoriesGrid}>
              {psychologicalTheories.map((theory, index) => (
                <div key={index} className={styles.theoryCard}>
                  <h3 className={styles.theoryName}>{theory.name}</h3>
                  <p className={styles.theoryFounder}>{theory.founder}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Psychology Branches Section */}
        <section id="pricing" className={styles.psychologyBranches}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              All Psychology Branches We Cover
            </h2>
            <p className={styles.sectionSubtitle}>
              From clinical to cognitive — we have experts in every psychology field
            </p>
            
            <div className={styles.branchesGrid}>
              {psychologyBranches.map((branch, index) => (
                <div key={index} className={styles.branchCard}>
                  <div className={styles.branchIcon}>{branch.icon}</div>
                  <h3 className={styles.branchTitle}>{branch.title}</h3>
                  <p className={styles.branchDescription}>{branch.description}</p>
                  <div className={styles.branchTopics}>
                    {branch.topics.slice(0, 5).map((topic, i) => (
                      <span key={i} className={styles.topicTag}>{topic}</span>
                    ))}
                    {branch.topics.length > 5 && (
                      <span className={styles.topicTag}>+{branch.topics.length - 5} more</span>
                    )}
                  </div>
                  <Link href="/contact" className={styles.branchLink}>
                    Get Help →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Methods Section */}
        <section className={styles.researchMethods}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Psychological Research Methods
            </h2>
            <p className={styles.sectionSubtitle}>
              Expertise in quantitative and qualitative research methodologies
            </p>
            
            <div className={styles.methodsGrid}>
              {researchMethods.map((method, index) => (
                <div key={index} className={styles.methodCard}>
                  <h3 className={styles.methodName}>{method.name}</h3>
                  <p className={styles.methodDescription}>{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Assessment Tools Section */}
        <section className={styles.assessmentTools}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Psychological Assessment Tools
            </h2>
            <p className={styles.sectionSubtitle}>
              Familiarity with major psychological tests and measures
            </p>
            
            <div className={styles.assessmentGrid}>
              {assessmentTools.map((tool, index) => (
                <div key={index} className={styles.assessmentCard}>
                  <h3 className={styles.assessmentName}>{tool.name}</h3>
                  <span className={styles.assessmentCategory}>{tool.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistical Software Section */}
        <section className={styles.statisticalSoftware}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Statistical Software We Use
            </h2>
            <p className={styles.sectionSubtitle}>
              Proficiency in all major statistical packages for psychology
            </p>
            
            <div className={styles.softwareGrid}>
              {statisticalSoftware.map((software, index) => (
                <div key={index} className={styles.softwareCard}>
                  <h3 className={styles.softwareName}>{software.name}</h3>
                  <span className={styles.softwareCategory}>{software.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Assignment Types Section */}
        <section className={styles.assignmentTypes}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Types of Psychology Assignments We Write
            </h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive assistance for all your psychology academic needs
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
              Why Choose Our Psychology Assignment Service
            </h2>
            <p className={styles.sectionSubtitle}>
              We deliver excellence in every psychology assignment
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🧠</div>
                <h3 className={styles.featureTitle}>Qualified Psychologists</h3>
                <p className={styles.featureDescription}>
                  Your assignment will be written by qualified psychologists with Bachelor's, Master's, or PhD degrees. Many are practicing clinicians, researchers, or academics with extensive experience.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📚</div>
                <h3 className={styles.featureTitle}>APA 7th Edition Experts</h3>
                <p className={styles.featureDescription}>
                  All psychology assignments are formatted according to the latest APA 7th edition guidelines, including title page, headings, citations, and references.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📋</div>
                <h3 className={styles.featureTitle}>DSM-5 Knowledge</h3>
                <p className={styles.featureDescription}>
                  Our clinical experts are proficient in DSM-5 diagnostic criteria for accurate diagnosis and case formulation in abnormal and clinical psychology assignments.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📊</div>
                <h3 className={styles.featureTitle}>Statistical Analysis</h3>
                <p className={styles.featureDescription}>
                  We provide comprehensive statistical analysis using SPSS, R, and other software. From descriptive statistics to advanced analyses like ANOVA, regression, and factor analysis.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔬</div>
                <h3 className={styles.featureTitle}>Research Methods Expertise</h3>
                <p className={styles.featureDescription}>
                  Our experts are skilled in all psychological research methods, helping you design studies, collect data, and interpret findings correctly.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>✅</div>
                <h3 className={styles.featureTitle}>Plagiarism-Free Work</h3>
                <p className={styles.featureDescription}>
                  Every psychology assignment is crafted from scratch. All content is original and properly cited from peer-reviewed sources. Free plagiarism report available.
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
              Get your perfect psychology assignment in 4 simple steps
            </p>
            
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Submit Your Requirements</h3>
                <p className={styles.stepDescription}>
                  Share your psychology topic, specific questions, theoretical framework, APA formatting requirements, and any special instructions.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Get Matched with Expert</h3>
                <p className={styles.stepDescription}>
                  We match you with a qualified psychologist who specializes in your specific area and has experience with similar assignments.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Review & Revise</h3>
                <p className={styles.stepDescription}>
                  Receive your draft with all psychological content. Review carefully and request any revisions. Unlimited free revisions until you're satisfied.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3 className={styles.stepTitle}>Submit with Confidence</h3>
                <p className={styles.stepDescription}>
                  Download your final, polished psychology assignment in perfect APA format. Ready to submit and guaranteed to meet your requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Psychology Section */}
        <section className={styles.whyPsychology}>
          <div className={styles.container}>
            <div className={styles.whyPsychologyContent}>
              <h2 className={styles.sectionTitle}>
                Why Psychology Students Trust Us
              </h2>
              <p className={styles.sectionSubtitle}>
                We understand the unique demands of psychology education
              </p>
              
              <div className={styles.whyPsychologyGrid}>
                <div className={styles.whyPsychologyItem}>
                  <div className={styles.whyPsychologyIcon}>📚</div>
                  <h3 className={styles.whyPsychologyTitle}>APA Mastery</h3>
                  <p className={styles.whyPsychologyDescription}>
                    Psychology demands perfect APA formatting. Our experts ensure every citation, reference, and heading follows APA 7th edition exactly.
                  </p>
                </div>
                
                <div className={styles.whyPsychologyItem}>
                  <div className={styles.whyPsychologyIcon}>🧪</div>
                  <h3 className={styles.whyPsychologyTitle}>Research Methods</h3>
                  <p className={styles.whyPsychologyDescription}>
                    We help you design methodologically sound studies and correctly analyze data using appropriate statistical tests.
                  </p>
                </div>
                
                <div className={styles.whyPsychologyItem}>
                  <div className={styles.whyPsychologyIcon}>📋</div>
                  <h3 className={styles.whyPsychologyTitle}>DSM-5 Accuracy</h3>
                  <p className={styles.whyPsychologyDescription}>
                    Clinical assignments require accurate diagnosis. Our experts apply DSM-5 criteria correctly for all psychological disorders.
                  </p>
                </div>
                
                <div className={styles.whyPsychologyItem}>
                  <div className={styles.whyPsychologyIcon}>💭</div>
                  <h3 className={styles.whyPsychologyTitle}>Theory Application</h3>
                  <p className={styles.whyPsychologyDescription}>
                    We correctly apply psychological theories to real-world situations, demonstrating deep understanding of theoretical frameworks.
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
              Everything you need to know about our psychology assignment writing service
            </p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What psychology topics do your experts cover?
                </h3>
                <p className={styles.faqAnswer}>
                  Our psychology experts cover all major areas including clinical psychology, cognitive psychology, developmental psychology, social psychology, abnormal psychology, biological psychology, forensic psychology, educational psychology, organizational psychology, health psychology, neuropsychology, personality psychology, counseling psychology, and research methods in psychology.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you follow APA 7th edition guidelines?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, all psychology assignments are formatted according to APA 7th edition guidelines, including title page, abstract, headings, in-text citations, references, and overall formatting. We ensure perfect compliance with the latest APA standards.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Who writes my psychology assignment?
                </h3>
                <p className={styles.faqAnswer}>
                  Your psychology assignment will be written by a qualified psychologist with Bachelor's, Master's, or PhD degrees in Psychology. Our writers include clinical psychologists, counseling psychologists, researchers, and academics with extensive experience in psychological writing and research.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you help with psychological case studies?
                </h3>
                <p className={styles.faqAnswer}>
                  Absolutely! Our experts excel at psychological case studies including client background, presenting problems, assessment, diagnosis (using DSM-5 criteria), case formulation, treatment planning, and prognosis. We apply appropriate theoretical frameworks to each case.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you provide help with research methods and statistics?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we provide comprehensive assistance with psychological research methods including experimental design, surveys, observational studies, qualitative research, and statistical analysis using SPSS, R, and other software. We help with methodology chapters, data analysis, and results interpretation.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Is my psychology assignment original and plagiarism-free?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, every psychology assignment is crafted from scratch based on your specific requirements. We never resell or recycle papers. All work is checked with advanced plagiarism detection software, and we provide a free plagiarism report upon request. All psychological content is original and properly cited from peer-reviewed sources.
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
                Ready to Ace Your Psychology Assignment?
              </h2>
              <p className={styles.ctaText}>
                Whether you need help with clinical psychology, research methods, or any other psychology topic — our expert psychologists are ready to assist. Get 100% original, APA-formatted content with accurate theory application.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Order Your Psychology Assignment
                </Link>
                <Link href="#pricing" className={styles.ctaSecondary}>
                  View Psychology Branches
                </Link>
              </div>
              <div className={styles.ctaTrust}>
                <span>APA 7th Edition Compliant</span>
                <span>DSM-5 Accurate</span>
                <span>Free Plagiarism Report</span>
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