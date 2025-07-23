'use client';

import React, { useState, useEffect } from 'react';
import { Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { SEOMetadata } from '@/components/SEO';
import { Layout } from '@/components/Layout';
import { ResourcesHero, ResourcesList, ResourcesCTA } from '@/components/Resources';
import { Resource } from '@/components/Resources/ResourcesList';

// Resources data
const resourcesData: Resource[] = [
  {
    id: 'ai-recruitment-guide',
    title: 'The Complete Guide to AI Recruitment',
    type: 'E-Book',
    image: '/hero-image.png',
    description: 'A comprehensive guide to implementing AI in your recruitment process.',
    downloadLink: '/resources/ai-recruitment-guide.html',
    featured: true,
    category: 'Recruitment',
    dateAdded: '2025-03-15',
  },
  {
    id: 'metrics-dashboard-template',
    title: 'Recruitment Metrics Dashboard Template',
    type: 'Template',
    image: '/hero-image.png', // Using placeholder image
    description: 'Track your key recruitment metrics with this ready-to-use dashboard template.',
    downloadLink: '/resources/metrics-dashboard-template.html',
    category: 'Analytics',
    dateAdded: '2025-03-10',
  },
  {
    id: 'roi-whitepaper',
    title: 'The ROI of Modern Recruitment Technology',
    type: 'Whitepaper',
    image: '/hero-image.png', // Using placeholder image
    description: 'Research-backed analysis of the return on investment from recruitment technology.',
    downloadLink: '/resources/roi-whitepaper.html',
    category: 'Analytics',
    dateAdded: '2025-03-05',
  },
  {
    id: 'candidate-experience-checklist',
    title: 'Candidate Experience Improvement Checklist',
    type: 'Checklist',
    image: '/hero-image.png', // Using placeholder image
    description: 'Step-by-step guide to enhancing your candidate experience.',
    downloadLink: '/resources/candidate-experience-checklist.html',
    category: 'Recruitment',
    dateAdded: '2025-02-28',
  },
  {
    id: 'interview-questions-guide',
    title: '50 Essential Interview Questions for Tech Roles',
    type: 'Guide',
    image: '/hero-image.png', // Using placeholder image
    description: 'Curated list of effective interview questions for technical positions.',
    downloadLink: '#', // Not implemented yet
    category: 'Interviews',
    dateAdded: '2025-02-20',
  },
  {
    id: 'diversity-hiring-toolkit',
    title: 'Diversity & Inclusion Hiring Toolkit',
    type: 'Toolkit',
    image: '/hero-image.png', // Using placeholder image
    description: 'Comprehensive resources to build more diverse and inclusive teams.',
    downloadLink: '#', // Not implemented yet
    featured: true,
    category: 'Hiring',
    dateAdded: '2025-02-15',
  },
  {
    id: 'onboarding-template',
    title: 'New Employee Onboarding Template',
    type: 'Template',
    image: '/hero-image.png', // Using placeholder image
    description: 'Streamline your onboarding process with this customizable template.',
    downloadLink: '#', // Not implemented yet
    category: 'Onboarding',
    dateAdded: '2025-02-10',
  },
  {
    id: 'remote-hiring-guide',
    title: 'Remote Hiring Best Practices Guide',
    type: 'E-Book',
    image: '/hero-image.png', // Using placeholder image
    description: 'Learn how to effectively recruit, interview, and onboard remote employees.',
    downloadLink: '#', // Not implemented yet
    category: 'Hiring',
    dateAdded: '2025-02-05',
  }
];

export default function ResourcesPage() {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const seoData = {
    title: 'Free Resources - HireGenix',
    description: 'Download free recruitment resources including guides, templates, checklists, and whitepapers to improve your hiring process.',
    keywords: 'recruitment resources, hiring guides, recruitment templates, HR downloads, free resources',
  };

  return (
    <Layout>
      <SEOMetadata seoData={seoData} />
      
      <Box 
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ResourcesHero onSearch={handleSearch} searchQuery={searchQuery} />
        <ResourcesList 
          resources={resourcesData} 
          loading={loading} 
          searchQuery={searchQuery} 
        />
        <ResourcesCTA />
      </Box>
    </Layout>
  );
}
