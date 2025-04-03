'use client';

import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Tabs, 
  Tab, 
  Button, 
  Chip, 
  Avatar, 
  Grid, 
  LinearProgress,
  IconButton,
  useTheme,
  alpha
} from '@mui/material';
import {
  Person as PersonIcon,
  Assessment as AssessmentIcon,
  VideoCall as VideoCallIcon,
  Search as SearchIcon,
  MoreVert as MoreVertIcon,
  CheckCircle as CheckCircleIcon,
  Schedule as ScheduleIcon,
  Close as CloseIcon,
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
  Star as StarIcon,
  StarBorder as StarBorderIcon,
  TrendingUp as TrendingUpIcon,
  Insights as InsightsIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Settings as SettingsIcon,
  Notifications as NotificationsIcon,
  Help as HelpIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Dashboard tabs
const dashboardTabs = [
  { label: 'Overview', icon: <DashboardIcon fontSize="small" /> },
  { label: 'Candidates', icon: <PersonIcon fontSize="small" /> },
  { label: 'Jobs', icon: <SearchIcon fontSize="small" /> },
  { label: 'Assessments', icon: <AssessmentIcon fontSize="small" /> },
  { label: 'Interviews', icon: <VideoCallIcon fontSize="small" /> },
  { label: 'Analytics', icon: <InsightsIcon fontSize="small" /> },
];

// Candidate data
const candidates = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Senior Frontend Developer',
    avatar: '/avatars/avatar1.jpg',
    matchScore: 92,
    status: 'Interview Scheduled',
    statusColor: 'primary',
    skills: ['React', 'TypeScript', 'Node.js'],
    change: 'up'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Product Manager',
    avatar: '/avatars/avatar2.jpg',
    matchScore: 88,
    status: 'Assessment Completed',
    statusColor: 'success',
    skills: ['Product Strategy', 'Agile', 'UX'],
    change: 'up'
  },
  {
    id: 3,
    name: 'Sarah Williams',
    position: 'Data Scientist',
    avatar: '/avatars/avatar3.jpg',
    matchScore: 85,
    status: 'New Application',
    statusColor: 'info',
    skills: ['Python', 'Machine Learning', 'SQL'],
    change: 'down'
  },
];

// Job data
const jobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    applicants: 45,
    qualified: 12,
    daysActive: 7
  },
  {
    id: 2,
    title: 'Product Manager',
    department: 'Product',
    location: 'New York, NY',
    applicants: 38,
    qualified: 9,
    daysActive: 5
  },
  {
    id: 3,
    title: 'Data Scientist',
    department: 'Data',
    location: 'San Francisco, CA',
    applicants: 29,
    qualified: 8,
    daysActive: 3
  },
];

// Analytics data
const analyticsData = [
  { label: 'Time-to-Hire', value: '18 days', change: -5, isPositive: true },
  { label: 'Cost-per-Hire', value: '$3,200', change: -12, isPositive: true },
  { label: 'Quality-of-Hire', value: '92%', change: 8, isPositive: true },
  { label: 'Candidate Satisfaction', value: '4.8/5', change: 0.3, isPositive: true },
];

