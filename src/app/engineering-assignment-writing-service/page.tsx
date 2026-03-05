// src/app/engineering-assignment-help/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// SEO Metadata for Engineering Assignment Help Page
export const metadata: Metadata = {
  title: 'Engineering Assignment Help | Expert Engineering Assignment Writing Service',
  description: 'Need professional engineering assignment help? Our expert engineering writers provide comprehensive assistance with mechanical, civil, electrical, chemical, computer engineering, and more. 100% original, well-researched engineering assignments. Qualified engineers. 24/7 support.',
  keywords: [
    'engineering assignment help',
    'engineering homework help',
    'mechanical engineering assignment help',
    'civil engineering assignment help',
    'electrical engineering assignment help',
    'chemical engineering assignment help',
    'computer engineering assignment help',
    'software engineering assignment help',
    'aerospace engineering assignment help',
    'biomedical engineering assignment help',
    'environmental engineering assignment help',
    'industrial engineering assignment help',
    'materials engineering assignment help',
    'structural engineering assignment help',
    'geotechnical engineering assignment help',
    'transportation engineering assignment help',
    'fluid mechanics assignment help',
    'thermodynamics assignment help',
    'heat transfer assignment help',
    'strength of materials assignment help',
    'control systems assignment help',
    'signal processing assignment help',
    'engineering mathematics assignment help',
    'engineering design assignment help',
    'cad assignment help',
    'matlab assignment help'
  ],
  authors: [{ name: 'HelpWithMyAssignments Engineering Division' }],
  creator: 'HelpWithMyAssignments',
  publisher: 'HelpWithMyAssignments',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/engineering-assignment-help',
  },
  openGraph: {
    title: 'Engineering Assignment Help | Expert Engineering Assignment Writing Service',
    description: '🔧 Get expert engineering assignment help from qualified engineers. Mechanical, civil, electrical, chemical, computer engineering & more. 100% original solutions. 24/7 support.',
    url: '/engineering-assignment-help',
    siteName: 'HelpWithMyAssignments',
    images: [
      {
        url: '/images/og-engineering-assignment-help.jpg',
        width: 1200,
        height: 630,
        alt: 'Engineering Assignment Help',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Assignment Help',
    description: '🔧 Expert engineering assignment help. Get your perfect engineering assignment today!',
    images: ['/images/twitter-engineering-assignment-help.jpg'],
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
  classification: 'Engineering Academic Writing Services',
}

// Structured Data for Rich Results - Service Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://helpassignments.com/engineering-assignment-help",
  "name": "Engineering Assignment Help",
  "description": "Professional engineering assignment help from qualified engineers. Comprehensive assistance with mechanical, civil, electrical, chemical, computer engineering, and all engineering disciplines. Each assignment features accurate calculations, detailed solutions, and clear explanations following your specific requirements.",
  "url": "https://helpassignments.com/engineering-assignment-help",
  "provider": {
    "@type": "Organization",
    "name": "HelpWithMyAssignments",
    "url": "https://helpassignments.com"
  },
  "serviceType": "Engineering Assignment Help",
  "areaServed": {
    "@type": "Country",
    "name": "Multiple Countries"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Engineering Assignment Types",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mechanical Engineering Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Civil Engineering Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Electrical Engineering Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Chemical Engineering Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Computer Engineering Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Software Engineering Assignment Help"
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
      "name": "Engineering Assignment Help",
      "item": "https://helpassignments.com/engineering-assignment-help"
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
      "name": "What engineering disciplines do your experts cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our engineering experts cover all major disciplines including mechanical engineering, civil engineering, electrical engineering, chemical engineering, computer engineering, software engineering, aerospace engineering, biomedical engineering, environmental engineering, industrial engineering, materials engineering, structural engineering, geotechnical engineering, transportation engineering, and all specialized engineering fields."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide step-by-step solutions to engineering problems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every engineering assignment includes detailed step-by-step solutions with all calculations, formulas, and reasoning clearly explained. We show the complete problem-solving process, not just final answers, to help you understand the methodology."
      }
    },
    {
      "@type": "Question",
      "name": "Who writes my engineering assignment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your engineering assignment will be written by a qualified engineer with Bachelor's, Master's, or PhD degrees in their specific engineering discipline. Our writers include practicing engineers, researchers, and academics with extensive industry and teaching experience."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with CAD drawings and engineering design projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our experts provide comprehensive assistance with CAD drawings using software like AutoCAD, SolidWorks, CATIA, and Fusion 360. We also help with engineering design projects including conceptual design, detailed design, and design documentation."
      }
    },
    {
      "@type": "Question",
      "name": "Is my engineering assignment original and plagiarism-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every engineering assignment is crafted from scratch based on your specific requirements. We never resell or recycle papers. All work is checked with advanced plagiarism detection software, and we provide a free plagiarism report upon request. All calculations and solutions are original."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help with MATLAB, Simulink, and other engineering software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide comprehensive assistance with engineering software including MATLAB, Simulink, Python, C++, LabVIEW, ANSYS, COMSOL, AutoCAD, SolidWorks, and many others. We deliver working code and models with documentation."
      }
    }
  ]
}

