// src/app/computer-science-assignment-writing-service/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// SEO Metadata for Computer Science Assignment Writing Service Page
export const metadata: Metadata = {
  title: 'Computer Science Assignment Writing Service | Expert CS Help',
  description: 'Need professional computer science assignment help? Our expert CS writers provide comprehensive assistance with programming, algorithms, data structures, databases, networking, AI, machine learning, and more. 100% original, well-documented code. Qualified computer scientists. 24/7 support.',
  keywords: [
    'computer science assignment writing service',
    'computer science assignment help',
    'cs assignment help',
    'programming assignment help',
    'algorithms assignment help',
    'data structures assignment help',
    'database assignment help',
    'networking assignment help',
    'artificial intelligence assignment help',
    'machine learning assignment help',
    'operating systems assignment help',
    'software engineering assignment help',
    'web development assignment help',
    'mobile development assignment help',
    'python assignment help',
    'java assignment help',
    'c++ assignment help',
    'javascript assignment help',
    'sql assignment help',
    'computer architecture assignment help',
    'theory of computation assignment help',
    'compiler design assignment help',
    'computer graphics assignment help',
    'cybersecurity assignment help'
  ],
  authors: [{ name: 'HelpWithMyAssignments CS Division' }],
  creator: 'HelpWithMyAssignments',
  publisher: 'HelpWithMyAssignments',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/computer-science-assignment-writing-service',
  },
  openGraph: {
    title: 'Computer Science Assignment Writing Service | Expert CS Help',
    description: '💻 Get expert computer science assignment help from qualified CS professionals. Programming, algorithms, data structures, AI, machine learning & more. 100% original code. 24/7 support.',
    url: '/computer-science-assignment-writing-service',
    siteName: 'HelpWithMyAssignments',
    images: [
      {
        url: '/images/og-cs-assignment-service.jpg',
        width: 1200,
        height: 630,
        alt: 'Computer Science Assignment Writing Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computer Science Assignment Writing Service',
    description: '💻 Expert CS assignment help. Get your perfect computer science assignment today!',
    images: ['/images/twitter-cs-assignment-service.jpg'],
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
  classification: 'Computer Science Academic Writing Services',
}

// Structured Data for Rich Results - Service Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://helpassignments.com/computer-science-assignment-writing-service",
  "name": "Computer Science Assignment Writing Service",
  "description": "Professional computer science assignment help from qualified CS professionals. Comprehensive assistance with programming, algorithms, data structures, databases, networking, artificial intelligence, machine learning, and all computer science disciplines. Each assignment features original, well-documented code and clear explanations following your specific requirements.",
  "url": "https://helpassignments.com/computer-science-assignment-writing-service",
  "provider": {
    "@type": "Organization",
    "name": "HelpWithMyAssignments",
    "url": "https://helpassignments.com"
  },
  "serviceType": "Computer Science Assignment Writing Service",
  "areaServed": {
    "@type": "Country",
    "name": "Multiple Countries"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "CS Assignment Types",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Programming Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Algorithms Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Structures Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Database Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI & Machine Learning Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Networking Assignment Help"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "5234",
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
      "name": "Computer Science Assignment Writing Service",
      "item": "https://helpassignments.com/computer-science-assignment-writing-service"
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
      "name": "What computer science topics do your experts cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our computer science experts cover all major areas including programming (Python, Java, C++, JavaScript), algorithms and data structures, databases (SQL, NoSQL), networking, operating systems, software engineering, artificial intelligence, machine learning, computer architecture, theory of computation, compiler design, computer graphics, cybersecurity, web development, mobile development, and all specialized CS fields."
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
      "name": "Who writes my computer science assignment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your computer science assignment will be written by a qualified professional with a degree in Computer Science, Software Engineering, or related field. Our experts include software engineers, developers, researchers, and academics with extensive industry and teaching experience."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with algorithm design and analysis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our experts excel at algorithm design and analysis including time and space complexity, sorting and searching algorithms, graph algorithms, dynamic programming, greedy algorithms, divide and conquer, and NP-completeness. We provide efficient, optimized solutions with thorough complexity analysis."
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
      "name": "Can you help with AI and machine learning projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide comprehensive AI and machine learning assistance including neural networks, deep learning, natural language processing, computer vision, reinforcement learning, and ML frameworks like TensorFlow, PyTorch, scikit-learn, and Keras."
      }
    }
  ]
}

