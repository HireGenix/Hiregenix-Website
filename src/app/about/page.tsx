'use client';

import React from 'react';
import { useTheme } from '@mui/material';
import { SEOMetadata } from '@/components/SEO';
import { Layout } from '@/components/Layout';
import { 
  AboutHero, 
  AboutStory,
  AboutMission,
  AboutTimeline,
  AboutGlobalPresence,
  AboutValues,
  AboutTeam,
  AboutStats,
  AboutTechnology
} from '@/components/About';

export default function AboutPage() {
  const theme = useTheme();

  const seoData = {
    title: 'About HireGenix - Our Story, Team & Mission',
    description: 'Learn about HireGenix, our mission to transform recruitment with AI technology, our team of experts, and our company values.',
    keywords: 'about HireGenix, recruitment platform, AI recruitment, HireGenix team, recruitment technology',
  };

  return (
    <Layout>
      <SEOMetadata seoData={seoData} />
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutTimeline />
      <AboutGlobalPresence />
      <AboutValues />
      <AboutTeam />
      <AboutTechnology />
      <AboutStats />
    </Layout>
  );
}