// Engineering categories data
const engineeringCategories = [
  {
    title: "Mechanical Engineering",
    description: "Comprehensive assistance with mechanics, thermodynamics, fluid dynamics, heat transfer, and machine design.",
    icon: "⚙️",
    topics: ["Thermodynamics", "Fluid Mechanics", "Heat Transfer", "Machine Design", "Solid Mechanics", "Dynamics", "Kinematics", "Manufacturing Processes", "Material Science", "CAD/CAM"]
  },
  {
    title: "Civil Engineering",
    description: "Expert help with structural analysis, geotechnical engineering, transportation, and construction management.",
    icon: "🏗️",
    topics: ["Structural Analysis", "Structural Design", "Geotechnical Engineering", "Transportation Engineering", "Construction Management", "Fluid Mechanics", "Environmental Engineering", "Surveying", "Concrete Technology", "Steel Design"]
  },
  {
    title: "Electrical Engineering",
    description: "Professional assistance with circuits, power systems, electronics, control systems, and signal processing.",
    icon: "⚡",
    topics: ["Circuit Analysis", "Power Systems", "Electronics", "Control Systems", "Signal Processing", "Electromagnetics", "Digital Logic", "Microprocessors", "Power Electronics", "Renewable Energy Systems"]
  },
  {
    title: "Chemical Engineering",
    description: "Comprehensive help with thermodynamics, transport phenomena, reaction engineering, and process design.",
    icon: "🧪",
    topics: ["Chemical Thermodynamics", "Transport Phenomena", "Reaction Engineering", "Process Design", "Mass Transfer", "Heat Transfer", "Fluid Mechanics", "Separation Processes", "Process Control", "Biochemical Engineering"]
  },
  {
    title: "Computer Engineering",
    description: "Expert assistance with computer architecture, embedded systems, digital design, and hardware-software integration.",
    icon: "💻",
    topics: ["Computer Architecture", "Embedded Systems", "Digital Design", "Microcontrollers", "FPGA", "VLSI Design", "Computer Networks", "Operating Systems", "Hardware-Software Integration", "IoT"]
  },
  {
    title: "Software Engineering",
    description: "Professional help with software development, algorithms, data structures, and software design patterns.",
    icon: "📱",
    topics: ["Software Development", "Algorithms", "Data Structures", "Design Patterns", "Software Architecture", "Testing", "Agile Methodologies", "DevOps", "Database Systems", "Web Development"]
  },
  {
    title: "Aerospace Engineering",
    description: "Comprehensive assistance with aerodynamics, propulsion, flight mechanics, and aerospace structures.",
    icon: "✈️",
    topics: ["Aerodynamics", "Propulsion", "Flight Mechanics", "Aerospace Structures", "Orbital Mechanics", "Spacecraft Design", "Aircraft Design", "Computational Fluid Dynamics", "Composite Materials", "Avionics"]
  },
  {
    title: "Biomedical Engineering",
    description: "Expert help with biomechanics, medical devices, biomaterials, and biomedical signal processing.",
    icon: "🫀",
    topics: ["Biomechanics", "Medical Devices", "Biomaterials", "Biomedical Signal Processing", "Medical Imaging", "Tissue Engineering", "Rehabilitation Engineering", "Neural Engineering", "Clinical Engineering", "Bioinstrumentation"]
  },
  {
    title: "Environmental Engineering",
    description: "Professional assistance with water treatment, air pollution control, waste management, and environmental modeling.",
    icon: "🌍",
    topics: ["Water Treatment", "Air Pollution Control", "Waste Management", "Environmental Modeling", "Sustainable Design", "Environmental Impact Assessment", "Water Resources", "Environmental Chemistry", "Renewable Energy", "Climate Change"]
  },
  {
    title: "Industrial Engineering",
    description: "Comprehensive help with operations research, supply chain management, quality control, and manufacturing systems.",
    icon: "🏭",
    topics: ["Operations Research", "Supply Chain Management", "Quality Control", "Manufacturing Systems", "Production Planning", "Facility Layout", "Ergonomics", "Simulation", "Six Sigma", "Lean Manufacturing"]
  },
  {
    title: "Materials Engineering",
    description: "Expert assistance with material properties, characterization, processing, and selection.",
    icon: "🔬",
    topics: ["Material Properties", "Material Characterization", "Material Processing", "Material Selection", "Metallurgy", "Polymers", "Ceramics", "Composites", "Nanomaterials", "Failure Analysis"]
  },
  {
    title: "Structural Engineering",
    description: "Professional help with structural analysis, design of steel and concrete structures, and earthquake engineering.",
    icon: "🏛️",
    topics: ["Structural Analysis", "Steel Design", "Concrete Design", "Earthquake Engineering", "Bridge Engineering", "Finite Element Analysis", "Structural Dynamics", "Wind Engineering", "Foundation Design", "Retrofitting"]
  }
]

