'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  CircularProgress,
  Alert,
  useTheme,
  Paper,
  Divider,
  InputAdornment,
  Grid,
} from '@mui/material';
import {
  Close as CloseIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Business as BusinessIcon,
  Phone as PhoneIcon,
  Send as SendIcon,
} from '@mui/icons-material';

interface DemoRequestDialogProps {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
}

const DemoRequestDialog: React.FC<DemoRequestDialogProps> = ({ open, onClose }) => {
  const theme = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({});
    
    try {
      // Send form data to our API endpoint
      const response = await fetch('/api/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'demo',
          ...formData,
        }),
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setSubmitStatus({
          success: true,
          message: 'Thank you! Your request has been sent to our sales team. We will contact you shortly.',
        });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
        });
        
        // Close dialog after 3 seconds on success
        setTimeout(() => {
          onClose();
          setSubmitStatus({});
        }, 3000);
      } else {
        throw new Error(data.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog 
      open={open} 
      onClose={isSubmitting ? undefined : onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
        }
      }}
    >
      {/* Header with gradient background */}
      <Box 
        sx={{ 
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          p: 3,
          color: 'white',
          position: 'relative',
        }}
      >
        <Box component="div" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h5" fontWeight={700} component="div" gutterBottom>
            Book a Demo
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9, maxWidth: '90%' }}>
            Get a personalized walkthrough of HireGenix's powerful recruitment platform
          </Typography>
        </Box>
        
        {/* Decorative circles */}
        <Box 
          sx={{ 
            position: 'absolute', 
            top: -20, 
            right: -20, 
            width: 100, 
            height: 100, 
            borderRadius: '50%', 
            background: 'rgba(255,255,255,0.1)',
          }} 
        />
        <Box 
          sx={{ 
            position: 'absolute', 
            bottom: -30, 
            right: 40, 
            width: 60, 
            height: 60, 
            borderRadius: '50%', 
            background: 'rgba(255,255,255,0.1)',
          }} 
        />
        
        {!isSubmitting && (
          <IconButton 
            edge="end" 
            color="inherit" 
            onClick={onClose} 
            aria-label="close"
            sx={{ 
              position: 'absolute',
              top: 8,
              right: 8,
              color: 'white',
              bgcolor: 'rgba(255,255,255,0.2)',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.3)',
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        )}
      </Box>
      
      <DialogContent sx={{ p: 3, pt: 4 }}>
        {submitStatus.message && (
          <Alert 
            severity={submitStatus.success ? "success" : "error"}
            sx={{ 
              mb: 3,
              borderRadius: 2,
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            }}
          >
            {submitStatus.message}
          </Alert>
        )}
        
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                disabled={isSubmitting}
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
            
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                disabled={isSubmitting}
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
            
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="company"
                label="Company Name"
                name="company"
                autoComplete="organization"
                value={formData.company}
                onChange={handleChange}
                error={!!errors.company}
                helperText={errors.company}
                disabled={isSubmitting}
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
            
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
                disabled={isSubmitting}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon color="primary" />
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
          </Grid>
        </Box>
        
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant="caption" color="text.secondary">
            By submitting this form, you agree to our <Box component="span" sx={{ textDecoration: 'underline' }}>Privacy Policy</Box> and <Box component="span" sx={{ textDecoration: 'underline' }}>Terms of Service</Box>.
          </Typography>
        </Box>
      </DialogContent>
      
      <DialogActions 
        sx={{ 
          px: 3, 
          pb: 3,
          pt: 0,
          justifyContent: 'center',
        }}
      >
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          disabled={isSubmitting}
          fullWidth
          size="large"
          startIcon={isSubmitting ? undefined : <SendIcon />}
          sx={{ 
            borderRadius: 2,
            py: 1.5,
            fontWeight: 600,
            boxShadow: '0 4px 14px rgba(240, 81, 38, 0.4)',
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          }}
        >
          {isSubmitting ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            'Submit Request'
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DemoRequestDialog;
