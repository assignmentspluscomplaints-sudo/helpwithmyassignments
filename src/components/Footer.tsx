'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Assignment Writing', path: '/assignment-writing-service' },
    { name: 'Essay Help', path: '/essay-writing-service' },
    { name: 'Dissertation Help', path: '/dissertation-writing-service' },
    { name: 'Coursework Help', path: '/coursework-help' },
    { name: 'Law Assignment', path: '/law-assignment-writing-service' },
    { name: 'Nursing Assignment', path: '/nursing-assignment-writing-service' },
  ]

  const locations = [
    { name: 'Australia', path: '/countries/au' },
    { name: 'United Kingdom', path: '/countries/uk' },
    { name: 'United States', path: '/countries/us' },
    { name: 'Canada', path: '/countries/ca' },
    { name: 'UAE', path: '/countries/uae' },
    { name: 'India', path: '/countries/in' },
  ]

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Refund Policy', path: '/refund-policy' },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.mainContent}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div className={styles.logoWrapper}>
              <Image
                src="/logo.png"
                alt="HelpWithMyAssignments"
                width={280}
                height={80}
                className={styles.logo}
                priority={false}
              />
            </div>
            <p className={styles.brandDescription}>
              Trusted by 100,000+ students worldwide. Expert academic support for every subject, every deadline.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <span className={styles.socialIcon}>𝕏</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <span className={styles.socialIcon}>f</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <span className={styles.socialIcon}>📷</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <span className={styles.socialIcon}>in</span>
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Services</h3>
              <ul className={styles.linkList}>
                {services.map((link) => (
                  <li key={link.path} className={styles.linkItem}>
                    <Link href={link.path} className={styles.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Locations</h3>
              <ul className={styles.linkList}>
                {locations.map((link) => (
                  <li key={link.path} className={styles.linkItem}>
                    <Link href={link.path} className={styles.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Company</h3>
              <ul className={styles.linkList}>
                {company.map((link) => (
                  <li key={link.path} className={styles.linkItem}>
                    <Link href={link.path} className={styles.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomBarContent}>
            <p className={styles.copyright}>
              © {currentYear} HelpWithMyAssignments. All rights reserved.
            </p>
            <div className={styles.trustBadges}>
              <span className={styles.badge}>24/7 Support</span>
              <span className={styles.badge}>100% Confidential</span>
              <span className={styles.badge}>Expert Writers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer