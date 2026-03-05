// src/app/coursework-help/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// SEO Metadata for Coursework Help Page
export const metadata: Metadata = {
  title: 'Coursework Writing Services | Online Coursework Help',
  description: 'Juggling multiple courses? Our online coursework help and coursework writing service ensures you never miss a deadline. We handle everything from weekly discussion posts and response papers to lab reports and presentations. Get consistent, high-quality work across all your classes while you focus on what matters most.',
  keywords: [
    'coursework writing services',
    'coursework help',
    'online coursework help',
    'coursework writing service',
    'discussion posts help',
    'response papers help',
    'lab reports help',
    'presentations help',
    'weekly assignments help',
    'online class help',
    'distance learning help',
    'online course assistance',
    'discussion board posts',
    'peer responses',
    'reflection papers',
    'short essays',
    'online quizzes help',
    'online exams help',
    'online homework help',
    'virtual class help',
    'asynchronous course help',
    'synchronous course help',
    'blackboard help',
    'canvas help',
    'moodle help',
    'online learning support'
  ],
  authors: [{ name: 'HelpWithMyAssignments Coursework Division' }],
  creator: 'HelpWithMyAssignments',
  publisher: 'HelpWithMyAssignments',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/coursework-help',
  },
  openGraph: {
    title: 'Coursework Writing Services | Online Coursework Help',
    description: '📚 Juggling multiple courses? Our online coursework help ensures you never miss a deadline. We handle discussion posts, response papers, lab reports, presentations & more across all your classes.',
    url: '/coursework-help',
    siteName: 'HelpWithMyAssignments',
    images: [
      {
        url: '/images/og-coursework-help.jpg',
        width: 1200,
        height: 630,
        alt: 'Coursework Writing Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coursework Writing Services',
    description: '📚 Online coursework help for all your classes. Never miss a deadline.',
    images: ['/images/twitter-coursework-help.jpg'],
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
  classification: 'Coursework Writing Services',
}

// Structured Data for Rich Results - Service Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://helpassignments.com/coursework-help",
  "name": "Coursework Writing Services",
  "description": "Juggling multiple courses? Our online coursework help and coursework writing service ensures you never miss a deadline. We handle everything from weekly discussion posts and response papers to lab reports and presentations. Get consistent, high-quality work across all your classes while you focus on what matters most.",
  "url": "https://helpassignments.com/coursework-help",
  "provider": {
    "@type": "Organization",
    "name": "HelpWithMyAssignments",
    "url": "https://helpassignments.com"
  },
  "serviceType": "Coursework Help",
  "areaServed": {
    "@type": "Country",
    "name": "Multiple Countries"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Coursework Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Discussion Posts Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Response Papers"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lab Reports"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Presentations"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Weekly Assignments"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Online Class Support"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "4125",
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
      "name": "Coursework Help",
      "item": "https://helpassignments.com/coursework-help"
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
      "name": "What types of coursework do you help with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We help with all types of coursework including weekly discussion posts, response papers, reflection papers, short essays, lab reports, presentations, online quizzes, online exams, homework assignments, journal entries, annotated bibliographies, case study analyses, and any other coursework assignments across all subjects and academic levels."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with weekly discussion posts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in discussion posts! We write thoughtful, engaging initial posts that demonstrate understanding of course materials, as well as meaningful peer responses that contribute to the discussion. We ensure posts meet word count requirements and include proper citations when needed."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help with online classes on platforms like Canvas or Blackboard?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We have experience with all major learning management systems including Canvas, Blackboard, Moodle, D2L Brightspace, and others. We can help with assignments, discussions, quizzes, and other coursework on any platform."
      }
    },
    {
      "@type": "Question",
      "name": "Can you handle multiple courses at once?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we regularly help students juggling multiple courses. We can coordinate across all your classes to ensure consistent, high-quality work delivered on time. Our project management approach keeps everything organized so you never miss a deadline."
      }
    },
    {
      "@type": "Question",
      "name": "Who writes my coursework?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your coursework will be written by qualified experts with advanced degrees in relevant subject areas. We match you with writers who have experience with your specific type of coursework and academic level, ensuring authentic, high-quality submissions."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help with timed online exams and quizzes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer assistance with online quizzes and exams. Please contact us to discuss the specific requirements and timing. We ensure all work is completed within your time constraints while maintaining academic integrity."
      }
    }
  ]
}

