'use client';

import React from 'react';
import { Layout } from '@/components/Layout';
import { Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
// PageBuilder import removed

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
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
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
