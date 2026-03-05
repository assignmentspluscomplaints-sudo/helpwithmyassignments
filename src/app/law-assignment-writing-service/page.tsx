// src/app/law-assignment-writing-service/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// SEO Metadata for Law Assignment Writing Service Page
export const metadata: Metadata = {
  title: 'Law Assignment Writing Service | Expert Legal Assignment Help',
  description: 'Need professional law assignment help? Our expert legal writers provide comprehensive assistance with contract law, criminal law, tort law, constitutional law, and more. 100% original, well-researched law assignments. UK/US/Australian law experts. 24/7 support.',
  keywords: [
    'law assignment writing service',
    'law assignment help',
    'legal assignment help',
    'contract law assignment help',
    'criminal law assignment help',
    'tort law assignment help',
    'constitutional law assignment help',
    'business law assignment help',
    'company law assignment help',
    'international law assignment help',
    'human rights law assignment',
    'equity and trust law help',
    'property law assignment help',
    'jurisprudence assignment help',
    'legal research paper help',
    'law essay writing service',
    'llb assignment help',
    'llm thesis help',
    'case study analysis law',
    'moot court preparation'
  ],
  authors: [{ name: 'HelpWithMyAssignments Law Division' }],
  creator: 'HelpWithMyAssignments',
  publisher: 'HelpWithMyAssignments',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/law-assignment-writing-service',
  },
  openGraph: {
    title: 'Law Assignment Writing Service | Expert Legal Assignment Help',
    description: '⚖️ Get expert law assignment help from qualified legal professionals. Contract law, criminal law, tort law, constitutional law & more. 100% original research. UK/US/Australian law experts. 24/7 support.',
    url: '/law-assignment-writing-service',
    siteName: 'HelpWithMyAssignments',
    images: [
      {
        url: '/images/og-law-assignment-service.jpg',
        width: 1200,
        height: 630,
        alt: 'Law Assignment Writing Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Law Assignment Writing Service',
    description: '⚖️ Expert law assignment help. Get your perfect legal assignment today!',
    images: ['/images/twitter-law-assignment-service.jpg'],
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
  classification: 'Legal Academic Writing Services',
}

// Structured Data for Rich Results - Service Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://helpassignments.com/law-assignment-writing-service",
  "name": "Law Assignment Writing Service",
  "description": "Professional law assignment help from qualified legal experts. Comprehensive assistance with contract law, criminal law, tort law, constitutional law, business law, international law, and all legal disciplines. Each assignment is crafted from scratch, follows your specific guidelines, and adheres to OSCOLA, Bluebook, AGLC, or other legal citation styles.",
  "url": "https://helpassignments.com/law-assignment-writing-service",
  "provider": {
    "@type": "Organization",
    "name": "HelpWithMyAssignments",
    "url": "https://helpassignments.com"
  },
  "serviceType": "Law Assignment Writing Service",
  "areaServed": {
    "@type": "Country",
    "name": "Multiple Countries"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Law Assignment Types",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Contract Law Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Criminal Law Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tort Law Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Constitutional Law Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Law Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "International Law Assignment Help"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "3256",
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
      "name": "Law Assignment Writing Service",
      "item": "https://helpassignments.com/law-assignment-writing-service"
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
      "name": "What areas of law do your experts cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our legal experts cover all major areas of law including contract law, criminal law, tort law, constitutional law, business law, company law, international law, human rights law, equity and trust law, property law, jurisprudence, environmental law, family law, employment law, and more. We have specialists in UK law, US law, Australian law, Canadian law, and EU law."
      }
    },
    {
      "@type": "Question",
      "name": "Do you follow specific legal citation styles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our law experts are proficient in all major legal citation styles including OSCOLA (Oxford University Standard for Citation of Legal Authorities), Bluebook (Harvard Law Review), AGLC (Australian Guide to Legal Citation), McGill Guide (Canadian Guide to Uniform Legal Citation), and other jurisdiction-specific formats. We ensure your assignment adheres to the required citation style."
      }
    },
    {
      "@type": "Question",
      "name": "Who writes my law assignment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your law assignment will be written by a qualified legal expert with advanced degrees (LLB, LLM, or PhD) from reputable law schools. Our writers include practicing lawyers, legal researchers, and law professors who specialize in various areas of law and have extensive experience in legal academic writing."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with case study analysis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our legal experts excel at case study analysis, including identifying legal issues, applying relevant statutes and precedents, analyzing judicial reasoning, and drawing well-supported conclusions. We can help you analyze landmark cases, recent judgments, or hypothetical scenarios."
      }
    },
    {
      "@type": "Question",
      "name": "Is my law assignment original and plagiarism-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every law assignment is crafted from scratch based on your specific requirements. We never resell or recycle papers. All work is checked with advanced plagiarism detection software, and we provide a free plagiarism report upon request. Our legal research is thorough and properly cited."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help with LLB and LLM assignments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide comprehensive assistance for both undergraduate (LLB) and postgraduate (LLM) law students. Our experts can help with essays, research papers, dissertations, theses, case briefs, legal memos, and moot court preparations at all academic levels."
      }
    }
  ]
}

