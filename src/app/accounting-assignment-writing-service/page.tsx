// src/app/accounting-assignment-writing-service/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// SEO Metadata for Accounting Assignment Writing Service Page
export const metadata: Metadata = {
  title: 'Accounting Assignment Writing Service | Expert Accounting Help',
  description: 'Need professional accounting assignment help? Our expert accounting writers provide comprehensive assistance with financial accounting, managerial accounting, auditing, taxation, and more. 100% accurate calculations, detailed explanations. Qualified accountants. 24/7 support.',
  keywords: [
    'accounting assignment writing service',
    'accounting assignment help',
    'financial accounting assignment help',
    'managerial accounting assignment help',
    'cost accounting assignment help',
    'auditing assignment help',
    'taxation assignment help',
    'corporate accounting assignment help',
    'advanced accounting assignment help',
    'accounting principles help',
    'financial statement analysis help',
    'balance sheet preparation',
    'income statement preparation',
    'cash flow statement help',
    'journal entries help',
    'ledger posting help',
    'trial balance preparation',
    'accounting ratios help',
    'budgeting assignment help',
    'forecasting assignment help',
    'accounting standards help',
    'IFRS assignment help',
    'GAAP assignment help',
    'consolidated financial statements',
    'partnership accounting',
    'company accounts help'
  ],
  authors: [{ name: 'HelpWithMyAssignments Accounting Division' }],
  creator: 'HelpWithMyAssignments',
  publisher: 'HelpWithMyAssignments',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/accounting-assignment-writing-service',
  },
  openGraph: {
    title: 'Accounting Assignment Writing Service | Expert Accounting Help',
    description: '💰 Get expert accounting assignment help from qualified accountants. Financial accounting, managerial accounting, auditing, taxation & more. 100% accurate calculations. 24/7 support.',
    url: '/accounting-assignment-writing-service',
    siteName: 'HelpWithMyAssignments',
    images: [
      {
        url: '/images/og-accounting-assignment-service.jpg',
        width: 1200,
        height: 630,
        alt: 'Accounting Assignment Writing Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accounting Assignment Writing Service',
    description: '💰 Expert accounting assignment help. Get your perfect accounting assignment today!',
    images: ['/images/twitter-accounting-assignment-service.jpg'],
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
  classification: 'Accounting Academic Writing Services',
}

// Structured Data for Rich Results - Service Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://helpassignments.com/accounting-assignment-writing-service",
  "name": "Accounting Assignment Writing Service",
  "description": "Professional accounting assignment help from qualified accountants. Comprehensive assistance with financial accounting, managerial accounting, cost accounting, auditing, taxation, and all accounting disciplines. Each assignment features accurate calculations, detailed explanations, and proper formatting following accounting standards.",
  "url": "https://helpassignments.com/accounting-assignment-writing-service",
  "provider": {
    "@type": "Organization",
    "name": "HelpWithMyAssignments",
    "url": "https://helpassignments.com"
  },
  "serviceType": "Accounting Assignment Writing Service",
  "areaServed": {
    "@type": "Country",
    "name": "Multiple Countries"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Accounting Assignment Types",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Financial Accounting Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Managerial Accounting Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cost Accounting Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Auditing Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Taxation Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Accounting Help"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "4321",
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
      "name": "Accounting Assignment Writing Service",
      "item": "https://helpassignments.com/accounting-assignment-writing-service"
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
      "name": "What accounting topics do your experts cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our accounting experts cover all major areas including financial accounting (journal entries, ledgers, trial balance, financial statements), managerial accounting (cost behavior, CVP analysis, budgeting, variance analysis), cost accounting (job costing, process costing, activity-based costing), auditing (audit procedures, internal control, audit reports), taxation (individual tax, corporate tax, GST/VAT), corporate accounting (company accounts, consolidation, partnerships), and advanced accounting topics."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide step-by-step calculations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every accounting assignment includes detailed step-by-step calculations showing all formulas, workings, and reasoning. We ensure you can follow the entire process from start to finish, not just see the final answer."
      }
    },
    {
      "@type": "Question",
      "name": "Who writes my accounting assignment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your accounting assignment will be written by a qualified accountant with degrees in Accounting, Finance, or related fields. Our writers include certified public accountants (CPAs), chartered accountants (CAs), and accounting academics with extensive professional and teaching experience."
      }
    },
    {
      "@type": "Question",
      "name": "Do you follow specific accounting standards?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we follow all major accounting standards including IFRS (International Financial Reporting Standards), US GAAP (Generally Accepted Accounting Principles), UK GAAP, and local accounting standards. We ensure your assignment complies with the required framework."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with financial statement preparation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We specialize in preparing all financial statements including balance sheets, income statements, cash flow statements, statements of changes in equity, and notes to accounts. All statements are properly formatted and include all required disclosures."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide Excel-based accounting assignments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide comprehensive Excel-based accounting assignments including financial models, budgeting templates, accounting worksheets, and data analysis. We deliver working Excel files with formulas intact and proper formatting."
      }
    }
  ]
}

