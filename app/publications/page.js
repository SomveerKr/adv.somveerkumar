import styles from './Publications.module.css';

export const metadata = {
    title: 'Publications | Somveer Kumar — Legal Insights & Research',
    description: 'Legal insights, case summaries, and thought pieces on emerging issues in technology law, intellectual property, and corporate law.',
};

const publications = [
    {
        title: 'The Digital Personal Data Protection Act: Implications for Technology Companies in India',
        date: 'January 2026',
        tag: 'Data Protection',
        summary:
            'An analysis of the DPDP Act\'s key provisions, including consent mechanisms, data fiduciary obligations, and the establishment of the Data Protection Board. This article examines the practical implications for technology companies operating in India.',
    },
    {
        title: 'E-commerce Liability and Consumer Protection: Navigating the New Framework',
        date: 'November 2025',
        tag: 'E-commerce',
        summary:
            'A review of evolving consumer protection regulations in digital marketplaces, examining the responsibilities of e-commerce platforms under the Consumer Protection (E-Commerce) Rules and related judicial interpretations.',
    },
    {
        title: 'Intellectual Property Challenges in the Age of Artificial Intelligence',
        date: 'September 2025',
        tag: 'IPR',
        summary:
            'Examining the intersection of artificial intelligence and intellectual property law — including questions of AI-generated works, patentability of AI inventions, and the implications for copyright and trademark protection.',
    },
    {
        title: 'Intermediary Liability Under the IT Act: A Post-Amendment Analysis',
        date: 'July 2025',
        tag: 'Technology Law',
        summary:
            'An overview of the amended intermediary guidelines under the Information Technology Act, analyzing due diligence requirements, content moderation obligations, and safe harbour protections for digital intermediaries.',
    },
    {
        title: 'Corporate Compliance in the Digital Age: Key Considerations',
        date: 'May 2025',
        tag: 'Corporate Law',
        summary:
            'Discussing the evolving landscape of corporate compliance in technology-driven businesses, including data governance, cybersecurity obligations, and regulatory compliance frameworks applicable to Indian corporations.',
    },
    {
        title: 'Trademark Protection in the Digital Marketplace: Strategies and Challenges',
        date: 'March 2025',
        tag: 'IPR',
        summary:
            'A discussion on the challenges of trademark enforcement in online marketplaces, domain name disputes, and strategies for protecting brand identity in the digital environment.',
    },
];

export default function PublicationsPage() {
    return (
        <div className={styles.content}>
            {/* Page Header */}
            <div className="page-header">
                <div className="container">
                    <p className="breadcrumb">Publications</p>
                    <h1>Publications &amp; Legal Insights</h1>
                    <p>Articles, case summaries, and thought pieces on emerging legal issues.</p>
                </div>
            </div>

            {/* Publications */}
            <section className={`section ${styles.pubSection}`}>
                <div className="container">
                    {/* Disclaimer */}
                    <div className={styles.disclaimer}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="16" x2="12" y2="12" />
                            <line x1="12" y1="8" x2="12.01" y2="8" />
                        </svg>
                        <p>
                            All publications and articles on this page are for educational and informational purposes
                            only. They do not constitute legal advice and should not be relied upon as such.
                            Readers are encouraged to seek independent legal counsel for specific matters.
                        </p>
                    </div>

                    <div className={styles.pubGrid}>
                        {publications.map((pub, index) => (
                            <article key={index} className={styles.pubCard}>
                                <div className={styles.pubMeta}>
                                    <span className={styles.pubDate}>{pub.date}</span>
                                    <span className={styles.pubTag}>{pub.tag}</span>
                                </div>
                                <h3>{pub.title}</h3>
                                <p>{pub.summary}</p>
                                <span className={styles.pubReadMore}>
                                    Read more
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </span>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
