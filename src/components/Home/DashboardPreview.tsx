'use client';

import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Tabs, 
  Tab, 
  Avatar, 
  IconButton,
  useTheme,
  alpha
} from '@mui/material';
import {
  Person as PersonIcon,
  Assessment as AssessmentIcon,
  VideoCall as VideoCallIcon,
  Search as SearchIcon,
  Insights as InsightsIcon,
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
  Notifications as NotificationsIcon,
  Help as HelpIcon
} from '@mui/icons-material';

// Import tab components
import DashboardOverviewTab from './dashboard/DashboardOverviewTab';
import DashboardCandidatesTab from './dashboard/DashboardCandidatesTab';
import DashboardJobsTab from './dashboard/DashboardJobsTab';
import DashboardAssessmentsTab from './dashboard/DashboardAssessmentsTab';
import DashboardInterviewsTab from './dashboard/DashboardInterviewsTab';
import DashboardAnalyticsTab from './dashboard/DashboardAnalyticsTab';

// Dashboard tabs
const dashboardTabs = [
  { label: 'Overview', icon: <DashboardIcon fontSize="small" /> },
  { label: 'Candidates', icon: <PersonIcon fontSize="small" /> },
  { label: 'Jobs', icon: <SearchIcon fontSize="small" /> },
  { label: 'Assessments', icon: <AssessmentIcon fontSize="small" /> },
  { label: 'Interviews', icon: <VideoCallIcon fontSize="small" /> },
  { label: 'Analytics', icon: <InsightsIcon fontSize="small" /> },
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
        {activeTab === 0 && <DashboardOverviewTab />}
        {activeTab === 1 && <DashboardCandidatesTab />}
        {activeTab === 2 && <DashboardJobsTab />}
        {activeTab === 3 && <DashboardAssessmentsTab />}
        {activeTab === 4 && <DashboardInterviewsTab />}
        {activeTab === 5 && <DashboardAnalyticsTab />}
      </Box>
    </Box>
  );
};

export default DashboardPreview;
