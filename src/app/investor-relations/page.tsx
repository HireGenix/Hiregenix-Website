import React from 'react';
import { Metadata } from 'next';
import InvestorRelationsPage from '../../components/InvestorRelations/InvestorRelationsPage';

export const metadata: Metadata = {
  title: 'Investor Relations | HireGenix',
  description: 'Investment opportunities and financial information for HireGenix, the leading AI-powered recruitment platform.',
  openGraph: {
    title: 'Investor Relations | HireGenix',
    description: 'Investment opportunities and financial information for HireGenix, the leading AI-powered recruitment platform.',
    url: 'https://hiregenix.com/investor-relations',
    siteName: 'HireGenix',
    images: [
      {
        url: '/investor-relations/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HireGenix Investor Relations',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function InvestorRelations() {
  return <InvestorRelationsPage />;
}
