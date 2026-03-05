// src/app/finance-assignment-writing-service/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// SEO Metadata for Finance Assignment Writing Service Page
export const metadata: Metadata = {
  title: 'Finance Assignment Writing Service | Expert Finance Assignment Help',
  description: 'Need professional finance assignment help? Our expert finance writers provide comprehensive assistance with corporate finance, investments, financial markets, accounting, derivatives, and more. 100% original, well-researched finance assignments. Qualified finance professionals. 24/7 support.',
  keywords: [
    'finance assignment writing service',
    'finance assignment help',
    'corporate finance assignment help',
    'investment analysis assignment help',
    'financial markets assignment help',
    'accounting assignment help',
    'derivatives assignment help',
    'portfolio management assignment help',
    'risk management assignment help',
    'financial modeling assignment help',
    'valuation assignment help',
    'mergers and acquisitions assignment help',
    'international finance assignment help',
    'personal finance assignment help',
    'banking assignment help',
    'financial statement analysis help',
    'capital budgeting assignment help',
    'cost of capital assignment help',
    'dividend policy assignment help',
    'working capital management help',
    'financial economics assignment help',
    'behavioral finance assignment help'
  ],
  authors: [{ name: 'HelpWithMyAssignments Finance Division' }],
  creator: 'HelpWithMyAssignments',
  publisher: 'HelpWithMyAssignments',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/finance-assignment-writing-service',
  },
  openGraph: {
    title: 'Finance Assignment Writing Service | Expert Finance Assignment Help',
    description: '💰 Get expert finance assignment help from qualified finance professionals. Corporate finance, investments, financial markets, accounting, derivatives & more. 100% original research. 24/7 support.',
    url: '/finance-assignment-writing-service',
    siteName: 'HelpWithMyAssignments',
    images: [
      {
        url: '/images/og-finance-assignment-service.jpg',
        width: 1200,
        height: 630,
        alt: 'Finance Assignment Writing Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finance Assignment Writing Service',
    description: '💰 Expert finance assignment help. Get your perfect finance assignment today!',
    images: ['/images/twitter-finance-assignment-service.jpg'],
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
  classification: 'Finance Academic Writing Services',
}

// Structured Data for Rich Results - Service Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://helpassignments.com/finance-assignment-writing-service",
  "name": "Finance Assignment Writing Service",
  "description": "Professional finance assignment help from qualified finance professionals. Comprehensive assistance with corporate finance, investments, financial markets, accounting, derivatives, portfolio management, risk management, financial modeling, and all finance disciplines. Each assignment is crafted from scratch, follows your specific guidelines, and adheres to academic standards.",
  "url": "https://helpassignments.com/finance-assignment-writing-service",
  "provider": {
    "@type": "Organization",
    "name": "HelpWithMyAssignments",
    "url": "https://helpassignments.com"
  },
  "serviceType": "Finance Assignment Writing Service",
  "areaServed": {
    "@type": "Country",
    "name": "Multiple Countries"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Finance Assignment Types",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Finance Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Investment Analysis Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Financial Markets Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Derivatives Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Portfolio Management Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Financial Modeling Assignment Help"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "4876",
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
      "name": "Finance Assignment Writing Service",
      "item": "https://helpassignments.com/finance-assignment-writing-service"
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
      "name": "What finance subjects do your experts cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our finance experts cover all major areas including corporate finance, investments, financial markets, accounting, derivatives, portfolio management, risk management, financial modeling, valuation, mergers and acquisitions, international finance, personal finance, banking, financial statement analysis, capital budgeting, cost of capital, dividend policy, working capital management, financial economics, and behavioral finance."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide financial calculations and analysis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our finance experts provide detailed financial calculations, analysis, and interpretations. We handle NPV, IRR, payback period, WACC, CAPM, option pricing models, bond valuation, stock valuation, ratio analysis, and all types of financial computations with step-by-step explanations."
      }
    },
    {
      "@type": "Question",
      "name": "Who writes my finance assignment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your finance assignment will be written by a qualified finance professional with degrees in Finance, Economics, Accounting, or MBA with finance specialization. Our writers include financial analysts, investment bankers, accountants, and academics with extensive industry and teaching experience."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with financial modeling assignments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our experts excel at financial modeling including three-statement models, DCF models, LBO models, merger models, and option pricing models. We build models in Excel with proper formulas, formatting, and documentation."
      }
    },
    {
      "@type": "Question",
      "name": "Is my finance assignment original and plagiarism-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every finance assignment is crafted from scratch based on your specific requirements. We never resell or recycle papers. All work is checked with advanced plagiarism detection software, and we provide a free plagiarism report upon request. All calculations and analysis are original."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help with Excel-based finance assignments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide comprehensive assistance with Excel-based finance assignments including financial modeling, data analysis, pivot tables, charts, and advanced Excel functions. We deliver working Excel files with formulas intact."
      }
    }
  ]
}

