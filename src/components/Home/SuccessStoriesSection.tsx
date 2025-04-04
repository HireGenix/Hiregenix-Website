'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  alpha,
  Paper,
  Chip,
  Avatar,
  Rating,
  Button
} from '@mui/material';
import { 
  FormatQuote as FormatQuoteIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const SuccessStoriesSection: React.FC = () => {
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

  // Success stories data with local logo files
  const successStories = [
    {
      company: 'BCCM',
      logo: '/clients/bccm logo.png',
      industry: 'Hospitality',
      quote: 'HireGenix helped us reduce our time-to-hire by 45% and improved the quality of our candidates significantly. The AI matching technology is a game-changer.',
      stats: [
        { label: 'Reduction in Time-to-Hire', value: '45%' },
        { label: 'Increase in Quality Hires', value: '32%' },
        { label: 'Cost Savings', value: '$120K' }
      ],
      person: {
        name: 'Deepak Jha',
        title: 'Director',
        avatar: '/avatars/avatar1.jpg'
      }
    },
    {
      company: 'XS Worldwide',
      logo: '/clients/xs-nxt-light.webp',
      industry: 'Exhibition Industry',
      quote: 'The skills assessment feature has been invaluable for our specialized roles. We\'ve seen a 60% improvement in candidate retention after implementing HireGenix.',
      stats: [
        { label: 'Improvement in Retention', value: '60%' },
        { label: 'Reduction in Bad Hires', value: '75%' },
        { label: 'ROI in First Year', value: '320%' }
      ],
      person: {
        name: 'Kay Madaan',
        title: 'CEO',
        avatar: '/avatars/avatar2.jpg'
      }
    },
    {
      company: 'StartupFlux',
      logo: '/clients/startupflux.svg',
      industry: 'Marketing and Communications',
      quote: 'As a rapidly growing company, we needed to scale our hiring process without sacrificing quality. HireGenix\'s platform allowed us to triple our hiring capacity with the same team.',
      stats: [
        { label: 'Increase in Hiring Capacity', value: '300%' },
        { label: 'Candidate Experience Rating', value: '4.8/5' },
        { label: 'Reduction in Hiring Costs', value: '28%' }
      ],
      person: {
        name: 'Neha Varma',
        title: 'Founder',
        avatar: '/avatars/avatar3.jpg'
      }
    }
  ];

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
          top: '20%',
          left: '10%',
          width: '40%',
          height: '40%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.light, 0.1)} 0%, rgba(255,255,255,0) 70%)`,
          filter: 'blur(60px)',
          zIndex: 1
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip 
            label="SUCCESS STORIES" 
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
            Real Results from Real Companies
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
            See how organizations of all sizes have transformed their recruitment process with HireGenix
          </Typography>
        </Box>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {successStories.map((story, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div variants={itemVariant}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '24px',
                      background: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)',
                        transform: 'translateY(-5px)'
                      }
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 3
                      }}
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '12px',
                          background: 'white',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                          mr: 2
                        }}
                      >
                        <Box
                          component="img"
                          src={story.logo}
                          alt={story.company}
                          sx={{
                            width: 48,
                            height: 48,
                            objectFit: 'contain',
                            display: 'block'
                          }}
                        />
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{
                            fontWeight: 600,
                            fontSize: '1.25rem'
                          }}
                        >
                          {story.company}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                        >
                          {story.industry}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        mb: 3,
                        position: 'relative',
                        pl: 2
                      }}
                    >
                      <FormatQuoteIcon
                        sx={{
                          position: 'absolute',
                          top: -10,
                          left: -15,
                          fontSize: '2rem',
                          color: alpha(theme.palette.primary.main, 0.2),
                          transform: 'rotate(180deg)'
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          fontStyle: 'italic',
                          mb: 2,
                          lineHeight: 1.6
                        }}
                      >
                        "{story.quote}"
                      </Typography>
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 600 }}
                        >
                          {story.person.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                        >
                          {story.person.title}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        p: 2,
                        background: alpha(theme.palette.primary.light, 0.05),
                        borderRadius: '12px',
                        mb: 3
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          mb: 1.5
                        }}
                      >
                        Key Results:
                      </Typography>
                      <Grid container spacing={2}>
                        {story.stats.map((stat, idx) => (
                          <Grid item xs={4} key={idx}>
                            <Box
                              sx={{
                                textAlign: 'center'
                              }}
                            >
                              <Typography
                                variant="h6"
                                sx={{
                                  fontWeight: 700,
                                  color: theme.palette.primary.main
                                }}
                              >
                                {stat.value}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                                sx={{
                                  fontSize: '0.7rem',
                                  display: 'block'
                                }}
                              >
                                {stat.label}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>

                    <Box sx={{ mt: 'auto' }}>
                      <Button
                        variant="text"
                        color="primary"
                        endIcon={<ArrowForwardIcon />}
                        component={Link}
                        href="/case-studies"
                        sx={{
                          p: 0,
                          fontWeight: 600,
                          '&:hover': {
                            background: 'transparent',
                            transform: 'translateX(5px)'
                          }
                        }}
                      >
                        Read Full Case Study
                      </Button>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
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
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={Link}
              href="/case-studies"
              sx={{
                py: 1.5,
                px: 4,
                borderRadius: '50px',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
                }
              }}
            >
              View All Success Stories
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};
