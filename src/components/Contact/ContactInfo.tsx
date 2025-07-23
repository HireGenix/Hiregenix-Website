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
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  AccessTime as AccessTimeIcon,
  Language as LanguageIcon,
  Headset as HeadsetIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Contact information
const contactInfo = [
  {
    icon: <EmailIcon fontSize="large" />,
    title: 'Email',
    details: 'info@myhiregenix.com',
    link: 'mailto:info@myhiregenix.com',
    color: 'primary',
  },
  {
    icon: <PhoneIcon fontSize="large" />,
    title: 'Phone (US)',
    details: '+1 (971) 512-1701',
    link: 'tel:+19715121701',
    color: 'secondary',
  },
  {
    icon: <PhoneIcon fontSize="large" />,
    title: 'Phone (India)',
    details: '+91-8954333390',
    link: 'tel:+918954333390',
    color: 'info',
  },
  {
    icon: <LocationIcon fontSize="large" />,
    title: 'US Office',
    details: '1050 North 3rd Street Ste B, Laramie, WY 82072',
    link: 'https://maps.google.com/?q=1050+North+3rd+Street+Ste+B,+Laramie,+WY+82072',
    color: 'error',
  },
  {
    icon: <LocationIcon fontSize="large" />,
    title: 'India Office',
    details: '2/1201 Behind S.A.M Inter College, Ramnagar, Saharanpur (U.P)-247001',
    link: 'https://maps.google.com/?q=2/1201+Behind+S.A.M+Inter+College,+Ramnagar,+Saharanpur+(U.P)-247001',
    color: 'success',
  },
];

// Additional contact details
const additionalInfo = [
  {
    icon: <AccessTimeIcon fontSize="large" />,
    title: 'Business Hours',
    details: 'Monday - Friday: 9:00 AM - 6:00 PM PST',
    color: 'success',
  },
  {
    icon: <LanguageIcon fontSize="large" />,
    title: 'Global Support',
    details: 'Support available in multiple languages',
    color: 'info',
  },
  {
    icon: <HeadsetIcon fontSize="large" />,
    title: 'Technical Support',
    details: 'support@myhiregenix.com',
    link: 'mailto:support@myhiregenix.com',
    color: 'warning',
  },
];

