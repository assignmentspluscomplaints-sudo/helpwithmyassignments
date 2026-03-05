// app/how-it-works/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./HowItWorks.module.css";

// Dynamic metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com';
  
  return {
    metadataBase: new URL(baseUrl),
    title: 'How Our Assignment Writing Service Works | 4 Simple Steps',
    description: '📚 See how our assignment writing service works in 4 easy steps. Get expert academic help in minutes. 5000+ PhD writers, 24/7 support, plagiarism-free guarantee.',
    keywords: [
      'how assignment writing service works',
      'assignment help process',
      'how to order assignment online',
      'assignment writing service steps',
      'online assignment help process',
      'academic writing service how it works',
      'order assignment help online',
      'assignment submission process',
      'get assignment help fast',
      'urgent assignment help process'
    ],
    openGraph: {
      title: 'How Our Assignment Writing Service Works | 4 Simple Steps',
      description: '📝 Get your assignments done in 4 easy steps. 1️⃣ Submit Requirements 2️⃣ Get Matched with Expert 3️⃣ Track Progress 4️⃣ Download & Succeed',
      url: '/how-it-works',
      siteName: 'Assignment Help Service',
      images: [
        {
          url: '/images/og/how-it-works.jpg',
          width: 1200,
          height: 630,
          alt: 'How Our Assignment Writing Service Works',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: '/how-it-works',
      languages: {
        'en-US': '/how-it-works',
        'en-GB': '/uk/how-it-works',
        'en-AU': '/au/how-it-works',
      },
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
  };
}

// Step-by-step process data
const processSteps = [
  {
    id: 1,
    title: "Submit Your Assignment Requirements",
    shortTitle: "Submit Requirements",
    description: "Fill out our simple order form with your assignment details - subject, topic, word count, deadline, and any specific instructions. The more details you provide, the better we can match you with the perfect expert.",
    details: [
      "Choose your academic level (High School to PhD)",
      "Select subject area and topic",
      "Specify word count and formatting style",
      "Upload any reference materials or rubrics",
      "Set your deadline (as tight as 3 hours!)",
      "Add special instructions for your writer"
    ],
    icon: "📝",
    color: "var(--lime)",
    timeRequired: "2-3 minutes",
    image: "/images/how-it-works/submit.jpg"
  },
  {
    id: 2,
    title: "Get Matched with a PhD Expert",
    shortTitle: "Get Matched",
    description: "Our AI-powered system instantly matches you with the most qualified writer for your subject. All our experts hold advanced degrees from top universities and have proven track records in your field.",
    details: [
      "Instant matching with subject-matter experts",
      "View writer qualifications and reviews",
      "Chat directly with your assigned writer",
      "Discuss requirements in real-time",
      "Share additional materials instantly",
      "24/7 availability for urgent orders"
    ],
    icon: "🎓",
    color: "var(--cyan)",
    timeRequired: "< 5 minutes",
    image: "/images/how-it-works/match.jpg"
  },
  {
    id: 3,
    title: "Track Progress & Communicate",
    shortTitle: "Track Progress",
    description: "Stay in the loop with real-time updates. Message your writer, request drafts, and monitor progress through our intuitive dashboard. Your satisfaction is our priority.",
    details: [
      "Real-time order tracking dashboard",
      "Direct messaging with your writer",
      "Request partial drafts if needed",
      "Receive milestone updates",
      "24/7 customer support assistance",
      "Unlimited revisions during process"
    ],
    icon: "📊",
    color: "var(--purple)",
    timeRequired: "Real-time updates",
    image: "/images/how-it-works/track.jpg"
  },
  {
    id: 4,
    title: "Review, Revise & Download",
    shortTitle: "Review & Download",
    description: "Receive your completed assignment before the deadline. Review the work, request any revisions (free for 14 days), and download your final paper when you're 100% satisfied.",
    details: [
      "Early delivery guaranteed",
      "Free Turnitin plagiarism report",
      "14-day free revision period",
      "Multiple format downloads (DOC, PDF)",
      "Quality check by our editors",
      "Money-back satisfaction guarantee"
    ],
    icon: "✅",
    color: "var(--orange)",
    timeRequired: "Before deadline",
    image: "/images/how-it-works/download.jpg"
  }
];

// Features that make the process unique
const uniqueFeatures = [
  {
    icon: "⚡",
    title: "3-Hour Delivery",
    description: "Urgent assignment? No problem. Our experts can deliver quality work in as little as 3 hours for short assignments."
  },
  {
    icon: "🤝",
    title: "Direct Expert Chat",
    description: "Unlike other services, you can chat directly with your writer throughout the process. No middlemen, no delays."
  },
  {
    icon: "🔄",
    title: "Free Revisions",
    description: "Not completely satisfied? We offer unlimited free revisions for 14 days after delivery. Your satisfaction is guaranteed."
  },
  {
    icon: "🔍",
    title: "Quality Assurance",
    description: "Every assignment passes through multiple quality checks: subject expert review, plagiarism scan, and editorial proofreading."
  }
];

// FAQ items specific to "how it works"
const processFaqs = [
  {
    q: "How quickly can you complete my assignment?",
    a: "We offer delivery in as little as 3 hours for urgent assignments (up to 1000 words). For longer assignments, typical turnaround times range from 6-24 hours depending on complexity and length. Our order form will show you available delivery options based on your specific requirements."
  },
  {
    q: "How do I know I'm getting a qualified writer?",
    a: "All our writers undergo rigorous vetting: they must hold advanced degrees (Master's or PhD) from accredited universities, pass subject-specific tests, and maintain a 4.9+ rating. You can view your assigned writer's qualifications, experience, and reviews before they start working on your assignment."
  },
  {
    q: "Can I communicate directly with my writer?",
    a: "Absolutely! Once matched, you get a private chat room with your writer. You can discuss requirements, share materials, ask for updates, and request revisions - all in real-time. This direct communication ensures your assignment meets your exact expectations."
  },
  {
    q: "What if I need to make changes after delivery?",
    a: "We offer unlimited free revisions for 14 days after delivery. Simply log into your dashboard, request revisions, and your writer will make the changes. If you're still not satisfied, we have a money-back guarantee in place."
  },
  {
    q: "How do I track my order progress?",
    a: "Your personal dashboard shows real-time updates: when your writer starts, progress milestones, estimated completion time, and chat activity. You'll also receive email notifications at key stages. It's like tracking a package, but for your assignment!"
  },
  {
    q: "Is my payment safe and secure?",
    a: "Yes, we use bank-level 256-bit SSL encryption for all transactions. Your payment is held securely and only released to the writer after you confirm satisfaction with the completed work. We accept all major credit cards, PayPal, and cryptocurrency."
  }
];

// Visual process timeline for sidebar/mobile
const timelineSteps = [
  { step: 1, label: "Submit", icon: "📝" },
  { step: 2, label: "Match", icon: "🎓" },
  { step: 3, label: "Track", icon: "📊" },
  { step: 4, label: "Download", icon: "✅" }
];

export default function HowItWorksPage() {
  // Structured data for the process
  const howItWorksSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Get Assignment Help Online",
    "description": "Step-by-step process to get expert assignment writing help from PhD qualified writers.",
    "totalTime": "PT15M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "AUD",
      "value": "16.50"
    },
    "step": processSteps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.description,
      "image": step.image,
      "url": `https://yourdomain.com/how-it-works#step-${step.id}`
    })),
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Online Order Form"
      },
      {
        "@type": "HowToTool",
        "name": "Live Chat System"
      },
      {
        "@type": "HowToTool",
        "name": "Order Tracking Dashboard"
      }
    ]
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": processFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="how-it-works-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howItWorksSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroPattern}></div>
          </div>
          
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>
                <span className={styles.badgeIcon}>✨</span>
                <span>Simple 4-Step Process</span>
              </div>
              
              <h1 className={styles.heroTitle}>
                How Our <span className={styles.highlight}>Assignment Writing</span> Service Works
              </h1>
              
              <p className={styles.heroDescription}>
                Get expert academic help in minutes, not hours. Follow our simple 4-step process 
                to receive a plagiarism-free, high-quality assignment from a PhD-qualified writer.
              </p>

              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>50K+</span>
                  <span className={styles.statLabel}>Assignments Delivered</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>4.9/5</span>
                  <span className={styles.statLabel}>Customer Rating</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>99%</span>
                  <span className={styles.statLabel}>On-Time Delivery</span>
                </div>
              </div>

              <div className={styles.heroCta}>
                <Link href="/contact" className={styles.primaryButton}>
                  Start Your Order Now
                  <span className={styles.buttonArrow}>→</span>
                </Link>
                <Link href="#process" className={styles.secondaryButton}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Floating Elements for Visual Interest */}
          <div className={styles.floatingElements}>
            <div className={styles.floatingElement} style={{ top: '20%', left: '5%' }}>📚</div>
            <div className={styles.floatingElement} style={{ top: '60%', left: '10%' }}>✍️</div>
            <div className={styles.floatingElement} style={{ top: '30%', right: '5%' }}>🎓</div>
            <div className={styles.floatingElement} style={{ bottom: '20%', right: '10%' }}>⭐</div>
          </div>
        </section>

        {/* Quick Timeline Navigation */}
        <div className={styles.timelineNav}>
          <div className={styles.container}>
            <div className={styles.timelineSteps}>
              {timelineSteps.map((step) => (
                <a href={`#step-${step.step}`} key={step.step} className={styles.timelineStep}>
                  <span className={styles.timelineIcon}>{step.icon}</span>
                  <span className={styles.timelineLabel}>{step.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main Process Section */}
        <section id="process" className={styles.process}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>The Process</span>
              <h2 className={styles.sectionTitle}>
                From Requirements to <span className={styles.textGradient}>A+ Grade</span>
              </h2>
              <p className={styles.sectionDescription}>
                We've streamlined the entire process to make getting academic help 
                as simple and stress-free as possible. Here's exactly what happens:
              </p>
            </div>

            <div className={styles.processSteps}>
              {processSteps.map((step, index) => (
                <div 
                  key={step.id} 
                  id={`step-${step.id}`}
                  className={`${styles.processStep} ${index % 2 === 0 ? styles.even : styles.odd}`}
                >
                  <div className={styles.stepContent}>
                    <div className={styles.stepHeader}>
                      <span className={styles.stepNumber}>Step {step.id}</span>
                      <span className={styles.stepTime} style={{ backgroundColor: `${step.color}15`, color: step.color }}>
                        ⏱️ {step.timeRequired}
                      </span>
                    </div>
                    
                    <div className={styles.stepIconWrapper} style={{ backgroundColor: `${step.color}10` }}>
                      <span className={styles.stepIcon}>{step.icon}</span>
                    </div>
                    
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                    
                    <div className={styles.stepDetails}>
                      <h4 className={styles.detailsTitle}>What happens in this step:</h4>
                      <ul className={styles.detailsList}>
                        {step.details.map((detail, i) => (
                          <li key={i} className={styles.detailItem}>
                            <span className={styles.detailCheck}>✓</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {step.id === 1 && (
                      <div className={styles.stepExample}>
                        <strong>Example:</strong> "I need a 2000-word nursing essay on 
                        patient care ethics, due in 24 hours, APA 7th edition."
                      </div>
                    )}
                    
                    {step.id === 4 && (
                      <div className={styles.guaranteeBadge}>
                        <span className={styles.guaranteeIcon}>🛡️</span>
                        <div>
                          <strong>100% Satisfaction Guarantee</strong>
                          <p>Free revisions or money back</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className={styles.stepVisual}>
                    <div className={styles.visualCard}>
                      {step.id === 1 && (
                        <div className={styles.orderFormMock}>
                          <div className={styles.mockHeader}>Assignment Details</div>
                          <div className={styles.mockRow}>
                            <span>Subject:</span>
                            <span className={styles.mockValue}>Nursing</span>
                          </div>
                          <div className={styles.mockRow}>
                            <span>Topic:</span>
                            <span className={styles.mockValue}>Patient Care Ethics</span>
                          </div>
                          <div className={styles.mockRow}>
                            <span>Words:</span>
                            <span className={styles.mockValue}>2000</span>
                          </div>
                          <div className={styles.mockRow}>
                            <span>Deadline:</span>
                            <span className={styles.mockValue}>24 hours</span>
                          </div>
                          <div className={styles.mockProgress}>
                            <div className={styles.mockProgressBar} style={{ width: '25%' }}></div>
                          </div>
                        </div>
                      )}
                      
                      {step.id === 2 && (
                        <div className={styles.expertMatchMock}>
                          <div className={styles.expertCard}>
                            <div className={styles.expertAvatar}>👩‍🎓</div>
                            <div>
                              <div className={styles.expertName}>Dr. Sarah Chen</div>
                              <div className={styles.expertTitle}>PhD in Nursing</div>
                              <div className={styles.expertRating}>★★★★★ 4.9</div>
                            </div>
                          </div>
                          <div className={styles.matchBadge}>✓ Best Match Found</div>
                        </div>
                      )}
                      
                      {step.id === 3 && (
                        <div className={styles.trackingMock}>
                          <div className={styles.trackingStep}>
                            <span className={styles.trackingDot} style={{ background: 'var(--lime)' }}></span>
                            <span>Research (100% complete)</span>
                          </div>
                          <div className={styles.trackingStep}>
                            <span className={styles.trackingDot} style={{ background: 'var(--lime)' }}></span>
                            <span>Writing (75% complete)</span>
                          </div>
                          <div className={styles.trackingStep}>
                            <span className={styles.trackingDot} style={{ background: 'var(--cyan)' }}></span>
                            <span>Review (50% complete)</span>
                          </div>
                          <div className={styles.chatMock}>
                            <span>💬 Writer: "Adding citations now..."</span>
                          </div>
                        </div>
                      )}
                      
                      {step.id === 4 && (
                        <div className={styles.deliveryMock}>
                          <div className={styles.deliveryIcon}>📄</div>
                          <div className={styles.deliveryTitle}>Your Assignment is Ready!</div>
                          <div className={styles.deliveryButtons}>
                            <span className={styles.downloadMock}>Download PDF</span>
                            <span className={styles.revisionMock}>Request Revision</span>
                          </div>
                          <div className={styles.plagiarismBadge}>✓ Turnitin Report Included</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Our Process Works */}
        <section className={styles.features}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Why It Works</span>
              <h2 className={styles.sectionTitle}>
                Built for <span className={styles.textGradient}>Student Success</span>
              </h2>
            </div>

            <div className={styles.featuresGrid}>
              {uniqueFeatures.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video/Visual Explanation */}
        <section className={styles.videoSection}>
          <div className={styles.container}>
            <div className={styles.videoCard}>
              <div className={styles.videoContent}>
                <h2 className={styles.videoTitle}>
                  See How Easy It Is to Get <span className={styles.highlight}>A+ Grades</span>
                </h2>
                <p className={styles.videoText}>
                  Watch this 2-minute demo to see exactly how our platform works. 
                  From submitting requirements to downloading your completed assignment.
                </p>
                <div className={styles.videoStats}>
                  <div>
                    <strong>50,000+</strong>
                    <span>Happy Students</span>
                  </div>
                  <div>
                    <strong>4.9/5</strong>
                    <span>Average Rating</span>
                  </div>
                  <div>
                    <strong>24/7</strong>
                    <span>Support Available</span>
                  </div>
                </div>
              </div>
              <div className={styles.videoPlaceholder}>
                <div className={styles.playButton}>
                  <span className={styles.playIcon}>▶</span>
                </div>
                <p className={styles.videoCaption}>Watch Demo (2:15)</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faq}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>FAQ</span>
              <h2 className={styles.sectionTitle}>
                Common Questions About <span className={styles.textGradient}>Our Process</span>
              </h2>
            </div>

            <div className={styles.faqGrid}>
              {processFaqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{faq.q}</h3>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <div className={styles.ctaCard}>
              <h2 className={styles.ctaTitle}>
                Ready to Get Started?
              </h2>
              <p className={styles.ctaText}>
                Join 50,000+ students who've already aced their assignments with us. 
                Get your free quote in under 2 minutes.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  Order Your Assignment Now
                  <span className={styles.ctaArrow}>→</span>
                </Link>
                <Link href="/pricing" className={styles.ctaSecondary}>
                  View Pricing
                </Link>
              </div>
              <div className={styles.ctaTrust}>
                <span>🔒 100% Secure</span>
                <span>⚡ Instant Matching</span>
                <span>🔄 Free Revisions</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}