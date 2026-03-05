// src/app/contact/ContactForm.tsx
'use client';

import React, { useState } from 'react';
import styles from './contact.module.css';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  studentId: string;
  university: string;
  course: string;
  projectType: string;
  projectTitle: string;
  deadline: string;
  wordCount: string;
  citationStyle: string;
  description: string;
  budget: string;
  referral: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    studentId: '',
    university: '',
    course: '',
    projectType: '',
    projectTitle: '',
    deadline: '',
    wordCount: '',
    citationStyle: '',
    description: '',
    budget: '',
    referral: '',
  });

  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const projectTypes = [
    'Essay',
    'Research Paper',
    'Dissertation',
    'Thesis',
    'Case Study',
    'Lab Report',
    'Programming Assignment',
    'Mathematics Problem',
    'Business Plan',
    'Presentation',
    'Other',
  ];

  const citationStyles = [
    'APA 7th',
    'MLA 9th',
    'Chicago/Turabian',
    'Harvard',
    'IEEE',
    'Vancouver',
    'OSCOLA',
    'Other',
  ];

  const universities = [
    'Harvard University',
    'Stanford University',
    'MIT',
    'University of Oxford',
    'University of Cambridge',
    'Yale University',
    'Princeton University',
    'Columbia University',
    'University of Toronto',
    'University of Melbourne',
    'Other',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      const validFiles = newFiles.filter(file => file.size <= 25 * 1024 * 1024);
      const invalidFiles = newFiles.filter(file => file.size > 25 * 1024 * 1024);
      
      if (invalidFiles.length > 0) {
        setSubmitStatus({
          type: 'error',
          message: 'Some files exceed the 25MB limit and were not added.',
        });
      }
      
      setFiles((prev) => [...prev, ...validFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.university) {
      newErrors.university = 'Please select your university';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select project type';
    }

    if (!formData.projectTitle.trim()) {
      newErrors.projectTitle = 'Project title is required';
    }

    if (!formData.deadline) {
      newErrors.deadline = 'Deadline is required';
    } else {
      const selectedDate = new Date(formData.deadline);
      const today = new Date();
      if (selectedDate < today) {
        newErrors.deadline = 'Deadline cannot be in the past';
      }
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Project description is required';
    } else if (formData.description.trim().length < 50) {
      newErrors.description = 'Please provide a more detailed description (minimum 50 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all required fields correctly.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const submitData = new FormData();
    
    Object.entries(formData).forEach(([key, value]) => {
      submitData.append(key, value);
    });

    files.forEach((file, index) => {
      submitData.append(`file-${index}`, file);
    });

    submitData.append('submittedAt', new Date().toISOString());

    try {
      const emailBody = `
        New Project Submission
        
        PERSONAL INFORMATION:
        --------------------
        Full Name: ${formData.fullName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Student ID: ${formData.studentId || 'Not provided'}
        University: ${formData.university}
        Course/Program: ${formData.course || 'Not provided'}
        
        PROJECT DETAILS:
        ---------------
        Project Type: ${formData.projectType}
        Project Title: ${formData.projectTitle}
        Deadline: ${formData.deadline}
        Word Count: ${formData.wordCount || 'Not specified'}
        Citation Style: ${formData.citationStyle || 'Not specified'}
        
        PROJECT DESCRIPTION:
        -------------------
        ${formData.description}
        
        ADDITIONAL INFORMATION:
        ----------------------
        Budget: ${formData.budget || 'Not specified'}
        How did you hear about us? ${formData.referral || 'Not specified'}
        
        FILES ATTACHED:
        --------------
        ${files.length > 0 
          ? files.map(f => `- ${f.name} (${(f.size / 1024 / 1024).toFixed(2)} MB)`).join('\n')
          : 'No files attached'}
        
        Submitted: ${new Date().toLocaleString()}
      `;

      const mailtoLink = `mailto:HelpWithMyAssignments@HelpWithMyAssignments.com?subject=New Project Submission: ${encodeURIComponent(formData.projectTitle)}&body=${encodeURIComponent(emailBody)}`;
      
      window.location.href = mailtoLink;

      setSubmitStatus({
        type: 'success',
        message: 'Form prepared successfully! Your email client will open to send the details. Please check and send the email.',
      });

      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 10000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error preparing your submission. Please try again or email us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* Personal Information Section */}
      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>Personal Information</h3>
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName" className={styles.label}>
              Full Name <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
              placeholder="John Doe"
            />
            {errors.fullName && <span className={styles.errorMessage}>{errors.fullName}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address <span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              placeholder="john@university.edu"
            />
            {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>
              Phone Number <span className={styles.required}>*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
              placeholder="+1 (555) 000-0000"
            />
            {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="studentId" className={styles.label}>
              Student ID
            </label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={formData.studentId}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="Optional"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="university" className={styles.label}>
              University/Institution <span className={styles.required}>*</span>
            </label>
            <select
              id="university"
              name="university"
              value={formData.university}
              onChange={handleInputChange}
              className={`${styles.select} ${errors.university ? styles.inputError : ''}`}
            >
              <option value="">Select your university</option>
              {universities.map((uni) => (
                <option key={uni} value={uni}>{uni}</option>
              ))}
            </select>
            {errors.university && <span className={styles.errorMessage}>{errors.university}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="course" className={styles.label}>
              Course/Program
            </label>
            <input
              type="text"
              id="course"
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="e.g., Computer Science, Year 3"
            />
          </div>
        </div>
      </div>

      {/* Project Details Section */}
      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>Project Details</h3>
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label htmlFor="projectType" className={styles.label}>
              Project Type <span className={styles.required}>*</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              className={`${styles.select} ${errors.projectType ? styles.inputError : ''}`}
            >
              <option value="">Select project type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.projectType && <span className={styles.errorMessage}>{errors.projectType}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="projectTitle" className={styles.label}>
              Project Title <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="projectTitle"
              name="projectTitle"
              value={formData.projectTitle}
              onChange={handleInputChange}
              className={`${styles.input} ${errors.projectTitle ? styles.inputError : ''}`}
              placeholder="e.g., Impact of AI on Healthcare"
            />
            {errors.projectTitle && <span className={styles.errorMessage}>{errors.projectTitle}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="deadline" className={styles.label}>
              Deadline <span className={styles.required}>*</span>
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleInputChange}
              className={`${styles.input} ${errors.deadline ? styles.inputError : ''}`}
              min={new Date().toISOString().split('T')[0]}
            />
            {errors.deadline && <span className={styles.errorMessage}>{errors.deadline}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="wordCount" className={styles.label}>
              Word Count
            </label>
            <input
              type="text"
              id="wordCount"
              name="wordCount"
              value={formData.wordCount}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="e.g., 2500 words"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="citationStyle" className={styles.label}>
              Citation Style
            </label>
            <select
              id="citationStyle"
              name="citationStyle"
              value={formData.citationStyle}
              onChange={handleInputChange}
              className={styles.select}
            >
              <option value="">Select citation style</option>
              {citationStyles.map((style) => (
                <option key={style} value={style}>{style}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.label}>
            Project Description <span className={styles.required}>*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={6}
            className={`${styles.textarea} ${errors.description ? styles.inputError : ''}`}
            placeholder="Please provide detailed information about your project, including specific requirements, guidelines, and any additional instructions..."
          />
          {errors.description && <span className={styles.errorMessage}>{errors.description}</span>}
          <span className={styles.hint}>
            Minimum 50 characters. {formData.description.length}/50
          </span>
        </div>
      </div>

      {/* File Upload Section */}
      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>Upload Assessment Files</h3>
        <div className={styles.fileUploadArea}>
          <input
            type="file"
            id="fileUpload"
            multiple
            onChange={handleFileChange}
            className={styles.fileInput}
            accept=".pdf,.doc,.docx,.txt,.zip,.rar,.jpg,.jpeg,.png"
          />
          <label htmlFor="fileUpload" className={styles.fileUploadLabel}>
            <div className={styles.fileUploadIcon}>📎</div>
            <div className={styles.fileUploadText}>
              <span className={styles.fileUploadTitle}>Click to upload</span>
              <span className={styles.fileUploadHint}>
                or drag and drop (PDF, DOC, DOCX, ZIP, Images)
              </span>
              <span className={styles.fileUploadLimit}>Maximum file size: 25MB</span>
            </div>
          </label>
        </div>

        {files.length > 0 && (
          <div className={styles.fileList}>
            <h4 className={styles.fileListTitle}>Selected Files:</h4>
            {files.map((file, index) => (
              <div key={index} className={styles.fileItem}>
                <span className={styles.fileItemName}>
                  {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </span>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className={styles.fileRemoveBtn}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Additional Information */}
      <div className={styles.formSection}>
        <h3 className={styles.sectionTitle}>Additional Information</h3>
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label htmlFor="budget" className={styles.label}>
              Budget (USD)
            </label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="e.g., $100-200"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="referral" className={styles.label}>
              How did you hear about us?
            </label>
            <select
              id="referral"
              name="referral"
              value={formData.referral}
              onChange={handleInputChange}
              className={styles.select}
            >
              <option value="">Select an option</option>
              <option value="Search Engine">Search Engine</option>
              <option value="Social Media">Social Media</option>
              <option value="Friend/Classmate">Friend/Classmate</option>
              <option value="Professor">Professor</option>
              <option value="Advertisement">Advertisement</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>

      {/* Submit Status */}
      {submitStatus.type && (
        <div className={`${styles.statusMessage} ${styles[submitStatus.type]}`}>
          {submitStatus.type === 'success' ? '✓' : '⚠'} {submitStatus.message}
        </div>
      )}

      {/* Submit Button */}
      <div className={styles.formActions}>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg}`}
        >
          {isSubmitting ? (
            <>
              <span className={styles.spinner}></span>
              Preparing...
            </>
          ) : (
            <>
              <span>📧</span>
              Submit Project Request
            </>
          )}
        </button>
        <p className={styles.formNote}>
          By submitting this form, you agree to our{' '}
          <a href="/terms" className={styles.link}>Terms of Service</a> and{' '}
          <a href="/privacy" className={styles.link}>Privacy Policy</a>.
          Your information will be sent directly to{' '}
          <strong>HelpWithMyAssignments@HelpWithMyAssignments.com</strong>
        </p>
      </div>
    </form>
  );
}