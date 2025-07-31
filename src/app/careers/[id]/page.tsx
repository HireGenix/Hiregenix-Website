'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Chip,
  Button,
  Divider,
  CircularProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  alpha,
  useTheme
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Work as WorkIcon,
  AttachMoney as SalaryIcon,
  Business as BusinessIcon,
  AccessTime as TimeIcon,
  ArrowBack as ArrowBackIcon,
  CheckCircle as CheckCircleIcon,
  Star as StarIcon,
  Share as ShareIcon
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
  description: string;
  location?: string;
  type: string;
  status: string;
  companyName?: string;
  companyLogo?: string;
  salary?: string;
  skills?: string[];
  requirements?: string[];
  benefits?: string[];
  applyUrl?: string;
  createdAt: string;
  updatedAt: string;
}

// Helper function to format job type for display
const formatJobType = (type: string): string => {
  return type.replace('_', ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
};

// Helper function to calculate days ago
const daysAgo = (dateString: string): string => {
  const days = Math.floor((new Date().getTime() - new Date(dateString).getTime()) / (1000 * 3600 * 24));
  return days === 0 ? 'Today' : days === 1 ? 'Yesterday' : `${days} days ago`;
};

export default function JobDetailPage() {
  const theme = useTheme();
  const params = useParams();
  const jobId = params.id as string;
  
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
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
        
        // Process job data
        let processedJob = data;
        
        // Format salary if it's an object
        if (data.salary && typeof data.salary === 'object' && data.salary.min && data.salary.max) {
          processedJob.salary = `$${data.salary.min.toLocaleString()} - $${data.salary.max.toLocaleString()}`;
        }
        
        // Ensure requirements and benefits are arrays
        if (!Array.isArray(processedJob.requirements)) {
          processedJob.requirements = processedJob.requirements 
            ? [processedJob.requirements] 
            : ['Strong communication skills', 'Problem-solving abilities', 'Team player', 'Adaptability'];
        }
        
        if (!Array.isArray(processedJob.benefits)) {
          processedJob.benefits = processedJob.benefits 
            ? [processedJob.benefits] 
            : ['Competitive salary', 'Health insurance', 'Flexible working hours', 'Professional development opportunities'];
        }
        
        setJob(processedJob);
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
  
  // Handle share button click
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: job?.title || 'Job Opportunity',
        text: `Check out this job opportunity: ${job?.title} at ${job?.companyName}`,
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback for browsers that don't support navigator.share
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert('Link copied to clipboard!'))
        .catch((error) => console.error('Could not copy text: ', error));
    }
  };
  
  // SEO data
  const seoData = {
    title: job ? `${job.title} - Career at HireGenix` : 'Job Details - HireGenix',
    description: job ? `Apply for ${job.title} position at ${job.companyName || 'HireGenix'}. ${job.description.substring(0, 150)}...` : 'View job details and apply for positions at HireGenix.',
    keywords: job ? `${job.title}, career, job, hiring, ${job.companyName || 'HireGenix'}, ${job.location || ''}` : 'job details, career, hiring, HireGenix',
  };
  
  return (
    <Layout>
      <SEOMetadata seoData={seoData} />
      
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
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
              href="/careers"
              variant="text"
              color="primary"
              startIcon={<ArrowBackIcon />}
              sx={{ mb: 3 }}
            >
              Back to All Jobs
            </Button>
            
            <Grid container spacing={4}>
              {/* Main content */}
              <Grid item xs={12} md={8}>
                <Paper
                  sx={{
                    p: 4,
                    borderRadius: 2,
                    mb: 4,
                  }}
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2, flexWrap: 'wrap' }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                      {job.title}
                    </Typography>
                    
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<ShareIcon />}
                      onClick={handleShare}
                      sx={{ mt: 1 }}
                    >
                      Share
                    </Button>
                  </Box>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {job.type && (
                      <Chip
                        icon={<WorkIcon />}
                        label={formatJobType(job.type)}
                        color="primary"
                        variant="outlined"
                      />
                    )}
                    {job.location && (
                      <Chip
                        icon={<LocationIcon />}
                        label={job.location}
                        variant="outlined"
                      />
                    )}
                    {job.companyName && (
                      <Chip
                        icon={<BusinessIcon />}
                        label={job.companyName}
                        variant="outlined"
                      />
                    )}
                    <Chip
                      icon={<TimeIcon />}
                      label={`Posted ${daysAgo(job.createdAt)}`}
                      variant="outlined"
                    />
                  </Box>
                  
                  <Divider sx={{ my: 3 }} />
                  
                  <Typography variant="h6" gutterBottom>
                    Job Description
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {job.description}
                  </Typography>
                  
                  {job.requirements && job.requirements.length > 0 && (
                    <>
                      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                        Requirements
                      </Typography>
                      <List>
                        {job.requirements.map((requirement, index) => (
                          <ListItem key={index} sx={{ px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                              <CheckCircleIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={requirement} />
                          </ListItem>
                        ))}
                      </List>
                    </>
                  )}
                  
                  {job.benefits && job.benefits.length > 0 && (
                    <>
                      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                        Benefits
                      </Typography>
                      <List>
                        {job.benefits.map((benefit, index) => (
                          <ListItem key={index} sx={{ px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                              <StarIcon color="secondary" />
                            </ListItemIcon>
                            <ListItemText primary={benefit} />
                          </ListItem>
                        ))}
                      </List>
                    </>
                  )}
                  
                  {job.skills && job.skills.length > 0 && (
                    <>
                      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                        Skills
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        {job.skills.map((skill) => (
                          <Chip
                            key={skill}
                            label={skill}
                            sx={{ mr: 1, mb: 1 }}
                          />
                        ))}
                      </Box>
                    </>
                  )}
                </Paper>
              </Grid>
              
              {/* Sidebar */}
              <Grid item xs={12} md={4}>
                <Box sx={{ position: { md: 'sticky' }, top: { md: 100 } }}>
                  {/* Apply Now Card */}
                  <Card
                    sx={{
                      borderRadius: 2,
                      mb: 3,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    }}
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        Apply for this position
                      </Typography>
                      
                      {job.salary && (
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <SalaryIcon sx={{ mr: 1, color: 'text.secondary' }} />
                          <Typography variant="body1">
                            {job.salary}
                          </Typography>
                        </Box>
                      )}
                      
                      <Typography variant="body2" color="text.secondary" paragraph>
                        Take the next step in your career and join our team. Apply now to get started.
                      </Typography>
                      
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="large"
                        href={job.applyUrl || `/careers/${job.id}/apply`}
                        target={job.applyUrl ? "_blank" : "_self"}
                        rel={job.applyUrl ? "noopener noreferrer" : ""}
                        sx={{ mt: 2 }}
                      >
                        Apply Now
                      </Button>
                    </CardContent>
                  </Card>
                  
                  {/* Company Card */}
                  <Card
                    sx={{
                      borderRadius: 2,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    }}
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        About {job.companyName || 'HireGenix'}
                      </Typography>
                      
                      {job.companyLogo ? (
                        <Box
                          component="img"
                          src={job.companyLogo}
                          alt={job.companyName || 'Company Logo'}
                          sx={{
                            width: '100%',
                            maxHeight: 80,
                            objectFit: 'contain',
                            mb: 2,
                          }}
                        />
                      ) : (
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 80,
                            mb: 2,
                            background: alpha(theme.palette.primary.main, 0.1),
                            borderRadius: 1,
                          }}
                        >
                          <BusinessIcon
                            sx={{
                              fontSize: 40,
                              color: theme.palette.primary.main,
                            }}
                          />
                        </Box>
                      )}
                      
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {job.companyName === 'HireGenix' ? 
                          'HireGenix is a leading AI-powered recruitment platform that helps companies find, assess, and hire the best talent faster and more accurately than ever before.' :
                          `${job.companyName || 'We'} are looking for talented individuals to join our team. Check out our current openings and apply today.`
                        }
                      </Typography>
                      
                      <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                        component={Link}
                        href="/about"
                        sx={{ mt: 1 }}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            </Grid>
            
            {/* Similar Jobs Section */}
            <Box sx={{ mt: 6 }}>
              <Typography variant="h5" gutterBottom>
                Similar Jobs
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Explore more opportunities that match your skills and interests.
              </Typography>
              
              <Button
                component={Link}
                href="/careers"
                variant="contained"
                color="primary"
              >
                View All Jobs
              </Button>
            </Box>
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
