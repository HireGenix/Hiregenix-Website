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
} from '@mui/material';
import {
  Speed as SpeedIcon,
  CheckCircle as CheckCircleIcon,
  TrendingUp as TrendingUpIcon,
  People as PeopleIcon,
  Savings as SavingsIcon,
  ThumbUp as ThumbUpIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Stats data
const stats = [
  { 
    title: 'Time-to-Hire Reduction', 
    count: '50%', 
    icon: <SpeedIcon fontSize="large" />, 
    description: 'Reduce your hiring timeline by half with our AI-powered matching',
    color: '#4caf50' // success
  },
  { 
    title: 'Quality-of-Hire Improvement', 
    count: '40%', 
    icon: <CheckCircleIcon fontSize="large" />, 
    description: 'Better candidates mean better employees and lower turnover',
    color: '#2196f3' // primary
  },
  { 
    title: 'Recruiter Productivity', 
    count: '60%', 
    icon: <TrendingUpIcon fontSize="large" />, 
    description: 'Your team can handle more requisitions with less effort',
    color: '#ff9800' // warning
  },
  { 
    title: 'Candidate Satisfaction', 
    count: '45%', 
    icon: <PeopleIcon fontSize="large" />, 
    description: 'Improved candidate experience leads to better employer branding',
    color: '#f44336' // error
  },
  { 
    title: 'Cost-per-Hire Savings', 
    count: '35%', 
    icon: <SavingsIcon fontSize="large" />, 
    description: 'Significant reduction in overall recruitment costs',
    color: '#9c27b0' // secondary
  },
  { 
    title: 'Retention Rate Increase', 
    count: '25%', 
    icon: <ThumbUpIcon fontSize="large" />, 
    description: 'Better matches lead to longer-lasting employment relationships',
    color: '#00bcd4' // info
  },
];

const SolutionsStats: React.FC = () => {
  const theme = useTheme();

  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 }, 
        background: `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.8)} 0%, ${theme.palette.background.default} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.primary.main, 0)} 70%)`,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0)} 70%)`,
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
            <Typography
              variant="overline"
              component="p"
              sx={{ 
                mb: 1, 
                fontWeight: 600, 
                letterSpacing: 1.5,
                color: theme.palette.primary.main
              }}
            >
              PROVEN RESULTS
            </Typography>
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
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Real Impact on Your Recruitment
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
                fontWeight: 400
              }}
            >
              Our clients see dramatic improvements in their recruitment metrics across the board
            </Typography>
          </motion.div>
        </Box>
        
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    borderRadius: 4,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                    background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.paper, 0.7)} 100%)`,
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                      background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 1)} 0%, ${alpha(theme.palette.background.paper, 0.9)} 100%)`,
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      background: alpha(stat.color, 0.1),
                      color: stat.color,
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: -5,
                        left: -5,
                        right: -5,
                        bottom: -5,
                        borderRadius: '50%',
                        border: `2px dashed ${alpha(stat.color, 0.3)}`,
                        animation: 'spin 20s linear infinite',
                      },
                      '@keyframes spin': {
                        '0%': { transform: 'rotate(0deg)' },
                        '100%': { transform: 'rotate(360deg)' },
                      },
                    }}
                  >
                    {stat.icon}
                  </Box>
                  
                  <Typography 
                    variant="h2" 
                    component="div" 
                    fontWeight={800} 
                    sx={{ 
                      mb: 1,
                      fontSize: { xs: '2.5rem', md: '3rem' },
                      background: `linear-gradient(90deg, ${stat.color} 0%, ${alpha(stat.color, 0.7)} 100%)`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.count}
                  </Typography>
                  
                  <Typography 
                    variant="h6" 
                    fontWeight={600} 
                    sx={{ mb: 2 }}
                  >
                    {stat.title}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {stat.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        
        {/* Bottom decorative element */}
        <Box
          component={motion.div}
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          sx={{
            height: 4,
            mt: 8,
            mx: 'auto',
            maxWidth: '60%',
            background: `linear-gradient(to right, ${alpha(theme.palette.primary.main, 0)}, ${alpha(theme.palette.primary.main, 0.5)}, ${alpha(theme.palette.primary.main, 0)})`,
            borderRadius: 2,
          }}
        />
      </Container>
    </Box>
  );
};

export default SolutionsStats;