// Finance categories data
const financeCategories = [
  {
    title: "Corporate Finance",
    description: "Comprehensive assistance with capital budgeting, capital structure, dividend policy, working capital management, and corporate financial decisions.",
    icon: "🏢",
    topics: ["Capital Budgeting", "Cost of Capital", "Dividend Policy", "Working Capital", "Capital Structure", "Corporate Valuation"]
  },
  {
    title: "Investments",
    description: "Expert help with security analysis, portfolio theory, asset allocation, equity research, and investment strategies.",
    icon: "📈",
    topics: ["Security Analysis", "Portfolio Theory", "Asset Allocation", "Equity Research", "Bond Analysis", "Investment Strategies"]
  },
  {
    title: "Financial Markets",
    description: "Professional assistance with money markets, capital markets, stock exchanges, market microstructure, and financial institutions.",
    icon: "🏛️",
    topics: ["Money Markets", "Capital Markets", "Stock Exchanges", "Market Microstructure", "Financial Institutions", "Market Regulation"]
  },
  {
    title: "Derivatives",
    description: "Comprehensive help with options, futures, forwards, swaps, option pricing models, and hedging strategies.",
    icon: "📊",
    topics: ["Options", "Futures", "Forwards", "Swaps", "Black-Scholes", "Binomial Models"]
  },
  {
    title: "Portfolio Management",
    description: "Expert assistance with portfolio construction, optimization, performance measurement, and risk management.",
    icon: "📋",
    topics: ["Portfolio Construction", "Modern Portfolio Theory", "Performance Measurement", "Risk Management", "Asset Allocation", "Benchmarking"]
  },
  {
    title: "Risk Management",
    description: "Professional help with market risk, credit risk, operational risk, VaR, and risk mitigation strategies.",
    icon: "🛡️",
    topics: ["Market Risk", "Credit Risk", "Operational Risk", "Value at Risk", "Hedging", "Risk Metrics"]
  },
  {
    title: "Financial Modeling",
    description: "Comprehensive assistance with building financial models for valuation, forecasting, and decision-making.",
    icon: "📱",
    topics: ["DCF Models", "LBO Models", "Merger Models", "Three-Statement Models", "Sensitivity Analysis", "Scenario Analysis"]
  },
  {
    title: "Valuation",
    description: "Expert help with company valuation, DCF analysis, comparable company analysis, and precedent transactions.",
    icon: "💰",
    topics: ["DCF Valuation", "Comparable Analysis", "Precedent Transactions", "Asset-Based Valuation", "Sum of Parts", "Premium Analysis"]
  },
  {
    title: "Mergers & Acquisitions",
    description: "Professional assistance with M&A strategy, deal structuring, synergy analysis, and post-merger integration.",
    icon: "🤝",
    topics: ["M&A Strategy", "Deal Structuring", "Synergy Analysis", "Due Diligence", "Integration", "Accretion/Dilution"]
  },
  {
    title: "International Finance",
    description: "Comprehensive help with foreign exchange, international markets, cross-border investments, and global risk management.",
    icon: "🌍",
    topics: ["Foreign Exchange", "International Markets", "Cross-Border Investment", "Political Risk", "Hedging", "International Parity"]
  },
  {
    title: "Personal Finance",
    description: "Expert assistance with financial planning, retirement planning, tax planning, and wealth management.",
    icon: "👤",
    topics: ["Financial Planning", "Retirement Planning", "Tax Planning", "Wealth Management", "Estate Planning", "Insurance"]
  },
  {
    title: "Banking",
    description: "Professional help with commercial banking, investment banking, credit analysis, and bank management.",
    icon: "🏦",
    topics: ["Commercial Banking", "Investment Banking", "Credit Analysis", "Bank Management", "Lending", "Regulatory Capital"]
  },
  {
    title: "Financial Statement Analysis",
    description: "Comprehensive assistance with analyzing balance sheets, income statements, cash flows, and financial ratios.",
    icon: "📑",
    topics: ["Ratio Analysis", "Cash Flow Analysis", "Profitability Analysis", "Liquidity Analysis", "Solvency Analysis", "DuPont Analysis"]
  },
  {
    title: "Behavioral Finance",
    description: "Expert help with psychological factors in financial decisions, market anomalies, and investor behavior.",
    icon: "🧠",
    topics: ["Market Anomalies", "Investor Psychology", "Cognitive Biases", "Herding Behavior", "Prospect Theory", "Overconfidence"]
  }
]

