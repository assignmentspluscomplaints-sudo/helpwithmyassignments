// src/app/terms/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Terms of Service | HelpWithMyAssignments',
  description: 'Our terms of service outline the rules and guidelines for using our assignment help services. Please read carefully before placing an order.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Terms of Service</h1>
            <p className={styles.lastUpdated}>Last Updated: March 1, 2024</p>
          </div>

          <div className={styles.content}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
              <p className={styles.text}>
                Welcome to HelpWithMyAssignments ("Company," "we," "our," "us"). By accessing or using our website and services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
              </p>
              <p className={styles.text}>
                These Terms constitute a legally binding agreement between you and HelpWithMyAssignments. We may modify these Terms at any time, and such modifications shall be effective immediately upon posting. Your continued use of our services constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>2. Eligibility</h2>
              <p className={styles.text}>
                By using our services, you represent and warrant that:
              </p>
              <ul className={styles.list}>
                <li>You are at least 18 years of age</li>
                <li>You have the legal capacity to enter into a binding contract</li>
                <li>You are using our services for lawful purposes only</li>
                <li>You will provide accurate and complete information</li>
                <li>You will not use our services for any fraudulent or unauthorized purpose</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>3. Our Services</h2>
              <p className={styles.text}>
                HelpWithMyAssignments provides academic writing assistance and consulting services to students. Our services include but are not limited to:
              </p>
              <ul className={styles.list}>
                <li>Essay and research paper writing assistance</li>
                <li>Editing and proofreading services</li>
                <li>Dissertation and thesis consulting</li>
                <li>Case study analysis</li>
                <li>Coursework assistance</li>
              </ul>
              <p className={styles.text}>
                <strong>Important:</strong> Our services are intended to provide guidance, reference materials, and learning support. All work should be used for research purposes only and must be properly cited. Customers are responsible for ensuring their use of our services complies with their institution's academic integrity policies.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>4. Account Registration</h2>
              <p className={styles.text}>
                To access certain features of our services, you may need to create an account. You are responsible for:
              </p>
              <ul className={styles.list}>
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Providing accurate and complete information</li>
              </ul>
              <p className={styles.text}>
                We reserve the right to suspend or terminate accounts that violate these Terms or for any other reason at our discretion.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>5. Orders and Payments</h2>
              
              <h3 className={styles.subsectionTitle}>5.1 Placing an Order</h3>
              <p className={styles.text}>
                When placing an order, you agree to provide complete and accurate information about your requirements. You are responsible for reviewing the order details before submission. Any changes after order placement may affect pricing and delivery time.
              </p>

              <h3 className={styles.subsectionTitle}>5.2 Pricing</h3>
              <p className={styles.text}>
                Prices for our services are displayed on our website and are subject to change without notice. The price quoted at the time of order confirmation is the price you will pay, subject to any applicable taxes and fees.
              </p>

              <h3 className={styles.subsectionTitle}>5.3 Payment</h3>
              <p className={styles.text}>
                We accept various payment methods including credit/debit cards, PayPal, and other secure payment options. By providing payment information, you represent that you are authorized to use the payment method. Payment must be received before work begins.
              </p>

              <h3 className={styles.subsectionTitle}>5.4 Order Cancellation</h3>
              <p className={styles.text}>
                Orders may be cancelled within 1 hour of placement for a full refund, provided that work has not yet begun. After work has commenced, refunds are subject to our refund policy.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>6. Intellectual Property</h2>
              
              <h3 className={styles.subsectionTitle}>6.1 Our Content</h3>
              <p className={styles.text}>
                All content on our website, including text, graphics, logos, and software, is the property of HelpWithMyAssignments and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.
              </p>

              <h3 className={styles.subsectionTitle}>6.2 Your Content</h3>
              <p className={styles.text}>
                You retain all rights to the content you submit to us (e.g., assignment instructions, personal information). By submitting content, you grant us a license to use it for the purpose of providing our services.
              </p>

              <h3 className={styles.subsectionTitle}>6.3 Deliverables</h3>
              <p className={styles.text}>
                Upon full payment, you receive a non-exclusive, perpetual license to use the work product delivered to you for personal, non-commercial purposes. We retain the right to use anonymized versions for quality control and portfolio purposes.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>7. User Conduct</h2>
              <p className={styles.text}>
                You agree not to:
              </p>
              <ul className={styles.list}>
                <li>Use our services for any illegal purpose</li>
                <li>Submit false or misleading information</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of our website</li>
                <li>Harass, abuse, or harm others</li>
                <li>Use our services to plagiarize or commit academic dishonesty</li>
                <li>Resell or distribute our work without permission</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>8. Confidentiality</h2>
              <p className={styles.text}>
                We treat your personal information and order details as confidential in accordance with our Privacy Policy. We implement reasonable security measures to protect your information.
              </p>
              <p className={styles.text}>
                You agree to keep any login credentials confidential and not to share them with third parties.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>9. Disclaimers</h2>
              <p className={styles.text}>
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT:
              </p>
              <ul className={styles.list}>
                <li>The services will meet your specific requirements</li>
                <li>The services will be uninterrupted, timely, or error-free</li>
                <li>The results obtained will be accurate or reliable</li>
                <li>The quality of any products or services will meet your expectations</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>10. Limitation of Liability</h2>
              <p className={styles.text}>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, HELPWITHMYASSIGNMENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className={styles.list}>
                <li>Your use or inability to use our services</li>
                <li>Any unauthorized access to or use of our servers</li>
                <li>Any interruption or cessation of transmission to or from our services</li>
                <li>Any bugs, viruses, or the like that may be transmitted</li>
                <li>Any errors or omissions in any content</li>
              </ul>
              <p className={styles.text}>
                Our total liability to you shall not exceed the amount paid by you for the specific service giving rise to the claim.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>11. Indemnification</h2>
              <p className={styles.text}>
                You agree to indemnify, defend, and hold harmless HelpWithMyAssignments and our officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with:
              </p>
              <ul className={styles.list}>
                <li>Your use of our services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Any content you submit to us</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>12. Termination</h2>
              <p className={styles.text}>
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
              </p>
              <p className={styles.text}>
                Upon termination, your right to use our services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>13. Governing Law</h2>
              <p className={styles.text}>
                These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any legal action or proceeding arising out of or relating to these Terms or your use of our services shall be brought exclusively in the federal or state courts located in the United States.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>14. Dispute Resolution</h2>
              <p className={styles.text}>
                Any dispute arising out of or relating to these Terms or our services shall first be attempted to be resolved through informal negotiations. If the dispute cannot be resolved within 30 days, either party may initiate binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>15. Severability</h2>
              <p className={styles.text}>
                If any provision of these Terms is held to be unenforceable or invalid, such provision shall be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions shall continue in full force and effect.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>16. Entire Agreement</h2>
              <p className={styles.text}>
                These Terms, together with our Privacy Policy and any other agreements expressly incorporated by reference, constitute the entire agreement between you and HelpWithMyAssignments regarding our services and supersede all prior agreements and understandings.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>17. Contact Information</h2>
              <p className={styles.text}>
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className={styles.contactInfo}>
                <p><strong>Email:</strong> <a href="mailto:legal@helpassignments.com" className={styles.link}>legal@helpassignments.com</a></p>
                <p><strong>Address:</strong> 123 Academic Way, Suite 100, Education City, ST 12345</p>
                <p><strong>Phone:</strong> +1 (800) 123-4567</p>
              </div>
            </section>

            <div className={styles.footerNote}>
              <p>By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}