'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  alpha,
  Chip,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';

export const CaseStudiesHero: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: `linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%)`,
        color: 'white',
        pt: { xs: 12, md: 0 },
        pb: { xs: 10, md: 0 }
      }}
    >
      {/* Geometric pattern overlay */}
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
          zIndex: 1
        }}
      />

      {/* Animated gradient orbs */}
      <Box
        component={motion.div}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5 }}
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: { xs: 200, md: 400 },
          height: { xs: 200, md: 400 },
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}80 0%, rgba(0,0,0,0) 70%)`,
          filter: 'blur(80px)',
          zIndex: 1,
          animation: 'pulse 8s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { transform: 'scale(1)', opacity: 0.2 },
            '50%': { transform: 'scale(1.1)', opacity: 0.3 }
          }
        }}
      />

      <Box
        component={motion.div}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: { xs: 150, md: 300 },
          height: { xs: 150, md: 300 },
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.secondary.main}80 0%, rgba(0,0,0,0) 70%)`,
          filter: 'blur(80px)',
          zIndex: 1,
          animation: 'pulse2 10s ease-in-out infinite',
          '@keyframes pulse2': {
            '0%, 100%': { transform: 'scale(1)', opacity: 0.15 },
            '50%': { transform: 'scale(1.15)', opacity: 0.25 }
          }
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8} sx={{ mx: 'auto', textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Chip
                label="CASE STUDIES"
                sx={{
                  mb: 3,
                  py: 2,
                  px: 2,
                  borderRadius: '50px',
                  background: `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                }}
              />

              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 800,
                  mb: 3,
                  background: `linear-gradient(90deg, #FFFFFF 0%, ${theme.palette.primary.light} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em'
                }}
              >
                Success Stories from Our Clients
              </Typography>

              <Typography
                variant="h5"
                component="p"
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  fontWeight: 400,
                  mb: 4,
                  color: 'rgba(255, 255, 255, 0.8)',
                  maxWidth: 800,
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                Discover how organizations of all sizes have transformed their recruitment
                processes and achieved remarkable results with HireGenix's AI-powered platform.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
