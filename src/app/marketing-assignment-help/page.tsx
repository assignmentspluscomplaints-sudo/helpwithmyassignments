// src/app/marketing-assignment-help/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// SEO Metadata for Marketing Assignment Help Page
export const metadata: Metadata = {
  title: 'Marketing Assignment Help | Expert Marketing Assignment Writing Service',
  description: 'Need professional marketing assignment help? Our expert marketing writers provide comprehensive assistance with digital marketing, consumer behavior, market research, branding, social media marketing, and more. 100% original, well-researched marketing assignments. Qualified marketing professionals. 24/7 support.',
  keywords: [
    'marketing assignment help',
    'marketing homework help',
    'digital marketing assignment help',
    'consumer behavior assignment help',
    'market research assignment help',
    'branding assignment help',
    'social media marketing assignment help',
    'content marketing assignment help',
    'seo assignment help',
    'ppc assignment help',
    'email marketing assignment help',
    'marketing strategy assignment help',
    'marketing plan assignment help',
    'marketing analytics assignment help',
    'marketing research paper help',
    'marketing case study help',
    'international marketing assignment help',
    'services marketing assignment help',
    'retail marketing assignment help',
    'b2b marketing assignment help',
    'influencer marketing assignment help',
    'marketing dissertation help',
    'marketing capstone project help'
  ],
  authors: [{ name: 'HelpWithMyAssignments Marketing Division' }],
  creator: 'HelpWithMyAssignments',
  publisher: 'HelpWithMyAssignments',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/marketing-assignment-help',
  },
  openGraph: {
    title: 'Marketing Assignment Help | Expert Marketing Assignment Writing Service',
    description: '📊 Get expert marketing assignment help from qualified marketing professionals. Digital marketing, consumer behavior, market research, branding & more. 100% original research. 24/7 support.',
    url: '/marketing-assignment-help',
    siteName: 'HelpWithMyAssignments',
    images: [
      {
        url: '/images/og-marketing-assignment-help.jpg',
        width: 1200,
        height: 630,
        alt: 'Marketing Assignment Help',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Assignment Help',
    description: '📊 Expert marketing assignment help. Get your perfect marketing assignment today!',
    images: ['/images/twitter-marketing-assignment-help.jpg'],
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
  classification: 'Marketing Academic Writing Services',
}

// Structured Data for Rich Results - Service Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://helpassignments.com/marketing-assignment-help",
  "name": "Marketing Assignment Help",
  "description": "Professional marketing assignment help from qualified marketing professionals. Comprehensive assistance with digital marketing, consumer behavior, market research, branding, social media marketing, marketing strategy, and all marketing disciplines. Each assignment is crafted from scratch, follows your specific guidelines, and adheres to academic standards including APA, MLA, and Harvard formatting.",
  "url": "https://helpassignments.com/marketing-assignment-help",
  "provider": {
    "@type": "Organization",
    "name": "HelpWithMyAssignments",
    "url": "https://helpassignments.com"
  },
  "serviceType": "Marketing Assignment Help",
  "areaServed": {
    "@type": "Country",
    "name": "Multiple Countries"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Marketing Assignment Types",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Marketing Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Consumer Behavior Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Market Research Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Branding Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Social Media Marketing Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Marketing Strategy Assignment Help"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "4567",
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
      "name": "Marketing Assignment Help",
      "item": "https://helpassignments.com/marketing-assignment-help"
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
      "name": "What marketing subjects do your experts cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our marketing experts cover all major areas including digital marketing (SEO, PPC, content marketing, social media), consumer behavior, market research, branding, marketing strategy, services marketing, international marketing, B2B marketing, retail marketing, marketing analytics, influencer marketing, email marketing, mobile marketing, and all specialized marketing disciplines."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help with marketing plans and strategies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in creating comprehensive marketing plans and strategies including situation analysis (SWOT, PESTLE), target market identification, marketing objectives, marketing mix (4Ps/7Ps), implementation plans, budgets, and control measures. All plans are tailored to your specific business or case study."
      }
    },
    {
      "@type": "Question",
      "name": "Who writes my marketing assignment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your marketing assignment will be written by a qualified marketing professional with Bachelor's, Master's, or PhD degrees in Marketing, Business, or related fields. Our writers include marketing managers, digital marketing specialists, brand strategists, and academics with extensive industry and teaching experience."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with marketing case study analysis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our experts excel at marketing case study analysis using frameworks like SWOT, PESTLE, Porter's Five Forces, BCG Matrix, Ansoff Matrix, and others. We provide comprehensive analysis of real-world marketing situations with strategic recommendations."
      }
    },
    {
      "@type": "Question",
      "name": "Is my marketing assignment original and plagiarism-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every marketing assignment is crafted from scratch based on your specific requirements. We never resell or recycle papers. All work is checked with advanced plagiarism detection software, and we provide a free plagiarism report upon request. All marketing research is original and properly cited."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help with digital marketing assignments including SEO and social media?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide comprehensive digital marketing assistance including SEO strategies, keyword research, content marketing plans, social media strategies (Facebook, Instagram, LinkedIn, TikTok), PPC campaign analysis, email marketing campaigns, and digital marketing analytics using tools like Google Analytics."
      }
    }
  ]
}

