'use client';

import React from 'react';
import { Box } from '@mui/material';
import { SEOMetadata } from '@/components/SEO';
import { Layout } from '@/components/Layout';
import { 
  ContactHero, 
  ContactInfo, 
  ContactForm, 
  ContactFAQ 
} from '@/components/Contact';

export default function ContactPage() {
  const seoData = {
    title: 'Contact HireGenix - Get in Touch with Our Team',
    description: 'Contact HireGenix for inquiries about our AI-powered recruitment platform. Request a demo, get support, or learn more about our solutions.',
    keywords: 'contact HireGenix, recruitment platform support, AI recruitment demo, HireGenix sales',
  };

  return (
    <Layout>
      <SEOMetadata seoData={seoData} />
      
      <Box component="main">
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <ContactFAQ />
      </Box>
    </Layout>
  );
}
