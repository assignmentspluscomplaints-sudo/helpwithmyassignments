// src/app/contact/page.tsx
import React from 'react';
import type { Metadata } from "next";
import ContactForm from './ContactForm';
import styles from './contact.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Contact Us | Submit Your Project",
    description:
      "Share your project requirements with us. Upload your assessment files and get expert help with your assignments.",
  };

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.contactHero}>
        <div className={styles.heroBg}>
          <div className={`${styles.heroOrb} ${styles.heroOrb1}`}></div>
          <div className={`${styles.heroOrb} ${styles.heroOrb2}`}></div>
          <div className={`${styles.heroOrb} ${styles.heroOrb3}`}></div>
        </div>
      {/* Navbar */}
      <Navbar />
        <div className="container">
          <div className={styles.heroContent}>
            <div className={`${styles.badge} ${styles.badgeGold}`}>
              <span>✦ Get Started Today</span>
            </div>
            <h1 className={styles.heroTitle}>
              Share Your <span className={styles.gradientText}>Project</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Tell us about your assignment requirements and upload your assessment files. 
              Our experts will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.formSection}>
        <div className="container">
          <div className={styles.formWrapper}>
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>Project Details</h2>
              <p className={styles.formDesc}>
                Fill in the information below and we'll match you with the perfect expert
              </p>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className={styles.infoSection}>
        <div className="container">
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📋</div>
              <h3 className={styles.infoTitle}>Detailed Requirements</h3>
              <p className={styles.infoText}>
                Provide as much detail as possible about your project. Include guidelines, 
                formatting requirements, and any specific instructions.
              </p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📎</div>
              <h3 className={styles.infoTitle}>File Upload</h3>
              <p className={styles.infoText}>
                Upload your assessment files (PDF, DOC, DOCX, ZIP). Maximum file size: 25MB. 
                Multiple files allowed.
              </p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>⏰</div>
              <h3 className={styles.infoTitle}>Quick Response</h3>
              <p className={styles.infoText}>
                We'll review your requirements and assign the best expert for your project. 
                Expect a response within 24 hours.
              </p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🔒</div>
              <h3 className={styles.infoTitle}>100% Confidential</h3>
              <p className={styles.infoText}>
                Your information and project details are kept strictly confidential. 
                We never share your data with third parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Need Urgent Assistance?</h2>
            <p className={styles.ctaSubtitle}>
              For urgent projects or immediate assistance, reach out to us directly
            </p>
            <div className={styles.ctaActions}>
              <a href="mailto:HelpWithMyAssignments@HelpWithMyAssignments.com" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg}`}>
                📧 HelpWithMyAssignments@HelpWithMyAssignments.com
              </a>
            </div>
            <div className={styles.ctaTrustBadge}>
              <span>✓ 24/7 Support</span>
              <span>✓ 500+ Experts</span>
              <span>✓ 98% Satisfaction</span>
            </div>
          </div>
        </div>
      </section>
 {/* Footer Component */}
 <Footer />
    </>
  );
}