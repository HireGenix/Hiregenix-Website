'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  InputAdornment,
  MenuItem,
  Button,
  Chip,
  Pagination,
  CircularProgress,
  Divider,
  alpha,
  useTheme
} from '@mui/material';
import {
  Search as SearchIcon,
  LocationOn as LocationIcon,
  Work as WorkIcon,
  FilterAlt as FilterIcon,
  Sort as SortIcon,
  Clear as ClearIcon
} from '@mui/icons-material';
import { Layout } from '@/components/Layout';
import { SEOMetadata } from '@/components/SEO';
import { motion } from 'framer-motion';
import Link from 'next/link';

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

export default function CareersPage() {
  const theme = useTheme();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Filter states
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [locationFilter, setLocationFilter] = useState<string>('');
  const [typeFilter, setTypeFilter] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('newest');
  
  // Pagination
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const jobsPerPage = 10;
  
  // Locations for filter
  const [locations, setLocations] = useState<string[]>([]);
  
  // Fetch jobs from API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        
        // Build query parameters
        const params = new URLSearchParams();
        if (searchTerm) params.append('search', searchTerm);
        if (locationFilter) params.append('location', locationFilter);
        if (typeFilter) params.append('type', typeFilter);
        params.append('page', page.toString());
        params.append('limit', jobsPerPage.toString());
        
        if (sortBy === 'newest') {
          params.append('sortBy', 'createdAt');
          params.append('sortOrder', 'desc');
        } else if (sortBy === 'oldest') {
          params.append('sortBy', 'createdAt');
          params.append('sortOrder', 'asc');
        }
        
        const response = await fetch(`/api/jobs?${params.toString()}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        
        const data = await response.json();
        
        if (data.jobs && Array.isArray(data.jobs)) {
          setJobs(data.jobs);
          
          // Extract unique locations for filter
          const uniqueLocations = Array.from(
            new Set(data.jobs.map((job: Job) => job.location).filter(Boolean))
          );
          setLocations(uniqueLocations as string[]);
          
          // Calculate total pages
          if (data.meta && data.meta.total) {
            setTotalPages(Math.ceil(data.meta.total / jobsPerPage));
          } else {
            setTotalPages(Math.ceil(data.jobs.length / jobsPerPage));
          }
          
          setError(null);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setError('Failed to load jobs. Please try again later.');
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchJobs();
  }, [searchTerm, locationFilter, typeFilter, sortBy, page]);
  
  // Handle page change
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    // Scroll to top when changing page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setLocationFilter('');
    setTypeFilter('');
    setSortBy('newest');
    setPage(1);
  };
  
  // SEO data
  const seoData = {
    title: 'Careers at HireGenix - Join Our Team',
    description: 'Explore exciting career opportunities at HireGenix. Find your dream job and join our innovative team.',
    keywords: 'careers, jobs, hiring, employment, opportunities, HireGenix',
  };
  
  return (
    <Layout>
      <SEOMetadata seoData={seoData} />
      
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          py: { xs: 8, md: 12 },
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: 'white',
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
            opacity: 0.1,
            backgroundImage: 'url(/hero-pattern.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1,
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                mb: 2,
                background: 'linear-gradient(90deg, #ffffff 0%, #f0f0ff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 10px rgba(0,0,0,0.1)',
                lineHeight: 1.2,
              }}
            >
              Join Our Team
            </Typography>
            <Typography
              variant="h2"
              component="p"
              sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                fontWeight: 400,
                mb: 4,
                opacity: 0.9,
                maxWidth: 700,
                mx: 'auto',
              }}
            >
              Explore exciting career opportunities at HireGenix and be part of our mission to transform recruitment with AI.
            </Typography>
          </Box>
        </Container>
      </Box>
      
      {/* Jobs Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, background: theme.palette.background.default }}>
        <Container maxWidth="lg">
          {/* Filters */}
          <Paper
            elevation={0}
            sx={{
              p: 3,
              mb: 4,
              borderRadius: 2,
              background: alpha(theme.palette.primary.main, 0.03),
              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setPage(1); // Reset to first page on search
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  select
                  fullWidth
                  placeholder="Location"
                  value={locationFilter}
                  onChange={(e) => {
                    setLocationFilter(e.target.value);
                    setPage(1); // Reset to first page on filter change
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  size="small"
                >
                  <MenuItem value="">All Locations</MenuItem>
                  {locations.map((location) => (
                    <MenuItem key={location} value={location}>
                      {location}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  select
                  fullWidth
                  placeholder="Job Type"
                  value={typeFilter}
                  onChange={(e) => {
                    setTypeFilter(e.target.value);
                    setPage(1); // Reset to first page on filter change
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <WorkIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  size="small"
                >
                  <MenuItem value="">All Types</MenuItem>
                  <MenuItem value="FULL_TIME">Full Time</MenuItem>
                  <MenuItem value="PART_TIME">Part Time</MenuItem>
                  <MenuItem value="CONTRACT">Contract</MenuItem>
                  <MenuItem value="INTERNSHIP">Internship</MenuItem>
                  <MenuItem value="TEMPORARY">Temporary</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <TextField
                  select
                  fullWidth
                  placeholder="Sort By"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SortIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  size="small"
                >
                  <MenuItem value="newest">Newest</MenuItem>
                  <MenuItem value="oldest">Oldest</MenuItem>
                </TextField>
              </Grid>
              
              {/* Clear Filters Button */}
              {(searchTerm || locationFilter || typeFilter || sortBy !== 'newest') && (
                <Grid item xs={12} sm={6} md={12}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                      variant="text"
                      color="primary"
                      startIcon={<ClearIcon />}
                      onClick={clearFilters}
                      size="small"
                    >
                      Clear Filters
                    </Button>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Paper>
          
          {/* Job Listings */}
          <Box>
            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
                <CircularProgress />
              </Box>
            ) : error ? (
              <Paper sx={{ p: 4, textAlign: 'center', color: 'error.main' }}>
                {error}
              </Paper>
            ) : jobs.length === 0 ? (
              <Paper sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h6" color="text.secondary">
                  No jobs found matching your criteria
                </Typography>
                <Button
                  variant="text"
                  color="primary"
                  onClick={clearFilters}
                  sx={{ mt: 2 }}
                >
                  Clear Filters
                </Button>
              </Paper>
            ) : (
              <>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {jobs.length} {jobs.length === 1 ? 'Job' : 'Jobs'} Found
                </Typography>
                
                {jobs.map((job, index) => (
                  <Paper
                    key={job.id}
                    sx={{
                      mb: 3,
                      p: 3,
                      borderRadius: 2,
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
                      }
                    }}
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, flexWrap: 'wrap' }}>
                          <Typography variant="h6" component="h3" sx={{ mr: 2 }}>
                            {job.title}
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {job.type && (
                              <Chip
                                label={formatJobType(job.type)}
                                size="small"
                                color="primary"
                                variant="outlined"
                              />
                            )}
                            <Chip
                              label={daysAgo(job.createdAt)}
                              size="small"
                              variant="outlined"
                            />
                          </Box>
                        </Box>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, color: 'text.secondary', flexWrap: 'wrap', gap: 2 }}>
                          {job.companyName && (
                            <Typography variant="body2">
                              {job.companyName}
                            </Typography>
                          )}
                          {job.location && (
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <LocationIcon fontSize="small" sx={{ mr: 0.5 }} />
                              <Typography variant="body2">{job.location}</Typography>
                            </Box>
                          )}
                          {job.salary && (
                            <Typography variant="body2">
                              {job.salary}
                            </Typography>
                          )}
                        </Box>
                        
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {job.description.length > 300
                            ? `${job.description.substring(0, 300)}...`
                            : job.description}
                        </Typography>
                        
                        {job.skills && job.skills.length > 0 && (
                          <Box sx={{ mb: 2 }}>
                            {job.skills.map((skill) => (
                              <Chip
                                key={skill}
                                label={skill}
                                size="small"
                                sx={{ mr: 1, mb: 1 }}
                              />
                            ))}
                          </Box>
                        )}
                        
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                          <Button
                            component={Link}
                            href={`/careers/${job.id}`}
                            variant="text"
                            color="primary"
                          >
                            View Details
                          </Button>
                          
                          <Button
                            variant="contained"
                            color="primary"
                            href={job.applyUrl || `/careers/${job.id}/apply`}
                            target={job.applyUrl ? "_blank" : "_self"}
                            rel={job.applyUrl ? "noopener noreferrer" : ""}
                          >
                            Apply Now
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>
                ))}
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Pagination
                      count={totalPages}
                      page={page}
                      onChange={handlePageChange}
                      color="primary"
                      size="large"
                      showFirstButton
                      showLastButton
                    />
                  </Box>
                )}
              </>
            )}
          </Box>
        </Container>
      </Box>
      
      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: alpha(theme.palette.primary.main, 0.05),
          borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: 800,
              mx: 'auto',
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '1.75rem', md: '2.25rem' },
              }}
            >
              Don't See the Right Fit?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: { xs: '1rem', md: '1.125rem' },
              }}
            >
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={Link}
              href="/contact"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 50,
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
