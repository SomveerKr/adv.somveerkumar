import styles from './PracticeAreas.module.css';
import PatternBackground from '../components/PatternBackground';
export const metadata = {
    title: 'Practice Areas | Somveer Kumar — Technology, IPR & Corporate Law',
    description: 'Areas of legal practice including Technology & Data Protection Law, Commercial Transactions, Corporate Compliance, and Intellectual Property Rights.',
};

const practiceAreas = [
    {
        title: 'Technology & Data Protection Law',
        description:
            'Matters relating to the Information Technology Act, Digital Personal Data Protection Act, cyber law compliance, intermediary liability, data breach management, and regulatory frameworks for technology enterprises operating in India.',
        topics: ['IT Act', 'DPDP Act', 'Cyber Law', 'Data Privacy', 'Intermediary Liability', 'Digital Governance'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
    },
    {
        title: 'E-commerce & Commercial Transactions',
        description:
            'Legal considerations in e-commerce operations, digital marketplace compliance, consumer protection in online transactions, payment gateway regulations, and cross-border commercial arrangements in the digital economy.',
        topics: ['E-commerce', 'Consumer Protection', 'Digital Payments', 'Cross-border Trade', 'Marketplace Compliance'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
        ),
    },
    {
        title: 'Corporate Compliance & Contracts',
        description:
            'Addressing corporate governance, regulatory compliance, contract drafting and negotiation, company law matters, employment agreements, non-disclosure agreements, and statutory compliance for businesses of varying scale.',
        topics: ['Corporate Governance', 'Contract Drafting', 'Company Law', 'Employment Law', 'Regulatory Compliance'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
    },
    {
        title: 'Intellectual Property Rights',
        description:
            'Matters concerning trademark registration and enforcement, copyright protection, patent applications and prosecution, trade secret management, technology licensing, and IP portfolio strategy for businesses and individuals.',
        topics: ['Trademarks', 'Copyrights', 'Patents', 'Trade Secrets', 'Licensing', 'IP Strategy'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 0 1 0 20 10 10 0 0 1 0-20z" />
                <path d="M12 6v6l4 2" />
            </svg>
        ),
    },
];

export default function PracticeAreasPage() {
    return (
        <div className={styles.content}>
            {/* Page Header */}
            <div className="page-header">
                <PatternBackground src="/sk-golden-logo.svg" />
                <div className="container">
                    <p className="breadcrumb">Practice Areas</p>
                    <h1>Areas of Practice</h1>
                    <p>An overview of the key legal domains addressed in this practice.</p>
                </div>
            </div>

            {/* Areas Grid */}
            <section className={`section ${styles.areasSection}`}>
                <PatternBackground src="/sk-navy-blue-logo.svg" />
                <div className="container">
                    <div className={styles.areasGrid}>
                        {practiceAreas.map((area, index) => (
                            <div key={index} className={styles.areaCard}>
                                <div className={styles.areaIcon}>{area.icon}</div>
                                <h3>{area.title}</h3>
                                <p>{area.description}</p>
                                <ul className={styles.areaTopics}>
                                    {area.topics.map((topic, i) => (
                                        <li key={i}>{topic}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Disclaimer */}
                    <div className={styles.disclaimer}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="16" x2="12" y2="12" />
                            <line x1="12" y1="8" x2="12.01" y2="8" />
                        </svg>
                        <p>
                            The information provided on this page is for general informational purposes only
                            and does not constitute legal advice. Each matter is unique and requires
                            individualized analysis. No attorney-client relationship is established through
                            the information presented here.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
