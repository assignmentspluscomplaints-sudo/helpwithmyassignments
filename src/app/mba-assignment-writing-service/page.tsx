// src/app/mba-assignment-writing-service/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// SEO Metadata for MBA Assignment Writing Service Page
export const metadata: Metadata = {
  title: 'MBA Assignment Writing Service | Expert MBA Assignment Help',
  description: 'Need professional MBA assignment help? Our expert MBA writers provide comprehensive assistance with marketing, finance, HR, operations, strategy, and more. 100% original, well-researched MBA assignments. Qualified MBA graduates from top business schools. 24/7 support.',
  keywords: [
    'mba assignment writing service',
    'mba assignment help',
    'mba essay help',
    'mba research paper help',
    'mba case study help',
    'marketing management assignment help',
    'financial management assignment help',
    'human resource management assignment help',
    'operations management assignment help',
    'strategic management assignment help',
    'business analytics assignment help',
    'organizational behavior assignment help',
    'business ethics assignment help',
    'corporate strategy assignment help',
    'supply chain management assignment help',
    'project management assignment help',
    'leadership assignment help',
    'entrepreneurship assignment help',
    'international business assignment help',
    'mba dissertation help',
    'mba capstone project help'
  ],
  authors: [{ name: 'HelpWithMyAssignments MBA Division' }],
  creator: 'HelpWithMyAssignments',
  publisher: 'HelpWithMyAssignments',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/mba-assignment-writing-service',
  },
  openGraph: {
    title: 'MBA Assignment Writing Service | Expert MBA Assignment Help',
    description: '💼 Get expert MBA assignment help from qualified business professionals. Marketing, finance, HR, operations, strategy & more. 100% original research. Harvard/APA/MLA formatting. 24/7 support.',
    url: '/mba-assignment-writing-service',
    siteName: 'HelpWithMyAssignments',
    images: [
      {
        url: '/images/og-mba-assignment-service.jpg',
        width: 1200,
        height: 630,
        alt: 'MBA Assignment Writing Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MBA Assignment Writing Service',
    description: '💼 Expert MBA assignment help. Get your perfect business assignment today!',
    images: ['/images/twitter-mba-assignment-service.jpg'],
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
  classification: 'MBA Academic Writing Services',
}

// Structured Data for Rich Results - Service Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://helpassignments.com/mba-assignment-writing-service",
  "name": "MBA Assignment Writing Service",
  "description": "Professional MBA assignment help from qualified business professionals. Comprehensive assistance with marketing, finance, human resources, operations, strategy, business analytics, and all MBA disciplines. Each assignment is crafted from scratch, follows your specific guidelines, and adheres to Harvard, APA, MLA, and other academic standards.",
  "url": "https://helpassignments.com/mba-assignment-writing-service",
  "provider": {
    "@type": "Organization",
    "name": "HelpWithMyAssignments",
    "url": "https://helpassignments.com"
  },
  "serviceType": "MBA Assignment Writing Service",
  "areaServed": {
    "@type": "Country",
    "name": "Multiple Countries"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "MBA Assignment Types",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Marketing Management Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Financial Management Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Human Resource Management Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Operations Management Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Strategic Management Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Analytics Assignment Help"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "5678",
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
      "name": "MBA Assignment Writing Service",
      "item": "https://helpassignments.com/mba-assignment-writing-service"
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
      "name": "What MBA subjects do your experts cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our MBA experts cover all major business disciplines including marketing management, financial management, human resource management, operations management, strategic management, business analytics, organizational behavior, business ethics, corporate strategy, supply chain management, project management, leadership, entrepreneurship, international business, and all specialized MBA concentrations."
      }
    },
    {
      "@type": "Question",
      "name": "Do you follow specific formatting styles like Harvard or APA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our MBA experts are proficient in all major business formatting styles including Harvard referencing, APA 7th edition, MLA, Chicago/Turabian, and others. We ensure your MBA assignment adheres to the required formatting guidelines for your business school."
      }
    },
    {
      "@type": "Question",
      "name": "Who writes my MBA assignment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your MBA assignment will be written by a qualified business professional with MBA, Master's, or PhD degrees from top business schools. Our writers include business consultants, corporate professionals, and academics with extensive industry and academic experience."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with MBA case study analysis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our MBA experts excel at case study analysis using frameworks like SWOT, PESTLE, Porter's Five Forces, BCG Matrix, and others. We provide comprehensive analysis with practical recommendations and strategic insights."
      }
    },
    {
      "@type": "Question",
      "name": "Is my MBA assignment original and plagiarism-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every MBA assignment is crafted from scratch based on your specific requirements. We never resell or recycle papers. All work is checked with advanced plagiarism detection software, and we provide a free plagiarism report upon request. Our business research is thorough and properly cited."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help with MBA dissertations and capstone projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide comprehensive assistance for MBA students with dissertations, capstone projects, and research papers. Our experts can help with proposal development, literature review, methodology, data analysis, and final write-up following your program's guidelines."
      }
    }
  ]
}

