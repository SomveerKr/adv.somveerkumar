import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import PatternBackground from './components/PatternBackground';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <PatternBackground src="/sk-golden-logo.svg" />
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadge}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className={styles.badgeTextFull}>Enrolled Advocate, Bar Council of Delhi</span>
            <span className={styles.badgeTextShort}>Enrolled Advocate, BCD</span>
          </div>

          <h1 className={styles.heroTitle}>
            Somveer Kumar
            <span>Delhi High Court</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Specializing in Technology Law, Commercial &amp; Corporate Law,
            and Intellectual Property Rights. Providing informed legal perspective
            on matters at the intersection of law, technology, and commerce.
          </p>

          <div className={styles.heroMeta}>

            <div className={styles.heroMetaItem}>
              <span className={styles.heroMetaLabel}>Enrollment</span>
              <span className={styles.heroMetaValue}>Bar Council of Delhi</span>
            </div>
            <div className={styles.heroMetaItem}>
              <span className={styles.heroMetaLabel}>Focus Areas</span>
              <span className={styles.heroMetaValue}>Tech, IPR &amp; Corporate</span>
            </div>
            <div className={styles.heroMetaItem}>
              <span className={styles.heroMetaLabel}>Other Skill</span>
              <span className={styles.heroMetaValue}>Software Developer</span>
            </div>
          </div>
        </div>

        <div className={styles.heroDecor}>
          <Image
            src="/somveer.png"
            alt="Somveer Kumar"
            width={200}
            height={200}
            className={styles.heroImage}
            priority
          />
        </div>
      </section>

      {/* Intro Cards */}
      <section className={`section ${styles.intro}`}>
        <PatternBackground src="/sk-navy-blue-logo.svg" />
        <div className="container">
          <h2 className="section-title">Areas of Focus</h2>
          <p className="section-subtitle">
            An overview of the key practice areas and their relevance to contemporary legal issues.
          </p>

          <div className={styles.introGrid}>
            <div className={styles.introCard}>
              <div className={styles.introCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3>Technology &amp; Data Protection</h3>
              <p>
                Navigating the evolving landscape of technology regulations, data privacy,
                cyber law, and digital governance frameworks in India.
              </p>
            </div>

            <div className={styles.introCard}>
              <div className={styles.introCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3>Commercial &amp; Corporate Law</h3>
              <p>
                Addressing legal considerations in e-commerce, commercial transactions,
                corporate compliance, contracts, and regulatory matters.
              </p>
            </div>

            <div className={styles.introCard}>
              <div className={styles.introCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3>Intellectual Property Rights</h3>
              <p>
                Matters relating to trademarks, copyrights, patents, trade secrets,
                and licensing in India and international jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={`section ${styles.ctaBanner}`}>

        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <h2>Professional Correspondence</h2>
              <p>For inquiries related to professional matters, you may reach out via the contact page.</p>
            </div>
            <Link href="/contact" className={styles.ctaLink}>
              Contact Page
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
