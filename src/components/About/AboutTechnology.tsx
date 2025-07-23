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
  LinearProgress,
  Avatar,
  Badge
} from '@mui/material';
import { motion } from 'framer-motion';

const AboutTechnology = () => {
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
        background: 'linear-gradient(180deg, rgba(250,250,250,1) 0%, rgba(255,255,255,1) 100%)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Subtle background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '40%',
          height: '40%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.light, 0.1)} 0%, rgba(255,255,255,0) 70%)`,
          filter: 'blur(60px)',
          zIndex: 1
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
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
            label="OUR TECHNOLOGY" 
            color="secondary" 
            size="small"
            sx={{ 
              mb: 2, 
              fontWeight: 600,
              background: alpha(theme.palette.secondary.main, 0.1),
              border: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
              color: theme.palette.secondary.main,
            }} 
          />
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
              mb: 2,
              background: `linear-gradient(90deg, ${theme.palette.text.primary} 0%, ${theme.palette.secondary.main} 100%)`,
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
            Our platform combines cutting-edge AI with intuitive design to transform the recruitment experience
          </Typography>
        </Box>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main technology showcase */}
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
                            AI
                          </Box>
                          <Typography variant="h6" fontWeight={600}>
                            Candidate Matching
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
                      
                      {/* Job Requirements */}
                      <Box sx={{ p: 3, background: alpha(theme.palette.background.default, 0.5) }}>
                        <Box
                          component={motion.div}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          sx={{ mb: 3 }}
                        >
                          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                            Job Requirements
                          </Typography>
                          
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
                              <Typography variant="body1" fontWeight={600}>
                                Senior UX Designer
                              </Typography>
                              <Chip
                                size="small"
                                label="Priority"
                                color="primary"
                                sx={{ height: 24 }}
                              />
                            </Box>
                            
                            <Box sx={{ mt: 2 }}>
                              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                                {['Figma', 'User Research', 'Prototyping', 'Design Systems', 'UI/UX'].map((skill, idx) => (
                                  <Chip
                                    key={idx}
                                    label={skill}
                                    size="small"
                                    sx={{ 
                                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                                      color: theme.palette.primary.main,
                                      fontWeight: 500,
                                      fontSize: '0.7rem'
                                    }}
                                  />
                                ))}
                              </Box>
                              
                              <Typography variant="body2" color="text.secondary">
                                Looking for an experienced designer with strong portfolio and 5+ years of experience in product design.
                              </Typography>
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
                              borderColor: alpha(theme.palette.primary.main, 0.2),
                              background: alpha(theme.palette.primary.main, 0.05),
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
                                <Typography variant="body2" fontWeight={700} color={theme.palette.primary.main}>
                                  AI
                                </Typography>
                              </Box>
                              <Box>
                                <Typography variant="body2" fontWeight={600}>
                                  Matching 156 Candidates
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                  Analyzing skills, experience, and portfolio quality
                                </Typography>
                              </Box>
                            </Box>
                            <Box sx={{ width: 100 }}>
                              <LinearProgress 
                                color="primary"
                                sx={{ 
                                  height: 8, 
                                  borderRadius: 4,
                                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
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
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                            <Typography variant="subtitle1" fontWeight={600}>
                              Top Matches
                            </Typography>
                            <Badge 
                              badgeContent="94%" 
                              color="success"
                              sx={{ 
                                '& .MuiBadge-badge': { 
                                  fontSize: '0.7rem', 
                                  fontWeight: 700,
                                  px: 1
                                } 
                              }}
                            >
                              <Typography variant="caption" fontWeight={500} color="text.secondary">
                                Accuracy
                              </Typography>
                            </Badge>
                          </Box>
                          
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            {[
                              { name: 'Jessica Williams', position: 'Senior UX Designer', match: 96, skills: ['Figma', 'Design Systems', 'User Research'], color: theme.palette.success.main },
                              { name: 'David Chen', position: 'Product Designer', match: 89, skills: ['UI/UX', 'Prototyping', 'Figma'], color: theme.palette.success.main },
                              { name: 'Sarah Johnson', position: 'UX/UI Designer', match: 82, skills: ['User Research', 'Wireframing', 'Figma'], color: theme.palette.info.main }
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
                                }}
                              >
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                  <Avatar 
                                    src={`/team/${candidate.name.toLowerCase().replace(' ', '-')}.jpg`}
                                    sx={{ width: 48, height: 48 }}
                                  />
                                  
                                  <Box sx={{ flexGrow: 1 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                      <Typography variant="body1" fontWeight={600}>
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
                                    
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                      {candidate.position}
                                    </Typography>
                                    
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
                                      {candidate.skills.map((skill, skillIdx) => (
                                        <Chip
                                          key={skillIdx}
                                          label={skill}
                                          size="small"
                                          sx={{ 
                                            height: 20,
                                            fontSize: '0.65rem',
                                            bgcolor: alpha(theme.palette.grey[500], 0.1),
                                            color: theme.palette.text.secondary,
                                          }}
                                        />
                                      ))}
                                    </Box>
                                  </Box>
                                </Box>
                              </Paper>
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
                    Our proprietary AI matching engine goes beyond keyword matching to understand the semantic relationships between skills, experiences, and job requirements. The system continuously learns from your hiring patterns to deliver increasingly accurate matches over time.
                  </Typography>
                </motion.div>

                {/* Feature highlights */}
                <Grid container spacing={3}>
                  {[
                    { title: 'Semantic Understanding', description: 'Recognizes related skills and experience even when exact keywords don\'t match' },
                    { title: 'Contextual Analysis', description: 'Evaluates candidate fit based on industry, company size, and culture compatibility' },
                    { title: 'Continuous Learning', description: 'Improves match quality over time by learning from your hiring decisions' }
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
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutTechnology;
