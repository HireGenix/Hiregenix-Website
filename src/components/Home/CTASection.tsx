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
  Paper
} from '@mui/material';
import {
  ArrowForward as ArrowForwardIcon,
  CheckCircle as CheckCircleIcon
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

const fadeInLeftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const fadeInRightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Features list
const features = [
  'Free 14-day trial, no credit card required',
  'Unlimited job postings during trial',
  'Full access to all features',
  'Dedicated support team',
  'Easy setup and onboarding',
  'Cancel anytime'
];

export const CTASection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
        color: 'white',
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
          opacity: 0.05,
          backgroundImage: 'url(/hero-pattern.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}
      />

      {/* Animated shapes */}
      <Box
        component={motion.div}
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.secondary.main} 0%, rgba(255,255,255,0) 70%)`,
          zIndex: 0,
          filter: 'blur(50px)'
        }}
      />

      <Box
        component={motion.div}
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: 250,
          height: 250,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.secondary.light} 0%, rgba(255,255,255,0) 70%)`,
          zIndex: 0,
          filter: 'blur(50px)'
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid 
            item 
            xs={12} 
            md={6}
            component={motion.div}
            variants={fadeInLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Box sx={{ pr: { md: 4 } }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2
                }}
              >
                Ready to Transform Your Recruitment Process?
              </Typography>
              
              <Typography
                variant="h5"
                component="p"
                sx={{
                  fontWeight: 400,
                  mb: 4,
                  opacity: 0.9,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  lineHeight: 1.6
                }}
              >
                Join thousands of companies that have already revolutionized their hiring with HireGenix. Start your free trial today and experience the difference.
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Grid container spacing={2}>
                  {features.map((feature, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CheckCircleIcon sx={{ color: theme.palette.secondary.main, mr: 1.5 }} />
                        <Typography variant="body1" fontWeight={500}>
                          {feature}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  component={Link}
                  href="/auth/signup"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '1rem',
                    fontWeight: 600,
                    borderRadius: '50px',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 25px rgba(0, 0, 0, 0.3)'
                    }
                  }}
                >
                  Start Free Trial
                </Button>
                
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  component={Link}
                  href="/contact"
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '1rem',
                    fontWeight: 600,
                    borderRadius: '50px',
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transform: 'translateY(-3px)'
                    }
                  }}
                >
                  Contact Sales
                </Button>
              </Box>
            </Box>
          </Grid>
          
          <Grid 
            item 
            xs={12} 
            md={6}
            component={motion.div}
            variants={fadeInRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 4,
                background: alpha('#ffffff', 0.05),
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 80px rgba(0, 0, 0, 0.2)',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  opacity: 0.05,
                  backgroundImage: 'url(/hero-pattern.svg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  zIndex: 0
                }}
              />
              
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    textAlign: 'center'
                  }}
                >
                  Enterprise Solutions
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    textAlign: 'center',
                    opacity: 0.9
                  }}
                >
                  Need a custom solution for your large organization? Our enterprise plan includes:
                </Typography>
                
                <Box sx={{ mb: 4 }}>
                  {[
                    'Dedicated account manager',
                    'Custom integration with your existing systems',
                    'Advanced analytics and reporting',
                    'Custom AI model training',
                    'Unlimited users and job postings',
                    'Priority 24/7 support'
                  ].map((feature, index) => (
                    <Box 
                      key={index} 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        mb: 2,
                        background: alpha('#ffffff', 0.05),
                        p: 2,
                        borderRadius: 2
                      }}
                    >
                      <CheckCircleIcon sx={{ color: theme.palette.secondary.main, mr: 1.5 }} />
                      <Typography variant="body1" fontWeight={500}>
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                
                <Box sx={{ textAlign: 'center' }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    component={Link}
                    href="/contact"
                    sx={{
                      py: 1.5,
                      px: 4,
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderRadius: '50px',
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 12px 25px rgba(0, 0, 0, 0.3)'
                      }
                    }}
                  >
                    Request Demo
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CTASection;
