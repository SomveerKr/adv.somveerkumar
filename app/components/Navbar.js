'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/practice-areas', label: 'Practice Areas' },
    { href: '/publications', label: 'Publications' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} role="navigation" aria-label="Main navigation">
            <div className={styles.navInner}>
                <Link href="/" className={styles.logo} aria-label="Home">
                    <span className={styles.logoName}>Somveer Kumar</span>
                    <span className={styles.logoTitle}>Advocate &bull; Legal Consultant</span>
                </Link>

                <button
                    className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
                    {navItems.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className={`${styles.navLink} ${pathname === href ? styles.active : ''}`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
