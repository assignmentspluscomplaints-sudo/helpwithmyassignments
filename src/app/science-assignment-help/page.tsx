// src/app/science-assignment-help/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// SEO Metadata for Science Assignment Help Page
export const metadata: Metadata = {
  title: 'Science Assignment Help | Expert Science Assignment Writing Service',
  description: 'Need professional science assignment help? Our expert science writers provide comprehensive assistance with biology, chemistry, physics, environmental science, and more. 100% original, well-researched science assignments. Qualified scientists. 24/7 support.',
  keywords: [
    'science assignment help',
    'science homework help',
    'biology assignment help',
    'chemistry assignment help',
    'physics assignment help',
    'environmental science assignment help',
    'earth science assignment help',
    'astronomy assignment help',
    'science lab report help',
    'science research paper help',
    'science dissertation help',
    'biochemistry assignment help',
    'microbiology assignment help',
    'genetics assignment help',
    'cell biology assignment help',
    'organic chemistry assignment help',
    'inorganic chemistry assignment help',
    'physical chemistry assignment help',
    'quantum physics assignment help',
    'classical mechanics assignment help',
    'thermodynamics assignment help',
    'electromagnetism assignment help',
    'science case study help',
    'science literature review help'
  ],
  authors: [{ name: 'HelpWithMyAssignments Science Division' }],
  creator: 'HelpWithMyAssignments',
  publisher: 'HelpWithMyAssignments',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/science-assignment-help',
  },
  openGraph: {
    title: 'Science Assignment Help | Expert Science Assignment Writing Service',
    description: '🔬 Get expert science assignment help from qualified scientists. Biology, chemistry, physics, environmental science & more. 100% original research. Lab reports, research papers. 24/7 support.',
    url: '/science-assignment-help',
    siteName: 'HelpWithMyAssignments',
    images: [
      {
        url: '/images/og-science-assignment-help.jpg',
        width: 1200,
        height: 630,
        alt: 'Science Assignment Help',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Science Assignment Help',
    description: '🔬 Expert science assignment help. Get your perfect science assignment today!',
    images: ['/images/twitter-science-assignment-help.jpg'],
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
  classification: 'Science Academic Writing Services',
}

// Structured Data for Rich Results - Service Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://helpassignments.com/science-assignment-help",
  "name": "Science Assignment Help",
  "description": "Professional science assignment help from qualified scientists. Comprehensive assistance with biology, chemistry, physics, environmental science, and all scientific disciplines. Each assignment is crafted from scratch, follows your specific guidelines, and adheres to academic standards including APA, MLA, and scientific formatting.",
  "url": "https://helpassignments.com/science-assignment-help",
  "provider": {
    "@type": "Organization",
    "name": "HelpWithMyAssignments",
    "url": "https://helpassignments.com"
  },
  "serviceType": "Science Assignment Help",
  "areaServed": {
    "@type": "Country",
    "name": "Multiple Countries"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Science Assignment Types",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Biology Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Chemistry Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Physics Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Environmental Science Assignment Help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lab Report Writing Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Science Research Paper Help"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "3987",
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
      "name": "Science Assignment Help",
      "item": "https://helpassignments.com/science-assignment-help"
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
      "name": "What science subjects do your experts cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our science experts cover all major scientific disciplines including biology (molecular biology, cell biology, genetics, microbiology, ecology, zoology, botany), chemistry (organic, inorganic, physical, analytical, biochemistry), physics (classical mechanics, quantum physics, thermodynamics, electromagnetism, astrophysics), environmental science, earth science, astronomy, and all interdisciplinary science fields."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help with lab reports and scientific writing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in lab report writing following the standard scientific format (Introduction, Methods, Results, Discussion, Conclusion). We also help with research papers, literature reviews, scientific essays, and dissertations following APA, MLA, or scientific journal formatting."
      }
    },
    {
      "@type": "Question",
      "name": "Who writes my science assignment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your science assignment will be written by a qualified scientist with Bachelor's, Master's, or PhD degrees in their respective scientific fields. Our writers include researchers, lab scientists, and academics with extensive experience in scientific writing and research."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with data analysis and statistics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our experts provide comprehensive data analysis assistance including statistical tests (t-tests, ANOVA, chi-square, regression), graphical representation, and interpretation of results using software like SPSS, R, Python, and Excel."
      }
    },
    {
      "@type": "Question",
      "name": "Is my science assignment original and plagiarism-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every science assignment is crafted from scratch based on your specific requirements. We never resell or recycle papers. All work is checked with advanced plagiarism detection software, and we provide a free plagiarism report upon request. All scientific content is original and properly cited."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help with scientific diagrams and illustrations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we can include scientific diagrams, graphs, charts, and illustrations in your assignments. Our experts create clear, accurate visual representations of scientific concepts, data, and processes to enhance your assignment."
      }
    }
  ]
}

