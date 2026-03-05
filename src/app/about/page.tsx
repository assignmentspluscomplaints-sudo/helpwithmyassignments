import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Icons as simple components (you can replace with your preferred icon library)
const AwardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 15L8 21L12 18L16 21L12 15Z" />
    <circle cx="12" cy="8" r="6" stroke="currentColor" fill="none" />
  </svg>
);

const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="9" cy="8" r="4" stroke="currentColor" />
    <circle cx="15" cy="8" r="4" stroke="currentColor" />
    <path d="M5 18v2M19 18v2M3 18h18v-2a7 7 0 0 0-14 0v2" stroke="currentColor" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" stroke="currentColor" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" />
  </svg>
);

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" stroke="currentColor" />
    <path d="M12 6v6l4 2" stroke="currentColor" />
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M20 6L9 17L4 12" stroke="currentColor" />
  </svg>
);

const QuoteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M10 11h-4v-4h4v4zM18 11h-4v-4h4v4z" />
    <path d="M6 15v3h4v-3M14 15v3h4v-3" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function AboutPage() {
  return (
    <main className={styles.main}>
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.aboutHero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={`${styles.badge} ${styles.badgeGold}`}>Our Story</span>
            <h1 className={styles.heroTitle}>
              Global Academic Excellence, <span className="text-gradient">Local Understanding</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Since 2015, HelpWithMyAssignments has helped over 100,000 students across the United States, 
              United Kingdom, Canada, Australia, and New Zealand achieve their academic goals. 
              We're not just a writing service—we're your academic partner.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>100K+</span>
                <span className={styles.heroStatLabel}>Students Helped</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>5K+</span>
                <span className={styles.heroStatLabel}>PhD Experts</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>4.9/5</span>
                <span className={styles.heroStatLabel}>Trustpilot Score</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>5</span>
                <span className={styles.heroStatLabel}>Countries</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroBg}>
          <div className={`${styles.heroOrb} ${styles.heroOrb1}`}></div>
          <div className={`${styles.heroOrb} ${styles.heroOrb2}`}></div>
          <div className={`${styles.heroOrb} ${styles.heroOrb3}`}></div>
        </div>
      </section>

      {/* Our Mission */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.missionGrid}>
            <div className={styles.missionContent}>
              <span className={styles.badge}>Our Mission</span>
              <h2 className={styles.sectionTitle}>Empowering Students Worldwide</h2>
              <p className={styles.missionText}>
                We believe every student deserves access to expert academic guidance, regardless of 
                their location, background, or the time on the clock. Our mission is to bridge the gap 
                between struggling students and academic excellence through personalized, high-quality 
                writing assistance that respects each country's unique educational standards.
              </p>
              <div className={styles.missionFeatures}>
                <div className={styles.missionFeature}>
                  <span className={styles.missionFeatureIcon}>
                    <CheckIcon />
                  </span>
                  <span>Country-specific academic standards (APA, MLA, Harvard, AGLC, OSCOLA, Bluebook)</span>
                </div>
                <div className={styles.missionFeature}>
                  <span className={styles.missionFeatureIcon}>
                    <CheckIcon />
                  </span>
                  <span>Native English writers in each region</span>
                </div>
                <div className={styles.missionFeature}>
                  <span className={styles.missionFeatureIcon}>
                    <CheckIcon />
                  </span>
                  <span>24/7 support in every time zone</span>
                </div>
                <div className={styles.missionFeature}>
                  <span className={styles.missionFeatureIcon}>
                    <CheckIcon />
                  </span>
                  <span>100% plagiarism-free guarantee with Turnitin reports</span>
                </div>
              </div>
            </div>
            <div className={styles.missionVisual}>
              <div className={styles.missionCard}>
                <div className={styles.missionCardHeader}>
                  <span className={styles.missionCardFlag}>🌍</span>
                  <span className={styles.missionCardTitle}>Global Reach, Local Expertise</span>
                </div>
                <div className={styles.missionCardGrid}>
                  <div className={styles.missionCountry}>
                    <span className={styles.countryFlag}>🇺🇸</span>
                    <span className={styles.countryName}>USA</span>
                  </div>
                  <div className={styles.missionCountry}>
                    <span className={styles.countryFlag}>🇬🇧</span>
                    <span className={styles.countryName}>UK</span>
                  </div>
                  <div className={styles.missionCountry}>
                    <span className={styles.countryFlag}>🇨🇦</span>
                    <span className={styles.countryName}>Canada</span>
                  </div>
                  <div className={styles.missionCountry}>
                    <span className={styles.countryFlag}>🇦🇺</span>
                    <span className={styles.countryName}>Australia</span>
                  </div>
                  <div className={styles.missionCountry}>
                    <span className={styles.countryFlag}>🇳🇿</span>
                    <span className={styles.countryName}>New Zealand</span>
                  </div>
                </div>
                <p className={styles.missionCardText}>
                  Our writers are graduates from top universities in each country—Harvard, Oxford, 
                  Toronto, Melbourne, and Auckland—ensuring they understand local academic expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className={styles.timelineSection}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.center}`}>
            <span className={styles.badge}>Our Journey</span>
            <h2 className={styles.sectionTitle}>From Humble Beginnings to Global Trust</h2>
            <p className={styles.sectionDesc}>
              How a small team of passionate academics grew into a trusted partner for students across five countries
            </p>
          </div>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <span className={styles.timelineYear}>2015</span>
                <h3 className={styles.timelineTitle}>The Beginning</h3>
                <p className={styles.timelineText}>
                  Founded by three PhD graduates from US universities who understood the pressure 
                  students face. Started as a small tutoring service in Boston.
                </p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <span className={styles.timelineYear}>2017</span>
                <h3 className={styles.timelineTitle}>Expansion to UK & Canada</h3>
                <p className={styles.timelineText}>
                  After hundreds of requests from international students, we expanded our services 
                  to the United Kingdom and Canada, hiring local PhD experts.
                </p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <span className={styles.timelineYear}>2019</span>
                <h3 className={styles.timelineTitle}>Australia & New Zealand</h3>
                <p className={styles.timelineText}>
                  Launched dedicated services for Australian and New Zealand students, with writers 
                  familiar with Go8 universities and local citation styles.
                </p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <span className={styles.timelineYear}>2022</span>
                <h3 className={styles.timelineTitle}>50,000 Students Milestone</h3>
                <p className={styles.timelineText}>
                  Celebrated helping over 50,000 students across five countries achieve better grades 
                  and reduce academic stress.
                </p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <span className={styles.timelineYear}>2024</span>
                <h3 className={styles.timelineTitle}>Today & Beyond</h3>
                <p className={styles.timelineText}>
                  Now trusted by over 100,000 students with a network of 5,000+ PhD experts. 
                  Still committed to the same mission: quality education accessible to all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team / Values */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.center}`}>
            <span className={styles.badge}>What Drives Us</span>
            <h2 className={styles.sectionTitle}>Our Core Values</h2>
            <p className={styles.sectionDesc}>
              The principles that guide everything we do, from hiring writers to supporting students
            </p>
          </div>

          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <AwardIcon />
              </div>
              <h3 className={styles.valueTitle}>Academic Integrity</h3>
              <p className={styles.valueText}>
                We provide model answers and reference materials that help students learn and improve. 
                Every paper is original and properly cited.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <UsersIcon />
              </div>
              <h3 className={styles.valueTitle}>Student-First Approach</h3>
              <p className={styles.valueText}>
                Your success is our success. We offer unlimited revisions and work until you're 
                completely satisfied with the result.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <GlobeIcon />
              </div>
              <h3 className={styles.valueTitle}>Cultural Competence</h3>
              <p className={styles.valueText}>
                We understand the nuances of academic writing in each country—from UK English 
                spelling to Australian referencing styles.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <ClockIcon />
              </div>
              <h3 className={styles.valueTitle}>24/7 Availability</h3>
              <p className={styles.valueText}>
                Deadlines don't sleep, and neither do we. Our support team and writers are available 
                around the clock in every time zone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Country-Specific Expertise */}
      <section className={styles.countriesSection}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.center}`}>
            <span className={styles.badge}>Global Presence</span>
            <h2 className={styles.sectionTitle}>We Understand Your Local Needs</h2>
            <p className={styles.sectionDesc}>
              Whether you're in New York, London, Toronto, Sydney, or Auckland—we've got you covered
            </p>
          </div>

          <div className={styles.countriesGrid}>
            <div className={styles.countryCard}>
              <div className={styles.countryCardHeader}>
                <span className={styles.countryCardFlag}>🇺🇸</span>
                <h3 className={styles.countryCardTitle}>United States</h3>
              </div>
              <ul className={styles.countryFeatures}>
                <li>APA 7th, MLA, Chicago/Turabian</li>
                <li>Writers from Ivy League & top universities</li>
                <li>US English & spelling</li>
                <li>Familiar with US grading rubrics</li>
              </ul>
              <Link href="/countries/us" className={styles.countryLink}>
                Learn more <ArrowRightIcon />
              </Link>
            </div>
            <div className={styles.countryCard}>
              <div className={styles.countryCardHeader}>
                <span className={styles.countryCardFlag}>🇬🇧</span>
                <h3 className={styles.countryCardTitle}>United Kingdom</h3>
              </div>
              <ul className={styles.countryFeatures}>
                <li>Harvard (UK style), OSCOLA, MHRA</li>
                <li>Writers from Russell Group universities</li>
                <li>British English & spelling</li>
                <li>Understanding of UK grading (2:1, First)</li>
              </ul>
              <Link href="/countries/uk" className={styles.countryLink}>
                Learn more <ArrowRightIcon />
              </Link>
            </div>
            <div className={styles.countryCard}>
              <div className={styles.countryCardHeader}>
                <span className={styles.countryCardFlag}>🇨🇦</span>
                <h3 className={styles.countryCardTitle}>Canada</h3>
              </div>
              <ul className={styles.countryFeatures}>
                <li>APA, MLA, Chicago, Canadian style</li>
                <li>Writers from UofT, UBC, McGill</li>
                <li>Canadian English & spelling</li>
                <li>Experience with Canadian rubrics</li>
              </ul>
              <Link href="/countries/ca" className={styles.countryLink}>
                Learn more <ArrowRightIcon />
              </Link>
            </div>
            <div className={styles.countryCard}>
              <div className={styles.countryCardHeader}>
                <span className={styles.countryCardFlag}>🇦🇺</span>
                <h3 className={styles.countryCardTitle}>Australia</h3>
              </div>
              <ul className={styles.countryFeatures}>
                <li>AGLC, Harvard (Australian), APA</li>
                <li>Writers from Go8 universities</li>
                <li>Australian English & spelling</li>
                <li>Understanding of HD grading standards</li>
              </ul>
              <Link href="/countries/au" className={styles.countryLink}>
                Learn more <ArrowRightIcon />
              </Link>
            </div>
            <div className={styles.countryCard}>
              <div className={styles.countryCardHeader}>
                <span className={styles.countryCardFlag}>🇳🇿</span>
                <h3 className={styles.countryCardTitle}>New Zealand</h3>
              </div>
              <ul className={styles.countryFeatures}>
                <li>APA, Harvard, specific NZ variations</li>
                <li>Writers from University of Auckland, Otago</li>
                <li>NZ English & spelling</li>
                <li>Familiar with NZQA standards</li>
              </ul>
              <Link href="/countries/nz" className={styles.countryLink}>
                Learn more <ArrowRightIcon />
              </Link>
            </div>
            <div className={styles.countryCard}>
              <div className={styles.countryCardHeader}>
                <span className={styles.countryCardFlag}>🌏</span>
                <h3 className={styles.countryCardTitle}>International Students</h3>
              </div>
              <ul className={styles.countryFeatures}>
                <li>Support for ESL/International students</li>
                <li>Understanding of visa requirements</li>
                <li>Cultural sensitivity</li>
                <li>Help with language barriers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.center}`}>
            <span className={styles.badge}>Student Stories</span>
            <h2 className={styles.sectionTitle}>Trusted by Students Worldwide</h2>
            <p className={styles.sectionDesc}>
              Real stories from students across five countries who've transformed their grades with our help
            </p>
          </div>

          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialQuote}>
                <QuoteIcon />
              </div>
              <p className={styles.testimonialText}>
                "I was struggling with my dissertation proposal at Columbia. The writer assigned to me 
                had a PhD from the same field and guided me through every step. Defended successfully!"
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>JD</div>
                <div className={styles.testimonialInfo}>
                  <span className={styles.testimonialName}>Jessica D.</span>
                  <span className={styles.testimonialMeta}>Columbia University • USA</span>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialQuote}>
                <QuoteIcon />
              </div>
              <p className={styles.testimonialText}>
                "As an international student at UCL, I was nervous about UK academic standards. 
                They matched me with a writer from LSE who understood exactly what my professor wanted. Got a First!"
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>AR</div>
                <div className={styles.testimonialInfo}>
                  <span className={styles.testimonialName}>Ahmed R.</span>
                  <span className={styles.testimonialMeta}>UCL • United Kingdom</span>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialQuote}>
                <QuoteIcon />
              </div>
              <p className={styles.testimonialText}>
                "Needed a nursing care plan for my University of Toronto course. The writer was a 
                registered nurse in Ontario and followed all Canadian nursing guidelines. Got 87%!"
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>SP</div>
                <div className={styles.testimonialInfo}>
                  <span className={styles.testimonialName}>Sarah P.</span>
                  <span className={styles.testimonialMeta}>University of Toronto • Canada</span>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialQuote}>
                <QuoteIcon />
              </div>
              <p className={styles.testimonialText}>
                "My University of Melbourne law assignment required AGLC referencing, which I'd never used. 
                The writer nailed it. My tutor was impressed with the precision of the citations."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>MC</div>
                <div className={styles.testimonialInfo}>
                  <span className={styles.testimonialName}>Michael C.</span>
                  <span className={styles.testimonialMeta}>UniMelb • Australia</span>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialQuote}>
                <QuoteIcon />
              </div>
              <p className={styles.testimonialText}>
                "University of Auckland had such specific requirements. The writer was a graduate from 
                there and knew exactly how to structure my education assignment. Saved my semester!"
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>LW</div>
                <div className={styles.testimonialInfo}>
                  <span className={styles.testimonialName}>Lisa W.</span>
                  <span className={styles.testimonialMeta}>University of Auckland • NZ</span>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialQuote}>
                <QuoteIcon />
              </div>
              <p className={styles.testimonialText}>
                "I've used writing services before, but none understood international student struggles 
                like HelpWithMyAssignments. They're patient, thorough, and truly care about your success."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>KP</div>
                <div className={styles.testimonialInfo}>
                  <span className={styles.testimonialName}>Kumar P.</span>
                  <span className={styles.testimonialMeta}>McGill University • International</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Team */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.center}`}>
            <span className={styles.badge}>Leadership</span>
            <h2 className={styles.sectionTitle}>Meet the Minds Behind the Mission</h2>
            <p className={styles.sectionDesc}>
              Founded by academics who understand what it takes to succeed
            </p>
          </div>

          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamImagePlaceholder}>
                <span>JD</span>
              </div>
              <h3 className={styles.teamName}>Dr. Aaron Fischer</h3>
              <p className={styles.teamRole}>Co-Founder & CEO</p>
              <p className={styles.teamBio}>
                PhD in English Literature from Harvard. Former professor at Boston University. 
                Passionate about helping students find their academic voice.
              </p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamImagePlaceholder}>
                <span>SW</span>
              </div>
              <h3 className={styles.teamName}>Dr. Umesh Malik</h3>
              <p className={styles.teamRole}>Co-Founder & Head of Academic Standards</p>
              <p className={styles.teamBio}>
                PhD in History from Oxford. Ensures all our writing meets the rigorous standards 
                of universities across the UK and Commonwealth.
              </p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamImagePlaceholder}>
                <span>MC</span>
              </div>
              <h3 className={styles.teamName}>Prof. Michael Chen</h3>
              <p className={styles.teamRole}>Director of Writer Recruitment</p>
              <p className={styles.teamBio}>
                PhD in Computer Science from Stanford. Hand-picks the top 2% of applicants to 
                ensure only the most qualified experts join our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers/Stats */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100,000+</span>
              <span className={styles.statLabel}>Happy Students</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5,000+</span>
              <span className={styles.statLabel}>PhD Experts</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Universities Covered</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>98.7%</span>
              <span className={styles.statLabel}>On-Time Delivery</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Support Available</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5</span>
              <span className={styles.statLabel}>Countries Served</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Ready to Transform Your Grades?</h2>
            <p className={styles.ctaSubtitle}>
              Join 100,000+ students across the US, UK, Canada, Australia, and New Zealand who've 
              discovered the power of expert academic guidance.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg}`}>
                Start Your Order
              </Link>
              <Link href="/contact" className={`${styles.btn} ${styles.btnOutline} ${styles.btnLg}`}>
                Talk to Our Team
              </Link>
            </div>
            <p className={styles.ctaTrustBadge}>
              <span>🔒 100% Confidential</span>
              <span>📋 Free Plagiarism Report</span>
              <span>🔄 Unlimited Revisions</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </main>
  );
}
