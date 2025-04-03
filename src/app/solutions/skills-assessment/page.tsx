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
  Chip,
  Card,
  CardContent,
  Avatar,
  Stack
} from '@mui/material';
import {
  Assessment as AssessmentIcon,
  CheckCircle as CheckCircleIcon,
  Psychology as PsychologyIcon,
  Code as CodeIcon,
  Speed as SpeedIcon,
  ArrowForward as ArrowForwardIcon,
  AutoAwesome as AutoAwesomeIcon,
  School as SchoolIcon,
  Equalizer as EqualizerIcon,
  Lightbulb as LightbulbIcon,
  Diversity3 as DiversityIcon,
  Tune as TuneIcon,
  DataObject as DataObjectIcon,
  BarChart as BarChartIcon,
  Fingerprint as FingerprintIcon
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
    title: 'Objective Skill Evaluation',
    description: 'Eliminate subjective bias with standardized assessments that provide consistent, data-driven evaluation of candidate skills.',
    icon: <EqualizerIcon fontSize="large" />
  },
  {
    title: 'Reduced Time-to-Hire',
    description: 'Quickly identify qualified candidates by automating the initial screening process with targeted skill assessments.',
    icon: <SpeedIcon fontSize="large" />
  },
  {
    title: 'Improved Candidate Quality',
    description: 'Verify claimed skills with practical assessments that reveal true capabilities and potential for success.',
    icon: <CheckCircleIcon fontSize="large" />
  },
  {
    title: 'Enhanced Candidate Experience',
    description: 'Provide a professional, engaging assessment experience that showcases your company\'s technological sophistication.',
    icon: <AutoAwesomeIcon fontSize="large" />
  }
];

// Features data
const features = [
  {
    title: 'Adaptive Testing Technology',
    description: 'Our AI-powered adaptive testing adjusts question difficulty in real-time based on candidate responses, providing a more accurate assessment in less time.',
    icon: <TuneIcon />,
    details: [
      'Dynamic difficulty adjustment based on performance',
      'Personalized assessment paths for each candidate',
      'Precise skill level determination',
      'Reduced assessment time with maintained accuracy'
    ]
  },
  {
    title: 'Comprehensive Coding Challenges',
    description: 'Industry-relevant coding challenges with automated evaluation and AI code review that assesses not just correctness, but code quality, efficiency, and best practices.',
    icon: <CodeIcon />,
    details: [
      'Real-world programming scenarios',
      'Support for 30+ programming languages',
      'Automated test case validation',
      'AI-powered code quality analysis'
    ]
  },
  {
    title: 'Soft Skills Simulations',
    description: 'Interactive scenario-based assessments that evaluate critical thinking, problem-solving, communication, and other essential soft skills through realistic workplace simulations.',
    icon: <PsychologyIcon />,
    details: [
      'Role-specific scenario simulations',
      'Decision-making and critical thinking assessment',
      'Communication style analysis',
      'Teamwork and collaboration evaluation'
    ]
  },
  {
    title: 'Industry-Specific Assessments',
    description: 'Specialized assessment libraries tailored to specific industries and roles, ensuring candidates are evaluated on the most relevant skills for their target position.',
    icon: <SchoolIcon />,
    details: [
      'Role-specific technical assessments',
      'Industry-standard certification alignment',
      'Customizable assessment templates',
      'Regular updates to match evolving industry requirements'
    ]
  }
];

// Assessment types
const assessmentTypes = [
  {
    title: 'Technical Skills',
    description: 'Evaluate programming, data analysis, and other technical abilities with hands-on challenges.',
    icon: <DataObjectIcon />,
    examples: ['Coding Challenges', 'System Design', 'Database Queries', 'API Integration']
  },
  {
    title: 'Cognitive Abilities',
    description: 'Assess problem-solving, critical thinking, and analytical reasoning capabilities.',
    icon: <LightbulbIcon />,
    examples: ['Logical Reasoning', 'Numerical Analysis', 'Pattern Recognition', 'Abstract Thinking']
  },
  {
    title: 'Behavioral Traits',
    description: 'Evaluate personality traits, work style, and cultural fit through scenario-based assessments.',
    icon: <DiversityIcon />,
    examples: ['Communication Style', 'Teamwork Approach', 'Leadership Potential', 'Adaptability']
  },
  {
    title: 'Domain Knowledge',
    description: 'Test industry-specific knowledge and expertise relevant to specialized roles.',
    icon: <BarChartIcon />,
    examples: ['Marketing Analytics', 'Financial Modeling', 'UX Design Principles', 'Healthcare Regulations']
  }
];

// Statistics
const statistics = [
  { value: '93%', label: 'Accuracy in predicting job performance' },
  { value: '71%', label: 'Reduction in bad hires' },
  { value: '68%', label: 'Faster time-to-hire' },
  { value: '4.8/5', label: 'Candidate satisfaction rating' }
];