// Science categories data
const scienceCategories = [
  {
    title: "Biology",
    description: "Comprehensive assistance with all biology subdisciplines from molecular to ecosystem levels.",
    icon: "🧬",
    topics: ["Molecular Biology", "Cell Biology", "Genetics", "Microbiology", "Ecology", "Evolution", "Zoology", "Botany", "Anatomy", "Physiology"]
  },
  {
    title: "Chemistry",
    description: "Expert help with chemical principles, reactions, and laboratory techniques.",
    icon: "⚗️",
    topics: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Analytical Chemistry", "Biochemistry", "Polymer Chemistry", "Thermochemistry", "Quantum Chemistry", "Spectroscopy", "Chemical Kinetics"]
  },
  {
    title: "Physics",
    description: "Professional assistance with physical laws, theories, and mathematical applications.",
    icon: "⚛️",
    topics: ["Classical Mechanics", "Quantum Physics", "Thermodynamics", "Electromagnetism", "Optics", "Astrophysics", "Nuclear Physics", "Relativity", "Fluid Dynamics", "Solid State Physics"]
  },
  {
    title: "Environmental Science",
    description: "Comprehensive help with environmental systems, sustainability, and ecological issues.",
    icon: "🌍",
    topics: ["Ecology", "Climate Change", "Pollution", "Conservation", "Sustainability", "Environmental Policy", "Natural Resources", "Ecosystem Management", "Environmental Chemistry", "Renewable Energy"]
  },
  {
    title: "Earth Science",
    description: "Expert assistance with geology, meteorology, oceanography, and earth processes.",
    icon: "🌋",
    topics: ["Geology", "Meteorology", "Oceanography", "Mineralogy", "Paleontology", "Seismology", "Volcanology", "Hydrology", "Plate Tectonics", "Rock Cycle"]
  },
  {
    title: "Astronomy",
    description: "Professional help with celestial objects, space phenomena, and cosmological theories.",
    icon: "🌌",
    topics: ["Solar System", "Stars & Galaxies", "Cosmology", "Astrophysics", "Planetary Science", "Celestial Mechanics", "Telescopy", "Space Exploration", "Exoplanets", "Dark Matter"]
  },
  {
    title: "Biochemistry",
    description: "Comprehensive assistance with the chemical processes within living organisms.",
    icon: "🧪",
    topics: ["Enzymology", "Metabolism", "Protein Structure", "DNA Replication", "Gene Expression", "Bioenergetics", "Signal Transduction", "Membrane Biochemistry", "Molecular Genetics", "Proteomics"]
  },
  {
    title: "Microbiology",
    description: "Expert help with microorganisms and their effects on humans and the environment.",
    icon: "🔬",
    topics: ["Bacteriology", "Virology", "Mycology", "Parasitology", "Immunology", "Microbial Genetics", "Pathogenic Microbiology", "Food Microbiology", "Industrial Microbiology", "Antimicrobial Resistance"]
  },
  {
    title: "Neuroscience",
    description: "Professional assistance with the nervous system, brain function, and neural processes.",
    icon: "🧠",
    topics: ["Neuroanatomy", "Neurophysiology", "Cognitive Neuroscience", "Behavioral Neuroscience", "Neurochemistry", "Neural Development", "Sensory Systems", "Motor Control", "Neuroplasticity", "Neurological Disorders"]
  },
  {
    title: "Genetics",
    description: "Comprehensive help with genes, heredity, genetic variation, and genomic analysis.",
    icon: "🧬",
    topics: ["Mendelian Genetics", "Population Genetics", "Molecular Genetics", "Epigenetics", "Genomics", "Genetic Engineering", "CRISPR", "Gene Regulation", "Heredity", "Genetic Disorders"]
  },
  {
    title: "Organic Chemistry",
    description: "Expert assistance with carbon compounds, reaction mechanisms, and synthesis.",
    icon: "🧪",
    topics: ["Functional Groups", "Reaction Mechanisms", "Stereochemistry", "Organic Synthesis", "Spectroscopy", "Nomenclature", "Aromatic Compounds", "Carbonyl Chemistry", "Heterocycles", "Natural Products"]
  },
  {
    title: "Physical Chemistry",
    description: "Professional help with the physical principles underlying chemical systems.",
    icon: "📊",
    topics: ["Quantum Chemistry", "Thermodynamics", "Kinetics", "Statistical Mechanics", "Spectroscopy", "Electrochemistry", "Surface Chemistry", "Photochemistry", "Chemical Dynamics", "Molecular Modeling"]
  }
]

