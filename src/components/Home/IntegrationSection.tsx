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
  Button
} from '@mui/material';
import { 
  ArrowForward as ArrowForwardIcon,
  Check as CheckIcon
} from '@mui/icons-material';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const IntegrationSection: React.FC = () => {
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

  // Integration platforms data with brand colors
  const integrations = [
    { 
      name: 'Slack', 
      logo: 'https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png', 
      color: '#4A154B',
      description: 'Get notifications and updates directly in your Slack channels',
      features: ['Real-time notifications', 'Candidate updates', 'Team collaboration'],
      status: 'Popular'
    },
    { 
      name: 'Microsoft Teams', 
      logo: 'https://img.icons8.com/fluency/48/000000/microsoft-teams-2019.png', 
      color: '#6264A7',
      description: 'Seamlessly integrate with Microsoft Teams for better collaboration',
      features: ['Meeting scheduling', 'Document sharing', 'Interview coordination'],
      status: 'Enterprise'
    },
    { 
      name: 'Google Workspace', 
      logo: 'https://workspace.google.com/static/img/products/png/drive.png?cache=1', 
      color: '#4285F4',
      description: 'Connect with Google Calendar, Gmail, and other Google services',
      features: ['Calendar sync', 'Email integration', 'Document management'],
      status: 'Popular'
    },
    { 
      name: 'Zoom', 
      logo: 'https://download.logo.wine/logo/Zoom_Video_Communications/Zoom_Video_Communications-Logo.wine.png', 
      color: '#2D8CFF',
      description: 'Conduct video interviews directly through Zoom',
      features: ['One-click interviews', 'Recording capabilities', 'Automated scheduling'],
      status: 'New'
    },
    { 
      name: 'LinkedIn', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png', 
      color: '#0A66C2',
      description: 'Source candidates and post jobs directly to LinkedIn',
      features: ['Job posting', 'Candidate sourcing', 'Profile importing'],
      status: 'Popular'
    },
    { 
      name: 'Workday', 
      logo: '/clients/WDAY.png', 
      color: '#0875E1',
      description: 'Integrate with your Workday HRIS for seamless data flow',
      features: ['Employee data sync', 'Onboarding automation', 'HR workflow integration'],
      status: 'Enterprise'
    }
  ];

  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        background: 'linear-gradient(180deg, rgba(250,250,250,1) 0%, rgba(255,255,255,1) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
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
            label="INTEGRATIONS" 
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
            Seamless Integration with Your Favorite Tools
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
            HireGenix works with the tools you already use, making your recruitment process even more efficient
          </Typography>
        </Box>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {integrations.map((integration, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
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
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box
                          component={motion.div}
                          whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
                          sx={{
                            width: 60,
                            height: 60,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '12px',
                            background: alpha(integration.color, 0.1),
                            border: `1px solid ${alpha(integration.color, 0.2)}`,
                            mr: 2
                          }}
                        >
                          <Box
                            component="img"
                            src={integration.logo}
                            alt={integration.name}
                            sx={{
                              width: 36,
                              height: 36,
                              objectFit: 'contain'
                            }}
                          />
                        </Box>
                        <Typography
                          variant="h5"
                          component="h3"
                          sx={{
                            fontWeight: 600,
                            fontSize: '1.25rem'
                          }}
                        >
                          {integration.name}
                        </Typography>
                      </Box>
                      
                      {integration.status && (
                        <Chip
                          label={integration.status}
                          size="small"
                          sx={{
                            fontWeight: 600,
                            backgroundColor: integration.status === 'Popular' ? alpha(theme.palette.success.main, 0.1) :
                                            integration.status === 'New' ? alpha(theme.palette.info.main, 0.1) :
                                            alpha(theme.palette.primary.main, 0.1),
                            color: integration.status === 'Popular' ? theme.palette.success.main :
                                   integration.status === 'New' ? theme.palette.info.main :
                                   theme.palette.primary.main,
                            border: `1px solid ${
                              integration.status === 'Popular' ? alpha(theme.palette.success.main, 0.3) :
                              integration.status === 'New' ? alpha(theme.palette.info.main, 0.3) :
                              alpha(theme.palette.primary.main, 0.3)
                            }`,
                          }}
                        />
                      )}
                    </Box>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 3,
                        flexGrow: 1
                      }}
                    >
                      {integration.description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      {integration.features.map((feature, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 1
                          }}
                        >
                          <CheckIcon
                            sx={{
                              color: theme.palette.success.main,
                              fontSize: '1rem',
                              mr: 1
                            }}
                          />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              fontSize: '0.875rem'
                            }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    <Button
                      variant="text"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        alignSelf: 'flex-start',
                        fontWeight: 600,
                        p: 0,
                        color: integration.color,
                        '&:hover': {
                          background: 'transparent',
                          transform: 'translateX(5px)'
                        }
                      }}
                    >
                      Learn more
                    </Button>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          sx={{
            textAlign: 'center',
            mt: 10,
            p: 5,
            borderRadius: 8,
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.05)} 0%, ${alpha(theme.palette.primary.main, 0.1)} 100%)`,
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.03)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative elements */}
          <Box
            sx={{
              position: 'absolute',
              top: -20,
              left: -20,
              width: 100,
              height: 100,
              borderRadius: '50%',
              background: alpha(theme.palette.primary.main, 0.05),
              zIndex: 0
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: -30,
              right: -30,
              width: 150,
              height: 150,
              borderRadius: '50%',
              background: alpha(theme.palette.primary.main, 0.07),
              zIndex: 0
            }}
          />
          
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography
              variant="h4"
              component="p"
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 700,
                mb: 2,
                background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Need a Custom Integration?
            </Typography>
            <Typography
              variant="h5"
              component="p"
              color="text.secondary"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                fontWeight: 400,
                mb: 4,
                maxWidth: 700,
                mx: 'auto'
              }}
            >
              Don't see your favorite tool? We have over 50+ integrations available and can build custom connectors for your specific needs.
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={Link}
                href="/integrations"
                sx={{
                  py: 1.5,
                  px: 4,
                  borderRadius: '50px',
                  fontWeight: 600,
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 25px rgba(0, 0, 0, 0.15)'
                  }
                }}
              >
                View All Integrations
              </Button>
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
                    transform: 'translateY(-3px)',
                    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.05)'
                  }
                }}
              >
                Request Custom Integration
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
