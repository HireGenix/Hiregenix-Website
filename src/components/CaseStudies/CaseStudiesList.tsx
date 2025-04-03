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
  Button,
  Divider,
  Avatar,
  Rating,
} from '@mui/material';
import { 
  FormatQuote as FormatQuoteIcon,
  ArrowForward as ArrowForwardIcon,
  Business as BusinessIcon,
  BarChart as BarChartIcon,
  Timeline as TimelineIcon,
  People as PeopleIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Case studies data
const caseStudies = [
  {
    id: 'bccm',
    company: 'BCCM',
    logo: '/logo.png', // Placeholder, replace with actual company logo
    industry: 'Hospitality',
    headline: 'Revolutionizing Hospitality Hiring with AI-Powered Recruitment',
    summary: 'How BCCM reduced time-to-hire by 45% and improved candidate quality using HireGenix\'s AI matching technology.',
    quote: 'HireGenix helped us reduce our time-to-hire by 45% and improved the quality of our candidates significantly. The AI matching technology is a game-changer.',
    stats: [
      { label: 'Reduction in Time-to-Hire', value: '45%' },
      { label: 'Increase in Quality Hires', value: '32%' },
      { label: 'Cost Savings', value: '$120K' },
      { label: 'Candidate Experience Rating', value: '4.8/5' }
    ],
    challenges: [
      'High volume of applications for hospitality roles',
      'Difficulty identifying candidates with the right skill sets',
      'Long and inefficient hiring process',
      'Inconsistent candidate evaluation'
    ],
    solutions: [
      'Implemented AI-powered candidate matching',
      'Automated hospitality skills assessment',
      'Streamlined interview scheduling',
      'Standardized evaluation criteria'
    ],
    person: {
      name: 'Deepak Jha',
      title: 'Director',
      avatar: '/avatars/avatar1.jpg'
    },
    rating: 5
  },
    {
      id: 'xs-worldwide',
      company: 'XS Worldwide',
      logo: '/logo.png', // Placeholder, replace with actual company logo
      industry: 'Exhibition Industry',
      headline: 'Transforming Exhibition Industry Recruitment with Specialized Skills Assessment',
    summary: 'XS Worldwide achieved 60% improvement in candidate retention after implementing HireGenix\'s specialized skills assessment.',
    quote: 'The skills assessment feature has been invaluable for our specialized roles. We\'ve seen a 60% improvement in candidate retention after implementing HireGenix.',
    stats: [
      { label: 'Improvement in Retention', value: '60%' },
      { label: 'Reduction in Bad Hires', value: '75%' },
      { label: 'ROI in First Year', value: '320%' },
      { label: 'Time Saved per Hire', value: '12 days' }
    ],
    challenges: [
      'Difficulty assessing specialized exhibition industry skills',
      'High turnover due to skills mismatch',
      'Time-consuming interview process for event roles',
      'Compliance and certification verification challenges'
    ],
    solutions: [
      'Customized exhibition industry skills assessment',
      'Role-specific screening questions',
      'Automated credential verification',
      'Compliance-focused candidate tracking'
    ],
    person: {
      name: 'Kay Madaan',
      title: 'CEO',
      avatar: '/avatars/avatar2.jpg'
    },
    rating: 5
  },
  {
    id: 'startupflux',
    company: 'StartupFlux',
    logo: '/logo.png', // Placeholder, replace with actual company logo
    industry: 'Marketing and Communications',
    headline: 'Scaling Recruitment Operations for Rapid Growth',
    summary: 'How StartupFlux tripled their hiring capacity while maintaining quality during a period of rapid expansion.',
    quote: 'As a rapidly growing company, we needed to scale our hiring process without sacrificing quality. HireGenix\'s platform allowed us to triple our hiring capacity with the same team.',
    stats: [
      { label: 'Increase in Hiring Capacity', value: '300%' },
      { label: 'Candidate Experience Rating', value: '4.8/5' },
      { label: 'Reduction in Hiring Costs', value: '28%' },
      { label: 'Compliance Accuracy', value: '99.7%' }
    ],
    challenges: [
      'Rapid company growth requiring mass hiring',
      'Limited recruitment team resources',
      'Maintaining consistent quality while scaling',
      'Complex requirements in marketing and communications'
    ],
    solutions: [
      'Automated candidate sourcing and screening',
      'Bulk interview scheduling',
      'Standardized assessment process',
      'Workflow automation'
    ],
    person: {
      name: 'Neha Varma',
      title: 'Founder',
      avatar: '/avatars/avatar3.jpg'
    },
    rating: 4.5
  },
  {
    id: 'youlegal',
    company: 'YouLegal',
    logo: '/logo.png', // Placeholder, replace with actual company logo
    industry: 'Medical Legal (Australia)',
    headline: 'Streamlining Specialized Legal Hiring',
    summary: 'YouLegal reduced hiring time by 65% while improving employee retention in the medical legal sector.',
    quote: 'HireGenix transformed our hiring process. We can now onboard qualified staff in a fraction of the time, with much better retention rates.',
    stats: [
      { label: 'Reduction in Hiring Time', value: '65%' },
      { label: 'Staff Retention', value: '+40%' },
      { label: 'Hiring Manager Time Saved', value: '22 hrs/week' },
      { label: 'Application Completion Rate', value: '87%' }
    ],
    challenges: [
      'Specialized medical legal hiring needs',
      'Short timeframes for staffing up',
      'Inconsistent candidate quality',
      'High turnover of employees'
    ],
    solutions: [
      'Specialized candidate processing',
      'Mobile-friendly application process',
      'Automated screening and scheduling',
      'Predictive retention analytics'
    ],
    person: {
      name: 'Sarah Bartholomeusz',
      title: 'CEO',
      avatar: '/team/david-rodriguez.jpg'
    },
    rating: 5
  }
];

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

export const CaseStudiesList: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={6}>
            {caseStudies.map((study, index) => (
              <Grid item xs={12} key={index}>
                <motion.div variants={itemVariant}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 3, md: 5 },
                      borderRadius: '24px',
                      background: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)',
                        transform: 'translateY(-5px)'
                      },
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    {/* Industry tag */}
                    <Chip 
                      label={study.industry} 
                      size="small"
                      sx={{ 
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        fontWeight: 600,
                        background: alpha(theme.palette.secondary.main, 0.1),
                        border: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
                        color: theme.palette.secondary.main,
                      }} 
                    />

                    <Grid container spacing={4}>
                      {/* Left column - Company info and quote */}
                      <Grid item xs={12} md={4}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 3
                          }}
                        >
                          <Box
                            sx={{
                              width: 70,
                              height: 70,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderRadius: '16px',
                              background: 'white',
                              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                              mr: 2
                            }}
                          >
                            <Box
                              component="img"
                              src={study.logo}
                              alt={study.company}
                              sx={{
                                width: 45,
                                height: 45,
                                objectFit: 'contain'
                              }}
                            />
                          </Box>
                          <Box>
                            <Typography
                              variant="h5"
                              component="h2"
                              sx={{
                                fontWeight: 700,
                                fontSize: '1.5rem'
                              }}
                            >
                              {study.company}
                            </Typography>
                            <Rating 
                              value={study.rating} 
                              precision={0.5} 
                              readOnly 
                              size="small"
                              sx={{ mt: 0.5 }}
                            />
                          </Box>
                        </Box>

                        <Box
                          sx={{
                            mb: 4,
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
                              mb: 3,
                              lineHeight: 1.6
                            }}
                          >
                            "{study.quote}"
                          </Typography>
                          <Box>
                            <Typography
                              variant="subtitle1"
                              sx={{ fontWeight: 600 }}
                            >
                              {study.person.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                            >
                              {study.person.title}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>

                      {/* Right column - Case study details */}
                      <Grid item xs={12} md={8}>
                        <Typography
                          variant="h4"
                          component="h3"
                          sx={{
                            fontWeight: 700,
                            mb: 2,
                            color: theme.palette.primary.main
                          }}
                        >
                          {study.headline}
                        </Typography>

                        <Typography
                          variant="body1"
                          sx={{
                            mb: 3,
                            lineHeight: 1.7
                          }}
                        >
                          {study.summary}
                        </Typography>

                        <Grid container spacing={3} sx={{ mb: 4 }}>
                          {study.stats.map((stat, idx) => (
                            <Grid item xs={6} sm={3} key={idx}>
                              <Box
                                sx={{
                                  p: 2,
                                  background: alpha(theme.palette.primary.light, 0.05),
                                  borderRadius: '12px',
                                  height: '100%',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  textAlign: 'center'
                                }}
                              >
                                <Typography
                                  variant="h4"
                                  sx={{
                                    fontWeight: 700,
                                    color: theme.palette.primary.main,
                                    mb: 1
                                  }}
                                >
                                  {stat.value}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                  sx={{
                                    fontSize: '0.75rem',
                                    display: 'block',
                                    lineHeight: 1.2
                                  }}
                                >
                                  {stat.label}
                                </Typography>
                              </Box>
                            </Grid>
                          ))}
                        </Grid>

                        <Grid container spacing={4}>
                          <Grid item xs={12} sm={6}>
                            <Box sx={{ mb: 3 }}>
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  fontWeight: 700,
                                  display: 'flex',
                                  alignItems: 'center',
                                  mb: 2
                                }}
                              >
                                <BusinessIcon 
                                  sx={{ 
                                    mr: 1, 
                                    color: theme.palette.error.main 
                                  }} 
                                />
                                Challenges
                              </Typography>
                              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                {study.challenges.map((challenge, idx) => (
                                  <Box 
                                    component="li" 
                                    key={idx}
                                    sx={{ 
                                      mb: 1,
                                      color: 'text.secondary'
                                    }}
                                  >
                                    {challenge}
                                  </Box>
                                ))}
                              </Box>
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Box>
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  fontWeight: 700,
                                  display: 'flex',
                                  alignItems: 'center',
                                  mb: 2
                                }}
                              >
                                <CheckCircleIcon 
                                  sx={{ 
                                    mr: 1, 
                                    color: theme.palette.success.main 
                                  }} 
                                />
                                Solutions
                              </Typography>
                              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                {study.solutions.map((solution, idx) => (
                                  <Box 
                                    component="li" 
                                    key={idx}
                                    sx={{ 
                                      mb: 1,
                                      color: 'text.secondary'
                                    }}
                                  >
                                    {solution}
                                  </Box>
                                ))}
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>

                        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
                          <Button
                            variant="outlined"
                            color="primary"
                            endIcon={<ArrowForwardIcon />}
                            component={Link}
                            href={`/case-studies/${study.id}`}
                            sx={{
                              borderRadius: '50px',
                              px: 3,
                              py: 1,
                              fontWeight: 600,
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'translateX(5px)',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                              }
                            }}
                          >
                            Read Full Case Study
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};
