import type { Metadata } from 'next';
import { HomePage } from '@/components/Home';

export const metadata: Metadata = {
  title: 'HireGenix - AI-Powered Recruitment Platform | Find Top Talent Faster',
  description: 'HireGenix helps companies find and hire the best talent with AI-powered candidate matching, video interviews, and skills assessment. Transform your recruitment process today.',
  keywords: 'AI recruitment, hiring platform, talent acquisition, candidate matching, video interviews, skills assessment, recruitment software, HireGenix',
  openGraph: {
    title: 'HireGenix - AI-Powered Recruitment Platform | Find Top Talent Faster',
    description: 'Transform your recruitment process with AI-powered candidate matching, video interviews, and skills assessment. Find the best talent faster with HireGenix.',
    url: 'https://www.myhiregenix.com',
    siteName: 'HireGenix',
    images: [
      {
        url: '/hero-image.png',
        width: 1200,
        height: 630,
        alt: 'HireGenix AI Recruitment Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HireGenix - AI-Powered Recruitment Platform',
    description: 'Transform your recruitment process with AI-powered candidate matching, video interviews, and skills assessment.',
    images: ['/hero-image.png'],
    creator: '@hiregenix',
  },
  alternates: {
    canonical: 'https://www.myhiregenix.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Page() {
  return <HomePage />;
}
