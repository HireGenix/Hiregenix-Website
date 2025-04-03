'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  useTheme,
  alpha,
  Paper,
  Grid,
  Checkbox,
  FormControlLabel,
  Divider,
  Alert,
  Snackbar,
  CircularProgress,
} from '@mui/material';
import {
  Email as EmailIcon,
  Send as SendIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { SEOMetadata } from '@/components/SEO';
import { Layout } from '@/components/Layout';

export default function NewsletterPage() {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [interests, setInterests] = useState({
    recruitment: false,
    hiring: false,
    assessment: false,
    interviews: false,
    onboarding: false,
    analytics: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInterestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInterests({
      ...interests,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    // Validate email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    // Simulate API call and send to leads@myhiregenix.com
    console.log('Sending newsletter subscription to leads@myhiregenix.com:', {
      email,
      firstName,
      lastName,
      company,
      jobTitle,
      interests
    });
    
    // Corrected handleSubmit logic starts here
    const submitForm = async () => {
      try {
        // Send form data to our API endpoint
        const response = await fetch('/api/forms', {
          method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'newsletter',
          email,
          firstName,
          lastName,
          company,
          jobTitle,
          interests,
        }),
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setSuccess(true);
        
        // Reset form
        setEmail('');
        setFirstName('');
        setLastName('');
        setCompany('');
        setJobTitle('');
        setInterests({
          recruitment: false,
          hiring: false,
          assessment: false,
          interviews: false,
          onboarding: false,
          analytics: false,
        });
      } else {
        throw new Error(data.error || 'Failed to submit form');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setError('Something went wrong. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    submitForm(); // Call the async function
  };

  const handleCloseSnackbar = () => {
    setSuccess(false);
  };

  const seoData = {
    title: 'Newsletter Subscription - HireGenix',
    description: 'Subscribe to HireGenix newsletter to receive the latest recruitment insights, tips, and resources delivered straight to your inbox.',
    keywords: 'recruitment newsletter, hiring newsletter, HR newsletter, recruitment resources, hiring tips',
  };

  return (
    <Layout>
      <SEOMetadata seoData={seoData} />
      
      <Box 
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        sx={{
          py: { xs: 8, md: 12 },
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0.05)} 0%, ${alpha(theme.palette.secondary.dark, 0.1)} 100%)`,
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box sx={{ pr: { md: 4 } }}>
                  <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                      fontSize: { xs: '2.25rem', md: '3rem' },
                      fontWeight: 800,
                      mb: 3,
                      background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Stay Updated with HireGenix
                  </Typography>

                  <Typography
                    variant="h5"
                    component="p"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                      fontWeight: 400,
                      mb: 4,
                      lineHeight: 1.6,
                    }}
                  >
                    Subscribe to our newsletter to receive the latest recruitment insights, tips, and resources delivered straight to your inbox.
                  </Typography>

                  <Box
                    component="img"
                    src="/newsletter-illustration.svg"
                    alt="Newsletter Illustration"
                    sx={{
                      width: '100%',
                      maxWidth: 400,
                      height: 'auto',
                      display: { xs: 'none', md: 'block' },
                    }}
                  />

                  <Box sx={{ mt: 4 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <CheckCircleIcon sx={{ mr: 1, color: theme.palette.success.main }} />
                      What You'll Receive
                    </Typography>

                    <Box component="ul" sx={{ pl: 4, mb: 0 }}>
                      <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                        Latest recruitment trends and insights
                      </Typography>
                      <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                        Exclusive access to new resources
                      </Typography>
                      <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                        Tips and best practices from industry experts
                      </Typography>
                      <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                        Product updates and feature announcements
                      </Typography>
                      <Typography component="li" variant="body1">
                        Invitations to webinars and events
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 5 },
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    <Box sx={{ mb: 4, textAlign: 'center' }}>
                      <EmailIcon 
                        sx={{ 
                          fontSize: 40, 
                          color: theme.palette.primary.main,
                          mb: 2,
                        }} 
                      />
                      <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                          fontWeight: 700,
                          mb: 1,
                        }}
                      >
                        Subscribe to Our Newsletter
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                      >
                        Fill out the form below to subscribe
                      </Typography>
                    </Box>

                    {error && (
                      <Alert severity="error" sx={{ mb: 3 }}>
                        {error}
                      </Alert>
                    )}

                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          error={!!error}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          id="firstName"
                          label="First Name"
                          name="firstName"
                          autoComplete="given-name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          id="lastName"
                          label="Last Name"
                          name="lastName"
                          autoComplete="family-name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          id="company"
                          label="Company"
                          name="company"
                          autoComplete="organization"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          id="jobTitle"
                          label="Job Title"
                          name="jobTitle"
                          autoComplete="organization-title"
                          value={jobTitle}
                          onChange={(e) => setJobTitle(e.target.value)}
                        />
                      </Grid>
                    </Grid>

                    <Box sx={{ mt: 4, mb: 3 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          mb: 2,
                        }}
                      >
                        Topics of Interest
                      </Typography>
                      <Grid container spacing={1}>
                        <Grid item xs={12} sm={6}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={interests.recruitment}
                                onChange={handleInterestChange}
                                name="recruitment"
                                color="primary"
                              />
                            }
                            label="Recruitment"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={interests.hiring}
                                onChange={handleInterestChange}
                                name="hiring"
                                color="primary"
                              />
                            }
                            label="Hiring"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={interests.assessment}
                                onChange={handleInterestChange}
                                name="assessment"
                                color="primary"
                              />
                            }
                            label="Skills Assessment"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={interests.interviews}
                                onChange={handleInterestChange}
                                name="interviews"
                                color="primary"
                              />
                            }
                            label="Interviews"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={interests.onboarding}
                                onChange={handleInterestChange}
                                name="onboarding"
                                color="primary"
                              />
                            }
                            label="Onboarding"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={interests.analytics}
                                onChange={handleInterestChange}
                                name="analytics"
                                color="primary"
                              />
                            }
                            label="Analytics"
                          />
                        </Grid>
                      </Grid>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    <Box sx={{ textAlign: 'center' }}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        disabled={loading}
                        startIcon={loading ? <CircularProgress size={20} /> : <SendIcon />}
                        sx={{
                          py: 1.5,
                          px: 4,
                          borderRadius: '50px',
                          fontWeight: 600,
                          minWidth: 200,
                        }}
                      >
                        {loading ? 'Subscribing...' : 'Subscribe Now'}
                      </Button>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: 'block', mt: 2 }}
                      >
                        By subscribing, you agree to receive marketing communications from HireGenix.
                        You can unsubscribe at any time.
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Thank you for subscribing to our newsletter!
        </Alert>
      </Snackbar>
    </Layout>
  );
}