// Coursework types data
const courseworkTypes = [
  {
    title: "Discussion Posts",
    description: "Engaging initial posts and thoughtful peer responses that demonstrate understanding of course materials and contribute meaningfully to online discussions.",
    icon: "💬",
    features: ["Initial posts", "Peer responses", "Weekly discussions", "Critical thinking", "Proper citations"]
  },
  {
    title: "Response Papers",
    description: "Critical responses to readings, lectures, or videos that show engagement with course content and develop analytical thinking skills.",
    icon: "📝",
    features: ["Reading responses", "Video reflections", "Lecture summaries", "Critical analysis", "Personal connection"]
  },
  {
    title: "Lab Reports",
    description: "Comprehensive lab reports following standard scientific format with introduction, methods, results, discussion, and conclusion sections.",
    icon: "🔬",
    features: ["Scientific format", "Data analysis", "Graphs & tables", "Results interpretation", "APA/MLA formatting"]
  },
  {
    title: "Presentations",
    description: "Professional slide decks with speaker notes, visuals, and clear organization for both synchronous and asynchronous presentations.",
    icon: "📊",
    features: ["PowerPoint/Google Slides", "Speaker notes", "Visual aids", "Clear structure", "Engaging design"]
  },
  {
    title: "Reflection Papers",
    description: "Personal reflections on experiences, readings, or learning that demonstrate growth and critical self-awareness.",
    icon: "💭",
    features: ["Personal insight", "Learning application", "Growth demonstration", "Critical reflection", "Authentic voice"]
  },
  {
    title: "Short Essays",
    description: "Concise, well-structured essays on specific topics that demonstrate understanding and analytical skills within limited word counts.",
    icon: "📄",
    features: ["Focused argument", "Clear structure", "Proper citations", "Evidence-based", "Concise writing"]
  },
  {
    title: "Journal Entries",
    description: "Regular journal entries that track learning progress, reflect on course concepts, and document personal growth throughout the term.",
    icon: "📓",
    features: ["Weekly entries", "Learning tracking", "Concept application", "Personal voice", "Consistent format"]
  },
  {
    title: "Annotated Bibliographies",
    description: "Comprehensive lists of sources with summaries and evaluations that demonstrate research skills and source analysis.",
    icon: "📚",
    features: ["Source summaries", "Critical evaluation", "Proper citations", "Thematic organization", "Research foundation"]
  },
  {
    title: "Case Study Analyses",
    description: "In-depth analyses of cases that apply theoretical concepts to real-world situations and develop problem-solving skills.",
    icon: "🔍",
    features: ["Problem identification", "Theoretical application", "Solution development", "Evidence-based", "Critical analysis"]
  },
  {
    title: "Online Quizzes",
    description: "Timely assistance with online quizzes across various subjects, ensuring accuracy and understanding of course materials.",
    icon: "❓",
    features: ["Multiple choice", "Short answer", "Essay questions", "Timed completion", "Subject expertise"]
  },
  {
    title: "Homework Assignments",
    description: "Regular homework assignments including problem sets, worksheets, and exercises across all academic disciplines.",
    icon: "✏️",
    features: ["Problem solving", "Step-by-step solutions", "All subjects", "Clear explanations", "On-time delivery"]
  },
  {
    title: "Peer Responses",
    description: "Constructive, meaningful responses to classmates' posts that foster discussion and demonstrate engagement with peers.",
    icon: "👥",
    features: ["Constructive feedback", "Discussion advancement", "Peer engagement", "Critical thinking", "Respectful tone"]
  }
]

// Learning management systems data
const lmsPlatforms = [
  { name: "Canvas", icon: "🎨" },
  { name: "Blackboard", icon: "📋" },
  { name: "Moodle", icon: "🎓" },
  { name: "D2L Brightspace", icon: "✨" },
  { name: "Schoology", icon: "📱" },
  { name: "Google Classroom", icon: "📚" },
  { name: "Edmodo", icon: "👥" },
  { name: "Sakai", icon: "🌐" }
]

// Subject areas data
const subjectAreas = [
  { name: "Humanities", icon: "📚" },
  { name: "Social Sciences", icon: "👥" },
  { name: "Natural Sciences", icon: "🔬" },
  { name: "Mathematics", icon: "📐" },
  { name: "Business", icon: "💼" },
  { name: "Education", icon: "🎓" },
  { name: "Psychology", icon: "🧠" },
  { name: "History", icon: "🏛️" },
  { name: "Literature", icon: "📖" },
  { name: "Philosophy", icon: "🤔" },
  { name: "Political Science", icon: "🏛️" },
  { name: "Economics", icon: "📊" },
  { name: "Sociology", icon: "👥" },
  { name: "Anthropology", icon: "🌍" },
  { name: "Communication", icon: "💬" },
  { name: "Nursing", icon: "🏥" }
]

