import styles from './About.module.css';
import PatternBackground from '../components/PatternBackground';

export const metadata = {
    title: 'About | Somveer Kumar — Legal Consultant',
    description: 'Professional biography, education, Bar Council enrollment, and areas of research for Somveer Kumar.',
};

export default function AboutPage() {
    return (
        <div className={styles.content}>
            {/* Page Header */}
            <div className="page-header">
                <PatternBackground src="/sk-golden-logo.svg" />
                <div className="container">
                    <p className="breadcrumb">About</p>
                    <h1>Professional Profile</h1>
                    <p>Education, enrollment, and areas of expertise.</p>
                </div>
            </div>

            {/* Bio Section */}
            <section className={`section ${styles.bioSection}`}>
                <PatternBackground src="/sk-navy-blue-logo.svg" />
                <div className="container">
                    <div className={styles.bioGrid}>
                        <div className={styles.bioText}>
                            <h2 className="section-title">Biography</h2>
                            <p>
                                Somveer Kumar is a legal professional enrolled with the Bar Council of Delhi,
                                practicing primarily before the Delhi High Court and various tribunals. With a
                                focus on Technology Law, Commercial &amp; Corporate Law, and Intellectual Property
                                Rights, the practice addresses contemporary legal issues arising at the intersection
                                of law, technology, and business.
                            </p>
                            <p>
                                After completing a B.A. LL.B. degree with a specialization in Technology and
                                Intellectual Property Law, the practice was established to cater to the growing
                                need for legal understanding in digital commerce, data protection, cyber law,
                                and intellectual property management.
                            </p>

                            <h3>Research &amp; Academic Interests</h3>
                            <p>
                                Active areas of research and publication include:
                            </p>
                            <ul>
                                <li>Data privacy and protection under the Digital Personal Data Protection Act</li>
                                <li>E-commerce regulations and consumer protection in digital markets</li>
                                <li>Intellectual property enforcement in the digital age</li>
                                <li>Emerging legal frameworks for artificial intelligence and blockchain</li>
                                <li>Cyber law and intermediary liability in India</li>
                            </ul>

                            <h3>Professional Engagement</h3>
                            <p>
                                Contributions include participation in legal seminars, workshops, and conferences
                                on technology law and intellectual property. Published articles and commentary
                                on emerging legal issues are available in the Publications section of this website.
                            </p>
                        </div>

                        {/* Info Card */}
                        <div className={styles.infoCard}>
                            <h4>Quick Reference</h4>

                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Enrollment</span>
                                <span className={styles.infoValue}>Bar Council of Delhi</span>
                            </div>

                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Jurisdiction</span>
                                <span className={styles.infoValue}>Delhi High Court</span>
                            </div>

                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Education</span>
                                <span className={styles.infoValue}>B.A. LL.B. (Hons.)</span>
                            </div>

                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Specialization</span>
                                <span className={styles.infoValue}>Tech &amp; IPR Law</span>
                            </div>

                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Languages</span>
                                <span className={styles.infoValue}>English, Hindi</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education Timeline */}
            <section className={`section ${styles.timeline}`}>
                <div className="container">
                    <h2 className="section-title">Education &amp; Career</h2>
                    <p className="section-subtitle">A chronological Summary of academic and professional milestones.</p>

                    <ul className={styles.timelineList}>
                        <li className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <span className={styles.timelineYear}>Enrolled with Bar Council</span>
                            <h3 className={styles.timelineTitle}>Enrollment as Advocate</h3>
                            <p className={styles.timelineDesc}>
                                Enrolled with the Bar Council of Delhi under the Advocates Act, 1961.
                                Commenced practice at the Delhi High Court with a focus on technology
                                and corporate law matters.
                            </p>
                        </li>

                        <li className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <span className={styles.timelineYear}>Law Degree</span>
                            <h3 className={styles.timelineTitle}>B.A. LL.B. (Hons.)</h3>
                            <p className={styles.timelineDesc}>
                                Completed an integrated B.A. LL.B. program with honors, specializing in
                                Technology Law and Intellectual Property Rights. Academic projects focused
                                on data privacy and e-commerce regulation.
                            </p>
                        </li>

                        <li className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <span className={styles.timelineYear}>Internships &amp; Training</span>
                            <h3 className={styles.timelineTitle}>Professional Training</h3>
                            <p className={styles.timelineDesc}>
                                Completed internships at law firms and corporate legal departments, gaining
                                exposure to technology transactions, intellectual property disputes, and
                                commercial litigation.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
