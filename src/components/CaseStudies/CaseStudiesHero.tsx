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
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0.05)} 0%, ${alpha(theme.palette.secondary.dark, 0.1)} 100%)`,
      }}
    >
      {/* Background elements */}
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
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8} sx={{ mx: 'auto', textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Chip
                label="CASE STUDIES"
                color="primary"
                size="small"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  background: alpha(theme.palette.primary.main, 0.1),
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                  color: theme.palette.primary.main,
                }}
              />

              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 800,
                  mb: 3,
                  background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Success Stories from Our Clients
              </Typography>

              <Typography
                variant="h5"
                component="p"
                color="text.secondary"
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  fontWeight: 400,
                  mb: 4,
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
