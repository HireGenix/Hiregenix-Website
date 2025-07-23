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
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  Security as SecurityIcon,
  Verified as VerifiedIcon,
  Shield as ShieldIcon,
  Gavel as GavelIcon,
  PrivacyTip as PrivacyTipIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const SecurityComplianceSection: React.FC = () => {
  const theme = useTheme();

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

  // Security features data
  const securityFeatures = [
    {
      title: 'Data Encryption',
      description: 'End-to-end encryption for all data at rest and in transit, ensuring your candidate information remains secure.',
      icon: <ShieldIcon sx={{ fontSize: '2.5rem', color: theme.palette.primary.main }} />,
      details: [
        'AES-256 encryption for all stored data',
        'TLS 1.3 for all data in transit',
        'Encrypted database backups'
      ]
    },
    {
      title: 'Compliance Certifications',
      description: 'HireGenix maintains rigorous compliance with international security and privacy standards.',
      icon: <VerifiedIcon sx={{ fontSize: '2.5rem', color: theme.palette.primary.main }} />,
      details: [
        'SOC 2 Type II certified',
        'ISO 27001 compliant',
        'GDPR and CCPA ready'
      ]
    },
    {
      title: 'Privacy Controls',
      description: 'Comprehensive privacy features that give you control over your data and help maintain compliance.',
      icon: <PrivacyTipIcon sx={{ fontSize: '2.5rem', color: theme.palette.primary.main }} />,
      details: [
        'Customizable data retention policies',
        'Candidate consent management',
        'Data subject access request handling'
      ]
    },
    {
      title: 'Legal Compliance',
      description: 'Built-in features to help your recruitment process comply with employment and anti-discrimination laws.',
      icon: <GavelIcon sx={{ fontSize: '2.5rem', color: theme.palette.primary.main }} />,
      details: [
        'EEOC compliance reporting',
        'Bias detection and mitigation',
        'Audit trails for hiring decisions'
      ]
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
            label="SECURITY & COMPLIANCE" 
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
            Enterprise-Grade Security
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
              mb: 6
            }}
          >
            Your data security and compliance are our top priorities
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-20px',
                    left: '-20px',
                    right: '20px',
                    bottom: '20px',
                    borderRadius: '24px',
                    background: alpha(theme.palette.primary.main, 0.05),
                    zIndex: 0
                  }
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: 400,
                    borderRadius: '24px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                    zIndex: 1,
                    background: '#1E1E1E',
                    color: 'white',
                    overflow: 'hidden'
                  }}
                >
                  {/* Interactive Security Dashboard */}
                  <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    {/* Header */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box
                          component={motion.div}
                          animate={{ 
                            rotate: [0, 5, 0, -5, 0],
                          }}
                          transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            repeatType: 'loop'
                          }}
                          sx={{
                            width: 36,
                            height: 36,
                            borderRadius: '8px',
                            background: 'rgba(255, 255, 255, 0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 2,
                            fontWeight: 700
                          }}
                        >
                          <SecurityIcon fontSize="small" />
                        </Box>
                        <Typography variant="h6" fontWeight={600}>
                          Security Center
                        </Typography>
                      </Box>
                      <Chip 
                        label="Real-time Monitoring" 
                        size="small"
                        sx={{ 
                          bgcolor: alpha(theme.palette.success.main, 0.2),
                          color: theme.palette.success.main,
                          fontWeight: 600
                        }} 
                      />
                    </Box>
                    
                    {/* Security Metrics */}
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                      {[
                        { label: 'Threats Blocked', value: '1,287', color: theme.palette.error.main },
                        { label: 'Compliance Checks', value: '99.8%', color: theme.palette.success.main },
                        { label: 'Data Encrypted', value: '100%', color: theme.palette.info.main }
                      ].map((metric, idx) => (
                        <Grid item xs={4} key={idx}>
                          <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 * idx + 0.2, duration: 0.5 }}
                            sx={{
                              p: 2,
                              borderRadius: 2,
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              textAlign: 'center'
                            }}
                          >
                            <Typography variant="h5" fontWeight={700} color={metric.color} sx={{ mb: 0.5 }}>
                              {metric.value}
                            </Typography>
                            <Typography variant="caption" color="rgba(255, 255, 255, 0.7)">
                              {metric.label}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                    
                    {/* Compliance Status */}
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      sx={{ mb: 3 }}
                    >
                      <Typography variant="subtitle1" fontWeight={600} color="white" gutterBottom>
                        Compliance Status
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        {[
                          { name: 'SOC 2 Type II', status: 'Certified', color: theme.palette.success.main },
                          { name: 'ISO 27001', status: 'Compliant', color: theme.palette.success.main },
                          { name: 'GDPR', status: 'Ready', color: theme.palette.info.main },
                          { name: 'CCPA', status: 'Ready', color: theme.palette.info.main }
                        ].map((compliance, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              p: 1.5,
                              borderRadius: 2,
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center'
                            }}
                          >
                            <Typography variant="body2" color="white">
                              {compliance.name}
                            </Typography>
                            <Chip
                              size="small"
                              label={compliance.status}
                              sx={{ 
                                backgroundColor: alpha(compliance.color, 0.2),
                                color: compliance.color,
                                fontWeight: 600,
                                height: 24
                              }}
                            />
                          </Box>
                        ))}
                      </Box>
                    </Box>
                    
                    {/* Security Log */}
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.5 }}
                      sx={{ mt: 'auto' }}
                    >
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: 2,
                          background: alpha(theme.palette.primary.main, 0.1),
                          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1
                        }}
                      >
                        <Box
                          component={motion.div}
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatType: 'loop'
                          }}
                          sx={{
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            background: alpha(theme.palette.primary.main, 0.2),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <ShieldIcon sx={{ fontSize: '0.875rem', color: theme.palette.primary.main }} />
                        </Box>
                        <Typography variant="caption" color="white">
                          Last security scan: 2 minutes ago - No issues found
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '-30px',
                    right: '-30px',
                    width: '120px',
                    height: '120px',
                    borderRadius: '24px',
                    background: alpha(theme.palette.primary.main, 0.1),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 0
                  }}
                >
                  <SecurityIcon
                    sx={{
                      fontSize: '3rem',
                      color: theme.palette.primary.main
                    }}
                  />
                </Box>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '1.75rem', md: '2.25rem' }
                }}
              >
                Your Data Security is Our Priority
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  mb: 4,
                  lineHeight: 1.7
                }}
              >
                HireGenix is built from the ground up with security and compliance in mind. Our platform employs industry-leading security measures to protect your sensitive recruitment data, while ensuring compliance with global privacy regulations and employment laws.
              </Typography>
              <Box
                sx={{
                  p: 3,
                  borderRadius: '16px',
                  background: alpha(theme.palette.primary.light, 0.05),
                  border: `1px solid ${alpha(theme.palette.primary.light, 0.1)}`,
                  mb: 4
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2
                  }}
                >
                  Our Security Commitment:
                </Typography>
                <List disablePadding>
                  {[
                    'Regular security audits and penetration testing',
                    'Strict access controls and role-based permissions',
                    'Continuous monitoring for suspicious activities',
                    '99.9% uptime with redundant infrastructure'
                  ].map((item, idx) => (
                    <ListItem key={idx} disablePadding sx={{ mb: 1 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <Box
                          sx={{
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            background: alpha(theme.palette.primary.main, 0.1),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <VerifiedIcon
                            sx={{
                              fontSize: '1rem',
                              color: theme.palette.primary.main
                            }}
                          />
                        </Box>
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{
                          variant: 'body2',
                          color: 'text.primary'
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Button
                variant="outlined"
                color="primary"
                endIcon={<ArrowForwardIcon />}
                component={Link}
                href="/security"
                sx={{
                  py: 1.5,
                  px: 3,
                  borderRadius: '50px',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateX(5px)'
                  }
                }}
              >
                Learn More About Our Security
              </Button>
            </motion.div>
          </Grid>
        </Grid>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {securityFeatures.map((feature, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div variants={itemVariant}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '24px',
                      background: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)',
                        transform: 'translateY(-5px)'
                      }
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 3
                      }}
                    >
                      {feature.icon}
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          ml: 2
                        }}
                      >
                        {feature.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        mb: 3,
                        lineHeight: 1.7
                      }}
                    >
                      {feature.description}
                    </Typography>
                    <List disablePadding>
                      {feature.details.map((detail, idx) => (
                        <ListItem key={idx} disablePadding sx={{ mb: 1 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                background: theme.palette.primary.main
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={detail}
                            primaryTypographyProps={{
                              variant: 'body2',
                              color: 'text.secondary'
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
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
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: '24px',
                background: alpha(theme.palette.primary.light, 0.05),
                border: `1px solid ${alpha(theme.palette.primary.light, 0.1)}`,
                display: 'inline-block',
                maxWidth: 800,
                mx: 'auto'
              }}
            >
              <Typography
                variant="h5"
                component="p"
                sx={{
                  fontWeight: 600,
                  mb: 2
                }}
              >
                Need a custom security assessment?
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  mb: 3
                }}
              >
                Our security team is available to discuss your specific requirements and provide detailed information about our security measures and compliance certifications.
              </Typography>
              <Button
                variant="contained"
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
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
                  }
                }}
              >
                Schedule Security Consultation
              </Button>
            </Paper>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};
