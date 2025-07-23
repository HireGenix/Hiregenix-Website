'use client';

import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Button, 
  Chip, 
  Avatar, 
  Grid,
  useTheme,
  alpha
} from '@mui/material';
import {
  Person as PersonIcon
} from '@mui/icons-material';

export const DashboardCandidatesTab: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Candidates Tab */}
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
                Candidate Pipeline
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Chip label="All Stages" size="small" color="primary" />
                <Chip label="Filter" size="small" variant="outlined" />
              </Box>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 2, mb: 3, overflowX: 'auto', pb: 1 }}>
              {[
                { stage: 'New Applications', count: 24, color: theme.palette.info.light },
                { stage: 'Screening', count: 18, color: theme.palette.warning.light },
                { stage: 'Interview', count: 12, color: theme.palette.secondary.light },
                { stage: 'Assessment', count: 8, color: theme.palette.primary.light },
                { stage: 'Final Round', count: 5, color: theme.palette.success.light },
                { stage: 'Offer', count: 3, color: theme.palette.success.main }
              ].map((stage, idx) => (
                <Paper
                  key={idx}
                  elevation={0}
                  sx={{
                    p: 2,
                    minWidth: 160,
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: alpha(stage.color, 0.3),
                    backgroundColor: alpha(stage.color, 0.05)
                  }}
                >
                  <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                    {stage.stage}
                  </Typography>
                  <Typography variant="h4" fontWeight={700} color={stage.color}>
                    {stage.count}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    candidates
                  </Typography>
                </Paper>
              ))}
            </Box>
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
                Recent Candidates
              </Typography>
              <Button size="small" endIcon={<PersonIcon />}>
                Add Candidate
              </Button>
            </Box>
            
            {[
              { 
                name: 'Emily Johnson', 
                position: 'Senior Frontend Developer',
                avatar: '/avatars/avatar1.jpg',
                stage: 'Interview Scheduled',
                stageColor: 'primary',
                date: '2 days ago',
                tags: ['React', 'TypeScript']
              },
              { 
                name: 'Michael Chen', 
                position: 'Product Manager',
                avatar: '/avatars/avatar2.jpg',
                stage: 'Assessment',
                stageColor: 'secondary',
                date: '3 days ago',
                tags: ['Product', 'Agile']
              },
              { 
                name: 'Sarah Williams', 
                position: 'Data Scientist',
                avatar: '/avatars/avatar3.jpg',
                stage: 'New Application',
                stageColor: 'info',
                date: '5 days ago',
                tags: ['Python', 'ML']
              },
              { 
                name: 'David Rodriguez', 
                position: 'UX Designer',
                avatar: '/team/david-rodriguez.jpg',
                stage: 'Screening',
                stageColor: 'warning',
                date: '1 week ago',
                tags: ['Figma', 'UI/UX']
              },
              { 
                name: 'Jessica Williams', 
                position: 'Backend Developer',
                avatar: '/team/jessica-williams.jpg',
                stage: 'Final Round',
                stageColor: 'success',
                date: '1 week ago',
                tags: ['Node.js', 'MongoDB']
              }
            ].map((candidate, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 1.5,
                  borderRadius: 2,
                  mb: 1,
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.05),
                  },
                }}
              >
                <Avatar src={candidate.avatar} sx={{ width: 40, height: 40, mr: 2 }} />
                <Box sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body1" fontWeight={500}>
                      {candidate.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {candidate.date}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {candidate.position}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Chip
                      size="small"
                      label={candidate.stage}
                      color={candidate.stageColor as any}
                      variant="outlined"
                      sx={{ height: 24, mr: 1 }}
                    />
                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                      {candidate.tags.map((tag, idx) => (
                        <Chip
                          key={idx}
                          size="small"
                          label={tag}
                          sx={{ 
                            height: 24,
                            backgroundColor: alpha(theme.palette.grey[500], 0.1),
                            fontSize: '0.7rem'
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardCandidatesTab;
