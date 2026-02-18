import styles from '../LegalPage.module.css';

export const metadata = {
    title: 'Disclaimer | Somveer Kumar',
    description: 'Disclaimer for the website of Somveer Kumar, in compliance with the Bar Council of India Rules under the Advocates Act, 1961.',
};

export default function DisclaimerPage() {
    return (
        <div className={styles.content}>
            {/* Page Header */}
            <div className="page-header">
                <div className="container">
                    <p className="breadcrumb">Legal</p>
                    <h1>Disclaimer</h1>
                    <p>Important information regarding the use of this website.</p>
                </div>
            </div>

            <section className={`section ${styles.legalSection}`}>
                <div className="container">
                    <div className={styles.legalContent}>
                        <h2>Bar Council of India Compliance</h2>
                        <p>
                            As per the rules of the <strong>Bar Council of India</strong>, advocates are
                            not permitted to solicit work or advertise. This website has been designed
                            in compliance with these rules and is intended solely for informational and
                            educational purposes.
                        </p>

                        <h2>Nature of Information</h2>
                        <p>
                            The content on this website, including descriptions of practice areas,
                            publications, and any other material, is for general information purposes
                            only. It is not intended as, and should not be construed as, legal advice.
                            Visiting this website or contacting through the contact form does not create
                            an attorney-client relationship.
                        </p>

                        <h2>No Solicitation</h2>
                        <p>
                            This website does not constitute an offer, invitation, or solicitation of
                            any kind to any person to engage legal services. The information presented
                            here has been made available at the initiative of the viewer and for their
                            informational purposes only.
                        </p>

                        <h2>No Guarantees</h2>
                        <p>
                            No representation is made that the quality of legal services to be performed
                            is greater than the quality of legal services performed by other lawyers. The
                            contents of this website should not be interpreted as a guarantee or indication
                            of future results.
                        </p>

                        <h2>User Acknowledgment</h2>
                        <p>By using this website, the user acknowledges and agrees that:</p>
                        <ul>
                            <li>They are seeking information regarding the advocate of their own accord.</li>
                            <li>
                                This website is not intended to advertise, solicit, or induce any person
                                to engage the services of the advocate.
                            </li>
                            <li>
                                The information contained on this website is provided for general
                                informational and educational purposes only.
                            </li>
                            <li>
                                The user shall not hold the advocate responsible for any action taken
                                based on the information available on this website.
                            </li>
                        </ul>

                        <h2>Jurisdiction</h2>
                        <p>
                            Any disputes arising from the use of this website shall be subject to the
                            exclusive jurisdiction of the courts in New Delhi, India.
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
