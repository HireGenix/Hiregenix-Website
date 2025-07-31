import type { Metadata } from 'next';
import { DemoPage } from '../../components/Demo';

export const metadata: Metadata = {
  title: 'HireGenix Demo - Experience Advanced AI Recruitment | Interactive Platform Demo',
  description: 'Experience HireGenix\'s advanced AI recruitment platform with our interactive demo. See candidate matching, video interviews, skills assessment, and analytics in action.',
  keywords: 'HireGenix demo, AI recruitment demo, interactive platform demo, recruitment software trial, candidate matching demo, video interview demo, skills assessment demo',
  openGraph: {
    title: 'HireGenix Demo - Experience Advanced AI Recruitment',
    description: 'Try our interactive demo to see how HireGenix transforms recruitment with AI-powered candidate matching, video interviews, and comprehensive analytics.',
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
    title: 'HireGenix Demo - Experience Advanced AI Recruitment',
    description: 'Try our interactive demo to see how HireGenix transforms recruitment with AI-powered tools.',
    images: ['/demo-preview.png'],
    creator: '@HireGenix',
  },
  alternates: {
    canonical: 'https://www.myhiregenix.com/demo',
  },
};

export default function Demo() {
  return <DemoPage />;
}