// Assignment types data
const assignmentTypes = [
  { name: "Finance Essays", description: "Well-researched essays on financial topics with critical analysis and theoretical frameworks" },
  { name: "Financial Calculations", description: "Detailed step-by-step financial calculations with interpretations" },
  { name: "Case Study Analysis", description: "In-depth analysis of financial cases with recommendations" },
  { name: "Financial Modeling", description: "Comprehensive Excel models with formulas and documentation" },
  { name: "Investment Analysis", description: "Security analysis, valuation, and investment recommendations" },
  { name: "Portfolio Optimization", description: "Portfolio construction and optimization using modern portfolio theory" },
  { name: "Risk Analysis", description: "Detailed risk assessment with VaR and other risk metrics" },
  { name: "Company Valuation", description: "Complete valuation reports with multiple methodologies" },
  { name: "Financial Reports", description: "Professional financial reports and presentations" },
  { name: "Research Papers", description: "Scholarly research papers on finance topics" },
  { name: "Dissertations & Theses", description: "Extended research projects for finance degrees" },
  { name: "Excel Assignments", description: "Excel-based assignments with formulas and analysis" }
]

// Financial ratios and formulas data
const financialTopics = [
  { name: "Time Value of Money", icon: "⏰" },
  { name: "NPV & IRR", icon: "📊" },
  { name: "CAPM", icon: "📈" },
  { name: "WACC", icon: "⚖️" },
  { name: "Option Pricing", icon: "🎯" },
  { name: "Bond Valuation", icon: "📄" },
  { name: "Stock Valuation", icon: "📊" },
  { name: "Ratio Analysis", icon: "📑" },
  { name: "DuPont Analysis", icon: "🔄" },
  { name: "VaR", icon: "📉" },
  { name: "Duration", icon: "⏱️" },
  { name: "Convexity", icon: "📈" }
]

// Excel and software skills data
const softwareSkills = [
  { name: "Excel", level: "Advanced" },
  { name: "Bloomberg", level: "Terminal Access" },
  { name: "Python for Finance", level: "Expert" },
  { name: "R for Finance", level: "Expert" },
  { name: "MATLAB", level: "Advanced" },
  { name: "Stata", level: "Advanced" },
  { name: "SPSS", level: "Advanced" },
  { name: "Tableau", level: "Intermediate" },
  { name: "Power BI", level: "Intermediate" },
  { name: "QuickBooks", level: "Advanced" }
]

