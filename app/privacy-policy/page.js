import styles from '../LegalPage.module.css';

export const metadata = {
    title: 'Privacy Policy | Somveer Kumar',
    description: 'Privacy policy outlining how personal data is collected, used, and protected in accordance with Indian data privacy principles.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className={styles.content}>
            {/* Page Header */}
            <div className="page-header">
                <div className="container">
                    <p className="breadcrumb">Legal</p>
                    <h1>Privacy Policy</h1>
                    <p>How your data is handled when you use this website.</p>
                </div>
            </div>

            <section className={`section ${styles.legalSection}`}>
                <div className="container">
                    <div className={styles.legalContent}>
                        <h2>Introduction</h2>
                        <p>
                            This Privacy Policy outlines how personal data submitted through this website
                            is collected, used, and protected. The privacy of visitors and correspondents
                            is taken seriously and is handled in accordance with applicable Indian data
                            privacy laws and principles.
                        </p>

                        <h2>Data Collection</h2>
                        <p>
                            The only personal data collected through this website is the information
                            voluntarily provided by visitors through the contact form, which includes:
                        </p>
                        <ul>
                            <li>Full Name</li>
                            <li>Email Address</li>
                            <li>Message content</li>
                        </ul>
                        <p>
                            No cookies are used for tracking purposes. The website does not use any
                            third-party analytics or advertising services.
                        </p>

                        <h2>Purpose of Data Collection</h2>
                        <p>
                            The personal data collected through the contact form is used solely for the
                            purpose of responding to the correspondent&apos;s inquiry or query. The data will not
                            be used for any marketing, solicitation, or promotional purposes.
                        </p>

                        <h2>Data Storage &amp; Security</h2>
                        <p>
                            Reasonable measures are taken to protect personal data from unauthorized access,
                            alteration, disclosure, or destruction. Data submitted through the contact form
                            is stored securely and is accessible only to authorized personnel.
                        </p>

                        <h2>Data Sharing</h2>
                        <p>
                            Personal data is not shared with, sold to, or disclosed to any third party,
                            except where required by law or judicial order.
                        </p>

                        <h2>Data Retention</h2>
                        <p>
                            Personal data is retained only for the period necessary to fulfill the purpose
                            for which it was collected, i.e., to respond to the correspondent&apos;s inquiry.
                            Upon fulfillment of this purpose, the data is securely deleted.
                        </p>

                        <h2>Your Rights</h2>
                        <p>
                            In accordance with the Digital Personal Data Protection Act and applicable
                            data privacy principles, you have the right to:
                        </p>
                        <ul>
                            <li>Request access to the personal data held about you.</li>
                            <li>Request correction of inaccurate personal data.</li>
                            <li>Request deletion of your personal data.</li>
                            <li>Withdraw consent for continued processing of your data.</li>
                        </ul>
                        <p>
                            To exercise any of these rights, please reach out through the contact page.
                        </p>

                        <h2>Governing Law</h2>
                        <p>
                            This Privacy Policy is governed by and construed in accordance with the laws
                            of India. Any disputes arising in relation to this Policy shall be subject to
                            the exclusive jurisdiction of the courts in New Delhi, India.
                        </p>

                        <p className={styles.lastUpdated}>
                            Last updated: February 2026
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
