'use client';

import React from 'react';
import { useTheme } from '@mui/material';
import { SEOMetadata } from '@/components/SEO';
import { Layout } from '@/components/Layout';
import { 
  SolutionsHero,
  SolutionsStats,
  SolutionsFeatures,
  SolutionsTestimonials,
  SolutionsCTA
} from '@/components/Solutions';

export default function SolutionsPage() {
  const theme = useTheme();

  const seoData = {
    title: 'HireGenix Solutions - AI Recruitment, Assessments & More',
    description: 'Explore HireGenix\'s comprehensive recruitment solutions including AI-powered recruitment, candidate assessment, video interviews, and talent analytics.',
    keywords: 'recruitment solutions, AI recruitment, candidate assessment, video interviews, talent analytics, hiring platform',
  };

  return (
    <Layout>
      <SEOMetadata seoData={seoData} />
      <SolutionsHero />
      <SolutionsStats />
      <SolutionsFeatures />
      <SolutionsTestimonials />
      <SolutionsCTA />
    </Layout>
  );
}
