'use client';

import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  CardContent,
  Button,
  Chip,
  Avatar,
  Rating,
  IconButton,
  Container,
  alpha,
  useTheme,
} from '@mui/material';
import {
  Analytics as AnalyticsIcon,
  Assessment as AssessmentIcon,
  VideoCall as VideoCallIcon,
  ArrowForward as ArrowForwardIcon,
  Speed as SpeedIcon,
  CheckCircle as CheckCircleIcon,
  TrendingUp as TrendingUpIcon,
  Insights as InsightsIcon,
  FormatQuote as FormatQuoteIcon,
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
  Diversity3 as DiversityIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation variants
export const fadeInUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};

export const fadeInLeftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};

export const fadeInRightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};

// Testimonials data
export const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'HR Director',
    company: 'TechCorp',
    avatar: '/avatars/avatar1.jpg',
    quote: 'HireGenix has completely transformed our recruitment process. We\'ve reduced our time-to-hire by 45% and improved the quality of our hires significantly.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    position: 'Talent Acquisition Manager',
    company: 'InnovateSoft',
    avatar: '/avatars/avatar2.jpg',
    quote: 'The AI-powered matching is incredibly accurate. We\'re finding candidates that are not just qualified on paper but are also great cultural fits for our organization.',
    rating: 5,
  },
  {
    name: 'Jessica Williams',
    position: 'Recruiting Lead',
    company: 'Global Solutions Inc.',
    avatar: '/avatars/avatar3.jpg',
    quote: 'What impressed me most was how HireGenix helped us eliminate bias in our hiring process. Our team is now more diverse and performing better than ever.',
    rating: 4,
  },
];

// Stats data
export const stats = [
  { value: '60%', label: 'Reduction in Time-to-Hire', icon: <SpeedIcon />, color: (theme: any) => theme.palette.primary.main },
  { value: '45%', label: 'Improvement in Quality-of-Hire', icon: <CheckCircleIcon />, color: (theme: any) => theme.palette.secondary.main },
  { value: '3x', label: 'Increase in Recruiter Productivity', icon: <TrendingUpIcon />, color: (theme: any) => theme.palette.success.main },
  { value: '80%', label: 'Reduction in Hiring Bias', icon: <DiversityIcon />, color: (theme: any) => theme.palette.info.main },
];

// Define a type for the color keys to avoid TypeScript errors
type ColorKey = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

// Features data
export const features = [
  {
    title: 'AI-Powered Matching',
    description:
      'Semantic skills matching, career trajectory prediction, and bias detection to find the perfect candidates.',
    icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
    colorKey: 'primary' as ColorKey,
  },
  {
    title: 'Candidate Assessment',
    description:
      'Adaptive testing, AI-reviewed coding challenges, and soft skills simulations to evaluate candidates comprehensively.',
    icon: <AssessmentIcon sx={{ fontSize: 40 }} />,
    colorKey: 'secondary' as ColorKey,
  },
  {
    title: 'Video Interviews',
    description:
      'Real-time sentiment analysis, speech pattern analysis, and behavioral assessment for better hiring decisions.',
    icon: <VideoCallIcon sx={{ fontSize: 40 }} />,
    colorKey: 'info' as ColorKey,
  },
  {
    title: 'Talent Analytics',
    description:
      'Attrition prediction, performance forecasting, and team composition optimization for strategic workforce planning.',
    icon: <InsightsIcon sx={{ fontSize: 40 }} />,
    colorKey: 'success' as ColorKey,
  },
];