// Accounting categories data
const accountingCategories = [
  {
    title: "Financial Accounting",
    description: "Comprehensive assistance with recording, classifying, and summarizing financial transactions.",
    icon: "📊",
    topics: ["Journal Entries", "Ledger Posting", "Trial Balance", "Adjusting Entries", "Financial Statements", "Closing Entries", "Accounting Cycle", "Bank Reconciliation"]
  },
  {
    title: "Managerial Accounting",
    description: "Expert help with accounting information for internal decision-making.",
    icon: "📈",
    topics: ["Cost Behavior", "CVP Analysis", "Budgeting", "Variance Analysis", "Relevant Costing", "Performance Measurement", "Balanced Scorecard", "Segment Reporting"]
  },
  {
    title: "Cost Accounting",
    description: "Professional assistance with cost determination and control.",
    icon: "💰",
    topics: ["Job Order Costing", "Process Costing", "Activity-Based Costing", "Standard Costing", "Marginal Costing", "Absorption Costing", "Cost Allocation", "Joint Product Costing"]
  },
  {
    title: "Auditing",
    description: "Comprehensive help with audit procedures, evidence, and reporting.",
    icon: "🔍",
    topics: ["Audit Planning", "Internal Control", "Audit Evidence", "Sampling", "Substantive Procedures", "Audit Reports", "Professional Ethics", "Audit Risk"]
  },
  {
    title: "Taxation",
    description: "Expert assistance with individual and corporate tax calculations and planning.",
    icon: "📋",
    topics: ["Individual Taxation", "Corporate Taxation", "Partnership Taxation", "Capital Gains", "Depreciation", "Tax Credits", "Tax Planning", "GST/VAT"]
  },
  {
    title: "Corporate Accounting",
    description: "Professional help with company accounts and financial reporting.",
    icon: "🏢",
    topics: ["Share Capital", "Debentures", "Company Financial Statements", "Consolidated Accounts", "Amalgamation", "Absorption", "Reconstruction", "Liquidation"]
  },
  {
    title: "Advanced Accounting",
    description: "Comprehensive assistance with complex accounting topics.",
    icon: "📚",
    topics: ["Consolidation", "Foreign Currency", "Partnership Accounting", "Branch Accounts", "Hire Purchase", "Instalment Systems", "Royalty Accounts", "Investment Accounts"]
  },
  {
    title: "Accounting Standards",
    description: "Expert help with IFRS, GAAP, and other accounting frameworks.",
    icon: "📜",
    topics: ["IFRS Standards", "US GAAP", "UK GAAP", "IAS Standards", "Revenue Recognition", "Lease Accounting", "Financial Instruments", "Fair Value Measurement"]
  },
  {
    title: "Financial Statement Analysis",
    description: "Professional assistance with analyzing and interpreting financial statements.",
    icon: "📉",
    topics: ["Ratio Analysis", "Trend Analysis", "Common Size Statements", "Comparative Statements", "Cash Flow Analysis", "Liquidity Analysis", "Profitability Analysis", "Solvency Analysis"]
  },
  {
    title: "Budgeting & Forecasting",
    description: "Comprehensive help with preparing budgets and financial forecasts.",
    icon: "📅",
    topics: ["Master Budget", "Operating Budget", "Financial Budget", "Cash Budget", "Flexible Budgets", "Capital Budgeting", "Forecasting Models", "Budgetary Control"]
  },
  {
    title: "Accounting Information Systems",
    description: "Expert assistance with computerized accounting systems.",
    icon: "💻",
    topics: ["QuickBooks", "SAP FICO", "Tally", "Xero", "MYOB", "Peachtree", "Accounting Software", "Internal Controls"]
  },
  {
    title: "International Accounting",
    description: "Professional help with cross-border accounting issues.",
    icon: "🌐",
    topics: ["Foreign Currency Translation", "Transfer Pricing", "International Taxation", "Cross-Border Consolidation", "Harmonization", "IFRS vs GAAP", "Multinational Reporting"]
  }
]

