'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  alpha,
  Paper,
  Button,
  Chip,
  Tab,
  Tabs,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Analytics as AnalyticsIcon,
  Assessment as AssessmentIcon,
  VideoCall as VideoCallIcon,
  Psychology as PsychologyIcon,
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowForwardIcon,
  Insights as InsightsIcon,
  TrendingUp as TrendingUpIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Solution data
const solutions = [
  {
    id: 'ai-recruitment',
    title: 'AI-Powered Candidate Matching',
    description: 'Our AI-powered candidate matching system uses semantic understanding to find the perfect candidates for your open positions, saving time and improving hiring quality.',
    icon: <AnalyticsIcon fontSize="large" />,
    image: '/solutions/ai-recruitment.jpg',
    features: [
      'Semantic Skills Matching',
      'Career Trajectory Prediction',
      'Cultural Fit Assessment',
      'Bias Detection & Mitigation',
      'Multilingual Resume Analysis'
    ],
    benefits: [
      'Reduce time-to-hire by 50%',
      'Improve quality-of-hire by 40%',
      'Eliminate unconscious bias',
      'Find candidates with potential beyond their resume',
      'Support for 30+ languages'
    ],
    cta: {
      text: 'Learn More About AI Recruitment',
      link: '/solutions/ai-recruitment'
    },
    color: '#f05126' // primary color
  },
  {
    id: 'video-interviews',
    title: 'Video Interview Platform',
    description: 'Conduct seamless video interviews with candidates from anywhere in the world, with AI-powered analysis to help you make better hiring decisions.',
    icon: <VideoCallIcon fontSize="large" />,
    image: '/solutions/video-interviews.jpg',
    features: [
      'Real-time Sentiment Analysis',
      'Speech Pattern Analysis',
      'Behavioral Assessment',
      'Technical Skills Verification',
      'Interview Coaching for Candidates'
    ],
    benefits: [
      'Reduce interview scheduling time by 70%',
      'Gain deeper insights into candidate soft skills',
      'Standardize the interview process',
      'Improve candidate experience',
      'Reduce hiring manager time by 40%'
    ],
    cta: {
      text: 'Discover Video Interview Platform',
      link: '/solutions/video-interviews'
    },
    color: '#2196f3' // secondary color
  },
  {
    id: 'workforce-analytics',
    title: 'Predictive Workforce Analytics',
    description: 'Gain powerful insights into your workforce with our predictive analytics platform, helping you make data-driven decisions about hiring and team composition.',
    icon: <InsightsIcon fontSize="large" />,
    image: '/solutions/talent-analytics.jpg',
    features: [
      'Attrition Prediction',
      'Performance Prediction',
      'Team Composition Optimization',
      'Hiring Needs Forecasting',
      'Salary Optimization'
    ],
    benefits: [
      'Reduce employee turnover by 35%',
      'Optimize team performance',
      'Predict future hiring needs with 85% accuracy',
      'Identify skill gaps before they impact business',
      'Make data-driven compensation decisions'
    ],
    cta: {
      text: 'See Analytics in Action',
      link: '/solutions/workforce-analytics'
    },
    color: '#4caf50' // success color
  },
  {
    id: 'skills-assessment',
    title: 'Skills Assessment Platform',
    description: 'Evaluate candidates with customizable assessments that measure skills, knowledge, and cultural fit with unprecedented accuracy.',
    icon: <AssessmentIcon fontSize="large" />,
    image: '/solutions/candidate-assessment.jpg',
    features: [
      'Adaptive Testing',
      'Coding Challenges with AI Review',
      'Soft Skills Simulations',
      'Industry-Specific Assessments',
      'Continuous Learning Recommendations'
    ],
    benefits: [
      'Reduce bad hires by 60%',
      'Standardize skills evaluation',
      'Eliminate resume fraud',
      'Identify high-potential candidates',
      'Create personalized onboarding plans'
    ],
    cta: {
      text: 'Explore Assessment Solutions',
      link: '/solutions/skills-assessment'
    },
    color: '#ff9800' // warning color
  }
];

