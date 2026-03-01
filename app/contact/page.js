'use client';

import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import { MdError } from "react-icons/md";

import styles from './Contact.module.css';
import PatternBackground from '../components/PatternBackground';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_W3F_ACCESS_KEY,
                    subject: `New message from ${formData.name} — adv.somveerkumar`,
                    from_name: formData.name,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone || 'Not provided',
                    message: formData.message,
                    botcheck: '', // honeypot — bots fill this, humans don't
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus('error');
                setErrorMessage(result.message || 'Something went wrong. Please try again.');
            }
        } catch {
            setStatus('error');
            setErrorMessage('Unable to send your message. Please check your internet connection and try again.');
        }
    };

    return (
        <div className={styles.content}>

            {/* Page Header */}
            <div className="page-header">
                <PatternBackground src="/sk-golden-logo.svg" />
                <div className="container">
                    <p className="breadcrumb">Contact</p>
                    <h1>Professional Correspondence</h1>
                    <p>For inquiries related to professional matters only.</p>
                </div>
            </div>

            {/* Contact Form Section */}
            <section className={`section ${styles.contactSection}`}>
                <PatternBackground src="/sk-navy-blue-logo.svg" />
                <div className="container">
                    <div className={styles.contactGrid}>
                        {/* Form */}
                        <div className={styles.formWrap}>
                            <h2>Send a Message</h2>
                            <p className={styles.formNote}>
                                This form is intended for professional correspondence only.
                                Please provide relevant details for your inquiry.
                            </p>

                            {status === 'success' ? (
                                <div style={{ padding: '2rem', background: 'var(--color-off-white)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-light)' }}>
                                    <h3 style={{ color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Message Sent Successfully</h3>
                                    <p style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem' }}>
                                        Thank you for your correspondence. Your message has been delivered
                                        and a response will be provided at the earliest convenience.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => setStatus('idle')}
                                        className={styles.submitBtn}
                                        style={{ marginTop: '1.5rem' }}
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    {/* Honeypot field — invisible to users, catches bots */}
                                    <input
                                        type="checkbox"
                                        name="botcheck"
                                        style={{ display: 'none' }}
                                        tabIndex={-1}
                                        autoComplete="off"
                                    />

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
                                            disabled={status === 'submitting'}
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
                                            disabled={status === 'submitting'}
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="phone">Phone Number <span style={{ fontWeight: 400, color: 'var(--color-gray-600)', fontSize: '0.85em' }}>(Optional)</span></label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 XXXXX XXXXX"
                                            autoComplete="tel"
                                            disabled={status === 'submitting'}
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
                                            disabled={status === 'submitting'}
                                        ></textarea>
                                    </div>

                                    {status === 'error' && (
                                        <div className={styles.errorMsg}>
                                            <MdError color='var(--color-red)' size={20} />
                                            <span>{errorMessage}</span>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        className={styles.submitBtn}
                                        disabled={status === 'submitting'}
                                    >
                                        {status === 'submitting' ? (
                                            <>
                                                <span className={styles.spinner}></span>
                                                Sending…
                                            </>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className={styles.infoSidebar}>
                            <div className={styles.infoBlock}>
                                <h3>Office Information</h3>

                                <div className={styles.infoBlockItem}>
                                    <FaMapMarkerAlt color=' var(--color-accent)' size={20} />
                                    <div>
                                        <span className={styles.label}>Address </span>
                                        <span className={styles.value}>
                                            Chamber No. [XX], [Building Name],<br />
                                            New Delhi — 110001, India
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.infoBlockItem}>
                                    <FaEnvelope color=' var(--color-accent)' size={20} />
                                    <div>
                                        <span className={styles.label}>Email </span>
                                        <span className={styles.value}><a href='mailto:work.somveerk@gmail.com' >work.somveerk@gmail.com</a></span>
                                    </div>
                                </div>

                                <div className={styles.infoBlockItem}>
                                    <FaLinkedin color=' var(--color-accent)' size={20} />
                                    <div>
                                        <span className={styles.label}>LinkedIn </span>
                                        <span className={styles.value}><a href='https://www.linkedin.com/in/somveerkumar/' target="_blank">linkedin.com/in/somveerkumar</a></span>
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
