// src/app/programming-assignment-writing-service/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// SEO Metadata for Programming Assignment Writing Service Page
export const metadata: Metadata = {
  title: 'Programming Assignment Writing Service | Expert Coding Assignment Help',
  description: 'Need professional programming assignment help? Our expert developers provide comprehensive assistance with Python, Java, C++, JavaScript, web development, data structures, algorithms, and more. 100% original, well-documented code. Qualified programmers. 24/7 support.',
  keywords: [
    'programming assignment writing service',
    'programming assignment help',
    'coding assignment help',
    'python assignment help',
    'java assignment help',
    'c++ assignment help',
    'javascript assignment help',
    'web development assignment help',
    'data structures assignment help',
    'algorithms assignment help',
    'database assignment help',
    'sql assignment help',
    'machine learning assignment help',
    'artificial intelligence assignment help',
    'react assignment help',
    'node js assignment help',
    'php assignment help',
    'c sharp assignment help',
    'ruby assignment help',
    'swift assignment help',
    'kotlin assignment help',
    'html css assignment help',
    'computer science assignment help',
    'software engineering assignment help'
  ],
  authors: [{ name: 'HelpWithMyAssignments Programming Division' }],
  creator: 'HelpWithMyAssignments',
  publisher: 'HelpWithMyAssignments',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/programming-assignment-writing-service',
  },
  openGraph: {
    title: 'Programming Assignment Writing Service | Expert Coding Assignment Help',
    description: '💻 Get expert programming assignment help from qualified developers. Python, Java, C++, JavaScript, web development, data structures, algorithms & more. 100% original code. 24/7 support.',
    url: '/programming-assignment-writing-service',
    siteName: 'HelpWithMyAssignments',
    images: [
      {
        url: '/images/og-programming-assignment-service.jpg',
        width: 1200,
        height: 630,
        alt: 'Programming Assignment Writing Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Programming Assignment Writing Service',
    description: '💻 Expert programming assignment help. Get your perfect code today!',
    images: ['/images/twitter-programming-assignment-service.jpg'],
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
  classification: 'Programming Academic Writing Services',
}

// Structured Data for Rich Results - Service Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://helpassignments.com/programming-assignment-writing-service",
  "name": "Programming Assignment Writing Service",
  "description": "Professional programming assignment help from qualified developers. Comprehensive assistance with Python, Java, C++, JavaScript, web development, data structures, algorithms, databases, machine learning, and all programming languages. Each assignment features original, well-documented code that follows best practices and your specific requirements.",
  "url": "https://helpassignments.com/programming-assignment-writing-service",
  "provider": {
    "@type": "Organization",
    "name": "HelpWithMyAssignments",
    "url": "https://helpassignments.com"
  },
  "serviceType": "Programming Assignment Writing Service",
  "areaServed": {
    "@type": "Country",
    "name": "Multiple Countries"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Programming Assignment Types",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Python Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Java Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "C++ Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "JavaScript Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Structures & Algorithms Help"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "6234",
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
      "name": "Programming Assignment Writing Service",
      "item": "https://helpassignments.com/programming-assignment-writing-service"
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
      "name": "What programming languages do your experts cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our programming experts cover all major languages including Python, Java, C++, JavaScript, TypeScript, C#, PHP, Ruby, Swift, Kotlin, Go, Rust, SQL, HTML/CSS, R, MATLAB, Scala, Perl, and many more. We also cover frameworks like React, Angular, Vue.js, Node.js, Django, Flask, Spring, .NET, and Laravel."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide original, working code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every programming assignment features original, working code written from scratch based on your requirements. We test all code to ensure it runs correctly and meets specifications. We never reuse or resell code, and we provide documentation and comments as needed."
      }
    },
    {
      "@type": "Question",
      "name": "Who writes my programming assignment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your programming assignment will be written by a qualified developer with a degree in Computer Science, Software Engineering, or related field. Our experts include professional software engineers, full-stack developers, and academics with years of industry and teaching experience."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with data structures and algorithms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our experts excel at data structures and algorithms assignments including arrays, linked lists, stacks, queues, trees, graphs, hash tables, sorting algorithms, searching algorithms, dynamic programming, and complexity analysis. We provide optimized, efficient solutions."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide code documentation and explanations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all code includes comprehensive comments and documentation. We also provide explanations of the approach, algorithm design, and implementation details to help you understand the code and learn the concepts."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with web development projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide comprehensive web development assistance including front-end (HTML, CSS, JavaScript, React, Angular, Vue), back-end (Node.js, Python/Django, PHP/Laravel, Java/Spring), and full-stack projects. We also help with databases, APIs, and deployment."
      }
    }
  ]
}

