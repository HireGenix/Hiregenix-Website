'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Chip,
  useTheme,
  alpha,
  Grid,
  Paper,
  Button,
  Badge
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  VideoCall as VideoCallIcon,
  Assessment as AssessmentIcon,
  Bolt as BoltIcon,
  Insights as InsightsIcon,
  AutoAwesome as AutoAwesomeIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { DashboardPreview, InterviewAnalysisPreview, SkillsAssessmentPreview } from './';

// Tab content data
const tabData = [
  {
    id: 'dashboard',
    label: 'Recruitment Dashboard',
    icon: <DashboardIcon />,
    description: "Get a bird's-eye view of your entire recruitment process with real-time analytics, candidate tracking, and pipeline management.",
    features: [
      'Customizable recruitment pipeline',
      'Real-time analytics and reporting',
      'Candidate tracking and management',
      'Team collaboration tools'
    ],
    component: DashboardPreview
  },
  {
    id: 'interview',
    label: 'AI Interview Analysis',
    icon: <VideoCallIcon />,
    description: "Conduct and analyze video interviews with AI-powered insights on candidate sentiment, engagement, and communication skills.",
    features: [
      'Sentiment analysis during interviews',
      'Automated interview scoring',
      'Communication skills assessment',
      'Behavioral pattern recognition'
    ],
    component: InterviewAnalysisPreview
  },
  {
    id: 'assessment',
    label: 'Skills Assessment',
    icon: <AssessmentIcon />,
    description: "Create customized assessments to evaluate technical and soft skills with precision and eliminate bias in the evaluation process.",
    features: [
      'Adaptive testing technology',
      'Customizable assessment templates',
      'Coding challenges with AI review',
      'Soft skills evaluation'
    ],
    component: SkillsAssessmentPreview
  }
];

export const DashboardPreviewSection: React.FC = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const currentTab = tabData[activeTab];

  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        background: `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.8)} 0%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decorative elements */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5 }}
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '40%',
          height: '40%',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`,
          filter: 'blur(100px)',
          zIndex: 0
        }}
      />
      
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '30%',
          height: '30%',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          background: `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.primary.light} 100%)`,
          filter: 'blur(100px)',
          zIndex: 0
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              badgeContent={
                <Box
                  component={motion.div}
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  sx={{ display: 'flex' }}
                >
                  <AutoAwesomeIcon fontSize="small" sx={{ color: theme.palette.warning.main }} />
                </Box>
              }
              sx={{
                '& .MuiBadge-badge': {
                  right: -10,
                  top: 5,
                  border: `2px solid ${theme.palette.background.paper}`,
                  padding: '0 4px',
                }
              }}
            >
              <Chip
                label="PLATFORM PREVIEW"
                color="secondary"
                size="medium"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  background: alpha(theme.palette.secondary.main, 0.1),
                  border: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
                  color: theme.palette.secondary.main,
                  px: 2,
                  py: 2.5,
                  '& .MuiChip-label': {
                    px: 1,
                  }
                }}
              />
            </Badge>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.2
              }}
            >
              Experience the HireGenix Platform
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Typography
              variant="h5"
              component="p"
              color="text.secondary"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                fontWeight: 400,
                mb: 6,
                lineHeight: 1.6
              }}
            >
              Our intuitive interface makes recruitment easier, faster, and more effective
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={5} lg={4}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: alpha(theme.palette.background.paper, 0.8),
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  boxShadow: `0 20px 80px ${alpha(theme.palette.common.black, 0.07)}`
                }}
              >
                {/* Tab navigation */}
                <Tabs
                  value={activeTab}
                  onChange={handleTabChange}
                  orientation="vertical"
                  variant="scrollable"
                  sx={{
                    mb: 4,
                    borderRight: 1,
                    borderColor: 'divider',
                    '& .MuiTabs-indicator': {
                      backgroundColor: theme.palette.secondary.main,
                      width: 4,
                      borderRadius: '0 4px 4px 0'
                    },
                    '& .MuiTab-root': {
                      alignItems: 'flex-start',
                      textAlign: 'left',
                      py: 2,
                      px: 3,
                      transition: 'all 0.3s ease',
                      '&.Mui-selected': {
                        color: theme.palette.secondary.main,
                        background: alpha(theme.palette.secondary.main, 0.05)
                      }
                    }
                  }}
                >
                  {tabData.map((tab, index) => (
                    <Tab
                      key={tab.id}
                      icon={tab.icon}
                      label={tab.label}
                      iconPosition="start"
                      sx={{
                        minHeight: 48,
                        fontSize: '1rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        borderRadius: '8px 0 0 8px'
                      }}
                    />
                  ))}
                </Tabs>

                {/* Tab content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Typography variant="h5" component="h3" fontWeight={700} gutterBottom>
                      {currentTab.label}
                    </Typography>
                    
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {currentTab.description}
                    </Typography>
                    
                    <Box sx={{ mb: 3 }}>
                      {currentTab.features.map((feature: string, idx: number) => (
                        <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                          <BoltIcon sx={{ color: theme.palette.secondary.main, mr: 1.5, fontSize: 20 }} />
                          <Typography variant="body2" fontWeight={500}>
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    
                    <Button
                      variant="outlined"
                      color="secondary"
                      endIcon={<ArrowForwardIcon />}
                      component={Link}
                      href={`/solutions/${currentTab.id}`}
                      sx={{ 
                        mt: 2,
                        borderRadius: '50px',
                        px: 3,
                        py: 1,
                        fontWeight: 600,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: `0 4px 12px ${alpha(theme.palette.secondary.main, 0.2)}`
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </AnimatePresence>
              </Paper>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={7} lg={8}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: 350, sm: 450, md: 600 },
                  borderRadius: '20px',
                  background: 'white',
                  boxShadow: '0 20px 80px rgba(0, 0, 0, 0.15)',
                  overflow: 'hidden',
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '40px',
                    background: alpha(theme.palette.grey[100], 0.8),
                    borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    zIndex: 2,
                    backdropFilter: 'blur(5px)'
                  }
                }}
              >
                {/* Browser-like controls */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    px: 2,
                    zIndex: 3
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ff5f57' }} />
                    <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#febc2e' }} />
                    <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#28c840' }} />
                  </Box>
                  <Box
                    sx={{
                      ml: 2,
                      flex: 1,
                      height: 24,
                      borderRadius: 12,
                      bgcolor: alpha(theme.palette.grey[200], 0.7),
                      display: 'flex',
                      alignItems: 'center',
                      px: 2
                    }}
                  >
                    <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                      app.hiregenix.com
                    </Typography>
                  </Box>
                </Box>
                
                {/* Dashboard preview */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ 
                      width: '100%', 
                      height: '100%',
                      paddingTop: '40px'
                    }}
                  >
                    {React.createElement(currentTab.component)}
                  </motion.div>
                </AnimatePresence>
                
                {/* Floating badge */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  sx={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                    padding: 2,
                    borderRadius: 3,
                    background: alpha(theme.palette.secondary.main, 0.9),
                    color: 'white',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                    zIndex: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    border: `1px solid ${alpha(theme.palette.secondary.light, 0.3)}`
                  }}
                >
                  <InsightsIcon />
                  <Typography variant="subtitle2" fontWeight={700}>
                    AI-Powered Insights
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DashboardPreviewSection;