// Lab report sections data
const labReportSections = [
  { name: "Title & Abstract", description: "Clear, concise titles and comprehensive summaries of your experiment" },
  { name: "Introduction", description: "Background information, research questions, and hypotheses" },
  { name: "Materials & Methods", description: "Detailed procedures and materials used in the experiment" },
  { name: "Results", description: "Data presentation with tables, graphs, and statistical analysis" },
  { name: "Discussion", description: "Interpretation of results and comparison with theoretical expectations" },
  { name: "Conclusion", description: "Summary of findings and implications for future research" },
  { name: "References", description: "Properly formatted citations in APA, MLA, or scientific journal style" },
  { name: "Appendices", description: "Raw data, calculations, and additional documentation" }
]

// Scientific software data
const scientificSoftware = [
  { name: "SPSS", discipline: "Statistics" },
  { name: "R", discipline: "Statistical Computing" },
  { name: "Python", discipline: "Data Analysis" },
  { name: "MATLAB", discipline: "Numerical Computing" },
  { name: "GraphPad Prism", discipline: "Scientific Graphing" },
  { name: "ChemDraw", discipline: "Chemical Structures" },
  { name: "PyMOL", discipline: "Molecular Visualization" },
  { name: "ImageJ", discipline: "Image Analysis" },
  { name: "LabVIEW", discipline: "Laboratory Automation" },
  { name: "OriginPro", discipline: "Data Analysis & Graphing" },
  { name: "SigmaPlot", discipline: "Scientific Graphing" },
  { name: "Minitab", discipline: "Statistical Analysis" }
]

// Scientific writing styles data
const writingStyles = [
  { name: "APA 7th Edition", description: "American Psychological Association - standard for sciences" },
  { name: "MLA 9th Edition", description: "Modern Language Association - for scientific essays" },
  { name: "Chicago/Turabian", description: "Chicago Manual of Style - for scientific papers" },
  { name: "Harvard", description: "Harvard referencing - common in scientific journals" },
  { name: "Vancouver", description: "Vancouver style - for biomedical sciences" },
  { name: "ACS", description: "American Chemical Society - for chemistry" },
  { name: "AMA", description: "American Medical Association - for medical sciences" },
  { name: "CSE", description: "Council of Science Editors - for life sciences" }
]

