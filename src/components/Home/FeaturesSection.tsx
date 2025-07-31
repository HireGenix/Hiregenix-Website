'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
  alpha,
  Divider
} from '@mui/material';
import {
  SmartToy as SmartToyIcon,
  VideoCall as VideoCallIcon,
  Assessment as AssessmentIcon,
  Analytics as AnalyticsIcon,
  Security as SecurityIcon,
  Sync as SyncIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Features data - Realistic AAI platform capabilities
const featuresData = [
  {
    title: 'Intelligent Candidate Matching',
    description: 'Advanced AI algorithms analyze resumes, skills, and experience to match candidates with job requirements, helping recruiters identify the best fits more efficiently.',
    icon: <SmartToyIcon fontSize="large" />,
    color: '#9c27b0', // purple for AI
    link: '/solutions/candidate-matching'
  },
  {
    title: 'Market Insights & Analytics',
    description: 'Access comprehensive market data, salary benchmarks, and hiring trends to make informed recruitment decisions and stay competitive.',
    icon: <AnalyticsIcon fontSize="large" />,
    color: '#2196f3', // primary
    link: '/solutions/market-insights'
  },
  {
    title: 'Video Interview Platform',
    description: 'Streamlined video interviewing with AI-assisted evaluation tools that help assess communication skills and cultural fit indicators.',
    icon: <VideoCallIcon fontSize="large" />,
    color: '#ff9800', // warning/orange
    link: '/solutions/video-interviews'
  },
  {
    title: 'Skills Assessment Tools',
    description: 'Comprehensive testing platform with customizable assessments to evaluate technical skills, cognitive abilities, and job-specific competencies.',
    icon: <AssessmentIcon fontSize="large" />,
    color: '#4caf50', // success
    link: '/solutions/skills-assessment'
  },
  {
    title: 'Data Security & Compliance',
    description: 'Enterprise-grade security measures and compliance tools to protect candidate data and ensure adherence to privacy regulations.',
    icon: <SecurityIcon fontSize="large" />,
    color: '#00bcd4', // cyan for security
    link: '/solutions/security-compliance'
  },
  {
    title: 'Workflow Automation',
    description: 'Automate repetitive recruitment tasks like scheduling, follow-ups, and status updates to improve efficiency and candidate experience.',
    icon: <SyncIcon fontSize="large" />,
    color: '#f44336', // error/red
    link: '/solutions/workflow-automation'
  }
];

// Animation variants
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export const FeaturesSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.palette.background.default,
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="overline"
              component="p"
              sx={{ 
                mb: 1, 
                fontWeight: 600, 
                letterSpacing: 1.5,
                color: theme.palette.primary.main
              }}
            >
              ADVANCED CAPABILITIES
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '2rem', md: '2.75rem' }
              }}
            >
              Advanced AI-Powered Features
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography
              variant="h5"
              component="p"
              color="text.secondary"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                fontWeight: 400,
                mb: 6
              }}
            >
              Our comprehensive recruitment platform uses advanced artificial intelligence to streamline your hiring process and help you find the right talent faster
            </Typography>
          </motion.div>
          
          <Box sx={{ width: '100%', mb: 6 }}>
            <Divider>
              <Box 
                component={motion.div}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                sx={{ 
                  px: 2, 
                  py: 0.5, 
                  borderRadius: 2,
                  background: alpha(theme.palette.primary.main, 0.05),
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                }}
              >
                <Typography 
                  variant="subtitle2" 
                  color="primary"
                  sx={{ fontWeight: 600 }}
                >
                  Smart Recruitment Platform
                </Typography>
              </Box>
            </Divider>
          </Box>
        </Box>

        <Grid 
          container 
          spacing={4}
          component={motion.div}
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuresData.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div variants={itemVariant}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    background: alpha(theme.palette.background.paper, 0.6),
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    boxShadow: `0 10px 40px ${alpha(theme.palette.common.black, 0.06)}`,
                    transition: 'all 0.3s ease',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 15px 50px ${alpha(theme.palette.common.black, 0.1)}`,
                      '& .feature-icon-wrapper': {
                        transform: 'scale(1.05)'
                      }
                    }
                  }}
                >
                  <Box
                    className="feature-icon-wrapper"
                    sx={{
                      height: 140,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `linear-gradient(135deg, ${alpha(feature.color, 0.1)} 0%, ${alpha(feature.color, 0.2)} 100%)`,
                      color: feature.color,
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: alpha(feature.color, 0.15),
                        backdropFilter: 'blur(5px)',
                        border: `1px solid ${alpha(feature.color, 0.3)}`
                      }}
                    >
                      {feature.icon}
                    </Box>
                  </Box>
                  
                  <CardContent sx={{ p: 3 }}>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      sx={{ 
                        fontWeight: 700, 
                        mb: 1.5,
                        color: theme.palette.text.primary
                      }}
                    >
                      {feature.title}
                    </Typography>
                    
                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{ 
                        fontWeight: 400,
                        mb: 3,
                        minHeight: 80
                      }}
                    >
                      {feature.description}
                    </Typography>
                    
                    <Button
                      variant="text"
                      color="primary"
                      endIcon={<ArrowForwardIcon />}
                      component={Link}
                      href={feature.link}
                      sx={{ 
                        fontWeight: 600,
                        '&:hover': {
                          background: alpha(theme.palette.primary.main, 0.05)
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