// Core engineering topics data
const coreTopics = [
  { name: "Engineering Mathematics", icon: "📐" },
  { name: "Engineering Mechanics", icon: "⚖️" },
  { name: "Fluid Mechanics", icon: "💧" },
  { name: "Thermodynamics", icon: "🔥" },
  { name: "Heat Transfer", icon: "🌡️" },
  { name: "Strength of Materials", icon: "🔧" },
  { name: "Electrical Circuits", icon: "⚡" },
  { name: "Electronics", icon: "📻" },
  { name: "Control Systems", icon: "🎛️" },
  { name: "Signal Processing", icon: "📊" },
  { name: "Engineering Drawing", icon: "📏" },
  { name: "CAD/CAM", icon: "💻" }
]

// Engineering software data
const engineeringSoftware = [
  { name: "MATLAB", category: "Numerical Computing" },
  { name: "Simulink", category: "Modeling & Simulation" },
  { name: "Python", category: "Programming" },
  { name: "C++", category: "Programming" },
  { name: "AutoCAD", category: "CAD" },
  { name: "SolidWorks", category: "CAD" },
  { name: "CATIA", category: "CAD" },
  { name: "ANSYS", category: "FEA/CFD" },
  { name: "COMSOL", category: "Multiphysics" },
  { name: "LabVIEW", category: "Instrumentation" },
  { name: "Proteus", category: "Electronics" },
  { name: "Multisim", category: "Electronics" },
  { name: "PSpice", category: "Circuit Simulation" },
  { name: "ETAP", category: "Power Systems" },
  { name: "STAAD.Pro", category: "Structural Analysis" },
  { name: "SAP2000", category: "Structural Analysis" },
  { name: "Revit", category: "BIM" },
  { name: "Primavera", category: "Project Management" },
  { name: "MS Project", category: "Project Management" },
  { name: "Aspen Plus", category: "Process Simulation" }
]

// Assignment types data
const assignmentTypes = [
  { name: "Problem Sets", description: "Detailed step-by-step solutions to engineering problems with all calculations and reasoning" },
  { name: "Design Projects", description: "Comprehensive engineering design projects with specifications, calculations, and drawings" },
  { name: "Lab Reports", description: "Professional lab reports with methodology, data analysis, results, and conclusions" },
  { name: "Research Papers", description: "Scholarly research papers on engineering topics with literature review and analysis" },
  { name: "CAD Drawings", description: "Technical drawings and 3D models using AutoCAD, SolidWorks, CATIA, and other CAD software" },
  { name: "Simulation Projects", description: "Computer simulations using MATLAB, Simulink, ANSYS, COMSOL, and other simulation tools" },
  { name: "Programming Assignments", description: "Code development for engineering applications in Python, C++, MATLAB, and other languages" },
  { name: "Case Studies", description: "Analysis of engineering case studies with problem identification and solutions" },
  { name: "Literature Reviews", description: "Comprehensive reviews of engineering literature on specific topics" },
  { name: "Theses & Dissertations", description: "Extended research projects for engineering degrees" },
  { name: "Capstone Projects", description: "Comprehensive projects synthesizing engineering knowledge and practice" },
  { name: "Technical Reports", description: "Professional technical reports with specifications, analysis, and recommendations" }
]

