// components/PricingCalculator.tsx
'use client'

import { useState, useEffect } from 'react'
import styles from './PricingCalculator.module.css'

interface PriceConfig {
  basePrices: Record<string, number>
  levelMultipliers: Record<string, number>
  deadlineMultipliers: Record<string, number>
  wordCountBase: number
}

interface CountryConfig {
  code: string
  name: string
  currency: string
  symbol: string
  conversionRate: number
  flag: string
}

interface PricingCalculatorProps {
  currency?: 'AUD' | 'NZD' | 'GBP' | 'USD' | 'CAD'
}

const PricingCalculator = ({ currency }: PricingCalculatorProps) => {
  const [isCalculating, setIsCalculating] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [formData, setFormData] = useState({
    assignmentType: '',
    academicLevel: '',
    wordCount: '',
    deadline: '',
    referralDiscount: false,
    country: currency === 'CAD' ? 'CA' : 'AU'
  })
  const [pricing, setPricing] = useState({
    originalPrice: 0,
    discountedPrice: 0,
    discount: 0,
    selectedCurrency: 'AUD',
    currencySymbol: '$'
  })

  const countries: CountryConfig[] = [
    { code: 'AU', name: 'Australia', currency: 'AUD', symbol: '$', conversionRate: 1.0, flag: '🇦🇺' },
    { code: 'NZ', name: 'New Zealand', currency: 'NZD', symbol: '$', conversionRate: 1.07, flag: '🇳🇿' },
    { code: 'GB', name: 'United Kingdom', currency: 'GBP', symbol: '£', conversionRate: 0.52, flag: '🇬🇧' },
    { code: 'US', name: 'United States', currency: 'USD', symbol: '$', conversionRate: 0.66, flag: '🇺🇸' },
    { code: 'CA', name: 'Canada', currency: 'CAD', symbol: '$', conversionRate: 0.9, flag: '🇨🇦' }
  ]

  useEffect(() => {
    const detectUserCountry = () => {
      const userLocale = navigator.language || 'en-AU'
      const userCountryCode = userLocale.split('-')[1] || 'AU'
      if (userCountryCode === 'AU' || userCountryCode === 'CA') {
        setFormData(prev => ({ ...prev, country: userCountryCode as 'AU' | 'CA' }))
      }
    }
    detectUserCountry()
  }, [])

  const config: PriceConfig = {
    basePrices: {
      essay: 18.15, research: 21.78, dissertation: 30.25,
      case_study: 24.2, programming: 26.62, thesis: 33,
      coursework: 16.5, lab_report: 19.8, nursing: 22.5,
      law: 24.0, mba: 27.5, engineering: 26.0
    },
    levelMultipliers: {
      high_school: 0.85, undergraduate: 1.0,
      masters: 1.35, phd: 1.7
    },
    deadlineMultipliers: {
      '24_hours': 1.6, '48_hours': 1.4, '3_days': 1.3,
      '5_days': 1.2, '7_days': 1.1, '14_days': 1.0, '21_days': 0.95
    },
    wordCountBase: 1000
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const formatCurrency = (amount: number, currencySymbol: string) => {
    return `${currencySymbol}${amount.toFixed(2)}`
  }

  const calculatePrice = (e: React.FormEvent) => {
    e.preventDefault()
    setIsCalculating(true)
    setShowResult(false)

    if (!formData.assignmentType || !formData.academicLevel || !formData.wordCount || !formData.deadline) {
      alert('Please fill in all fields')
      setIsCalculating(false)
      return
    }

    setTimeout(() => {
      try {
        const basePrice = config.basePrices[formData.assignmentType]
        const levelMultiplier = config.levelMultipliers[formData.academicLevel]
        const deadlineMultiplier = config.deadlineMultipliers[formData.deadline]
        const wordCount = parseInt(formData.wordCount)

        let calculatedPrice = basePrice * levelMultiplier * deadlineMultiplier * (wordCount / config.wordCountBase)

        const displayOriginalPrice = calculatedPrice * 1.25
        let finalPrice = calculatedPrice
        let discountPercent = formData.referralDiscount ? 25 : 20

        const selectedCountry = countries.find(c => c.code === formData.country) || countries[0]
        
        const convertedOriginalPrice = displayOriginalPrice * selectedCountry.conversionRate
        const convertedFinalPrice = finalPrice * selectedCountry.conversionRate

        setPricing({
          originalPrice: convertedOriginalPrice,
          discountedPrice: convertedFinalPrice,
          discount: discountPercent,
          selectedCurrency: selectedCountry.currency,
          currencySymbol: selectedCountry.symbol
        })

        setShowResult(true)
        setIsCalculating(false)
        
        setTimeout(() => {
          document.getElementById('priceResult')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        }, 100)
      } catch (error) {
        console.error('Calculation error:', error)
        alert('An error occurred. Please try again.')
        setIsCalculating(false)
      }
    }, 600)
  }

  const selectedCountry = countries.find(c => c.code === formData.country) || countries[0]

  return (
    <div className={styles.calculator}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>Price Calculator</h2>
        <p className={styles.subtitle}>Get instant quote for your assignment</p>
      </div>

      {/* Country Selector - Compact */}
      <div className={styles.countrySelector}>
        {countries.map(country => (
          <button
            key={country.code}
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, country: country.code }))}
            className={`${styles.countryBtn} ${formData.country === country.code ? styles.activeCountry : ''}`}
          >
            <span>{country.flag}</span>
            <span>{country.currency}</span>
          </button>
        ))}
      </div>

      {/* Main Form */}
      <form onSubmit={calculatePrice} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Assignment Type</label>
          <select
            name="assignmentType"
            value={formData.assignmentType}
            onChange={handleInputChange}
            className={styles.select}
            required
          >
            <option value="">Select type</option>
            <option value="essay">Essay</option>
            <option value="research">Research Paper</option>
            <option value="dissertation">Dissertation</option>
            <option value="case_study">Case Study</option>
            <option value="programming">Programming</option>
            <option value="nursing">Nursing</option>
          </select>
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Level</label>
            <select
              name="academicLevel"
              value={formData.academicLevel}
              onChange={handleInputChange}
              className={styles.select}
              required
            >
              <option value="">Select</option>
              <option value="high_school">High School</option>
              <option value="undergraduate">Undergrad</option>
              <option value="masters">Masters</option>
              <option value="phd">PhD</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Words</label>
            <input
              type="number"
              name="wordCount"
              value={formData.wordCount}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="e.g., 2000"
              min="250"
              required
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Deadline</label>
          <select
            name="deadline"
            value={formData.deadline}
            onChange={handleInputChange}
            className={styles.select}
            required
          >
            <option value="">Select deadline</option>
            <option value="24_hours">24 Hours</option>
            <option value="48_hours">48 Hours</option>
            <option value="3_days">3 Days</option>
            <option value="5_days">5 Days</option>
            <option value="7_days">7 Days</option>
            <option value="14_days">14 Days</option>
            <option value="21_days">21+ Days</option>
          </select>
        </div>

        <label className={styles.checkbox}>
          <input
            type="checkbox"
            name="referralDiscount"
            checked={formData.referralDiscount}
            onChange={handleInputChange}
          />
          <span>Referral discount (+5% off)</span>
        </label>

        <button type="submit" className={styles.calcBtn} disabled={isCalculating}>
          {isCalculating ? 'Calculating...' : 'Calculate Price'}
        </button>
      </form>

      {/* Result Section */}
      {showResult && (
        <div id="priceResult" className={styles.result}>
          <div className={styles.priceCard}>
            <div className={styles.priceHeader}>
              <span className={styles.priceLabel}>Your Price</span>
              <span className={styles.australiaTag}>
                {selectedCountry.flag} {selectedCountry.currency}
              </span>
            </div>
            
            <div className={styles.priceMain}>
              <span className={styles.currencySymbol}>{pricing.currencySymbol}</span>
              <span className={styles.priceAmount}>
                {pricing.discountedPrice.toFixed(0)}
              </span>
              <span className={styles.priceDecimal}>
                .{(pricing.discountedPrice % 1).toFixed(2).slice(2)}
              </span>
            </div>

            {pricing.discount > 0 && (
              <div className={styles.savingsBadge}>
                Save {pricing.discount}% • {formatCurrency(pricing.originalPrice - pricing.discountedPrice, pricing.currencySymbol)}
              </div>
            )}



            <div className={styles.actions}>
              <a href="/contact" className={styles.orderBtn}>
                Continue to Order
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PricingCalculator