// Law categories data
const lawCategories = [
  {
    title: "Contract Law",
    description: "Comprehensive assistance with contract formation, terms, vitiating factors, discharge, remedies, and privity. Analysis of offer, acceptance, consideration, intention to create legal relations, and contractual capacity.",
    icon: "📝",
    topics: ["Offer & Acceptance", "Consideration", "Contract Terms", "Misrepresentation", "Frustration", "Breach of Contract"]
  },
  {
    title: "Criminal Law",
    description: "Expert help with criminal law principles, offenses, defenses, and procedure. Analysis of actus reus, mens rea, strict liability, homicide, theft, and criminal defenses.",
    icon: "⚖️",
    topics: ["Actus Reus & Mens Rea", "Homicide", "Theft & Fraud", "Criminal Defenses", "Inchoate Offenses", "Sentencing"]
  },
  {
    title: "Tort Law",
    description: "Professional assistance with tortious liability, negligence, nuisance, defamation, and strict liability. Analysis of duty of care, breach, causation, remoteness, and defenses.",
    icon: "🛡️",
    topics: ["Negligence", "Duty of Care", "Breach of Duty", "Causation", "Defamation", "Nuisance"]
  },
  {
    title: "Constitutional Law",
    description: "Comprehensive help with constitutional principles, judicial review, fundamental rights, separation of powers, and federalism. Analysis of landmark cases and constitutional interpretation.",
    icon: "🏛️",
    topics: ["Judicial Review", "Fundamental Rights", "Separation of Powers", "Federalism", "Constitutional Interpretation", "Parliamentary Sovereignty"]
  },
  {
    title: "Business & Company Law",
    description: "Expert assistance with company formation, corporate governance, directors' duties, shareholder rights, insolvency, and mergers & acquisitions. Analysis of corporate legal structures and regulations.",
    icon: "💼",
    topics: ["Company Formation", "Directors' Duties", "Shareholder Rights", "Corporate Governance", "Insolvency", "Mergers & Acquisitions"]
  },
  {
    title: "International Law",
    description: "Professional help with public international law, private international law, treaty law, international human rights, and international humanitarian law. Analysis of ICJ cases and international tribunals.",
    icon: "🌐",
    topics: ["Public International Law", "Treaty Law", "International Human Rights", "Law of the Sea", "International Criminal Law", "State Responsibility"]
  },
  {
    title: "Equity & Trusts",
    description: "Comprehensive assistance with equitable principles, trusts creation, trustee duties, beneficiary rights, and remedies. Analysis of express trusts, resulting trusts, constructive trusts, and charitable trusts.",
    icon: "🤝",
    topics: ["Express Trusts", "Resulting Trusts", "Constructive Trusts", "Trustee Duties", "Charitable Trusts", "Equitable Remedies"]
  },
  {
    title: "Property Law",
    description: "Expert help with real property, personal property, land law, easements, covenants, and mortgages. Analysis of proprietary rights, registration, and transfer of property.",
    icon: "🏠",
    topics: ["Land Law", "Easements & Covenants", "Mortgages", "Adverse Possession", "Co-ownership", "Leasehold & Freehold"]
  },
  {
    title: "Jurisprudence",
    description: "Professional assistance with legal theory, natural law, legal positivism, legal realism, critical legal studies, and feminist jurisprudence. Analysis of major legal philosophers and theoretical frameworks.",
    icon: "📚",
    topics: ["Natural Law", "Legal Positivism", "Legal Realism", "Critical Legal Studies", "Feminist Jurisprudence", "Ronald Dworkin"]
  },
  {
    title: "Human Rights Law",
    description: "Comprehensive help with international and domestic human rights frameworks, ECHR, ICCPR, ICESCR, and human rights litigation. Analysis of landmark human rights cases and protections.",
    icon: "🕊️",
    topics: ["ECHR", "ICCPR", "ICESCR", "Discrimination Law", "Right to Privacy", "Freedom of Expression"]
  },
  {
    title: "Employment Law",
    description: "Expert assistance with employment contracts, discrimination, unfair dismissal, workplace rights, and collective labor law. Analysis of employer-employee relationships and statutory protections.",
    icon: "👥",
    topics: ["Employment Contracts", "Discrimination", "Unfair Dismissal", "Workplace Rights", "Collective Bargaining", "Health & Safety"]
  },
  {
    title: "Environmental Law",
    description: "Professional help with environmental regulations, climate change law, pollution control, conservation, and international environmental agreements. Analysis of regulatory frameworks and compliance.",
    icon: "🌍",
    topics: ["Climate Change Law", "Pollution Control", "Conservation", "Environmental Regulations", "International Agreements", "Sustainable Development"]
  }
]

