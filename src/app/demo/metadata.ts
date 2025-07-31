import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interactive Demo - HireGenix AI Recruitment Platform | Experience Our Features',
  description: 'Experience HireGenix\'s AI-powered recruitment platform with our interactive demo. Try candidate matching, skills assessment, video interviews, and workforce analytics in just 5 minutes.',
  keywords: 'HireGenix demo, AI recruitment demo, interactive demo, candidate matching demo, skills assessment demo, video interview demo, workforce analytics demo, recruitment platform trial',
  openGraph: {
    title: 'Interactive Demo - HireGenix AI Recruitment Platform',
    description: 'Experience HireGenix\'s AI-powered recruitment platform with our interactive demo. Try all features including candidate matching, skills assessment, and analytics.',
    url: 'https://www.myhiregenix.com/demo',
    siteName: 'HireGenix',
    images: [
      {
        url: '/demo-preview.png',
        width: 1200,
        height: 630,
        alt: 'HireGenix Interactive Demo Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interactive Demo - HireGenix AI Recruitment Platform',
    description: 'Experience HireGenix\'s AI-powered recruitment platform with our interactive demo. Try all features in just 5 minutes.',
    images: ['/demo-preview.png'],
    creator: '@hiregenix',
  },
  alternates: {
    canonical: 'https://www.myhiregenix.com/demo',
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
  other: {
    'application-name': 'HireGenix Demo',
    'msapplication-TileColor': '#F05126',
    'theme-color': '#F05126',
  },
};