// Benefits data
const benefits = [
  {
    title: "Never Miss a Deadline",
    description: "With multiple courses, it's easy to lose track. We ensure every assignment is submitted on time, every time.",
    icon: "⏰"
  },
  {
    title: "Consistent Quality",
    description: "Get the same high-quality work across all your classes, maintaining your academic standards.",
    icon: "✨"
  },
  {
    title: "Subject Matter Experts",
    description: "Each course is matched with a writer who has expertise in that specific subject area.",
    icon: "🎯"
  },
  {
    title: "Flexible Support",
    description: "From weekly discussion posts to final projects, we handle coursework of all types and sizes.",
    icon: "🔄"
  }
]

export default function CourseworkHelpPage() {
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
                Coursework <span className={styles.highlight}>Writing Services</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Juggling multiple courses? Our online coursework help and coursework writing service ensures you <strong>never miss a deadline</strong>. We handle everything from weekly discussion posts and response papers to lab reports and presentations. Get consistent, high-quality work across all your classes while you focus on what matters most.
              </p>
              <div className={styles.heroCta}>
                <Link href="#pricing" className={styles.primaryButton}>
                  Explore Coursework Services
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Get Online Coursework Help
                </Link>
              </div>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>Coursework Experts</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>99%</span>
                  <span className={styles.statLabel}>On-Time Delivery</span>
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

        {/* Benefits Section */}
        <section className={styles.benefits}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Why Students Choose Our Coursework Help
            </h2>
            <p className={styles.sectionSubtitle}>
              The support you need to succeed across all your courses
            </p>
            
            <div className={styles.benefitsGrid}>
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>{benefit.icon}</div>
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subject Areas Section */}
        <section className={styles.subjectAreas}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Subjects We Cover
            </h2>
            <p className={styles.sectionSubtitle}>
              Coursework help across all academic disciplines
            </p>
            
            <div className={styles.subjectsGrid}>
              {subjectAreas.map((subject, index) => (
                <div key={index} className={styles.subjectCard}>
                  <div className={styles.subjectIcon}>{subject.icon}</div>
                  <h3 className={styles.subjectName}>{subject.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coursework Types Section */}
        <section id="pricing" className={styles.courseworkTypes}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Types of Coursework We Handle
            </h2>
            <p className={styles.sectionSubtitle}>
              From discussion posts to lab reports — we've got all your coursework covered
            </p>
            
            <div className={styles.courseworkTypesGrid}>
              {courseworkTypes.map((type, index) => (
                <div key={index} className={styles.courseworkTypeCard}>
                  <div className={styles.courseworkTypeIcon}>{type.icon}</div>
                  <h3 className={styles.courseworkTypeTitle}>{type.title}</h3>
                  <p className={styles.courseworkTypeDescription}>{type.description}</p>
                  <div className={styles.courseworkTypeFeatures}>
                    {type.features.map((feature, i) => (
                      <span key={i} className={styles.featureTag}>{feature}</span>
                    ))}
                  </div>
                  <Link href="/contact" className={styles.courseworkTypeLink}>
                    Get Help →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LMS Platforms Section */}
        <section className={styles.lmsPlatforms}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Learning Management Systems We Support
            </h2>
            <p className={styles.sectionSubtitle}>
              Experienced with all major online learning platforms
            </p>
            
            <div className={styles.lmsGrid}>
              {lmsPlatforms.map((platform, index) => (
                <div key={index} className={styles.lmsCard}>
                  <div className={styles.lmsIcon}>{platform.icon}</div>
                  <h3 className={styles.lmsName}>{platform.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Why Our Coursework Service Works
            </h2>
            <p className={styles.sectionSubtitle}>
              Designed specifically for students managing multiple courses
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📅</div>
                <h3 className={styles.featureTitle}>Deadline Management</h3>
                <p className={styles.featureDescription}>
                  We track all your deadlines across courses and ensure everything is submitted on time, even with overlapping due dates.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔄</div>
                <h3 className={styles.featureTitle}>Consistent Quality</h3>
                <p className={styles.featureDescription}>
                  Maintain consistent quality across all your assignments with our team of subject-specific experts who understand your academic level.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>💬</div>
                <h3 className={styles.featureTitle}>Discussion Post Experts</h3>
                <p className={styles.featureDescription}>
                  Our writers excel at creating engaging discussion posts and meaningful peer responses that demonstrate critical thinking and course engagement.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📊</div>
                <h3 className={styles.featureTitle}>Presentation Specialists</h3>
                <p className={styles.featureDescription}>
                  Get professional presentations with clear organization, engaging visuals, and comprehensive speaker notes for any topic.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔬</div>
                <h3 className={styles.featureTitle}>Lab Report Accuracy</h3>
                <p className={styles.featureDescription}>
                  Our science experts produce accurate lab reports with proper methodology, data analysis, and scientific discussion.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🌙</div>
                <h3 className={styles.featureTitle}>24/7 Availability</h3>
                <p className={styles.featureDescription}>
                  Our team is available around the clock to handle urgent assignments and answer your questions, day or night.
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
              Get consistent coursework help across all your classes in 4 simple steps
            </p>
            
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Share Your Courses</h3>
                <p className={styles.stepDescription}>
                  Tell us about all the courses you need help with, including syllabus, deadlines, and specific requirements for each.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Get Matched with Experts</h3>
                <p className={styles.stepDescription}>
                  We match you with qualified experts for each subject area who understand your coursework requirements.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Weekly Deliveries</h3>
                <p className={styles.stepDescription}>
                  Receive completed assignments before each deadline. We handle recurring weekly assignments so you never have to worry.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3 className={styles.stepTitle}>Focus on What Matters</h3>
                <p className={styles.stepDescription}>
                  With coursework handled, you can focus on exams, projects, internships, or simply maintaining balance in your life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              What Students Say
            </h2>
            <p className={styles.sectionSubtitle}>
              Success stories from students balancing multiple courses
            </p>
            
            <div className={styles.testimonialsGrid}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "I'm taking 5 courses this semester and was drowning in weekly discussion posts. This service handles all my discussion boards across different subjects. The posts are thoughtful and always get full credit. Total lifesaver!"
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Alex P.</div>
                  <div className={styles.authorUni}>Psychology Major, 5 Courses</div>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "Between work and family, I couldn't keep up with all my weekly assignments. Now I get consistent help with everything from lab reports to reflection papers. Never missed a deadline since I started."
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Jennifer L.</div>
                  <div className={styles.authorUni}>Nursing Student, Online Program</div>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>★★★★★</div>
                <p className={styles.testimonialText}>
                  "The discussion posts and peer responses sound like me - they match my writing style perfectly. My professors have no idea I'm getting help, and my grades have never been better."
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorName}>Marcus W.</div>
                  <div className={styles.authorUni}>Business Major, Full-Time Job</div>
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
              Everything you need to know about our coursework help service
            </p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What types of coursework do you help with?
                </h3>
                <p className={styles.faqAnswer}>
                  We help with all types of coursework including weekly discussion posts, response papers, reflection papers, short essays, lab reports, presentations, online quizzes, online exams, homework assignments, journal entries, annotated bibliographies, case study analyses, and any other coursework assignments across all subjects and academic levels.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you help with weekly discussion posts?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we specialize in discussion posts! We write thoughtful, engaging initial posts that demonstrate understanding of course materials, as well as meaningful peer responses that contribute to the discussion. We ensure posts meet word count requirements and include proper citations when needed.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you help with online classes on platforms like Canvas or Blackboard?
                </h3>
                <p className={styles.faqAnswer}>
                  Absolutely! We have experience with all major learning management systems including Canvas, Blackboard, Moodle, D2L Brightspace, and others. We can help with assignments, discussions, quizzes, and other coursework on any platform.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you handle multiple courses at once?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we regularly help students juggling multiple courses. We can coordinate across all your classes to ensure consistent, high-quality work delivered on time. Our project management approach keeps everything organized so you never miss a deadline.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Who writes my coursework?
                </h3>
                <p className={styles.faqAnswer}>
                  Your coursework will be written by qualified experts with advanced degrees in relevant subject areas. We match you with writers who have experience with your specific type of coursework and academic level, ensuring authentic, high-quality submissions.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you help with timed online exams and quizzes?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we offer assistance with online quizzes and exams. Please contact us to discuss the specific requirements and timing. We ensure all work is completed within your time constraints while maintaining academic integrity.
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
                Juggling Multiple Courses?
              </h2>
              <p className={styles.ctaText}>
                Don't let coursework deadlines overwhelm you. Get consistent, high-quality help across all your classes. From weekly discussion posts to lab reports, we ensure you never miss a deadline.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Get Online Coursework Help
                </Link>
                <Link href="#pricing" className={styles.ctaSecondary}>
                  View Coursework Types
                </Link>
              </div>
              <div className={styles.ctaTrust}>
                <span>Never Miss Deadlines</span>
                <span>Subject Matter Experts</span>
                <span>Consistent Quality</span>
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