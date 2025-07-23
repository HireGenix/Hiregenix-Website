'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
  useTheme,
  alpha
} from '@mui/material';
import {
  Speed as SpeedIcon,
  CheckCircle as CheckCircleIcon,
  Diversity3 as DiversityIcon,
  Analytics as AnalyticsIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Key benefits data
const keyBenefits = [
  {
    title: '50% Faster Hiring',
    description: 'Cut your time-to-hire in half with AI-powered candidate matching and automated screening.',
    icon: <SpeedIcon fontSize="large" />,
    color: '#2196f3' // primary
  },
  {
    title: 'Better Quality Hires',
    description: 'Find candidates who are not just qualified on paper but are great cultural fits for your organization.',
    icon: <CheckCircleIcon fontSize="large" />,
    color: '#4caf50' // success
  },
  {
    title: 'Reduced Hiring Bias',
    description: 'Our AI algorithms are designed to minimize unconscious bias in the recruitment process.',
    icon: <DiversityIcon fontSize="large" />,
    color: '#ff9800' // warning
  },
  {
    title: 'Data-Driven Decisions',
    description: 'Make hiring decisions based on objective data rather than gut feelings or subjective impressions.',
    icon: <AnalyticsIcon fontSize="large" />,
    color: '#f44336' // error
  }
];

export const KeyBenefitsSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.palette.background.default
      }}
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUpVariant}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            label="KEY BENEFITS"
            color="primary"
            size="small"
            sx={{
              mb: 2,
              fontWeight: 600,
              background: alpha(theme.palette.primary.main, 0.1),
              border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
              color: theme.palette.primary.main
            }}
          />
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2rem', md: '2.75rem' }
            }}
          >
            Transform Your Recruitment Process
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="text.secondary"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              fontWeight: 400
            }}
          >
            Our AI-powered platform helps you find the best talent faster and more accurately
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {keyBenefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 4,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 70,
                    height: 70,
                    borderRadius: '50%',
                    background: alpha(benefit.color, 0.1),
                    color: benefit.color,
                    mb: 3
                  }}
                >
                  {benefit.icon}
                </Box>
                <Typography variant="h5" component="h3" fontWeight={600} gutterBottom>
                  {benefit.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {benefit.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default KeyBenefitsSection;
