"use client";

import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  Paper,
  Chip,
  Divider
} from '@mui/material';
import {
  ArrowForward as ArrowForwardIcon,
  TrendingUp as TrendingUpIcon,
  BarChart as BarChartIcon,
  Timeline as TimelineIcon,
  ShowChart as ShowChartIcon,
  ArrowDownward as ArrowDownwardIcon,
  MonetizationOn as MonetizationOnIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const InvestorRelationsHero: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // Animation variants
  const fadeIn = {
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

  // Investment highlights data
  const highlights = [
    {
      icon: <TrendingUpIcon sx={{ fontSize: '1.5rem', color: theme.palette.primary.main }} />,
      title: 'Production-Ready',
      description: 'Pre-revenue platform with 5 pilot companies already onboarded'
    },
    {
      icon: <BarChartIcon sx={{ fontSize: '1.5rem', color: theme.palette.primary.main }} />,
      title: 'Market Size',
      description: '$3.3B global recruitment software market by 2025'
    },
    {
      icon: <TimelineIcon sx={{ fontSize: '1.5rem', color: theme.palette.primary.main }} />,
      title: 'Growth Path',
      description: 'Path to profitability by 2027 with $5.5M projected revenue'
    },
    {
      icon: <MonetizationOnIcon sx={{ fontSize: '1.5rem', color: theme.palette.primary.main }} />,
      title: 'High Margins',
      description: 'SaaS subscription model with 80%+ gross margins'
    }
  ];

  // Stats data
  const stats = [
    { value: '$500K', label: 'Investment' },
    { value: '5%', label: 'Equity' },
    { value: '$10M', label: 'Valuation' }
  ];

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
            variants={fadeIn}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Chip
                label="INVESTMENT OPPORTUNITY"
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
                Invest in the <Box component="span" sx={{ color: theme.palette.primary.main, WebkitTextFillColor: theme.palette.primary.main }}>Future</Box> of Recruitment
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
                Join us in revolutionizing the recruitment industry with our AI-powered platform that delivers <strong>50% faster hiring</strong>, <strong>75% better matches</strong>, and <strong>35% cost reduction</strong>.
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
                  href="#contact"
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
                  Contact Investor Relations
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  href="#overview"
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
                  Learn More
                </Button>
              </Stack>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <Grid container spacing={2} sx={{ mb: 4 }}>
                {stats.map((stat, index) => (
                  <Grid item xs={4} key={index}>
                    <motion.div variants={fadeIn}>
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

          {/* Right Content - Investment Dashboard */}
          <Grid
            item
            xs={12}
            md={6}
            component={motion.div}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
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
              {/* Main dashboard image with 3D effect */}
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
                {/* Investment Dashboard UI Mockup */}
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
                        HireGenix Investor Dashboard
                      </Typography>
                    </Box>
                  </Box>
                  
                  {/* Dashboard Content */}
                  <Box sx={{ p: 3 }}>
                    {/* Welcome Banner */}
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
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <Box>
                        <Typography variant="h5" fontWeight={600} color="white" gutterBottom>
                          Investment Opportunity
                        </Typography>
                        <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
                          $500K for 5% equity at $10M valuation
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
                        <Chip 
                          label="Limited Opportunity" 
                          color="secondary"
                          sx={{ fontWeight: 600 }}
                        />
                      </Box>
                    </Box>
                    
                    {/* Financial Metrics */}
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      sx={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(3, 1fr)', 
                        gap: 2, 
                        mb: 3 
                      }}
                    >
                      {[
                        { label: 'Projected Revenue (2027)', value: '$5.5M', color: theme.palette.success.main },
                        { label: 'Gross Margin', value: '80%+', color: theme.palette.primary.main },
                        { label: 'Market Size (2025)', value: '$3.3B', color: theme.palette.info.main }
                      ].map((metric, idx) => (
                        <Paper
                          key={idx}
                          elevation={0}
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                          }}
                        >
                          <Typography variant="h5" fontWeight={700} color={metric.color}>
                            {metric.value}
                          </Typography>
                          <Typography variant="caption" color="rgba(255, 255, 255, 0.6)">
                            {metric.label}
                          </Typography>
                        </Paper>
                      ))}
                    </Box>
                    
                    {/* Growth Projections */}
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      sx={{ mb: 3 }}
                    >
                      <Typography variant="subtitle1" fontWeight={600} color="white" gutterBottom>
                        Revenue Projections
                      </Typography>
                      
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        {[
                          { year: '2025', revenue: '$0.5M', growth: 'Initial Launch' },
                          { year: '2026', revenue: '$2.0M', growth: '300% Growth' },
                          { year: '2027', revenue: '$5.5M', growth: '175% Growth' }
                        ].map((projection, idx) => (
                          <Paper
                            key={idx}
                            elevation={0}
                            component={motion.div}
                            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                            sx={{
                              p: 1.5,
                              borderRadius: 2,
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.05)',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center'
                            }}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                              <Box
                                sx={{
                                  width: 36,
                                  height: 36,
                                  borderRadius: '50%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  background: idx === 0 ? 'rgba(76, 175, 80, 0.2)' : 
                                              idx === 1 ? 'rgba(33, 150, 243, 0.2)' : 
                                              'rgba(156, 39, 176, 0.2)',
                                  color: idx === 0 ? '#4CAF50' : 
                                         idx === 1 ? '#2196F3' : 
                                         '#9C27B0'
                                }}
                              >
                                {projection.year.slice(-2)}
                              </Box>
                              <Box>
                                <Typography variant="body2" fontWeight={600} color="white">
                                  {projection.year}
                                </Typography>
                                <Typography variant="caption" color="rgba(255, 255, 255, 0.6)">
                                  {projection.revenue}
                                </Typography>
                              </Box>
                            </Box>
                            <Chip
                              size="small"
                              label={projection.growth}
                              sx={{ 
                                backgroundColor: idx === 0 ? 'rgba(76, 175, 80, 0.15)' : 
                                                idx === 1 ? 'rgba(33, 150, 243, 0.15)' : 
                                                'rgba(156, 39, 176, 0.15)',
                                color: idx === 0 ? '#4CAF50' : 
                                       idx === 1 ? '#2196F3' : 
                                       '#9C27B0',
                                fontWeight: 600,
                                height: 24
                              }}
                            />
                          </Paper>
                        ))}
                      </Box>
                    </Box>
                    
                    {/* Investment Highlights */}
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          background: `linear-gradient(135deg, rgba(${theme.palette.primary.main.replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(',')}, 0.2) 0%, rgba(${theme.palette.secondary.main.replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(',')}, 0.1) 100%)`,
                          border: '1px solid rgba(255, 255, 255, 0.05)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2
                        }}
                      >
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
                            background: 'rgba(255, 255, 255, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <ShowChartIcon sx={{ color: 'white' }} />
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="body2" color="white">
                            <strong>Profitability Milestone:</strong> Projected to reach profitability by Q4 2026 with positive cash flow throughout 2027.
                          </Typography>
                        </Box>
                      </Paper>
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

              {/* Feature cards */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {highlights.map((highlight, index) => {
                  // Calculate positions for each feature card
                  const positions = [
                    { top: '10%', right: '-5%', rotate: '5deg' },
                    { top: '30%', left: '-5%', rotate: '-3deg' },
                    { bottom: '30%', right: '-5%', rotate: '2deg' },
                    { bottom: '10%', left: '-5%', rotate: '-5deg' }
                  ];
                  
                  return (
                    <Box
                      key={index}
                      component={motion.div}
                      variants={fadeIn}
                      custom={index}
                      sx={{
                        position: 'absolute',
                        ...positions[index],
                        zIndex: 3,
                        maxWidth: 220
                      }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2,
                          borderRadius: '12px',
                          background: 'rgba(30, 30, 30, 0.8)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          transform: `rotate(${positions[index].rotate})`,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: `rotate(${positions[index].rotate}) translateY(-5px)`,
                            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
                          }
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          {highlight.icon}
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 600,
                              ml: 1,
                              color: 'white'
                            }}
                          >
                            {highlight.title}
                          </Typography>
                        </Box>
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            display: 'block'
                          }}
                        >
                          {highlight.description}
                        </Typography>
                      </Paper>
                    </Box>
                  );
                })}
              </motion.div>
            </Box>
          </Grid>
        </Grid>

        {/* Scroll down indicator */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'white',
            opacity: 0.7,
            cursor: 'pointer',
            '&:hover': {
              opacity: 1
            }
          }}
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
          <Typography variant="body2" sx={{ mb: 1 }}>
            Scroll Down
          </Typography>
          <ArrowDownwardIcon
            sx={{
              animation: 'bounce 2s infinite',
              '@keyframes bounce': {
                '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
                '40%': { transform: 'translateY(-10px)' },
                '60%': { transform: 'translateY(-5px)' }
              }
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default InvestorRelationsHero;
