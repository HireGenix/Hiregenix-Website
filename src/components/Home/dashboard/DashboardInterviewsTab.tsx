'use client';

import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Button, 
  Chip, 
  Grid,
  useTheme,
  alpha
} from '@mui/material';
import {
  VideoCall as VideoCallIcon,
  Person as PersonIcon,
  Schedule as ScheduleIcon
} from '@mui/icons-material';

export const DashboardInterviewsTab: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Interviews Tab */}
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
                Upcoming Interviews
              </Typography>
              <Button size="small" variant="contained" color="primary">
                Schedule New
              </Button>
            </Box>
            
            <Grid container spacing={2}>
              {[
                { 
                  candidate: 'Emily Johnson', 
                  position: 'Frontend Developer',
                  date: 'Today',
                  time: '2:00 PM',
                  interviewers: ['Sarah J.', 'Michael C.'],
                  type: 'Technical',
                  color: theme.palette.primary.main
                },
                { 
                  candidate: 'David Rodriguez', 
                  position: 'UX Designer',
                  date: 'Today',
                  time: '4:30 PM',
                  interviewers: ['Jessica W.'],
                  type: 'Portfolio Review',
                  color: theme.palette.secondary.main
                },
                { 
                  candidate: 'Michael Chen', 
                  position: 'Product Manager',
                  date: 'Tomorrow',
                  time: '10:00 AM',
                  interviewers: ['Sarah J.', 'David R.'],
                  type: 'Final Round',
                  color: theme.palette.success.main
                }
              ].map((interview, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: alpha(interview.color, 0.3),
                      backgroundColor: alpha(interview.color, 0.05),
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {interview.candidate}
                      </Typography>
                      <Chip
                        size="small"
                        label={interview.type}
                        sx={{ 
                          backgroundColor: alpha(interview.color, 0.1),
                          color: interview.color,
                          height: 24
                        }}
                      />
                    </Box>
                    
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {interview.position}
                    </Typography>
                    
                    <Box sx={{ mt: 2, mb: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Box
                          sx={{
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            backgroundColor: alpha(interview.color, 0.1),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 1
                          }}
                        >
                          <ScheduleIcon sx={{ fontSize: 14, color: interview.color }} />
                        </Box>
                        <Typography variant="body2">
                          {interview.date} at {interview.time}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box
                          sx={{
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            backgroundColor: alpha(interview.color, 0.1),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 1
                          }}
                        >
                          <PersonIcon sx={{ fontSize: 14, color: interview.color }} />
                        </Box>
                        <Typography variant="body2">
                          {interview.interviewers.join(', ')}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 'auto', pt: 2 }}>
                      <Button size="small" variant="outlined">
                        Reschedule
                      </Button>
                      <Button size="small" variant="contained" color="primary">
                        Join
                      </Button>
                    </Box>
                  </Paper>
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
                Interview Schedule
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Chip label="This Week" size="small" color="primary" />
                <Chip label="Next Week" size="small" variant="outlined" />
              </Box>
            </Box>
            
            {[
              { 
                day: 'Monday, April 5',
                interviews: [
                  { time: '9:00 AM', candidate: 'Alex Thompson', position: 'Backend Developer', type: 'Technical' },
                  { time: '11:30 AM', candidate: 'Priya Patel', position: 'UX Researcher', type: 'Initial' },
                  { time: '3:00 PM', candidate: 'James Wilson', position: 'DevOps Engineer', type: 'Technical' }
                ]
              },
              { 
                day: 'Tuesday, April 6',
                interviews: [
                  { time: '10:00 AM', candidate: 'Sophia Garcia', position: 'Product Manager', type: 'Final Round' },
                  { time: '2:00 PM', candidate: 'Noah Kim', position: 'Data Analyst', type: 'Technical' }
                ]
              },
              { 
                day: 'Wednesday, April 7',
                interviews: [
                  { time: '9:30 AM', candidate: 'Emma Davis', position: 'Marketing Specialist', type: 'Initial' },
                  { time: '1:00 PM', candidate: 'Liam Johnson', position: 'Frontend Developer', type: 'Technical' },
                  { time: '4:00 PM', candidate: 'Olivia Martinez', position: 'HR Manager', type: 'Final Round' }
                ]
              }
            ].map((day, dayIndex) => (
              <Box key={dayIndex} sx={{ mb: 3 }}>
                <Typography 
                  variant="subtitle1" 
                  fontWeight={600} 
                  sx={{ 
                    mb: 1.5, 
                    pb: 1, 
                    borderBottom: '1px solid', 
                    borderColor: 'divider' 
                  }}
                >
                  {day.day}
                </Typography>
                
                {day.interviews.map((interview, interviewIndex) => (
                  <Box 
                    key={interviewIndex}
                    sx={{
                      display: 'flex',
                      p: 1.5,
                      borderRadius: 2,
                      mb: 1,
                      '&:hover': {
                        backgroundColor: alpha(theme.palette.primary.main, 0.05),
                      },
                    }}
                  >
                    <Box 
                      sx={{ 
                        width: 100, 
                        fontWeight: 500,
                        color: theme.palette.text.primary
                      }}
                    >
                      {interview.time}
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="body1" fontWeight={500}>
                        {interview.candidate}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
                          {interview.position}
                        </Typography>
                        <Chip 
                          size="small" 
                          label={interview.type} 
                          color={
                            interview.type === 'Technical' ? 'primary' :
                            interview.type === 'Final Round' ? 'success' : 'info'
                          }
                          variant="outlined"
                          sx={{ height: 20 }}
                        />
                      </Box>
                    </Box>
                    <Box>
                      <Button size="small" startIcon={<VideoCallIcon />} variant="outlined">
                        Join
                      </Button>
                    </Box>
                  </Box>
                ))}
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardInterviewsTab;