// Legal systems data
const legalSystems = [
  { name: "UK Law", description: "English and Welsh law, Scottish law, Northern Irish law", icon: "🇬🇧" },
  { name: "US Law", description: "Federal law, state law, constitutional law", icon: "🇺🇸" },
  { name: "Australian Law", description: "Commonwealth law, state and territory law", icon: "🇦🇺" },
  { name: "Canadian Law", description: "Federal law, provincial law, Quebec civil law", icon: "🇨🇦" },
  { name: "EU Law", description: "European Union regulations, directives, case law", icon: "🇪🇺" },
  { name: "International Law", description: "Public and private international law", icon: "🌐" }
]

// Citation styles data
const citationStyles = [
  { name: "OSCOLA", description: "Oxford University Standard for Citation of Legal Authorities" },
  { name: "Bluebook", description: "Harvard Law Review Association citation style" },
  { name: "AGLC", description: "Australian Guide to Legal Citation" },
  { name: "McGill Guide", description: "Canadian Guide to Uniform Legal Citation" },
  { name: "APA 7th", description: "American Psychological Association for law & social sciences" },
  { name: "MLA 9th", description: "Modern Language Association for humanities & law" }
]

// Assignment types data
const assignmentTypes = [
  { name: "Law Essays", description: "Well-structured essays on legal topics with clear arguments" },
  { name: "Case Study Analysis", description: "In-depth analysis of legal cases and judicial reasoning" },
  { name: "Legal Research Papers", description: "Comprehensive research papers with primary and secondary sources" },
  { name: "Case Briefs", description: "Concise summaries of cases with key facts, issues, and holdings" },
  { name: "Legal Memos", description: "Professional legal memoranda for internal use" },
  { name: "Moot Court Prep", description: "Preparation materials for moot court competitions" },
  { name: "Dissertations & Theses", description: "Extended research projects for LLB and LLM" },
  { name: "Problem Questions", description: "Analysis of hypothetical scenarios with legal solutions" }
]

