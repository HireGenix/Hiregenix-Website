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
  title: 'HireGenix - Advanced AI Recruitment Platform | Smart Hiring Solutions',
  description: 'Transform your recruitment process with HireGenix\'s advanced AI platform. Featuring smart candidate matching, efficient data processing, comprehensive analytics, and automated workflows.',
  keywords: 'AI recruitment, smart hiring platform, candidate matching, automated workflows, recruitment software, video interviews, skills assessment, HireGenix, talent acquisition, HR technology',
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
    title: 'HireGenix - Advanced AI Recruitment Platform',
    description: 'Transform your recruitment process with HireGenix\'s advanced AI platform. Featuring smart candidate matching, efficient data processing, comprehensive analytics, and automated workflows.',
    images: [
      {
        url: '/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'HireGenix - Advanced AI Recruitment Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HireGenix - Advanced AI Recruitment Platform',
    description: 'Transform your recruitment process with HireGenix\'s advanced AI platform.',
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
