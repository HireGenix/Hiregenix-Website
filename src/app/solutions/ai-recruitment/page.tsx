'use client';

import React from 'react';
import { Box } from '@mui/material';
import { Layout } from '@/components/Layout';
import { SEOMetadata } from '@/components/SEO';
import {
  HeroSection,
  BenefitsSection,
  FeaturesSection,
  TechnicalDetailsSection,
  CTASection,
  seoData
} from './components';

export default function AIRecruitmentPage() {
  return (
    <Layout>
      <SEOMetadata seoData={seoData} />

      <Box component="main">
        <HeroSection />
        <BenefitsSection />
        <FeaturesSection />
        <TechnicalDetailsSection />
        <CTASection />
      </Box>
    </Layout>
  );
}