// MBA categories data
const mbaCategories = [
  {
    title: "Marketing Management",
    description: "Comprehensive assistance with marketing principles, consumer behavior, market research, branding, digital marketing, and marketing strategy.",
    icon: "📊",
    topics: ["Consumer Behavior", "Market Research", "Brand Management", "Digital Marketing", "Marketing Strategy", "Social Media Marketing"]
  },
  {
    title: "Financial Management",
    description: "Expert help with corporate finance, investment analysis, capital budgeting, financial markets, risk management, and valuation.",
    icon: "💰",
    topics: ["Corporate Finance", "Investment Analysis", "Capital Budgeting", "Risk Management", "Valuation", "Financial Markets"]
  },
  {
    title: "Human Resource Management",
    description: "Professional assistance with HR strategy, talent management, performance management, employee relations, and organizational development.",
    icon: "👥",
    topics: ["Talent Management", "Performance Management", "Employee Relations", "HR Strategy", "Organizational Development", "Compensation & Benefits"]
  },
  {
    title: "Operations Management",
    description: "Comprehensive help with supply chain management, process improvement, quality management, logistics, and operations strategy.",
    icon: "⚙️",
    topics: ["Supply Chain Management", "Process Improvement", "Quality Management", "Logistics", "Operations Strategy", "Lean Six Sigma"]
  },
  {
    title: "Strategic Management",
    description: "Expert assistance with business strategy, competitive analysis, corporate strategy, strategic planning, and business model innovation.",
    icon: "🎯",
    topics: ["Business Strategy", "Competitive Analysis", "Corporate Strategy", "Strategic Planning", "Business Models", "Mergers & Acquisitions"]
  },
  {
    title: "Business Analytics",
    description: "Professional help with data analysis, business intelligence, predictive modeling, data visualization, and decision analytics.",
    icon: "📈",
    topics: ["Data Analysis", "Business Intelligence", "Predictive Modeling", "Data Visualization", "Decision Analytics", "Big Data"]
  },
  {
    title: "Organizational Behavior",
    description: "Comprehensive assistance with organizational culture, leadership, team dynamics, motivation, and change management.",
    icon: "🏢",
    topics: ["Organizational Culture", "Leadership", "Team Dynamics", "Motivation", "Change Management", "Conflict Resolution"]
  },
  {
    title: "Business Ethics & CSR",
    description: "Expert help with ethical decision-making, corporate social responsibility, business law, and corporate governance.",
    icon: "⚖️",
    topics: ["Ethical Decision Making", "Corporate Social Responsibility", "Business Law", "Corporate Governance", "Sustainability", "Stakeholder Management"]
  },
  {
    title: "Supply Chain Management",
    description: "Professional assistance with logistics, procurement, inventory management, global supply chains, and supply chain strategy.",
    icon: "🚚",
    topics: ["Logistics", "Procurement", "Inventory Management", "Global Supply Chains", "Supply Chain Strategy", "Vendor Management"]
  },
  {
    title: "Project Management",
    description: "Comprehensive help with project planning, risk management, agile methodologies, and project leadership.",
    icon: "📋",
    topics: ["Project Planning", "Risk Management", "Agile Methodologies", "Project Leadership", "Stakeholder Management", "Project Evaluation"]
  },
  {
    title: "Leadership & Change Management",
    description: "Expert assistance with leadership theories, change models, transformational leadership, and organizational transformation.",
    icon: "🌟",
    topics: ["Leadership Theories", "Change Models", "Transformational Leadership", "Organizational Transformation", "Coaching", "Influence"]
  },
  {
    title: "Entrepreneurship",
    description: "Professional help with business planning, venture capital, startup management, innovation, and small business management.",
    icon: "🚀",
    topics: ["Business Planning", "Venture Capital", "Startup Management", "Innovation", "Small Business", "Business Model Canvas"]
  },
  {
    title: "International Business",
    description: "Comprehensive assistance with global strategy, cross-cultural management, international trade, and global operations.",
    icon: "🌐",
    topics: ["Global Strategy", "Cross-Cultural Management", "International Trade", "Global Operations", "Foreign Market Entry", "Globalization"]
  },
  {
    title: "Economics for Business",
    description: "Expert help with microeconomics, macroeconomics, managerial economics, and economic analysis for business decisions.",
    icon: "📉",
    topics: ["Microeconomics", "Macroeconomics", "Managerial Economics", "Economic Analysis", "Market Structures", "Pricing Strategies"]
  }
]

