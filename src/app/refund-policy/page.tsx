// src/app/refund-policy/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Refund Policy | HelpWithMyAssignments',
  description: 'Our refund policy outlines the conditions under which you may be eligible for a refund. We are committed to fair and transparent policies.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Refund Policy</h1>
            <p className={styles.lastUpdated}>Last Updated: March 1, 2024</p>
          </div>

          <div className={styles.content}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>1. Our Commitment</h2>
              <p className={styles.text}>
                At HelpWithMyAssignments, we are committed to your satisfaction. We strive to deliver high-quality work that meets your requirements. However, we understand that there may be circumstances where you are not completely satisfied with our services. This Refund Policy outlines the conditions under which refunds may be issued.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>2. Eligibility for Refunds</h2>
              
              <h3 className={styles.subsectionTitle}>2.1 Order Cancellation</h3>
              <p className={styles.text}>
                You may cancel your order within 1 hour of placement for a full refund, provided that work has not yet begun. If work has already commenced, refunds will be considered on a case-by-case basis according to the guidelines below.
              </p>

              <h3 className={styles.subsectionTitle}>2.2 Quality Issues</h3>
              <p className={styles.text}>
                If the delivered work does not meet the requirements specified in your order, you may be eligible for a refund. To qualify:
              </p>
              <ul className={styles.list}>
                <li>You must clearly specify the requirements in your original order</li>
                <li>You must request revisions within 7 days of delivery</li>
                <li>The work must significantly fail to meet the specified requirements</li>
              </ul>

              <h3 className={styles.subsectionTitle}>2.3 Plagiarism</h3>
              <p className={styles.text}>
                If the delivered work contains plagiarized content (verified by a reliable plagiarism detection tool), you are entitled to a full refund. We take academic integrity seriously and guarantee 100% original content.
              </p>

              <h3 className={styles.subsectionTitle}>2.4 Late Delivery</h3>
              <p className={styles.text}>
                If we fail to deliver your order by the agreed deadline and the delay is not caused by factors beyond our control (e.g., technical issues, force majeure), you may be eligible for a partial or full refund depending on the length of delay.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>3. Non-Refundable Situations</h2>
              <p className={styles.text}>
                Refunds will not be issued in the following circumstances:
              </p>
              <ul className={styles.list}>
                <li><strong>Change of Mind:</strong> If you simply change your mind after work has commenced</li>
                <li><strong>Additional Requirements:</strong> If you add new requirements after work has begun that were not in the original order</li>
                <li><strong>Incomplete Information:</strong> If you failed to provide complete and accurate information needed to complete the work</li>
                <li><strong>Late Revision Requests:</strong> If you request revisions after 7 days from delivery</li>
                <li><strong>Academic Issues:</strong> If you receive a low grade due to factors beyond our control (e.g., strict grading, different expectations)</li>
                <li><strong>Third-Party Disputes:</strong> Issues arising from third-party services or platforms</li>
                <li><strong>Free Services:</strong> Any services provided free of charge</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>4. Refund Amounts</h2>
              
              <h3 className={styles.subsectionTitle}>4.1 Full Refunds</h3>
              <p className={styles.text}>
                Full refunds may be issued in cases of:
              </p>
              <ul className={styles.list}>
                <li>Cancellation within 1 hour (work not started)</li>
                <li>Verified plagiarism</li>
                <li>Complete failure to meet core requirements</li>
                <li>Non-delivery beyond reasonable timeframe</li>
              </ul>

              <h3 className={styles.subsectionTitle}>4.2 Partial Refunds</h3>
              <p className={styles.text}>
                Partial refunds may be issued on a case-by-case basis when:
              </p>
              <ul className={styles.list}>
                <li>Work partially meets requirements (50-80% refund based on extent)</li>
                <li>Late delivery (10-50% refund based on delay)</li>
                <li>Revisions exhausted but fundamental issues remain</li>
              </ul>

              <h3 className={styles.subsectionTitle}>4.3 Refund Calculation</h3>
              <p className={styles.text}>
                Partial refunds are calculated based on the proportion of work that is unsatisfactory, the time spent on revisions, and the extent of the deviation from requirements.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>5. Refund Process</h2>
              
              <h3 className={styles.subsectionTitle}>5.1 How to Request a Refund</h3>
              <p className={styles.text}>
                To request a refund, please follow these steps:
              </p>
              <ol className={styles.orderedList}>
                <li>Contact our support team within 7 days of delivery</li>
                <li>Provide your order number and details of the issue</li>
                <li>Include evidence supporting your claim (e.g., requirements comparison, plagiarism report)</li>
                <li>Allow up to 3-5 business days for review</li>
              </ol>

              <h3 className={styles.subsectionTitle}>5.2 Review Process</h3>
              <p className={styles.text}>
                Our team will review your request and may:
              </p>
              <ul className={styles.list}>
                <li>Offer revisions to address the issues</li>
                <li>Propose a partial refund</li>
                <li>Issue a full refund</li>
                <li>Deny the request with explanation</li>
              </ul>

              <h3 className={styles.subsectionTitle}>5.3 Timeline</h3>
              <p className={styles.text}>
                Once approved, refunds are typically processed within 5-10 business days. The time for the refund to appear in your account depends on your payment method and financial institution.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>6. Revision Policy</h2>
              <p className={styles.text}>
                Before requesting a refund, we encourage you to use our revision policy. We offer:
              </p>
              <ul className={styles.list}>
                <li><strong>Unlimited Free Revisions:</strong> For 7 days after delivery</li>
                <li><strong>Scope of Revisions:</strong> Revisions must be within the original requirements</li>
                <li><strong>Turnaround:</strong> Revision time depends on the extent of changes needed</li>
              </ul>
              <p className={styles.text}>
                We genuinely want you to be satisfied with your purchase and will work with you to resolve issues through revisions whenever possible.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>7. Chargebacks</h2>
              <p className={styles.text}>
                We encourage you to contact us directly before initiating a chargeback through your payment provider. Chargebacks can take several weeks to resolve and may result in:
              </p>
              <ul className={styles.list}>
                <li>Suspension of your account</li>
                <li>Additional fees</li>
                <li>Legal action in cases of fraudulent chargebacks</li>
              </ul>
              <p className={styles.text}>
                We are committed to fair resolution and will work with you to address any concerns.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>8. Dispute Resolution</h2>
              <p className={styles.text}>
                If you disagree with our refund decision, you may:
              </p>
              <ul className={styles.list}>
                <li>Request further review by a senior team member</li>
                <li>Provide additional evidence supporting your claim</li>
                <li>Seek mediation through a third-party dispute resolution service</li>
              </ul>
              <p className={styles.text}>
                We are committed to fair and transparent dispute resolution and will work in good faith to resolve any disagreements.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>9. Contact Information</h2>
              <p className={styles.text}>
                For refund requests or questions about this policy, please contact us at:
              </p>
              <div className={styles.contactInfo}>
                <p><strong>Email:</strong> <a href="mailto:refunds@helpassignments.com" className={styles.link}>refunds@helpassignments.com</a></p>
                <p><strong>Support:</strong> <a href="mailto:support@helpassignments.com" className={styles.link}>support@helpassignments.com</a></p>
                <p><strong>Phone:</strong> +1 (800) 123-4567</p>
              </div>
            </section>

            <div className={styles.footerNote}>
              <p>We value your satisfaction and are committed to fair and transparent refund policies. Please don't hesitate to contact us with any concerns.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}