// Programming languages data
const programmingLanguages = [
  {
    name: "Python",
    description: "Data science, machine learning, web development, automation",
    icon: "🐍",
    topics: ["Data Structures", "Algorithms", "Django", "Flask", "NumPy", "Pandas"]
  },
  {
    name: "Java",
    description: "Enterprise applications, Android development, backend systems",
    icon: "☕",
    topics: ["OOP", "Spring", "Hibernate", "Android", "Multithreading", "Design Patterns"]
  },
  {
    name: "C++",
    description: "Systems programming, game development, performance-critical apps",
    icon: "⚙️",
    topics: ["Pointers", "Memory Management", "STL", "OOP", "Data Structures", "Algorithms"]
  },
  {
    name: "JavaScript",
    description: "Web development, front-end, back-end, mobile apps",
    icon: "📱",
    topics: ["React", "Node.js", "Angular", "Vue.js", "TypeScript", "Express"]
  },
  {
    name: "C#",
    description: "Windows applications, game development (Unity), enterprise software",
    icon: "🎮",
    topics: [".NET", "ASP.NET", "Unity", "LINQ", "Entity Framework", "WPF"]
  },
  {
    name: "PHP",
    description: "Web development, server-side scripting, content management systems",
    icon: "🐘",
    topics: ["Laravel", "Symfony", "WordPress", "MySQL", "REST APIs", "MVC"]
  },
  {
    name: "Ruby",
    description: "Web development, prototyping, automation",
    icon: "💎",
    topics: ["Ruby on Rails", "Sinatra", "RSpec", "MVC", "ActiveRecord", "APIs"]
  },
  {
    name: "Swift",
    description: "iOS and macOS application development",
    icon: "🍎",
    topics: ["iOS Development", "SwiftUI", "UIKit", "Core Data", "Networking", "MVC"]
  },
  {
    name: "Kotlin",
    description: "Android development, modern JVM applications",
    icon: "📱",
    topics: ["Android", "Coroutines", "Jetpack", "MVVM", "Room", "REST APIs"]
  },
  {
    name: "SQL",
    description: "Database design, queries, optimization, data analysis",
    icon: "🗄️",
    topics: ["MySQL", "PostgreSQL", "MongoDB", "Query Optimization", "Database Design", "Transactions"]
  },
  {
    name: "R",
    description: "Statistical computing, data analysis, visualization",
    icon: "📊",
    topics: ["Data Analysis", "Statistics", "ggplot2", "dplyr", "Machine Learning", "Visualization"]
  },
  {
    name: "MATLAB",
    description: "Numerical computing, engineering simulations, data analysis",
    icon: "📈",
    topics: ["Numerical Analysis", "Simulations", "Signal Processing", "Image Processing", "Optimization"]
  },
  {
    name: "Go",
    description: "Concurrent systems, cloud services, backend development",
    icon: "🔷",
    topics: ["Concurrency", "Goroutines", "Web Services", "APIs", "Microservices", "Cloud"]
  },
  {
    name: "Rust",
    description: "Systems programming, performance-critical applications",
    icon: "⚡",
    topics: ["Memory Safety", "Concurrency", "Ownership", "Systems Programming", "WebAssembly"]
  },
  {
    name: "TypeScript",
    description: "Type-safe JavaScript, large-scale applications",
    icon: "🔷",
    topics: ["Types", "Interfaces", "Generics", "React with TS", "Node.js with TS", "Angular"]
  }
]

