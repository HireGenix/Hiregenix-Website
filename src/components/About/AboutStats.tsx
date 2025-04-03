'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
} from '@mui/material';
import {
  Business as BusinessIcon,
  People as PeopleIcon,
  Speed as SpeedIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Stats data
const statsData = [
  {
    value: '50%',
    label: 'Faster Hiring',
    description: 'Average reduction in time-to-hire',
    icon: <SpeedIcon fontSize="large" />,
    color: '#2196f3' // primary
  },
  {
    value: '10,000+',
    label: 'Candidates',
    description: 'Matched with ideal positions monthly',
    icon: <PeopleIcon fontSize="large" />,
    color: '#4caf50' // success
  },
  {
    value: '2,500+',
    label: 'Companies',
    description: 'Using our platform worldwide',
    icon: <BusinessIcon fontSize="large" />,
    color: '#ff9800' // warning
  },
  {
    value: '35%',
    label: 'Retention Increase',
    description: 'Higher employee retention rates',
    icon: <TrendingUpIcon fontSize="large" />,
    color: '#f44336' // error
  }
];

const AboutStats: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
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
              OUR IMPACT
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
                fontSize: { xs: '2rem', md: '2.75rem' }
              }}
            >
              By The Numbers
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
              The measurable impact of our AI-powered recruitment platform
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {statsData.map((stat, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={3} 
              key={index}
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 4,
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                  '&:hover': {
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 70,
                    height: 70,
                    borderRadius: '50%',
                    background: `${stat.color}15`,
                    color: stat.color,
                    mb: 3,
                    mx: 'auto'
                  }}
                >
                  {stat.icon}
                </Box>
                <Typography
                  variant="h2"
                  component="p"
                  sx={{ 
                    fontWeight: 800, 
                    mb: 1,
                    color: stat.color,
                    fontSize: { xs: '2.5rem', md: '3rem' }
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ 
                    fontWeight: 700, 
                    mb: 2,
                  }}
                >
                  {stat.label}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.7 }}
                >
                  {stat.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutStats;
