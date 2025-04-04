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
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { SEOMetadata } from '@/components/SEO';
import { HeroSection, benefits, features, technicalDetails, testimonials, seoData, fadeInUpVariant } from './components';

export default function VideoInterviewsPage() {
  const theme = useTheme();

  return (
    <Layout>
      <SEOMetadata seoData={seoData} />

      <Box component="main">
        {/* Hero Section */}
        <HeroSection />

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
                        p: 4,
                        overflow: 'hidden',
                        borderRadius: 4,
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                        height: 300,
                        position: 'relative',
                        background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.light, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.2)} 100%)`,
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      {index === 0 && (
                        // Sentiment Analysis Visualization
                        <Box sx={{ height: '100%', position: 'relative' }}>
                          <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
                            Sentiment Analysis
                          </Typography>
                          
                          <Box
                            component={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            sx={{ mb: 3 }}
                          >
                            {[
                              { emotion: 'Confidence', value: 85, color: theme.palette.success.main },
                              { emotion: 'Enthusiasm', value: 72, color: theme.palette.info.main },
                              { emotion: 'Engagement', value: 90, color: theme.palette.secondary.main },
                              { emotion: 'Clarity', value: 78, color: theme.palette.primary.main },
                            ].map((item, idx) => (
                              <Box key={idx} sx={{ mb: 1.5 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                  <Typography variant="caption" fontWeight={600}>
                                    {item.emotion}
                                  </Typography>
                                  <Typography variant="caption" fontWeight={600} color={item.color}>
                                    {item.value}%
                                  </Typography>
                                </Box>
                                <Box sx={{ width: '100%', height: 8, background: alpha(item.color, 0.2), borderRadius: 4 }}>
                                  <Box
                                    component={motion.div}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${item.value}%` }}
                                    transition={{ duration: 1, delay: 0.3 + idx * 0.1 }}
                                    sx={{
                                      height: '100%',
                                      background: item.color,
                                      borderRadius: 4,
                                    }}
                                  />
                                </Box>
                              </Box>
                            ))}
                          </Box>
                          
                          <Box
                            component={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            sx={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center',
                              gap: 1,
                            }}
                          >
                            <Chip 
                              label="Positive Sentiment" 
                              size="small" 
                              sx={{ 
                                background: alpha(theme.palette.success.main, 0.1),
                                color: theme.palette.success.main,
                                fontWeight: 600,
                                fontSize: '0.7rem'
                              }} 
                            />
                            <Chip 
                              label="High Match" 
                              size="small" 
                              sx={{ 
                                background: alpha(theme.palette.secondary.main, 0.1),
                                color: theme.palette.secondary.main,
                                fontWeight: 600,
                                fontSize: '0.7rem'
                              }} 
                            />
                          </Box>
                        </Box>
                      )}
                      
                      {index === 1 && (
                        // Speech Analysis Visualization
                        <Box sx={{ height: '100%', position: 'relative' }}>
                          <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
                            Speech Pattern Analysis
                          </Typography>
                          
                          <Box
                            sx={{
                              height: 'calc(100% - 60px)',
                              position: 'relative',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                            }}
                          >
                            {/* Audio Waveform Visualization */}
                            <Box
                              component={motion.div}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                              sx={{ 
                                height: 80, 
                                width: '100%', 
                                display: 'flex', 
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                mb: 3,
                              }}
                            >
                              {Array.from({ length: 40 }).map((_, idx) => {
                                const height = Math.sin(idx * 0.5) * 30 + Math.random() * 20 + 10;
                                return (
                                  <Box
                                    key={idx}
                                    component={motion.div}
                                    initial={{ height: 0 }}
                                    animate={{ height }}
                                    transition={{ 
                                      duration: 0.5, 
                                      delay: 0.3 + idx * 0.02,
                                      repeat: Infinity,
                                      repeatType: 'reverse',
                                      repeatDelay: Math.random() * 2
                                    }}
                                    sx={{
                                      width: 3,
                                      background: theme.palette.secondary.main,
                                      borderRadius: 4,
                                      opacity: 0.7,
                                    }}
                                  />
                                );
                              })}
                            </Box>
                            
                            {/* Speech Metrics */}
                            <Box
                              component={motion.div}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.8 }}
                              sx={{ 
                                display: 'flex', 
                                justifyContent: 'space-between',
                                mb: 2,
                              }}
                            >
                              {[
                                { label: 'Pace', value: '95 wpm' },
                                { label: 'Clarity', value: '92%' },
                                { label: 'Filler Words', value: '2%' },
                                { label: 'Pauses', value: 'Natural' },
                              ].map((metric, idx) => (
                                <Box key={idx} sx={{ textAlign: 'center' }}>
                                  <Typography variant="caption" color="text.secondary">
                                    {metric.label}
                                  </Typography>
                                  <Typography variant="body2" fontWeight={600} color={theme.palette.secondary.main}>
                                    {metric.value}
                                  </Typography>
                                </Box>
                              ))}
                            </Box>
                            
                            <Box
                              component={motion.div}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1 }}
                              sx={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                              }}
                            >
                              <Chip 
                                label="Excellent Communication Skills" 
                                size="small" 
                                sx={{ 
                                  background: alpha(theme.palette.secondary.main, 0.1),
                                  color: theme.palette.secondary.main,
                                  fontWeight: 600,
                                  fontSize: '0.7rem'
                                }} 
                              />
                            </Box>
                          </Box>
                        </Box>
                      )}
                      
                      {index === 2 && (
                        // Facial Expression Analysis
                        <Box sx={{ height: '100%', position: 'relative' }}>
                          <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
                            Facial Expression Analysis
                          </Typography>
                          
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              height: 'calc(100% - 60px)',
                            }}
                          >
                            {/* Face Detection Frame */}
                            <Box
                              component={motion.div}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                              sx={{ 
                                position: 'relative',
                                height: 120,
                                width: 120,
                                mx: 'auto',
                                mb: 3,
                              }}
                            >
                              <Box
                                component={motion.div}
                                animate={{ 
                                  border: [
                                    `2px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
                                    `2px solid ${alpha(theme.palette.secondary.main, 0.8)}`,
                                    `2px solid ${alpha(theme.palette.secondary.main, 0.3)}`
                                  ]
                                }}
                                transition={{ 
                                  duration: 2,
                                  repeat: Infinity,
                                  repeatType: 'loop'
                                }}
                                sx={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  borderRadius: '50%',
                                }}
                              />
                              
                              <Box
                                component={motion.div}
                                animate={{ 
                                  rotate: 360
                                }}
                                transition={{ 
                                  duration: 8,
                                  repeat: Infinity,
                                  ease: "linear"
                                }}
                                sx={{
                                  position: 'absolute',
                                  top: -5,
                                  left: -5,
                                  right: -5,
                                  bottom: -5,
                                  borderRadius: '50%',
                                  border: `1px dashed ${alpha(theme.palette.secondary.main, 0.4)}`,
                                }}
                              />
                              
                              <Box
                                sx={{
                                  position: 'absolute',
                                  top: 10,
                                  left: 10,
                                  right: 10,
                                  bottom: 10,
                                  borderRadius: '50%',
                                  background: alpha(theme.palette.secondary.main, 0.1),
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: 40,
                                  color: theme.palette.secondary.main,
                                }}
                              >
                                😊
                              </Box>
                              
                              {/* Tracking Points */}
                              {[
                                { top: '30%', left: '30%' },
                                { top: '30%', left: '70%' },
                                { top: '50%', left: '50%' },
                                { top: '70%', left: '40%' },
                                { top: '70%', left: '60%' },
                              ].map((pos, idx) => (
                                <Box
                                  key={idx}
                                  component={motion.div}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.5 + idx * 0.1 }}
                                  sx={{
                                    position: 'absolute',
                                    top: pos.top,
                                    left: pos.left,
                                    width: 4,
                                    height: 4,
                                    borderRadius: '50%',
                                    background: theme.palette.secondary.main,
                                    boxShadow: `0 0 5px ${theme.palette.secondary.main}`,
                                  }}
                                />
                              ))}
                            </Box>
                            
                            {/* Expression Analysis */}
                            <Box
                              component={motion.div}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.8 }}
                              sx={{ 
                                display: 'flex', 
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                gap: 1,
                                mb: 2,
                              }}
                            >
                              {[
                                { label: 'Smile', value: '95%', color: theme.palette.success.main },
                                { label: 'Engagement', value: '90%', color: theme.palette.secondary.main },
                                { label: 'Eye Contact', value: '85%', color: theme.palette.info.main },
                                { label: 'Confidence', value: '88%', color: theme.palette.primary.main },
                              ].map((metric, idx) => (
                                <Chip 
                                  key={idx}
                                  label={`${metric.label}: ${metric.value}`}
                                  size="small" 
                                  sx={{ 
                                    background: alpha(metric.color, 0.1),
                                    color: metric.color,
                                    fontWeight: 600,
                                    fontSize: '0.7rem'
                                  }} 
                                />
                              ))}
                            </Box>
                          </Box>
                        </Box>
                      )}
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
