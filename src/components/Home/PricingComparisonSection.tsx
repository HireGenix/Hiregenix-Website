'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  alpha,
  Paper,
  Chip,
  Button,
  Divider,
  Switch,
  FormControlLabel
} from '@mui/material';
import {
  Check as CheckIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const PricingComparisonSection: React.FC = () => {
  const theme = useTheme();
  const [annual, setAnnual] = React.useState(true);

  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  // Pricing plans data
  const plans = [
    {
      name: 'Basic',
      description: 'For small teams getting started with recruitment',
      monthlyPrice: 99,
      annualPrice: 79,
      tokens: '5 Million',
      features: [
        { name: '5 Million AI tokens monthly', included: true },
        { name: 'Up to 5 active job postings', included: true },
        { name: '100 candidate profiles', included: true },
        { name: 'Basic AI matching', included: true },
        { name: 'Email support', included: true },
        { name: 'Standard analytics', included: true },
        { name: 'Custom assessments', included: false },
        { name: 'API access', included: false },
        { name: 'Dedicated account manager', included: false }
      ],
      popular: false,
      color: theme.palette.grey[700]
    },
    {
      name: 'Standard',
      description: 'For growing teams with advanced recruitment needs',
      monthlyPrice: 499,
      annualPrice: 399,
      tokens: '30 Million',
      features: [
        { name: '30 Million AI tokens monthly', included: true },
        { name: 'Up to 20 active job postings', included: true },
        { name: 'Unlimited candidate profiles', included: true },
        { name: 'Advanced AI matching', included: true },
        { name: 'Priority email & chat support', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Custom assessments', included: true },
        { name: 'API access', included: true },
        { name: 'Dedicated account manager', included: false }
      ],
      popular: true,
      color: theme.palette.primary.main
    },
    {
      name: 'Premium',
      description: 'For large organizations with complex recruitment processes',
      monthlyPrice: 999,
      annualPrice: 799,
      tokens: '75 Million',
      features: [
        { name: '75 Million AI tokens monthly', included: true },
        { name: 'Unlimited job postings', included: true },
        { name: 'Unlimited candidate profiles', included: true },
        { name: 'Premium AI matching & insights', included: true },
        { name: '24/7 dedicated support', included: true },
        { name: 'Enterprise analytics & reporting', included: true },
        { name: 'Custom integrations', included: true },
        { name: 'API access', included: true },
        { name: 'Dedicated account manager', included: true }
      ],
      popular: false,
      color: theme.palette.secondary.main
    }
  ];

  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          left: '10%',
          width: '40%',
          height: '40%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.light, 0.1)} 0%, rgba(255,255,255,0) 70%)`,
          filter: 'blur(60px)',
          zIndex: 1
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip 
            label="PRICING" 
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
              background: `linear-gradient(90deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Simple, Transparent Pricing
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
              mb: 4
            }}
          >
            Choose the plan that works best for your recruitment needs
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={annual}
                  onChange={() => setAnnual(!annual)}
                  color="primary"
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: theme.palette.primary.main,
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.5),
                    },
                  }}
                />
              }
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: !annual ? 600 : 400,
                      color: !annual ? theme.palette.text.primary : theme.palette.text.secondary,
                      mr: 1
                    }}
                  >
                    Monthly
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: annual ? 600 : 400,
                      color: annual ? theme.palette.text.primary : theme.palette.text.secondary,
                      ml: 1
                    }}
                  >
                    Annual
                  </Typography>
                  <Chip
                    label="Save 20%"
                    size="small"
                    color="primary"
                    sx={{
                      ml: 1,
                      fontWeight: 600,
                      fontSize: '0.7rem',
                      height: 20,
                      display: annual ? 'flex' : 'none'
                    }}
                  />
                </Box>
              }
              labelPlacement="end"
            />
          </Box>
        </Box>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4} justifyContent="center">
            {plans.map((plan, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div variants={itemVariant}>
                  <Paper
                    elevation={0}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '24px',
                      background: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: plan.popular ? `2px solid ${plan.color}` : '1px solid rgba(0, 0, 0, 0.05)',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                      position: 'relative',
                      zIndex: plan.popular ? 2 : 1,
                      boxShadow: plan.popular 
                        ? `0 20px 50px ${alpha(plan.color, 0.2)}`
                        : '0 10px 30px rgba(0, 0, 0, 0.05)',
                      '&:hover': {
                        boxShadow: plan.popular 
                          ? `0 30px 60px ${alpha(plan.color, 0.3)}`
                          : '0 20px 40px rgba(0, 0, 0, 0.1)',
                        transform: plan.popular ? 'scale(1.07)' : 'scale(1.02)'
                      }
                    }}
                  >
                    {plan.popular && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 20,
                          right: -30,
                          transform: 'rotate(45deg)',
                          background: plan.color,
                          color: 'white',
                          py: 0.5,
                          px: 4,
                          fontWeight: 600,
                          fontSize: '0.75rem',
                          zIndex: 3
                        }}
                      >
                        MOST POPULAR
                      </Box>
                    )}

                    <Box
                      sx={{
                        p: 4,
                        textAlign: 'center',
                        borderBottom: '1px solid',
                        borderColor: 'divider'
                      }}
                    >
                      <Typography
                        variant="h4"
                        component="h3"
                        sx={{
                          fontWeight: 700,
                          mb: 1,
                          color: plan.color
                        }}
                      >
                        {plan.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mb: 3
                        }}
                      >
                        {plan.description}
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'baseline',
                          justifyContent: 'center',
                          mb: 1
                        }}
                      >
                        <Typography
                          variant="h3"
                          component="span"
                          sx={{
                            fontWeight: 800,
                            color: theme.palette.text.primary
                          }}
                        >
                          ${annual ? plan.annualPrice : plan.monthlyPrice}
                        </Typography>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                          sx={{
                            ml: 1
                          }}
                        >
                          /mo
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mb: 3,
                          fontStyle: 'italic'
                        }}
                      >
                        {annual ? 'Billed annually' : 'Billed monthly'}
                      </Typography>
                      <Button
                        variant={plan.popular ? 'contained' : 'outlined'}
                        color={plan.popular ? 'primary' : 'inherit'}
                        size="large"
                        fullWidth
                        component={Link}
                        href="/pricing"
                        sx={{
                          py: 1.5,
                          borderRadius: '50px',
                          fontWeight: 600,
                          ...(plan.popular && {
                            background: `linear-gradient(45deg, ${plan.color} 0%, ${alpha(plan.color, 0.8)} 100%)`,
                            boxShadow: `0 10px 20px ${alpha(plan.color, 0.3)}`,
                          }),
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            ...(plan.popular && {
                              boxShadow: `0 15px 30px ${alpha(plan.color, 0.4)}`,
                            })
                          }
                        }}
                      >
                        {plan.popular ? 'Get Started' : 'Choose Plan'}
                      </Button>
                    </Box>

                    <Box sx={{ p: 4, flexGrow: 1 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          mb: 3,
                          color: theme.palette.text.primary
                        }}
                      >
                        FEATURES INCLUDED:
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {plan.features.map((feature, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              display: 'flex',
                              alignItems: 'center'
                            }}
                          >
                            {feature.included ? (
                              <CheckIcon
                                sx={{
                                  color: theme.palette.success.main,
                                  fontSize: '1.2rem',
                                  mr: 1.5
                                }}
                              />
                            ) : (
                              <CloseIcon
                                sx={{
                                  color: theme.palette.text.disabled,
                                  fontSize: '1.2rem',
                                  mr: 1.5
                                }}
                              />
                            )}
                            <Typography
                              variant="body2"
                              sx={{
                                color: feature.included ? theme.palette.text.primary : theme.palette.text.disabled
                              }}
                            >
                              {feature.name}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <Box
          sx={{
            textAlign: 'center',
            mt: 8
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                fontWeight: 500,
                mb: 2
              }}
            >
              Need a custom plan for your enterprise?
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: 700,
                mx: 'auto',
                mb: 3
              }}
            >
              We offer tailored solutions for large organizations with specific requirements.
              Our team will work with you to create a custom plan that fits your needs.
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              component={Link}
              href="/contact"
              sx={{
                py: 1.5,
                px: 4,
                borderRadius: '50px',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.05)'
                }
              }}
            >
              Contact Sales
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};
