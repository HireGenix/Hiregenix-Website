'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
  alpha,
  Chip,
  Card,
  CardContent,
  Avatar
} from '@mui/material';
import {
  VideoCall as VideoCallIcon,
  CheckCircle as CheckCircleIcon,
  Psychology as PsychologyIcon,
  RecordVoiceOver as RecordVoiceOverIcon,
  Face as FaceIcon,
  Speed as SpeedIcon,
  ArrowForward as ArrowForwardIcon,
  Visibility as VisibilityIcon,
  Mic as MicIcon,
  Videocam as VideocamIcon,
  Translate as TranslateIcon,
  CloudUpload as CloudUploadIcon,
  Schedule as ScheduleIcon,
  Devices as DevicesIcon,
  Security as SecurityIcon,
  Equalizer as EqualizerIcon
} from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { SEOMetadata } from '@/components/SEO';

// Animation variants
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const fadeInLeftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const fadeInRightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Benefits data
const benefits = [
  {
    title: 'Eliminate Geographical Barriers',
    description: 'Interview candidates from anywhere in the world without the need for travel or physical presence.',
    icon: <DevicesIcon fontSize="large" />
  },
  {
    title: 'Reduce Time-to-Hire',
    description: 'Schedule and conduct interviews faster with automated coordination and flexible timing options.',
    icon: <SpeedIcon fontSize="large" />
  },
  {
    title: 'Objective Candidate Evaluation',
    description: 'Use AI analysis to ensure consistent, bias-free assessment of all candidates.',
    icon: <EqualizerIcon fontSize="large" />
  },
  {
    title: 'Enhanced Collaboration',
    description: 'Allow multiple team members to participate in and review interviews asynchronously.',
    icon: <ScheduleIcon fontSize="large" />
  }
];

// Features data
const features = [
  {
    title: 'Real-time Sentiment Analysis',
    description: 'Our AI analyzes candidate responses in real-time, detecting emotional cues, engagement levels, and confidence to provide deeper insights into candidate suitability.',
    icon: <VisibilityIcon />,
    details: [
      'Emotional response tracking during technical questions',
      'Engagement level monitoring throughout the interview',
      'Confidence assessment during challenging scenarios',
      'Stress response analysis for high-pressure roles'
    ]
  },
  {
    title: 'Speech Pattern Analysis',
    description: 'Advanced voice analysis examines speech patterns, clarity, pace, and vocabulary usage to evaluate communication skills and language proficiency.',
    icon: <MicIcon />,
    details: [
      'Communication clarity and articulation assessment',
      'Speaking pace and rhythm analysis',
      'Filler word detection and quantification',
      'Technical vocabulary usage evaluation'
    ]
  },
  {
    title: 'Behavioral Assessment',
    description: 'Comprehensive analysis of facial expressions, body language, and response patterns to evaluate soft skills and cultural fit.',
    icon: <FaceIcon />,
    details: [
      'Facial expression analysis during different question types',
      'Eye contact and engagement tracking',
      'Response consistency evaluation across similar questions',
      'Non-verbal communication assessment'
    ]
  },
  {
    title: 'Technical Skills Verification',
    description: 'Integrated coding challenges and technical assessments with AI-powered analysis to verify claimed skills and problem-solving abilities.',
    icon: <PsychologyIcon />,
    details: [
      'Live coding challenge integration',
      'Problem-solving approach analysis',
      'Technical accuracy verification',
      'Coding style and best practices assessment'
    ]
  }
];

// Technical details
const technicalDetails = [
  {
    title: 'WebRTC Technology',
    description: 'Enterprise-grade video conferencing with low latency and high-quality audio/video.',
    icon: <VideocamIcon />
  },
  {
    title: 'Cloud Recording',
    description: 'Secure cloud storage of interview recordings with easy sharing and review capabilities.',
    icon: <CloudUploadIcon />
  },
  {
    title: 'AI-Powered Translation',
    description: 'Real-time translation and transcription in 30+ languages for global recruitment.',
    icon: <TranslateIcon />
  },
  {
    title: 'Enterprise Security',
    description: 'End-to-end encryption and compliance with global data protection regulations.',
    icon: <SecurityIcon />
  }
];