// CS core topics data
const csCoreTopics = [
  {
    title: "Programming Languages",
    description: "Expert help with programming across multiple languages and paradigms.",
    icon: "💻",
    topics: ["Python", "Java", "C++", "JavaScript", "C#", "Ruby", "Go", "Rust", "Swift", "Kotlin", "PHP", "TypeScript"]
  },
  {
    title: "Algorithms",
    description: "Comprehensive assistance with algorithm design, analysis, and optimization.",
    icon: "⚙️",
    topics: ["Sorting Algorithms", "Searching Algorithms", "Graph Algorithms", "Dynamic Programming", "Greedy Algorithms", "Divide & Conquer", "Complexity Analysis", "NP-Completeness"]
  },
  {
    title: "Data Structures",
    description: "Professional help with implementing and using data structures efficiently.",
    icon: "📊",
    topics: ["Arrays & Strings", "Linked Lists", "Stacks & Queues", "Trees & Graphs", "Hash Tables", "Heaps", "Tries", "Advanced Data Structures"]
  },
  {
    title: "Databases",
    description: "Expert assistance with database design, queries, and optimization.",
    icon: "🗄️",
    topics: ["SQL", "MySQL", "PostgreSQL", "MongoDB", "Database Design", "Query Optimization", "Transactions", "NoSQL"]
  },
  {
    title: "Networking",
    description: "Comprehensive help with computer networks, protocols, and security.",
    icon: "🌐",
    topics: ["TCP/IP", "HTTP/HTTPS", "DNS", "Network Security", "Socket Programming", "Routing", "Wireless Networks", "Cloud Networking"]
  },
  {
    title: "Operating Systems",
    description: "Professional assistance with OS concepts, processes, and memory management.",
    icon: "⚙️",
    topics: ["Process Management", "Threads & Concurrency", "Memory Management", "File Systems", "Scheduling", "Deadlocks", "Virtualization", "Distributed Systems"]
  },
  {
    title: "Software Engineering",
    description: "Expert help with software development methodologies and best practices.",
    icon: "📱",
    topics: ["Software Development Life Cycle", "Agile Methodologies", "Design Patterns", "UML", "Testing", "DevOps", "Version Control", "Software Architecture"]
  },
  {
    title: "Artificial Intelligence",
    description: "Comprehensive assistance with AI concepts and implementations.",
    icon: "🤖",
    topics: ["Search Algorithms", "Knowledge Representation", "Planning", "Natural Language Processing", "Computer Vision", "Expert Systems", "Robotics", "Reinforcement Learning"]
  },
  {
    title: "Machine Learning",
    description: "Professional help with ML algorithms, models, and applications.",
    icon: "📈",
    topics: ["Supervised Learning", "Unsupervised Learning", "Neural Networks", "Deep Learning", "TensorFlow", "PyTorch", "scikit-learn", "Model Evaluation"]
  },
  {
    title: "Computer Architecture",
    description: "Expert assistance with computer organization and architecture.",
    icon: "🔧",
    topics: ["Processor Design", "Memory Hierarchy", "Pipelining", "Parallel Processing", "Instruction Sets", "Cache Design", "I/O Systems", "Embedded Systems"]
  },
  {
    title: "Theory of Computation",
    description: "Comprehensive help with automata theory, computability, and complexity.",
    icon: "🔢",
    topics: ["Automata Theory", "Formal Languages", "Turing Machines", "Computability", "Complexity Classes", "P vs NP", "Reductions", "Computational Models"]
  },
  {
    title: "Compiler Design",
    description: "Professional assistance with compiler construction and optimization.",
    icon: "⚡",
    topics: ["Lexical Analysis", "Parsing", "Semantic Analysis", "Intermediate Code", "Optimization", "Code Generation", "Symbol Tables", "Runtime Environments"]
  },
  {
    title: "Computer Graphics",
    description: "Expert help with graphics programming and visualization.",
    icon: "🎨",
    topics: ["2D Graphics", "3D Graphics", "Rendering", "Ray Tracing", "OpenGL", "WebGL", "Animation", "Image Processing"]
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive assistance with security concepts and practices.",
    icon: "🔒",
    topics: ["Cryptography", "Network Security", "Application Security", "Authentication", "Authorization", "Security Protocols", "Penetration Testing", "Security Policies"]
  },
  {
    title: "Web Development",
    description: "Professional help with frontend and backend web development.",
    icon: "🌍",
    topics: ["HTML/CSS", "JavaScript", "React", "Node.js", "Express", "Django", "Flask", "REST APIs", "GraphQL", "Full Stack"]
  },
  {
    title: "Mobile Development",
    description: "Expert assistance with iOS and Android app development.",
    icon: "📱",
    topics: ["iOS (Swift)", "Android (Kotlin/Java)", "React Native", "Flutter", "Mobile UI/UX", "App Architecture", "Mobile APIs", "App Store Deployment"]
  }
]

