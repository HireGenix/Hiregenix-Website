'use client';

import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Button, 
  Chip, 
  Grid, 
  LinearProgress,
  useTheme,
  alpha
} from '@mui/material';
import {
  Search as SearchIcon,
  People as PeopleIcon,
  VideoCall as VideoCallIcon,
  CheckCircle as CheckCircleIcon
} from '@mui/icons-material';

export const DashboardJobsTab: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Jobs Tab */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              borderRadius: 2,
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
              mb: 3
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" fontWeight={600}>
                Job Postings Overview
              </Typography>
              <Button size="small" variant="contained" color="primary">
                Post New Job
              </Button>
            </Box>
            
            <Grid container spacing={2}>
              {[
                { label: 'Active Jobs', value: '12', icon: <SearchIcon />, color: theme.palette.primary.main },
                { label: 'Total Applicants', value: '248', icon: <PeopleIcon />, color: theme.palette.secondary.main },
                { label: 'Interviews Scheduled', value: '36', icon: <VideoCallIcon />, color: theme.palette.info.main },
                { label: 'Positions Filled', value: '8', icon: <CheckCircleIcon />, color: theme.palette.success.main }
              ].map((stat, index) => (
                <Grid item xs={6} sm={3} key={index}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: alpha(stat.color, 0.3),
                      backgroundColor: alpha(stat.color, 0.05),
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: alpha(stat.color, 0.1),
                        color: stat.color,
                        mb: 1
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography variant="h5" fontWeight={700} align="center">
                      {stat.value}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" align="center">
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
        
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              borderRadius: 2,
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" fontWeight={600}>
                Active Job Listings
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Chip label="All Departments" size="small" variant="outlined" />
                <Chip label="All Locations" size="small" variant="outlined" />
              </Box>
            </Box>
            
            {[
              {
                title: 'Senior Frontend Developer',
                department: 'Engineering',
                location: 'Remote',
                applicants: 45,
                qualified: 12,
                daysActive: 7,
                urgent: true
              },
              {
                title: 'Product Manager',
                department: 'Product',
                location: 'New York, NY',
                applicants: 38,
                qualified: 9,
                daysActive: 5,
                urgent: false
              },
              {
                title: 'Data Scientist',
                department: 'Data',
                location: 'San Francisco, CA',
                applicants: 29,
                qualified: 8,
                daysActive: 3,
                urgent: false
              },
              {
                title: 'UX Designer',
                department: 'Design',
                location: 'Remote',
                applicants: 52,
                qualified: 15,
                daysActive: 10,
                urgent: true
              },
              {
                title: 'DevOps Engineer',
                department: 'Engineering',
                location: 'Austin, TX',
                applicants: 18,
                qualified: 6,
                daysActive: 2,
                urgent: false
              }
            ].map((job, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  p: 2,
                  mb: 2,
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: job.urgent ? alpha(theme.palette.error.main, 0.3) : 'divider',
                  backgroundColor: job.urgent ? alpha(theme.palette.error.main, 0.02) : 'transparent'
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body1" fontWeight={600}>
                      {job.title}
                    </Typography>
                    {job.urgent && (
                      <Chip
                        size="small"
                        label="Urgent"
                        color="error"
                        sx={{ ml: 1, height: 24 }}
                      />
                    )}
                  </Box>
                  <Chip
                    size="small"
                    label={`${job.daysActive}d`}
                    sx={{ 
                      height: 24,
                      backgroundColor: alpha(theme.palette.info.main, 0.1),
                      color: theme.palette.info.main
                    }}
                  />
                </Box>
                <Box sx={{ display: 'flex', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
                    {job.department}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {job.location}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Applicants: {job.applicants}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={(job.qualified / job.applicants) * 100}
                      sx={{ 
                        height: 6, 
                        borderRadius: 3, 
                        mt: 0.5, 
                        mb: 0.5, 
                        width: 120,
                        backgroundColor: alpha(theme.palette.primary.main, 0.1)
                      }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      Qualified: {job.qualified}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button size="small" variant="outlined">
                      Edit
                    </Button>
                    <Button size="small" variant="contained" color="primary">
                      View
                    </Button>
                  </Box>
                </Box>
              </Paper>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardJobsTab;
