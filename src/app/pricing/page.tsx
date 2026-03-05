'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PricingCalculator from '@/components/PricingCalculator'
import styles from './page.module.css'

export default function PricingPage() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.pricingPage}>
      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.container}>
          {/* Hero Section */}
          <div className={styles.hero}>
            <h1>
              Transparent <span className={styles.heroHighlight}>Pricing</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Get high-quality academic writing at affordable prices. 
              Use our calculator to get an instant quote.
            </p>
          </div>

          {/* Features Grid */}
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💰</div>
              <h3>Best Price Guarantee</h3>
              <p>We'll match any legitimate competitor's price</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔄</div>
              <h3>Free Revisions</h3>
              <p>Unlimited revisions until you're satisfied</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔒</div>
              <h3>Secure Payments</h3>
              <p>Your payment information is always safe</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎓</div>
              <h3>Expert Writers</h3>
              <p>Qualified professionals in your field</p>
            </div>
          </div>

          {/* Main Content Layout */}
          <div className={styles.layout}>
            {/* Left Content */}
            <div className={styles.content}>
              <div className={styles.section}>
                <h2>Why Choose Our Service?</h2>
                <p>
                  We understand that as a student, you need quality work that doesn't break the bank. 
                  Our pricing model is designed to be transparent and fair, with no hidden fees or 
                  surprise charges. Every quote includes free revisions, plagiarism report, and 24/7 support.
                </p>
              </div>

              <div className={styles.guarantees}>
                <div className={styles.guaranteeItem}>
                  <span className={styles.guaranteeIcon}>✅</span>
                  <span>Money-back guarantee</span>
                </div>
                <div className={styles.guaranteeItem}>
                  <span className={styles.guaranteeIcon}>✅</span>
                  <span>100% plagiarism-free</span>
                </div>
                <div className={styles.guaranteeItem}>
                  <span className={styles.guaranteeIcon}>✅</span>
                  <span>On-time delivery</span>
                </div>
                <div className={styles.guaranteeItem}>
                  <span className={styles.guaranteeIcon}>✅</span>
                  <span>Direct chat with writer</span>
                </div>
              </div>

              <div className={styles.section}>
                <h2>Frequently Asked Questions</h2>
                <div className={styles.faqGrid}>
                  <div className={styles.faqItem}>
                    <h3>How is the price calculated?</h3>
                    <p>
                      Price is based on your assignment type, academic level, word count, 
                      and deadline. More complex assignments and tighter deadlines may 
                      have higher rates.
                    </p>
                  </div>
                  <div className={styles.faqItem}>
                    <h3>Are there any hidden fees?</h3>
                    <p>
                      No, absolutely not! The price you see is exactly what you pay. 
                      We believe in complete transparency with our pricing.
                    </p>
                  </div>
                  <div className={styles.faqItem}>
                    <h3>Do you offer discounts?</h3>
                    <p>
                      Yes! We offer referral discounts and first-time customer specials. 
                      Check the calculator for current offers.
                    </p>
                  </div>
                  <div className={styles.faqItem}>
                    <h3>Can I pay in my currency?</h3>
                    <p>
                      Yes! Use the currency selector above the calculator to see prices 
                      in AUD, NZD, GBP, or USD.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className={styles.trustBadges}>
                <div className={styles.badge}>
                  <span>🔒</span> SSL Secure
                </div>
                <div className={styles.badge}>
                  <span>💳</span> PayPal & Cards
                </div>
                <div className={styles.badge}>
                  <span>⭐</span> 4.9/5 Rating
                </div>
                <div className={styles.badge}>
                  <span>🏆</span> 10k+ Clients
                </div>
              </div>
            </div>

            {/* Pricing Calculator */}
            <PricingCalculator />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}