export default function FinanceAssignmentWritingServicePage() {
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
                Finance Assignment <span className={styles.highlight}>Writing Service</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Need professional finance assignment help? Our expert finance writers provide comprehensive assistance with corporate finance, investments, financial markets, accounting, derivatives, and more. Each assignment features detailed calculations, analysis, and interpretations following your specific requirements.
              </p>
              <div className={styles.heroCta}>
                <Link href="#pricing" className={styles.primaryButton}>
                  View Finance Services
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Order Your Finance Assignment
                </Link>
              </div>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>350+</span>
                  <span className={styles.statLabel}>Finance Experts</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>4.9/5</span>
                  <span className={styles.statLabel}>Student Rating</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>5800+</span>
                  <span className={styles.statLabel}>Finance Assignments</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Topics Section */}
        <section className={styles.financialTopics}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Key Finance Topics We Cover
            </h2>
            <p className={styles.sectionSubtitle}>
              From fundamental concepts to advanced financial theories
            </p>
            
            <div className={styles.financialTopicsGrid}>
              {financialTopics.map((topic, index) => (
                <div key={index} className={styles.financialTopicCard}>
                  <div className={styles.financialTopicIcon}>{topic.icon}</div>
                  <h3 className={styles.financialTopicName}>{topic.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Finance Categories Section */}
        <section id="pricing" className={styles.financeCategories}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              All Finance Subjects We Cover
            </h2>
            <p className={styles.sectionSubtitle}>
              From corporate finance to behavioral finance — we have experts in every financial discipline
            </p>
            
            <div className={styles.financeCategoriesGrid}>
              {financeCategories.map((category, index) => (
                <div key={index} className={styles.financeCategoryCard}>
                  <div className={styles.financeCategoryIcon}>{category.icon}</div>
                  <h3 className={styles.financeCategoryTitle}>{category.title}</h3>
                  <p className={styles.financeCategoryDescription}>{category.description}</p>
                  <div className={styles.financeCategoryTopics}>
                    {category.topics.map((topic, i) => (
                      <span key={i} className={styles.topicTag}>{topic}</span>
                    ))}
                  </div>
                  <Link href="/contact" className={styles.financeCategoryLink}>
                    Get Help →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Software Skills Section */}
        <section className={styles.softwareSkills}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Financial Software & Tools
            </h2>
            <p className={styles.sectionSubtitle}>
              Our experts are proficient in industry-standard financial software
            </p>
            
            <div className={styles.softwareSkillsGrid}>
              {softwareSkills.map((skill, index) => (
                <div key={index} className={styles.softwareSkillCard}>
                  <h3 className={styles.softwareSkillName}>{skill.name}</h3>
                  <span className={styles.softwareSkillLevel}>{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Assignment Types Section */}
        <section className={styles.assignmentTypes}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Types of Finance Assignments We Write
            </h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive assistance for all your finance academic needs
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
              Why Choose Our Finance Assignment Service
            </h2>
            <p className={styles.sectionSubtitle}>
              We deliver excellence in every finance assignment, every time
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📊</div>
                <h3 className={styles.featureTitle}>Qualified Finance Professionals</h3>
                <p className={styles.featureDescription}>
                  Your assignment will be written by qualified finance professionals with degrees in Finance, Economics, Accounting, or MBA. Many work as financial analysts, investment bankers, or accountants.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🧮</div>
                <h3 className={styles.featureTitle}>Step-by-Step Calculations</h3>
                <p className={styles.featureDescription}>
                  All financial calculations include detailed step-by-step explanations, showing formulas, inputs, and interpretations. You'll understand how each result is derived.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📈</div>
                <h3 className={styles.featureTitle}>Excel Modeling Expertise</h3>
                <p className={styles.featureDescription}>
                  Our experts build professional financial models in Excel with proper formulas, formatting, and documentation. We deliver working Excel files with all calculations intact.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📉</div>
                <h3 className={styles.featureTitle}>Real-World Data Analysis</h3>
                <p className={styles.featureDescription}>
                  We incorporate real-world financial data from Bloomberg, Reuters, and other sources, ensuring your assignments reflect current market conditions.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>✅</div>
                <h3 className={styles.featureTitle}>Plagiarism-Free Work</h3>
                <p className={styles.featureDescription}>
                  Every finance assignment is crafted from scratch. All calculations, analysis, and text are original. Free plagiarism report available.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📋</div>
                <h3 className={styles.featureTitle}>Proper Citations & References</h3>
                <p className={styles.featureDescription}>
                  We cite all sources properly in APA, MLA, Chicago, or Harvard format. Your assignment will include a complete reference list.
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
              Get your perfect finance assignment in 4 simple steps
            </p>
            
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Submit Requirements</h3>
                <p className={styles.stepDescription}>
                  Fill out our order form with your finance topic, specific calculations needed, data sources, formatting style, and any special instructions.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Get Matched with Expert</h3>
                <p className={styles.stepDescription}>
                  We match you with a qualified finance professional who specializes in your specific area and has experience with similar assignments.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Review & Revise</h3>
                <p className={styles.stepDescription}>
                  Receive your draft with calculations and analysis. Review carefully and request any revisions. Unlimited free revisions until you're satisfied.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3 className={styles.stepTitle}>Submit with Confidence</h3>
                <p className={styles.stepDescription}>
                  Download your final, polished finance assignment with all calculations, explanations, and references. Ready to submit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Finance Section */}
        <section className={styles.whyFinance}>
          <div className={styles.container}>
            <div className={styles.whyFinanceContent}>
              <h2 className={styles.sectionTitle}>
                Why Finance Students Trust Us
              </h2>
              <p className={styles.sectionSubtitle}>
                We understand the unique demands of finance education
              </p>
              
              <div className={styles.whyFinanceGrid}>
                <div className={styles.whyFinanceItem}>
                  <div className={styles.whyFinanceIcon}>⏰</div>
                  <h3 className={styles.whyFinanceTitle}>Complex Calculations</h3>
                  <p className={styles.whyFinanceDescription}>
                    Finance assignments involve complex calculations. Our experts handle NPV, IRR, options pricing, and more with precision and clarity.
                  </p>
                </div>
                
                <div className={styles.whyFinanceItem}>
                  <div className={styles.whyFinanceIcon}>📊</div>
                  <h3 className={styles.whyFinanceTitle}>Data Analysis</h3>
                  <p className={styles.whyFinanceDescription}>
                    Need help analyzing financial data? Our experts work with Excel, Python, R, and statistical software to derive meaningful insights.
                  </p>
                </div>
                
                <div className={styles.whyFinanceItem}>
                  <div className={styles.whyFinanceIcon}>📈</div>
                  <h3 className={styles.whyFinanceTitle}>Real-World Application</h3>
                  <p className={styles.whyFinanceDescription}>
                    We connect financial theories to real-world applications, helping you understand how concepts work in practice.
                  </p>
                </div>
                
                <div className={styles.whyFinanceItem}>
                  <div className={styles.whyFinanceIcon}>📝</div>
                  <h3 className={styles.whyFinanceTitle}>Clear Explanations</h3>
                  <p className={styles.whyFinanceDescription}>
                    Beyond just numbers, we provide clear explanations of what the results mean and their implications for financial decisions.
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
              Everything you need to know about our finance assignment writing service
            </p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What finance subjects do your experts cover?
                </h3>
                <p className={styles.faqAnswer}>
                  Our finance experts cover all major areas including corporate finance, investments, financial markets, accounting, derivatives, portfolio management, risk management, financial modeling, valuation, mergers and acquisitions, international finance, personal finance, banking, financial statement analysis, capital budgeting, cost of capital, dividend policy, working capital management, financial economics, and behavioral finance.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you provide financial calculations and analysis?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, our finance experts provide detailed financial calculations, analysis, and interpretations. We handle NPV, IRR, payback period, WACC, CAPM, option pricing models, bond valuation, stock valuation, ratio analysis, and all types of financial computations with step-by-step explanations.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Who writes my finance assignment?
                </h3>
                <p className={styles.faqAnswer}>
                  Your finance assignment will be written by a qualified finance professional with degrees in Finance, Economics, Accounting, or MBA with finance specialization. Our writers include financial analysts, investment bankers, accountants, and academics with extensive industry and teaching experience.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you help with financial modeling assignments?
                </h3>
                <p className={styles.faqAnswer}>
                  Absolutely! Our experts excel at financial modeling including three-statement models, DCF models, LBO models, merger models, and option pricing models. We build models in Excel with proper formulas, formatting, and documentation.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Is my finance assignment original and plagiarism-free?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, every finance assignment is crafted from scratch based on your specific requirements. We never resell or recycle papers. All work is checked with advanced plagiarism detection software, and we provide a free plagiarism report upon request. All calculations and analysis are original.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you help with Excel-based finance assignments?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we provide comprehensive assistance with Excel-based finance assignments including financial modeling, data analysis, pivot tables, charts, and advanced Excel functions. We deliver working Excel files with formulas intact.
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
                Ready to Ace Your Finance Assignment?
              </h2>
              <p className={styles.ctaText}>
                Whether you need help with corporate finance, investments, or financial modeling — our expert finance writers are ready to assist. Get 100% original work with detailed calculations and analysis.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Order Your Finance Assignment
                </Link>
                <Link href="#pricing" className={styles.ctaSecondary}>
                  View Finance Subjects
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