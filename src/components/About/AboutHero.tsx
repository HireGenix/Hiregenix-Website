'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Button,
  Stack,
  useTheme,
  Paper,
  alpha,
} from '@mui/material';
import {
  PlayArrow as PlayArrowIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
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
      ease: [0.4, 0, 0.2, 1],
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
      ease: [0.4, 0, 0.2, 1],
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const AboutHero: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: `linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%)`,
        color: 'white',
        pt: { xs: 12, md: 0 },
        pb: { xs: 10, md: 0 }
      }}
    >
      {/* Geometric pattern overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage: 'url(/hero-pattern.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }}
      />

      {/* Animated gradient orbs */}
      <Box
        component={motion.div}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5 }}
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: { xs: 200, md: 400 },
          height: { xs: 200, md: 400 },
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}80 0%, rgba(0,0,0,0) 70%)`,
          filter: 'blur(80px)',
          zIndex: 1,
          animation: 'pulse 8s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { transform: 'scale(1)', opacity: 0.2 },
            '50%': { transform: 'scale(1.1)', opacity: 0.3 }
          }
        }}
      />

      <Box
        component={motion.div}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: { xs: 150, md: 300 },
          height: { xs: 150, md: 300 },
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.secondary.main}80 0%, rgba(0,0,0,0) 70%)`,
          filter: 'blur(80px)',
          zIndex: 1,
          animation: 'pulse2 10s ease-in-out infinite',
          '@keyframes pulse2': {
            '0%, 100%': { transform: 'scale(1)', opacity: 0.15 },
            '50%': { transform: 'scale(1.15)', opacity: 0.25 }
          }
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          {/* Left Content */}
          <Grid
            item
            xs={12}
            md={6}
            component={motion.div}
            initial="hidden"
            animate="visible"
            variants={fadeInLeftVariant}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Chip
                label="OUR STORY"
                sx={{
                  mb: 3,
                  py: 2,
                  px: 2,
                  borderRadius: '50px',
                  background: `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                  fontWeight: 800,
                  mb: 2,
                  background: `linear-gradient(90deg, #FFFFFF 0%, ${theme.palette.primary.light} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em'
                }}
              >
                About <Box component="span" sx={{ color: theme.palette.primary.main, WebkitTextFillColor: theme.palette.primary.main }}>HireGenix</Box>
              </Typography>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  fontWeight: 400,
                  mb: 4,
                  color: 'rgba(255, 255, 255, 0.8)',
                  maxWidth: 550,
                  lineHeight: 1.6
                }}
              >
                We are on a mission to transform recruitment with cutting-edge AI technology, making hiring faster, more accurate, and more inclusive.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2}
                sx={{ mb: 6 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={Link}
                  href="/contact"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '1rem',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                    borderRadius: '50px',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    background: `linear-gradient(45deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                    '&:hover': {
                      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  Contact Us
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<PlayArrowIcon />}
                  color="inherit"
                  size="large"
                  component={Link}
                  href="/demo"
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '1rem',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    borderRadius: '50px',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  Watch Our Story
                </Button>
              </Stack>
            </motion.div>

            {/* Company Facts */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <Grid container spacing={2} sx={{ mb: 4 }}>
                {[
                  { label: 'Founded', value: '2024' },
                  { label: 'Team Size', value: '50+' },
                  { label: 'Global Offices', value: '4' }
                ].map((stat, index) => (
                  <Grid item xs={4} key={index}>
                    <motion.div variants={fadeInUpVariant}>
                      <Box
                        sx={{
                          textAlign: 'center',
                          p: 2,
                          borderRadius: '16px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 800,
                            color: theme.palette.primary.main,
                            mb: 0.5,
                            fontSize: { xs: '1.75rem', md: '2.25rem' }
                          }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontWeight: 500
                          }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>

          {/* Right Content - 3D Image */}
          <Grid
            item
            xs={12}
            md={6}
            component={motion.div}
            initial="hidden"
            animate="visible"
            variants={fadeInRightVariant}
          >
            <Box
              sx={{
                position: 'relative',
                height: { xs: 400, md: 550 },
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                perspective: '1200px'
              }}
            >
              {/* Main image with 3D effect */}
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20, rotateY: -15, rotateX: 10 }}
                animate={{ opacity: 1, y: 0, rotateY: -8, rotateX: 5 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.5s ease',
                  '&:hover': {
                    transform: 'rotateY(-4deg) rotateX(2deg)'
                  }
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '16px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    zIndex: 2,
                    overflow: 'hidden',
                    position: 'relative',
                    background: '#1E1E1E'
                  }}
                >
                  {/* Company Timeline UI Mockup */}
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      position: 'relative'
                    }}
                  >
                    {/* Header */}
                    <Box
                      sx={{
                        p: 2,
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
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
                          Our Journey
                        </Typography>
                      </Box>
                      <Chip 
                        label="2024" 
                        size="small"
                        sx={{ 
                          bgcolor: 'rgba(255, 255, 255, 0.2)',
                          color: 'white',
                          fontWeight: 600
                        }} 
                      />
                    </Box>
                    
                    {/* Timeline Content */}
                    <Box sx={{ p: 3 }}>
                      {/* Company Vision */}
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
                        <Typography variant="h5" fontWeight={600} color="white" gutterBottom>
                          Our Vision
                        </Typography>
                        <Typography variant="body2" color="rgba(255, 255, 255, 0.7)" sx={{ mb: 2 }}>
                          To transform recruitment with AI technology that makes hiring faster, more accurate, and more inclusive.
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
                          <Chip 
                            label="Transforming Recruitment" 
                            color="primary"
                            sx={{ fontWeight: 600 }}
                          />
                        </Box>
                      </Box>
                      
                      {/* Timeline Events */}
                      <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        sx={{ mb: 3 }}
                      >
                        <Typography variant="subtitle1" fontWeight={600} color="white" gutterBottom>
                          Key Milestones
                        </Typography>
                        
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                          {[
                            { year: '2024', event: 'Company Founded', description: 'HireGenix was founded with a mission to transform recruitment' },
                            { year: '2024', event: 'First AI Model', description: 'Launched our first AI matching algorithm' },
                            { year: '2024', event: 'Global Expansion', description: 'Opened offices in 4 global locations' }
                          ].map((milestone, idx) => (
                            <Paper
                              key={idx}
                              elevation={0}
                              component={motion.div}
                              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                              sx={{
                                p: 2,
                                borderRadius: 2,
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 2
                              }}
                            >
                              <Box
                                sx={{
                                  minWidth: 40,
                                  height: 40,
                                  borderRadius: '50%',
                                  background: idx === 0 ? theme.palette.primary.main : 
                                              idx === 1 ? theme.palette.secondary.main : 
                                              theme.palette.info.main,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontWeight: 700,
                                  color: 'white'
                                }}
                              >
                                {milestone.year.slice(-2)}
                              </Box>
                              <Box>
                                <Typography variant="body1" fontWeight={600} color="white">
                                  {milestone.event}
                                </Typography>
                                <Typography variant="caption" color="rgba(255, 255, 255, 0.6)">
                                  {milestone.description}
                                </Typography>
                              </Box>
                            </Paper>
                          ))}
                        </Box>
                      </Box>
                      
                      {/* Company Values */}
                      <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                      >
                        <Typography variant="subtitle1" fontWeight={600} color="white" gutterBottom>
                          Our Values
                        </Typography>
                        
                        <Grid container spacing={1}>
                          {[
                            { value: 'Innovation', color: theme.palette.primary.main },
                            { value: 'Inclusion', color: theme.palette.secondary.main },
                            { value: 'Integrity', color: theme.palette.info.main },
                            { value: 'Impact', color: theme.palette.success.main }
                          ].map((value, idx) => (
                            <Grid item xs={6} key={idx}>
                              <Paper
                                elevation={0}
                                sx={{
                                  p: 1.5,
                                  borderRadius: 2,
                                  background: alpha(value.color, 0.1),
                                  border: `1px solid ${alpha(value.color, 0.3)}`,
                                  textAlign: 'center'
                                }}
                              >
                                <Typography variant="body2" fontWeight={600} color={value.color}>
                                  {value.value}
                                </Typography>
                              </Paper>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                
                {/* Glow effect behind image */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80%',
                    height: '80%',
                    borderRadius: '16px',
                    background: `radial-gradient(circle, ${theme.palette.primary.main}33 0%, rgba(0,0,0,0) 70%)`,
                    filter: 'blur(30px)',
                    zIndex: 1
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutHero;
