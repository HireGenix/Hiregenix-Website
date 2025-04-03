'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
  alpha,
  Chip
} from '@mui/material';
import {
  Analytics as AnalyticsIcon,
  CheckCircle as CheckCircleIcon,
  TrendingUp as TrendingUpIcon,
  Search as SearchIcon,
  Psychology as PsychologyIcon,
  Diversity3 as DiversityIcon,
  Language as LanguageIcon,
  Speed as SpeedIcon,
  ArrowForward as ArrowForwardIcon,
  Code as CodeIcon,
  DataObject as DataObjectIcon,
  Bolt as BoltIcon,
  Lightbulb as LightbulbIcon
} from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { SEOMetadata } from '@/components/SEO';

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
      duration: 0.7,
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
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Benefits data
const benefits = [
  {
    title: '50% Faster Hiring Process',
    description: 'Reduce time-to-hire by automatically identifying the most qualified candidates from your talent pool.',
    icon: <SpeedIcon fontSize="large" />
  },
  {
    title: 'Improved Candidate Quality',
    description: 'Find candidates who are not just qualified on paper but are also great cultural fits for your organization.',
    icon: <CheckCircleIcon fontSize="large" />
  },
  {
    title: 'Reduced Hiring Bias',
    description: 'Our AI algorithms are designed to minimize unconscious bias in the recruitment process.',
    icon: <DiversityIcon fontSize="large" />
  },
  {
    title: 'Data-Driven Decisions',
    description: 'Make hiring decisions based on objective data rather than gut feelings or subjective impressions.',
    icon: <AnalyticsIcon fontSize="large" />
  }
];

// Features data
const features = [
  {
    title: 'Semantic Skills Matching',
    description: 'Our AI understands the meaning behind skills and experience, not just keyword matching. It can identify candidates with transferable skills and potential, even if they don\'t use the exact terminology in their resumes.',
    icon: <SearchIcon />,
    details: [
      'Contextual understanding of skills and experience',
      'Recognition of transferable skills across industries',
      'Identification of skill synonyms and related competencies',
      'Semantic understanding of job requirements'
    ]
  },
  {
    title: 'Career Trajectory Prediction',
    description: 'Predict a candidate\'s potential for growth and success in your organization based on their career path, learning velocity, and adaptability to new challenges.',
    icon: <TrendingUpIcon />,
    details: [
      'Analysis of career progression patterns',
      'Identification of high-potential candidates',
      'Prediction of long-term performance and retention',
      'Assessment of learning agility and adaptability'
    ]
  },
  {
    title: 'Cultural Fit Assessment',
    description: 'Evaluate how well a candidate\'s values, work style, and personality align with your organization\'s culture and the specific team they would join.',
    icon: <PsychologyIcon />,
    details: [
      'Analysis of communication style and values',
      'Team dynamics compatibility assessment',
      'Work environment preferences matching',
      'Organizational values alignment'
    ]
  },
  {
    title: 'Multilingual Resume Analysis',
    description: 'Our AI can analyze resumes in multiple languages, making it easier to recruit globally and tap into diverse talent pools around the world.',
    icon: <LanguageIcon />,
    details: [
      'Support for 30+ languages',
      'Cross-language skill normalization',
      'Cultural context awareness',
      'International qualification recognition'
    ]
  }
];

// Technical details
const technicalDetails = [
  {
    title: 'Natural Language Processing',
    description: 'Advanced NLP models understand the semantic meaning behind resume content and job descriptions.',
    icon: <DataObjectIcon />
  },
  {
    title: 'Machine Learning Algorithms',
    description: 'Continuously improving algorithms learn from hiring outcomes to refine matching accuracy.',
    icon: <CodeIcon />
  },
  {
    title: 'Neural Networks',
    description: 'Deep learning networks identify complex patterns in candidate data that humans might miss.',
    icon: <BoltIcon />
  },
  {
    title: 'Explainable AI',
    description: 'Transparent AI that provides clear reasoning for candidate recommendations.',
    icon: <LightbulbIcon />
  }
];

