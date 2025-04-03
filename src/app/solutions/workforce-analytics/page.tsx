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
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from '@mui/material';
import {
  Insights as InsightsIcon,
  TrendingUp as TrendingUpIcon,
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowForwardIcon,
  BarChart as BarChartIcon,
  Timeline as TimelineIcon,
  Groups as GroupsIcon,
  CalendarMonth as CalendarMonthIcon,
  AttachMoney as AttachMoneyIcon,
} from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SEOMetadata } from '@/components/SEO';
import { Layout } from '@/components/Layout';
import { SolutionsCTA } from '@/components/Solutions';

export default function WorkforceAnalyticsPage() {
  const theme = useTheme();

  const seoData = {
    title: 'Workforce Analytics Solution | HireGenix',
    description: 'Gain powerful insights into your workforce with our predictive analytics platform, helping you make data-driven decisions about hiring and team composition.',
    keywords: 'workforce analytics, predictive analytics, talent analytics, HR analytics, employee data, workforce planning, attrition prediction',
  };

  return (
    <Layout>
      <SEOMetadata seoData={seoData} />
      
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          py: { xs: 10, md: 16 },
          background: `linear-gradient(135deg, ${theme.palette.success.main} 0%, ${theme.palette.success.dark} 100%)`,
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
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={6} alignItems="center">
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
                  label="WORKFORCE ANALYTICS" 
                  color="primary" 
                  size="medium"
                  icon={<InsightsIcon />}
                  sx={{ 
                    mb: 3, 
                    fontWeight: 600,
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
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
                  Predictive Workforce Analytics
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Typography
                  variant="h5"
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
                  Gain powerful insights into your workforce with our predictive analytics platform, helping you make data-driven decisions about hiring and team composition.
                </Typography>
              </motion.div>
              
              <Box 
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                sx={{ 
                  display: 'flex', 
                  flexWrap: { xs: 'wrap', sm: 'nowrap' },
                  gap: 2,
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
                  href="/contact"
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
                  Learn More
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
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: 500,
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
                    height: 400,
                    borderRadius: '30px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                  }}
                >
                  <Image
                    src="/solutions/talent-analytics.jpg"
                    alt="Workforce Analytics"
                    width={500}
                    height={350}
                    style={{ objectFit: 'cover', borderRadius: '20px' }}
                  />
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
                    background: alpha(theme.palette.success.light, 0.2),
                    border: `1px solid ${alpha(theme.palette.success.light, 0.3)}`,
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
                    border: `2px dashed ${alpha(theme.palette.success.light, 0.5)}`,
                    zIndex: 1,
                  }}
                />
                
                {/* Floating feature cards */}
                {[
                  { 
                    icon: <BarChartIcon />, 
                    text: 'Attrition Prediction', 
                    position: { top: '15%', left: '0%' }
                  },
                  { 
                    icon: <TimelineIcon />, 
                    text: 'Performance Prediction', 
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
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
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

      {/* Features Section */}
      <Box 
        sx={{ 
          py: { xs: 8, md: 12 },
          background: theme.palette.background.default,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                  }}
                >
                  Make Data-Driven Workforce Decisions
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: 'text.secondary',
                    lineHeight: 1.8,
                  }}
                >
                  Our predictive workforce analytics platform uses advanced AI algorithms to analyze your employee data and provide actionable insights that help you optimize your workforce, reduce turnover, and improve performance.
                </Typography>
                
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" fontWeight={600} sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                    <Box 
                      component="span" 
                      sx={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        width: 30,
                        height: 30,
                        borderRadius: '50%',
                        background: alpha(theme.palette.success.main, 0.1),
                        color: theme.palette.success.main,
                        mr: 1.5,
                      }}
                    >
                      <CheckCircleIcon fontSize="small" />
                    </Box>
                    Key Features
                  </Typography>
                  
                  <List disablePadding>
                    {[
                      'Attrition Prediction',
                      'Performance Prediction',
                      'Team Composition Optimization',
                      'Hiring Needs Forecasting',
                      'Salary Optimization',
                    ].map((feature, idx) => (
                      <ListItem 
                        key={idx} 
                        disablePadding 
                        sx={{ 
                          mb: 1.5,
                          display: 'flex',
                          alignItems: 'flex-start',
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: 36, color: theme.palette.success.main }}>
                          <CheckCircleIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={feature} 
                          primaryTypographyProps={{ 
                            variant: 'body1',
                            fontWeight: 500,
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
                
                <Button
                  component={Link}
                  href="/demo"
                  variant="contained"
                  color="success"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    py: 1.5,
                    px: 4,
                    borderRadius: 50,
                    fontWeight: 600,
                  }}
                >
                  See It In Action
                </Button>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Grid container spacing={3}>
                {[
                  {
                    icon: <BarChartIcon fontSize="large" />,
                    title: 'Attrition Prediction',
                    description: 'Identify employees at risk of leaving before they do, allowing you to take proactive retention measures.',
                    color: theme.palette.success.main,
                  },
                  {
                    icon: <TimelineIcon fontSize="large" />,
                    title: 'Performance Prediction',
                    description: 'Forecast employee performance based on historical data and identify high-potential individuals.',
                    color: theme.palette.primary.main,
                  },
                  {
                    icon: <GroupsIcon fontSize="large" />,
                    title: 'Team Composition',
                    description: 'Optimize team composition based on skills, experience, and personality traits to maximize performance.',
                    color: theme.palette.secondary.main,
                  },
                  {
                    icon: <CalendarMonthIcon fontSize="large" />,
                    title: 'Hiring Forecasting',
                    description: 'Predict future hiring needs based on growth projections, attrition rates, and business goals.',
                    color: theme.palette.warning.main,
                  },
                  {
                    icon: <AttachMoneyIcon fontSize="large" />,
                    title: 'Salary Optimization',
                    description: 'Ensure competitive compensation while optimizing your salary budget based on market data and internal equity.',
                    color: theme.palette.error.main,
                  },
                ].map((feature, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          height: '100%',
                          borderRadius: 4,
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                          }
                        }}
                      >
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 2,
                            background: alpha(feature.color, 0.1),
                            color: feature.color,
                          }}
                        >
                          {feature.icon}
                        </Box>
                        <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                          {feature.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {feature.description}
                        </Typography>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box 
        sx={{ 
          py: { xs: 8, md: 12 }, 
          background: `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.8)} 0%, ${alpha(theme.palette.success.main, 0.05)} 100%)`,
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
                  color: theme.palette.success.main
                }}
              >
                BUSINESS IMPACT
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
                Benefits of Workforce Analytics
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
                See how our predictive analytics platform can transform your HR operations
              </Typography>
            </motion.div>
          </Box>
          
          <Grid container spacing={4}>
            {[
              {
                title: 'Reduce Employee Turnover',
                description: 'Identify at-risk employees and take proactive measures to retain top talent, reducing turnover by up to 35%.',
                icon: <TrendingUpIcon fontSize="large" />,
                color: theme.palette.success.main,
              },
              {
                title: 'Optimize Team Performance',
                description: 'Create high-performing teams by optimizing team composition based on skills, experience, and personality traits.',
                icon: <GroupsIcon fontSize="large" />,
                color: theme.palette.primary.main,
              },
              {
                title: 'Predict Future Hiring Needs',
                description: 'Forecast your hiring needs with 85% accuracy, allowing you to plan your recruitment strategy in advance.',
                icon: <CalendarMonthIcon fontSize="large" />,
                color: theme.palette.secondary.main,
              },
              {
                title: 'Identify Skill Gaps',
                description: 'Identify skill gaps in your organization before they impact business performance and develop targeted training programs.',
                icon: <InsightsIcon fontSize="large" />,
                color: theme.palette.warning.main,
              },
              {
                title: 'Data-Driven Compensation',
                description: 'Make data-driven compensation decisions that ensure competitive salaries while optimizing your budget.',
                icon: <AttachMoneyIcon fontSize="large" />,
                color: theme.palette.error.main,
              },
              {
                title: 'Strategic Workforce Planning',
                description: 'Develop long-term workforce plans based on predictive analytics rather than guesswork.',
                icon: <BarChartIcon fontSize="large" />,
                color: theme.palette.info.main,
              },
            ].map((benefit, index) => (
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
                      borderRadius: 4,
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        background: alpha(benefit.color, 0.1),
                        color: benefit.color,
                      }}
                    >
                      {benefit.icon}
                    </Box>
                    <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {benefit.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      
      {/* CTA Section */}
      <SolutionsCTA />
    </Layout>
  );
}
