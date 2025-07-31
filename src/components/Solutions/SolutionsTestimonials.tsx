'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  alpha,
  Paper,
  Avatar,
  Rating,
  IconButton,
} from '@mui/material';
import {
  FormatQuote as FormatQuoteIcon,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Deepak Jha',
    position: 'Director',
    company: 'BCCM',
    industry: 'Hospitality',
    avatar: '/avatars/avatar1.jpg',
    quote: 'HireGenix has completely transformed our recruitment process. We\'ve reduced our time-to-hire by 45% while improving the quality of our hires. The AI-powered candidate matching is like having an extra team member who works 24/7.',
    rating: 5,
    solution: 'AI Recruitment',
    color: '#f05126', // primary
  },
  {
    id: 2,
    name: 'Kay Madaan',
    position: 'CEO',
    company: 'XS Worldwide',
    industry: 'Exhibition Industry',
    avatar: '/avatars/avatar2.jpg',
    quote: 'The video interview platform has been a game-changer for our global hiring efforts. We can now interview candidates from anywhere in the world with ease, and the AI analysis helps us identify the best candidates quickly and objectively.',
    rating: 5,
    solution: 'Video Interviews',
    color: '#2196f3', // secondary
  },
  {
    id: 3,
    name: 'Neha Varma',
    position: 'Founder',
    company: 'StartupFlux',
    industry: 'Marketing and Communications',
    avatar: '/avatars/avatar3.jpg',
    quote: 'The skills assessment platform has eliminated resume fraud from our hiring process. We now have objective data on each candidate\'s abilities, which has led to better hiring decisions and reduced turnover by 30%.',
    rating: 4.5,
    solution: 'Skills Assessment',
    color: '#ff9800', // warning
  },
  {
    id: 4,
    name: 'Sarah Bartholomeusz',
    position: 'CEO',
    company: 'YouLegal',
    industry: 'Legal Services',
    avatar: '/team/david-rodriguez.jpg',
    quote: 'The predictive workforce analytics has given us insights we never had before. We can now forecast our hiring needs with remarkable accuracy and make data-driven decisions about team composition and development.',
    rating: 5,
    solution: 'Workforce Analytics',
    color: '#4caf50', // success
  },
];

const SolutionsTestimonials: React.FC = () => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 }, 
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.background.default, 1)} 100%)`,
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
              CLIENT SUCCESS STORIES
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
                fontWeight: 400
              }}
            >
              Hear from organizations that have transformed their recruitment process with HireGenix
            </Typography>
          </motion.div>
        </Box>

        {/* Testimonial Carousel */}
        <Box sx={{ position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 6 },
                  borderRadius: 4,
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
                  background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.paper, 0.7)} 100%)`,
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${alpha(testimonials[activeIndex].color, 0.2)}`,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Quote icon */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    opacity: 0.05,
                    fontSize: 200,
                    color: testimonials[activeIndex].color,
                    transform: 'rotate(180deg)',
                  }}
                >
                  <FormatQuoteIcon fontSize="inherit" />
                </Box>
                
                <Grid container spacing={4} alignItems="center">
                  <Grid item xs={12} md={4}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Box
                        sx={{
                          position: 'relative',
                          mx: 'auto',
                          mb: 3,
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: testimonials[activeIndex].color,
                            color: 'white',
                            borderRadius: '50%',
                            width: 50,
                            height: 50,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: `0 4px 14px ${alpha(testimonials[activeIndex].color, 0.4)}`,
                            mx: 'auto',
                          }}
                        >
                          <FormatQuoteIcon />
                        </Box>
                      </Box>
                      
                      <Typography variant="h5" component="h3" fontWeight={700} sx={{ mb: 1 }}>
                        {testimonials[activeIndex].name}
                      </Typography>
                      
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                        {testimonials[activeIndex].position}
                      </Typography>
                      
                      <Typography variant="body2" fontWeight={600} sx={{ mb: 2, color: testimonials[activeIndex].color }}>
                        {testimonials[activeIndex].company}
                      </Typography>
                      
                      <Rating 
                        value={testimonials[activeIndex].rating} 
                        precision={0.5} 
                        readOnly 
                        sx={{ 
                          '& .MuiRating-iconFilled': {
                            color: testimonials[activeIndex].color,
                          }
                        }}
                      />
                      
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          display: 'block', 
                          mt: 2,
                          px: 2,
                          py: 1,
                          borderRadius: 50,
                          backgroundColor: alpha(testimonials[activeIndex].color, 0.1),
                          color: testimonials[activeIndex].color,
                          fontWeight: 600,
                          width: 'fit-content',
                          mx: 'auto',
                        }}
                      >
                        {testimonials[activeIndex].solution} Solution
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={8}>
                    <Box
                      sx={{
                        position: 'relative',
                        pl: { xs: 0, md: 4 },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: 4,
                          backgroundColor: alpha(testimonials[activeIndex].color, 0.2),
                          borderRadius: 2,
                          display: { xs: 'none', md: 'block' },
                        },
                      }}
                    >
                      <Typography
                        variant="h4"
                        component="blockquote"
                        sx={{
                          fontWeight: 400,
                          fontStyle: 'italic',
                          lineHeight: 1.6,
                          fontSize: { xs: '1.25rem', md: '1.5rem' },
                          color: 'text.primary',
                          mb: 4,
                        }}
                      >
                        "{testimonials[activeIndex].quote}"
                      </Typography>
                      
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          {testimonials.map((_, index) => (
                            <Box
                              key={index}
                              sx={{
                                width: 30,
                                height: 6,
                                borderRadius: 3,
                                backgroundColor: index === activeIndex 
                                  ? testimonials[activeIndex].color 
                                  : alpha(theme.palette.text.disabled, 0.2),
                                transition: 'all 0.3s ease',
                              }}
                            />
                          ))}
                        </Box>
                        
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <IconButton 
                            onClick={prevTestimonial}
                            sx={{
                              backgroundColor: alpha(theme.palette.background.default, 0.6),
                              '&:hover': {
                                backgroundColor: alpha(testimonials[activeIndex].color, 0.1),
                              },
                            }}
                          >
                            <ArrowBackIcon />
                          </IconButton>
                          <IconButton 
                            onClick={nextTestimonial}
                            sx={{
                              backgroundColor: alpha(theme.palette.background.default, 0.6),
                              '&:hover': {
                                backgroundColor: alpha(testimonials[activeIndex].color, 0.1),
                              },
                            }}
                          >
                            <ArrowForwardIcon />
                          </IconButton>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </motion.div>
          </AnimatePresence>
        </Box>
        
        {/* Testimonial Indicators - Mobile */}
        <Box 
          sx={{ 
            display: { xs: 'flex', md: 'none' }, 
            justifyContent: 'center', 
            mt: 4,
            gap: 1,
          }}
        >
          {testimonials.map((_, index) => (
            <Box
              key={index}
              onClick={() => setActiveIndex(index)}
              sx={{
                width: 30,
                height: 6,
                borderRadius: 3,
                backgroundColor: index === activeIndex 
                  ? testimonials[activeIndex].color 
                  : alpha(theme.palette.text.disabled, 0.2),
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default SolutionsTestimonials;