// Marketing categories data
const marketingCategories = [
  {
    title: "Digital Marketing",
    description: "Comprehensive assistance with all aspects of digital marketing including SEO, PPC, content marketing, and analytics.",
    icon: "📱",
    topics: ["SEO", "PPC Advertising", "Content Marketing", "Email Marketing", "Affiliate Marketing", "Marketing Analytics", "Conversion Optimization", "Digital Strategy"]
  },
  {
    title: "Social Media Marketing",
    description: "Expert help with social media strategies, platform-specific marketing, and community management.",
    icon: "📲",
    topics: ["Facebook Marketing", "Instagram Marketing", "LinkedIn Marketing", "TikTok Strategy", "Twitter/X Marketing", "Social Media Analytics", "Community Management", "Influencer Marketing"]
  },
  {
    title: "Consumer Behavior",
    description: "Professional assistance with understanding consumer psychology, decision-making processes, and buying behavior.",
    icon: "🧠",
    topics: ["Consumer Psychology", "Buying Decision Process", "Cultural Influences", "Social Factors", "Personal Factors", "Consumer Motivation", "Attitudes & Perception", "Consumer Research"]
  },
  {
    title: "Market Research",
    description: "Comprehensive help with research methodologies, data collection, analysis, and market insights.",
    icon: "📊",
    topics: ["Research Design", "Qualitative Research", "Quantitative Research", "Survey Design", "Focus Groups", "Data Analysis", "Market Segmentation", "Competitor Analysis"]
  },
  {
    title: "Branding",
    description: "Expert assistance with brand strategy, brand identity, brand equity, and brand management.",
    icon: "🏷️",
    topics: ["Brand Strategy", "Brand Identity", "Brand Equity", "Brand Positioning", "Brand Extension", "Rebranding", "Brand Architecture", "Brand Loyalty"]
  },
  {
    title: "Marketing Strategy",
    description: "Professional help with strategic marketing planning, competitive analysis, and marketing frameworks.",
    icon: "🎯",
    topics: ["Strategic Planning", "SWOT Analysis", "PESTLE Analysis", "Porter's Five Forces", "BCG Matrix", "Ansoff Matrix", "Generic Strategies", "Blue Ocean Strategy"]
  },
  {
    title: "Marketing Mix (4Ps/7Ps)",
    description: "Comprehensive assistance with product, price, place, promotion, and extended marketing mix elements.",
    icon: "🔄",
    topics: ["Product Strategy", "Pricing Strategies", "Distribution Channels", "Promotion Mix", "People", "Process", "Physical Evidence", "Integrated Marketing Communications"]
  },
  {
    title: "Content Marketing",
    description: "Expert help with content strategy, creation, distribution, and measurement.",
    icon: "✍️",
    topics: ["Content Strategy", "Blog Writing", "Video Content", "Infographics", "Content Distribution", "Content Analytics", "Storytelling", "Copywriting"]
  },
  {
    title: "International Marketing",
    description: "Professional assistance with global marketing strategies, cross-cultural considerations, and market entry.",
    icon: "🌍",
    topics: ["Global Strategy", "Market Entry Modes", "Cross-Cultural Marketing", "International Branding", "Global Pricing", "International Distribution", "Cultural Adaptation", "Global Consumer Behavior"]
  },
  {
    title: "Services Marketing",
    description: "Comprehensive help with marketing intangible products, service quality, and customer experience.",
    icon: "🛎️",
    topics: ["Service Characteristics", "Service Quality (SERVQUAL)", "Customer Experience", "Service Recovery", "Relationship Marketing", "Customer Loyalty", "Service Design", "Moments of Truth"]
  },
  {
    title: "B2B Marketing",
    description: "Expert assistance with business-to-business marketing strategies and organizational buying behavior.",
    icon: "🤝",
    topics: ["Organizational Buying", "B2B Relationships", "Industrial Marketing", "Key Account Management", "B2B Branding", "Trade Shows", "B2B Digital Marketing", "Supply Chain Partnerships"]
  },
  {
    title: "Retail Marketing",
    description: "Professional help with retail strategy, merchandising, store atmosphere, and omnichannel retail.",
    icon: "🛒",
    topics: ["Retail Strategy", "Visual Merchandising", "Store Layout", "Omnichannel Retail", "Category Management", "Private Labels", "Retail Analytics", "Customer Experience"]
  },
  {
    title: "Marketing Analytics",
    description: "Comprehensive assistance with marketing metrics, ROI analysis, and data-driven decision making.",
    icon: "📈",
    topics: ["Marketing Metrics", "ROI Analysis", "Customer Analytics", "Campaign Measurement", "Attribution Modeling", "Predictive Analytics", "Data Visualization", "Marketing Dashboards"]
  },
  {
    title: "Influencer Marketing",
    description: "Expert help with influencer identification, campaign strategy, and ROI measurement.",
    icon: "⭐",
    topics: ["Influencer Identification", "Campaign Strategy", "Influencer Relations", "ROI Measurement", "Micro-Influencers", "Macro-Influencers", "Authenticity", "Regulatory Compliance"]
  },
  {
    title: "Email Marketing",
    description: "Professional assistance with email campaigns, automation, list building, and performance optimization.",
    icon: "📧",
    topics: ["Email Strategy", "Campaign Design", "List Building", "Automation", "A/B Testing", "Deliverability", "Metrics & Analytics", "Personalization"]
  },
  {
    title: "Mobile Marketing",
    description: "Comprehensive help with mobile advertising, apps, SMS marketing, and location-based marketing.",
    icon: "📱",
    topics: ["Mobile Advertising", "App Marketing", "SMS Marketing", "Location-Based Marketing", "Mobile UX", "QR Codes", "Push Notifications", "Mobile Analytics"]
  }
]