export const StatsSection = () => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        py: 6,
        background: 'white',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 2,
                }}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    backgroundColor: (theme) => alpha(stat.color(theme), 0.1),
                    color: stat.color,
                    mb: 2,
                  }}
                >
                  {stat.icon}
                </Box>
                <Typography
                  variant="h3"
                  component="p"
                  sx={{
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    fontWeight: 700,
                    mb: 1,
                    color: stat.color,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontWeight: 500 }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export const FeaturesSection = () => {
  const theme = useTheme();
  
  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 },
        background: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip 
            label="FEATURES" 
            color="primary" 
            size="small"
            sx={{ 
              mb: 2, 
              fontWeight: 600,
              background: alpha(theme.palette.primary.main, 0.1),
              border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
              color: theme.palette.primary.main,
            }} 
          />
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Powerful AI-Driven Features
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="text.secondary"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              fontWeight: 400,
              maxWidth: 700,
              mx: 'auto',
            }}
          >
            Everything you need to streamline your recruitment process and find the best talent
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => {
            const color = theme.palette[feature.colorKey].main;
            
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    p: 0,
                    borderRadius: 4,
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(16px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
                    },
                  }}
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Box
                    sx={{
                      height: 8,
                      background: `linear-gradient(90deg, ${color} 0%, ${alpha(color, 0.7)} 100%)`,
                      width: '100%',
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        backgroundColor: alpha(color, 0.1),
                        color: color,
                        mb: 3,
                        mx: 'auto',
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      align="center"
                      fontWeight={600}
                      sx={{ mb: 2 }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      align="center"
                    >
                      {feature.description}
                    </Typography>
                    
                    <Box sx={{ textAlign: 'center', mt: 3 }}>
                      <Button
                        variant="text"
                        color="primary"
                        endIcon={<ArrowForwardIcon />}
                        component={Link}
                        href="/solutions"
                        sx={{ 
                          fontWeight: 600,
                          '&:hover': {
                            background: alpha(color, 0.1),
                          }
                        }}
                      >
                        Learn More
                      </Button>
                    </Box>
                  </CardContent>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export const TestimonialsSection = () => {
  const theme = useTheme();
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: alpha(theme.palette.primary.main, 0.03),
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip 
            label="TESTIMONIALS" 
            color="primary" 
            size="small"
            sx={{ 
              mb: 2, 
              fontWeight: 600,
              background: alpha(theme.palette.primary.main, 0.1),
              border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
              color: theme.palette.primary.main,
            }} 
          />
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            What Our Clients Say
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="text.secondary"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              fontWeight: 400,
              maxWidth: 700,
              mx: 'auto',
            }}
          >
            Hear from companies that have transformed their hiring process with HireGenix
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'relative',
            maxWidth: 900,
            mx: 'auto',
          }}
        >
          <Paper
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 4,
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
              background: 'white',
              position: 'relative',
              overflow: 'hidden',
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: -20,
                left: -20,
                color: alpha(theme.palette.primary.main, 0.1),
                fontSize: 150,
              }}
            >
              <FormatQuoteIcon fontSize="inherit" />
            </Box>
            
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  fontStyle: 'italic',
                  mb: 4,
                  lineHeight: 1.7,
                }}
              >
                "{testimonials[activeTestimonial].quote}"
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar
                    src={testimonials[activeTestimonial].avatar}
                    alt={testimonials[activeTestimonial].name}
                    sx={{ width: 64, height: 64, mr: 2, border: '3px solid white', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Box>
                    <Typography variant="h6" fontWeight={600}>
                      {testimonials[activeTestimonial].name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonials[activeTestimonial].position}, {testimonials[activeTestimonial].company}
                    </Typography>
                    <Rating
                      value={testimonials[activeTestimonial].rating}
                      readOnly
                      size="small"
                      sx={{ mt: 0.5 }}
                    />
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton onClick={prevTestimonial} color="primary" sx={{ border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}` }}>
                    <KeyboardArrowLeftIcon />
                  </IconButton>
                  <IconButton onClick={nextTestimonial} color="primary" sx={{ border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}` }}>
                    <KeyboardArrowRightIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export const CTASection = () => {
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
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Ready to Transform Your Recruitment Process?
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              fontWeight: 400,
              mb: 4,
              opacity: 0.9,
            }}
          >
            Join thousands of companies that are using HireGenix
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              justifyContent: 'center',
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={Link}
              href="/auth/signup"
              sx={{
                py: 1.5,
                px: 4,
                fontSize: '1rem',
                boxShadow: '0 4px 14px rgba(33, 150, 243, 0.4)',
                borderRadius: '50px',
                fontWeight: 600,
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              component={Link}
              href="/contact"
              sx={{
                py: 1.5,
                px: 4,
                fontSize: '1rem',
                borderColor: 'rgba(255, 255, 255, 0.5)',
                borderRadius: '50px',
                fontWeight: 600,
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Contact Sales
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
