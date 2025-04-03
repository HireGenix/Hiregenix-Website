'use client';

import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Container, Typography, Button, useTheme } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { SEOMetadata } from '@/components/SEO';
import { Layout } from '@/components/Layout';
import { ResourceDetail, ResourcesCTA } from '@/components/Resources';
import { Resource } from '@/components/Resources/ResourcesList';

// Resources data (same as in resources/page.tsx)
const resourcesData: Resource[] = [
  {
    id: 'ai-recruitment-guide',
    title: 'The Complete Guide to AI Recruitment',
    type: 'E-Book',
    image: '/hero-image.png', // Using placeholder image
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

export default function ResourceDetailPage() {
  const theme = useTheme();
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  
  const [resource, setResource] = useState<Resource | null>(null);
  const [relatedResources, setRelatedResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call to fetch resource data
    setLoading(true);
    
    // Find the resource by ID
    const foundResource = resourcesData.find(r => r.id === id);
    
    if (foundResource) {
      setResource(foundResource);
      
      // Get related resources (same category or type, excluding current resource)
      const related = resourcesData
        .filter(r => 
          r.id !== foundResource.id && 
          (r.category === foundResource.category || r.type === foundResource.type)
        )
        .slice(0, 3);
      
      setRelatedResources(related);
      setError(null);
    } else {
      setError('Resource not found');
    }
    
    setLoading(false);
  }, [id]);

  // SEO data
  const seoData = {
    title: resource ? `${resource.title} - HireGenix Resources` : 'Resource - HireGenix',
    description: resource ? resource.description : 'Download free recruitment resources from HireGenix.',
    keywords: `${resource?.title || ''}, ${resource?.type || ''}, recruitment resources, hiring resources, ${resource?.category || ''}`,
  };

  if (loading) {
    return (
      <Layout>
        <SEOMetadata seoData={seoData} />
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
          <CircularProgress size={60} />
        </Box>
      </Layout>
    );
  }

  if (error || !resource) {
    return (
      <Layout>
        <SEOMetadata seoData={seoData} />
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              {error || 'Resource not found'}
            </Typography>
            <Typography variant="body1" paragraph>
              We couldn't find the resource you're looking for.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              href="/resources"
              startIcon={<ArrowBackIcon />}
              sx={{ mt: 2 }}
            >
              Back to Resources
            </Button>
          </Box>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOMetadata seoData={seoData} />
      
      <Box 
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ResourceDetail 
          resource={resource} 
          relatedResources={relatedResources} 
        />
        <ResourcesCTA />
      </Box>
    </Layout>
  );
}
