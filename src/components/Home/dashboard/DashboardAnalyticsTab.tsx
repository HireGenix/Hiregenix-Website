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
  TrendingUp as TrendingUpIcon,
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
  Insights as InsightsIcon
} from '@mui/icons-material';

export const DashboardAnalyticsTab: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Analytics Tab */}
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
                Recruitment Performance
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Chip label="Last 30 Days" size="small" color="primary" />
                <Chip label="Last Quarter" size="small" variant="outlined" />
                <Chip label="Last Year" size="small" variant="outlined" />
              </Box>
            </Box>
            
            <Grid container spacing={2}>
              {[
                { 
                  label: 'Time-to-Hire', 
                  value: '18 days', 
                  change: -5, 
                  isPositive: true,
                  color: theme.palette.primary.main,
                  description: 'Average time from application to offer acceptance'
                },
                { 
                  label: 'Cost-per-Hire', 
                  value: '$3,200', 
                  change: -12, 
                  isPositive: true,
                  color: theme.palette.secondary.main,
                  description: 'Average cost of recruiting and hiring a new employee'
                },
                { 
                  label: 'Quality-of-Hire', 
                  value: '92%', 
                  change: 8, 
                  isPositive: true,
                  color: theme.palette.success.main,
                  description: 'Performance rating of new hires after 90 days'
                },
                { 
                  label: 'Candidate Satisfaction', 
                  value: '4.8/5', 
                  change: 0.3, 
                  isPositive: true,
                  color: theme.palette.info.main,
                  description: 'Average rating from candidate experience surveys'
                }
              ].map((metric, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: alpha(metric.color, 0.3),
                      backgroundColor: alpha(metric.color, 0.05),
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="subtitle2" color="text.secondary">
                        {metric.label}
                      </Typography>
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          backgroundColor: alpha(metric.color, 0.1),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: metric.color
                        }}
                      >
                        <TrendingUpIcon fontSize="small" />
                      </Box>
                    </Box>
                    
                    <Typography variant="h4" fontWeight={700} sx={{ mb: 1 }}>
                      {metric.value}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Chip
                        size="small"
                        icon={metric.isPositive ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />}
                        label={`${metric.isPositive ? '+' : ''}${metric.change}%`}
                        color={metric.isPositive ? 'success' : 'error'}
                        sx={{ height: 24, mr: 1 }}
                      />
                      <Typography variant="caption" color="text.secondary">
                        vs last period
                      </Typography>
                    </Box>
                    
                    <Typography variant="caption" color="text.secondary">
                      {metric.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={8}>
          <Paper
            sx={{
              p: 2,
              borderRadius: 2,
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
              mb: { xs: 3, md: 0 }
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" fontWeight={600}>
                Hiring Funnel
              </Typography>
              <Button size="small" endIcon={<InsightsIcon />}>
                Export Report
              </Button>
            </Box>
            
            <Box sx={{ p: 2 }}>
              {/* Funnel visualization */}
              {[
                { stage: 'Applications', count: 1250, percentage: 100, color: theme.palette.info.light },
                { stage: 'Resume Screening', count: 625, percentage: 50, color: theme.palette.primary.light },
                { stage: 'Phone Screening', count: 312, percentage: 25, color: theme.palette.secondary.light },
                { stage: 'Technical Assessment', count: 156, percentage: 12.5, color: theme.palette.warning.light },
                { stage: 'Interview', count: 78, percentage: 6.25, color: theme.palette.error.light },
                { stage: 'Offer', count: 39, percentage: 3.125, color: theme.palette.success.light },
                { stage: 'Hired', count: 25, percentage: 2, color: theme.palette.success.main }
              ].map((stage, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="body2" fontWeight={500}>
                      {stage.stage}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="body2" fontWeight={600} sx={{ mr: 1 }}>
                        {stage.count}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        ({stage.percentage}%)
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      height: 24,
                      backgroundColor: alpha(stage.color, 0.2),
                      borderRadius: 2,
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: `${stage.percentage}%`,
                        backgroundColor: stage.color,
                        borderRadius: 2
                      }}
                    />
                  </Box>
                </Box>
              ))}
              
              <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Conversion Rate (Application to Hire)
                  </Typography>
                  <Typography variant="h6" fontWeight={600} color={theme.palette.success.main}>
                    2.0%
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Average Time in Funnel
                  </Typography>
                  <Typography variant="h6" fontWeight={600}>
                    32 days
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Offer Acceptance Rate
                  </Typography>
                  <Typography variant="h6" fontWeight={600} color={theme.palette.success.main}>
                    64.1%
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              borderRadius: 2,
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
              height: '100%'
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" fontWeight={600}>
                Top Hiring Sources
              </Typography>
              <Chip label="Last 90 Days" size="small" variant="outlined" />
            </Box>
            
            {[
              { source: 'Employee Referrals', count: 42, percentage: 28, color: theme.palette.primary.main },
              { source: 'LinkedIn', count: 38, percentage: 25.3, color: theme.palette.info.main },
              { source: 'Company Website', count: 24, percentage: 16, color: theme.palette.secondary.main },
              { source: 'Indeed', count: 18, percentage: 12, color: theme.palette.warning.main },
              { source: 'University Recruiting', count: 15, percentage: 10, color: theme.palette.success.main },
              { source: 'Other Sources', count: 13, percentage: 8.7, color: theme.palette.grey[500] }
            ].map((source, index) => (
              <Box key={index} sx={{ mb: 2.5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                  <Typography variant="body2" fontWeight={500}>
                    {source.source}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body2" fontWeight={600} sx={{ mr: 1 }}>
                      {source.count}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      ({source.percentage}%)
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    height: 8,
                    backgroundColor: alpha(source.color, 0.2),
                    borderRadius: 4,
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      width: `${source.percentage}%`,
                      backgroundColor: source.color,
                      borderRadius: 4
                    }}
                  />
                </Box>
              </Box>
            ))}
            
            <Box sx={{ mt: 4 }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Key Insights
              </Typography>
              <Box sx={{ p: 1.5, backgroundColor: alpha(theme.palette.primary.main, 0.05), borderRadius: 2, mb: 1.5 }}>
                <Typography variant="body2">
                  Employee referrals have the highest conversion rate at 18.2%
                </Typography>
              </Box>
              <Box sx={{ p: 1.5, backgroundColor: alpha(theme.palette.success.main, 0.05), borderRadius: 2 }}>
                <Typography variant="body2">
                  University recruiting provides the best cost-per-hire at $1,850
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardAnalyticsTab;
