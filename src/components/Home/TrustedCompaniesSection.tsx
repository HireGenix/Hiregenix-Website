'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  Paper,
  alpha,
  Divider
} from '@mui/material';
import { motion } from 'framer-motion';

// Trusted by companies data with official logo URLs
const trustedCompanies = [
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', employees: '8,000+' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', employees: '1,500+' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', employees: '5,000+' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg', employees: '2,500+' },
  { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg', employees: '3,200+' },
  { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_logo.svg', employees: '1,000+' }
];

// Animation variants
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const TrustedCompaniesSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        background: alpha(theme.palette.background.paper, 0.8),
        borderBottom: '1px solid',
        borderColor: alpha(theme.palette.divider, 0.1),
        backdropFilter: 'blur(10px)'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="overline"
              component="p"
              align="center"
              sx={{ 
                mb: 1, 
                fontWeight: 600, 
                letterSpacing: 1.5,
                color: theme.palette.primary.main
              }}
            >
              INDUSTRY LEADERS TRUST US
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Typography
              variant="h4"
              component="h2"
              align="center"
              sx={{ 
                mb: 2, 
                fontWeight: 700,
                fontSize: { xs: '1.75rem', md: '2.25rem' }
              }}
            >
              Trusted by Leading Companies
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              sx={{ 
                maxWidth: 700, 
                mx: 'auto',
                mb: 5
              }}
            >
              Join thousands of companies worldwide that use HireGenix to transform their recruitment process
            </Typography>
          </motion.div>
          
          <Box sx={{ width: '100%', mb: 6 }}>
            <Divider>
              <Box 
                component={motion.div}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                sx={{ 
                  px: 2, 
                  py: 0.5, 
                  borderRadius: 2,
                  background: alpha(theme.palette.primary.main, 0.05),
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                }}
              >
                <Typography 
                  variant="subtitle2" 
                  color="primary"
                  sx={{ fontWeight: 600 }}
                >
                  20,000+ Companies
                </Typography>
              </Box>
            </Divider>
          </Box>
        </Box>
        
        <Grid 
          container 
          spacing={4} 
          justifyContent="center" 
          alignItems="center"
          component={motion.div}
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          {trustedCompanies.map((company, index) => (
            <Grid item key={index} xs={6} sm={4} md={2}>
              <motion.div variants={itemVariant}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: alpha(theme.palette.background.paper, 0.6),
                    backdropFilter: 'blur(10px)',
                    borderRadius: 3,
                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 10px 30px ${alpha(theme.palette.primary.main, 0.1)}`,
                      background: alpha(theme.palette.background.paper, 0.9),
                    }
                  }}
                >
                  <Box
                    sx={{
                      opacity: 0.7,
                      filter: 'grayscale(100%)',
                      transition: 'all 0.3s ease',
                      textAlign: 'center',
                      mb: 1,
                      '&:hover': {
                        opacity: 1,
                        filter: 'grayscale(0%)'
                      },
                    }}
                  >
                    <Typography variant="h6" fontWeight={700} sx={{ mb: 0.5 }}>
                      {company.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {company.employees} employees
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TrustedCompaniesSection;