// Assignment types data
const assignmentTypes = [
  { name: "MBA Essays", description: "Well-researched essays on business topics with critical analysis and strategic insights" },
  { name: "Case Study Analysis", description: "In-depth analysis of business cases using frameworks like SWOT, PESTLE, and Porter's Five Forces" },
  { name: "Business Reports", description: "Professional business reports with executive summaries, findings, and recommendations" },
  { name: "Research Papers", description: "Scholarly research papers with literature review and evidence-based recommendations" },
  { name: "Literature Reviews", description: "Comprehensive reviews of academic literature on specific business topics" },
  { name: "Strategic Analysis", description: "Detailed strategic analysis of companies, industries, and competitive landscapes" },
  { name: "Business Plans", description: "Comprehensive business plans for startups and new ventures" },
  { name: "Marketing Plans", description: "Strategic marketing plans with market analysis, segmentation, and marketing mix" },
  { name: "Financial Analysis", description: "In-depth financial analysis including ratio analysis, valuation, and forecasting" },
  { name: "MBA Dissertations", description: "Extended research projects for MBA programs" },
  { name: "Capstone Projects", description: "Comprehensive projects synthesizing MBA knowledge and business practice" },
  { name: "Reflective Essays", description: "Personal reflections on leadership, management, and professional development" }
]

// Business schools data
const businessSchools = [
  { name: "Harvard Business School", icon: "" },
  { name: "Stanford GSB", icon: "" },
  { name: "Wharton School", icon: "" },
  { name: "London Business School", icon: "" },
  { name: "INSEAD", icon: "" },
  { name: "IESE Business School", icon: "" },
  { name: "Chicago Booth", icon: "" },
  { name: "MIT Sloan", icon: "" },
  { name: "Columbia Business School", icon: "" },
  { name: "Kellogg School", icon: "" }
]

// MBA specializations data
const mbaSpecializations = [
  { name: "Full-Time MBA", icon: "📚" },
  { name: "Executive MBA", icon: "👔" },
  { name: "Part-Time MBA", icon: "⏰" },
  { name: "Online MBA", icon: "💻" },
  { name: "One-Year MBA", icon: "📅" },
  { name: "Global MBA", icon: "🌍" }
]

