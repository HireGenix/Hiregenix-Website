'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  alpha,
  Switch,
  Paper,
  Chip,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
} from '@mui/icons-material';
import { SEOMetadata } from '@/components/SEO';
import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Animation variants
const fadeInUpVariant = {
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

// Pricing plans
const pricingPlans = [
  {
    title: 'Basic',
    price: {
      monthly: 99,
      annually: 79,
    },
    description: 'For small teams getting started with recruitment',
    features: [
      { name: '5 Million AI tokens monthly', included: true },
      { name: 'Up to 5 active job postings', included: true },
      { name: '100 candidate profiles', included: true },
      { name: 'Basic AI matching', included: true },
      { name: 'Email support', included: true },
      { name: 'Standard analytics', included: true },
      { name: 'Custom assessments', included: false },
      { name: 'API access', included: false },
      { name: 'Dedicated Account Manager', included: false },
    ],
    cta: 'Get Started',
    popular: false,
    color: 'primary',
  },
  {
    title: 'Standard',
    price: {
      monthly: 499,
      annually: 399,
    },
    description: 'For growing teams with advanced recruitment needs',
    features: [
      { name: '30 Million AI tokens monthly', included: true },
      { name: 'Up to 20 active job postings', included: true },
      { name: 'Unlimited candidate profiles', included: true },
      { name: 'Advanced AI matching', included: true },
      { name: 'Priority email & chat support', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Custom assessments', included: true },
      { name: 'API access', included: true },
      { name: 'Dedicated Account Manager', included: false },
    ],
    cta: 'Get Started',
    popular: true,
    color: 'secondary',
  },
  {
    title: 'Premium',
    price: {
      monthly: 999,
      annually: 799,
    },
    description: 'For large organizations with complex recruitment processes',
    features: [
      { name: '75 Million AI tokens monthly', included: true },
      { name: 'Unlimited job postings', included: true },
      { name: 'Unlimited candidate profiles', included: true },
      { name: 'Premium AI matching & insights', included: true },
      { name: '24/7 dedicated support', included: true },
      { name: 'Enterprise analytics & reporting', included: true },
      { name: 'Custom integrations', included: true },
      { name: 'API access', included: true },
      { name: 'Dedicated Account Manager', included: true },
    ],
    cta: 'Get Started',
    popular: false,
    color: 'info',
  },
  {
    title: 'Enterprise',
    price: {
      monthly: 1999,
      annually: 1599,
    },
    description: 'For enterprise-level organizations with high-volume recruitment',
    features: [
      { name: '200 Million AI tokens monthly', included: true },
      { name: 'Unlimited everything', included: true },
      { name: 'Premium AI matching & insights', included: true },
      { name: '24/7 dedicated support', included: true },
      { name: 'Enterprise analytics & reporting', included: true },
      { name: 'Custom integrations', included: true },
      { name: 'Dedicated Account Manager', included: true },
      { name: 'White labeling', included: true },
      { name: 'SSO & advanced security', included: true },
    ],
    cta: 'Contact Sales',
    popular: false,
    color: 'info',
  },
];

// FAQ items
const faqItems = [
  {
    question: 'Can I switch plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you will be prorated for the remainder of your billing cycle. When downgrading, the new rate will apply at the start of your next billing cycle.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial for our Starter and Professional plans. No credit card is required to start your trial. You can upgrade to a paid plan at any time during or after your trial.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover) as well as PayPal. For Enterprise plans, we also offer invoicing with net-30 payment terms.',
  },
  {
    question: 'Can I get a demo before purchasing?',
    answer: 'Absolutely! We offer personalized demos for all our plans. You can schedule a demo with our team by visiting our Contact page and selecting "Product Demo" as your inquiry type.',
  },
];

// Glass Paper component
interface GlassPaperProps {
  children: React.ReactNode;
  sx?: any;
  [key: string]: any;
}

const GlassPaper: React.FC<GlassPaperProps> = ({ children, sx = {}, ...props }) => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(16px) saturate(180%)',
        borderRadius: 4,
        border: '1px solid rgba(255, 255, 255, 0.8)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
        },
        ...sx
      }}
      {...props}
    >
      {children}
    </Paper>
  );
};