export default function LawAssignmentWritingServicePage() {
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
                Law Assignment <span className={styles.highlight}>Writing Service</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Need professional law assignment help? Our expert legal writers provide comprehensive assistance with contract law, criminal law, tort law, constitutional law, and more. Each assignment is crafted from scratch, follows your specific guidelines, and adheres to OSCOLA, Bluebook, AGLC, or other legal citation styles.
              </p>
              <div className={styles.heroCta}>
                <Link href="#pricing" className={styles.primaryButton}>
                  View Law Services
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Order Your Law Assignment
                </Link>
              </div>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>300+</span>
                  <span className={styles.statLabel}>Law Experts</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>4.9/5</span>
                  <span className={styles.statLabel}>Student Rating</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>5000+</span>
                  <span className={styles.statLabel}>Law Assignments</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Systems Section */}
        <section className={styles.legalSystems}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Legal Systems We Cover
            </h2>
            <p className={styles.sectionSubtitle}>
              Our experts are qualified in major legal jurisdictions worldwide
            </p>
            
            <div className={styles.legalSystemsGrid}>
              {legalSystems.map((system, index) => (
                <div key={index} className={styles.legalSystemCard}>
                  <div className={styles.legalSystemIcon}>{system.icon}</div>
                  <h3 className={styles.legalSystemName}>{system.name}</h3>
                  <p className={styles.legalSystemDescription}>{system.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Law Categories Section */}
        <section id="pricing" className={styles.lawCategories}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              All Law Subjects We Cover
            </h2>
            <p className={styles.sectionSubtitle}>
              From contract law to international law — we have experts in every legal discipline
            </p>
            
            <div className={styles.lawCategoriesGrid}>
              {lawCategories.map((category, index) => (
                <div key={index} className={styles.lawCategoryCard}>
                  <div className={styles.lawCategoryIcon}>{category.icon}</div>
                  <h3 className={styles.lawCategoryTitle}>{category.title}</h3>
                  <p className={styles.lawCategoryDescription}>{category.description}</p>
                  <div className={styles.lawCategoryTopics}>
                    {category.topics.map((topic, i) => (
                      <span key={i} className={styles.topicTag}>{topic}</span>
                    ))}
                  </div>
                  <Link href="/contact" className={styles.lawCategoryLink}>
                    Get Help →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Citation Styles Section */}
        <section className={styles.citationStyles}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Legal Citation Styles We Master
            </h2>
            <p className={styles.sectionSubtitle}>
              Your law assignment will be perfectly formatted in your required citation style
            </p>
            
            <div className={styles.citationStylesGrid}>
              {citationStyles.map((style, index) => (
                <div key={index} className={styles.citationStyleCard}>
                  <h3 className={styles.citationStyleName}>{style.name}</h3>
                  <p className={styles.citationStyleDescription}>{style.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Assignment Types Section */}
        <section className={styles.assignmentTypes}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Types of Law Assignments We Write
            </h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive assistance for all your legal academic needs
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
              Why Choose Our Law Assignment Service
            </h2>
            <p className={styles.sectionSubtitle}>
              We deliver excellence in every legal assignment, every time
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⚖️</div>
                <h3 className={styles.featureTitle}>Qualified Legal Experts</h3>
                <p className={styles.featureDescription}>
                  Your assignment will be written by qualified legal professionals with LLB, LLM, or PhD degrees from reputable law schools. Many are practicing lawyers or legal researchers.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📚</div>
                <h3 className={styles.featureTitle}>Primary & Secondary Sources</h3>
                <p className={styles.featureDescription}>
                  We use authoritative primary sources (statutes, case law) and secondary sources (textbooks, journal articles) to ensure your assignment is well-researched and academically rigorous.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔍</div>
                <h3 className={styles.featureTitle}>Case Law Analysis</h3>
                <p className={styles.featureDescription}>
                  Our experts excel at analyzing landmark cases, identifying ratio decidendi and obiter dicta, and applying precedents to new factual scenarios with precision.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📝</div>
                <h3 className={styles.featureTitle}>Proper Legal Reasoning</h3>
                <p className={styles.featureDescription}>
                  We ensure your assignment demonstrates sound legal reasoning, critical analysis, and logical argumentation following the IRAC, CRAC, or other legal reasoning methods.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>✅</div>
                <h3 className={styles.featureTitle}>100% Original Content</h3>
                <p className={styles.featureDescription}>
                  Every law assignment is crafted from scratch based on your requirements. We never resell or recycle papers. Free plagiarism report available.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🌍</div>
                <h3 className={styles.featureTitle}>Multiple Jurisdictions</h3>
                <p className={styles.featureDescription}>
                  We have experts in UK law, US law, Australian law, Canadian law, EU law, and international law. Your assignment will reflect the correct jurisdiction's legal framework.
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
              Get your perfect law assignment in 4 simple steps
            </p>
            
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Submit Requirements</h3>
                <p className={styles.stepDescription}>
                  Fill out our order form with your law topic, legal area, jurisdiction, citation style, and any specific cases or statutes to include.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Get Matched with Expert</h3>
                <p className={styles.stepDescription}>
                  We match you with a qualified legal expert who specializes in your specific area of law and has experience with your jurisdiction.
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
                  Download your final, polished law assignment. It's ready to submit and guaranteed to meet your requirements and academic standards.
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
              Everything you need to know about our law assignment writing service
            </p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What areas of law do your experts cover?
                </h3>
                <p className={styles.faqAnswer}>
                  Our legal experts cover all major areas of law including contract law, criminal law, tort law, constitutional law, business law, company law, international law, human rights law, equity and trust law, property law, jurisprudence, environmental law, family law, employment law, and more. We have specialists in UK law, US law, Australian law, Canadian law, and EU law.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you follow specific legal citation styles?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, our law experts are proficient in all major legal citation styles including OSCOLA (Oxford University Standard for Citation of Legal Authorities), Bluebook (Harvard Law Review), AGLC (Australian Guide to Legal Citation), McGill Guide (Canadian Guide to Uniform Legal Citation), and other jurisdiction-specific formats. We ensure your assignment adheres to the required citation style.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Who writes my law assignment?
                </h3>
                <p className={styles.faqAnswer}>
                  Your law assignment will be written by a qualified legal expert with advanced degrees (LLB, LLM, or PhD) from reputable law schools. Our writers include practicing lawyers, legal researchers, and law professors who specialize in various areas of law and have extensive experience in legal academic writing.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you help with case study analysis?
                </h3>
                <p className={styles.faqAnswer}>
                  Absolutely! Our legal experts excel at case study analysis, including identifying legal issues, applying relevant statutes and precedents, analyzing judicial reasoning, and drawing well-supported conclusions. We can help you analyze landmark cases, recent judgments, or hypothetical scenarios.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Is my law assignment original and plagiarism-free?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, every law assignment is crafted from scratch based on your specific requirements. We never resell or recycle papers. All work is checked with advanced plagiarism detection software, and we provide a free plagiarism report upon request. Our legal research is thorough and properly cited.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you help with LLB and LLM assignments?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we provide comprehensive assistance for both undergraduate (LLB) and postgraduate (LLM) law students. Our experts can help with essays, research papers, dissertations, theses, case briefs, legal memos, and moot court preparations at all academic levels.
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
                Ready to Ace Your Law Assignment?
              </h2>
              <p className={styles.ctaText}>
                Whether you need help with contract law, criminal law, or international law — our expert legal writers are ready to assist. Get a 100% original, well-researched law assignment crafted to your exact requirements.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Order Your Law Assignment
                </Link>
                <Link href="#pricing" className={styles.ctaSecondary}>
                  View Law Subjects
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