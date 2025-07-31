'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
  alpha,
  Paper,
  Card,
  CardContent,
  Chip
} from '@mui/material';
import {
  PlayArrow as PlayArrowIcon,
  ArrowForward as ArrowForwardIcon,
  Assessment as AssessmentIcon,
  PersonSearch as PersonSearchIcon,
  VideoCall as VideoCallIcon,
  Analytics as AnalyticsIcon,
  Speed as SpeedIcon,
  AutoAwesome as AutoAwesomeIcon
} from '@mui/icons-material';
import Link from 'next/link';
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Demo features
const demoFeatures = [
  {
    icon: <PersonSearchIcon fontSize="large" />,
    title: 'Smart Candidate Matching',
    description: 'Experience AI-powered candidate matching in action',
    step: 'Step 1'
  },
  {
    icon: <AssessmentIcon fontSize="large" />,
    title: 'Skills Assessment',
    description: 'See how our assessment engine evaluates candidates',
    step: 'Step 2'
  },
  {
    icon: <VideoCallIcon fontSize="large" />,
    title: 'Video Interview Analysis',
    description: 'Watch AI analyze interview performance',
    step: 'Step 3'
  },
  {
    icon: <AnalyticsIcon fontSize="large" />,
    title: 'Workforce Analytics',
    description: 'Explore comprehensive recruitment analytics',
    step: 'Step 4'
  }
];

// Demo stats
const demoStats = [
  { value: '5 min', label: 'Interactive Demo' },
  { value: '100%', label: 'Real-time Experience' },
  { value: '4 Steps', label: 'Complete Workflow' }
];

export const LiveDemoCTASection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.03)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.02,
          backgroundImage: 'url(/hero-pattern.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}
      />

      {/* Animated gradient orbs */}
      <Box
        component={motion.div}
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main} 0%, rgba(255,255,255,0) 70%)`,
          zIndex: 0,
          filter: 'blur(50px)'
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section */}
        <Box
          sx={{ textAlign: 'center', mb: 8 }}
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariant}
        >
          <Chip
            label="INTERACTIVE DEMO"
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
              fontSize: { xs: '2rem', md: '2.75rem' },
              background: `linear-gradient(90deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Experience HireGenix in Action
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="text.secondary"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              fontWeight: 400,
              mb: 4
            }}
          >
            Take our interactive demo for a spin and see how our AI-powered platform revolutionizes the recruitment process from start to finish.
          </Typography>

          {/* Demo Stats */}
          <Grid container spacing={2} justifyContent="center" sx={{ mb: 6 }}>
            {demoStats.map((stat, index) => (
              <Grid item xs={4} sm={2} key={index}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  sx={{
                    textAlign: 'center',
                    p: 2,
                    borderRadius: 2,
                    background: alpha(theme.palette.background.paper, 0.7),
                    border: '1px solid',
                    borderColor: 'divider'
                  }}
                >
                  <Typography
                    variant="h4"
                    component="p"
                    sx={{
                      fontSize: { xs: '1.5rem', md: '2rem' },
                      fontWeight: 700,
                      mb: 0.5,
                      color: theme.palette.primary.main
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontWeight: 500 }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* CTA Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
            <Button
              component={Link}
              href="/demo"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<PlayArrowIcon />}
              endIcon={<ArrowForwardIcon />}
              sx={{
                py: 1.5,
                px: 4,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '50px',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
                background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
                }
              }}
            >
              Try Live Demo
            </Button>
            <Button
              component={Link}
              href="/contact"
              variant="outlined"
              color="primary"
              size="large"
              sx={{
                py: 1.5,
                px: 4,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '50px',
                borderWidth: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  borderWidth: 2
                }
              }}
            >
              Schedule Personal Demo
            </Button>
          </Box>
        </Box>

        {/* Demo Features Grid */}
        <Box
          component={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            component="h3"
            sx={{
              textAlign: 'center',
              fontWeight: 600,
              mb: 6,
              fontSize: { xs: '1.5rem', md: '2rem' }
            }}
          >
            What You&apos;ll Experience
          </Typography>

          <Grid container spacing={4}>
            {demoFeatures.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: alpha(theme.palette.divider, 0.5),
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                      borderColor: theme.palette.primary.main
                    }
                  }}
                  component={motion.div}
                  variants={fadeInUpVariant}
                >
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <Box sx={{ position: 'relative', mb: 3 }}>
                      <Chip
                        label={feature.step}
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: -10,
                          right: -10,
                          background: theme.palette.primary.main,
                          color: 'white',
                          fontWeight: 600,
                          fontSize: '0.75rem'
                        }}
                      />
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          background: alpha(theme.palette.primary.main, 0.1),
                          color: theme.palette.primary.main,
                          mx: 'auto',
                          mb: 2
                        }}
                      >
                        {feature.icon}
                      </Box>
                    </Box>
                    <Typography variant="h6" component="h4" fontWeight={600} gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Bottom CTA */}
        <Box
          sx={{
            mt: 8,
            p: 4,
            borderRadius: 4,
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
            border: '1px solid',
            borderColor: alpha(theme.palette.primary.main, 0.2),
            textAlign: 'center'
          }}
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            <AutoAwesomeIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
            <Typography variant="h5" component="h3" fontWeight={600}>
              Ready to Transform Your Recruitment?
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}>
            The demo takes just 5 minutes and shows you exactly how HireGenix can streamline your hiring process with AI-powered insights.
          </Typography>
          <Button
            component={Link}
            href="/demo"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SpeedIcon />}
            sx={{
              py: 1.5,
              px: 4,
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '50px',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)'
            }}
          >
            Start Demo Now - It&apos;s Free!
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default LiveDemoCTASection;