// Glass Card component
interface GlassCardProps {
  children: React.ReactNode;
  sx?: any;
  [key: string]: any;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, sx = {}, ...props }) => {
  const theme = useTheme();
  return (
    <Paper
      elevation={0}
      sx={{
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(16px) saturate(180%)',
        borderRadius: 4,
        border: '1px solid rgba(255, 255, 255, 0.8)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
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

const ContactInfo: React.FC = () => {
  const theme = useTheme();

  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 }, 
        background: `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.8)} 0%, ${theme.palette.background.default} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
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
          bottom: '10%',
          right: '10%',
          width: '300px',
          height: '300px',
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
              REACH OUT TO US
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
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Connect With Our Team
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
              We're here to answer your questions and provide the support you need
            </Typography>
          </motion.div>
        </Box>
        
        <Grid container spacing={4}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '5px',
                      background: info.color === 'primary' ? theme.palette.primary.main :
                                info.color === 'secondary' ? theme.palette.secondary.main :
                                theme.palette.error.main,
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      backgroundColor: alpha(
                        info.color === 'primary' ? theme.palette.primary.main :
                        info.color === 'secondary' ? theme.palette.secondary.main :
                        theme.palette.error.main, 
                        0.1
                      ),
                      color: info.color === 'primary' ? theme.palette.primary.main :
                        info.color === 'secondary' ? theme.palette.secondary.main :
                        theme.palette.error.main,
                      mb: 3,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: -5,
                        left: -5,
                        right: -5,
                        bottom: -5,
                        borderRadius: '50%',
                        border: `2px dashed ${alpha(
                          info.color === 'primary' ? theme.palette.primary.main :
                          info.color === 'secondary' ? theme.palette.secondary.main :
                          theme.palette.error.main, 
                          0.3
                        )}`,
                        animation: 'spin 15s linear infinite',
                      },
                      '@keyframes spin': {
                        '0%': {
                          transform: 'rotate(0deg)',
                        },
                        '100%': {
                          transform: 'rotate(360deg)',
                        },
                      },
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom fontWeight={700}>
                    {info.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    {info.details}
                  </Typography>
                  <Button
                    href={info.link}
                    target={info.title === 'Office' ? '_blank' : undefined}
                    rel={info.title === 'Office' ? 'noopener noreferrer' : undefined}
                    variant="contained"
                    color={
                      info.color === 'primary' ? 'primary' :
                      info.color === 'secondary' ? 'secondary' :
                      'error'
                    }
                    sx={{ 
                      mt: 'auto',
                      borderRadius: '50px',
                      px: 3,
                      py: 1.5,
                      fontWeight: 600,
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                      }
                    }}
                  >
                    {info.title === 'Email' ? 'Send Email' :
                     info.title === 'Phone' ? 'Call Us' :
                     'View on Map'}
                  </Button>
                </GlassCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        
        {/* Additional contact information */}
        <Box sx={{ mt: 8 }}>
          <Grid container spacing={4}>
            {additionalInfo.map((info, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3,
                      p: 3,
                      borderRadius: 4,
                      background: alpha(
                        info.color === 'success' ? theme.palette.success.main :
                        info.color === 'info' ? theme.palette.info.main :
                        theme.palette.warning.main, 
                        0.05
                      ),
                      border: `1px solid ${alpha(
                        info.color === 'success' ? theme.palette.success.main :
                        info.color === 'info' ? theme.palette.info.main :
                        theme.palette.warning.main, 
                        0.1
                      )}`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
                        background: alpha(
                          info.color === 'success' ? theme.palette.success.main :
                          info.color === 'info' ? theme.palette.info.main :
                          theme.palette.warning.main, 
                          0.08
                        ),
                      }
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
                        backgroundColor: alpha(
                          info.color === 'success' ? theme.palette.success.main :
                          info.color === 'info' ? theme.palette.info.main :
                          theme.palette.warning.main, 
                          0.1
                        ),
                        color: info.color === 'success' ? theme.palette.success.main :
                          info.color === 'info' ? theme.palette.info.main :
                          theme.palette.warning.main,
                        flexShrink: 0,
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography variant="h6" component="h3" fontWeight={600}>
                        {info.title}
                      </Typography>
                      {info.link ? (
                        <Link 
                          href={info.link}
                          style={{ 
                            textDecoration: 'none',
                            color: info.color === 'success' ? theme.palette.success.main :
                                  info.color === 'info' ? theme.palette.info.main :
                                  theme.palette.warning.main,
                            fontWeight: 500,
                          }}
                        >
                          {info.details}
                        </Link>
                      ) : (
                        <Typography variant="body1" color="text.secondary">
                          {info.details}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
        
        {/* World map or global presence indicator */}
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          sx={{ 
            mt: 10, 
            p: 4,
            borderRadius: 4,
            background: alpha(theme.palette.background.paper, 0.5),
            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
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
              opacity: 0.03,
              backgroundImage: 'url(/hero-pattern.svg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 0,
            }}
          />
          
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h4" component="h3" fontWeight={700} textAlign="center" gutterBottom>
              Global Presence
            </Typography>
            <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
              HireGenix has offices in India and USA, but we provide support to customers worldwide with 24/7 assistance in multiple languages.
            </Typography>
            
            <Grid container spacing={3} justifyContent="center">
              {[
                { location: 'Laramie', country: 'USA', timezone: 'MST', flag: '🇺🇸' },
                { location: 'Saharanpur', country: 'India', timezone: 'IST', flag: '🇮🇳' },
              ].map((office, index) => (
                <Grid item xs={6} sm={4} md={2} key={index}>
                  <Box
                    sx={{
                      textAlign: 'center',
                      p: 2,
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: alpha(theme.palette.primary.main, 0.05),
                      }
                    }}
                  >
                    <Typography variant="h2" sx={{ mb: 1, fontSize: '2rem' }}>
                      {office.flag}
                    </Typography>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {office.location}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {office.country} ({office.timezone})
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactInfo;