// Programming languages data
const programmingLanguages = [
  { name: "Python", category: "General Purpose", icon: "🐍" },
  { name: "Java", category: "General Purpose", icon: "☕" },
  { name: "C++", category: "Systems Programming", icon: "⚙️" },
  { name: "JavaScript", category: "Web Development", icon: "📱" },
  { name: "TypeScript", category: "Web Development", icon: "🔷" },
  { name: "C#", category: "General Purpose", icon: "🎮" },
  { name: "Ruby", category: "Web Development", icon: "💎" },
  { name: "PHP", category: "Web Development", icon: "🐘" },
  { name: "Swift", category: "Mobile Development", icon: "🍎" },
  { name: "Kotlin", category: "Mobile Development", icon: "📱" },
  { name: "Go", category: "Systems Programming", icon: "🔷" },
  { name: "Rust", category: "Systems Programming", icon: "⚡" },
  { name: "R", category: "Data Science", icon: "📊" },
  { name: "MATLAB", category: "Scientific Computing", icon: "📈" },
  { name: "SQL", category: "Databases", icon: "🗄️" },
  { name: "Assembly", category: "Low-Level", icon: "⚙️" }
]

// Frameworks and libraries data
const frameworksData = [
  { category: "Frontend", items: ["React", "Angular", "Vue.js", "Next.js", "Svelte", "jQuery", "Bootstrap", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "Django", "Flask", "Spring Boot", "Ruby on Rails", "Laravel", "ASP.NET Core"] },
  { category: "Mobile", items: ["React Native", "Flutter", "SwiftUI", "Android Jetpack", "Xamarin", "Ionic"] },
  { category: "Database", items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis", "Firebase", "Oracle", "Cassandra"] },
  { category: "ML/AI", items: ["TensorFlow", "PyTorch", "scikit-learn", "Keras", "OpenCV", "NLTK", "spaCy", "Hugging Face"] },
  { category: "Cloud & DevOps", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform"] }
]

// Assignment types data
const assignmentTypes = [
  { name: "Programming Assignments", description: "Original, working code solutions with comprehensive documentation" },
  { name: "Algorithm Design", description: "Efficient algorithm design with complexity analysis and proofs" },
  { name: "Data Structure Implementation", description: "Implementation of data structures from scratch with testing" },
  { name: "Database Design & Queries", description: "Database schema design, complex SQL queries, and optimization" },
  { name: "Network Programming", description: "Socket programming, protocol implementation, and network applications" },
  { name: "Operating Systems Projects", description: "Process management, memory allocation, and file system implementations" },
  { name: "AI & ML Projects", description: "ML model development, neural networks, and AI algorithm implementation" },
  { name: "Web Applications", description: "Full-stack web applications with frontend and backend" },
  { name: "Mobile Apps", description: "iOS and Android applications with clean architecture" },
  { name: "Computer Graphics", description: "Graphics programming with OpenGL, WebGL, or Three.js" },
  { name: "Compiler Projects", description: "Lexical analyzers, parsers, and compiler components" },
  { name: "Theory Assignments", description: "Proofs, automata design, and complexity analysis" }
]

export default function ComputerScienceAssignmentWritingServicePage() {
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
                Computer Science <span className={styles.highlight}>Assignment Writing Service</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Need professional computer science assignment help? Our expert CS writers provide comprehensive assistance with programming, algorithms, data structures, databases, networking, AI, machine learning, and more. Each assignment features <strong>original, well-documented code</strong> and clear explanations following your specific requirements.
              </p>
              <div className={styles.heroCta}>
                <Link href="#pricing" className={styles.primaryButton}>
                  Explore CS Services
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Order Your CS Assignment
                </Link>
              </div>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>450+</span>
                  <span className={styles.statLabel}>CS Experts</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>98%</span>
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

        {/* Programming Languages Section */}
        <section className={styles.programmingLanguages}>
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
                  <span className={styles.languageCategory}>{lang.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CS Core Topics Section */}
        <section id="pricing" className={styles.csCoreTopics}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              All Computer Science Topics We Cover
            </h2>
            <p className={styles.sectionSubtitle}>
              From algorithms to AI — we have experts in every CS discipline
            </p>
            
            <div className={styles.csTopicsGrid}>
              {csCoreTopics.map((topic, index) => (
                <div key={index} className={styles.csTopicCard}>
                  <div className={styles.csTopicIcon}>{topic.icon}</div>
                  <h3 className={styles.csTopicTitle}>{topic.title}</h3>
                  <p className={styles.csTopicDescription}>{topic.description}</p>
                  <div className={styles.csTopicTags}>
                    {topic.topics.slice(0, 5).map((tag, i) => (
                      <span key={i} className={styles.topicTag}>{tag}</span>
                    ))}
                    {topic.topics.length > 5 && (
                      <span className={styles.topicTag}>+{topic.topics.length - 5} more</span>
                    )}
                  </div>
                  <Link href="/contact" className={styles.csTopicLink}>
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
              Types of CS Assignments We Write
            </h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive assistance for all your computer science needs
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
              Why Choose Our CS Assignment Service
            </h2>
            <p className={styles.sectionSubtitle}>
              We deliver excellence in every computer science assignment
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>💻</div>
                <h3 className={styles.featureTitle}>Qualified CS Professionals</h3>
                <p className={styles.featureDescription}>
                  Your assignment will be written by qualified computer scientists with degrees in CS, Software Engineering, or related fields. Many are professional software engineers with industry experience.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>✅</div>
                <h3 className={styles.featureTitle}>Working, Tested Code</h3>
                <p className={styles.featureDescription}>
                  All code is tested to ensure it runs correctly and meets specifications. We provide working solutions with input/output examples and test cases.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📝</div>
                <h3 className={styles.featureTitle}>Well-Documented Code</h3>
                <p className={styles.featureDescription}>
                  Code includes comprehensive comments and documentation. We also provide explanations of the approach, algorithm design, and implementation details.
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
                <div className={styles.featureIcon}>📊</div>
                <h3 className={styles.featureTitle}>Complexity Analysis</h3>
                <p className={styles.featureDescription}>
                  We provide thorough time and space complexity analysis for algorithms, helping you understand the efficiency of your solutions.
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
              Get your perfect computer science assignment in 4 simple steps
            </p>
            
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Submit Requirements</h3>
                <p className={styles.stepDescription}>
                  Fill out our order form with your programming language, problem statement, input/output specifications, and any specific requirements.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Get Matched with Expert</h3>
                <p className={styles.stepDescription}>
                  We match you with a qualified CS professional who specializes in your specific programming language and topic area.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Review & Revise</h3>
                <p className={styles.stepDescription}>
                  Receive your code with documentation, test it, and request any revisions. Unlimited free revisions until you're satisfied.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3 className={styles.stepTitle}>Submit with Confidence</h3>
                <p className={styles.stepDescription}>
                  Download your final, working code with documentation. Ready to submit and guaranteed to meet your requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why CS Section */}
        <section className={styles.whyCs}>
          <div className={styles.container}>
            <div className={styles.whyCsContent}>
              <h2 className={styles.sectionTitle}>
                Why Computer Science Students Trust Us
              </h2>
              <p className={styles.sectionSubtitle}>
                We understand the unique challenges of CS education
              </p>
              
              <div className={styles.whyCsGrid}>
                <div className={styles.whyCsItem}>
                  <div className={styles.whyCsIcon}>⏰</div>
                  <h3 className={styles.whyCsTitle}>Complex Problem Solving</h3>
                  <p className={styles.whyCsDescription}>
                    CS assignments involve complex problems. Our experts break down difficult concepts and provide clear, logical solutions that you can learn from.
                  </p>
                </div>
                
                <div className={styles.whyCsItem}>
                  <div className={styles.whyCsIcon}>🔧</div>
                  <h3 className={styles.whyCsTitle}>Debugging Help</h3>
                  <p className={styles.whyCsDescription}>
                    Stuck with bugs? We can identify and fix issues in your existing code, helping you learn from the debugging process.
                  </p>
                </div>
                
                <div className={styles.whyCsItem}>
                  <div className={styles.whyCsIcon}>📚</div>
                  <h3 className={styles.whyCsTitle}>Learning-Focused</h3>
                  <p className={styles.whyCsDescription}>
                    Our code includes detailed comments and explanations, helping you understand the concepts and learn from the solution.
                  </p>
                </div>
                
                <div className={styles.whyCsItem}>
                  <div className={styles.whyCsIcon}>🏆</div>
                  <h3 className={styles.whyCsTitle}>Best Practices</h3>
                  <p className={styles.whyCsDescription}>
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
              Everything you need to know about our computer science assignment service
            </p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What computer science topics do your experts cover?
                </h3>
                <p className={styles.faqAnswer}>
                  Our computer science experts cover all major areas including programming (Python, Java, C++, JavaScript), algorithms and data structures, databases (SQL, NoSQL), networking, operating systems, software engineering, artificial intelligence, machine learning, computer architecture, theory of computation, compiler design, computer graphics, cybersecurity, web development, mobile development, and all specialized CS fields.
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
                  Who writes my computer science assignment?
                </h3>
                <p className={styles.faqAnswer}>
                  Your computer science assignment will be written by a qualified professional with a degree in Computer Science, Software Engineering, or related field. Our experts include software engineers, developers, researchers, and academics with extensive industry and teaching experience.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you help with algorithm design and analysis?
                </h3>
                <p className={styles.faqAnswer}>
                  Absolutely! Our experts excel at algorithm design and analysis including time and space complexity, sorting and searching algorithms, graph algorithms, dynamic programming, greedy algorithms, divide and conquer, and NP-completeness. We provide efficient, optimized solutions with thorough complexity analysis.
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
                  Can you help with AI and machine learning projects?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we provide comprehensive AI and machine learning assistance including neural networks, deep learning, natural language processing, computer vision, reinforcement learning, and ML frameworks like TensorFlow, PyTorch, scikit-learn, and Keras.
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
                Ready to Ace Your CS Assignment?
              </h2>
              <p className={styles.ctaText}>
                Whether you need help with programming, algorithms, AI, or any other CS topic — our expert computer scientists are ready to assist. Get 100% original, working code with comprehensive documentation.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Order Your CS Assignment
                </Link>
                <Link href="#pricing" className={styles.ctaSecondary}>
                  View CS Topics
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