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
  Chip
} from '@mui/material';
import {
  EmojiEvents as EmojiEventsIcon,
  Star as StarIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

export const AwardsRecognitionSection: React.FC = () => {
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

  // Awards data with official logo URLs
  const awards = [
    {
      title: 'Best AI Recruitment Platform',
      organization: 'HR Tech Awards',
      year: '2025',
      description: 'Recognized for innovation in AI-powered candidate matching and assessment technology.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Award_icon.svg/1200px-Award_icon.svg.png'
    },
    {
      title: 'Top 10 HR Technology Solutions',
      organization: 'Enterprise Technology Review',
      year: '2024',
      description: 'Named one of the top HR technology solutions transforming the recruitment landscape.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Technology_logo.svg/1200px-Technology_logo.svg.png'
    },
    {
      title: 'Excellence in User Experience',
      organization: 'SaaS Breakthrough Awards',
      year: '2024',
      description: 'Awarded for exceptional user experience design in recruitment software.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/UX_logo.svg/1200px-UX_logo.svg.png'
    },
    {
      title: 'Most Innovative AI Application',
      organization: 'AI Breakthrough Awards',
      year: '2024',
      description: 'Recognized for groundbreaking application of artificial intelligence in recruitment.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/AI_logo.svg/1200px-AI_logo.svg.png'
    }
  ];

  // Recognition data with local logo files
  const recognitions = [
    {
      quote: 'HireGenix is revolutionizing how companies find and hire talent with its sophisticated AI matching algorithms.',
      source: 'Forbes',
      logo: '/clients/png-transparent-forbes-logo-entrepreneurship-startup-company-church-candles-company-text-trademark.png',
      link: 'https://www.forbes.com'
    },
    {
      quote: 'One of the most promising HR tech startups to watch, with technology that could transform the recruitment industry.',
      source: 'TechCrunch',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/TechCrunch_logo.svg/1200px-TechCrunch_logo.svg.png',
      link: 'https://www.techcrunch.com'
    },
    {
      quote: 'HireGenix stands out in the crowded HR tech space with its focus on both efficiency and candidate experience.',
      source: 'HR Executive',
      logo: '/clients/human-resource-executive-top-hr-products-human-resource.png',
      link: 'https://www.hrexecutive.com'
    }
  ];

  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '40%',
          right: '10%',
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
            label="AWARDS & RECOGNITION" 
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
            Award-Winning Platform
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
            Recognized for excellence and innovation in recruitment technology
          </Typography>
        </Box>

        {/* Awards Section */}
        <Box sx={{ mb: 10 }}>
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={4}>
              {awards.map((award, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div variants={itemVariant}>
                    <Paper
                      elevation={0}
                      sx={{
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
                        },
                        p: 3
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 2
                        }}
                      >
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '12px',
                            background: alpha(theme.palette.primary.main, 0.1),
                            mr: 2
                          }}
                        >
                          <EmojiEventsIcon
                            sx={{
                              color: theme.palette.primary.main,
                              fontSize: '1.75rem'
                            }}
                          />
                        </Box>
                        <Box>
                          <Typography
                            variant="subtitle2"
                            color="text.secondary"
                            sx={{
                              fontSize: '0.75rem',
                              fontWeight: 500
                            }}
                          >
                            {award.organization}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 600
                            }}
                          >
                            {award.year}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 700,
                          mb: 2,
                          lineHeight: 1.3
                        }}
                      >
                        {award.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mb: 3,
                          flexGrow: 1
                        }}
                      >
                        {award.description}
                      </Typography>
                      <Box
                        component="img"
                        src={award.logo}
                        alt={`${award.title} logo`}
                        sx={{
                          height: 40,
                          objectFit: 'contain',
                          alignSelf: 'center',
                          opacity: 0.8
                        }}
                      />
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>

        {/* Recognition Section */}
        <Box>
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontWeight: 700,
              mb: 4,
              textAlign: 'center',
              fontSize: { xs: '1.5rem', md: '2rem' }
            }}
          >
            Industry Recognition
          </Typography>
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={4}>
              {recognitions.map((recognition, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div variants={itemVariant}>
                    <Paper
                      elevation={0}
                      sx={{
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
                        },
                        p: 4
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          mb: 3
                        }}
                      >
                        <Box
                          component="img"
                          src={recognition.logo}
                          alt={`${recognition.source} logo`}
                          sx={{
                            height: 40,
                            objectFit: 'contain'
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          mb: 3
                        }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            sx={{
                              color: theme.palette.warning.main,
                              fontSize: '1.25rem',
                              mx: 0.25
                            }}
                          />
                        ))}
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          fontStyle: 'italic',
                          mb: 3,
                          textAlign: 'center',
                          lineHeight: 1.7,
                          flexGrow: 1
                        }}
                      >
                        "{recognition.quote}"
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          textAlign: 'center'
                        }}
                      >
                        {recognition.source}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>

        {/* Metrics Section */}
        <Box
          sx={{
            mt: 10,
            textAlign: 'center'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: '24px',
                background: alpha(theme.palette.primary.light, 0.05),
                border: `1px solid ${alpha(theme.palette.primary.light, 0.1)}`,
                display: 'inline-block',
                width: '100%'
              }}
            >
              <Grid container spacing={4}>
                {[
                  { value: '98%', label: 'Customer Satisfaction' },
                  { value: '4.8/5', label: 'Average Rating' },
                  { value: '500+', label: 'Enterprise Clients' },
                  { value: '30+', label: 'Countries' }
                ].map((metric, index) => (
                  <Grid item xs={6} md={3} key={index}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        color: theme.palette.primary.main,
                        mb: 1
                      }}
                    >
                      {metric.value}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                    >
                      {metric.label}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};