export const DashboardPreview: React.FC = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: 4,
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Dashboard Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
          background: theme.palette.background.paper,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: '8px',
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              mr: 2,
            }}
          >
            H
          </Box>
          <Typography variant="h6" fontWeight={600}>
            HireGenix Dashboard
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton size="small">
            <NotificationsIcon />
          </IconButton>
          <IconButton size="small">
            <HelpIcon />
          </IconButton>
          <IconButton size="small">
            <SettingsIcon />
          </IconButton>
          <Box sx={{ ml: 1, display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ width: 36, height: 36 }}>A</Avatar>
          </Box>
        </Box>
      </Box>

      {/* Dashboard Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTab-root': {
              minHeight: '48px',
              textTransform: 'none',
              fontWeight: 500,
            },
          }}
        >
          {dashboardTabs.map((tab, index) => (
            <Tab
              key={index}
              icon={tab.icon}
              iconPosition="start"
              label={tab.label}
            />
          ))}
        </Tabs>
      </Box>

      {/* Dashboard Content */}
      <Box sx={{ p: 3, flexGrow: 1, background: alpha(theme.palette.background.default, 0.5) }}>
        {activeTab === 0 && (
          <Box>
            {/* Overview Dashboard */}
            <Grid container spacing={3}>
              {/* Analytics Cards */}
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  {analyticsData.map((item, index) => (
                    <Grid item xs={6} md={3} key={index}>
                      <Paper
                        sx={{
                          p: 2,
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          borderRadius: 2,
                          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
                        }}
                      >
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          {item.label}
                        </Typography>
                        <Typography variant="h5" component="div" fontWeight={600} sx={{ mb: 1 }}>
                          {item.value}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
                          <Chip
                            size="small"
                            icon={item.isPositive ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />}
                            label={`${item.isPositive ? '+' : ''}${item.change}%`}
                            color={item.isPositive ? 'success' : 'error'}
                            sx={{ height: 24 }}
                          />
                          <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
                            vs last month
                          </Typography>
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* Top Candidates */}
              <Grid item xs={12} md={7}>
                <Paper
                  sx={{
                    p: 2,
                    height: '100%',
                    borderRadius: 2,
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6" fontWeight={600}>
                      Top Candidates
                    </Typography>
                    <Button size="small" endIcon={<PeopleIcon />}>
                      View All
                    </Button>
                  </Box>
                  
                  {candidates.map((candidate, index) => (
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
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Chip
                              size="small"
                              label={`${candidate.matchScore}% Match`}
                              color="primary"
                              sx={{ 
                                height: 24,
                                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                color: theme.palette.primary.main,
                                fontWeight: 600,
                                mr: 1
                              }}
                            />
                            <IconButton size="small">
                              <MoreVertIcon fontSize="small" />
                            </IconButton>
                          </Box>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {candidate.position}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                          <Chip
                            size="small"
                            label={candidate.status}
                            color={candidate.statusColor as any}
                            variant="outlined"
                            sx={{ height: 24, mr: 1 }}
                          />
                          <Box sx={{ display: 'flex', gap: 0.5 }}>
                            {candidate.skills.map((skill, idx) => (
                              <Chip
                                key={idx}
                                size="small"
                                label={skill}
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

              {/* Active Jobs */}
              <Grid item xs={12} md={5}>
                <Paper
                  sx={{
                    p: 2,
                    height: '100%',
                    borderRadius: 2,
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6" fontWeight={600}>
                      Active Jobs
                    </Typography>
                    <Button size="small" endIcon={<SearchIcon />}>
                      View All
                    </Button>
                  </Box>
                  
                  {jobs.map((job, index) => (
                    <Paper
                      key={index}
                      elevation={0}
                      sx={{
                        p: 1.5,
                        mb: 2,
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'divider',
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body1" fontWeight={600}>
                          {job.title}
                        </Typography>
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
                        <Button size="small" variant="outlined">
                          View
                        </Button>
                      </Box>
                    </Paper>
                  ))}
                </Paper>
              </Grid>
            </Grid>
          </Box>
        )}

        {activeTab === 1 && (
          <Box sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
            <PersonIcon sx={{ fontSize: 40, mb: 2, opacity: 0.7 }} />
            <Typography>Candidates tab content would appear here</Typography>
          </Box>
        )}

        {activeTab === 2 && (
          <Box sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
            <SearchIcon sx={{ fontSize: 40, mb: 2, opacity: 0.7 }} />
            <Typography>Jobs tab content would appear here</Typography>
          </Box>
        )}

        {activeTab === 3 && (
          <Box sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
            <AssessmentIcon sx={{ fontSize: 40, mb: 2, opacity: 0.7 }} />
            <Typography>Assessments tab content would appear here</Typography>
          </Box>
        )}

        {activeTab === 4 && (
          <Box sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
            <VideoCallIcon sx={{ fontSize: 40, mb: 2, opacity: 0.7 }} />
            <Typography>Interviews tab content would appear here</Typography>
          </Box>
        )}

        {activeTab === 5 && (
          <Box sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
            <InsightsIcon sx={{ fontSize: 40, mb: 2, opacity: 0.7 }} />
            <Typography>Analytics tab content would appear here</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default DashboardPreview;
