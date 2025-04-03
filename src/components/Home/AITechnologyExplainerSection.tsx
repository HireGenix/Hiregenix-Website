'use client';

import React from 'react';
import { AnimatedCodeTyping } from './AnimatedCodeTyping';
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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  LinearProgress,
  Avatar
} from '@mui/material';
import {
  Psychology as PsychologyIcon,
  DataObject as DataObjectIcon,
  VerifiedUser as VerifiedUserIcon,
  Speed as SpeedIcon,
  TrendingUp as TrendingUpIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const AITechnologyExplainerSection: React.FC = () => {
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

  // AI features data
  const aiFeatures = [
    {
      title: 'Semantic Understanding',
      description: 'Our AI goes beyond keyword matching to truly understand the meaning behind skills, experiences, and job requirements.',
      icon: <PsychologyIcon sx={{ fontSize: '2.5rem', color: theme.palette.primary.main }} />,
      details: [
        'Natural language processing for context-aware matching',
        'Understands skill relationships and transferable abilities',
        'Recognizes industry-specific terminology and jargon'
      ]
    },
    {
      title: 'Continuous Learning',
      description: 'The system improves over time by learning from your hiring patterns and feedback on candidate quality.',
      icon: <TrendingUpIcon sx={{ fontSize: '2.5rem', color: theme.palette.primary.main }} />,
      details: [
        'Adapts to your company\'s unique hiring preferences',
        'Improves match quality with each hire',
        'Identifies emerging skills and trends in your industry'
      ]
    },
    {
      title: 'Bias Mitigation',
      description: 'Advanced algorithms designed to identify and reduce unconscious bias in the hiring process.',
      icon: <VerifiedUserIcon sx={{ fontSize: '2.5rem', color: theme.palette.primary.main }} />,
      details: [
        'Focuses on skills and capabilities over demographic factors',
        'Provides bias detection alerts and recommendations',
        'Helps create more diverse and inclusive candidate pools'
      ]
    },
    {
      title: 'Real-time Processing',
      description: 'Analyze thousands of profiles instantly to identify the best matches for your open positions.',
      icon: <SpeedIcon sx={{ fontSize: '2.5rem', color: theme.palette.primary.main }} />,
      details: [
        'Processes large candidate pools in seconds',
        'Provides instant feedback on job descriptions',
        'Real-time matching as new candidates apply'
      ]
    }
  ];

  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        background: `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.8)} 0%, ${theme.palette.background.default} 100%)`,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          right: '10%',
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
            label="AI TECHNOLOGY" 
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
            Powered by Advanced AI
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
            Our proprietary AI technology transforms how you identify, assess, and hire top talent
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  width: '100%',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                  background: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Header */}
                <Box
                  sx={{
                    p: 2,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
                    color: 'white',
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
                        background: alpha('#fff', 0.2),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                      }}
                    >
                      <DataObjectIcon sx={{ fontSize: '1.5rem' }} />
                    </Box>
                    <Typography variant="h6" fontWeight={600}>
                      AI Matching Engine
                    </Typography>
                  </Box>
                  <Chip 
                    label="LIVE" 
                    size="small"
                    sx={{ 
                      bgcolor: alpha('#fff', 0.2),
                      color: 'white',
                      fontWeight: 600,
                      '& .MuiChip-label': { px: 1 }
                    }} 
                  />
                </Box>

                {/* Content */}
                <Box sx={{ p: 3, flexGrow: 1, background: alpha(theme.palette.background.default, 0.5) }}>
                  <Grid container spacing={3}>
                    {/* Job Description */}
                    <Grid item xs={12}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          border: '1px solid',
                          borderColor: 'divider',
                          mb: 3,
                        }}
                      >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="subtitle1" fontWeight={600}>
                            Senior Frontend Developer
                          </Typography>
                          <Chip
                            size="small"
                            label="Active"
                            color="success"
                            sx={{ height: 24 }}
                          />
                        </Box>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          TechCorp Inc. • Remote • Posted 3 days ago
                        </Typography>
                        
                        <Box sx={{ mt: 2 }}>
                          <Typography variant="body2" fontWeight={500} gutterBottom>
                            Key Requirements:
                          </Typography>
                          <Box component="ul" sx={{ mt: 0, pl: 2 }}>
                            {['5+ years of React experience', 'TypeScript proficiency', 'State management expertise', 'Testing frameworks knowledge'].map((req, idx) => (
                              <Typography key={idx} component="li" variant="body2" color="text.secondary">
                                {req}
                              </Typography>
                            ))}
                          </Box>
                        </Box>
                      </Paper>
                    </Grid>

                    {/* AI Processing Animation */}
                    <Grid item xs={12}>
                      <Box
                        component={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          border: '1px solid',
                          borderColor: alpha(theme.palette.primary.main, 0.2),
                          background: alpha(theme.palette.primary.main, 0.05),
                          mb: 3,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
                              width: 40,
                              height: 40,
                              borderRadius: '50%',
                              background: alpha(theme.palette.primary.main, 0.2),
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mr: 2,
                            }}
                          >
                            <PsychologyIcon sx={{ color: theme.palette.primary.main }} />
                          </Box>
                          <Box>
                            <Typography variant="body2" fontWeight={600}>
                              AI Processing Candidate Profiles
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              Analyzing skills, experience, and potential fit
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ width: 100 }}>
                          <LinearProgress 
                            sx={{ 
                              height: 8, 
                              borderRadius: 4,
                              backgroundColor: alpha(theme.palette.primary.main, 0.1),
                            }} 
                          />
                        </Box>
                      </Box>
                    </Grid>

                    {/* Matched Candidates */}
                    <Grid item xs={12}>
                      <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                        Top Matching Candidates:
                      </Typography>
                      
                      {[
                        { 
                          name: 'Emily Johnson', 
                          position: 'Frontend Developer', 
                          avatar: '/avatars/avatar1.jpg',
                          skills: ['React', 'TypeScript', 'Redux', 'Jest'],
                          matchScore: 92,
                          color: theme.palette.success.main
                        },
                        { 
                          name: 'Michael Chen', 
                          position: 'UI Developer', 
                          avatar: '/avatars/avatar2.jpg',
                          skills: ['React', 'JavaScript', 'CSS', 'Figma'],
                          matchScore: 78,
                          color: theme.palette.warning.main
                        },
                        { 
                          name: 'Sarah Williams', 
                          position: 'Full Stack Developer', 
                          avatar: '/avatars/avatar3.jpg',
                          skills: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
                          matchScore: 85,
                          color: theme.palette.info.main
                        }
                      ].map((candidate, index) => (
                        <Box
                          component={motion.div}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2, duration: 0.5 }}
                          key={index}
                          sx={{ mb: 2 }}
                        >
                          <Paper
                            elevation={0}
                            sx={{
                              p: 2,
                              borderRadius: 2,
                              border: '1px solid',
                              borderColor: alpha(candidate.color, 0.3),
                              background: alpha(candidate.color, 0.05),
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                            }}
                          >
                            <Avatar 
                              src={candidate.avatar} 
                              alt={candidate.name}
                              sx={{ width: 50, height: 50 }}
                            />
                            
                            <Box sx={{ flexGrow: 1 }}>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                <Typography variant="subtitle1" fontWeight={600}>
                                  {candidate.name}
                                </Typography>
                                <Chip 
                                  label={`${candidate.matchScore}% Match`}
                                  size="small"
                                  sx={{ 
                                    backgroundColor: alpha(candidate.color, 0.1),
                                    color: candidate.color,
                                    fontWeight: 600,
                                    border: `1px solid ${alpha(candidate.color, 0.3)}`
                                  }}
                                />
                              </Box>
                              
                              <Typography variant="body2" color="text.secondary" gutterBottom>
                                {candidate.position}
                              </Typography>
                              
                              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
                                {candidate.skills.map((skill, idx) => (
                                  <Chip
                                    key={idx}
                                    label={skill}
                                    size="small"
                                    sx={{ 
                                      height: 24,
                                      fontSize: '0.7rem',
                                      backgroundColor: alpha(theme.palette.grey[500], 0.1),
                                    }}
                                  />
                                ))}
                              </Box>
                            </Box>
                          </Paper>
                        </Box>
                      ))}
                    </Grid>
                  </Grid>
                </Box>

                {/* Floating badge */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  sx={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                    padding: 1.5,
                    borderRadius: 2,
                    background: alpha(theme.palette.secondary.main, 0.9),
                    color: 'white',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                    zIndex: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    border: `1px solid ${alpha(theme.palette.secondary.light, 0.3)}`
                  }}
                >
                  <TrendingUpIcon />
                  <Typography variant="body2" fontWeight={700}>
                    93% Accuracy
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '1.75rem', md: '2.25rem' }
                }}
              >
                How Our AI Matching Works
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  mb: 4,
                  lineHeight: 1.7
                }}
              >
                HireGenix uses a sophisticated neural network trained on millions of job descriptions and candidate profiles to understand the nuanced relationships between skills, experiences, and job requirements. Unlike traditional keyword matching, our AI comprehends context, identifies transferable skills, and predicts candidate success based on holistic analysis.
              </Typography>
              <Box
                sx={{
                  p: 3,
                  borderRadius: '16px',
                  background: alpha(theme.palette.primary.light, 0.05),
                  border: `1px solid ${alpha(theme.palette.primary.light, 0.1)}`,
                  mb: 4
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2
                  }}
                >
                  The HireGenix Difference:
                </Typography>
                <List disablePadding>
                  {[
                    '93% more accurate candidate matching than traditional ATS systems',
                    'Reduces time-to-hire by an average of 37%',
                    'Improves quality-of-hire metrics by identifying candidates with high potential',
                    'Continuously learns from your hiring patterns to improve over time'
                  ].map((item, idx) => (
                    <ListItem key={idx} disablePadding sx={{ mb: 1 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <Box
                          sx={{
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            background: alpha(theme.palette.primary.main, 0.1),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 700,
                              color: theme.palette.primary.main
                            }}
                          >
                            {idx + 1}
                          </Typography>
                        </Box>
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{
                          variant: 'body2',
                          color: 'text.primary'
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Button
                variant="outlined"
                color="primary"
                endIcon={<ArrowForwardIcon />}
                component={Link}
                href="/technology"
                sx={{
                  py: 1.5,
                  px: 3,
                  borderRadius: '50px',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateX(5px)'
                  }
                }}
              >
                Learn More About Our Technology
              </Button>
            </motion.div>
          </Grid>
        </Grid>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {aiFeatures.map((feature, index) => (
              <Grid item xs={12} sm={6} key={index}>
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
                      {feature.icon}
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          ml: 2
                        }}
                      >
                        {feature.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        mb: 3,
                        lineHeight: 1.7
                      }}
                    >
                      {feature.description}
                    </Typography>
                    <List disablePadding>
                      {feature.details.map((detail, idx) => (
                        <ListItem key={idx} disablePadding sx={{ mb: 1 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                background: theme.palette.primary.main
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={detail}
                            primaryTypographyProps={{
                              variant: 'body2',
                              color: 'text.secondary'
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
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
