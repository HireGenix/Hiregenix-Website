'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  alpha,
  Chip,
  Button,
  Grid,
} from '@mui/material';
import {
  Email as EmailIcon,
  ArrowForward as ArrowForwardIcon,
  Bolt as BoltIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ContactHero: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        py: { xs: 10, md: 16 },
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: 'white',
        overflow: 'hidden',
      }}
    >
      {/* Background pattern */}
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
          zIndex: 1,
        }}
      />
      
      {/* Animated shapes */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          transition: { duration: 1.5, ease: "easeOut" }
        }}
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: { xs: 60, md: 100 },
          height: { xs: 60, md: 100 },
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          zIndex: 1,
          animation: 'float 8s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0) scale(1)' },
            '50%': { transform: 'translateY(-20px) scale(1.1)' },
          },
        }}
      />
      
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          transition: { duration: 1.5, delay: 0.2, ease: "easeOut" }
        }}
        sx={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: { xs: 80, md: 150 },
          height: { xs: 80, md: 150 },
          borderRadius: '30%',
          background: 'rgba(255, 255, 255, 0.05)',
          zIndex: 1,
          animation: 'float2 10s ease-in-out infinite',
          '@keyframes float2': {
            '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
            '50%': { transform: 'translateY(30px) rotate(10deg)' },
          },
        }}
      />
      
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          transition: { duration: 1.5, delay: 0.4, ease: "easeOut" }
        }}
        sx={{
          position: 'absolute',
          top: '40%',
          right: '20%',
          width: { xs: 40, md: 80 },
          height: { xs: 40, md: 80 },
          borderRadius: '20%',
          background: 'rgba(255, 255, 255, 0.08)',
          zIndex: 1,
          animation: 'float3 12s ease-in-out infinite',
          '@keyframes float3': {
            '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
            '50%': { transform: 'translate(-20px, 20px) rotate(-10deg)' },
          },
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid 
            item 
            xs={12} 
            md={7}
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Chip 
                label="CONTACT US" 
                color="secondary" 
                size="medium"
                icon={<BoltIcon />}
                sx={{ 
                  mb: 3, 
                  fontWeight: 600,
                  background: 'rgba(33, 150, 243, 0.2)',
                  border: '1px solid rgba(33, 150, 243, 0.3)',
                  color: 'white',
                  px: 2,
                  py: 2.5,
                  '& .MuiChip-label': {
                    px: 1,
                  },
                  '& .MuiChip-icon': {
                    color: 'white',
                  }
                }} 
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                  mb: 2,
                  background: 'linear-gradient(90deg, #ffffff 0%, #f0f0ff 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  lineHeight: 1.2,
                }}
              >
                Get in Touch With Our Team
              </Typography>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Typography
                variant="h2"
                component="p"
                sx={{
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  fontWeight: 400,
                  mb: 4,
                  opacity: 0.9,
                  maxWidth: 600,
                  lineHeight: 1.6,
                }}
              >
                Have questions about our platform? Want to schedule a demo? Our team is here to help you transform your recruitment process.
              </Typography>
            </motion.div>
            
            <Box 
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              sx={{ 
                display: 'flex', 
                gap: 2,
                flexWrap: { xs: 'wrap', sm: 'nowrap' }
              }}
            >
              <Button
                component={Link}
                href="#contact-form"
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  py: 1.5,
                  px: 4,
                  borderRadius: 50,
                  fontWeight: 600,
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                  background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 25px rgba(0, 0, 0, 0.3)',
                  }
                }}
              >
                Send a Message
              </Button>
              <Button
                component={Link}
                href="mailto:info@hiregenix.com"
                variant="outlined"
                size="large"
                startIcon={<EmailIcon />}
                sx={{
                  py: 1.5,
                  px: 4,
                  borderRadius: 50,
                  fontWeight: 600,
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Email Us Directly
              </Button>
            </Box>
          </Grid>
          
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: { xs: 'none', md: 'block' }
            }}
            component={motion.div}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: 350, md: 450 },
              }}
            >
              {/* Main decorative element */}
              <Box
                component={motion.div}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                sx={{
                  position: 'absolute',
                  width: '90%',
                  height: { xs: 300, md: 400 },
                  borderRadius: '30px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 2,
                }}
              >
                {/* Contact illustration or icon */}
                <Box
                  component={motion.div}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  sx={{
                    width: '80%',
                    height: '80%',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '10%',
                      left: '10%',
                      width: '80%',
                      height: '80%',
                      borderRadius: '50%',
                      background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.2)} 0%, transparent 70%)`,
                      zIndex: 1,
                    }
                  }}
                >
                  {/* Email icon */}
                  <Box
                    component={motion.div}
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity,
                      repeatType: 'loop',
                    }}
                    sx={{
                      position: 'absolute',
                      top: '30%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: 100,
                      height: 100,
                      borderRadius: 4,
                      background: 'rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 3,
                    }}
                  >
                    <EmailIcon sx={{ fontSize: 60, color: 'white' }} />
                  </Box>
                  
                  {/* Decorative elements */}
                  {[
                    { 
                      top: '70%', 
                      left: '30%', 
                      size: 60, 
                      color: alpha(theme.palette.error.main, 0.3),
                      delay: 0.2,
                      animation: {
                        y: [0, -10, 0],
                        x: [0, 5, 0, -5, 0],
                        duration: 4,
                      }
                    },
                    { 
                      top: '20%', 
                      left: '80%', 
                      size: 40, 
                      color: alpha(theme.palette.success.main, 0.3),
                      delay: 0.4,
                      animation: {
                        y: [0, 10, 0],
                        x: [0, -5, 0, 5, 0],
                        duration: 5,
                      }
                    },
                    { 
                      top: '80%', 
                      left: '70%', 
                      size: 50, 
                      color: alpha(theme.palette.warning.main, 0.3),
                      delay: 0.6,
                      animation: {
                        y: [0, -5, 0, 5, 0],
                        x: [0, 10, 0],
                        duration: 6,
                      }
                    },
                  ].map((item, index) => (
                    <Box
                      key={index}
                      component={motion.div}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 + item.delay }}
                      sx={{
                        position: 'absolute',
                        top: item.top,
                        left: item.left,
                        width: item.size,
                        height: item.size,
                        borderRadius: '50%',
                        background: item.color,
                        zIndex: 2,
                      }}
                    >
                      <Box
                        component={motion.div}
                        animate={{ 
                          y: item.animation.y,
                          x: item.animation.x,
                        }}
                        transition={{ 
                          duration: item.animation.duration, 
                          repeat: Infinity,
                          repeatType: 'loop',
                        }}
                        sx={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                          background: item.color,
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
              
              {/* Decorative elements */}
              <Box
                component={motion.div}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                sx={{
                  position: 'absolute',
                  top: '10%',
                  right: '5%',
                  width: 100,
                  height: 100,
                  borderRadius: '20px',
                  background: alpha(theme.palette.secondary.main, 0.2),
                  border: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
                  zIndex: 1,
                  transform: 'rotate(15deg)',
                }}
              />
              
              <Box
                component={motion.div}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                sx={{
                  position: 'absolute',
                  bottom: '15%',
                  left: '10%',
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  border: `2px dashed ${alpha(theme.palette.primary.light, 0.5)}`,
                  zIndex: 1,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactHero;
