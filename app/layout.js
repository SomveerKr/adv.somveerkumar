import { Merriweather, Lato } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DisclaimerModal from './components/DisclaimerModal';

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-merriweather',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata = {
  title: 'Somveer Kumar | Technology, Corporate & IPR Law | Delhi High Court',
  description:
    'Legal consultant specializing in Technology Law, Commercial & Corporate Law, and Intellectual Property Rights. Enrolled Advocate, Bar Council of Delhi.',
  keywords: [
    'Advocate',
    'Lawyer',
    'Legal Consultant',
    'Technology Law',
    'Intellectual Property Law',
    'Corporate and Commercial Law',
    'IPR',
    'Data Protection',
    'Delhi',
    'India',
  ],
  authors: [{ name: 'Somveer Kumar' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Somveer Kumar | Technology, Corporate & IPR Law',
    description:
      'Legal consultant specializing in Technology Law, Commercial & Corporate Law, and Intellectual Property Rights.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Somveer Kumar - Legal Consultant',
    description:
      'Legal consultant specializing in Technology Law, Commercial & Corporate Law, and Intellectual Property Rights.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      addressCountry: 'IN',
    },
    employee: {
      '@type': 'Person',
      name: 'Somveer Kumar',
      jobTitle: 'Advocate',
      description:
        'Enrolled Advocate with the Bar Council of Delhi, specializing in Technology, Corporate & IPR Law.',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Professional Correspondence',
      email: 'contact@example.com',
    },
  };

  return (
    <html lang="en" className={`${merriweather.variable} ${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <DisclaimerModal />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
