// Component interface - Client-side only

export interface Component {
  id: string;
  name: string;
  category: string;
  path: string;
  lastUpdated: string;
}

// Mock data for components
const mockHomeComponents = [
  { id: 'home-1', name: 'Hero Section', category: 'home', path: 'src/components/Home/HeroSection.tsx', lastUpdated: '2025-03-01' },
  { id: 'home-2', name: 'Features Section', category: 'home', path: 'src/components/Home/FeaturesSection.tsx', lastUpdated: '2025-03-02' },
  { id: 'home-3', name: 'Stats Section', category: 'home', path: 'src/components/Home/StatsSection.tsx', lastUpdated: '2025-03-03' },
  { id: 'home-4', name: 'Testimonials Section', category: 'home', path: 'src/components/Home/TestimonialsSection.tsx', lastUpdated: '2025-03-04' },
  { id: 'home-5', name: 'CTA Section', category: 'home', path: 'src/components/Home/CTASection.tsx', lastUpdated: '2025-03-05' },
  { id: 'home-6', name: 'Client Logos Section', category: 'home', path: 'src/components/Home/ClientLogosSection.tsx', lastUpdated: '2025-03-06' },
  { id: 'home-7', name: 'Dashboard Preview', category: 'home', path: 'src/components/Home/DashboardPreview.tsx', lastUpdated: '2025-03-07' },
];

const mockAboutComponents = [
  { id: 'about-1', name: 'About Hero', category: 'about', path: 'src/components/About/AboutHero.tsx', lastUpdated: '2025-03-08' },
  { id: 'about-2', name: 'About Story', category: 'about', path: 'src/components/About/AboutStory.tsx', lastUpdated: '2025-03-09' },
  { id: 'about-3', name: 'About Values', category: 'about', path: 'src/components/About/AboutValues.tsx', lastUpdated: '2025-03-10' },
  { id: 'about-4', name: 'About Team', category: 'about', path: 'src/components/About/AboutTeam.tsx', lastUpdated: '2025-03-11' },
  { id: 'about-5', name: 'About Stats', category: 'about', path: 'src/components/About/AboutStats.tsx', lastUpdated: '2025-03-12' },
  { id: 'about-6', name: 'About Timeline', category: 'about', path: 'src/components/About/AboutTimeline.tsx', lastUpdated: '2025-03-13' },
  { id: 'about-7', name: 'About Technology', category: 'about', path: 'src/components/About/AboutTechnology.tsx', lastUpdated: '2025-03-14' },
  { id: 'about-8', name: 'About Global Presence', category: 'about', path: 'src/components/About/AboutGlobalPresence.tsx', lastUpdated: '2025-03-15' },
];

const mockSolutionsComponents = [
  { id: 'solutions-1', name: 'Solutions Hero', category: 'solutions', path: 'src/components/Solutions/SolutionsHero.tsx', lastUpdated: '2025-03-16' },
  { id: 'solutions-2', name: 'Solutions Features', category: 'solutions', path: 'src/components/Solutions/SolutionsFeatures.tsx', lastUpdated: '2025-03-17' },
  { id: 'solutions-3', name: 'Solutions Stats', category: 'solutions', path: 'src/components/Solutions/SolutionsStats.tsx', lastUpdated: '2025-03-18' },
  { id: 'solutions-4', name: 'Solutions Testimonials', category: 'solutions', path: 'src/components/Solutions/SolutionsTestimonials.tsx', lastUpdated: '2025-03-19' },
  { id: 'solutions-5', name: 'Solutions CTA', category: 'solutions', path: 'src/components/Solutions/SolutionsCTA.tsx', lastUpdated: '2025-03-20' },
];

const mockContactComponents = [
  { id: 'contact-1', name: 'Contact Hero', category: 'contact', path: 'src/components/Contact/ContactHero.tsx', lastUpdated: '2025-03-21' },
  { id: 'contact-2', name: 'Contact Form', category: 'contact', path: 'src/components/Contact/ContactForm.tsx', lastUpdated: '2025-03-22' },
  { id: 'contact-3', name: 'Contact Info', category: 'contact', path: 'src/components/Contact/ContactInfo.tsx', lastUpdated: '2025-03-23' },
  { id: 'contact-4', name: 'Contact FAQ', category: 'contact', path: 'src/components/Contact/ContactFAQ.tsx', lastUpdated: '2025-03-24' },
];

// Function to get all components
export const getAllComponents = (): Component[] => {
  // Combine all mock components
  return [
    ...mockHomeComponents,
    ...mockAboutComponents,
    ...mockSolutionsComponents,
    ...mockContactComponents,
  ];
};

// Function to get a component by ID
export const getComponentById = (id: string): Component | null => {
  const components = getAllComponents();
  return components.find(component => component.id === id) || null;
};

// Function to get component code
export const getComponentCode = (filePath: string): string => {
  // In a real implementation, this would fetch the file content from an API
  // For now, return a placeholder
  return `// This is a mock component code for ${filePath}
import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export default function Component() {
  return (
    <Container>
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Component from ${filePath}
        </Typography>
        <Typography variant="body1">
          This is a placeholder for the actual component code.
        </Typography>
      </Box>
    </Container>
  );
}`;
};

// Function to update component code
export const updateComponentCode = (filePath: string, code: string): boolean => {
  // In a real implementation, this would send the code to an API to update the file
  console.log(`Mock updating file ${filePath} with new code`);
  return true;
};