// Financial statements data
const financialStatements = [
  { name: "Balance Sheet", description: "Statement of financial position showing assets, liabilities, and equity" },
  { name: "Income Statement", description: "Statement of profit or loss showing revenues and expenses" },
  { name: "Cash Flow Statement", description: "Statement of cash flows from operating, investing, and financing activities" },
  { name: "Statement of Changes in Equity", description: "Shows changes in owners' equity over the period" },
  { name: "Notes to Accounts", description: "Detailed disclosures and explanations for financial statement items" },
  { name: "Comprehensive Income Statement", description: "Includes both profit/loss and other comprehensive income" }
]

// Accounting ratios data
const accountingRatios = [
  { category: "Liquidity Ratios", ratios: ["Current Ratio", "Quick Ratio", "Cash Ratio", "Net Working Capital"] },
  { category: "Profitability Ratios", ratios: ["Gross Profit Margin", "Net Profit Margin", "ROA", "ROE", "EPS"] },
  { category: "Solvency Ratios", ratios: ["Debt to Equity", "Debt Ratio", "Interest Coverage", "Equity Ratio"] },
  { category: "Efficiency Ratios", ratios: ["Inventory Turnover", "Receivables Turnover", "Asset Turnover", "Payables Turnover"] },
  { category: "Market Value Ratios", ratios: ["P/E Ratio", "Dividend Yield", "Market to Book", "Dividend Payout"] }
]

// Accounting software data
const accountingSoftware = [
  { name: "QuickBooks", category: "Small Business" },
  { name: "SAP FICO", category: "Enterprise" },
  { name: "Oracle Financials", category: "Enterprise" },
  { name: "Tally", category: "Small Business" },
  { name: "Xero", category: "Cloud-Based" },
  { name: "MYOB", category: "Small Business" },
  { name: "Peachtree", category: "Small Business" },
  { name: "FreshBooks", category: "Cloud-Based" },
  { name: "Wave", category: "Free Software" },
  { name: "Zoho Books", category: "Cloud-Based" },
  { name: "Microsoft Dynamics", category: "Enterprise" },
  { name: "NetSuite", category: "Cloud ERP" },
  { name: "Sage", category: "Small Business" },
  { name: "Odoo", category: "Open Source" }
]

// Accounting standards data
const accountingStandards = [
  { name: "IFRS", fullName: "International Financial Reporting Standards" },
  { name: "US GAAP", fullName: "US Generally Accepted Accounting Principles" },
  { name: "UK GAAP", fullName: "UK Generally Accepted Accounting Practice" },
  { name: "Ind AS", fullName: "Indian Accounting Standards" },
  { name: "ASPE", fullName: "Accounting Standards for Private Enterprises (Canada)" },
  { name: "NZ IFRS", fullName: "New Zealand Equivalent to IFRS" },
  { name: "AASB", fullName: "Australian Accounting Standards Board" },
  { name: "HKFRS", fullName: "Hong Kong Financial Reporting Standards" }
]

