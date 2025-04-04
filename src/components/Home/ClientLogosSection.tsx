'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  alpha,
  Chip
} from '@mui/material';
import { motion } from 'framer-motion';

export const ClientLogosSection: React.FC = () => {
  const theme = useTheme();

  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  // Client logos data with official logo URLs
  const clients = [
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', tier: 'Enterprise' },
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', tier: 'Enterprise' },
    { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg', tier: 'Enterprise' },
    { name: 'Adobe', logo: '/clients/adobe-logo.png', tier: 'Enterprise' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', tier: 'Enterprise' },
    { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg', tier: 'Enterprise' },
    { name: 'Slack', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg', tier: 'Growth' },
    { name: 'Uber', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg', tier: 'Growth' },
    { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg', tier: 'Growth' },
    { name: 'Shopify', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg', tier: 'Growth' },
    { name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg', tier: 'Growth' },
    { name: 'Airbnb', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg', tier: 'Growth' }
  ];

  // Group clients by tier
  const enterpriseClients = clients.filter(client => client.tier === 'Enterprise');
  const growthClients = clients.filter(client => client.tier === 'Growth');

  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        background: 'linear-gradient(180deg, rgba(250,250,250,1) 0%, rgba(255,255,255,1) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '40%',
          right: '15%',
          width: '30%',
          height: '30%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.light, 0.1)} 0%, rgba(255,255,255,0) 70%)`,
          filter: 'blur(60px)',
          zIndex: 1
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip 
            label="TRUSTED BY INDUSTRY LEADERS" 
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
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
              mb: 2,
              background: `linear-gradient(90deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Powering Recruitment at Leading Companies
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="text.secondary"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              fontWeight: 400,
              maxWidth: 700,
              mx: 'auto',
              mb: 6
            }}
          >
            Join thousands of companies that trust HireGenix to find and hire the best talent
          </Typography>
        </Box>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Enterprise Clients */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h4"
              component="h3"
              sx={{
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                fontWeight: 600,
                mb: 4,
                textAlign: 'center',
                color: theme.palette.text.primary
              }}
            >
              Enterprise
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {enterpriseClients.map((client, index) => (
                <Grid item xs={6} sm={4} md={2} key={index}>
                  <motion.div variants={itemVariant}>
                    <Box
                      sx={{
                        height: 100,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 2,
                        borderRadius: '16px',
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)',
                          transform: 'translateY(-5px)'
                        }
                      }}
                    >
                      <Box
                        component="img"
                        src={client.logo}
                        alt={client.name}
                        sx={{
                          maxWidth: '80%',
                          maxHeight: '60%',
                          objectFit: 'contain',
                          filter: 'grayscale(100%)',
                          opacity: 0.7,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            filter: 'grayscale(0%)',
                            opacity: 1
                          }
                        }}
                      />
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Growth Clients */}
          <Box>
            <Typography
              variant="h4"
              component="h3"
              sx={{
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                fontWeight: 600,
                mb: 4,
                textAlign: 'center',
                color: theme.palette.text.primary
              }}
            >
              Growth
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {growthClients.map((client, index) => (
                <Grid item xs={6} sm={4} md={2} key={index}>
                  <motion.div variants={itemVariant}>
                    <Box
                      sx={{
                        height: 100,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 2,
                        borderRadius: '16px',
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)',
                          transform: 'translateY(-5px)'
                        }
                      }}
                    >
                      <Box
                        component="img"
                        src={client.logo}
                        alt={client.name}
                        sx={{
                          maxWidth: '80%',
                          maxHeight: '60%',
                          objectFit: 'contain',
                          filter: 'grayscale(100%)',
                          opacity: 0.7,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            filter: 'grayscale(0%)',
                            opacity: 1
                          }
                        }}
                      />
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>

        <Box
          sx={{
            textAlign: 'center',
            mt: 8
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: 700,
                mx: 'auto',
                fontStyle: 'italic'
              }}
            >
              "HireGenix has transformed our recruitment process. We've reduced our time-to-hire by 45% and improved the quality of our hires significantly."
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mt: 2
              }}
            >
              <Box
                component="img"
                src="/avatars/avatar1.jpg"
                alt="Sarah Johnson"
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  mr: 1.5,
                  border: '2px solid white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.text.primary
                  }}
                >
                  Sarah Johnson
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                >
                  HR Director, TechCorp
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};
