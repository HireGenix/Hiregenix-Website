'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  alpha,
} from '@mui/material';
import {
  Lightbulb as LightbulbIcon,
  Diversity3 as Diversity3Icon,
  Security as SecurityIcon,
  Language as LanguageIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Company values
const companyValues = [
  {
    title: 'Innovation',
    description: 'We constantly push the boundaries of what is possible in recruitment technology, pioneering new approaches that transform how companies hire talent.',
    icon: <LightbulbIcon fontSize="large" />,
    color: '#2196f3', // primary
  },
  {
    title: 'Diversity & Inclusion',
    description: 'We believe diverse teams perform better and build our technology to promote inclusive hiring practices that eliminate bias and create opportunity for all.',
    icon: <Diversity3Icon fontSize="large" />,
    color: '#4caf50', // success
  },
  {
    title: 'Data Privacy',
    description: 'We maintain the highest standards of data security and privacy in all our operations, ensuring that sensitive information is always protected.',
    icon: <SecurityIcon fontSize="large" />,
    color: '#f44336', // error
  },
  {
    title: 'Global Perspective',
    description: 'We design our solutions for the global workforce, supporting multiple languages and cultures to help companies build diverse teams across borders.',
    icon: <LanguageIcon fontSize="large" />,
    color: '#ff9800', // warning
  },
];

const AboutValues: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: alpha(theme.palette.primary.main, 0.03),
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
              OUR PRINCIPLES
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
              Our Values
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
              The core principles that guide everything we do
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {companyValues.map((value, index) => (
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
                  border: `1px solid ${alpha(value.color, 0.2)}`,
                  '&:hover': {
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                    transform: 'translateY(-5px)',
                    borderColor: alpha(value.color, 0.5),
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
                    background: alpha(value.color, 0.1),
                    color: value.color,
                    mb: 3,
                    mx: 'auto'
                  }}
                >
                  {value.icon}
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  align="center"
                  sx={{ 
                    fontWeight: 700, 
                    mb: 2,
                    color: value.color
                  }}
                >
                  {value.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                  sx={{ lineHeight: 1.7 }}
                >
                  {value.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutValues;
