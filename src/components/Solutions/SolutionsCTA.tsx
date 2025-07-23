'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  useTheme,
  alpha,
  Paper,
} from '@mui/material';
import {
  ArrowForward as ArrowForwardIcon,
  Bolt as BoltIcon,
  Devices as DevicesIcon,
  BarChart as BarChartIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SolutionsCTA: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: 'white',
        position: 'relative',
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
        whileInView={{ 
          opacity: 1, 
          scale: 1,
          transition: { duration: 1.5, ease: "easeOut" }
        }}
        viewport={{ once: true }}
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
        whileInView={{ 
          opacity: 1, 
          scale: 1,
          transition: { duration: 1.5, delay: 0.2, ease: "easeOut" }
        }}
        viewport={{ once: true }}
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
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid 
            item 
            xs={12} 
            md={7}
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                background: 'linear-gradient(90deg, #ffffff 0%, #f0f0ff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 10px rgba(0,0,0,0.1)',
                lineHeight: 1.2,
              }}
            >
              Ready to Transform Your Recruitment Process?
            </Typography>
            
            <Typography
              variant="h5"
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
              Schedule a demo to see how HireGenix can help you find the best talent for your team
            </Typography>
            
            <Box 
              sx={{ 
                display: 'flex', 
                flexWrap: { xs: 'wrap', sm: 'nowrap' },
                gap: 2,
                mb: 6,
              }}
            >
              <Button
                component={Link}
                href="/demo"
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
                Request Demo
              </Button>
              <Button
                component={Link}
                href="/contact"
                variant="outlined"
                size="large"
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
                Contact Sales
              </Button>
            </Box>
            
            <Grid container spacing={3}>
              {[
                { 
                  icon: <BoltIcon />, 
                  text: 'Quick Implementation', 
                  subtext: 'Up and running in days, not months'
                },
                { 
                  icon: <DevicesIcon />, 
                  text: 'Works Everywhere', 
                  subtext: 'Seamless experience on all devices'
                },
                { 
                  icon: <BarChartIcon />, 
                  text: 'Measurable Results', 
                  subtext: 'Track your ROI with detailed analytics'
                },
              ].map((feature, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Box 
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        flexShrink: 0,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {feature.text}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        {feature.subtext}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
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
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 4,
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  opacity: 0.05,
                  backgroundImage: `radial-gradient(circle, ${theme.palette.text.primary} 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                }}
              />
              
              <Typography variant="h4" fontWeight={700} sx={{ mb: 3, textAlign: 'center' }}>
                Start Your Free Trial
              </Typography>
              
              <Box
                component="form"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {[
                  { label: 'Full Name', placeholder: 'John Smith' },
                  { label: 'Company Email', placeholder: 'john@company.com' },
                  { label: 'Company Size', placeholder: '50-200 employees' },
                ].map((field, index) => (
                  <Box key={index}>
                    <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 0.5 }}>
                      {field.label}
                    </Typography>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        '&::placeholder': {
                          color: 'rgba(255, 255, 255, 0.5)',
                        },
                      }}
                    >
                      {field.placeholder}
                    </Box>
                  </Box>
                ))}
                
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth
                  sx={{
                    mt: 2,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 600,
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                    background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
                  }}
                >
                  Start Free Trial
                </Button>
                
                <Typography variant="caption" sx={{ textAlign: 'center', opacity: 0.7, mt: 1 }}>
                  No credit card required. 14-day free trial.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SolutionsCTA;
