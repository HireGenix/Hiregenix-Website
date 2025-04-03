'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  useTheme,
  alpha,
  MenuItem,
  CircularProgress,
  Paper,
  Chip,
  InputAdornment,
  Tooltip,
  IconButton,
} from '@mui/material';
import {
  Send as SendIcon,
  CheckCircle as CheckCircleIcon,
  Info as InfoIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Business as BusinessIcon,
  Help as HelpIcon,
  Message as MessageIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Inquiry types
const inquiryTypes = [
  'General Inquiry',
  'Product Demo',
  'Sales',
  'Technical Support',
  'Partnership',
  'Careers',
];

const ContactForm: React.FC = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: !formData.name.trim(),
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      message: !formData.message.trim(),
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send form data to our API endpoint
      const response = await fetch('/api/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'contact',
          ...formData,
        }),
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        // Success
        setIsSubmitted(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          inquiryType: '',
          message: '',
        });
      } else {
        throw new Error(data.error || 'Failed to submit form');
      }
    } catch (error) {
      // Error handling would go here
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box 
      id="contact-form"
      sx={{ 
        py: { xs: 8, md: 12 },
        background: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.03)} 0%, ${alpha(theme.palette.primary.main, 0)} 70%)`,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '5%',
          left: '10%',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.03)} 0%, ${alpha(theme.palette.secondary.main, 0)} 70%)`,
          zIndex: 0,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid 
            item 
            xs={12} 
            md={6}
            component={motion.div}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Chip 
              label="GET IN TOUCH" 
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
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: '2rem', md: '2.75rem' },
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Send Us a Message
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'text.secondary' }}>
              Fill out the form and our team will get back to you as soon as possible. We are here to answer any questions you may have about our platform.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'text.secondary' }}>
              If you are interested in a demo, please select "Product Demo" as your inquiry type, and we will schedule a personalized demonstration of our platform.
            </Typography>
            
            <Box sx={{ mt: 4 }}>
              {[
                'Quick response within 24 hours on business days',
                'Personalized demos with our product experts',
                'Dedicated support throughout your journey',
              ].map((feature, index) => (
                <Box 
                  key={index}
                  component={motion.div}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: 2,
                    p: 2,
                    borderRadius: 2,
                    background: alpha(theme.palette.success.main, 0.05),
                    border: `1px solid ${alpha(theme.palette.success.main, 0.1)}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: alpha(theme.palette.success.main, 0.08),
                      transform: 'translateX(5px)',
                    }
                  }}
                >
                  <CheckCircleIcon sx={{ color: theme.palette.success.main, mr: 2, fontSize: 24 }} />
                  <Typography variant="body1" fontWeight={500}>
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          
          <Grid 
            item 
            xs={12} 
            md={6}
            component={motion.div}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {isSubmitted ? (
              <Paper
                elevation={0}
                sx={{
                  p: 5,
                  borderRadius: 4,
                  textAlign: 'center',
                  background: `linear-gradient(135deg, ${alpha(theme.palette.success.light, 0.1)} 0%, ${alpha(theme.palette.success.main, 0.05)} 100%)`,
                  border: `1px solid ${alpha(theme.palette.success.main, 0.2)}`,
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                }}
              >
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    background: alpha(theme.palette.success.main, 0.1),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                  }}
                >
                  <CheckCircleIcon sx={{ fontSize: 50, color: theme.palette.success.main }} />
                </Box>
                <Typography variant="h4" component="h3" fontWeight={700} gutterBottom>
                  Message Sent!
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', color: 'text.secondary' }}>
                  Thank you for reaching out to us. We've received your message and will get back to you as soon as possible, usually within 24 hours on business days.
                </Typography>
                <Button
                  variant="contained"
                  color="success"
                  size="large"
                  onClick={() => setIsSubmitted(false)}
                  sx={{
                    py: 1.5,
                    px: 4,
                    borderRadius: 50,
                    fontWeight: 600,
                  }}
                >
                  Send Another Message
                </Button>
              </Paper>
            ) : (
              <Paper
                component="form"
                onSubmit={handleSubmit}
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(16px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '5px',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  }
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      fullWidth
                      required
                      error={errors.name}
                      helperText={errors.name ? 'Name is required' : ''}
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon color="primary" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      fullWidth
                      required
                      error={errors.email}
                      helperText={errors.email ? 'Valid email is required' : ''}
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon color="primary" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      fullWidth
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <BusinessIcon color="primary" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      label="Inquiry Type"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      fullWidth
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <HelpIcon color="primary" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        }
                      }}
                    >
                      <MenuItem value="" disabled>
                        <em>Select an inquiry type</em>
                      </MenuItem>
                      {inquiryTypes.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      multiline
                      rows={5}
                      fullWidth
                      required
                      error={errors.message}
                      helperText={errors.message ? 'Message is required' : ''}
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1.5, mr: 1 }}>
                            <MessageIcon color="primary" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <InfoIcon sx={{ color: theme.palette.info.main, mr: 1, fontSize: 20 }} />
                      <Typography variant="body2" color="text.secondary">
                        By submitting this form, you agree to our <Link href="/privacy" style={{ color: theme.palette.primary.main }}>Privacy Policy</Link>.
                      </Typography>
                    </Box>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      disabled={isSubmitting}
                      startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                      sx={{
                        py: 1.5,
                        borderRadius: '50px',
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: '0 12px 25px rgba(0, 0, 0, 0.15)',
                        }
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactForm;