// Marketing frameworks data
const marketingFrameworks = [
  { name: "SWOT Analysis", description: "Strengths, Weaknesses, Opportunities, Threats" },
  { name: "PESTLE Analysis", description: "Political, Economic, Social, Technological, Legal, Environmental" },
  { name: "Porter's Five Forces", description: "Industry competitive analysis framework" },
  { name: "BCG Matrix", description: "Portfolio analysis - Stars, Cash Cows, Question Marks, Dogs" },
  { name: "Ansoff Matrix", description: "Growth strategies - Market Penetration, Development, Product Development, Diversification" },
  { name: "Marketing Mix (4Ps)", description: "Product, Price, Place, Promotion" },
  { name: "7Ps Framework", description: "Extended marketing mix for services" },
  { name: "STP Model", description: "Segmentation, Targeting, Positioning" },
  { name: "AIDA Model", description: "Attention, Interest, Desire, Action" },
  { name: "Consumer Decision Process", description: "Problem recognition, Information search, Evaluation, Purchase, Post-purchase" },
  { name: "Brand Equity Models", description: "Aaker's Model, Keller's CBBE Model" },
  { name: "SERVQUAL Model", description: "Service quality measurement framework" }
]

// Digital marketing tools data
const marketingTools = [
  { name: "Google Analytics", category: "Analytics" },
  { name: "Google Ads", category: "PPC" },
  { name: "SEMrush", category: "SEO" },
  { name: "Ahrefs", category: "SEO" },
  { name: "Moz", category: "SEO" },
  { name: "HubSpot", category: "Marketing Automation" },
  { name: "Mailchimp", category: "Email Marketing" },
  { name: "Hootsuite", category: "Social Media" },
  { name: "Buffer", category: "Social Media" },
  { name: "Canva", category: "Design" },
  { name: "Adobe Creative Suite", category: "Design" },
  { name: "Tableau", category: "Analytics" },
  { name: "Salesforce", category: "CRM" },
  { name: "SurveyMonkey", category: "Research" },
  { name: "Qualtrics", category: "Research" }
]

