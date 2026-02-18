import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerTop}>
                    <div className={styles.footerBrand}>
                        <h3>Somveer Kumar</h3>
                        <p className={styles.enrollment}>Enrolled Advocate, Bar Council of Delhi</p>
                        <p>
                            Practicing in the areas of Technology Law, Commercial &amp; Corporate Law,
                            and Intellectual Property Rights.
                        </p>
                    </div>

                    <div className={styles.footerCol}>
                        <h4>Navigation</h4>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/practice-areas">Practice Areas</Link></li>
                            <li><Link href="/publications">Publications</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerCol}>
                        <h4>Legal</h4>
                        <ul>
                            <li><Link href="/disclaimer">Disclaimer</Link></li>
                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footerDivider}></div>

                <div className={styles.footerBottom}>
                    <span>&copy; {currentYear} Somveer Kumar. All rights reserved.</span>
                    <div className={styles.footerBottomLinks}>
                        <Link href="/disclaimer">Disclaimer</Link>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
