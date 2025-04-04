import type { Metadata } from 'next';
import Script from 'next/script';

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

'use client';

import React from 'react';
import { Layout } from '@/components/Layout';
import { Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

// Import individual components
import { 
  HeroSection,
  ClientLogosSection,
  KeyBenefitsSection,
  ProductShowcaseSection,
  DashboardPreviewSection,
  StatsSection,
  FeaturesSection,
  AITechnologyExplainerSection,
  SuccessStoriesSection,
  ROICalculatorSection,
  IndustrySolutionsSection,
  IntegrationSection,
  SecurityComplianceSection,
  PricingComparisonSection,
  TestimonialsSection,
  AwardsRecognitionSection,
  BlogResourcesSection,
  CTASection
} from '@/components/Home';

export default function HomePage() {
  const theme = useTheme();

  return (
    <Layout>
      {/* JSON-LD structured data for Organization */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'HireGenix',
            url: 'https://www.myhiregenix.com',
            logo: 'https://www.myhiregenix.com/HireGenix-logo-black.png',
            description: 'AI-powered recruitment platform that helps companies find and hire the best talent.',
            sameAs: [
              'https://twitter.com/hiregenix',
              'https://www.linkedin.com/company/hiregenix',
              'https://www.facebook.com/hiregenix'
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-800-123-4567',
              contactType: 'customer service',
              email: 'contact@hiregenix.com'
            }
          })
        }}
      />

      {/* JSON-LD structured data for SoftwareApplication */}
      <Script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'HireGenix Recruitment Platform',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              priceValidUntil: '2025-12-31',
              availability: 'https://schema.org/OnlineOnly'
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '1024'
            }
          })
        }}
      />

      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        sx={{
          display: 'flex',
          flexDirection: 'column'
        }}
        role="main"
        aria-label="HireGenix homepage content"
      >
        {/* Hero Section */}
        <HeroSection />

        {/* Client Logos Section */}
        <ClientLogosSection />

        {/* Key Benefits Section */}
        <KeyBenefitsSection />

        {/* Product Showcase Section */}
        <ProductShowcaseSection />

        {/* Dashboard Preview Section */}
        <DashboardPreviewSection />

        {/* Stats Section */}
        <StatsSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* AI Technology Explainer Section */}
        <AITechnologyExplainerSection />

        {/* Success Stories Section */}
        <SuccessStoriesSection />

        {/* ROI Calculator Section */}
        <ROICalculatorSection />

        {/* Industry Solutions Section */}
        <IndustrySolutionsSection />

        {/* Integration Section */}
        <IntegrationSection />

        {/* Security & Compliance Section */}
        <SecurityComplianceSection />

        {/* Pricing Comparison Section */}
        <PricingComparisonSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Awards & Recognition Section */}
        <AwardsRecognitionSection />

        {/* Blog & Resources Section */}
        <BlogResourcesSection />

        {/* CTA Section */}
        <CTASection />
      </Box>
    </Layout>
  );
}
