'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  Checkbox,
  CircularProgress,
  Alert,
  Chip,
  Divider,
  alpha,
  useTheme
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  CloudUpload as CloudUploadIcon,
  Send as SendIcon,
  Check as CheckIcon
} from '@mui/icons-material';
import { Layout } from '@/components/Layout';
import { SEOMetadata } from '@/components/SEO';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

// Define job interface
interface Job {
  id: string;
  title: string;
  companyName?: string;
  location?: string;
}

// Define application form data interface
interface ApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resumeFile: File | null;
  coverLetter: string;
  linkedinUrl: string;
  portfolioUrl: string;
  heardFrom: string;
  workAuthorization: string;
  agreeToTerms: boolean;
}

export default function JobApplicationPage() {
  const theme = useTheme();
  const params = useParams();
  const router = useRouter();
  const jobId = params.id as string;
  
  // State for job details
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // State for application form
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<ApplicationFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    resumeFile: null,
    coverLetter: '',
    linkedinUrl: '',
    portfolioUrl: '',
    heardFrom: '',
    workAuthorization: '',
    agreeToTerms: false
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  // Steps for the application process
  const steps = ['Personal Information', 'Resume & Cover Letter', 'Additional Information', 'Review & Submit'];
  
  // Fetch job details from API
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        
        const response = await fetch(`/api/jobs/${jobId}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Job not found');
          }
          throw new Error('Failed to fetch job details');
        }
        
        const data = await response.json();
        
        // Extract only the needed job details
        setJob({
          id: data.id,
          title: data.title,
          companyName: data.companyName,
          location: data.location
        });
        
        setError(null);
      } catch (err) {
        console.error('Error fetching job details:', err);
        setError(err instanceof Error ? err.message : 'Failed to load job details');
        setJob(null);
      } finally {
        setLoading(false);
      }
    };
    
    if (jobId) {
      fetchJobDetails();
    }
  }, [jobId]);
  
  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    // Handle checkbox fields
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: checkbox.checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    
    // Clear error for this field if it exists
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setFormErrors({
          ...formErrors,
          resumeFile: 'File size should not exceed 5MB'
        });
        return;
      }
      
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setFormErrors({
          ...formErrors,
          resumeFile: 'Only PDF and Word documents are allowed'
        });
        return;
      }
      
      setFormData({
        ...formData,
        resumeFile: file
      });
      
      // Clear error for this field if it exists
      if (formErrors.resumeFile) {
        setFormErrors({
          ...formErrors,
          resumeFile: ''
        });
      }
    }
  };
  
  // Validate form data for the current step
  const validateStep = (): boolean => {
    const errors: Record<string, string> = {};
    
    if (activeStep === 0) {
      // Validate personal information
      if (!formData.firstName.trim()) {
        errors.firstName = 'First name is required';
      }
      
      if (!formData.lastName.trim()) {
        errors.lastName = 'Last name is required';
      }
      
      if (!formData.email.trim()) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Email is invalid';
      }
      
      if (!formData.phone.trim()) {
        errors.phone = 'Phone number is required';
      }
    } else if (activeStep === 1) {
      // Validate resume and cover letter
      if (!formData.resumeFile) {
        errors.resumeFile = 'Resume is required';
      }
    } else if (activeStep === 2) {
      // Validate additional information
      if (!formData.workAuthorization) {
        errors.workAuthorization = 'Please select your work authorization status';
      }
    } else if (activeStep === 3) {
      // Validate final step
      if (!formData.agreeToTerms) {
        errors.agreeToTerms = 'You must agree to the terms and conditions';
      }
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  // Handle next step
  const handleNext = () => {
    if (validateStep()) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  // Handle back step
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation
    if (!validateStep()) {
      return;
    }
    
    setSubmitting(true);
    setSubmitError(null);
    
    try {
      // Create FormData object for file upload
      const formDataToSend = new FormData();
      
      // Add all form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'resumeFile' && value) {
          formDataToSend.append('resume', value);
        } else if (key !== 'resumeFile') {
          formDataToSend.append(key, String(value));
        }
      });
      
      // Add job ID
      formDataToSend.append('jobId', jobId);
      
      // Send the application
      const response = await fetch(`/api/jobs/${jobId}/apply`, {
        method: 'POST',
        body: formDataToSend
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit application');
      }
      
      // Application submitted successfully
      setSubmitSuccess(true);
      
      // Redirect to success page after a delay
      setTimeout(() => {
        router.push(`/careers/${jobId}/apply/success`);
      }, 3000);
    } catch (err) {
      console.error('Error submitting application:', err);
      setSubmitError(err instanceof Error ? err.message : 'Failed to submit application');
      setSubmitSuccess(false);
    } finally {
      setSubmitting(false);
    }
  };
  
  // Render form step content
  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={!!formErrors.firstName}
                helperText={formErrors.firstName}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={!!formErrors.lastName}
                helperText={formErrors.lastName}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!formErrors.email}
                helperText={formErrors.email}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={!!formErrors.phone}
                helperText={formErrors.phone}
                required
              />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Upload Resume
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Please upload your resume in PDF or Word format (max 5MB).
                </Typography>
                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<CloudUploadIcon />}
                  sx={{ mb: 1 }}
                >
                  Upload Resume
                  <input
                    type="file"
                    hidden
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleFileUpload}
                  />
                </Button>
                {formData.resumeFile && (
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <CheckIcon color="success" sx={{ mr: 1 }} />
                    <Typography variant="body2">
                      {formData.resumeFile.name}
                    </Typography>
                  </Box>
                )}
                {formErrors.resumeFile && (
                  <FormHelperText error>{formErrors.resumeFile}</FormHelperText>
                )}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Cover Letter"
                name="coverLetter"
                multiline
                rows={6}
                value={formData.coverLetter}
                onChange={handleChange}
                placeholder="Tell us why you're interested in this position and why you would be a good fit."
              />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="LinkedIn Profile URL"
                name="linkedinUrl"
                value={formData.linkedinUrl}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Portfolio/Website URL"
                name="portfolioUrl"
                value={formData.portfolioUrl}
                onChange={handleChange}
                placeholder="https://yourportfolio.com"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="How did you hear about this position?"
                name="heardFrom"
                value={formData.heardFrom}
                onChange={handleChange}
                placeholder="LinkedIn, Job Board, Referral, etc."
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset" error={!!formErrors.workAuthorization} required>
                <Typography variant="subtitle1" gutterBottom>
                  Work Authorization
                </Typography>
                <RadioGroup
                  name="workAuthorization"
                  value={formData.workAuthorization}
                  onChange={handleChange}
                >
                  <FormControlLabel value="citizen" control={<Radio />} label="U.S. Citizen / Permanent Resident" />
                  <FormControlLabel value="visa" control={<Radio />} label="Visa Holder (authorized to work in the U.S.)" />
                  <FormControlLabel value="sponsorship" control={<Radio />} label="Would require sponsorship" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                {formErrors.workAuthorization && (
                  <FormHelperText>{formErrors.workAuthorization}</FormHelperText>
                )}
              </FormControl>
            </Grid>
          </Grid>
        );
      case 3:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Review Your Application
            </Typography>
            <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Personal Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="text.secondary">
                    Name
                  </Typography>
                  <Typography variant="body1">
                    {formData.firstName} {formData.lastName}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="text.secondary">
                    Email
                  </Typography>
                  <Typography variant="body1">
                    {formData.email}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="text.secondary">
                    Phone
                  </Typography>
                  <Typography variant="body1">
                    {formData.phone}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
            
            <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Resume & Cover Letter
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary">
                    Resume
                  </Typography>
                  <Typography variant="body1">
                    {formData.resumeFile?.name || 'No resume uploaded'}
                  </Typography>
                </Grid>
                {formData.coverLetter && (
                  <Grid item xs={12}>
                    <Typography variant="body2" color="text.secondary">
                      Cover Letter
                    </Typography>
                    <Typography variant="body1">
                      {formData.coverLetter.length > 100 
                        ? `${formData.coverLetter.substring(0, 100)}...` 
                        : formData.coverLetter}
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Paper>
            
            <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Additional Information
              </Typography>
              <Grid container spacing={2}>
                {formData.linkedinUrl && (
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="text.secondary">
                      LinkedIn
                    </Typography>
                    <Typography variant="body1">
                      {formData.linkedinUrl}
                    </Typography>
                  </Grid>
                )}
                {formData.portfolioUrl && (
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="text.secondary">
                      Portfolio
                    </Typography>
                    <Typography variant="body1">
                      {formData.portfolioUrl}
                    </Typography>
                  </Grid>
                )}
                {formData.heardFrom && (
                  <Grid item xs={12}>
                    <Typography variant="body2" color="text.secondary">
                      How you heard about this position
                    </Typography>
                    <Typography variant="body1">
                      {formData.heardFrom}
                    </Typography>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary">
                    Work Authorization
                  </Typography>
                  <Typography variant="body1">
                    {formData.workAuthorization === 'citizen' && 'U.S. Citizen / Permanent Resident'}
                    {formData.workAuthorization === 'visa' && 'Visa Holder (authorized to work in the U.S.)'}
                    {formData.workAuthorization === 'sponsorship' && 'Would require sponsorship'}
                    {formData.workAuthorization === 'other' && 'Other'}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
            
            <FormControlLabel
              control={
                <Checkbox
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                />
              }
              label="I certify that the information provided in this application is true and complete to the best of my knowledge."
            />
            {formErrors.agreeToTerms && (
              <FormHelperText error>{formErrors.agreeToTerms}</FormHelperText>
            )}
          </Box>
        );
      default:
        return null;
    }
  };
  
  // SEO data
  const seoData = {
    title: job ? `Apply for ${job.title} - HireGenix` : 'Job Application - HireGenix',
    description: job ? `Apply for the ${job.title} position at ${job.companyName || 'HireGenix'}. Submit your resume and application online.` : 'Apply for jobs at HireGenix. Submit your resume and application online.',
    keywords: job ? `apply, job application, ${job.title}, career, ${job.companyName || 'HireGenix'}` : 'apply, job application, career, HireGenix',
  };
  
  return (
    <Layout>
      <SEOMetadata seoData={seoData} />
      
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Paper sx={{ p: 4, textAlign: 'center', color: 'error.main' }}>
            <Typography variant="h6">{error}</Typography>
            <Button
              component={Link}
              href="/careers"
              variant="contained"
              color="primary"
              startIcon={<ArrowBackIcon />}
              sx={{ mt: 2 }}
            >
              Back to Careers
            </Button>
          </Paper>
        ) : job ? (
          <Box>
            {/* Back button */}
            <Button
              component={Link}
              href={`/careers/${jobId}`}
              variant="text"
              color="primary"
              startIcon={<ArrowBackIcon />}
              sx={{ mb: 3 }}
            >
              Back to Job Details
            </Button>
            
            <Paper
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 2,
                mb: 4,
              }}
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h4" component="h1" gutterBottom>
                Apply for {job.title}
              </Typography>
              
              {job.companyName && (
                <Typography variant="subtitle1" color="text.secondary" paragraph>
                  {job.companyName} {job.location && `• ${job.location}`}
                </Typography>
              )}
              
              <Divider sx={{ my: 3 }} />
              
              {/* Stepper */}
              <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              
              {/* Form */}
              <form onSubmit={handleSubmit}>
                {submitSuccess ? (
                  <Box sx={{ textAlign: 'center', py: 4 }}>
                    <CheckIcon color="success" sx={{ fontSize: 60, mb: 2 }} />
                    <Typography variant="h5" gutterBottom>
                      Application Submitted Successfully!
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Thank you for applying. We will review your application and get back to you soon.
                    </Typography>
                    <CircularProgress size={24} sx={{ mt: 2 }} />
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      Redirecting to confirmation page...
                    </Typography>
                  </Box>
                ) : (
                  <>
                    {/* Form content */}
                    <Box sx={{ mb: 4 }}>
                      {renderStepContent()}
                    </Box>
                    
                    {/* Error message */}
                    {submitError && (
                      <Alert severity="error" sx={{ mb: 3 }}>
                        {submitError}
                      </Alert>
                    )}
                    
                    {/* Navigation buttons */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        variant="outlined"
                      >
                        Back
                      </Button>
                      <Box>
                        {activeStep === steps.length - 1 ? (
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={submitting}
                            startIcon={submitting ? <CircularProgress size={20} /> : <SendIcon />}
                          >
                            {submitting ? 'Submitting...' : 'Submit Application'}
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                          >
                            Next
                          </Button>
                        )}
                      </Box>
                    </Box>
                  </>
                )}
              </form>
            </Paper>
          </Box>
        ) : (
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h6">Job not found</Typography>
            <Button
              component={Link}
              href="/careers"
              variant="contained"
              color="primary"
              startIcon={<ArrowBackIcon />}
              sx={{ mt: 2 }}
            >
              Back to Careers
            </Button>
          </Paper>
        )}
      </Container>
    </Layout>
  );
}
