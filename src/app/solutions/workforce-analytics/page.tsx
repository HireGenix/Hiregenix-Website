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
import { HeroSection, seoData } from './components';

export default function WorkforceAnalyticsPage() {
  const theme = useTheme();

  // Using imported seoData from components

  return (
    <Layout>
      <SEOMetadata seoData={seoData} />
      
      {/* Hero Section */}
      <HeroSection />

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
                          overflow: 'hidden',
                          position: 'relative',
                          background: `linear-gradient(135deg, ${alpha(feature.color, 0.05)} 0%, ${alpha(feature.color, 0.15)} 100%)`,
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                          }
                        }}
                      >
                        {/* Feature Icon with Animation */}
                        <Box
                          component={motion.div}
                          animate={{ 
                            scale: [1, 1.05, 1],
                            boxShadow: [
                              '0 0 0 rgba(0, 0, 0, 0)',
                              `0 0 20px ${alpha(feature.color, 0.4)}`,
                              '0 0 0 rgba(0, 0, 0, 0)'
                            ]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            repeatType: 'loop'
                          }}
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
                        
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {feature.description}
                        </Typography>
                        
                        {/* Feature-specific interactive elements */}
                        {index === 0 && (
                          // Attrition Prediction
                          <Box sx={{ mt: 'auto' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                              <Typography variant="caption" fontWeight={600}>
                                Attrition Risk
                              </Typography>
                              <Typography variant="caption" fontWeight={600} color={feature.color}>
                                68%
                              </Typography>
                            </Box>
                            <Box sx={{ width: '100%', height: 6, background: alpha(feature.color, 0.2), borderRadius: 3, mb: 2 }}>
                              <Box
                                component={motion.div}
                                initial={{ width: 0 }}
                                animate={{ width: '68%' }}
                                transition={{ duration: 1, delay: 0.2 }}
                                sx={{
                                  height: '100%',
                                  background: feature.color,
                                  borderRadius: 3,
                                }}
                              />
                            </Box>
                            <Box
                              component={motion.div}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 }}
                              sx={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                gap: 1,
                              }}
                            >
                              <Chip 
                                label="High Risk" 
                                size="small" 
                                sx={{ 
                                  background: alpha(theme.palette.error.main, 0.1),
                                  color: theme.palette.error.main,
                                  fontWeight: 600,
                                  fontSize: '0.7rem'
                                }} 
                              />
                              <Chip 
                                label="Action Required" 
                                size="small" 
                                sx={{ 
                                  background: alpha(theme.palette.warning.main, 0.1),
                                  color: theme.palette.warning.main,
                                  fontWeight: 600,
                                  fontSize: '0.7rem'
                                }} 
                              />
                            </Box>
                          </Box>
                        )}
                        
                        {index === 1 && (
                          // Performance Prediction
                          <Box sx={{ mt: 'auto' }}>
                            <Box
                              component={motion.div}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                              sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}
                            >
                              {['Q1', 'Q2', 'Q3', 'Q4'].map((quarter, idx) => (
                                <Box key={idx} sx={{ textAlign: 'center' }}>
                                  <Typography variant="caption" fontWeight={600}>
                                    {quarter}
                                  </Typography>
                                  <Box
                                    component={motion.div}
                                    initial={{ height: 0 }}
                                    animate={{ height: [0, 20 + idx * 10, 20 + idx * 10] }}
                                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                                    sx={{
                                      width: 10,
                                      background: feature.color,
                                      borderRadius: 3,
                                      mx: 'auto',
                                      mt: 0.5,
                                    }}
                                  />
                                </Box>
                              ))}
                            </Box>
                            <Box
                              component={motion.div}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.7 }}
                              sx={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                mt: 2,
                              }}
                            >
                              <Chip 
                                label="Projected Growth: 32%" 
                                size="small" 
                                sx={{ 
                                  background: alpha(feature.color, 0.1),
                                  color: feature.color,
                                  fontWeight: 600,
                                  fontSize: '0.7rem'
                                }} 
                              />
                            </Box>
                          </Box>
                        )}
                        
                        {index === 2 && (
                          // Team Composition
                          <Box sx={{ mt: 'auto' }}>
                            <Box
                              component={motion.div}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                              sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 1 }}
                            >
                              {[
                                { size: 40, color: theme.palette.primary.main, delay: 0.3 },
                                { size: 35, color: theme.palette.secondary.main, delay: 0.4 },
                                { size: 45, color: theme.palette.success.main, delay: 0.5 },
                                { size: 30, color: theme.palette.warning.main, delay: 0.6 },
                                { size: 38, color: theme.palette.info.main, delay: 0.7 },
                              ].map((circle, idx) => (
                                <Box
                                  key={idx}
                                  component={motion.div}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ duration: 0.4, delay: circle.delay }}
                                  sx={{
                                    width: circle.size,
                                    height: circle.size,
                                    borderRadius: '50%',
                                    background: alpha(circle.color, 0.2),
                                    border: `2px solid ${alpha(circle.color, 0.5)}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.7rem',
                                    fontWeight: 600,
                                    color: circle.color,
                                  }}
                                >
                                  {idx + 1}
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
                                mt: 1,
                              }}
                            >
                              <Chip 
                                label="Optimal Team Balance" 
                                size="small" 
                                sx={{ 
                                  background: alpha(feature.color, 0.1),
                                  color: feature.color,
                                  fontWeight: 600,
                                  fontSize: '0.7rem'
                                }} 
                              />
                            </Box>
                          </Box>
                        )}
                        
                        {index === 3 && (
                          // Hiring Forecasting
                          <Box sx={{ mt: 'auto' }}>
                            <Box
                              component={motion.div}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                              sx={{ mb: 1 }}
                            >
                              {[
                                { month: 'Jan', value: 2 },
                                { month: 'Feb', value: 3 },
                                { month: 'Mar', value: 5 },
                                { month: 'Apr', value: 4 },
                                { month: 'May', value: 7 },
                                { month: 'Jun', value: 6 },
                              ].map((item, idx) => (
                                <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                  <Typography variant="caption" sx={{ width: 30, fontWeight: 600 }}>
                                    {item.month}
                                  </Typography>
                                  <Box sx={{ flex: 1, ml: 1 }}>
                                    <Box
                                      component={motion.div}
                                      initial={{ width: 0 }}
                                      animate={{ width: `${item.value * 15}%` }}
                                      transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                                      sx={{
                                        height: 6,
                                        background: feature.color,
                                        borderRadius: 3,
                                      }}
                                    />
                                  </Box>
                                  <Typography variant="caption" sx={{ ml: 1, fontWeight: 600, color: feature.color }}>
                                    {item.value}
                                  </Typography>
                                </Box>
                              ))}
                            </Box>
                            <Box
                              component={motion.div}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.9 }}
                              sx={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                              }}
                            >
                              <Chip 
                                label="Total: 27 New Hires" 
                                size="small" 
                                sx={{ 
                                  background: alpha(feature.color, 0.1),
                                  color: feature.color,
                                  fontWeight: 600,
                                  fontSize: '0.7rem'
                                }} 
                              />
                            </Box>
                          </Box>
                        )}
                        
                        {index === 4 && (
                          // Salary Optimization
                          <Box sx={{ mt: 'auto' }}>
                            <Box
                              component={motion.div}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                              sx={{ mb: 1 }}
                            >
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                <Typography variant="caption" fontWeight={600}>
                                  Market Rate
                                </Typography>
                                <Typography variant="caption" fontWeight={600} color={feature.color}>
                                  $85,000
                                </Typography>
                              </Box>
                              <Box sx={{ width: '100%', height: 6, background: alpha(feature.color, 0.2), borderRadius: 3, mb: 1.5 }}>
                                <Box
                                  component={motion.div}
                                  initial={{ width: 0 }}
                                  animate={{ width: '75%' }}
                                  transition={{ duration: 1, delay: 0.3 }}
                                  sx={{
                                    height: '100%',
                                    background: feature.color,
                                    borderRadius: 3,
                                  }}
                                />
                              </Box>
                              
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                <Typography variant="caption" fontWeight={600}>
                                  Current Avg
                                </Typography>
                                <Typography variant="caption" fontWeight={600} color={theme.palette.warning.main}>
                                  $78,500
                                </Typography>
                              </Box>
                              <Box sx={{ width: '100%', height: 6, background: alpha(theme.palette.warning.main, 0.2), borderRadius: 3 }}>
                                <Box
                                  component={motion.div}
                                  initial={{ width: 0 }}
                                  animate={{ width: '65%' }}
                                  transition={{ duration: 1, delay: 0.4 }}
                                  sx={{
                                    height: '100%',
                                    background: theme.palette.warning.main,
                                    borderRadius: 3,
                                  }}
                                />
                              </Box>
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
                                mt: 1,
                              }}
                            >
                              <Chip 
                                label="Adjustment Needed: +8.3%" 
                                size="small" 
                                sx={{ 
                                  background: alpha(feature.color, 0.1),
                                  color: feature.color,
                                  fontWeight: 600,
                                  fontSize: '0.7rem'
                                }} 
                              />
                            </Box>
                          </Box>
                        )}
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
