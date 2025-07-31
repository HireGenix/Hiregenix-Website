'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
  alpha,
  Chip,
  Tabs,
  Tab,
  Paper,
  Avatar,
  Stack,
  LinearProgress,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  PlayArrow as PlayArrowIcon,
  Person as PersonIcon,
  VideoCall as VideoCallIcon,
  Assessment as AssessmentIcon,
  Analytics as AnalyticsIcon,
  Search as SearchIcon,
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowForwardIcon,
  Schedule as ScheduleIcon,
  TrendingUp as TrendingUpIcon,
  FilterList as FilterListIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import DemoRequestDialog from '../Layout/DemoRequestDialog';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`demo-tabpanel-${index}`}
      aria-labelledby={`demo-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export const DemoPage: React.FC = () => {
  const theme = useTheme();
  const [currentTab, setCurrentTab] = useState(0);
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  // Mock data for demo
  const mockCandidates = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Senior Frontend Developer',
      matchScore: 94,
      skills: ['React', 'TypeScript', 'Node.js'],
      experience: '5+ years',
      avatar: '/avatars/avatar1.jpg',
      status: 'Available'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Full Stack Engineer',
      matchScore: 89,
      skills: ['Python', 'Django', 'PostgreSQL'],
      experience: '4+ years',
      avatar: '/avatars/avatar2.jpg',
      status: 'Interviewing'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      matchScore: 91,
      skills: ['Product Strategy', 'Agile', 'Analytics'],
      experience: '6+ years',
      avatar: '/avatars/avatar3.jpg',
      status: 'Available'
    }
  ];

  const demoFeatures = [
    {
      title: 'AI Candidate Matching',
      description: 'See how our AI analyzes resumes and matches candidates to job requirements',
      icon: <SearchIcon fontSize="large" />,
      color: theme.palette.primary.main,
      tabIndex: 0
    },
    {
      title: 'Video Interview Platform',
      description: 'Experience our integrated video interview system with AI insights',
      icon: <VideoCallIcon fontSize="large" />,
      color: theme.palette.secondary.main,
      tabIndex: 1
    },
    {
      title: 'Skills Assessment',
      description: 'Try our customizable skills assessment and evaluation tools',
      icon: <AssessmentIcon fontSize="large" />,
      color: theme.palette.warning.main,
      tabIndex: 2
    },
    {
      title: 'Analytics Dashboard',
      description: 'Explore comprehensive recruitment analytics and insights',
      icon: <AnalyticsIcon fontSize="large" />,
      color: theme.palette.success.main,
      tabIndex: 3
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: theme.palette.background.default }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Chip
                  label="INTERACTIVE DEMO"
                  sx={{
                    mb: 3,
                    px: 2,
                    py: 0.5,
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    color: theme.palette.primary.main,
                    fontWeight: 600
                  }}
                />
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 800,
                    mb: 3,
                    background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Experience HireGenix in Action
                </Typography>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  sx={{ mb: 4, lineHeight: 1.6 }}
                >
                  Try our advanced AI recruitment platform with real-time candidate matching, 
                  video interviews, skills assessments, and comprehensive analytics.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<PlayArrowIcon />}
                    sx={{ px: 4, py: 1.5 }}
                  >
                    Start Interactive Demo
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => setDemoDialogOpen(true)}
                    sx={{ px: 4, py: 1.5 }}
                  >
                    Book Live Demo
                  </Button>
                </Stack>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    background: alpha(theme.palette.background.paper, 0.8),
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    🎯 What You&apos;ll Experience
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="AI-powered candidate matching in real-time" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Interactive video interview platform" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Customizable skills assessment tools" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Comprehensive analytics dashboard" />
                    </ListItem>
                  </List>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Feature Selection */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 2, fontWeight: 700 }}
        >
          Choose Your Demo Experience
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
        >
          Select any feature below to see it in action with our interactive demo
        </Typography>

        <Grid container spacing={4}>
          {demoFeatures.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: currentTab === feature.tabIndex ? `2px solid ${feature.color}` : '1px solid transparent',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 10px 30px ${alpha(feature.color, 0.2)}`
                    }
                  }}
                  onClick={() => setCurrentTab(feature.tabIndex)}
                >
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: alpha(feature.color, 0.1),
                        color: feature.color,
                        mx: 'auto',
                        mb: 2
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Interactive Demo Area */}
      <Box sx={{ bgcolor: alpha(theme.palette.background.paper, 0.5), py: 8 }}>
        <Container maxWidth="lg">
          <Paper
            elevation={0}
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              border: `1px solid ${alpha(theme.palette.divider, 0.1)}`
            }}
          >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={currentTab}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                sx={{ px: 2 }}
              >
                <Tab label="AI Candidate Matching" />
                <Tab label="Video Interviews" />
                <Tab label="Skills Assessment" />
                <Tab label="Analytics Dashboard" />
              </Tabs>
            </Box>

            {/* Candidate Matching Demo */}
            <TabPanel value={currentTab} index={0}>
              <Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  AI Candidate Matching Demo
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                  See how our AI analyzes job requirements and matches them with candidate profiles
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, height: '100%' }}>
                      <Typography variant="h6" gutterBottom>
                        Job Requirements
                      </Typography>
                      <Chip label="React" size="small" sx={{ mr: 1, mb: 1 }} />
                      <Chip label="TypeScript" size="small" sx={{ mr: 1, mb: 1 }} />
                      <Chip label="5+ years" size="small" sx={{ mr: 1, mb: 1 }} />
                      <Chip label="Senior Level" size="small" sx={{ mr: 1, mb: 1 }} />
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Typography variant="h6" gutterBottom>
                      Top Matches
                    </Typography>
                    {mockCandidates.map((candidate) => (
                      <Paper key={candidate.id} sx={{ p: 2, mb: 2 }}>
                        <Grid container alignItems="center" spacing={2}>
                          <Grid item>
                            <Avatar src={candidate.avatar} alt={candidate.name} />
                          </Grid>
                          <Grid item xs>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                              {candidate.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {candidate.role} • {candidate.experience}
                            </Typography>
                            <Box sx={{ mt: 1 }}>
                              {candidate.skills.map((skill) => (
                                <Chip
                                  key={skill}
                                  label={skill}
                                  size="small"
                                  variant="outlined"
                                  sx={{ mr: 0.5 }}
                                />
                              ))}
                            </Box>
                          </Grid>
                          <Grid item>
                            <Box sx={{ textAlign: 'center' }}>
                              <Typography variant="h6" color="primary">
                                {candidate.matchScore}%
                              </Typography>
                              <Typography variant="caption">
                                Match Score
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Paper>
                    ))}
                  </Grid>
                </Grid>
              </Box>
            </TabPanel>

            {/* Video Interview Demo */}
            <TabPanel value={currentTab} index={1}>
              <Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Video Interview Platform Demo
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                  Experience our integrated video interview system with AI-powered insights
                </Typography>

                <Paper sx={{ p: 3, mb: 3, bgcolor: alpha(theme.palette.primary.main, 0.05) }}>
                  <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={8}>
                      <Box
                        sx={{
                          height: 300,
                          bgcolor: theme.palette.grey[900],
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          position: 'relative'
                        }}
                      >
                        <PlayArrowIcon sx={{ fontSize: 80, opacity: 0.7 }} />
                        <Typography
                          sx={{
                            position: 'absolute',
                            bottom: 16,
                            left: 16,
                            bgcolor: alpha(theme.palette.common.black, 0.7),
                            px: 2,
                            py: 1,
                            borderRadius: 1
                          }}
                        >
                          Sarah Johnson - Frontend Developer Interview
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography variant="h6" gutterBottom>
                        AI Interview Insights
                      </Typography>
                      <Stack spacing={2}>
                        <Box>
                          <Typography variant="body2" gutterBottom>
                            Communication Score
                          </Typography>
                          <LinearProgress
                            variant="determinate"
                            value={88}
                            sx={{ height: 8, borderRadius: 4 }}
                          />
                          <Typography variant="caption">88% Excellent</Typography>
                        </Box>
                        <Box>
                          <Typography variant="body2" gutterBottom>
                            Technical Knowledge
                          </Typography>
                          <LinearProgress
                            variant="determinate"
                            value={92}
                            sx={{ height: 8, borderRadius: 4 }}
                          />
                          <Typography variant="caption">92% Outstanding</Typography>
                        </Box>
                        <Box>
                          <Typography variant="body2" gutterBottom>
                            Cultural Fit
                          </Typography>
                          <LinearProgress
                            variant="determinate"
                            value={85}
                            sx={{ height: 8, borderRadius: 4 }}
                          />
                          <Typography variant="caption">85% Good Match</Typography>
                        </Box>
                      </Stack>
                    </Grid>
                  </Grid>
                </Paper>
              </Box>
            </TabPanel>

            {/* Skills Assessment Demo */}
            <TabPanel value={currentTab} index={2}>
              <Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Skills Assessment Demo
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                  Try our customizable skills assessment and evaluation tools
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        Assessment Categories
                      </Typography>
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleIcon color="success" />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Technical Skills" 
                            secondary="React, JavaScript, CSS - 94% Score"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleIcon color="success" />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Problem Solving" 
                            secondary="Algorithm challenges - 87% Score"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <ScheduleIcon color="warning" />
                          </ListItemIcon>
                          <ListItemText 
                            primary="System Design" 
                            secondary="In Progress - 45 min remaining"
                          />
                        </ListItem>
                      </List>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        Real-time Results
                      </Typography>
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="body2" gutterBottom>
                          Overall Score
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={90}
                          sx={{ height: 12, borderRadius: 6, mb: 1 }}
                        />
                        <Typography variant="h6" color="primary">
                          90% Excellent Performance
                        </Typography>
                      </Box>
                      <Divider sx={{ my: 2 }} />
                      <Typography variant="subtitle2" gutterBottom>
                        Skill Breakdown
                      </Typography>
                      <Stack spacing={1}>
                        <Box display="flex" justifyContent="space-between">
                          <Typography variant="body2">Frontend Development</Typography>
                          <Typography variant="body2" color="success.main">94%</Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                          <Typography variant="body2">Problem Solving</Typography>
                          <Typography variant="body2" color="success.main">87%</Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                          <Typography variant="body2">Communication</Typography>
                          <Typography variant="body2" color="primary.main">89%</Typography>
                        </Box>
                      </Stack>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
            </TabPanel>

            {/* Analytics Dashboard Demo */}
            <TabPanel value={currentTab} index={3}>
              <Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Analytics Dashboard Demo
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                  Explore comprehensive recruitment analytics and insights
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={3}>
                    <Paper sx={{ p: 2, textAlign: 'center' }}>
                      <TrendingUpIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                      <Typography variant="h4" color="primary">
                        156
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Applications This Month
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Paper sx={{ p: 2, textAlign: 'center' }}>
                      <PersonIcon color="success" sx={{ fontSize: 40, mb: 1 }} />
                      <Typography variant="h4" color="success.main">
                        23
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Interviews Scheduled
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Paper sx={{ p: 2, textAlign: 'center' }}>
                      <StarIcon color="warning" sx={{ fontSize: 40, mb: 1 }} />
                      <Typography variant="h4" color="warning.main">
                        89%
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Average Match Score
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Paper sx={{ p: 2, textAlign: 'center' }}>
                      <CheckCircleIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                      <Typography variant="h4" color="primary">
                        12
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Successful Hires
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>

                <Paper sx={{ p: 3, mt: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Recruitment Pipeline Overview
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="body2" gutterBottom>
                          Application to Interview Rate
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={68}
                          sx={{ height: 8, borderRadius: 4 }}
                        />
                        <Typography variant="caption">68% (Industry avg: 45%)</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="body2" gutterBottom>
                          Interview to Offer Rate
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={45}
                          sx={{ height: 8, borderRadius: 4 }}
                        />
                        <Typography variant="caption">45% (Industry avg: 35%)</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Box>
            </TabPanel>
          </Paper>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="md">
          <Paper
            sx={{
              p: 6,
              textAlign: 'center',
              background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.02)} 100%)`,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Ready to Transform Your Recruitment?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Schedule a personalized demo with our team to see how HireGenix can streamline your hiring process
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                onClick={() => setDemoDialogOpen(true)}
                endIcon={<ArrowForwardIcon />}
                sx={{ px: 4, py: 1.5 }}
              >
                Book Live Demo
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="/contact"
                sx={{ px: 4, py: 1.5 }}
              >
                Contact Sales
              </Button>
            </Stack>
          </Paper>
        </Container>
      </Box>

      {/* Demo Request Dialog */}
      <DemoRequestDialog 
        open={demoDialogOpen} 
        onClose={() => setDemoDialogOpen(false)} 
      />
    </Box>
  );
};

export default DemoPage;
