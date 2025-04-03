'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Divider,
  CircularProgress,
  alpha,
  useTheme
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  ArrowBack as ArrowBackIcon,
  Home as HomeIcon,
  Search as SearchIcon
} from '@mui/icons-material';
import { Layout } from '@/components/Layout';
import { SEOMetadata } from '@/components/SEO';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Define job interface
interface Job {
  id: string;
  title: string;
  companyName?: string;
}

export default function ApplicationSuccessPage() {
  const theme = useTheme();
  const params = useParams();
  const jobId = params.id as string;
  
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  // Fetch job details from API
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        
        const response = await fetch(`/api/jobs/${jobId}`);
        
        if (response.ok) {
          const data = await response.json();
          
          // Extract only the needed job details
          setJob({
            id: data.id,
            title: data.title,
            companyName: data.companyName
          });
        } else {
          // If job not found, just set to null
          setJob(null);
        }
      } catch (err) {
        console.error('Error fetching job details:', err);
        setJob(null);
      } finally {
        setLoading(false);
      }
    };
    
    if (jobId) {
      fetchJobDetails();
    }
  }, [jobId]);
  
  // SEO data
  const seoData = {
    title: 'Application Submitted Successfully - HireGenix',
    description: 'Your job application has been submitted successfully. Thank you for applying to HireGenix.',
    keywords: 'application submitted, job application, success, HireGenix',
  };
  
  return (
    <Layout>
      <SEOMetadata seoData={seoData} />
      
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 8 } }}>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Paper
            sx={{
              p: { xs: 4, md: 5 },
              borderRadius: 2,
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                backgroundColor: alpha(theme.palette.success.main, 0.1),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3,
              }}
            >
              <CheckCircleIcon
                color="success"
                sx={{ fontSize: 40 }}
              />
            </Box>
            
            <Typography variant="h4" component="h1" gutterBottom>
              Application Submitted!
            </Typography>
            
            <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
              Thank you for applying{job ? ` for the ${job.title} position` : ''}
              {job?.companyName ? ` at ${job.companyName}` : ''}
            </Typography>
            
            <Divider sx={{ my: 4 }} />
            
            <Box sx={{ maxWidth: 600, mx: 'auto' }}>
              <Typography variant="body1" paragraph>
                We've received your application and will review it shortly. If your qualifications match our requirements, our recruiting team will contact you for the next steps.
              </Typography>
              
              <Typography variant="body1" paragraph>
                In the meantime, you can explore more job opportunities or check the status of your application in your profile.
              </Typography>
              
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: alpha(theme.palette.primary.main, 0.05),
                  mb: 4,
                  mt: 4,
                }}
              >
                <Typography variant="subtitle1" gutterBottom>
                  What happens next?
                </Typography>
                <Typography variant="body2" align="left" sx={{ mb: 1 }}>
                  1. Our team will review your application (typically within 1-2 weeks)
                </Typography>
                <Typography variant="body2" align="left" sx={{ mb: 1 }}>
                  2. If selected, you'll receive an email invitation for an initial interview
                </Typography>
                <Typography variant="body2" align="left">
                  3. The interview process may include technical assessments and team interviews
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, mt: 4 }}>
              <Button
                component={Link}
                href={`/careers/${jobId}`}
                variant="outlined"
                color="primary"
                startIcon={<ArrowBackIcon />}
              >
                Back to Job Details
              </Button>
              
              <Button
                component={Link}
                href="/careers"
                variant="outlined"
                color="primary"
                startIcon={<SearchIcon />}
              >
                Browse More Jobs
              </Button>
              
              <Button
                component={Link}
                href="/"
                variant="contained"
                color="primary"
                startIcon={<HomeIcon />}
              >
                Return to Home
              </Button>
            </Box>
          </Paper>
        )}
      </Container>
    </Layout>
  );
}