export default function PricingPage() {
  const theme = useTheme();
  const [annualBilling, setAnnualBilling] = useState(true);

  const handleBillingChange = () => {
    setAnnualBilling(!annualBilling);
  };

  const seoData = {
    title: 'HireGenix Pricing - Plans & Packages for AI Recruitment Platform',
    description: 'Explore HireGenix pricing plans for our AI-powered recruitment platform. Find the perfect package for your hiring needs, from startups to enterprise organizations.',
    keywords: 'HireGenix pricing, recruitment platform cost, AI recruitment pricing, hiring software plans',
  };

  return (
    <Layout>
      <SEOMetadata seoData={seoData} />
      
      <Box component="main">
        {/* Hero Section */}
        <Box
          sx={{
            position: 'relative',
            minHeight: { xs: 'auto', md: '100vh' },
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            background: `linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%)`,
            color: 'white',
            pt: { xs: 12, md: 0 },
            pb: { xs: 10, md: 0 }
          }}
        >
          {/* Geometric pattern overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.05,
              backgroundImage: 'url(/hero-pattern.svg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 1
            }}
          />

          {/* Animated gradient orbs */}
          <Box
            component={motion.div}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1.5 }}
            sx={{
              position: 'absolute',
              top: '10%',
              right: '5%',
              width: { xs: 200, md: 400 },
              height: { xs: 200, md: 400 },
              borderRadius: '50%',
              background: `radial-gradient(circle, ${theme.palette.primary.main}80 0%, rgba(0,0,0,0) 70%)`,
              filter: 'blur(80px)',
              zIndex: 1,
              animation: 'pulse 8s ease-in-out infinite',
              '@keyframes pulse': {
                '0%, 100%': { transform: 'scale(1)', opacity: 0.2 },
                '50%': { transform: 'scale(1.1)', opacity: 0.3 }
              }
            }}
          />

          <Box
            component={motion.div}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            sx={{
              position: 'absolute',
              bottom: '10%',
              left: '5%',
              width: { xs: 150, md: 300 },
              height: { xs: 150, md: 300 },
              borderRadius: '50%',
              background: `radial-gradient(circle, ${theme.palette.secondary.main}80 0%, rgba(0,0,0,0) 70%)`,
              filter: 'blur(80px)',
              zIndex: 1,
              animation: 'pulse2 10s ease-in-out infinite',
              '@keyframes pulse2': {
                '0%, 100%': { transform: 'scale(1)', opacity: 0.15 },
                '50%': { transform: 'scale(1.15)', opacity: 0.25 }
              }
            }}
          />
          
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
            <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Chip 
                  label="PRICING" 
                  sx={{ 
                    mb: 3, 
                    py: 2,
                    px: 2,
                    borderRadius: '50px',
                    background: `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                  }} 
                />
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                    fontWeight: 800,
                    mb: 2,
                    background: `linear-gradient(90deg, #FFFFFF 0%, ${theme.palette.primary.light} 100%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em'
                  }}
                >
                  Simple, Transparent Pricing
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Typography
                  variant="h2"
                  component="p"
                  sx={{
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    fontWeight: 400,
                    mb: 4,
                    color: 'rgba(255, 255, 255, 0.8)',
                    maxWidth: 600,
                    mx: 'auto',
                    lineHeight: 1.6
                  }}
                >
                  Choose the plan that fits your recruitment needs. All plans include our core AI-powered features.
                </Typography>
                
                <Box 
                  sx={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '50px',
                    p: 1,
                    px: 2,
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      mr: 1,
                      fontWeight: !annualBilling ? 700 : 400,
                      opacity: !annualBilling ? 1 : 0.8,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Monthly
                  </Typography>
                  <Switch
                    checked={annualBilling}
                    onChange={handleBillingChange}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: 'white',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: 'white',
                        opacity: 0.5,
                      },
                      '& .MuiSwitch-thumb': {
                        backgroundColor: 'white',
                      },
                      '& .MuiSwitch-track': {
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      },
                    }}
                  />
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography
                      variant="body1"
                      sx={{
                        ml: 1,
                        fontWeight: annualBilling ? 700 : 400,
                        opacity: annualBilling ? 1 : 0.8,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Annual
                    </Typography>
                    <Chip 
                      label="Save 20%" 
                      size="small" 
                      sx={{ 
                        ml: 1, 
                        background: 'rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '0.7rem',
                      }} 
                    />
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Container>
        </Box>

        {/* Pricing Cards */}
        <Container 
          maxWidth="lg" 
          sx={{ 
            py: { xs: 8, md: 12 }, 
            mt: -8,
            position: 'relative',
            zIndex: 10,
          }}
        >
          <Grid container spacing={4} alignItems="center">
            {pricingPlans.map((plan, index) => (
              <Grid 
                item 
                xs={12} 
                md={4} 
                key={index}
                component={motion.div}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: plan.popular ? `0 8px 32px ${alpha(theme.palette.secondary.main, 0.2)}` : '0 4px 20px rgba(0,0,0,0.08)',
                    border: plan.popular ? `2px solid ${theme.palette.secondary.main}` : '1px solid rgba(255, 255, 255, 0.8)',
                    transform: plan.popular ? 'scale(1.05)' : 'none',
                    zIndex: plan.popular ? 2 : 1,
                    position: 'relative',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: plan.popular ? 'scale(1.08)' : 'scale(1.03)',
                      boxShadow: plan.popular ? `0 12px 40px ${alpha(theme.palette.secondary.main, 0.25)}` : '0 10px 30px rgba(0,0,0,0.12)',
                    },
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(16px) saturate(180%)',
                  }}
                >
                  {plan.popular && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 20,
                        right: -30,
                        transform: 'rotate(45deg)',
                        backgroundColor: theme.palette.secondary.main,
                        color: 'white',
                        py: 0.5,
                        px: 4,
                        width: 150,
                        textAlign: 'center',
                        zIndex: 3,
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                      }}
                    >
                      <Typography variant="body2" fontWeight={600}>
                        Most Popular
                      </Typography>
                    </Box>
                  )}
                  <Box
                    sx={{
                      p: 3,
                      backgroundColor: alpha(theme.palette[plan.color as 'primary' | 'secondary' | 'info'].main, 0.05),
                      borderBottom: `1px solid ${alpha(theme.palette[plan.color as 'primary' | 'secondary' | 'info'].main, 0.1)}`,
                    }}
                  >
                    <Typography variant="h4" component="h2" fontWeight={700} gutterBottom>
                      {plan.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 1 }}>
                      {typeof plan.price[annualBilling ? 'annually' : 'monthly'] === 'number' ? (
                        <>
                          <Typography 
                            variant="h3" 
                            component="span" 
                            fontWeight={700}
                            sx={{
                              background: `linear-gradient(90deg, ${theme.palette[plan.color as 'primary' | 'secondary' | 'info'].main}, ${theme.palette[plan.color as 'primary' | 'secondary' | 'info'].dark})`,
                              backgroundClip: 'text',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                            }}
                          >
                            ${plan.price[annualBilling ? 'annually' : 'monthly']}
                          </Typography>
                          <Typography variant="h6" component="span" color="text.secondary" sx={{ ml: 1 }}>
                            /month
                          </Typography>
                        </>
                      ) : (
                        <Typography 
                          variant="h3" 
                          component="span" 
                          fontWeight={700}
                          sx={{
                            background: `linear-gradient(90deg, ${theme.palette[plan.color as 'primary' | 'secondary' | 'info'].main}, ${theme.palette[plan.color as 'primary' | 'secondary' | 'info'].dark})`,
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          {plan.price[annualBilling ? 'annually' : 'monthly']}
                        </Typography>
                      )}
                    </Box>
                    {annualBilling && typeof plan.price.monthly === 'number' && typeof plan.price.annually === 'number' && (
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        ${plan.price.monthly} billed monthly
                      </Typography>
                    )}
                    <Typography variant="body1" color="text.secondary">
                      {plan.description}
                    </Typography>
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <List disablePadding>
                      {plan.features.map((feature, featureIndex) => (
                        <ListItem key={featureIndex} disablePadding sx={{ mb: 1 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            {feature.included ? (
                              <CheckCircleIcon 
                                sx={{ 
                                  color: theme.palette[plan.color as 'primary' | 'secondary' | 'info'].main,
                                  filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.1))',
                                }} 
                              />
                            ) : (
                              <CancelIcon color="disabled" />
                            )}
                          </ListItemIcon>
                          <ListItemText
                            primary={feature.name}
                            primaryTypographyProps={{
                              variant: 'body2',
                              color: feature.included ? 'text.primary' : 'text.secondary',
                              fontWeight: feature.included ? 500 : 400,
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                  <Box sx={{ p: 3, pt: 0 }}>
                    <Button
                      component={Link}
                      href={plan.title === 'Enterprise' ? '/contact' : '/signup'}
                      variant="contained"
                      color={plan.color as 'primary' | 'secondary' | 'info'}
                      size="large"
                      fullWidth
                      sx={{
                        py: 1.5,
                        borderRadius: '50px',
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                        background: plan.color === 'primary' ? 
                          `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})` :
                          plan.color === 'secondary' ?
                          `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})` :
                          `linear-gradient(90deg, ${theme.palette.info.main}, ${theme.palette.info.dark})`,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: '0 12px 25px rgba(0, 0, 0, 0.15)',
                        }
                      }}
                    >
                      {plan.cta}
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Features Section */}
        <Box 
          sx={{ 
            py: { xs: 8, md: 12 },
            background: `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.8)} 0%, ${theme.palette.background.default} 100%)`,
            position: 'relative',
            overflow: 'hidden',
          }}
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariant}
        >
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Chip 
                label="ALL PLANS INCLUDE" 
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
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '2rem', md: '2.75rem' },
                }}
              >
                Core Platform Features
              </Typography>
              <Typography
                variant="h5"
                component="p"
                color="text.secondary"
                sx={{ 
                  maxWidth: '800px', 
                  mx: 'auto',
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  fontWeight: 400,
                }}
              >
                Every plan comes with these powerful recruitment tools
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {[
                { title: 'AI-Powered Matching', description: 'Our semantic understanding algorithm matches candidates to jobs based on skills, experience, and potential.' },
                { title: 'Video Interviews', description: 'Conduct and analyze video interviews with built-in scheduling and AI-powered insights.' },
                { title: 'Skills Assessment', description: 'Evaluate candidates with customizable assessments for technical and soft skills.' },
                { title: 'ATS Integration', description: 'Seamlessly connect with your existing Applicant Tracking System.' },
                { title: 'Mobile Experience', description: 'Full-featured mobile apps for recruiters and responsive design for candidates.' },
                { title: 'Data Security', description: 'Enterprise-grade security with SOC 2 compliance and GDPR-ready data handling.' },
              ].map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <GlassPaper
                      sx={{
                        p: 4,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <CheckCircleIcon sx={{ color: theme.palette.success.main, mr: 2 }} />
                        <Typography variant="h6" fontWeight={600}>
                          {feature.title}
                        </Typography>
                      </Box>
                      <Typography variant="body1" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </GlassPaper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* FAQ Section */}
        <Box 
          sx={{ 
            py: { xs: 8, md: 12 },
            background: theme.palette.background.default,
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Chip 
                label="FAQ" 
                color="secondary" 
                size="small"
                sx={{ 
                  mb: 2, 
                  fontWeight: 600,
                  background: alpha(theme.palette.secondary.main, 0.1),
                  border: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
                  color: theme.palette.secondary.main,
                }} 
              />
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '2rem', md: '2.75rem' },
                }}
              >
                Frequently Asked Questions
              </Typography>
              <Typography
                variant="h5"
                component="p"
                color="text.secondary"
                sx={{ 
                  maxWidth: '800px', 
                  mx: 'auto',
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  fontWeight: 400,
                }}
              >
                Everything you need to know about our pricing and plans
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {faqItems.map((faq, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <GlassPaper
                      sx={{
                        p: 4,
                        height: '100%',
                      }}
                    >
                      <Typography variant="h5" fontWeight={600} gutterBottom color="primary">
                        {faq.question}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {faq.answer}
                      </Typography>
                    </GlassPaper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* CTA Section */}
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
                variant="h5"
                component="p"
                sx={{
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  fontWeight: 400,
                  mb: 4,
                  opacity: 0.9,
                }}
              >
                Start your 14-day free trial today. No credit card required.
              </Typography>
              <Button
                component={Link}
                href="/signup"
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  py: 1.5,
                  px: 4,
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                }}
              >
                Get Started Free
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
}
