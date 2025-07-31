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
import { HeroSection, seoData } from './components';

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

  // Using imported seoData from components

  return (
    <Layout>
      <SEOMetadata seoData={seoData} />

      <Box component="main">
        {/* Hero Section */}
        <HeroSection />

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
                        p: 4,
                        overflow: 'hidden',
                        borderRadius: 4,
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                        height: 300,
                        position: 'relative',
                        background: `linear-gradient(135deg, ${alpha(theme.palette.warning.light, 0.1)} 0%, ${alpha(theme.palette.warning.main, 0.2)} 100%)`,
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      {index === 0 && (
                        // Adaptive Testing Technology visualization
                        <Box sx={{ height: '100%', position: 'relative' }}>
                          <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
                            Adaptive Difficulty Adjustment
                          </Typography>
                          
                          {/* Difficulty level visualization */}
                          <Box sx={{ mb: 3 }}>
                            {[
                              { level: 'Expert', width: '70%', color: theme.palette.error.main },
                              { level: 'Advanced', width: '85%', color: theme.palette.warning.main },
                              { level: 'Intermediate', width: '100%', color: theme.palette.success.main },
                              { level: 'Beginner', width: '60%', color: theme.palette.info.main },
                            ].map((item, idx) => (
                              <Box key={idx} sx={{ mb: 1.5 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                  <Typography variant="caption" fontWeight={600}>
                                    {item.level}
                                  </Typography>
                                  <Typography variant="caption" color="text.secondary">
                                    {idx === 2 ? 'Current Level' : ''}
                                  </Typography>
                                </Box>
                                <Box
                                  component={motion.div}
                                  initial={{ width: 0 }}
                                  animate={{ width: item.width }}
                                  transition={{ duration: 1, delay: idx * 0.2 }}
                                  sx={{
                                    height: 8,
                                    borderRadius: 4,
                                    background: item.color,
                                    opacity: idx === 2 ? 1 : 0.6,
                                    position: 'relative',
                                  }}
                                />
                              </Box>
                            ))}
                          </Box>
                          
                          {/* Animated assessment path */}
                          <Box
                            component={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            sx={{ position: 'absolute', bottom: 0, width: '100%' }}
                          >
                            <Typography variant="subtitle2" sx={{ mb: 1 }}>
                              Personalized Assessment Path
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              {[1, 2, 3, 4, 5].map((step) => (
                                <Box
                                  key={step}
                                  component={motion.div}
                                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                  sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: step === 3 
                                      ? theme.palette.warning.main 
                                      : alpha(theme.palette.warning.main, 0.2),
                                    color: step === 3 ? 'white' : theme.palette.warning.main,
                                    fontWeight: 'bold',
                                    position: 'relative',
                                    zIndex: 2,
                                  }}
                                >
                                  {step}
                                </Box>
                              ))}
                            </Box>
                            <Box
                              sx={{
                                height: 2,
                                background: alpha(theme.palette.warning.main, 0.3),
                                width: '100%',
                                position: 'absolute',
                                bottom: 20,
                                left: 0,
                                zIndex: 1,
                              }}
                            />
                          </Box>
                        </Box>
                      )}
                      
                      {index === 1 && (
                        // Coding Challenges visualization
                        <Box sx={{ height: '100%', position: 'relative' }}>
                          <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
                            Live Code Editor
                          </Typography>
                          
                          <Box
                            sx={{
                              background: '#1e1e1e',
                              borderRadius: 2,
                              p: 2,
                              fontFamily: 'monospace',
                              fontSize: '0.85rem',
                              color: '#d4d4d4',
                              height: 'calc(100% - 60px)',
                              overflow: 'hidden',
                              position: 'relative',
                            }}
                          >
                            <Box component="pre" sx={{ m: 0 }}>
                              <Box component={motion.span} 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                sx={{ color: '#569cd6' }}
                              >
                                function
                              </Box>
                              <Box component={motion.span} 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                sx={{ color: '#dcdcaa' }}
                              > findMaxSubarraySum</Box>
                              <Box component={motion.span} 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                              >(nums, k) {'{'}</Box>
                              
                              <Box component="div">
                                <Box component={motion.span} 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.6 }}
                                  sx={{ color: '#569cd6' }}
                                >  let</Box>
                                <Box component={motion.span} 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.7 }}
                                > maxSum = 0;</Box>
                              </Box>
                              
                              <Box component="div">
                                <Box component={motion.span} 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.9 }}
                                  sx={{ color: '#569cd6' }}
                                >  let</Box>
                                <Box component={motion.span} 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 1.0 }}
                                > windowSum = 0;</Box>
                              </Box>
                              
                              <Box component="div">
                                <Box component={motion.span} 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 1.2 }}
                                  sx={{ color: '#c586c0' }}
                                >  for</Box>
                                <Box component={motion.span} 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 1.3 }}
                                > (</Box>
                                <Box component={motion.span} 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 1.4 }}
                                  sx={{ color: '#569cd6' }}
                                >let</Box>
                                <Box component={motion.span} 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 1.5 }}
                                > i = 0; i {'<'} k; i++) {'{'}</Box>
                              </Box>
                              
                              <Box component="div">
                                <Box component={motion.span} 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 1.7 }}
                                >    windowSum += nums[i];</Box>
                              </Box>
                              
                              <Box component="div">
                                <Box component={motion.span} 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 1.9 }}
                                >  {'}'}</Box>
                              </Box>
                              
                              <Box component="div">
                                <Box component={motion.span} 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 2.1 }}
                                >  maxSum = windowSum;</Box>
                              </Box>
                              
                              <Box component={motion.div}
                                animate={{ 
                                  opacity: [1, 0, 1],
                                  transition: { 
                                    repeat: Infinity,
                                    duration: 1
                                  }
                                }}
                                sx={{ 
                                  width: 8, 
                                  height: 16, 
                                  background: '#fff', 
                                  display: 'inline-block',
                                  ml: 1,
                                  verticalAlign: 'middle'
                                }}
                              />
                            </Box>
                            
                            <Box
                              sx={{
                                position: 'absolute',
                                bottom: 10,
                                right: 10,
                                display: 'flex',
                                gap: 1,
                              }}
                            >
                              <Chip 
                                label="JavaScript" 
                                size="small" 
                                sx={{ 
                                  background: alpha(theme.palette.warning.main, 0.2),
                                  color: theme.palette.warning.main,
                                  fontWeight: 600,
                                  fontSize: '0.7rem'
                                }} 
                              />
                              <Chip 
                                label="Algorithms" 
                                size="small" 
                                sx={{ 
                                  background: alpha(theme.palette.info.main, 0.2),
                                  color: theme.palette.info.main,
                                  fontWeight: 600,
                                  fontSize: '0.7rem'
                                }} 
                              />
                            </Box>
                          </Box>
                        </Box>
                      )}
                      
                      {index === 2 && (
                        // Soft Skills Simulations visualization
                        <Box sx={{ height: '100%', position: 'relative' }}>
                          <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
                            Scenario-Based Assessment
                          </Typography>
                          
                          <Box
                            sx={{
                              background: alpha(theme.palette.background.paper, 0.6),
                              borderRadius: 2,
                              p: 2,
                              height: 'calc(100% - 60px)',
                              overflow: 'hidden',
                            }}
                          >
                            <Typography variant="body2" fontWeight={600} sx={{ mb: 2 }}>
                              Workplace Scenario:
                            </Typography>
                            
                            <Box
                              component={motion.div}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                            >
                              <Typography variant="body2" sx={{ mb: 2 }}>
                                Your team is facing a tight deadline. A colleague suggests cutting corners on quality assurance to meet it. How do you respond?
                              </Typography>
                            </Box>
                            
                            <Box sx={{ mt: 3 }}>
                              {[
                                "Agree to cut QA to meet the deadline",
                                "Suggest working overtime instead",
                                "Propose prioritizing critical features",
                                "Recommend discussing with stakeholders"
                              ].map((option, idx) => (
                                <Box
                                  key={idx}
                                  component={motion.div}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.5 + idx * 0.2 }}
                                  sx={{
                                    p: 1.5,
                                    mb: 1.5,
                                    borderRadius: 2,
                                    border: `1px solid ${idx === 2 ? theme.palette.success.main : alpha(theme.palette.divider, 0.5)}`,
                                    background: idx === 2 ? alpha(theme.palette.success.main, 0.1) : 'transparent',
                                    cursor: 'pointer',
                                    '&:hover': {
                                      background: idx !== 2 ? alpha(theme.palette.action.hover, 0.1) : alpha(theme.palette.success.main, 0.15),
                                    }
                                  }}
                                >
                                  <Typography variant="body2">
                                    {option}
                                  </Typography>
                                </Box>
                              ))}
                            </Box>
                          </Box>
                          
                          <Box
                            sx={{
                              position: 'absolute',
                              bottom: 10,
                              right: 10,
                              display: 'flex',
                              gap: 1,
                            }}
                          >
                            <Chip 
                              label="Problem Solving" 
                              size="small" 
                              sx={{ 
                                background: alpha(theme.palette.success.main, 0.2),
                                color: theme.palette.success.main,
                                fontWeight: 600,
                                fontSize: '0.7rem'
                              }} 
                            />
                          </Box>
                        </Box>
                      )}
                      
                      {index === 3 && (
                        // Industry-Specific Assessments visualization
                        <Box sx={{ height: '100%', position: 'relative' }}>
                          <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
                            Role-Specific Assessment Library
                          </Typography>
                          
                          <Box
                            sx={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: 1.5,
                              height: 'calc(100% - 60px)',
                            }}
                          >
                            {[
                              { name: "Frontend Development", color: theme.palette.primary.main, progress: 85 },
                              { name: "Data Science", color: theme.palette.secondary.main, progress: 70 },
                              { name: "UX Design", color: theme.palette.success.main, progress: 90 },
                              { name: "DevOps", color: theme.palette.warning.main, progress: 65 },
                              { name: "Product Management", color: theme.palette.info.main, progress: 75 },
                              { name: "Marketing Analytics", color: theme.palette.error.main, progress: 80 },
                            ].map((role, idx) => (
                              <Box
                                key={idx}
                                component={motion.div}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                sx={{
                                  width: 'calc(50% - 8px)',
                                  p: 1.5,
                                  borderRadius: 2,
                                  background: alpha(role.color, 0.1),
                                  border: `1px solid ${alpha(role.color, 0.3)}`,
                                  position: 'relative',
                                }}
                              >
                                <Typography variant="caption" fontWeight={600} sx={{ color: role.color }}>
                                  {role.name}
                                </Typography>
                                
                                <Box sx={{ mt: 1, width: '100%', height: 4, background: alpha(role.color, 0.2), borderRadius: 2 }}>
                                  <Box
                                    component={motion.div}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${role.progress}%` }}
                                    transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                                    sx={{
                                      height: '100%',
                                      background: role.color,
                                      borderRadius: 2,
                                    }}
                                  />
                                </Box>
                                
                                <Typography 
                                  variant="caption" 
                                  sx={{ 
                                    position: 'absolute', 
                                    right: 8, 
                                    bottom: 8,
                                    fontWeight: 600,
                                    color: role.color
                                  }}
                                >
                                  {role.progress}%
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                          
                          <Box
                            component={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            sx={{
                              position: 'absolute',
                              bottom: 10,
                              right: 10,
                              display: 'flex',
                              gap: 1,
                            }}
                          >
                            <Chip 
                              label="200+ Assessment Templates" 
                              size="small" 
                              sx={{ 
                                background: alpha(theme.palette.warning.main, 0.2),
                                color: theme.palette.warning.main,
                                fontWeight: 600,
                                fontSize: '0.7rem'
                              }} 
                            />
                          </Box>
                        </Box>
                      )}
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
                <Paper
                  sx={{
                    p: 4,
                    height: 400,
                    width: '100%',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                    background: `linear-gradient(135deg, ${alpha(theme.palette.warning.light, 0.1)} 0%, ${alpha(theme.palette.warning.main, 0.15)} 100%)`,
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                  }}
                >
                  {/* Security Shield Animation */}
                  <Box
                    component={motion.div}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: 180,
                      height: 180,
                      borderRadius: '50%',
                      background: alpha(theme.palette.warning.main, 0.1),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 2,
                    }}
                  >
                    <Box
                      component={motion.div}
                      animate={{ 
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          '0 0 0 rgba(255, 152, 0, 0.4)',
                          '0 0 20px rgba(255, 152, 0, 0.6)',
                          '0 0 0 rgba(255, 152, 0, 0.4)'
                        ]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'loop'
                      }}
                      sx={{
                        width: 120,
                        height: 120,
                        borderRadius: '50%',
                        background: alpha(theme.palette.warning.main, 0.2),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <FingerprintIcon 
                        sx={{ 
                          fontSize: 70, 
                          color: theme.palette.warning.main 
                        }} 
                      />
                    </Box>
                  </Box>
                  
                  {/* Animated Security Elements */}
                  {[
                    { label: 'GDPR', top: '15%', left: '15%', delay: 0.2 },
                    { label: 'SOC 2', top: '25%', right: '15%', delay: 0.3 },
                    { label: 'CCPA', bottom: '20%', left: '20%', delay: 0.4 },
                    { label: 'ADA', bottom: '30%', right: '20%', delay: 0.5 },
                    { label: 'HIPAA', top: '40%', left: '10%', delay: 0.6 },
                  ].map((item, idx) => (
                    <Box
                      key={idx}
                      component={motion.div}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: item.delay }}
                      sx={{
                        position: 'absolute',
                        ...item,
                        zIndex: 1,
                      }}
                    >
                      <Chip
                        label={item.label}
                        size="small"
                        sx={{
                          background: alpha(theme.palette.warning.main, 0.2),
                          color: theme.palette.warning.main,
                          fontWeight: 600,
                          border: `1px solid ${alpha(theme.palette.warning.main, 0.3)}`,
                        }}
                      />
                    </Box>
                  ))}
                  
                  {/* Animated Connection Lines */}
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 0.8 }}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: 0,
                    }}
                  >
                    <svg width="100%" height="100%" style={{ position: 'absolute' }}>
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="35%"
                        fill="none"
                        stroke={alpha(theme.palette.warning.main, 0.2)}
                        strokeWidth="1"
                        strokeDasharray="5,5"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="25%"
                        fill="none"
                        stroke={alpha(theme.palette.warning.main, 0.15)}
                        strokeWidth="1"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: -360 }}
                        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                      />
                    </svg>
                  </Box>
                  
                  {/* Data Protection Text */}
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    sx={{
                      position: 'absolute',
                      bottom: 20,
                      left: 0,
                      right: 0,
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}>
                      End-to-End Encryption • Regular Security Audits • Penetration Testing
                    </Typography>
                  </Box>
                </Paper>
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
                  Try Skills Assessment Demo
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
