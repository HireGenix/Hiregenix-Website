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
  Assessment as AssessmentIcon
} from '@mui/icons-material';

export const DashboardAssessmentsTab: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Assessments Tab */}
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
                Assessment Templates
              </Typography>
              <Button size="small" variant="contained" color="primary">
                Create New
              </Button>
            </Box>
            
            <Grid container spacing={2}>
              {[
                { 
                  title: 'Frontend Developer', 
                  questions: 25, 
                  duration: '45 min',
                  skills: ['JavaScript', 'React', 'CSS'],
                  color: theme.palette.primary.main
                },
                { 
                  title: 'Backend Developer', 
                  questions: 30, 
                  duration: '60 min',
                  skills: ['Node.js', 'Python', 'SQL'],
                  color: theme.palette.secondary.main
                },
                { 
                  title: 'Product Manager', 
                  questions: 20, 
                  duration: '40 min',
                  skills: ['Strategy', 'Agile', 'UX'],
                  color: theme.palette.info.main
                },
                { 
                  title: 'Data Scientist', 
                  questions: 28, 
                  duration: '55 min',
                  skills: ['Python', 'ML', 'Statistics'],
                  color: theme.palette.success.main
                }
              ].map((template, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: alpha(template.color, 0.3),
                      backgroundColor: alpha(template.color, 0.05),
                      height: '100%'
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {template.title}
                      </Typography>
                      <AssessmentIcon sx={{ color: template.color }} />
                    </Box>
                    
                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                      <Box>
                        <Typography variant="caption" color="text.secondary">
                          Questions
                        </Typography>
                        <Typography variant="body2" fontWeight={600}>
                          {template.questions}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="caption" color="text.secondary">
                          Duration
                        </Typography>
                        <Typography variant="body2" fontWeight={600}>
                          {template.duration}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                      {template.skills.map((skill, idx) => (
                        <Chip
                          key={idx}
                          label={skill}
                          size="small"
                          sx={{ 
                            height: 24,
                            backgroundColor: alpha(template.color, 0.1),
                            color: template.color,
                            fontSize: '0.7rem'
                          }}
                        />
                      ))}
                    </Box>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                      <Button size="small" variant="outlined" sx={{ minWidth: 0, px: 1 }}>
                        Edit
                      </Button>
                      <Button size="small" variant="contained" sx={{ minWidth: 0, px: 1 }}>
                        Use
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
                Recent Assessment Results
              </Typography>
              <Button size="small" endIcon={<AssessmentIcon />}>
                View All
              </Button>
            </Box>
            
            {[
              { 
                candidate: 'Emily Johnson', 
                position: 'Frontend Developer',
                score: 92,
                date: '2 days ago',
                status: 'Passed'
              },
              { 
                candidate: 'Michael Chen', 
                position: 'Product Manager',
                score: 88,
                date: '3 days ago',
                status: 'Passed'
              },
              { 
                candidate: 'Sarah Williams', 
                position: 'Data Scientist',
                score: 78,
                date: '5 days ago',
                status: 'Review'
              },
              { 
                candidate: 'David Rodriguez', 
                position: 'Backend Developer',
                score: 65,
                date: '1 week ago',
                status: 'Failed'
              }
            ].map((result, index) => (
              <Box
                key={index}
                sx={{
                  p: 2,
                  mb: 2,
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.02),
                  },
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Box>
                    <Typography variant="body1" fontWeight={600}>
                      {result.candidate}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {result.position}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'right' }}>
                    <Chip
                      size="small"
                      label={result.status}
                      color={
                        result.status === 'Passed' ? 'success' : 
                        result.status === 'Failed' ? 'error' : 'warning'
                      }
                      sx={{ mb: 1 }}
                    />
                    <Typography variant="caption" display="block" color="text.secondary">
                      {result.date}
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <Typography variant="body2" sx={{ mr: 2 }}>
                    Score: <strong>{result.score}%</strong>
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={result.score}
                    sx={{ 
                      flexGrow: 1,
                      height: 8, 
                      borderRadius: 4,
                      backgroundColor: alpha(theme.palette.grey[500], 0.1),
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: 
                          result.score >= 80 ? theme.palette.success.main :
                          result.score >= 70 ? theme.palette.warning.main :
                          theme.palette.error.main
                      }
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardAssessmentsTab;