export default function ScienceAssignmentHelpPage() {
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
                Science <span className={styles.highlight}>Assignment Help</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Need professional science assignment help? Our expert science writers provide comprehensive assistance with biology, chemistry, physics, environmental science, and more. Each assignment features accurate scientific content, proper methodology, and clear explanations following your specific requirements.
              </p>
              <div className={styles.heroCta}>
                <Link href="#pricing" className={styles.primaryButton}>
                  View Science Services
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  Order Your Science Assignment
                </Link>
              </div>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>400+</span>
                  <span className={styles.statLabel}>Science Experts</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>4.9/5</span>
                  <span className={styles.statLabel}>Student Rating</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>5200+</span>
                  <span className={styles.statLabel}>Science Assignments</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Science Disciplines Section */}
        <section className={styles.scienceDisciplines}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Major Science Disciplines We Cover
            </h2>
            <p className={styles.sectionSubtitle}>
              From biology to astronomy — we have experts in every scientific field
            </p>
            
            <div className={styles.disciplinesGrid}>
              {scienceCategories.slice(0, 6).map((category, index) => (
                <div key={index} className={styles.disciplineCard}>
                  <div className={styles.disciplineIcon}>{category.icon}</div>
                  <h3 className={styles.disciplineName}>{category.title}</h3>
                  <p className={styles.disciplineDescription}>{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Science Categories Section */}
        <section id="pricing" className={styles.scienceCategories}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              All Science Subjects We Cover
            </h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive assistance across all scientific disciplines
            </p>
            
            <div className={styles.scienceCategoriesGrid}>
              {scienceCategories.map((category, index) => (
                <div key={index} className={styles.scienceCategoryCard}>
                  <div className={styles.scienceCategoryIcon}>{category.icon}</div>
                  <h3 className={styles.scienceCategoryTitle}>{category.title}</h3>
                  <p className={styles.scienceCategoryDescription}>{category.description}</p>
                  <div className={styles.scienceCategoryTopics}>
                    {category.topics.slice(0, 5).map((topic, i) => (
                      <span key={i} className={styles.topicTag}>{topic}</span>
                    ))}
                    {category.topics.length > 5 && (
                      <span className={styles.topicTag}>+{category.topics.length - 5} more</span>
                    )}
                  </div>
                  <Link href="/contact" className={styles.scienceCategoryLink}>
                    Get Help →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lab Report Section */}
        <section className={styles.labReports}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Lab Report Writing Service
            </h2>
            <p className={styles.sectionSubtitle}>
              Complete lab reports following the standard scientific format
            </p>
            
            <div className={styles.labReportsGrid}>
              {labReportSections.map((section, index) => (
                <div key={index} className={styles.labReportCard}>
                  <h3 className={styles.labReportName}>{section.name}</h3>
                  <p className={styles.labReportDescription}>{section.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Writing Styles Section */}
        <section className={styles.writingStyles}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Scientific Writing Styles
            </h2>
            <p className={styles.sectionSubtitle}>
              We format your science assignments in your required style
            </p>
            
            <div className={styles.writingStylesGrid}>
              {writingStyles.map((style, index) => (
                <div key={index} className={styles.writingStyleCard}>
                  <h3 className={styles.writingStyleName}>{style.name}</h3>
                  <p className={styles.writingStyleDescription}>{style.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Why Choose Our Science Assignment Help
            </h2>
            <p className={styles.sectionSubtitle}>
              We deliver excellence in every science assignment, every time
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔬</div>
                <h3 className={styles.featureTitle}>Qualified Scientists</h3>
                <p className={styles.featureDescription}>
                  Your assignment will be written by qualified scientists with Bachelor's, Master's, or PhD degrees. Many are active researchers and lab scientists with extensive experience.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📊</div>
                <h3 className={styles.featureTitle}>Data Analysis Expertise</h3>
                <p className={styles.featureDescription}>
                  We provide comprehensive data analysis using SPSS, R, Python, and Excel. Statistical tests, graphical representation, and interpretation included.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📝</div>
                <h3 className={styles.featureTitle}>Proper Lab Report Format</h3>
                <p className={styles.featureDescription}>
                  All lab reports follow the standard IMRaD format (Introduction, Methods, Results, and Discussion) with proper scientific writing conventions.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📈</div>
                <h3 className={styles.featureTitle}>Accurate Calculations</h3>
                <p className={styles.featureDescription}>
                  All scientific calculations are double-checked for accuracy. We provide step-by-step solutions for physics, chemistry, and mathematics problems.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>✅</div>
                <h3 className={styles.featureTitle}>Plagiarism-Free Content</h3>
                <p className={styles.featureDescription}>
                  Every science assignment is crafted from scratch. All content is original and properly cited. Free plagiarism report available.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🎨</div>
                <h3 className={styles.featureTitle}>Scientific Diagrams</h3>
                <p className={styles.featureDescription}>
                  We include clear, accurate scientific diagrams, graphs, and illustrations to enhance your assignments and visualize complex concepts.
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
              Get your perfect science assignment in 4 simple steps
            </p>
            
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Submit Requirements</h3>
                <p className={styles.stepDescription}>
                  Fill out our order form with your science topic, specific questions, data sets, formatting style, and any special instructions.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Get Matched with Expert</h3>
                <p className={styles.stepDescription}>
                  We match you with a qualified scientist who specializes in your specific field and has experience with similar assignments.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Review & Revise</h3>
                <p className={styles.stepDescription}>
                  Receive your draft with all calculations and analysis. Review carefully and request any revisions. Unlimited free revisions until you're satisfied.
                </p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3 className={styles.stepTitle}>Submit with Confidence</h3>
                <p className={styles.stepDescription}>
                  Download your final, polished science assignment with all components. Ready to submit and guaranteed to meet your requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Science Section */}
        <section className={styles.whyScience}>
          <div className={styles.container}>
            <div className={styles.whyScienceContent}>
              <h2 className={styles.sectionTitle}>
                Why Science Students Trust Us
              </h2>
              <p className={styles.sectionSubtitle}>
                We understand the unique demands of science education
              </p>
              
              <div className={styles.whyScienceGrid}>
                <div className={styles.whyScienceItem}>
                  <div className={styles.whyScienceIcon}>🧪</div>
                  <h3 className={styles.whyScienceTitle}>Lab Report Expertise</h3>
                  <p className={styles.whyScienceDescription}>
                    We specialize in lab reports with proper methodology, data analysis, and scientific discussion. Your reports will meet all lab requirements.
                  </p>
                </div>
                
                <div className={styles.whyScienceItem}>
                  <div className={styles.whyScienceIcon}>📊</div>
                  <h3 className={styles.whyScienceTitle}>Statistical Analysis</h3>
                  <p className={styles.whyScienceDescription}>
                    Need help with statistics? Our experts handle t-tests, ANOVA, regression, and more with clear explanations of results.
                  </p>
                </div>
                
                <div className={styles.whyScienceItem}>
                  <div className={styles.whyScienceIcon}>📚</div>
                  <h3 className={styles.whyScienceTitle}>Literature Reviews</h3>
                  <p className={styles.whyScienceDescription}>
                    Comprehensive literature reviews of scientific papers, summarizing key findings and identifying research gaps.
                  </p>
                </div>
                
                <div className={styles.whyScienceItem}>
                  <div className={styles.whyScienceIcon}>🧮</div>
                  <h3 className={styles.whyScienceTitle}>Problem Solving</h3>
                  <p className={styles.whyScienceDescription}>
                    Step-by-step solutions to physics, chemistry, and mathematics problems with clear explanations of each step.
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
              Everything you need to know about our science assignment help service
            </p>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  What science subjects do your experts cover?
                </h3>
                <p className={styles.faqAnswer}>
                  Our science experts cover all major scientific disciplines including biology (molecular biology, cell biology, genetics, microbiology, ecology, zoology, botany), chemistry (organic, inorganic, physical, analytical, biochemistry), physics (classical mechanics, quantum physics, thermodynamics, electromagnetism, astrophysics), environmental science, earth science, astronomy, and all interdisciplinary science fields.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you help with lab reports and scientific writing?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we specialize in lab report writing following the standard scientific format (Introduction, Methods, Results, Discussion, Conclusion). We also help with research papers, literature reviews, scientific essays, and dissertations following APA, MLA, or scientific journal formatting.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Who writes my science assignment?
                </h3>
                <p className={styles.faqAnswer}>
                  Your science assignment will be written by a qualified scientist with Bachelor's, Master's, or PhD degrees in their respective scientific fields. Our writers include researchers, lab scientists, and academics with extensive experience in scientific writing and research.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Can you help with data analysis and statistics?
                </h3>
                <p className={styles.faqAnswer}>
                  Absolutely! Our experts provide comprehensive data analysis assistance including statistical tests (t-tests, ANOVA, chi-square, regression), graphical representation, and interpretation of results using software like SPSS, R, Python, and Excel.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Is my science assignment original and plagiarism-free?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, every science assignment is crafted from scratch based on your specific requirements. We never resell or recycle papers. All work is checked with advanced plagiarism detection software, and we provide a free plagiarism report upon request. All scientific content is original and properly cited.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  Do you help with scientific diagrams and illustrations?
                </h3>
                <p className={styles.faqAnswer}>
                  Yes, we can include scientific diagrams, graphs, charts, and illustrations in your assignments. Our experts create clear, accurate visual representations of scientific concepts, data, and processes to enhance your assignment.
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
                Ready to Ace Your Science Assignment?
              </h2>
              <p className={styles.ctaText}>
                Whether you need help with biology, chemistry, physics, or lab reports — our expert science writers are ready to assist. Get 100% original, well-researched science assignments with accurate calculations and clear explanations.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Order Your Science Assignment
                </Link>
                <Link href="#pricing" className={styles.ctaSecondary}>
                  View Science Subjects
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