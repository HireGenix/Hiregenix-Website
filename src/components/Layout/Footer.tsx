'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  Divider,
  IconButton,
  useTheme,
  useMediaQuery,
  Button,
  TextField,
  InputAdornment,
  Paper,
  alpha,
  Tooltip,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
  Send as SendIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  LocationOn as LocationOnIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
      { name: 'Investor Relations', href: '/investor-relations' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { name: 'AI Recruitment', href: '/solutions/ai-recruitment' },
      { name: 'Skills Assessment', href: '/solutions/skills-assessment' },
      { name: 'Video Interviews', href: '/solutions/video-interviews' },
      { name: 'Workforce Analytics', href: '/solutions/workforce-analytics' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Guides', href: '/guides' },
      { name: 'Webinars', href: '/webinars' },
      { name: 'Case Studies', href: '/case-studies' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Terms and Conditions', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Disclaimer', href: '/disclaimer' },
      { name: 'Refund Policy', href: '/refund-policy' },
    ],
  },
];

const socialLinks = [
  { icon: <FacebookIcon />, href: 'https://facebook.com/myhiregenix', label: 'Facebook', color: '#1877F2' },
  { icon: <TwitterIcon />, href: 'https://twitter.com/myhiregenix', label: 'Twitter', color: '#1DA1F2' },
  { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/company/hiregenixai/', label: 'LinkedIn', color: '#0A66C2' },
  { icon: <InstagramIcon />, href: 'https://instagram.com/hiregenixai', label: 'Instagram', color: '#E4405F' },
  { icon: <YouTubeIcon />, href: 'https://youtube.com/hiregenix', label: 'YouTube', color: '#FF0000' },
];

const contactInfo = [
  { icon: <LocationOnIcon />, text: '1050 North 3rd Street, Laramie, WY 82072' },
  { icon: <LocationOnIcon />, text: '2/1201 Behind S.A.M Inter College, Ramnagar, Saharanpur (U.P)-247001' },
  { icon: <PhoneIcon />, text: '+1 (971) 512-1701 (US)' },
  { icon: <PhoneIcon />, text: '+91-8954333390 (India)' },
  { icon: <EmailIcon />, text: 'info@myhiregenix.com' },
];

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
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
      
      {/* Newsletter Section */}
      <Box 
        sx={{ 
          py: 6, 
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
          position: 'relative',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        {/* Decorative elements */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          sx={{
            position: 'absolute',
            top: '20%',
            left: '5%',
            width: 100,
            height: 100,
            borderRadius: '30%',
            background: alpha(theme.palette.primary.main, 0.05),
            transform: 'rotate(15deg)',
            zIndex: 0,
          }}
        />
        
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          sx={{
            position: 'absolute',
            bottom: '10%',
            right: '10%',
            width: 120,
            height: 120,
            borderRadius: '50%',
            border: `2px dashed ${alpha(theme.palette.secondary.main, 0.2)}`,
            zIndex: 0,
          }}
        />
        
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Typography 
                  variant="h4" 
                  component="h2" 
                  fontWeight={800} 
                  gutterBottom
                  sx={{
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Stay Updated with HireGenix
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Subscribe to our newsletter for the latest industry insights, product updates, and recruitment tips delivered directly to your inbox.
                </Typography>
                <Box 
                  component="form" 
                  sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: { xs: 2, sm: 0 },
                  }}
                  onSubmit={(e) => e.preventDefault()}
                >
                  <TextField
                    placeholder="Enter your email"
                    variant="outlined"
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: { xs: 2, sm: '50px 0 0 50px' },
                        backgroundColor: 'white',
                        '& fieldset': {
                          borderColor: 'rgba(0, 0, 0, 0.1)',
                          borderRight: { sm: 0 },
                        },
                        '&:hover fieldset': {
                          borderColor: theme.palette.primary.main,
                        },
                      },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{
                      borderRadius: { xs: 2, sm: '0 50px 50px 0' },
                      px: 3,
                      py: 1.5,
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                      }
                    }}
                  >
                    Subscribe
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                sx={{ 
                  maxWidth: 300,
                  display: { xs: 'none', md: 'block' },
                  position: 'relative',
                }}
              >
                <Box
                  component={motion.div}
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                >
                  <Image
                    src="/newsletter-illustration.svg"
                    alt="Newsletter"
                    width={300}
                    height={200}
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Main Footer */}
      <Box
        sx={{
          pt: 10,
          pb: 6,
          position: 'relative',
          zIndex: 1,
          borderTop: '1px solid',
          borderColor: 'divider',
          background: `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.background.default, 0.8)} 100%)`,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Logo and Description */}
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 3 }}>
                <Image
                  src="/HireGenix-logo-black.png"
                  alt="HireGenix Logo"
                  width={180}
                  height={48}
                  style={{ objectFit: 'contain' }}
                />
              </Box>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 350, lineHeight: 1.7 }}>
                HireGenix is a modern recruitment platform that leverages artificial intelligence to help companies find the best talent faster and more accurately.
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                {contactInfo.map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', mb: 2, alignItems: 'flex-start' }}>
                    <Box sx={{ 
                      color: theme.palette.primary.main, 
                      mr: 1.5,
                      mt: 0.5,
                    }}>
                      {item.icon}
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
              
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                {socialLinks.map((link, index) => (
                  <Tooltip key={index} title={link.label} arrow>
                    <IconButton
                      component="a"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      sx={{
                        color: 'white',
                        backgroundColor: alpha(link.color, 0.8),
                        '&:hover': {
                          backgroundColor: link.color,
                          transform: 'translateY(-3px)',
                        },
                        transition: 'all 0.2s ease',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      {link.icon}
                    </IconButton>
                  </Tooltip>
                ))}
              </Box>
            </Grid>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <Grid item xs={6} sm={3} md={2} key={index}>
                <Typography
                  variant="subtitle1"
                  color="text.primary"
                  fontWeight={700}
                  gutterBottom
                  sx={{ mb: 3 }}
                >
                  {section.title}
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                  {section.links.map((link, linkIndex) => (
                    <Box component="li" key={linkIndex} sx={{ mb: 2 }}>
                      <MuiLink
                        component={Link}
                        href={link.href}
                        color="text.secondary"
                        sx={{
                          textDecoration: 'none',
                          transition: 'all 0.2s ease',
                          display: 'inline-flex',
                          alignItems: 'center',
                          '&:hover': {
                            color: theme.palette.primary.main,
                            transform: 'translateX(5px)',
                          },
                        }}
                      >
                        {link.name}
                      </MuiLink>
                    </Box>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 5 }} />

          {/* Bottom Footer */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: isTablet ? 'column' : 'row',
              justifyContent: 'space-between',
              alignItems: isTablet ? 'center' : 'center',
              textAlign: isTablet ? 'center' : 'left',
            }}
          >
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} HireGenix. All rights reserved.
            </Typography>
            
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: { xs: 2, md: 3 },
                mt: isTablet ? 2 : 0,
                justifyContent: 'center',
              }}
            >
              {['Terms', 'Privacy', 'Disclaimer', 'Refunds'].map((item, index) => (
                <MuiLink
                  key={index}
                  component={Link}
                  href={`/${item.toLowerCase()}`}
                  color="text.secondary"
                  sx={{
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.2s ease',
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {item}
                </MuiLink>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
      
      {/* Scroll to top button */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          zIndex: 10,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
        >
          <IconButton
            onClick={scrollToTop}
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
                transform: 'translateY(-3px)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
              },
              transition: 'all 0.3s ease',
              width: 50,
              height: 50,
            }}
          >
            <KeyboardArrowUpIcon fontSize="medium" />
          </IconButton>
        </motion.div>
      </Box>
    </Box>
  );
}
