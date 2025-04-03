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
  Chip,
  Paper,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowForwardIcon,
  Bolt as BoltIcon,
  Psychology as PsychologyIcon,
  Diversity3 as DiversityIcon,
} from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SolutionsHero: React.FC = () => {
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
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid 
            item 
            xs={12} 
            md={6}
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Chip 
                label="AI-POWERED SOLUTIONS" 
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
                Transform Your Recruitment Process
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
                Discover our suite of powerful tools designed to help you find the best talent with cutting-edge AI technology.
              </Typography>
            </motion.div>
            
            <Box 
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' }, 
                flexWrap: 'wrap',
                gap: 2,
                mb: 4 
              }}
            >
              {[
                { icon: <PsychologyIcon />, text: 'Semantic Matching', color: theme.palette.secondary.main },
                { icon: <DiversityIcon />, text: 'Video Interviews', color: theme.palette.error.main },
                { icon: <CheckCircleIcon />, text: 'Skills Assessment', color: theme.palette.success.main },
              ].map((feature, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: 2,
                    py: 1,
                    borderRadius: 50,
                    background: alpha(feature.color, 0.15),
                    border: `1px solid ${alpha(feature.color, 0.3)}`,
                  }}
                >
                  <Box sx={{ color: feature.color, mr: 1 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'white' }}>
                    {feature.text}
                  </Typography>
                </Paper>
              ))}
            </Box>
            
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
                href="/solutions#features"
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
                Explore Solutions
              </Button>
            </Box>
          </Grid>
          
          <Grid
            item
            xs={12}
            md={6}
            component={motion.div}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: 350, md: 500 },
              }}
            >
              {/* Main image container */}
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
                  overflow: 'hidden',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 2,
                }}
              >
                {/* Interactive Solutions Dashboard */}
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    background: '#1E1E1E',
                    color: 'white',
                  }}
                >
                  {/* Header */}
                  <Box
                    sx={{
                      p: 2,
                      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                      background: `linear-gradient(135deg, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main})`,
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
                        Solutions Dashboard
                      </Typography>
                    </Box>
                    <Chip 
                      label="AI-Powered" 
                      size="small"
                      sx={{ 
                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        fontWeight: 600
                      }} 
                    />
                  </Box>
                  
                  {/* Dashboard Content */}
                  <Box sx={{ p: 3 }}>
                    {/* Solutions Tabs */}
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      sx={{ 
                        mb: 3,
                        display: 'flex',
                        gap: 1,
                        overflowX: 'auto',
                        pb: 1,
                        '&::-webkit-scrollbar': {
                          height: 4,
                        },
                        '&::-webkit-scrollbar-thumb': {
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          borderRadius: 2,
                        }
                      }}
                    >
                      {[
                        { name: 'AI Recruitment', active: true, color: theme.palette.secondary.main },
                        { name: 'Video Interviews', active: false, color: theme.palette.error.main },
                        { name: 'Skills Assessment', active: false, color: theme.palette.success.main },
                        { name: 'Analytics', active: false, color: theme.palette.info.main }
                      ].map((tab, idx) => (
                        <Box
                          key={idx}
                          component={motion.div}
                          whileHover={{ scale: 1.05 }}
                          sx={{
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            background: tab.active ? alpha(tab.color, 0.2) : 'rgba(255, 255, 255, 0.05)',
                            border: `1px solid ${tab.active ? alpha(tab.color, 0.5) : 'rgba(255, 255, 255, 0.1)'}`,
                            color: tab.active ? tab.color : 'white',
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            whiteSpace: 'nowrap',
                            cursor: 'pointer'
                          }}
                        >
                          {tab.name}
                        </Box>
                      ))}
                    </Box>
                    
                    {/* AI Recruitment Solution */}
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      sx={{ 
                        mb: 3,
                        p: 3,
                        borderRadius: 2,
                        background: `linear-gradient(135deg, rgba(${theme.palette.secondary.main.replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(',')}, 0.1) 0%, rgba(${theme.palette.secondary.dark.replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(',')}, 0.05) 100%)`,
                        border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
                      }}
                    >
                      <Typography variant="subtitle1" fontWeight={600} color="white" gutterBottom>
                        AI Recruitment
                      </Typography>
                      <Typography variant="body2" color="rgba(255, 255, 255, 0.7)" sx={{ mb: 2 }}>
                        Our AI matching engine finds the perfect candidates by analyzing skills, experience, and cultural fit.
                      </Typography>
                      
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
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <Chip 
                          label="96% Accuracy" 
                          color="secondary"
                          size="small"
                          sx={{ fontWeight: 600 }}
                        />
                        <Typography variant="caption" color="rgba(255, 255, 255, 0.5)">
                          Powered by ML
                        </Typography>
                      </Box>
                    </Box>
                    
                    {/* Candidate Matches */}
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      sx={{ mb: 3 }}
                    >
                      <Typography variant="subtitle1" fontWeight={600} color="white" gutterBottom>
                        Top Matches
                      </Typography>
                      
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        {[
                          { name: 'Emily Johnson', position: 'Frontend Developer', match: 96, color: theme.palette.success.main },
                          { name: 'Michael Chen', position: 'UI Developer', match: 92, color: theme.palette.success.main },
                          { name: 'Sarah Williams', position: 'Full Stack Developer', match: 85, color: theme.palette.info.main }
                        ].map((candidate, idx) => (
                          <Box
                            key={idx}
                            component={motion.div}
                            whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            sx={{
                              p: 1.5,
                              borderRadius: 2,
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center'
                            }}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                              <Box
                                sx={{
                                  width: 32,
                                  height: 32,
                                  borderRadius: '50%',
                                  background: alpha(candidate.color, 0.2),
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontWeight: 700,
                                  color: candidate.color
                                }}
                              >
                                {candidate.name.charAt(0)}
                              </Box>
                              <Box>
                                <Typography variant="body2" fontWeight={600} color="white">
                                  {candidate.name}
                                </Typography>
                                <Typography variant="caption" color="rgba(255, 255, 255, 0.6)">
                                  {candidate.position}
                                </Typography>
                              </Box>
                            </Box>
                            <Chip
                              size="small"
                              label={`${candidate.match}%`}
                              sx={{ 
                                backgroundColor: alpha(candidate.color, 0.2),
                                color: candidate.color,
                                fontWeight: 600,
                                height: 24,
                                minWidth: 45
                              }}
                            />
                          </Box>
                        ))}
                      </Box>
                    </Box>
                    
                    {/* Action Button */}
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center'
                      }}
                    >
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        sx={{
                          borderRadius: 50,
                          px: 3,
                          py: 0.75,
                          fontWeight: 600,
                          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                        }}
                      >
                        Explore Solution
                      </Button>
                    </Box>
                  </Box>
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
              
              {/* Floating feature cards */}
              {[
                { 
                  icon: <PsychologyIcon />, 
                  text: 'AI Matching', 
                  color: theme.palette.secondary.main,
                  position: { top: '15%', left: '0%' }
                },
                { 
                  icon: <DiversityIcon />, 
                  text: 'Video Analysis', 
                  color: theme.palette.error.main,
                  position: { bottom: '10%', right: '5%' }
                },
              ].map((feature, index) => (
                <Paper
                  key={index}
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                  elevation={0}
                  sx={{
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    px: 2,
                    py: 1.5,
                    borderRadius: 3,
                    background: alpha(feature.color, 0.15),
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${alpha(feature.color, 0.3)}`,
                    zIndex: 3,
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                    ...feature.position
                  }}
                >
                  <Box sx={{ color: 'white', mr: 1 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'white' }}>
                    {feature.text}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SolutionsHero;
