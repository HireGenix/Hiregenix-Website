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
  Button,
} from '@mui/material';
import { 
  AutoStories as StoryIcon,
  Lightbulb as LightbulbIcon,
  Psychology as PsychologyIcon,
  Diversity3 as DiversityIcon,
} from '@mui/icons-material';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutStory: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(180deg, ${alpha(theme.palette.background.default, 1)} 0%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.primary.main, 0)} 70%)`,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          left: '10%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0)} 70%)`,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="overline"
                  component="p"
                  sx={{ 
                    mb: 1, 
                    fontWeight: 600, 
                    letterSpacing: 1.5,
                    color: theme.palette.primary.main,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <StoryIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
                  OUR STORY
                </Typography>
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    fontSize: { xs: '2rem', md: '2.75rem' },
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  The HireGenix Journey
                </Typography>
                <Typography
                  variant="h5"
                  component="p"
                  color="text.secondary"
                  sx={{
                    mb: 4,
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  From a bold idea to revolutionize recruitment to a cutting-edge AI platform transforming how companies hire talent.
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                  HireGenix was born from a simple observation: traditional recruitment processes were slow, biased, and inefficient. Our founders, with decades of experience in HR technology and artificial intelligence, set out to create a solution that would make hiring faster, more accurate, and more inclusive.
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                  We started with a vision to harness the power of AI to transform every aspect of the recruitment process—from sourcing and screening candidates to conducting interviews and making final hiring decisions. Our team of experts in machine learning, HR, and UX design worked tirelessly to develop a platform that would not only streamline the hiring process but also eliminate bias and identify the best candidates for each role.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  Today, HireGenix is at the forefront of recruitment technology, helping companies of all sizes find and hire the best talent more efficiently than ever before. Our journey continues as we constantly innovate and improve our platform to meet the evolving needs of the modern workforce.
                </Typography>
              </Box>

              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  borderRadius: '50px',
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 25px rgba(0, 0, 0, 0.15)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Learn More About Our Mission
              </Button>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Box sx={{ position: 'relative' }}>
                {/* Main image with shadow and border */}
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                    zIndex: 2,
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                    height: 500,
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      position: 'relative',
                      background: '#1E1E1E',
                      color: 'white',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Interactive Timeline UI */}
                    <Box
                      sx={{
                        p: 2,
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
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
                          H
                        </Box>
                        <Typography variant="h6" fontWeight={600}>
                          Company Timeline
                        </Typography>
                      </Box>
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
                        <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                          2024 - Present
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ p: 3, height: 'calc(100% - 60px)', overflowY: 'auto' }}>
                      {/* Timeline */}
                      <Box sx={{ position: 'relative' }}>
                        {/* Vertical line */}
                        <Box
                          sx={{
                            position: 'absolute',
                            left: 19,
                            top: 0,
                            bottom: 0,
                            width: 2,
                            background: 'rgba(255, 255, 255, 0.1)',
                            zIndex: 1
                          }}
                        />
                        
                        {/* Timeline events */}
                        <Box sx={{ position: 'relative', zIndex: 2 }}>
                          {[
                            { 
                              date: 'January 2024', 
                              title: 'Company Founded', 
                              description: 'HireGenix was founded with a mission to transform recruitment with AI technology.',
                              color: theme.palette.primary.main
                            },
                            { 
                              date: 'March 2024', 
                              title: 'First AI Model', 
                              description: 'Developed our first AI matching algorithm capable of understanding semantic relationships between skills.',
                              color: theme.palette.secondary.main
                            },
                            { 
                              date: 'April 2024', 
                              title: 'Seed Funding', 
                              description: 'Secured $5M in seed funding to accelerate product development and market entry.',
                              color: theme.palette.info.main
                            },
                            { 
                              date: 'June 2024', 
                              title: 'Beta Launch', 
                              description: 'Released beta version to select customers for testing and feedback.',
                              color: theme.palette.success.main
                            },
                            { 
                              date: 'August 2024', 
                              title: 'Global Expansion', 
                              description: 'Opened offices in 4 global locations to support international customers.',
                              color: theme.palette.warning.main
                            }
                          ].map((event, idx) => (
                            <Box
                              key={idx}
                              component={motion.div}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 * idx, duration: 0.5 }}
                              sx={{ 
                                display: 'flex', 
                                mb: 4,
                                '&:last-child': { mb: 0 }
                              }}
                            >
                              {/* Timeline node */}
                              <Box
                                component={motion.div}
                                whileHover={{ scale: 1.2 }}
                                sx={{
                                  width: 40,
                                  height: 40,
                                  borderRadius: '50%',
                                  background: alpha(event.color, 0.2),
                                  border: `2px solid ${event.color}`,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                  mr: 3,
                                  position: 'relative',
                                  zIndex: 3
                                }}
                              >
                                <Box
                                  component={motion.div}
                                  animate={{ 
                                    scale: [1, 1.2, 1],
                                  }}
                                  transition={{ 
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                    delay: idx * 0.5
                                  }}
                                  sx={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: '50%',
                                    background: event.color
                                  }}
                                />
                              </Box>
                              
                              {/* Event content */}
                              <Box
                                component={motion.div}
                                whileHover={{ 
                                  x: 5,
                                  transition: { duration: 0.2 }
                                }}
                              >
                                <Typography 
                                  variant="caption" 
                                  sx={{ 
                                    color: event.color,
                                    fontWeight: 600,
                                    display: 'block',
                                    mb: 0.5
                                  }}
                                >
                                  {event.date}
                                </Typography>
                                <Typography variant="body1" fontWeight={600} color="white" gutterBottom>
                                  {event.title}
                                </Typography>
                                <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
                                  {event.description}
                                </Typography>
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      </Box>
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
                    background: alpha(theme.palette.primary.main, 0.1),
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
                    border: `2px dashed ${alpha(theme.palette.secondary.main, 0.3)}`,
                    zIndex: 1,
                  }}
                />

                {/* Core values floating cards */}
                {[
                  { 
                    icon: <LightbulbIcon />, 
                    value: 'Innovation', 
                    color: theme.palette.primary.main,
                    position: { top: '10%', right: '-10%' }
                  },
                  { 
                    icon: <PsychologyIcon />, 
                    value: 'Intelligence', 
                    color: theme.palette.secondary.main,
                    position: { top: '80%', right: '10%' }
                  },
                  { 
                    icon: <DiversityIcon />, 
                    value: 'Inclusion', 
                    color: theme.palette.success.main,
                    position: { top: '40%', left: '-10%' }
                  },
                ].map((item, index) => (
                  <Paper
                    key={index}
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                    elevation={0}
                    sx={{
                      position: 'absolute',
                      zIndex: 3,
                      p: 2,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: alpha(theme.palette.background.paper, 0.9),
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                      border: `1px solid ${alpha(item.color, 0.2)}`,
                      ...item.position,
                    }}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: alpha(item.color, 0.1),
                        color: item.color,
                        mr: 2,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {item.value}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutStory;