export default function AIRecruitmentPage() {
  const theme = useTheme();

  const seoData = {
    title: 'AI-Powered Candidate Matching | HireGenix',
    description: 'HireGenix\'s advanced AI-powered candidate matching uses semantic understanding to find the perfect candidates for your open positions.',
    keywords: 'AI recruitment, candidate matching, semantic skills matching, career trajectory prediction, cultural fit assessment'
  };

  return (
    <Layout>
      <SEOMetadata seoData={seoData} />

      <Box component="main">
        {/* Hero Section */}
        <Box
          sx={{
            position: 'relative',
            py: { xs: 10, md: 16 },
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
            color: 'white',
            overflow: 'hidden'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.1,
              backgroundImage: 'url(/hero-pattern.svg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 1
            }}
          />

          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
            <Grid container spacing={6} alignItems="center">
              <Grid
                item
                xs={12}
                md={6}
                component={motion.div}
                variants={fadeInLeftVariant}
                initial="hidden"
                animate="visible"
              >
                <Chip
                  label="AI-POWERED RECRUITMENT"
                  color="secondary"
                  size="small"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    background: 'rgba(33, 150, 243, 0.2)',
                    border: '1px solid rgba(33, 150, 243, 0.3)',
                    color: 'white',
                    px: 2,
                    py: 2.5,
                    '& .MuiChip-label': {
                      px: 1
                    }
                  }}
                />
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                    mb: 2,
                    background: 'linear-gradient(90deg, #ffffff 0%, #f0f0ff 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    lineHeight: 1.2
                  }}
                >
                  AI-Powered Candidate Matching
                </Typography>
                <Typography
                  variant="h2"
                  component="p"
                  sx={{
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    fontWeight: 400,
                    mb: 4,
                    opacity: 0.9,
                    maxWidth: 600
                  }}
                >
                  Find the perfect candidates for your open positions with our advanced AI matching system that understands the true meaning behind skills and experience.
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    component={Link}
                    href="/demo"
                    sx={{
                      py: 1.5,
                      px: 3,
                      fontSize: '1rem',
                      boxShadow: '0 4px 14px rgba(33, 150, 243, 0.4)',
                      borderRadius: '50px',
                      fontWeight: 600
                    }}
                  >
                    Request Demo
                  </Button>
                  <Button
                    variant="outlined"
                    color="inherit"
                    size="large"
                    component={Link}
                    href="/contact"
                    sx={{
                      py: 1.5,
                      px: 3,
                      fontSize: '1rem',
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                      borderRadius: '50px',
                      fontWeight: 600,
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }
                    }}
                  >
                    Contact Sales
                  </Button>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: { xs: 'none', md: 'block' }
                }}
                component={motion.div}
                variants={fadeInRightVariant}
                initial="hidden"
                animate="visible"
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '400px'
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '90%',
                      height: 400,
                      borderRadius: '30px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden'
                    }}
                  >
                    <Image
                      src="/solutions/ai-recruitment.jpg"
                      alt="AI-Powered Recruitment"
                      width={350}
                      height={350}
                      style={{ objectFit: 'contain', zIndex: 1 }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Benefits Section */}
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
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '2rem', md: '2.75rem' }
                }}
              >
                Benefits of AI-Powered Recruitment
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
                Transform your hiring process with intelligent candidate matching that saves time and improves quality
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {benefits.map((benefit, index) => (
                <Grid item xs={12} sm={6} key={index}>
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
                        background: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
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

        {/* Features Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            background: alpha(theme.palette.primary.main, 0.03)
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Chip
                label="KEY FEATURES"
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
                Advanced AI Matching Technology
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
                Our AI goes beyond simple keyword matching to understand the true meaning behind skills and experience
              </Typography>
            </Box>

            {features.map((feature, index) => (
              <Box
                key={index}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{ mb: 6 }}
              >
                <Grid
                  container
                  spacing={4}
                  alignItems="center"
                  direction={index % 2 === 0 ? 'row' : 'row-reverse'}
                >
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        mb: 3
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          background: alpha(theme.palette.primary.main, 0.1),
                          color: theme.palette.primary.main,
                          mr: 2,
                          flexShrink: 0
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Box>
                        <Typography variant="h4" component="h3" fontWeight={600} gutterBottom>
                          {feature.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                          {feature.description}
                        </Typography>
                      </Box>
                    </Box>
                    <List>
                      {feature.details.map((detail, idx) => (
                        <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircleIcon color="success" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={detail} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Paper
                      sx={{
                        p: 0,
                        overflow: 'hidden',
                        borderRadius: 4,
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                        height: 300,
                        position: 'relative'
                      }}
                    >
                      <Image
                        src={`/solutions/feature-${index + 1}.jpg`}
                        alt={feature.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </Paper>
                  </Grid>
                </Grid>
                {index < features.length - 1 && (
                  <Divider sx={{ my: 6 }} />
                )}
              </Box>
            ))}
          </Container>
        </Box>

        {/* Technical Details Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            background: theme.palette.background.default
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Chip
                label="TECHNOLOGY"
                color="secondary"
                size="small"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  background: alpha(theme.palette.secondary.main, 0.1),
                  border: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
                  color: theme.palette.secondary.main
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
                The Technology Behind Our AI
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
                Powered by cutting-edge artificial intelligence and machine learning
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {technicalDetails.map((detail, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Paper
                    sx={{
                      p: 3,
                      height: '100%',
                      borderRadius: 4,
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
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
                        background: alpha(theme.palette.secondary.main, 0.1),
                        color: theme.palette.secondary.main,
                        mb: 3
                      }}
                    >
                      {detail.icon}
                    </Box>
                    <Typography variant="h6" component="h3" fontWeight={600} gutterBottom>
                      {detail.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {detail.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.1,
              backgroundImage: 'url(/hero-pattern.svg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 1
            }}
          />
          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                  mb: 2
                }}
              >
                Ready to Transform Your Recruitment Process?
              </Typography>
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  fontWeight: 400,
                  mb: 4,
                  opacity: 0.9
                }}
              >
                Schedule a demo to see how our AI-powered candidate matching can help you find the best talent
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                <Button
                  component={Link}
                  href="/demo"
                  variant="contained"
                  color="secondary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: '50px',
                    boxShadow: '0 4px 14px 0 rgba(245, 0, 87, 0.4)'
                  }}
                >
                  Request Demo
                </Button>
                <Button
                  component={Link}
                  href="/contact"
                  variant="outlined"
                  size="large"
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: '50px',
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  Contact Sales
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
}
