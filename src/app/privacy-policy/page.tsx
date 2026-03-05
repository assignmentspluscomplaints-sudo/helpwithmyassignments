// src/app/privacy-policy/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Privacy Policy | HelpWithMyAssignments',
  description: 'Our privacy policy outlines how we collect, use, and protect your personal information. We are committed to ensuring your privacy and security.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.lastUpdated}>Last Updated: March 1, 2024</p>
          </div>

          <div className={styles.content}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>1. Introduction</h2>
              <p className={styles.text}>
                Welcome to HelpWithMyAssignments ("we," "our," "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className={styles.text}>
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
              <h3 className={styles.subsectionTitle}>2.1 Personal Information</h3>
              <p className={styles.text}>
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className={styles.list}>
                <li>Register for an account</li>
                <li>Place an order for our services</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us for support</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className={styles.text}>
                The personal information we collect may include:
              </p>
              <ul className={styles.list}>
                <li>Name and contact information (email, phone number)</li>
                <li>Billing and payment information</li>
                <li>Academic information related to your orders</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className={styles.subsectionTitle}>2.2 Automatically Collected Information</h3>
              <p className={styles.text}>
                When you visit our website, we automatically collect certain information about your device and usage, including:
              </p>
              <ul className={styles.list}>
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
              <p className={styles.text}>
                We use the information we collect to:
              </p>
              <ul className={styles.list}>
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders and our services</li>
                <li>Improve our website and services</li>
                <li>Send you promotional materials (with your consent)</li>
                <li>Comply with legal obligations</li>
                <li>Detect and prevent fraud</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>4. Sharing Your Information</h2>
              <p className={styles.text}>
                We may share your information with:
              </p>
              <ul className={styles.list}>
                <li><strong>Service Providers:</strong> Third-party vendors who help us operate our business (payment processors, hosting services, etc.)</li>
                <li><strong>Academic Writers:</strong> Qualified professionals who fulfill your orders (only necessary information)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
              <p className={styles.text}>
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>5. Data Security</h2>
              <p className={styles.text}>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className={styles.list}>
                <li>SSL encryption for data transmission</li>
                <li>Secure payment processing</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
              </ul>
              <p className={styles.text}>
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>6. Your Rights</h2>
              <p className={styles.text}>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className={styles.list}>
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your information</li>
                <li>Restriction or objection to processing</li>
                <li>Data portability</li>
                <li>Withdrawal of consent</li>
              </ul>
              <p className={styles.text}>
                To exercise these rights, please contact us at <a href="mailto:privacy@helpassignments.com" className={styles.link}>privacy@helpassignments.com</a>.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>7. Cookies and Tracking</h2>
              <p className={styles.text}>
                We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device. You can control cookies through your browser settings, but disabling them may affect website functionality.
              </p>
              <p className={styles.text}>
                We use the following types of cookies:
              </p>
              <ul className={styles.list}>
                <li><strong>Essential Cookies:</strong> Necessary for website operation</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Functionality Cookies:</strong> Remember your preferences</li>
                <li><strong>Marketing Cookies:</strong> Used for targeted advertising</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>8. Third-Party Links</h2>
              <p className={styles.text}>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to read the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>9. Children's Privacy</h2>
              <p className={styles.text}>
                Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>10. International Data Transfers</h2>
              <p className={styles.text}>
                Your information may be transferred to and processed in countries other than your own. We take appropriate safeguards to ensure your information remains protected in accordance with this Privacy Policy.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>11. Changes to This Privacy Policy</h2>
              <p className={styles.text}>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with an updated effective date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>12. Contact Us</h2>
              <p className={styles.text}>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className={styles.contactInfo}>
                <p><strong>Email:</strong> <a href="mailto:privacy@helpassignments.com" className={styles.link}>privacy@helpassignments.com</a></p>
                <p><strong>Address:</strong> 123 Academic Way, Suite 100, Education City, ST 12345</p>
                <p><strong>Phone:</strong> +1 (800) 123-4567</p>
              </div>
            </section>

            <div className={styles.footerNote}>
              <p>By using our services, you acknowledge that you have read and understood this Privacy Policy.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}