import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.myhiregenix.com'),
  title: 'HireGenix - AGI-Powered Recruitment Platform | Next-Gen AI Hiring',
  description: 'Experience the future of recruitment with HireGenix\'s AGI-enhanced platform. Featuring quantum processing, real-time market intelligence, emotional AI analysis, and autonomous hiring capabilities.',
  keywords: 'AGI recruitment, AI hiring platform, quantum-enhanced hiring, emotional intelligence analysis, autonomous recruitment, real-time market intelligence, virtual hiring assistant, HireGenix, recruitment software, candidate matching, video interviews, skills assessment',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.myhiregenix.com',
    siteName: 'HireGenix',
    title: 'HireGenix - AGI-Powered Recruitment Platform',
    description: 'Experience the future of recruitment with HireGenix\'s AGI-enhanced platform. Featuring quantum processing, real-time market intelligence, emotional AI analysis, and autonomous hiring capabilities.',
    images: [
      {
        url: '/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'HireGenix - AGI-Powered Recruitment Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HireGenix - AGI-Powered Recruitment Platform',
    description: 'Experience the future of recruitment with HireGenix\'s AGI-enhanced platform.',
    images: ['/favicon.ico'],
    creator: '@HireGenix',
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual verification code when available
  },
  authors: [
    { name: 'HireGenix Team' }
  ],
  publisher: 'HireGenix',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
