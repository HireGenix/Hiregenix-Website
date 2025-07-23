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
  Chip,
  LinearProgress,
  Paper,
  Avatar,
  Stack
} from '@mui/material';
import {
  Psychology as PsychologyIcon,
  Speed as SpeedIcon,
  EmojiEmotions as EmojiEmotionsIcon,
  Science as ScienceIcon,
  TrendingUp as TrendingUpIcon,
  AutoAwesome as AutoAwesomeIcon,
  ArrowForward as ArrowForwardIcon,
  CheckCircle as CheckCircleIcon
} from '@mui/icons-material';
import Link from 'next/link';
import { motion } from 'framer-motion';

// AGI Features data
const agiFeatures = [
  {
    title: 'AGI Reasoning Engine',
    description: 'Advanced artificial general intelligence with 94% reasoning accuracy that autonomously analyzes candidates and predicts hiring success.',
    icon: <PsychologyIcon fontSize="large" />,
    color: '#9c27b0',
    metrics: [
      { label: 'Reasoning Accuracy', value: 94 },
      { label: 'Decision Speed', value: 98 },
      { label: 'Pattern Recognition', value: 96 }
    ],
    capabilities: ['Autonomous Decision Making', 'Predictive Analytics', 'Complex Pattern Analysis'],
    link: '/solutions/agi-reasoning'
  },
  {
    title: 'Quantum Processing',
    description: 'Quantum-enhanced algorithms deliver 847x faster processing, analyzing 15,742 parallel assessments with unprecedented accuracy.',
    icon: <ScienceIcon fontSize="large" />,
    color: '#00bcd4',
    metrics: [
      { label: 'Processing Speed', value: 99 },
      { label: 'Parallel Analysis', value: 97 },
      { label: 'Quantum Advantage', value: 95 }
    ],
    capabilities: ['2.3ms Processing Speed', '15,742 Parallel Analyses', '99.6% Pattern Accuracy'],
    link: '/solutions/quantum-processing'
  },
  {
    title: 'Emotional Intelligence AI',
    description: 'Sophisticated emotional analysis engine that evaluates empathy, communication, and cultural fit with 92% accuracy.',
    icon: <EmojiEmotionsIcon fontSize="large" />,
    color: '#ff9800',
    metrics: [
      { label: 'Empathy Analysis', value: 92 },
      { label: 'Communication Assessment', value: 89 },
      { label: 'Cultural Fit', value: 91 }
    ],
    capabilities: ['Team Dynamics Analysis', 'Cultural Compatibility', 'Leadership Potential'],
    link: '/solutions/emotional-intelligence'
  },
  {
    title: 'Real-Time Market Intelligence',
    description: 'Live market data analysis providing salary trends, competitor insights, and industry dynamics for strategic hiring decisions.',
    icon: <TrendingUpIcon fontSize="large" />,
    color: '#2196f3',
    metrics: [
      { label: 'Market Coverage', value: 88 },
      { label: 'Data Accuracy', value: 95 },
      { label: 'Trend Prediction', value: 87 }
    ],
    capabilities: ['Live Salary Data', 'Competitor Analysis', 'Industry Insights'],
    link: '/solutions/market-intelligence'
  },
  {
    title: 'Autonomous Hiring Workflow',
    description: 'Fully automated hiring pipeline from candidate sourcing to offer generation, reducing time-to-hire by 75%.',
    icon: <AutoAwesomeIcon fontSize="large" />,
    color: '#4caf50',
    metrics: [
      { label: 'Automation Level', value: 85 },
      { label: 'Time Reduction', value: 75 },
      { label: 'Accuracy Rate', value: 93 }
    ],
    capabilities: ['End-to-End Automation', 'Smart Sourcing', 'Auto-Generated Offers'],
    link: '/solutions/autonomous-hiring'
  },
  {
    title: 'Virtual Hiring Assistant',
    description: 'Intelligent AI assistants that guide both candidates and recruiters through the entire hiring process with personalized support.',
    icon: <SpeedIcon fontSize="large" />,
    color: '#f44336',
    metrics: [
      { label: 'User Satisfaction', value: 96 },
      { label: 'Response Time', value: 99 },
      { label: 'Problem Resolution', value: 91 }
    ],
    capabilities: ['24/7 Support', 'Personalized Guidance', 'Multi-Language Support'],
    link: '/solutions/virtual-assistant'
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

export const AGIFeaturesSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${alpha(theme.palette.background.default, 0.8)} 0%, ${alpha(theme.palette.primary.dark, 0.02)} 100%)`,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `radial-gradient(circle at 20% 50%, ${theme.palette.primary.main} 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${theme.palette.secondary.main} 0%, transparent 50%)`,
          backgroundSize: '50% 50%',
          zIndex: 1
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Chip
              label="🧠 AGI-POWERED CAPABILITIES"
              sx={{
                mb: 3,
                py: 1,
                px: 3,
                borderRadius: '50px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                color: 'white',
                fontWeight: 700,
                fontSize: '0.9rem',
                boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.3)}`
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 900,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.2
              }}
            >
              Next-Generation AI Features
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography
              variant="h5"
              component="p"
              color="text.secondary"
              sx={{
                maxWidth: '900px',
                mx: 'auto',
                fontSize: { xs: '1.2rem', md: '1.4rem' },
                fontWeight: 400,
                mb: 2
              }}
            >
              Experience the power of Artificial General Intelligence with quantum processing, emotional analysis, and autonomous decision-making capabilities
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              flexWrap="wrap"
              sx={{ mt: 4 }}
            >
              <Chip
                icon={<CheckCircleIcon />}
                label="94% AGI Accuracy"
                color="primary"
                variant="outlined"
                sx={{ fontWeight: 600 }}
              />
              <Chip
                icon={<CheckCircleIcon />}
                label="847x Faster Processing"
                color="primary"
                variant="outlined"
                sx={{ fontWeight: 600 }}
              />
              <Chip
                icon={<CheckCircleIcon />}
                label="Real-Time Intelligence"
                color="primary"
                variant="outlined"
                sx={{ fontWeight: 600 }}
              />
            </Stack>
          </motion.div>
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
          {agiFeatures.map((feature, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <motion.div variants={itemVariant}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    background: alpha(theme.palette.background.paper, 0.8),
                    backdropFilter: 'blur(20px)',
                    border: `2px solid ${alpha(feature.color, 0.2)}`,
                    boxShadow: `0 20px 60px ${alpha(theme.palette.common.black, 0.1)}`,
                    transition: 'all 0.4s ease',
                    overflow: 'hidden',
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 25px 80px ${alpha(theme.palette.common.black, 0.15)}`,
                      border: `2px solid ${alpha(feature.color, 0.4)}`,
                      '& .feature-header': {
                        background: `linear-gradient(135deg, ${alpha(feature.color, 0.2)} 0%, ${alpha(feature.color, 0.1)} 100%)`
                      }
                    }
                  }}
                >
                  {/* Header with Icon */}
                  <Box
                    className="feature-header"
                    sx={{
                      p: 3,
                      background: `linear-gradient(135deg, ${alpha(feature.color, 0.1)} 0%, ${alpha(feature.color, 0.05)} 100%)`,
                      borderBottom: `1px solid ${alpha(feature.color, 0.2)}`,
                      transition: 'background 0.4s ease'
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        sx={{
                          width: 60,
                          height: 60,
                          bgcolor: alpha(feature.color, 0.15),
                          color: feature.color,
                          mr: 2,
                          border: `2px solid ${alpha(feature.color, 0.3)}`
                        }}
                      >
                        {feature.icon}
                      </Avatar>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.text.primary
                        }}
                      >
                        {feature.title}
                      </Typography>
                    </Box>
                  </Box>

                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        fontWeight: 400,
                        mb: 3,
                        lineHeight: 1.6
                      }}
                    >
                      {feature.description}
                    </Typography>

                    {/* Metrics */}
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                        Performance Metrics
                      </Typography>
                      {feature.metrics.map((metric, idx) => (
                        <Box key={idx} sx={{ mb: 1.5 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                            <Typography variant="body2" color="text.secondary">
                              {metric.label}
                            </Typography>
                            <Typography variant="body2" fontWeight={600} color={feature.color}>
                              {metric.value}%
                            </Typography>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={metric.value}
                            sx={{
                              height: 6,
                              borderRadius: 3,
                              backgroundColor: alpha(feature.color, 0.1),
                              '& .MuiLinearProgress-bar': {
                                backgroundColor: feature.color,
                                borderRadius: 3
                              }
                            }}
                          />
                        </Box>
                      ))}
                    </Box>

                    {/* Capabilities */}
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                        Key Capabilities
                      </Typography>
                      <Stack spacing={1}>
                        {feature.capabilities.map((capability, idx) => (
                          <Chip
                            key={idx}
                            label={capability}
                            size="small"
                            sx={{
                              backgroundColor: alpha(feature.color, 0.1),
                              color: feature.color,
                              fontWeight: 500,
                              borderRadius: 2,
                              '& .MuiChip-label': {
                                px: 1
                              }
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>

                    <Button
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      component={Link}
                      href={feature.link}
                      fullWidth
                      sx={{
                        py: 1.5,
                        fontWeight: 600,
                        borderRadius: 3,
                        background: `linear-gradient(135deg, ${feature.color} 0%, ${alpha(feature.color, 0.8)} 100%)`,
                        boxShadow: `0 8px 25px ${alpha(feature.color, 0.3)}`,
                        '&:hover': {
                          background: `linear-gradient(135deg, ${feature.color} 0%, ${feature.color} 100%)`,
                          transform: 'translateY(-2px)',
                          boxShadow: `0 12px 35px ${alpha(feature.color, 0.4)}`
                        }
                      }}
                    >
                      Explore Feature
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Paper
            elevation={0}
            sx={{
              mt: 8,
              p: 6,
              borderRadius: 4,
              background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.02)} 100%)`,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
              textAlign: 'center'
            }}
          >
            <Typography variant="h4" fontWeight={700} gutterBottom>
              Ready to Experience AGI-Powered Recruitment?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
              Join leading organizations already leveraging our AGI platform to revolutionize their hiring process
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                component={Link}
                href="/demo"
                sx={{
                  py: 2,
                  px: 4,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                  boxShadow: `0 12px 35px ${alpha(theme.palette.primary.main, 0.3)}`
                }}
              >
                Schedule Demo
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                href="/solutions"
                sx={{
                  py: 2,
                  px: 4,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main
                }}
              >
                View All Solutions
              </Button>
            </Stack>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AGIFeaturesSection;
