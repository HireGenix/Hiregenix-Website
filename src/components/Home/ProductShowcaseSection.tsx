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
  LinearProgress
} from '@mui/material';
import { motion } from 'framer-motion';

export const ProductShowcaseSection: React.FC = () => {
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

  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 100%)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Subtle background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '40%',
          height: '40%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.light, 0.1)} 0%, rgba(255,255,255,0) 70%)`,
          filter: 'blur(60px)',
          zIndex: 1
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
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
            label="PRODUCT SHOWCASE" 
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
            Beautifully Designed for Recruiters
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
            An intuitive interface that makes recruitment a delightful experience
          </Typography>
        </Box>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main product showcase */}
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariant}>
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                    transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
                    transition: 'all 0.5s ease',
                    '&:hover': {
                      transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      borderRadius: '24px',
                      border: '1px solid rgba(0,0,0,0.05)',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    {/* Dashboard UI Mockup */}
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%',
                        background: '#fff',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        position: 'relative'
                      }}
                    >
                      {/* Header */}
                      <Box
                        sx={{
                          p: 2,
                          borderBottom: '1px solid',
                          borderColor: 'divider',
                          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
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
                            H
                          </Box>
                          <Typography variant="h6" fontWeight={600}>
                            HireGenix Dashboard
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          {['#FC625D', '#FDBC40', '#35C749'].map((color, i) => (
                            <Box
                              key={i}
                              sx={{
                                width: 12,
                                height: 12,
                                borderRadius: '50%',
                                backgroundColor: color,
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                      
                      {/* Dashboard Content */}
                      <Box sx={{ p: 3, background: alpha(theme.palette.background.default, 0.5) }}>
                        {/* Stats Cards */}
                        <Box
                          component={motion.div}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          sx={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(3, 1fr)', 
                            gap: 2, 
                            mb: 3 
                          }}
                        >
                          {[
                            { label: 'Open Positions', value: '24', color: theme.palette.primary.main },
                            { label: 'Active Candidates', value: '156', color: theme.palette.success.main },
                            { label: 'Time-to-Hire', value: '18d', color: theme.palette.info.main }
                          ].map((stat, idx) => (
                            <Paper
                              key={idx}
                              elevation={0}
                              sx={{
                                p: 2,
                                borderRadius: 2,
                                border: '1px solid',
                                borderColor: alpha(stat.color, 0.3),
                                background: alpha(stat.color, 0.05),
                              }}
                            >
                              <Typography variant="h5" fontWeight={700} color={stat.color}>
                                {stat.value}
                              </Typography>
                              <Typography variant="caption" color="text.secondary">
                                {stat.label}
                              </Typography>
                            </Paper>
                          ))}
                        </Box>
                        
                        {/* Recent Candidates */}
                        <Box
                          component={motion.div}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                          sx={{ mb: 3 }}
                        >
                          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                            Recent Candidates
                          </Typography>
                          
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            {[
                              { name: 'Emily Johnson', position: 'Frontend Developer', match: 92 },
                              { name: 'Michael Chen', position: 'UI Developer', match: 78 },
                              { name: 'Sarah Williams', position: 'Full Stack Developer', match: 85 }
                            ].map((candidate, idx) => (
                              <Paper
                                key={idx}
                                elevation={0}
                                sx={{
                                  p: 1.5,
                                  borderRadius: 2,
                                  border: '1px solid',
                                  borderColor: 'divider',
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center'
                                }}
                              >
                                <Box>
                                  <Typography variant="body2" fontWeight={600}>
                                    {candidate.name}
                                  </Typography>
                                  <Typography variant="caption" color="text.secondary">
                                    {candidate.position}
                                  </Typography>
                                </Box>
                                <Chip
                                  size="small"
                                  label={`${candidate.match}% Match`}
                                  sx={{ 
                                    backgroundColor: alpha(theme.palette.success.main, 0.1),
                                    color: theme.palette.success.main,
                                    fontWeight: 600,
                                    height: 24
                                  }}
                                />
                              </Paper>
                            ))}
                          </Box>
                        </Box>
                        
                        {/* Activity Timeline */}
                        <Box
                          component={motion.div}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6, duration: 0.5 }}
                        >
                          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                            Recent Activity
                          </Typography>
                          
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            {[
                              { action: 'Interview scheduled', subject: 'Emily Johnson', time: '2 hours ago' },
                              { action: 'New application', subject: 'Senior UX Designer', time: '4 hours ago' },
                              { action: 'Candidate shortlisted', subject: 'Michael Chen', time: 'Yesterday' }
                            ].map((activity, idx) => (
                              <Box
                                key={idx}
                                sx={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: 1.5
                                }}
                              >
                                <Box
                                  sx={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: '50%',
                                    backgroundColor: theme.palette.primary.main,
                                    mt: 0.8
                                  }}
                                />
                                <Box>
                                  <Typography variant="body2">
                                    {activity.action}: <strong>{activity.subject}</strong>
                                  </Typography>
                                  <Typography variant="caption" color="text.secondary">
                                    {activity.time}
                                  </Typography>
                                </Box>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ pl: { md: 4 } }}>
                <motion.div variants={itemVariant}>
                  <Typography
                    variant="h3"
                    component="h3"
                    sx={{
                      fontSize: { xs: '1.75rem', md: '2.25rem' },
                      fontWeight: 700,
                      mb: 3,
                      color: theme.palette.text.primary
                    }}
                  >
                    Intuitive Dashboard
                  </Typography>
                </motion.div>
                <motion.div variants={itemVariant}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '1rem', md: '1.125rem' },
                      color: theme.palette.text.secondary,
                      mb: 4,
                      lineHeight: 1.7
                    }}
                  >
                    Our beautifully designed dashboard gives you a complete overview of your recruitment process. Track candidates, monitor hiring progress, and get insights at a glance. The clean, minimalist design ensures you can focus on what matters most - finding the right talent for your team.
                  </Typography>
                </motion.div>

                {/* Feature highlights */}
                <Grid container spacing={3}>
                  {[
                    { title: 'Real-time Analytics', description: 'Monitor key metrics and make data-driven decisions' },
                    { title: 'Candidate Tracking', description: 'Follow candidates through every stage of the hiring process' },
                    { title: 'Team Collaboration', description: 'Seamlessly work together with your hiring team' }
                  ].map((feature, index) => (
                    <Grid item xs={12} key={index}>
                      <motion.div variants={itemVariant}>
                        <Paper
                          elevation={0}
                          sx={{
                            p: 3,
                            borderRadius: '16px',
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(0, 0, 0, 0.05)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                              transform: 'translateY(-5px)'
                            }
                          }}
                        >
                          <Typography
                            variant="h6"
                            component="h4"
                            sx={{
                              fontWeight: 600,
                              mb: 1,
                              color: theme.palette.text.primary
                            }}
                          >
                            {feature.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.text.secondary
                            }}
                          >
                            {feature.description}
                          </Typography>
                        </Paper>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>

          {/* Secondary product showcase (reversed) */}
          <Grid container spacing={6} alignItems="center" sx={{ mt: 10, flexDirection: { xs: 'column-reverse', md: 'row' } }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ pr: { md: 4 } }}>
                <motion.div variants={itemVariant}>
                  <Typography
                    variant="h3"
                    component="h3"
                    sx={{
                      fontSize: { xs: '1.75rem', md: '2.25rem' },
                      fontWeight: 700,
                      mb: 3,
                      color: theme.palette.text.primary
                    }}
                  >
                    AI-Powered Candidate Matching
                  </Typography>
                </motion.div>
                <motion.div variants={itemVariant}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '1rem', md: '1.125rem' },
                      color: theme.palette.text.secondary,
                      mb: 4,
                      lineHeight: 1.7
                    }}
                  >
                    Our sophisticated AI algorithms analyze candidate profiles against your job requirements to find the perfect match. The system learns from your hiring patterns and improves over time, ensuring you always get the most relevant candidates at the top of your list.
                  </Typography>
                </motion.div>

                {/* Feature highlights */}
                <Grid container spacing={3}>
                  {[
                    { title: 'Semantic Skills Matching', description: 'Goes beyond keyword matching to understand skill relationships' },
                    { title: 'Bias Detection', description: 'Identifies and helps eliminate unconscious bias in your hiring process' },
                    { title: 'Candidate Scoring', description: 'Ranks candidates based on multiple factors for better decision making' }
                  ].map((feature, index) => (
                    <Grid item xs={12} key={index}>
                      <motion.div variants={itemVariant}>
                        <Paper
                          elevation={0}
                          sx={{
                            p: 3,
                            borderRadius: '16px',
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(0, 0, 0, 0.05)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                              transform: 'translateY(-5px)'
                            }
                          }}
                        >
                          <Typography
                            variant="h6"
                            component="h4"
                            sx={{
                              fontWeight: 600,
                              mb: 1,
                              color: theme.palette.text.primary
                            }}
                          >
                            {feature.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.text.secondary
                            }}
                          >
                            {feature.description}
                          </Typography>
                        </Paper>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariant}>
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                    transform: 'perspective(1000px) rotateY(5deg) rotateX(5deg)',
                    transition: 'all 0.5s ease',
                    '&:hover': {
                      transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      borderRadius: '24px',
                      border: '1px solid rgba(0,0,0,0.05)',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    {/* AI Matching UI Mockup */}
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%',
                        background: '#fff',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        position: 'relative'
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
                              scale: [1, 1.1, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ 
                              duration: 2,
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
                            AI
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
                      
                      {/* AI Matching Content */}
                      <Box sx={{ p: 3, background: alpha(theme.palette.background.default, 0.5) }}>
                        {/* Job Description */}
                        <Box
                          component={motion.div}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          sx={{ mb: 3 }}
                        >
                          <Paper
                            elevation={0}
                            sx={{
                              p: 2,
                              borderRadius: 2,
                              border: '1px solid',
                              borderColor: 'divider',
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
                                {['5+ years of React experience', 'TypeScript proficiency', 'State management expertise'].map((req, idx) => (
                                  <Typography key={idx} component="li" variant="body2" color="text.secondary">
                                    {req}
                                  </Typography>
                                ))}
                              </Box>
                            </Box>
                          </Paper>
                        </Box>
                        
                        {/* AI Processing Animation */}
                        <Box
                          component={motion.div}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                          sx={{ mb: 3 }}
                        >
                          <Box
                            sx={{
                              p: 2,
                              borderRadius: 2,
                              border: '1px solid',
                              borderColor: alpha(theme.palette.secondary.main, 0.2),
                              background: alpha(theme.palette.secondary.main, 0.05),
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
                                  background: alpha(theme.palette.secondary.main, 0.2),
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  mr: 2,
                                }}
                              >
                                <Typography variant="body2" fontWeight={700} color={theme.palette.secondary.main}>
                                  AI
                                </Typography>
                              </Box>
                              <Box>
                                <Typography variant="body2" fontWeight={600}>
                                  Processing Candidate Profiles
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
                                  backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                                }} 
                              />
                            </Box>
                          </Box>
                        </Box>
                        
                        {/* Matched Candidates */}
                        <Box
                          component={motion.div}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6, duration: 0.5 }}
                        >
                          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                            Top Matching Candidates:
                          </Typography>
                          
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            {[
                              { name: 'Emily Johnson', position: 'Frontend Developer', match: 92, color: theme.palette.success.main },
                              { name: 'Michael Chen', position: 'UI Developer', match: 78, color: theme.palette.warning.main },
                              { name: 'Sarah Williams', position: 'Full Stack Developer', match: 85, color: theme.palette.info.main }
                            ].map((candidate, idx) => (
                              <Paper
                                key={idx}
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
                                <Box
                                  sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    bgcolor: alpha(candidate.color, 0.2),
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700,
                                    color: candidate.color
                                  }}
                                >
                                  {candidate.name.charAt(0)}
                                </Box>
                                
                                <Box sx={{ flexGrow: 1 }}>
                                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                    <Typography variant="body2" fontWeight={600}>
                                      {candidate.name}
                                    </Typography>
                                    <Chip 
                                      label={`${candidate.match}% Match`}
                                      size="small"
                                      sx={{ 
                                        backgroundColor: alpha(candidate.color, 0.1),
                                        color: candidate.color,
                                        fontWeight: 600,
                                        height: 24,
                                        fontSize: '0.7rem'
                                      }}
                                    />
                                  </Box>
                                  
                                  <Typography variant="caption" color="text.secondary">
                                    {candidate.position}
                                  </Typography>
                                </Box>
                              </Paper>
                            ))}
                          </Box>
                        </Box>
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
                        <Typography variant="body2" fontWeight={700}>
                          93% Accuracy
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};