export default function MBAAssignmentWritingServicePage() {
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
                MBA Assignment <span className={styles.highlight}>Writing Service</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Need professional MBA assignment help? Our expert MBA writers provide comprehensive assistance with marketing, finance, HR, operations, strategy, and more. Each assignment is crafted from scratch, follows your specific guidelines, and adheres to Harvard, APA, and other academic standards.
              </p>
              <div className={styles.heroCta}>
                <Link href="#pricing" className={styles.primaryButton}>
                  View MBA Services
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Order Your MBA Assignment
                </Link>
              </div>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>400+</span>
                  <span className={styles.statLabel}>MBA Experts</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>4.9/5</span>
                  <span className={styles.statLabel}>Student Rating</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>6500+</span>
                  <span className={styles.statLabel}>MBA Assignments</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MBA Specializations Section */}
        <section className={styles.mbaSpecializations}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              MBA Programs We Support
            </h2>
            <p className={styles.sectionSubtitle}>
              Our experts are qualified across all MBA program types
            </p>
            
            <div className={styles.specializationsGrid}>
              {mbaSpecializations.map((spec, index) => (
                <div key={index} className={styles.specializationCard}>
                  <div className={styles.specializationIcon}>{spec.icon}</div>
                  <h3 className={styles.specializationName}>{spec.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Schools Section */}
        <section className={styles.businessSchools}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Experts from Top Business Schools
            </h2>
            <p className={styles.sectionSubtitle}>
              Our MBA writers graduated from leading business schools worldwide
            </p>
            
            <div className={styles.businessSchoolsGrid}>
              {businessSchools.map((school, index) => (
                <div key={index} className={styles.businessSchoolCard}>
                  <div className={styles.businessSchoolIcon}>{school.icon}</div>
                  <h3 className={styles.businessSchoolName}>{school.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MBA Categories Section */}
        <section id="pricing" className={styles.mbaCategories}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              All MBA Subjects We Cover
            </h2>
            <p className={styles.sectionSubtitle}>
              From marketing to finance to strategy — we have experts in every business discipline
            </p>
            
            <div className={styles.mbaCategoriesGrid}>
              {mbaCategories.map((category, index) => (
                <div key={index} className={styles.mbaCategoryCard}>
                  <div className={styles.mbaCategoryIcon}>{category.icon}</div>
                  <h3 className={styles.mbaCategoryTitle}>{category.title}</h3>
                  <p className={styles.mbaCategoryDescription}>{category.description}</p>
                  <div className={styles.mbaCategoryTopics}>
                    {category.topics.map((topic, i) => (
                      <span key={i} className={styles.topicTag}>{topic}</span>
                    ))}
                  </div>
                  <Link href="/contact" className={styles.mbaCategoryLink}>
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
              Types of MBA Assignments We Write
            </h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive assistance for all your MBA academic needs
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
              Why Choose Our MBA Assignment Service
            </h2>
            <p className={styles.sectionSubtitle}>
              We deliver excellence in every MBA assignment, every time
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🎓</div>
                <h3 className={styles.featureTitle}>MBA Qualified Experts</h3>
                <p className={styles.featureDescription}>
                  Your assignment will be written by qualified business professionals with MBA, Master's, or PhD degrees from top business schools. Many have industry experience as consultants and managers.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📊</div>
                <h3 className={styles.featureTitle}>Business Frameworks</h3>
                <p className={styles.featureDescription}>
                  Our experts are proficient in using business frameworks like SWOT, PESTLE, Porter's Five Forces, BCG Matrix, Ansoff Matrix, and others for comprehensive analysis.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📚</div>
                <h3 className={styles.featureTitle}>Harvard/APA/MLA Masters</h3>
                <p className={styles.featureDescription}>
                  We ensure your MBA assignment follows the required formatting style perfectly, whether it's Harvard referencing, APA, MLA, Chicago, or another business school format.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔬</div>
                <h3 className={styles.featureTitle}>Real-World Examples</h3>
                <p className={styles.featureDescription}>
                  Our assignments incorporate real-world business examples, case studies, and current industry trends to demonstrate practical application of business concepts.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>✅</div>
                <h3 className={styles.featureTitle}>100% Original Content</h3>
                <p className={styles.featureDescription}>
                  Every MBA assignment is crafted from scratch based on your requirements. We never resell or recycle papers. Free plagiarism report available.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>💡</div>
                <h3 className={styles.featureTitle}>Strategic Recommendations</h3>
                <p className={styles.featureDescription}>
                  Our assignments provide actionable, strategic recommendations based on thorough analysis, demonstrating the strategic thinking expected at MBA level.
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
              Get your perfect MBA assignment in 4 simple steps
            </p>
            
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Submit Requirements</h3>
                <p className={styles.stepDescription}>
                  Fill out our order form with your MBA topic, subject area, assignment type, formatting style, and any specific instructions or sources.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Get Matched with Expert</h3>
                <p className={styles.stepDescription}>
                  We match you with a qualified MBA professional who specializes in your specific area and has experience with your program type.
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
                  Download your final, polished MBA assignment. It's ready to submit and guaranteed to meet your requirements and business school standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why MBA Section */}
        <section className={styles.whyMba}>
          <div className={styles.container}>
            <div className={styles.whyMbaContent}>
              <h2 className={styles.sectionTitle}>
                Why MBA Students Trust Us
              </h2>
              <p className={styles.sectionSubtitle}>
                We understand the unique demands of MBA education
              </p>
              
              <div className={styles.whyMbaGrid}>
                <div className={styles.whyMbaItem}>
                  <div className={styles.whyMbaIcon}>⏰</div>
                  <h3 className={styles.whyMbaTitle}>Tight Deadlines</h3>
                  <p className={styles.whyMbaDescription}>
                    We know MBA students juggle work, classes, and networking. Our experts work around your schedule to meet tight deadlines without compromising quality.
                  </p>
                </div>
                
                <div className={styles.whyMbaItem}>
                  <div className={styles.whyMbaIcon}>📊</div>
                  <h3 className={styles.whyMbaTitle}>Practical Application</h3>
                  <p className={styles.whyMbaDescription}>
                    Our assignments focus on practical application of business theories, helping you understand how concepts work in real business scenarios.
                  </p>
                </div>
                
                <div className={styles.whyMbaItem}>
                  <div className={styles.whyMbaIcon}>💼</div>
                  <h3 className={styles.whyMbaTitle}>Industry Relevance</h3>
                  <p className={styles.whyMbaDescription}>
                    We incorporate current industry trends, challenges, and best practices, making your assignments relevant to today's business environment.
                  </p>
                </div>
                
                <div className={styles.whyMbaItem}>
                  <div className={styles.whyMbaIcon}>🎯</div>
                  <h3 className={styles.whyMbaTitle}>Strategic Thinking</h3>
                  <p className={styles.whyMbaDescription}>
                    Our assignments develop strategic thinking skills, preparing you for the complex decision-making required in business leadership roles.
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
              Everything you need to know about our MBA assignment writing service
            </p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What MBA subjects do your experts cover?
                </h3>
                <p className={styles.faqAnswer}>
                  Our MBA experts cover all major business disciplines including marketing management, financial management, human resource management, operations management, strategic management, business analytics, organizational behavior, business ethics, corporate strategy, supply chain management, project management, leadership, entrepreneurship, international business, and all specialized MBA concentrations.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you follow specific formatting styles like Harvard or APA?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, our MBA experts are proficient in all major business formatting styles including Harvard referencing, APA 7th edition, MLA, Chicago/Turabian, and others. We ensure your MBA assignment adheres to the required formatting guidelines for your business school.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Who writes my MBA assignment?
                </h3>
                <p className={styles.faqAnswer}>
                  Your MBA assignment will be written by a qualified business professional with MBA, Master's, or PhD degrees from top business schools. Our writers include business consultants, corporate professionals, and academics with extensive industry and academic experience.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you help with MBA case study analysis?
                </h3>
                <p className={styles.faqAnswer}>
                  Absolutely! Our MBA experts excel at case study analysis using frameworks like SWOT, PESTLE, Porter's Five Forces, BCG Matrix, and others. We provide comprehensive analysis with practical recommendations and strategic insights.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Is my MBA assignment original and plagiarism-free?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, every MBA assignment is crafted from scratch based on your specific requirements. We never resell or recycle papers. All work is checked with advanced plagiarism detection software, and we provide a free plagiarism report upon request. Our business research is thorough and properly cited.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you help with MBA dissertations and capstone projects?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we provide comprehensive assistance for MBA students with dissertations, capstone projects, and research papers. Our experts can help with proposal development, literature review, methodology, data analysis, and final write-up following your program's guidelines.
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
                Ready to Ace Your MBA Assignment?
              </h2>
              <p className={styles.ctaText}>
                Whether you need help with marketing, finance, strategy, or any other business subject — our expert MBA writers are ready to assist. Get a 100% original, well-researched MBA assignment crafted to your exact requirements.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Order Your MBA Assignment
                </Link>
                <Link href="#pricing" className={styles.ctaSecondary}>
                  View MBA Subjects
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