'use client';

import React from 'react';
import { useTheme } from '@mui/material';
import { SEOMetadata } from '@/components/SEO';
import { Layout } from '@/components/Layout';
import { CaseStudiesHero } from '../../components/CaseStudies/CaseStudiesHero';
import { CaseStudiesList } from '../../components/CaseStudies/CaseStudiesList';
import { CaseStudiesCTA } from '../../components/CaseStudies/CaseStudiesCTA';

export default function CaseStudiesPage() {
  const theme = useTheme();

  const seoData = {
    title: 'Case Studies - HireGenix Success Stories',
    description: 'Explore real-world success stories from companies that have transformed their recruitment process with HireGenix\'s AI-powered platform.',
    keywords: 'HireGenix case studies, recruitment success stories, AI recruitment results, hiring success, recruitment case studies',
  };

  return (
    <Layout>
      <SEOMetadata seoData={seoData} />
      <CaseStudiesHero />
      <CaseStudiesList />
      <CaseStudiesCTA />
    </Layout>
  );
}