// Assignment types data
const assignmentTypes = [
  { name: "Marketing Essays", description: "Well-researched essays on marketing topics with theoretical frameworks and practical examples" },
  { name: "Marketing Plans", description: "Comprehensive marketing plans with situation analysis, objectives, strategies, and implementation" },
  { name: "Case Study Analysis", description: "In-depth analysis of marketing cases with strategic recommendations" },
  { name: "Market Research Reports", description: "Detailed research reports with methodology, findings, and insights" },
  { name: "Digital Marketing Strategies", description: "Strategic digital marketing plans including SEO, social media, and content" },
  { name: "Branding Projects", description: "Complete branding projects including brand strategy, identity, and positioning" },
  { name: "Consumer Behavior Analysis", description: "Analysis of consumer decision-making and psychological factors" },
  { name: "Marketing Research Papers", description: "Scholarly research papers on marketing topics" },
  { name: "Marketing Dissertations", description: "Extended research projects for marketing degrees" },
  { name: "Capstone Projects", description: "Comprehensive projects synthesizing marketing knowledge" },
  { name: "Social Media Strategies", description: "Platform-specific social media strategies with content calendars" },
  { name: "PPC Campaign Analysis", description: "Analysis and optimization of pay-per-click advertising campaigns" }
]

export default function MarketingAssignmentHelpPage() {
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
                Marketing <span className={styles.highlight}>Assignment Help</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Need professional marketing assignment help? Our expert marketing writers provide comprehensive assistance with digital marketing, consumer behavior, market research, branding, social media marketing, and more. Each assignment features strategic analysis, theoretical frameworks, and practical recommendations following your specific requirements.
              </p>
              <div className={styles.heroCta}>
                <Link href="#pricing" className={styles.primaryButton}>
                  View Marketing Services
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Order Your Marketing Assignment
                </Link>
              </div>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>350+</span>
                  <span className={styles.statLabel}>Marketing Experts</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>4.9/5</span>
                  <span className={styles.statLabel}>Student Rating</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>4900+</span>
                  <span className={styles.statLabel}>Marketing Assignments</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Categories Section */}
        <section id="pricing" className={styles.marketingCategories}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              All Marketing Subjects We Cover
            </h2>
            <p className={styles.sectionSubtitle}>
              From digital marketing to branding — we have experts in every marketing discipline
            </p>
            
            <div className={styles.marketingCategoriesGrid}>
              {marketingCategories.map((category, index) => (
                <div key={index} className={styles.marketingCategoryCard}>
                  <div className={styles.marketingCategoryIcon}>{category.icon}</div>
                  <h3 className={styles.marketingCategoryTitle}>{category.title}</h3>
                  <p className={styles.marketingCategoryDescription}>{category.description}</p>
                  <div className={styles.marketingCategoryTopics}>
                    {category.topics.slice(0, 4).map((topic, i) => (
                      <span key={i} className={styles.topicTag}>{topic}</span>
                    ))}
                    {category.topics.length > 4 && (
                      <span className={styles.topicTag}>+{category.topics.length - 4} more</span>
                    )}
                  </div>
                  <Link href="/contact" className={styles.marketingCategoryLink}>
                    Get Help →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Marketing Frameworks Section */}
        <section className={styles.marketingFrameworks}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Marketing Frameworks We Master
            </h2>
            <p className={styles.sectionSubtitle}>
              Strategic frameworks for comprehensive marketing analysis
            </p>
            
            <div className={styles.frameworksGrid}>
              {marketingFrameworks.map((framework, index) => (
                <div key={index} className={styles.frameworkCard}>
                  <h3 className={styles.frameworkName}>{framework.name}</h3>
                  <p className={styles.frameworkDescription}>{framework.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Digital Marketing Tools Section */}
        <section className={styles.marketingTools}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Digital Marketing Tools & Platforms
            </h2>
            <p className={styles.sectionSubtitle}>
              Our experts are proficient in industry-standard marketing tools
            </p>
            
            <div className={styles.toolsGrid}>
              {marketingTools.map((tool, index) => (
                <div key={index} className={styles.toolCard}>
                  <h3 className={styles.toolName}>{tool.name}</h3>
                  <span className={styles.toolCategory}>{tool.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Assignment Types Section */}
        <section className={styles.assignmentTypes}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Types of Marketing Assignments We Write
            </h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive assistance for all your marketing academic needs
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
              Why Choose Our Marketing Assignment Help
            </h2>
            <p className={styles.sectionSubtitle}>
              We deliver excellence in every marketing assignment, every time
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📊</div>
                <h3 className={styles.featureTitle}>Qualified Marketing Professionals</h3>
                <p className={styles.featureDescription}>
                  Your assignment will be written by qualified marketing professionals with degrees in Marketing, Business, or related fields. Many work as marketing managers, digital strategists, or brand consultants.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📋</div>
                <h3 className={styles.featureTitle}>Strategic Frameworks</h3>
                <p className={styles.featureDescription}>
                  We apply relevant marketing frameworks (SWOT, PESTLE, Porter's Five Forces, BCG Matrix, etc.) to provide comprehensive strategic analysis in every assignment.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📱</div>
                <h3 className={styles.featureTitle}>Digital Marketing Expertise</h3>
                <p className={styles.featureDescription}>
                  Our digital marketing specialists provide up-to-date strategies for SEO, PPC, social media, content marketing, and email marketing based on current best practices.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📈</div>
                <h3 className={styles.featureTitle}>Real-World Examples</h3>
                <p className={styles.featureDescription}>
                  We incorporate real-world case studies, brand examples, and current market trends to demonstrate practical application of marketing concepts.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>✅</div>
                <h3 className={styles.featureTitle}>Plagiarism-Free Content</h3>
                <p className={styles.featureDescription}>
                  Every marketing assignment is crafted from scratch based on your requirements. We never resell or recycle papers. Free plagiarism report available.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📝</div>
                <h3 className={styles.featureTitle}>Proper Citations & References</h3>
                <p className={styles.featureDescription}>
                  We cite all sources properly in APA, MLA, Chicago, or Harvard format. Your assignment will include a complete reference list of academic and industry sources.
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
              Get your perfect marketing assignment in 4 simple steps
            </p>
            
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Submit Requirements</h3>
                <p className={styles.stepDescription}>
                  Fill out our order form with your marketing topic, specific questions, company/brand details, formatting style, and any special instructions.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Get Matched with Expert</h3>
                <p className={styles.stepDescription}>
                  We match you with a qualified marketing professional who specializes in your specific area and has experience with similar assignments.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Review & Revise</h3>
                <p className={styles.stepDescription}>
                  Receive your draft with all analysis and recommendations. Review carefully and request any revisions. Unlimited free revisions until you're satisfied.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3 className={styles.stepTitle}>Submit with Confidence</h3>
                <p className={styles.stepDescription}>
                  Download your final, polished marketing assignment with all components. Ready to submit and guaranteed to meet your requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Marketing Section */}
        <section className={styles.whyMarketing}>
          <div className={styles.container}>
            <div className={styles.whyMarketingContent}>
              <h2 className={styles.sectionTitle}>
                Why Marketing Students Trust Us
              </h2>
              <p className={styles.sectionSubtitle}>
                We understand the unique demands of marketing education
              </p>
              
              <div className={styles.whyMarketingGrid}>
                <div className={styles.whyMarketingItem}>
                  <div className={styles.whyMarketingIcon}>📊</div>
                  <h3 className={styles.whyMarketingTitle}>Practical Application</h3>
                  <p className={styles.whyMarketingDescription}>
                    Marketing is about real-world application. Our assignments connect theories to practical business situations, helping you understand how concepts work in the market.
                  </p>
                </div>
                
                <div className={styles.whyMarketingItem}>
                  <div className={styles.whyMarketingIcon}>📱</div>
                  <h3 className={styles.whyMarketingTitle}>Current Trends</h3>
                  <p className={styles.whyMarketingDescription}>
                    Marketing changes fast. We incorporate the latest digital trends, social media platforms, and consumer behavior insights to keep your assignments current.
                  </p>
                </div>
                
                <div className={styles.whyMarketingItem}>
                  <div className={styles.whyMarketingIcon}>📈</div>
                  <h3 className={styles.whyMarketingTitle}>Data-Driven Insights</h3>
                  <p className={styles.whyMarketingDescription}>
                    Modern marketing relies on data. We include marketing analytics, metrics, and data-driven recommendations in your assignments.
                  </p>
                </div>
                
                <div className={styles.whyMarketingItem}>
                  <div className={styles.whyMarketingIcon}>🏆</div>
                  <h3 className={styles.whyMarketingTitle}>Brand Examples</h3>
                  <p className={styles.whyMarketingDescription}>
                    We use real brand examples from companies like Apple, Nike, Coca-Cola, and emerging D2C brands to illustrate marketing concepts in action.
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
              Everything you need to know about our marketing assignment help service
            </p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What marketing subjects do your experts cover?
                </h3>
                <p className={styles.faqAnswer}>
                  Our marketing experts cover all major areas including digital marketing (SEO, PPC, content marketing, social media), consumer behavior, market research, branding, marketing strategy, services marketing, international marketing, B2B marketing, retail marketing, marketing analytics, influencer marketing, email marketing, mobile marketing, and all specialized marketing disciplines.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you help with marketing plans and strategies?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we specialize in creating comprehensive marketing plans and strategies including situation analysis (SWOT, PESTLE), target market identification, marketing objectives, marketing mix (4Ps/7Ps), implementation plans, budgets, and control measures. All plans are tailored to your specific business or case study.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Who writes my marketing assignment?
                </h3>
                <p className={styles.faqAnswer}>
                  Your marketing assignment will be written by a qualified marketing professional with Bachelor's, Master's, or PhD degrees in Marketing, Business, or related fields. Our writers include marketing managers, digital marketing specialists, brand strategists, and academics with extensive industry and teaching experience.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you help with marketing case study analysis?
                </h3>
                <p className={styles.faqAnswer}>
                  Absolutely! Our experts excel at marketing case study analysis using frameworks like SWOT, PESTLE, Porter's Five Forces, BCG Matrix, Ansoff Matrix, and others. We provide comprehensive analysis of real-world marketing situations with strategic recommendations.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Is my marketing assignment original and plagiarism-free?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, every marketing assignment is crafted from scratch based on your specific requirements. We never resell or recycle papers. All work is checked with advanced plagiarism detection software, and we provide a free plagiarism report upon request. All marketing research is original and properly cited.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you help with digital marketing assignments including SEO and social media?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we provide comprehensive digital marketing assistance including SEO strategies, keyword research, content marketing plans, social media strategies (Facebook, Instagram, LinkedIn, TikTok), PPC campaign analysis, email marketing campaigns, and digital marketing analytics using tools like Google Analytics.
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
                Ready to Ace Your Marketing Assignment?
              </h2>
              <p className={styles.ctaText}>
                Whether you need help with digital marketing, consumer behavior, or marketing strategy — our expert marketing writers are ready to assist. Get 100% original, well-researched marketing assignments with strategic insights and practical recommendations.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Order Your Marketing Assignment
                </Link>
                <Link href="#pricing" className={styles.ctaSecondary}>
                  View Marketing Subjects
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