'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className={styles.content}>
            {/* Page Header */}
            <div className="page-header">
                <div className="container">
                    <p className="breadcrumb">Contact</p>
                    <h1>Professional Correspondence</h1>
                    <p>For inquiries related to professional matters only.</p>
                </div>
            </div>

            {/* Contact Form Section */}
            <section className={`section ${styles.contactSection}`}>
                <div className="container">
                    <div className={styles.contactGrid}>
                        {/* Form */}
                        <div className={styles.formWrap}>
                            <h2>Send a Message</h2>
                            <p className={styles.formNote}>
                                This form is intended for professional correspondence only.
                                Please provide relevant details for your inquiry.
                            </p>

                            {submitted ? (
                                <div style={{ padding: '2rem', background: 'var(--color-off-white)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-light)' }}>
                                    <h3 style={{ color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Message Received</h3>
                                    <p style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem' }}>
                                        Thank you for your correspondence. Your message has been noted
                                        and a response will be provided at the earliest convenience.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your full name"
                                            required
                                            autoComplete="name"
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your.email@example.com"
                                            required
                                            autoComplete="email"
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Please describe your inquiry..."
                                            required
                                        ></textarea>
                                    </div>

                                    <button type="submit" className={styles.submitBtn}>
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className={styles.infoSidebar}>
                            <div className={styles.infoBlock}>
                                <h3>Office Information</h3>

                                <div className={styles.infoBlockItem}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    <div>
                                        <span className={styles.label}>Address</span>
                                        <span className={styles.value}>
                                            Chamber No. [XX], [Building Name],<br />
                                            New Delhi — 110001, India
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.infoBlockItem}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                    <div>
                                        <span className={styles.label}>Email</span>
                                        <span className={styles.value}>contact@example.com</span>
                                    </div>
                                </div>

                                <div className={styles.infoBlockItem}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect x="2" y="9" width="4" height="12" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                    <div>
                                        <span className={styles.label}>LinkedIn</span>
                                        <span className={styles.value}>linkedin.com/in/advocate-name</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.infoBlock}>
                                <h3>Important Note</h3>
                                <p className={styles.disclaimer}>
                                    This form is for professional correspondence only. Submitting this form
                                    does not create an attorney-client relationship. Information shared via
                                    this form will be used solely for responding to your inquiry as outlined
                                    in our Privacy Policy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