export default function SkillsAssessmentPage() {
  const theme = useTheme();

  const seoData = {
    title: 'Skills Assessment Platform | HireGenix',
    description: 'HireGenix\'s integrated skills assessment platform helps you evaluate candidates with customizable assessments that measure technical skills, knowledge, and cultural fit.',
    keywords: 'skills assessment, technical evaluation, coding challenges, soft skills assessment, candidate testing'
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
            background: `linear-gradient(135deg, ${theme.palette.warning.main} 0%, ${theme.palette.warning.dark} 100%)`,
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
                  label="SKILLS ASSESSMENT PLATFORM"
                  color="primary"
                  size="small"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
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
                  Comprehensive Skills Assessment
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
                  Evaluate candidates with customizable assessments that measure technical skills, knowledge, and cultural fit with unprecedented accuracy.
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    component={Link}
                    href="/demo"
                    sx={{
                      py: 1.5,
                      px: 3,
                      fontSize: '1rem',
                      boxShadow: '0 4px 14px rgba(255, 255, 255, 0.2)',
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
                      overflow: 'hidden'
                    }}
                  >
                    {/* Interactive Assessment Demo */}
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                        background: '#1E1E1E',
                        color: 'white'
                      }}
                    >
                      {/* Header */}
                      <Box
                        sx={{
                          p: 2,
                          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                          background: `linear-gradient(135deg, ${theme.palette.warning.dark}, ${theme.palette.warning.main})`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Box
                            component={motion.div}
                            animate={{ 
                              rotate: [0, 5, 0, -5, 0],
                            }}
                            transition={{ 
                              duration: 4,
                              repeat: Infinity,
                              repeatType: 'loop'
                            }}
                            sx={{
                              width: 36,
                              height: 36,
                              borderRadius: '8px',
                              background: 'rgba(255, 255, 255, 0.2)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mr: 2,
                              fontWeight: 700
                            }}
                          >
                            <AssessmentIcon fontSize="small" />
                          </Box>
                          <Typography variant="h6" fontWeight={600}>
                            Skills Assessment
                          </Typography>
                        </Box>
                        <Chip 
                          label="Live Demo" 
                          size="small"
                          sx={{ 
                            bgcolor: 'rgba(255, 255, 255, 0.2)',
                            color: 'white',
                            fontWeight: 600
                          }} 
                        />
                      </Box>
                      
                      {/* Assessment Content */}
                      <Box sx={{ p: 3 }}>
                        <Box
                          component={motion.div}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          sx={{ 
                            mb: 3,
                            p: 3,
                            borderRadius: 2,
                            background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)`,
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                          }}
                        >
                          <Typography variant="subtitle1" fontWeight={600} color="white" gutterBottom>
                            Frontend Developer Assessment
                          </Typography>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
                              Candidate: Sarah Williams
                            </Typography>
                            <Box
                              component={motion.div}
                              animate={{ 
                                scale: [1, 1.05, 1],
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                repeatType: 'loop'
                              }}
                            >
                              <Typography variant="body2" color={theme.palette.warning.main} fontWeight={600}>
                                In Progress
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            component={motion.div}
                            initial={{ width: '0%' }}
                            animate={{ width: '65%' }}
                            transition={{ duration: 1.5 }}
                            sx={{
                              height: 4,
                              background: `linear-gradient(90deg, ${theme.palette.warning.main}, ${alpha(theme.palette.warning.main, 0.3)})`,
                              borderRadius: 2,
                              mb: 1
                            }}
                          />
                          <Typography variant="caption" color="rgba(255, 255, 255, 0.6)">
                            13 of 20 questions completed
                          </Typography>
                        </Box>
                        
                        {/* Current Question */}
                        <Box
                          component={motion.div}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                          sx={{ mb: 3 }}
                        >
                          <Typography variant="body1" fontWeight={600} color="white" gutterBottom>
                            Question 14: React Hooks
                          </Typography>
                          <Typography variant="body2" color="rgba(255, 255, 255, 0.8)" sx={{ mb: 2 }}>
                            Which hook would you use to perform side effects in a function component?
                          </Typography>
                          
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            {[
                              { option: 'useState', selected: false },
                              { option: 'useEffect', selected: true },
                              { option: 'useContext', selected: false },
                              { option: 'useReducer', selected: false }
                            ].map((answer, idx) => (
                              <Box
                                key={idx}
                                component={motion.div}
                                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                                sx={{
                                  p: 2,
                                  borderRadius: 2,
                                  background: answer.selected ? alpha(theme.palette.warning.main, 0.15) : 'rgba(255, 255, 255, 0.05)',
                                  border: `1px solid ${answer.selected ? alpha(theme.palette.warning.main, 0.3) : 'rgba(255, 255, 255, 0.1)'}`,
                                  cursor: 'pointer',
                                  display: 'flex',
                                  alignItems: 'center'
                                }}
                              >
                                <Box
                                  sx={{
                                    width: 24,
                                    height: 24,
                                    borderRadius: '50%',
                                    border: `2px solid ${answer.selected ? theme.palette.warning.main : 'rgba(255, 255, 255, 0.3)'}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mr: 2
                                  }}
                                >
                                  {answer.selected && (
                                    <Box
                                      component={motion.div}
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      sx={{
                                        width: 12,
                                        height: 12,
                                        borderRadius: '50%',
                                        background: theme.palette.warning.main
                                      }}
                                    />
                                  )}
                                </Box>
                                <Typography variant="body2" color={answer.selected ? theme.palette.warning.main : 'white'} fontWeight={answer.selected ? 600 : 400}>
                                  {answer.option}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                        
                        {/* Navigation */}
                        <Box
                          component={motion.div}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6, duration: 0.5 }}
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mt: 3
                          }}
                        >
                          <Button
                            variant="outlined"
                            size="small"
                            sx={{
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                              color: 'white',
                              borderRadius: 2,
                              px: 2
                            }}
                          >
                            Previous
                          </Button>
                          <Button
                            variant="contained"
                            color="warning"
                            size="small"
                            sx={{
                              borderRadius: 2,
                              px: 2,
                              fontWeight: 600
                            }}
                          >
                            Next Question
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Statistics Section */}
        <Box
          sx={{
            py: 6,
            background: theme.palette.background.paper,
            borderBottom: '1px solid',
            borderColor: 'divider'
          }}
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={3} justifyContent="center">
              {statistics.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      p: 2
                    }}
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Typography
                      variant="h3"
                      component="p"
                      sx={{
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        fontWeight: 700,
                        mb: 1,
                        color: theme.palette.warning.main
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ fontWeight: 500 }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
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
                Benefits of Skills Assessment
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
                Make data-driven hiring decisions with comprehensive skill evaluation
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
                        background: alpha(theme.palette.warning.main, 0.1),
                        color: theme.palette.warning.main,
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
            background: alpha(theme.palette.warning.main, 0.03)
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Chip
                label="KEY FEATURES"
                color="warning"
                size="small"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  background: alpha(theme.palette.warning.main, 0.1),
                  border: `1px solid ${alpha(theme.palette.warning.main, 0.3)}`,
                  color: theme.palette.warning.main
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
                Advanced Assessment Technology
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
                Our platform combines cutting-edge technology with proven assessment methodologies
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
                          background: alpha(theme.palette.warning.main, 0.1),
                          color: theme.palette.warning.main,
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
                        src={`/solutions/feature-${index + 9}.jpg`}
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

        {/* Assessment Types Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            background: theme.palette.background.default
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Chip
                label="ASSESSMENT TYPES"
                color="warning"
                size="small"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  background: alpha(theme.palette.warning.main, 0.1),
                  border: `1px solid ${alpha(theme.palette.warning.main, 0.3)}`,
                  color: theme.palette.warning.main
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
                Comprehensive Assessment Library
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
                Evaluate every aspect of candidate potential with our diverse assessment types
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {assessmentTypes.map((type, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
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
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 70,
                          height: 70,
                          borderRadius: '50%',
                          background: alpha(theme.palette.warning.main, 0.1),
                          color: theme.palette.warning.main,
                          mb: 3,
                          mx: 'auto'
                        }}
                      >
                        {type.icon}
                      </Box>
                      <Typography variant="h5" component="h3" fontWeight={600} gutterBottom align="center">
                        {type.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph align="center">
                        {type.description}
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <Typography variant="subtitle2" fontWeight={600} gutterBottom align="center">
                        Examples:
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center" sx={{ gap: 1 }}>
                        {type.examples.map((example, idx) => (
                          <Chip
                            key={idx}
                            label={example}
                            size="small"
                            sx={{
                              background: alpha(theme.palette.warning.main, 0.1),
                              color: theme.palette.warning.dark,
                              mb: 1
                            }}
                          />
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Security Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            background: alpha(theme.palette.warning.main, 0.03)
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center">
              <Grid
                item
                xs={12}
                md={6}
                component={motion.div}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Chip
                  label="SECURITY & COMPLIANCE"
                  color="warning"
                  size="small"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    background: alpha(theme.palette.warning.main, 0.1),
                    border: `1px solid ${alpha(theme.palette.warning.main, 0.3)}`,
                    color: theme.palette.warning.main
                  }}
                />
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: '1.75rem', md: '2.25rem' }
                  }}
                >
                  Enterprise-Grade Security & Compliance
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  paragraph
                >
                  Our platform is built with security and compliance at its core, ensuring your assessment data is protected and your processes meet global regulatory requirements.
                </Typography>
                <List>
                  {[
                    'SOC 2 Type II certified infrastructure',
                    'GDPR and CCPA compliant data handling',
                    'ADA accessible assessment interface',
                    'End-to-end encryption for all data',
                    'Regular security audits and penetration testing'
                  ].map((item, idx) => (
                    <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <FingerprintIcon color="warning" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                component={motion.div}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    height: 400,
                    width: '100%',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <Image
                    src="/solutions/security.jpg"
                    alt="Enterprise Security"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            background: `linear-gradient(135deg, ${theme.palette.warning.main} 0%, ${theme.palette.warning.dark} 100%)`,
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
                Ready to Transform Your Assessment Process?
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
                Schedule a demo to see how our skills assessment platform can help you make better hiring decisions
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                <Button
                  component={Link}
                  href="/demo"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: '50px',
                    boxShadow: '0 4px 14px 0 rgba(255, 255, 255, 0.2)'
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