// Testimonials
const testimonials = [
  {
    quote: "HireGenix's video interview platform has completely transformed our technical hiring process. The AI analysis helps us identify top candidates more accurately than traditional interviews.",
    name: "Sarah Johnson",
    position: "CTO, TechCorp",
    avatar: "/avatars/avatar1.jpg"
  },
  {
    quote: "The sentiment analysis feature has been a game-changer for our sales team recruitment. We can now objectively assess communication skills and emotional intelligence.",
    name: "Michael Chen",
    position: "VP of Sales, InnovateSoft",
    avatar: "/avatars/avatar2.jpg"
  }
];

export default function VideoInterviewsPage() {
  const theme = useTheme();

  const seoData = {
    title: 'AI-Powered Video Interview Platform | HireGenix',
    description: 'HireGenix\'s comprehensive video interview platform with AI-powered analysis helps you make better hiring decisions through advanced candidate assessment.',
    keywords: 'video interviews, AI interview analysis, remote interviewing, sentiment analysis, speech pattern analysis'
  };

  return (
    <Layout>
      <SEOMetadata seoData={seoData} />

      <Box component="main">
        {/* Hero Section */}
        <Box
          sx={{
            position: 'relative',
            py: { xs: 10, md: 16 },
            background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
            color: 'white',
            overflow: 'hidden'
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
              zIndex: 1
            }}
          />

          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
            <Grid container spacing={6} alignItems="center">
              <Grid
                item
                xs={12}
                md={6}
                component={motion.div}
                variants={fadeInLeftVariant}
                initial="hidden"
                animate="visible"
              >
                <Chip
                  label="VIDEO INTERVIEW PLATFORM"
                  color="primary"
                  size="small"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    px: 2,
                    py: 2.5,
                    '& .MuiChip-label': {
                      px: 1
                    }
                  }}
                />
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
                    lineHeight: 1.2
                  }}
                >
                  AI-Powered Video Interviews
                </Typography>
                <Typography
                  variant="h2"
                  component="p"
                  sx={{
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    fontWeight: 400,
                    mb: 4,
                    opacity: 0.9,
                    maxWidth: 600
                  }}
                >
                  Conduct seamless video interviews with candidates from anywhere in the world with AI-powered analysis to help you make better hiring decisions.
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    component={Link}
                    href="/demo"
                    sx={{
                      py: 1.5,
                      px: 3,
                      fontSize: '1rem',
                      boxShadow: '0 4px 14px rgba(255, 255, 255, 0.2)',
                      borderRadius: '50px',
                      fontWeight: 600
                    }}
                  >
                    Request Demo
                  </Button>
                  <Button
                    variant="outlined"
                    color="inherit"
                    size="large"
                    component={Link}
                    href="/contact"
                    sx={{
                      py: 1.5,
                      px: 3,
                      fontSize: '1rem',
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                      borderRadius: '50px',
                      fontWeight: 600,
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }
                    }}
                  >
                    Contact Sales
                  </Button>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: { xs: 'none', md: 'block' }
                }}
                component={motion.div}
                variants={fadeInRightVariant}
                initial="hidden"
                animate="visible"
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '400px'
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '90%',
                      height: 400,
                      borderRadius: '30px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden'
                    }}
                  >
                    <Image
                      src="/solutions/video-interviews.jpg"
                      alt="Video Interview Platform"
                      width={350}
                      height={350}
                      style={{ objectFit: 'contain', zIndex: 1 }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Benefits Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            background: theme.palette.background.default
          }}
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariant}
        >
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '2rem', md: '2.75rem' }
                }}
              >
                Benefits of AI-Powered Video Interviews
              </Typography>
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
                Transform your interview process with intelligent video technology that provides deeper insights into candidates
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {benefits.map((benefit, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper
                    sx={{
                      p: 4,
                      height: '100%',
                      borderRadius: 4,
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)'
                      }
                    }}
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 70,
                        height: 70,
                        borderRadius: '50%',
                        background: alpha(theme.palette.secondary.main, 0.1),
                        color: theme.palette.secondary.main,
                        mb: 3
                      }}
                    >
                      {benefit.icon}
                    </Box>
                    <Typography variant="h5" component="h3" fontWeight={600} gutterBottom>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {benefit.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Features Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            background: alpha(theme.palette.secondary.main, 0.03)
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Chip
                label="KEY FEATURES"
                color="secondary"
                size="small"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  background: alpha(theme.palette.secondary.main, 0.1),
                  border: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
                  color: theme.palette.secondary.main
                }}
              />
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '2rem', md: '2.75rem' }
                }}
              >
                Advanced Interview Analysis
              </Typography>
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
                Our AI goes beyond recording interviews to provide deep insights into candidate suitability
              </Typography>
            </Box>

            {features.map((feature, index) => (
              <Box
                key={index}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{ mb: 6 }}
              >
                <Grid
                  container
                  spacing={4}
                  alignItems="center"
                  direction={index % 2 === 0 ? 'row' : 'row-reverse'}
                >
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        mb: 3
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          background: alpha(theme.palette.secondary.main, 0.1),
                          color: theme.palette.secondary.main,
                          mr: 2,
                          flexShrink: 0
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Box>
                        <Typography variant="h4" component="h3" fontWeight={600} gutterBottom>
                          {feature.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                          {feature.description}
                        </Typography>
                      </Box>
                    </Box>
                    <List>
                      {feature.details.map((detail, idx) => (
                        <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircleIcon color="success" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={detail} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Paper
                      sx={{
                        p: 0,
                        overflow: 'hidden',
                        borderRadius: 4,
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                        height: 300,
                        position: 'relative'
                      }}
                    >
                      <Image
                        src={`/solutions/feature-${index + 5}.jpg`}
                        alt={feature.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </Paper>
                  </Grid>
                </Grid>
                {index < features.length - 1 && (
                  <Divider sx={{ my: 6 }} />
                )}
              </Box>
            ))}
          </Container>
        </Box>

        {/* Testimonials Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            background: theme.palette.background.default
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
                  color: theme.palette.primary.main
                }}
              />
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '2rem', md: '2.75rem' }
                }}
              >
                What Our Clients Say
              </Typography>
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
                Hear from companies that have transformed their interview process with our platform
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {testimonials.map((testimonial, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)'
                      }
                    }}
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ position: 'relative', mb: 4 }}>
                        <Typography
                          variant="h1"
                          sx={{
                            position: 'absolute',
                            top: -60,
                            left: -20,
                            fontSize: '120px',
                            color: alpha(theme.palette.secondary.main, 0.1),
                            zIndex: 0
                          }}
                        >
                          "
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: '1.1rem',
                            fontStyle: 'italic',
                            position: 'relative',
                            zIndex: 1
                          }}
                        >
                          {testimonial.quote}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          sx={{ width: 56, height: 56, mr: 2 }}
                        />
                        <Box>
                          <Typography variant="h6" fontWeight={600}>
                            {testimonial.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {testimonial.position}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Technical Details Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            background: alpha(theme.palette.secondary.main, 0.03)
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Chip
                label="TECHNOLOGY"
                color="secondary"
                size="small"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  background: alpha(theme.palette.secondary.main, 0.1),
                  border: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
                  color: theme.palette.secondary.main
                }}
              />
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '2rem', md: '2.75rem' }
                }}
              >
                Enterprise-Grade Video Technology
              </Typography>
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
                Built on secure, reliable technology that scales with your organization
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {technicalDetails.map((detail, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Paper
                    sx={{
                      p: 3,
                      height: '100%',
                      borderRadius: 4,
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)'
                      }
                    }}
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 70,
                        height: 70,
                        borderRadius: '50%',
                        background: alpha(theme.palette.secondary.main, 0.1),
                        color: theme.palette.secondary.main,
                        mb: 3
                      }}
                    >
                      {detail.icon}
                    </Box>
                    <Typography variant="h6" component="h3" fontWeight={600} gutterBottom>
                      {detail.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {detail.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
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
              zIndex: 1
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
                  mb: 2
                }}
              >
                Ready to Transform Your Interview Process?
              </Typography>
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  fontWeight: 400,
                  mb: 4,
                  opacity: 0.9
                }}
              >
                Schedule a demo to see how our AI-powered video interviews can help you make better hiring decisions
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                <Button
                  component={Link}
                  href="/demo"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: '50px',
                    boxShadow: '0 4px 14px 0 rgba(255, 255, 255, 0.2)'
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
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: '50px',
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  Contact Sales
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
}