export default function EngineeringAssignmentHelpPage() {
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
                Engineering <span className={styles.highlight}>Assignment Help</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Need professional engineering assignment help? Our expert engineering writers provide comprehensive assistance with mechanical, civil, electrical, chemical, computer engineering, and more. Each assignment features accurate calculations, detailed step-by-step solutions, and clear explanations following your specific requirements.
              </p>
              <div className={styles.heroCta}>
                <Link href="#pricing" className={styles.primaryButton}>
                  View Engineering Services
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Order Your Engineering Assignment
                </Link>
              </div>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>450+</span>
                  <span className={styles.statLabel}>Engineering Experts</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>4.9/5</span>
                  <span className={styles.statLabel}>Student Rating</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>6700+</span>
                  <span className={styles.statLabel}>Engineering Assignments</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Topics Section */}
        <section className={styles.coreTopics}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Core Engineering Topics We Cover
            </h2>
            <p className={styles.sectionSubtitle}>
              Fundamental concepts across all engineering disciplines
            </p>
            
            <div className={styles.coreTopicsGrid}>
              {coreTopics.map((topic, index) => (
                <div key={index} className={styles.coreTopicCard}>
                  <div className={styles.coreTopicIcon}>{topic.icon}</div>
                  <h3 className={styles.coreTopicName}>{topic.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering Categories Section */}
        <section id="pricing" className={styles.engineeringCategories}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              All Engineering Disciplines We Cover
            </h2>
            <p className={styles.sectionSubtitle}>
              From mechanical to biomedical — we have experts in every engineering field
            </p>
            
            <div className={styles.engineeringCategoriesGrid}>
              {engineeringCategories.map((category, index) => (
                <div key={index} className={styles.engineeringCategoryCard}>
                  <div className={styles.engineeringCategoryIcon}>{category.icon}</div>
                  <h3 className={styles.engineeringCategoryTitle}>{category.title}</h3>
                  <p className={styles.engineeringCategoryDescription}>{category.description}</p>
                  <div className={styles.engineeringCategoryTopics}>
                    {category.topics.slice(0, 5).map((topic, i) => (
                      <span key={i} className={styles.topicTag}>{topic}</span>
                    ))}
                    {category.topics.length > 5 && (
                      <span className={styles.topicTag}>+{category.topics.length - 5} more</span>
                    )}
                  </div>
                  <Link href="/contact" className={styles.engineeringCategoryLink}>
                    Get Help →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering Software Section */}
        <section className={styles.engineeringSoftware}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Engineering Software & Tools
            </h2>
            <p className={styles.sectionSubtitle}>
              Our experts are proficient in industry-standard engineering software
            </p>
            
            <div className={styles.softwareGrid}>
              {engineeringSoftware.map((software, index) => (
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
              Types of Engineering Assignments We Write
            </h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive assistance for all your engineering academic needs
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
              Why Choose Our Engineering Assignment Help
            </h2>
            <p className={styles.sectionSubtitle}>
              We deliver excellence in every engineering assignment, every time
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔧</div>
                <h3 className={styles.featureTitle}>Qualified Engineers</h3>
                <p className={styles.featureDescription}>
                  Your assignment will be written by qualified engineers with Bachelor's, Master's, or PhD degrees in their specific engineering discipline. Many are practicing engineers with industry experience.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📐</div>
                <h3 className={styles.featureTitle}>Step-by-Step Solutions</h3>
                <p className={styles.featureDescription}>
                  Every engineering problem includes detailed step-by-step solutions with all calculations, formulas, and reasoning clearly explained. You'll understand the complete problem-solving process.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📊</div>
                <h3 className={styles.featureTitle}>Accurate Calculations</h3>
                <p className={styles.featureDescription}>
                  All calculations are double-checked for accuracy. We follow proper engineering notation, units, and significant figures. Results are verified using multiple methods when appropriate.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>💻</div>
                <h3 className={styles.featureTitle}>Software Expertise</h3>
                <p className={styles.featureDescription}>
                  Our experts are proficient in MATLAB, Python, C++, AutoCAD, SolidWorks, ANSYS, and many other engineering software tools. We deliver working code and models with documentation.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📏</div>
                <h3 className={styles.featureTitle}>CAD & Design</h3>
                <p className={styles.featureDescription}>
                  We provide comprehensive CAD drawings and 3D models using industry-standard software. All drawings follow proper dimensioning, tolerancing, and engineering standards.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>✅</div>
                <h3 className={styles.featureTitle}>Plagiarism-Free Work</h3>
                <p className={styles.featureDescription}>
                  Every engineering assignment is crafted from scratch based on your requirements. All calculations, solutions, and text are original. Free plagiarism report available.
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
              Get your perfect engineering assignment in 4 simple steps
            </p>
            
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Submit Requirements</h3>
                <p className={styles.stepDescription}>
                  Fill out our order form with your engineering discipline, specific problems, required software, formatting style, and any special instructions.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Get Matched with Expert</h3>
                <p className={styles.stepDescription}>
                  We match you with a qualified engineer who specializes in your specific discipline and has experience with similar assignments.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Review & Revise</h3>
                <p className={styles.stepDescription}>
                  Receive your draft with all calculations and solutions. Review carefully and request any revisions. Unlimited free revisions until you're satisfied.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3 className={styles.stepTitle}>Submit with Confidence</h3>
                <p className={styles.stepDescription}>
                  Download your final, polished engineering assignment with all components. Ready to submit and guaranteed to meet your requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Engineering Section */}
        <section className={styles.whyEngineering}>
          <div className={styles.container}>
            <div className={styles.whyEngineeringContent}>
              <h2 className={styles.sectionTitle}>
                Why Engineering Students Trust Us
              </h2>
              <p className={styles.sectionSubtitle}>
                We understand the unique demands of engineering education
              </p>
              
              <div className={styles.whyEngineeringGrid}>
                <div className={styles.whyEngineeringItem}>
                  <div className={styles.whyEngineeringIcon}>⚙️</div>
                  <h3 className={styles.whyEngineeringTitle}>Complex Problem Solving</h3>
                  <p className={styles.whyEngineeringDescription}>
                    Engineering assignments involve complex problems. Our experts break down difficult concepts and provide clear, logical solutions that you can learn from.
                  </p>
                </div>
                
                <div className={styles.whyEngineeringItem}>
                  <div className={styles.whyEngineeringIcon}>📐</div>
                  <h3 className={styles.whyEngineeringTitle}>Practical Applications</h3>
                  <p className={styles.whyEngineeringDescription}>
                    We connect engineering theory to practical applications, helping you understand how concepts are used in real-world engineering projects.
                  </p>
                </div>
                
                <div className={styles.whyEngineeringItem}>
                  <div className={styles.whyEngineeringIcon}>📊</div>
                  <h3 className={styles.whyEngineeringTitle}>Industry Standards</h3>
                  <p className={styles.whyEngineeringDescription}>
                    Our solutions follow industry standards, codes, and best practices, preparing you for professional engineering practice.
                  </p>
                </div>
                
                <div className={styles.whyEngineeringItem}>
                  <div className={styles.whyEngineeringIcon}>💡</div>
                  <h3 className={styles.whyEngineeringTitle}>Conceptual Understanding</h3>
                  <p className={styles.whyEngineeringDescription}>
                    Beyond just solving problems, we focus on building conceptual understanding so you can apply principles to new situations.
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
              Everything you need to know about our engineering assignment help service
            </p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What engineering disciplines do your experts cover?
                </h3>
                <p className={styles.faqAnswer}>
                  Our engineering experts cover all major disciplines including mechanical engineering, civil engineering, electrical engineering, chemical engineering, computer engineering, software engineering, aerospace engineering, biomedical engineering, environmental engineering, industrial engineering, materials engineering, structural engineering, geotechnical engineering, transportation engineering, and all specialized engineering fields.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you provide step-by-step solutions to engineering problems?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, every engineering assignment includes detailed step-by-step solutions with all calculations, formulas, and reasoning clearly explained. We show the complete problem-solving process, not just final answers, to help you understand the methodology.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Who writes my engineering assignment?
                </h3>
                <p className={styles.faqAnswer}>
                  Your engineering assignment will be written by a qualified engineer with Bachelor's, Master's, or PhD degrees in their specific engineering discipline. Our writers include practicing engineers, researchers, and academics with extensive industry and teaching experience.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you help with CAD drawings and engineering design projects?
                </h3>
                <p className={styles.faqAnswer}>
                  Absolutely! Our experts provide comprehensive assistance with CAD drawings using software like AutoCAD, SolidWorks, CATIA, and Fusion 360. We also help with engineering design projects including conceptual design, detailed design, and design documentation.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Is my engineering assignment original and plagiarism-free?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, every engineering assignment is crafted from scratch based on your specific requirements. We never resell or recycle papers. All work is checked with advanced plagiarism detection software, and we provide a free plagiarism report upon request. All calculations and solutions are original.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you help with MATLAB, Simulink, and other engineering software?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we provide comprehensive assistance with engineering software including MATLAB, Simulink, Python, C++, LabVIEW, ANSYS, COMSOL, AutoCAD, SolidWorks, and many others. We deliver working code and models with documentation.
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
                Ready to Ace Your Engineering Assignment?
              </h2>
              <p className={styles.ctaText}>
                Whether you need help with mechanical, civil, electrical, or any other engineering discipline — our expert engineers are ready to assist. Get 100% original solutions with detailed step-by-step calculations.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Order Your Engineering Assignment
                </Link>
                <Link href="#pricing" className={styles.ctaSecondary}>
                  View Engineering Disciplines
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