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

// Features data - Updated to reflect AGI platform capabilities
const featuresData = [
  {
    title: 'AGI-Enhanced Reasoning',
    description: 'Advanced AGI technology with 94% reasoning accuracy that autonomously analyzes candidates, predicts success, and makes intelligent hiring decisions.',
    icon: <SmartToyIcon fontSize="large" />,
    color: '#9c27b0', // purple for AGI
    link: '/solutions/agi-recruitment'
  },
  {
    title: 'Real-Time Market Intelligence',
    description: 'Live market data, salary trends, competitor analysis, and industry insights powered by quantum-enhanced processing for strategic hiring.',
    icon: <AnalyticsIcon fontSize="large" />,
    color: '#2196f3', // primary
    link: '/solutions/market-intelligence'
  },
  {
    title: 'Emotional Intelligence Analysis',
    description: 'AI-powered emotional assessment analyzing empathy, communication, and cultural fit with 92% accuracy for better team dynamics.',
    icon: <VideoCallIcon fontSize="large" />,
    color: '#ff9800', // warning/orange
    link: '/solutions/emotional-intelligence'
  },
  {
    title: 'Virtual Hiring Assistant',
    description: 'Intelligent virtual assistants guide candidates and recruiters through the entire hiring process with personalized support.',
    icon: <AssessmentIcon fontSize="large" />,
    color: '#4caf50', // success
    link: '/solutions/virtual-assistant'
  },
  {
    title: 'Quantum-Enhanced Processing',
    description: 'Quantum computing algorithms deliver 847x faster processing, analyzing 15,742 parallel assessments with 99.6% pattern accuracy.',
    icon: <SecurityIcon fontSize="large" />,
    color: '#00bcd4', // cyan for quantum
    link: '/solutions/quantum-processing'
  },
  {
    title: 'Autonomous Hiring Workflow',
    description: 'Fully automated hiring pipeline from candidate sourcing to offer generation, reducing time-to-hire by 75% with AI decision-making.',
    icon: <SyncIcon fontSize="large" />,
    color: '#f44336', // error/red
    link: '/solutions/autonomous-hiring'
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
              POWERFUL CAPABILITIES
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
              Core AGI-Enhanced Features
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
              Our comprehensive suite of tools helps you find, assess, and hire the best talent efficiently
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
                  All-in-One Platform
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