// Frameworks and technologies data
const frameworksData = [
  { category: "Frontend", items: ["React", "Angular", "Vue.js", "Next.js", "Svelte", "jQuery"] },
  { category: "Backend", items: ["Node.js", "Django", "Flask", "Spring", "Express", "Laravel"] },
  { category: "Mobile", items: ["React Native", "Flutter", "SwiftUI", "Android Jetpack", "Xamarin"] },
  { category: "Database", items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Redis", "SQLite"] },
  { category: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "Git"] },
  { category: "AI/ML", items: ["TensorFlow", "PyTorch", "scikit-learn", "Keras", "OpenCV", "NLTK"] }
]

// Assignment types data
const assignmentTypes = [
  { name: "Coding Assignments", description: "Original, working code solutions for programming problems" },
  { name: "Algorithm Design", description: "Efficient algorithm design with complexity analysis" },
  { name: "Data Structure Implementation", description: "Implementation of various data structures from scratch" },
  { name: "Web Development Projects", description: "Full-stack web applications with frontend and backend" },
  { name: "Mobile App Development", description: "iOS and Android applications with clean architecture" },
  { name: "Database Design", description: "Database schema design, queries, and optimization" },
  { name: "Software Engineering Projects", description: "Complete software projects with documentation" },
  { name: "Code Debugging & Fixes", description: "Identify and fix bugs in existing code" },
  { name: "Code Review & Optimization", description: "Code review with performance optimization suggestions" },
  { name: "Programming Essays", description: "Research papers on programming concepts and technologies" },
  { name: "API Development", description: "RESTful API design and implementation" },
  { name: "Game Development", description: "Game projects using Unity, Unreal, or custom engines" }
]

// Computer science topics data
const csTopics = [
  { name: "Data Structures & Algorithms", icon: "🔢" },
  { name: "Object-Oriented Programming", icon: "🔄" },
  { name: "Database Systems", icon: "🗄️" },
  { name: "Operating Systems", icon: "⚙️" },
  { name: "Computer Networks", icon: "🌐" },
  { name: "Software Engineering", icon: "📱" },
  { name: "Artificial Intelligence", icon: "🤖" },
  { name: "Machine Learning", icon: "📊" },
  { name: "Cybersecurity", icon: "🔒" },
  { name: "Web Development", icon: "🌍" },
  { name: "Mobile Development", icon: "📱" },
  { name: "Cloud Computing", icon: "☁️" }
]