const SolutionsFeatures: React.FC = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box 
      id="features"
      sx={{ 
        py: { xs: 8, md: 12 },
        background: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.03)} 0%, ${alpha(theme.palette.primary.main, 0)} 70%)`,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.03)} 0%, ${alpha(theme.palette.secondary.main, 0)} 70%)`,
          zIndex: 0,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Chip 
              label="CORE SOLUTIONS" 
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
                fontSize: { xs: '2rem', md: '2.75rem' },
              }}
            >
              Comprehensive Recruitment Tools
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
                mb: 6,
              }}
            >
              Explore our suite of powerful tools designed to streamline your hiring process
            </Typography>
          </motion.div>
        </Box>

        {/* Tabs for solution selection */}
        <Box sx={{ mb: 6 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            textColor="primary"
            indicatorColor="primary"
            sx={{
              '& .MuiTabs-indicator': {
                height: 3,
                borderRadius: 1.5,
              },
              '& .MuiTab-root': {
                minHeight: 60,
                fontWeight: 600,
                fontSize: { xs: '0.875rem', md: '1rem' },
                textTransform: 'none',
                px: { xs: 2, md: 3 },
                color: 'text.secondary',
                '&.Mui-selected': {
                  color: 'primary.main',
                },
              },
            }}
          >
            {solutions.map((solution, index) => (
              <Tab
                key={solution.id}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: activeTab === index ? alpha(solution.color, 0.1) : 'transparent',
                        color: activeTab === index ? solution.color : 'inherit',
                        mr: 1.5,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {React.cloneElement(solution.icon, { fontSize: 'small' })}
                    </Box>
                    {solution.title}
                  </Box>
                }
              />
            ))}
          </Tabs>
        </Box>

        {/* Solution content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ position: 'relative' }}>
                  <Paper
                    elevation={0}
                    sx={{
                      borderRadius: 4,
                      overflow: 'hidden',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                      position: 'relative',
                      zIndex: 2,
                      border: `1px solid ${alpha(solutions[activeTab].color, 0.1)}`,
                      height: { xs: 300, md: 400 },
                      background: '#1E1E1E',
                      color: 'white'
                    }}
                  >
                    {/* Interactive Solution Demo */}
                    <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                      {/* Header */}
                      <Box
                        sx={{
                          p: 2,
                          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                          background: `linear-gradient(135deg, ${alpha(solutions[activeTab].color, 0.8)}, ${solutions[activeTab].color})`,
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
                            {React.cloneElement(solutions[activeTab].icon, { fontSize: 'small' })}
                          </Box>
                          <Typography variant="h6" fontWeight={600}>
                            {solutions[activeTab].title}
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
                      
                      {/* Demo Content */}
                      <Box sx={{ p: 3, height: 'calc(100% - 60px)', overflowY: 'auto' }}>
                        {activeTab === 0 && (
                          // AI Recruitment Demo
                          <Box>
                            <Typography variant="subtitle1" fontWeight={600} color="white" gutterBottom>
                              Candidate Matching
                            </Typography>
                            
                            <Box sx={{ mb: 3 }}>
                              <Box
                                component={motion.div}
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1.5 }}
                                sx={{
                                  height: 4,
                                  background: `linear-gradient(90deg, ${solutions[activeTab].color}, ${alpha(solutions[activeTab].color, 0.3)})`,
                                  borderRadius: 2,
                                  mb: 1
                                }}
                              />
                              <Typography variant="caption" color="rgba(255, 255, 255, 0.6)">
                                Analyzing 245 candidates for Frontend Developer position...
                              </Typography>
                            </Box>
                            
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                              {[
                                { name: 'Emily Johnson', skills: ['React', 'TypeScript', 'UI/UX'], match: 96 },
                                { name: 'Michael Chen', skills: ['React', 'JavaScript', 'CSS'], match: 92 },
                                { name: 'Sarah Williams', skills: ['Angular', 'TypeScript', 'Node.js'], match: 85 }
                              ].map((candidate, idx) => (
                                <Box
                                  key={idx}
                                  component={motion.div}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.2 * idx + 0.5, duration: 0.5 }}
                                  sx={{
                                    p: 2,
                                    borderRadius: 2,
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                  }}
                                >
                                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                      <Box
                                        sx={{
                                          width: 32,
                                          height: 32,
                                          borderRadius: '50%',
                                          background: alpha(solutions[activeTab].color, 0.2),
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          fontWeight: 700,
                                          color: solutions[activeTab].color
                                        }}
                                      >
                                        {candidate.name.charAt(0)}
                                      </Box>
                                      <Typography variant="body2" fontWeight={600} color="white">
                                        {candidate.name}
                                      </Typography>
                                    </Box>
                                    
                                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                                      {candidate.skills.map((skill, skillIdx) => (
                                        <Chip
                                          key={skillIdx}
                                          label={skill}
                                          size="small"
                                          sx={{
                                            height: 20,
                                            fontSize: '0.625rem',
                                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                            color: 'rgba(255, 255, 255, 0.7)',
                                          }}
                                        />
                                      ))}
                                    </Box>
                                  </Box>
                                  
                                  <Box
                                    component={motion.div}
                                    animate={{ 
                                      scale: [1, 1.05, 1],
                                    }}
                                    transition={{ 
                                      duration: 2,
                                      repeat: Infinity,
                                      repeatType: 'loop',
                                      delay: idx * 0.5
                                    }}
                                  >
                                    <Chip
                                      size="small"
                                      label={`${candidate.match}%`}
                                      sx={{ 
                                        backgroundColor: alpha(solutions[activeTab].color, 0.2),
                                        color: solutions[activeTab].color,
                                        fontWeight: 600,
                                        height: 24,
                                        minWidth: 45
                                      }}
                                    />
                                  </Box>
                                </Box>
                              ))}
                            </Box>
                            
                            <Box
                              component={motion.div}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1.5, duration: 0.5 }}
                              sx={{
                                mt: 3,
                                p: 2,
                                borderRadius: 2,
                                background: alpha(solutions[activeTab].color, 0.1),
                                border: `1px solid ${alpha(solutions[activeTab].color, 0.2)}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <Typography variant="body2" color="white">
                                <strong>AI Insight:</strong> Emily has the strongest TypeScript skills
                              </Typography>
                              <Box
                                component={motion.div}
                                animate={{ 
                                  scale: [1, 1.1, 1],
                                  opacity: [0.7, 1, 0.7]
                                }}
                                transition={{ 
                                  duration: 2,
                                  repeat: Infinity,
                                  repeatType: 'loop'
                                }}
                                sx={{
                                  width: 24,
                                  height: 24,
                                  borderRadius: '50%',
                                  background: alpha(solutions[activeTab].color, 0.2),
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                <PsychologyIcon sx={{ fontSize: '0.875rem', color: solutions[activeTab].color }} />
                              </Box>
                            </Box>
                          </Box>
                        )}
                        
                        {activeTab === 1 && (
                          // Video Interview Demo
                          <Box>
                            <Typography variant="subtitle1" fontWeight={600} color="white" gutterBottom>
                              Interview Analysis
                            </Typography>
                            
                            <Box
                              sx={{
                                mb: 3,
                                p: 2,
                                borderRadius: 2,
                                background: 'rgba(0, 0, 0, 0.2)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                position: 'relative',
                                height: 120,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
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
                                <VideoCallIcon sx={{ fontSize: '3rem', color: solutions[activeTab].color }} />
                              </Box>
                              
                              <Box
                                sx={{
                                  position: 'absolute',
                                  bottom: 10,
                                  left: 10,
                                  right: 10,
                                  display: 'flex',
                                  justifyContent: 'space-between'
                                }}
                              >
                                <Typography variant="caption" color="rgba(255, 255, 255, 0.6)">
                                  Interview with Michael Chen
                                </Typography>
                                <Typography variant="caption" color="rgba(255, 255, 255, 0.6)">
                                  12:45
                                </Typography>
                              </Box>
                            </Box>
                            
                            <Box sx={{ mb: 3 }}>
                              <Typography variant="body2" color="white" gutterBottom>
                                Sentiment Analysis
                              </Typography>
                              
                              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                                {[
                                  { label: 'Positive', value: 68, color: theme.palette.success.main },
                                  { label: 'Neutral', value: 27, color: theme.palette.info.main },
                                  { label: 'Negative', value: 5, color: theme.palette.error.main }
                                ].map((sentiment, idx) => (
                                  <Box
                                    key={idx}
                                    sx={{
                                      flex: 1,
                                      p: 1,
                                      borderRadius: 1,
                                      background: alpha(sentiment.color, 0.1),
                                      border: `1px solid ${alpha(sentiment.color, 0.2)}`,
                                      textAlign: 'center'
                                    }}
                                  >
                                    <Typography variant="caption" color={sentiment.color} fontWeight={600}>
                                      {sentiment.value}%
                                    </Typography>
                                    <Typography variant="caption" display="block" color="rgba(255, 255, 255, 0.6)">
                                      {sentiment.label}
                                    </Typography>
                                  </Box>
                                ))}
                              </Box>
                              
                              <Box
                                component={motion.div}
                                initial={{ width: '0%' }}
                                animate={{ width: '75%' }}
                                transition={{ duration: 1 }}
                                sx={{
                                  height: 8,
                                  background: `linear-gradient(90deg, ${solutions[activeTab].color}, ${alpha(solutions[activeTab].color, 0.3)})`,
                                  borderRadius: 4,
                                  mb: 1
                                }}
                              />
                              <Typography variant="caption" color="rgba(255, 255, 255, 0.6)">
                                Confidence Score: 75%
                              </Typography>
                            </Box>
                            
                            <Box
                              component={motion.div}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1, duration: 0.5 }}
                              sx={{
                                p: 2,
                                borderRadius: 2,
                                background: alpha(solutions[activeTab].color, 0.1),
                                border: `1px solid ${alpha(solutions[activeTab].color, 0.2)}`,
                              }}
                            >
                              <Typography variant="body2" color="white" gutterBottom>
                                <strong>Key Insights:</strong>
                              </Typography>
                              <Typography variant="caption" color="rgba(255, 255, 255, 0.7)" component="div" sx={{ mb: 1 }}>
                                • Strong communication skills
                              </Typography>
                              <Typography variant="caption" color="rgba(255, 255, 255, 0.7)" component="div" sx={{ mb: 1 }}>
                                • Confident when discussing technical topics
                              </Typography>
                              <Typography variant="caption" color="rgba(255, 255, 255, 0.7)" component="div">
                                • Showed enthusiasm about company culture
                              </Typography>
                            </Box>
                          </Box>
                        )}
                        
                        {activeTab === 2 && (
                          // Workforce Analytics Demo
                          <Box>
                            <Typography variant="subtitle1" fontWeight={600} color="white" gutterBottom>
                              Team Performance Analytics
                            </Typography>
                            
                            <Box sx={{ mb: 3 }}>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="caption" color="rgba(255, 255, 255, 0.6)">
                                  Engineering Team
                                </Typography>
                                <Typography variant="caption" color={solutions[activeTab].color} fontWeight={600}>
                                  +12% YoY
                                </Typography>
                              </Box>
                              
                              <Box
                                component={motion.div}
                                initial={{ width: '0%' }}
                                animate={{ width: '85%' }}
                                transition={{ duration: 1 }}
                                sx={{
                                  height: 8,
                                  background: `linear-gradient(90deg, ${solutions[activeTab].color}, ${alpha(solutions[activeTab].color, 0.3)})`,
                                  borderRadius: 4,
                                  mb: 2
                                }}
                              />
                              
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="caption" color="rgba(255, 255, 255, 0.6)">
                                  Marketing Team
                                </Typography>
                                <Typography variant="caption" color={solutions[activeTab].color} fontWeight={600}>
                                  +8% YoY
                                </Typography>
                              </Box>
                              
                              <Box
                                component={motion.div}
                                initial={{ width: '0%' }}
                                animate={{ width: '72%' }}
                                transition={{ duration: 1, delay: 0.2 }}
                                sx={{
                                  height: 8,
                                  background: `linear-gradient(90deg, ${solutions[activeTab].color}, ${alpha(solutions[activeTab].color, 0.3)})`,
                                  borderRadius: 4,
                                  mb: 2
                                }}
                              />
                              
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="caption" color="rgba(255, 255, 255, 0.6)">
                                  Sales Team
                                </Typography>
                                <Typography variant="caption" color={solutions[activeTab].color} fontWeight={600}>
                                  +15% YoY
                                </Typography>
                              </Box>
                              
                              <Box
                                component={motion.div}
                                initial={{ width: '0%' }}
                                animate={{ width: '92%' }}
                                transition={{ duration: 1, delay: 0.4 }}
                                sx={{
                                  height: 8,
                                  background: `linear-gradient(90deg, ${solutions[activeTab].color}, ${alpha(solutions[activeTab].color, 0.3)})`,
                                  borderRadius: 4,
                                }}
                              />
                            </Box>
                            
                            <Box
                              component={motion.div}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1.2, duration: 0.5 }}
                              sx={{
                                p: 2,
                                borderRadius: 2,
                                background: alpha(solutions[activeTab].color, 0.1),
                                border: `1px solid ${alpha(solutions[activeTab].color, 0.2)}`,
                                mb: 3
                              }}
                            >
                              <Typography variant="body2" color="white" gutterBottom>
                                <strong>Attrition Risk:</strong>
                              </Typography>
                              <Box sx={{ display: 'flex', gap: 1 }}>
                                {[
                                  { label: 'Low', value: 75, color: theme.palette.success.main },
                                  { label: 'Medium', value: 18, color: theme.palette.warning.main },
                                  { label: 'High', value: 7, color: theme.palette.error.main }
                                ].map((risk, idx) => (
                                  <Box
                                    key={idx}
                                    sx={{
                                      flex: 1,
                                      p: 1,
                                      borderRadius: 1,
                                      background: alpha(risk.color, 0.1),
                                      border: `1px solid ${alpha(risk.color, 0.2)}`,
                                      textAlign: 'center'
                                    }}
                                  >
                                    <Typography variant="caption" color={risk.color} fontWeight={600}>
                                      {risk.value}%
                                    </Typography>
                                    <Typography variant="caption" display="block" color="rgba(255, 255, 255, 0.6)">
                                      {risk.label}
                                    </Typography>
                                  </Box>
                                ))}
                              </Box>
                            </Box>
                            
                            <Box
                              component={motion.div}
                              animate={{ 
                                scale: [1, 1.02, 1],
                              }}
                              transition={{ 
                                duration: 3,
                                repeat: Infinity,
                                repeatType: 'loop'
                              }}
                              sx={{
                                p: 1.5,
                                borderRadius: 2,
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                              }}
                            >
                              <Box
                                sx={{
                                  width: 32,
                                  height: 32,
                                  borderRadius: '50%',
                                  background: alpha(solutions[activeTab].color, 0.2),
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                <InsightsIcon sx={{ fontSize: '1rem', color: solutions[activeTab].color }} />
                              </Box>
                              <Typography variant="caption" color="white">
                                <strong>AI Recommendation:</strong> Consider skill development for Marketing team
                              </Typography>
                            </Box>
                          </Box>
                        )}
                        
                        {activeTab === 3 && (
                          // Skills Assessment Demo
                          <Box>
                            <Typography variant="subtitle1" fontWeight={600} color="white" gutterBottom>
                              Skills Assessment Results
                            </Typography>
                            
                            <Box
                              sx={{
                                mb: 3,
                                p: 2,
                                borderRadius: 2,
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                              }}
                            >
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="body2" color="white" fontWeight={600}>
                                  Sarah Williams
                                </Typography>
                                <Chip
                                  size="small"
                                  label="92% Overall"
                                  sx={{ 
                                    backgroundColor: alpha(solutions[activeTab].color, 0.2),
                                    color: solutions[activeTab].color,
                                    fontWeight: 600,
                                    height: 24
                                  }}
                                />
                              </Box>
                              <Typography variant="caption" color="rgba(255, 255, 255, 0.6)" sx={{ display: 'block', mb: 2 }}>
                                Full Stack Developer Assessment
                              </Typography>
                              
                              <Box sx={{ mb: 2 }}>
                                {[
                                  { skill: 'JavaScript', score: 95 },
                                  { skill: 'React', score: 90 },
                                  { skill: 'Node.js', score: 88 },
                                  { skill: 'Database Design', score: 85 }
                                ].map((skill, idx) => (
                                  <Box key={idx} sx={{ mb: 1 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                      <Typography variant="caption" color="rgba(255, 255, 255, 0.8)">
                                        {skill.skill}
                                      </Typography>
                                      <Typography variant="caption" color={solutions[activeTab].color} fontWeight={600}>
                                        {skill.score}%
                                      </Typography>
                                    </Box>
                                    <Box
                                      component={motion.div}
                                      initial={{ width: '0%' }}
                                      animate={{ width: `${skill.score}%` }}
                                      transition={{ duration: 1, delay: 0.1 * idx }}
                                      sx={{
                                        height: 4,
                                        background: `linear-gradient(90deg, ${solutions[activeTab].color}, ${alpha(solutions[activeTab].color, 0.3)})`,
                                        borderRadius: 2
                                      }}
                                    />
                                  </Box>
                                ))}
                              </Box>
                            </Box>
                            
                            <Box
                              component={motion.div}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1.5, duration: 0.5 }}
                              sx={{
                                p: 2,
                                borderRadius: 2,
                                background: alpha(solutions[activeTab].color, 0.1),
                                border: `1px solid ${alpha(solutions[activeTab].color, 0.2)}`,
                                mb: 2
                              }}
                            >
                              <Typography variant="body2" color="white" gutterBottom>
                                <strong>Strengths:</strong>
                              </Typography>
                              <Typography variant="caption" color="rgba(255, 255, 255, 0.7)" component="div" sx={{ mb: 1 }}>
                                • Excellent problem-solving approach
                              </Typography>
                              <Typography variant="caption" color="rgba(255, 255, 255, 0.7)" component="div" sx={{ mb: 1 }}>
                                • Strong JavaScript fundamentals
                              </Typography>
                              <Typography variant="caption" color="rgba(255, 255, 255, 0.7)" component="div">
                                • Good code organization
                              </Typography>
                            </Box>
                            
                            <Box
                              component={motion.div}
                              animate={{ 
                                scale: [1, 1.02, 1],
                              }}
                              transition={{ 
                                duration: 3,
                                repeat: Infinity,
                                repeatType: 'loop'
                              }}
                              sx={{
                                p: 1.5,
                                borderRadius: 2,
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                              }}
                            >
                              <Box
                                sx={{
                                  width: 32,
                                  height: 32,
                                  borderRadius: '50%',
                                  background: alpha(solutions[activeTab].color, 0.2),
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                <AssessmentIcon sx={{ fontSize: '1rem', color: solutions[activeTab].color }} />
                              </Box>
                              <Typography variant="caption" color="white">
                                <strong>Recommendation:</strong> Excellent match for Senior Developer role
                              </Typography>
                            </Box>
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </Paper>

                  {/* Decorative elements */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -20,
                      right: -20,
                      width: 120,
                      height: 120,
                      borderRadius: 4,
                      background: alpha(solutions[activeTab].color, 0.1),
                      zIndex: 1,
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: -30,
                      left: -30,
                      width: 150,
                      height: 150,
                      borderRadius: '50%',
                      border: `2px dashed ${alpha(solutions[activeTab].color, 0.3)}`,
                      zIndex: 1,
                    }}
                  />
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: 3,
                    gap: 2
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: alpha(solutions[activeTab].color, 0.1),
                      color: solutions[activeTab].color,
                    }}
                  >
                    {solutions[activeTab].icon}
                  </Box>
                  <Typography variant="h3" component="h3" fontWeight={700} sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
                    {solutions[activeTab].title}
                  </Typography>
                </Box>
                
                <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4, lineHeight: 1.8 }}>
                  {solutions[activeTab].description}
                </Typography>
                
                <Grid container spacing={4} sx={{ mb: 4 }}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" fontWeight={600} sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                      <Box 
                        component="span" 
                        sx={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          width: 30,
                          height: 30,
                          borderRadius: '50%',
                          background: alpha(solutions[activeTab].color, 0.1),
                          color: solutions[activeTab].color,
                          mr: 1.5,
                        }}
                      >
                        <CheckCircleIcon fontSize="small" />
                      </Box>
                      Key Features
                    </Typography>
                    <List disablePadding>
                      {solutions[activeTab].features.map((feature, idx) => (
                        <ListItem 
                          key={idx} 
                          disablePadding 
                          sx={{ 
                            mb: 1.5,
                            display: 'flex',
                            alignItems: 'flex-start',
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 36, color: solutions[activeTab].color }}>
                            <StarIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText 
                            primary={feature} 
                            primaryTypographyProps={{ 
                              variant: 'body2',
                              fontWeight: 500,
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" fontWeight={600} sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                      <Box 
                        component="span" 
                        sx={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          width: 30,
                          height: 30,
                          borderRadius: '50%',
                          background: alpha(solutions[activeTab].color, 0.1),
                          color: solutions[activeTab].color,
                          mr: 1.5,
                        }}
                      >
                        <TrendingUpIcon fontSize="small" />
                      </Box>
                      Benefits
                    </Typography>
                    <List disablePadding>
                      {solutions[activeTab].benefits.map((benefit, idx) => (
                        <ListItem 
                          key={idx} 
                          disablePadding 
                          sx={{ 
                            mb: 1.5,
                            display: 'flex',
                            alignItems: 'flex-start',
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 36, color: solutions[activeTab].color }}>
                            <CheckCircleIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText 
                            primary={benefit} 
                            primaryTypographyProps={{ 
                              variant: 'body2',
                              fontWeight: 500,
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>
                
                <Button
                  component={Link}
                  href={solutions[activeTab].cta.link}
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ 
                    py: 1.5,
                    px: 4,
                    borderRadius: 50,
                    fontWeight: 600,
                    backgroundColor: solutions[activeTab].color,
                    '&:hover': {
                      backgroundColor: alpha(solutions[activeTab].color, 0.9),
                      boxShadow: `0 8px 20px ${alpha(solutions[activeTab].color, 0.3)}`,
                    }
                  }}
                >
                  {solutions[activeTab].cta.text}
                </Button>
              </Grid>
            </Grid>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default SolutionsFeatures;