// Assignment types data
const assignmentTypes = [
  { name: "Problem Sets", description: "Detailed step-by-step solutions to accounting problems with all workings shown" },
  { name: "Financial Statement Preparation", description: "Complete financial statements with proper formatting and disclosures" },
  { name: "Journal Entries", description: "Accurate journal entries with proper accounts and explanations" },
  { name: "Ledger Accounts", description: "Properly formatted ledger accounts with balances" },
  { name: "Trial Balance", description: "Balanced trial balance with error correction where needed" },
  { name: "Bank Reconciliation", description: "Comprehensive bank reconciliation statements" },
  { name: "Ratio Analysis", description: "Detailed ratio calculations with interpretation and analysis" },
  { name: "Budget Preparation", description: "Complete budgets with supporting calculations" },
  { name: "Variance Analysis", description: "Detailed variance calculations with explanations" },
  { name: "Tax Returns", description: "Accurate tax computations and returns" },
  { name: "Audit Programs", description: "Comprehensive audit procedures and programs" },
  { name: "Case Studies", description: "In-depth analysis of accounting cases with recommendations" },
  { name: "Research Papers", description: "Scholarly research papers on accounting topics" },
  { name: "Excel Assignments", description: "Excel-based assignments with formulas and analysis" }
]

export default function AccountingAssignmentWritingServicePage() {
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
              <div className={styles.heroIcon}>💰</div>
              <h1 className={styles.heroTitle}>
                Accounting Assignment <span className={styles.highlight}>Writing Service</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Need professional accounting assignment help? Our expert accounting writers provide comprehensive assistance with financial accounting, managerial accounting, auditing, taxation, and more. Each assignment features <strong>accurate calculations, step-by-step workings, and clear explanations</strong> following your specific requirements and accounting standards.
              </p>
              <div className={styles.heroCta}>
                <Link href="#pricing" className={styles.primaryButton}>
                  Explore Accounting Services
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Order Your Accounting Assignment
                </Link>
              </div>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>350+</span>
                  <span className={styles.statLabel}>Accounting Experts</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>100%</span>
                  <span className={styles.statLabel}>Accurate Calculations</span>
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

        {/* Accounting Standards Section */}
        <section className={styles.accountingStandards}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Accounting Standards We Follow
            </h2>
            <p className={styles.sectionSubtitle}>
              Expertise in all major global accounting frameworks
            </p>
            
            <div className={styles.standardsGrid}>
              {accountingStandards.map((standard, index) => (
                <div key={index} className={styles.standardCard}>
                  <h3 className={styles.standardName}>{standard.name}</h3>
                  <p className={styles.standardFullName}>{standard.fullName}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accounting Categories Section */}
        <section id="pricing" className={styles.accountingCategories}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              All Accounting Subjects We Cover
            </h2>
            <p className={styles.sectionSubtitle}>
              From financial accounting to taxation — we have experts in every accounting discipline
            </p>
            
            <div className={styles.accountingCategoriesGrid}>
              {accountingCategories.map((category, index) => (
                <div key={index} className={styles.accountingCategoryCard}>
                  <div className={styles.accountingCategoryIcon}>{category.icon}</div>
                  <h3 className={styles.accountingCategoryTitle}>{category.title}</h3>
                  <p className={styles.accountingCategoryDescription}>{category.description}</p>
                  <div className={styles.accountingCategoryTopics}>
                    {category.topics.slice(0, 5).map((topic, i) => (
                      <span key={i} className={styles.topicTag}>{topic}</span>
                    ))}
                    {category.topics.length > 5 && (
                      <span className={styles.topicTag}>+{category.topics.length - 5} more</span>
                    )}
                  </div>
                  <Link href="/contact" className={styles.accountingCategoryLink}>
                    Get Help →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Statements Section */}
        <section className={styles.financialStatements}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Financial Statements We Prepare
            </h2>
            <p className={styles.sectionSubtitle}>
              Complete, properly formatted financial statements
            </p>
            
            <div className={styles.statementsGrid}>
              {financialStatements.map((statement, index) => (
                <div key={index} className={styles.statementCard}>
                  <h3 className={styles.statementName}>{statement.name}</h3>
                  <p className={styles.statementDescription}>{statement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accounting Ratios Section */}
        <section className={styles.accountingRatios}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Accounting Ratios We Calculate
            </h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive ratio analysis with interpretations
            </p>
            
            <div className={styles.ratiosGrid}>
              {accountingRatios.map((ratioGroup, index) => (
                <div key={index} className={styles.ratioGroup}>
                  <h3 className={styles.ratioCategory}>{ratioGroup.category}</h3>
                  <div className={styles.ratioItems}>
                    {ratioGroup.ratios.map((ratio, i) => (
                      <span key={i} className={styles.ratioItem}>{ratio}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accounting Software Section */}
        <section className={styles.accountingSoftware}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Accounting Software We Use
            </h2>
            <p className={styles.sectionSubtitle}>
              Proficiency in all major accounting software
            </p>
            
            <div className={styles.softwareGrid}>
              {accountingSoftware.map((software, index) => (
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
              Types of Accounting Assignments We Write
            </h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive assistance for all your accounting needs
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
              Why Choose Our Accounting Assignment Service
            </h2>
            <p className={styles.sectionSubtitle}>
              We deliver accuracy and clarity in every accounting assignment
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📊</div>
                <h3 className={styles.featureTitle}>Qualified Accountants</h3>
                <p className={styles.featureDescription}>
                  Your assignment will be written by qualified accountants with degrees in Accounting and Finance. Many are CPAs, CAs, or accounting academics with professional experience.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>✅</div>
                <h3 className={styles.featureTitle}>100% Accurate Calculations</h3>
                <p className={styles.featureDescription}>
                  All calculations are double-checked for accuracy. We provide step-by-step workings so you can verify every number and understand the process.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📝</div>
                <h3 className={styles.featureTitle}>Step-by-Step Explanations</h3>
                <p className={styles.featureDescription}>
                  Every accounting assignment includes detailed explanations of the methods, formulas, and reasoning behind each calculation. You'll understand the "why" as well as the "how."
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📋</div>
                <h3 className={styles.featureTitle}>Proper Formatting</h3>
                <p className={styles.featureDescription}>
                  All financial statements and accounting schedules are properly formatted according to professional standards, with correct headings, classifications, and disclosures.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📊</div>
                <h3 className={styles.featureTitle}>Excel Expertise</h3>
                <p className={styles.featureDescription}>
                  Our experts are proficient in Excel for accounting, including formulas, pivot tables, and financial modeling. We deliver working Excel files with all formulas intact.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📚</div>
                <h3 className={styles.featureTitle}>Standards Compliance</h3>
                <p className={styles.featureDescription}>
                  We ensure all work complies with your required accounting standards, whether IFRS, US GAAP, UK GAAP, or local standards.
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
              Get your perfect accounting assignment in 4 simple steps
            </p>
            
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Submit Your Problem</h3>
                <p className={styles.stepDescription}>
                  Share your accounting problem, including all figures, requirements, accounting standards to follow, and any specific instructions.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Get Matched with Expert</h3>
                <p className={styles.stepDescription}>
                  We match you with a qualified accountant who specializes in your specific area and has experience with similar assignments.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Review Calculations</h3>
                <p className={styles.stepDescription}>
                  Receive your completed assignment with all workings. Review carefully and request any revisions. Unlimited free revisions until you're satisfied.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3 className={styles.stepTitle}>Submit with Confidence</h3>
                <p className={styles.stepDescription}>
                  Download your final, accurate accounting assignment with all calculations and explanations. Ready to submit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Accounting Section */}
        <section className={styles.whyAccounting}>
          <div className={styles.container}>
            <div className={styles.whyAccountingContent}>
              <h2 className={styles.sectionTitle}>
                Why Accounting Students Trust Us
              </h2>
              <p className={styles.sectionSubtitle}>
                We understand the precision and accuracy accounting demands
              </p>
              
              <div className={styles.whyAccountingGrid}>
                <div className={styles.whyAccountingItem}>
                  <div className={styles.whyAccountingIcon}>⚖️</div>
                  <h3 className={styles.whyAccountingTitle}>Debits & Credits Balance</h3>
                  <p className={styles.whyAccountingDescription}>
                    Every journal entry and ledger account follows double-entry principles. We ensure debits always equal credits.
                  </p>
                </div>
                
                <div className={styles.whyAccountingItem}>
                  <div className={styles.whyAccountingIcon}>📊</div>
                  <h3 className={styles.whyAccountingTitle}>Financial Statement Accuracy</h3>
                  <p className={styles.whyAccountingDescription}>
                    All financial statements articulate correctly, with proper links between the balance sheet, income statement, and cash flow statement.
                  </p>
                </div>
                
                <div className={styles.whyAccountingItem}>
                  <div className={styles.whyAccountingIcon}>📈</div>
                  <h3 className={styles.whyAccountingTitle}>Ratio Interpretation</h3>
                  <p className={styles.whyAccountingDescription}>
                    Beyond calculating ratios, we provide meaningful interpretation of what the numbers mean for business decisions.
                  </p>
                </div>
                
                <div className={styles.whyAccountingItem}>
                  <div className={styles.whyAccountingIcon}>📋</div>
                  <h3 className={styles.whyAccountingTitle}>Standards Application</h3>
                  <p className={styles.whyAccountingDescription}>
                    We correctly apply IFRS, GAAP, and other standards to ensure your work meets professional requirements.
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
              Everything you need to know about our accounting assignment writing service
            </p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What accounting topics do your experts cover?
                </h3>
                <p className={styles.faqAnswer}>
                  Our accounting experts cover all major areas including financial accounting (journal entries, ledgers, trial balance, financial statements), managerial accounting (cost behavior, CVP analysis, budgeting, variance analysis), cost accounting (job costing, process costing, activity-based costing), auditing (audit procedures, internal control, audit reports), taxation (individual tax, corporate tax, GST/VAT), corporate accounting (company accounts, consolidation, partnerships), and advanced accounting topics.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you provide step-by-step calculations?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, every accounting assignment includes detailed step-by-step calculations showing all formulas, workings, and reasoning. We ensure you can follow the entire process from start to finish, not just see the final answer.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Who writes my accounting assignment?
                </h3>
                <p className={styles.faqAnswer}>
                  Your accounting assignment will be written by a qualified accountant with degrees in Accounting, Finance, or related fields. Our writers include certified public accountants (CPAs), chartered accountants (CAs), and accounting academics with extensive professional and teaching experience.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you follow specific accounting standards?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we follow all major accounting standards including IFRS (International Financial Reporting Standards), US GAAP (Generally Accepted Accounting Principles), UK GAAP, and local accounting standards. We ensure your assignment complies with the required framework.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you help with financial statement preparation?
                </h3>
                <p className={styles.faqAnswer}>
                  Absolutely! We specialize in preparing all financial statements including balance sheets, income statements, cash flow statements, statements of changes in equity, and notes to accounts. All statements are properly formatted and include all required disclosures.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you provide Excel-based accounting assignments?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we provide comprehensive Excel-based accounting assignments including financial models, budgeting templates, accounting worksheets, and data analysis. We deliver working Excel files with formulas intact and proper formatting.
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
                Ready to Ace Your Accounting Assignment?
              </h2>
              <p className={styles.ctaText}>
                Whether you need help with journal entries, financial statements, or complex accounting problems — our expert accountants are ready to assist. Get 100% accurate calculations with detailed step-by-step explanations.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Order Your Accounting Assignment
                </Link>
                <Link href="#pricing" className={styles.ctaSecondary}>
                  View Accounting Subjects
                </Link>
              </div>
              <div className={styles.ctaTrust}>
                <span>100% Accurate Calculations</span>
                <span>Step-by-Step Workings</span>
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