export default function ProgrammingAssignmentWritingServicePage() {
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
                Programming Assignment <span className={styles.highlight}>Writing Service</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Need professional programming assignment help? Our expert developers provide comprehensive assistance with Python, Java, C++, JavaScript, web development, data structures, algorithms, and more. Each assignment features original, well-documented code that follows best practices and your specific requirements.
              </p>
              <div className={styles.heroCta}>
                <Link href="#pricing" className={styles.primaryButton}>
                  View Programming Services
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Order Your Programming Assignment
                </Link>
              </div>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>450+</span>
                  <span className={styles.statLabel}>Programming Experts</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>4.9/5</span>
                  <span className={styles.statLabel}>Student Rating</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>7200+</span>
                  <span className={styles.statLabel}>Coding Assignments</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CS Topics Section */}
        <section className={styles.csTopics}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Computer Science Topics We Cover
            </h2>
            <p className={styles.sectionSubtitle}>
              From fundamentals to advanced specializations
            </p>
            
            <div className={styles.csTopicsGrid}>
              {csTopics.map((topic, index) => (
                <div key={index} className={styles.csTopicCard}>
                  <div className={styles.csTopicIcon}>{topic.icon}</div>
                  <h3 className={styles.csTopicName}>{topic.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programming Languages Section */}
        <section id="pricing" className={styles.programmingLanguages}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Programming Languages We Support
            </h2>
            <p className={styles.sectionSubtitle}>
              From Python to Rust — we have experts in every programming language
            </p>
            
            <div className={styles.languagesGrid}>
              {programmingLanguages.map((lang, index) => (
                <div key={index} className={styles.languageCard}>
                  <div className={styles.languageIcon}>{lang.icon}</div>
                  <h3 className={styles.languageName}>{lang.name}</h3>
                  <p className={styles.languageDescription}>{lang.description}</p>
                  <div className={styles.languageTopics}>
                    {lang.topics.map((topic, i) => (
                      <span key={i} className={styles.topicTag}>{topic}</span>
                    ))}
                  </div>
                  <Link href="/contact" className={styles.languageLink}>
                    Get Help →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Frameworks Section */}
        <section className={styles.frameworks}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Frameworks & Technologies
            </h2>
            <p className={styles.sectionSubtitle}>
              We cover all major frameworks across the development stack
            </p>
            
            <div className={styles.frameworksGrid}>
              {frameworksData.map((category, index) => (
                <div key={index} className={styles.frameworkCategory}>
                  <h3 className={styles.frameworkCategoryTitle}>{category.category}</h3>
                  <div className={styles.frameworkItems}>
                    {category.items.map((item, i) => (
                      <span key={i} className={styles.frameworkItem}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Assignment Types Section */}
        <section className={styles.assignmentTypes}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Types of Programming Assignments We Write
            </h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive assistance for all your coding needs
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
              Why Choose Our Programming Assignment Service
            </h2>
            <p className={styles.sectionSubtitle}>
              We deliver excellence in every programming assignment, every time
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>👨‍💻</div>
                <h3 className={styles.featureTitle}>Qualified Developers</h3>
                <p className={styles.featureDescription}>
                  Your assignment will be written by qualified developers with Computer Science degrees. Many are professional software engineers with years of industry experience.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>✅</div>
                <h3 className={styles.featureTitle}>Working, Tested Code</h3>
                <p className={styles.featureDescription}>
                  All code is tested to ensure it runs correctly and meets specifications. We provide working solutions, not just theoretical code.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📝</div>
                <h3 className={styles.featureTitle}>Well-Documented Code</h3>
                <p className={styles.featureDescription}>
                  Code includes comprehensive comments and documentation. We also provide explanations of the approach and implementation details.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⚡</div>
                <h3 className={styles.featureTitle}>Optimized Solutions</h3>
                <p className={styles.featureDescription}>
                  We write efficient, optimized code with attention to time and space complexity, following best practices and design patterns.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔍</div>
                <h3 className={styles.featureTitle}>Plagiarism-Free Code</h3>
                <p className={styles.featureDescription}>
                  Every programming assignment is written from scratch. We never reuse or resell code. Originality guaranteed.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔄</div>
                <h3 className={styles.featureTitle}>Multiple Languages</h3>
                <p className={styles.featureDescription}>
                  Need code in a specific language? We support Python, Java, C++, JavaScript, and 15+ other languages.
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
              Get your perfect programming assignment in 4 simple steps
            </p>
            
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Submit Requirements</h3>
                <p className={styles.stepDescription}>
                  Fill out our order form with your programming language, project requirements, algorithms, data structures, and any specific instructions.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Get Matched with Expert</h3>
                <p className={styles.stepDescription}>
                  We match you with a qualified developer who specializes in your specific programming language and has experience with your type of project.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Review & Revise</h3>
                <p className={styles.stepDescription}>
                  Receive your code, test it, and request any revisions. We offer unlimited free revisions until you're satisfied.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3 className={styles.stepTitle}>Submit with Confidence</h3>
                <p className={styles.stepDescription}>
                  Download your final, working code with documentation. It's ready to submit and guaranteed to meet your requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Programming Section */}
        <section className={styles.whyProgramming}>
          <div className={styles.container}>
            <div className={styles.whyProgrammingContent}>
              <h2 className={styles.sectionTitle}>
                Why Computer Science Students Trust Us
              </h2>
              <p className={styles.sectionSubtitle}>
                We understand the unique challenges of programming education
              </p>
              
              <div className={styles.whyProgrammingGrid}>
                <div className={styles.whyProgrammingItem}>
                  <div className={styles.whyProgrammingIcon}>⏰</div>
                  <h3 className={styles.whyProgrammingTitle}>Tight Deadlines</h3>
                  <p className={styles.whyProgrammingDescription}>
                    We know coding projects take time. Our experts work efficiently to meet your deadlines without compromising code quality.
                  </p>
                </div>
                
                <div className={styles.whyProgrammingItem}>
                  <div className={styles.whyProgrammingIcon}>🔧</div>
                  <h3 className={styles.whyProgrammingTitle}>Debugging Help</h3>
                  <p className={styles.whyProgrammingDescription}>
                    Stuck with bugs? We can identify and fix issues in your existing code, helping you learn from the debugging process.
                  </p>
                </div>
                
                <div className={styles.whyProgrammingItem}>
                  <div className={styles.whyProgrammingIcon}>📚</div>
                  <h3 className={styles.whyProgrammingTitle}>Learning-Focused</h3>
                  <p className={styles.whyProgrammingDescription}>
                    Our code includes detailed comments and explanations, helping you understand the concepts and learn from the solution.
                  </p>
                </div>
                
                <div className={styles.whyProgrammingItem}>
                  <div className={styles.whyProgrammingIcon}>🏆</div>
                  <h3 className={styles.whyProgrammingTitle}>Best Practices</h3>
                  <p className={styles.whyProgrammingDescription}>
                    We follow industry best practices, design patterns, and clean code principles, setting you up for success in your career.
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
              Everything you need to know about our programming assignment writing service
            </p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What programming languages do your experts cover?
                </h3>
                <p className={styles.faqAnswer}>
                  Our programming experts cover all major languages including Python, Java, C++, JavaScript, TypeScript, C#, PHP, Ruby, Swift, Kotlin, Go, Rust, SQL, HTML/CSS, R, MATLAB, Scala, Perl, and many more. We also cover frameworks like React, Angular, Vue.js, Node.js, Django, Flask, Spring, .NET, and Laravel.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you provide original, working code?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, every programming assignment features original, working code written from scratch based on your requirements. We test all code to ensure it runs correctly and meets specifications. We never reuse or resell code, and we provide documentation and comments as needed.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Who writes my programming assignment?
                </h3>
                <p className={styles.faqAnswer}>
                  Your programming assignment will be written by a qualified developer with a degree in Computer Science, Software Engineering, or related field. Our experts include professional software engineers, full-stack developers, and academics with years of industry and teaching experience.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you help with data structures and algorithms?
                </h3>
                <p className={styles.faqAnswer}>
                  Absolutely! Our experts excel at data structures and algorithms assignments including arrays, linked lists, stacks, queues, trees, graphs, hash tables, sorting algorithms, searching algorithms, dynamic programming, and complexity analysis. We provide optimized, efficient solutions.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you provide code documentation and explanations?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, all code includes comprehensive comments and documentation. We also provide explanations of the approach, algorithm design, and implementation details to help you understand the code and learn the concepts.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you help with web development projects?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we provide comprehensive web development assistance including front-end (HTML, CSS, JavaScript, React, Angular, Vue), back-end (Node.js, Python/Django, PHP/Laravel, Java/Spring), and full-stack projects. We also help with databases, APIs, and deployment.
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
                Ready to Ace Your Programming Assignment?
              </h2>
              <p className={styles.ctaText}>
                Whether you need help with Python, Java, web development, or algorithms — our expert programmers are ready to assist. Get 100% original, working code with comprehensive documentation.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Order Your Programming Assignment
                </Link>
                <Link href="#pricing" className={styles.ctaSecondary}>
                  View Programming Languages
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