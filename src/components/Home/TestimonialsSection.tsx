'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  IconButton,
  useTheme,
  alpha,
  Rating
} from '@mui/material';
import {
  FormatQuote as FormatQuoteIcon,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Deepak Jha',
    position: 'Director',
    company: 'BCCM',
    industry: 'Hospitality',
    avatar: '/avatars/avatar1.jpg',
    rating: 5,
    quote: 'HireGenix has completely transformed our recruitment process. We\'ve reduced our time-to-hire by 45% and the quality of candidates has improved dramatically. The AI-powered matching is incredibly accurate.',
  },
  {
    id: 2,
    name: 'Kay Madaan',
    position: 'CEO',
    company: 'XS Worldwide',
    industry: 'Exhibition Industry',
    avatar: '/avatars/avatar2.jpg',
    rating: 5,
    quote: 'The video interview analysis feature has been a game-changer for us. It provides insights we would have missed in traditional interviews and helps us make more objective hiring decisions.',
  },
  {
    id: 3,
    name: 'Neha Varma',
    position: 'Founder',
    company: 'StartupFlux',
    industry: 'Marketing and Communications',
    avatar: '/avatars/avatar3.jpg',
    rating: 5,
    quote: 'As a fast-growing startup, we needed to hire quickly without sacrificing quality. HireGenix helped us build our team with exceptional talent in record time. The ROI has been incredible.',
  },
  {
    id: 4,
    name: 'Sarah Bartholomeusz',
    position: 'CEO',
    company: 'YouLegal',
    industry: 'Legal Services',
    avatar: '/team/david-rodriguez.jpg',
    rating: 5,
    quote: 'The skills assessment tools are comprehensive and customizable. We\'ve been able to accurately evaluate candidates\' technical abilities and soft skills, leading to better hiring decisions.',
  }
];

// Animation variants
const fadeVariant = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

export const TestimonialsSection: React.FC = () => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0.03)} 0%, ${alpha(theme.palette.primary.main, 0.07)} 100%)`,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '5%',
          color: alpha(theme.palette.primary.main, 0.07),
          fontSize: '400px',
          lineHeight: 0,
          zIndex: 0,
          transform: 'rotate(180deg)'
        }}
      >
        <FormatQuoteIcon fontSize="inherit" />
      </Box>

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
              SUCCESS STORIES
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
              What Our Clients Say
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
                fontWeight: 400,
                mb: 6
              }}
            >
              Hear from organizations that have transformed their recruitment process with HireGenix
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={10} lg={8}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 4,
                background: alpha(theme.palette.background.paper, 0.8),
                backdropFilter: 'blur(10px)',
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                boxShadow: `0 20px 80px ${alpha(theme.palette.common.black, 0.07)}`,
                position: 'relative',
                minHeight: { xs: 300, md: 350 }
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: -20,
                  left: 40,
                  color: alpha(theme.palette.primary.main, 0.1),
                  fontSize: '100px',
                  lineHeight: 0
                }}
              >
                <FormatQuoteIcon fontSize="inherit" />
              </Box>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  variants={fadeVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography
                      variant="h4"
                      component="blockquote"
                      sx={{
                        fontWeight: 500,
                        fontStyle: 'italic',
                        mb: 4,
                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                        lineHeight: 1.6,
                        color: theme.palette.text.primary
                      }}
                    >
                      "{activeTestimonial.quote}"
                    </Typography>

                    <Rating
                      value={activeTestimonial.rating}
                      readOnly
                      size="large"
                      sx={{ mb: 3 }}
                    />
                  </Box>

                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" component="p" fontWeight={700}>
                      {activeTestimonial.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {activeTestimonial.position}
                    </Typography>
                    <Typography variant="body2" color="primary" fontWeight={600}>
                      {activeTestimonial.company}
                    </Typography>
                  </Box>
                </motion.div>
              </AnimatePresence>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 2,
                  mt: 4
                }}
              >
                <IconButton
                  onClick={handlePrev}
                  sx={{
                    background: alpha(theme.palette.primary.main, 0.1),
                    color: theme.palette.primary.main,
                    '&:hover': {
                      background: alpha(theme.palette.primary.main, 0.2)
                    }
                  }}
                >
                  <ArrowBackIcon />
                </IconButton>
                <IconButton
                  onClick={handleNext}
                  sx={{
                    background: alpha(theme.palette.primary.main, 0.1),
                    color: theme.palette.primary.main,
                    '&:hover': {
                      background: alpha(theme.palette.primary.main, 0.2)
                    }
                  }}
                >
                  <ArrowForwardIcon />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 4
          }}
        >
          {testimonials.map((_, index) => (
            <Box
              key={index}
              component="button"
              onClick={() => setActiveIndex(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                mx: 0.5,
                border: 'none',
                background: index === activeIndex
                  ? theme.palette.primary.main
                  : alpha(theme.palette.primary.main, 0.3),
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: index === activeIndex
                    ? theme.palette.primary.main
                    : alpha(theme.palette.primary.main, 0.5)
                }
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
