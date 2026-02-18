'use client';

import { useState, useEffect } from 'react';
import styles from './DisclaimerModal.module.css';

export default function DisclaimerModal() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const consented = sessionStorage.getItem('bci-disclaimer-accepted');
        if (!consented) {
            setShow(true);
        }
    }, []);

    const handleProceed = () => {
        sessionStorage.setItem('bci-disclaimer-accepted', 'true');
        setShow(false);
    };

    const handleExit = () => {
        window.location.href = 'https://www.google.com';
    };

    if (!show) return null;

    return (
        <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="disclaimer-title">
            <div className={styles.modal}>
                <div className={styles.iconWrap}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                </div>

                <h2 className={styles.title} id="disclaimer-title">Disclaimer</h2>

                <div className={styles.body}>
                    <p>
                        As per the rules of the <strong>Bar Council of India</strong>, advocates are not permitted
                        to solicit work or advertise. This website is meant solely for the purpose of providing
                        information about the advocate and their areas of practice.
                    </p>
                    <p>
                        By clicking &ldquo;I Agree &amp; Proceed,&rdquo; you acknowledge that:
                    </p>
                    <ul>
                        <li>You are seeking information about this advocate of your own accord.</li>
                        <li>This website does not constitute solicitation or advertisement of any kind.</li>
                        <li>The information on this website is provided for general informational and educational purposes only and does not constitute legal advice.</li>
                    </ul>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.actions}>
                    <button className={styles.exitBtn} onClick={handleExit}>
                        Exit
                    </button>
                    <button className={styles.proceedBtn} onClick={handleProceed}>
                        I Agree &amp; Proceed
                    </button>
                </div>
            </div>
        </div>
    );
}
