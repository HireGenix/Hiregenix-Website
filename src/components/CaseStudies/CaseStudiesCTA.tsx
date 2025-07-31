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
} from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';

export const CaseStudiesCTA: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0.05)} 0%, ${alpha(theme.palette.secondary.dark, 0.1)} 100%)`,
        position: 'relative',
        overflow: 'hidden',
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
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={10} lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 4, md: 6 },
                  borderRadius: '24px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: 'center',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)',
                }}
              >
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: { xs: '2rem', md: '2.5rem' },
                  }}
                >
                  Ready to Transform Your Recruitment Process?
                </Typography>

                <Typography
                  variant="h6"
                  component="p"
                  color="text.secondary"
                  sx={{
                    mb: 5,
                    maxWidth: 700,
                    mx: 'auto',
                    lineHeight: 1.6,
                    fontWeight: 400,
                  }}
                >
                  Join the hundreds of companies that have revolutionized their hiring with HireGenix's AI-powered platform. Schedule a demo today to see how we can help you find the best talent faster.
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    component={Link}
                    href="/contact"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: '50px',
                      fontWeight: 600,
                      background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                      },
                    }}
                  >
                    Schedule a Demo
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    component={Link}
                    href="/pricing"
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: '50px',
                      fontWeight: 600,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.05)',
                      },
                    }}
                  >
                    View Pricing
                  </Button>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
