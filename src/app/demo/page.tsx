'use client';

import React from 'react';
import { Box } from '@mui/material';
import { SEOMetadata } from '@/components/SEO';
import { Layout } from '@/components/Layout';
import { CinematicDemo } from '@/components/Demo/CinematicDemoNew';

export default function DemoPage() {
  const seoData = {
    title: 'Interactive Demo - HireGenix AI Recruitment Platform | Experience Our Features',
    description: 'Experience HireGenix\'s AI-powered recruitment platform with our interactive cinematic demo. See candidate matching, skills assessment, video interviews, and analytics in a beautiful animated experience.',
    keywords: 'HireGenix demo, AI recruitment demo, interactive demo, candidate matching demo, skills assessment demo, video interview demo, workforce analytics demo, recruitment platform trial, AI hiring platform demo',
    canonical: 'https://www.myhiregenix.com/demo',
    openGraph: {
      title: 'Interactive Demo - HireGenix AI Recruitment Platform',
      description: 'Experience HireGenix\'s AI-powered recruitment platform with our interactive cinematic demo. Beautiful animations showcase all features.',
      url: 'https://www.myhiregenix.com/demo',
      image: '/demo-preview.png',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Interactive Demo - HireGenix AI Recruitment Platform',
      description: 'Experience HireGenix\'s AI-powered recruitment platform with our interactive cinematic demo.',
      image: '/demo-preview.png'
    }
  };

  return (
    <Layout>
      <SEOMetadata seoData={seoData} />
      <Box
        sx={{
          minHeight: '100vh',
          overflow: 'hidden',
        }}
      >
        <CinematicDemo />
      </Box>
    </Layout>
  );
}