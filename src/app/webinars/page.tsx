'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Divider,
  TextField,
  InputAdornment,
  Chip,
  alpha,
  useTheme,
  Tab,
  Tabs,
} from '@mui/material';
import {
  Search as SearchIcon,
  CalendarToday as CalendarTodayIcon,
  AccessTime as AccessTimeIcon,
  PlayCircleOutline as PlayCircleOutlineIcon,
  EventAvailable as EventAvailableIcon,
  EventBusy as EventBusyIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Sample webinar data
const upcomingWebinars = [
  {
    id: 'web-001',
    title: 'AI-Powered Recruitment: The Future of Hiring',
    description: 'Learn how artificial intelligence is transforming the recruitment landscape and how you can leverage it to find the best talent.',
    image: '/solutions/ai-recruitment.jpg',
    date: 'April 15, 2025',
    time: '11:00 AM - 12:30 PM EST',
    speaker: 'Sarah Johnson, Chief AI Officer',
    registrationLink: '/webinars/register/web-001',
  },
  {
    id: 'web-002',
    title: 'Mastering Video Interviews: Best Practices',
    description: 'Discover how to set up, conduct, and analyze video interviews effectively to make better hiring decisions.',
    image: '/solutions/video-interviews.jpg',
    date: 'April 22, 2025',
    time: '2:00 PM - 3:30 PM EST',
    speaker: 'Michael Chen, Head of Product',
    registrationLink: '/webinars/register/web-002',
  },
  {
    id: 'web-003',
    title: 'Skills Assessment Strategies for Technical Roles',
    description: 'Learn how to design and implement effective skills assessments for engineering and technical positions.',
    image: '/solutions/candidate-assessment.jpg',
    date: 'May 5, 2025',
    time: '10:00 AM - 11:30 AM EST',
    speaker: 'Jessica Williams, Technical Recruitment Specialist',
    registrationLink: '/webinars/register/web-003',
  },
];

const pastWebinars = [
  {
    id: 'web-past-001',
    title: 'Recruitment Analytics: Making Data-Driven Decisions',
    description: 'Understand how to use recruitment metrics and analytics to optimize your hiring process and improve outcomes.',
    image: '/solutions/talent-analytics.jpg',
    date: 'March 18, 2025',
    duration: '75 min',
    speaker: 'David Rodriguez, Data Science Lead',
    watchLink: '/webinars/watch/web-past-001',
  },
  {
    id: 'web-past-002',
    title: 'Building an Inclusive Recruitment Process',
    description: 'Learn strategies to eliminate bias and promote diversity in your hiring practices using HireGenix tools.',
    image: '/solutions/ai-recruitment.jpg',
    date: 'March 5, 2025',
    duration: '60 min',
    speaker: 'Sarah Johnson, Chief AI Officer',
    watchLink: '/webinars/watch/web-past-002',
  },
  {
    id: 'web-past-003',
    title: 'Integrating HireGenix with Your Existing ATS',
    description: 'Step-by-step guide to connecting HireGenix with popular applicant tracking systems for seamless workflow.',
    image: '/solutions/video-interviews.jpg',
    date: 'February 20, 2025',
    duration: '90 min',
    speaker: 'Michael Chen, Head of Product',
    watchLink: '/webinars/watch/web-past-003',
  },
  {
    id: 'web-past-004',
    title: 'Optimizing Candidate Experience with HireGenix',
    description: 'Discover how to create a positive and engaging candidate experience throughout the recruitment process.',
    image: '/solutions/candidate-assessment.jpg',
    date: 'February 8, 2025',
    duration: '65 min',
    speaker: 'Jessica Williams, Technical Recruitment Specialist',
    watchLink: '/webinars/watch/web-past-004',
  },
];

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
      id={`webinar-tabpanel-${index}`}
      aria-labelledby={`webinar-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 4 }}>{children}</Box>}
    </div>
  );
}

export default function WebinarsPage() {
  const theme = useTheme();
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: { xs: 12, sm: 14 },
        pb: 10,
        backgroundColor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: 'url(/hero-pattern.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{
            textAlign: 'center',
            mb: 8,
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            fontWeight={800}
            gutterBottom
            sx={{
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
            }}
          >
            Webinars & Events
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto', mb: 4, lineHeight: 1.6 }}
          >
            Join our live webinars to learn from industry experts and get the most out of the HireGenix platform
          </Typography>

          {/* Search Bar */}
          <Box
            component="form"
            sx={{
              display: 'flex',
              alignItems: 'center',
              maxWidth: 600,
              mx: 'auto',
              mt: 5,
              mb: 3,
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <TextField
              fullWidth
              placeholder="Search webinars by topic, speaker, or keyword"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="primary" />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: 3,
                  backgroundColor: 'background.paper',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.05)',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                  },
                },
              }}
            />
          </Box>
        </Box>

        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="webinar tabs"
            centered
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: theme.palette.primary.main,
                height: 3,
                borderRadius: '3px 3px 0 0',
              },
              '& .MuiTab-root': {
                fontWeight: 600,
                fontSize: '1rem',
                textTransform: 'none',
                minWidth: 120,
                '&.Mui-selected': {
                  color: theme.palette.primary.main,
                },
              },
            }}
          >
            <Tab
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EventAvailableIcon fontSize="small" />
                  <span>Upcoming</span>
                </Box>
              }
              id="webinar-tab-0"
              aria-controls="webinar-tabpanel-0"
            />
            <Tab
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EventBusyIcon fontSize="small" />
                  <span>Past Webinars</span>
                </Box>
              }
              id="webinar-tab-1"
              aria-controls="webinar-tabpanel-1"
            />
          </Tabs>
        </Box>

        {/* Upcoming Webinars Tab */}
        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={4}>
            {upcomingWebinars.map((webinar, index) => (
              <Grid item xs={12} key={webinar.id}>
                <Card
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: { xs: '100%', md: 300 },
                      height: { xs: 200, md: 'auto' },
                    }}
                    image={webinar.image}
                    alt={webinar.title}
                  />
                  <CardContent sx={{ flex: '1 0 auto', p: 4 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: { xs: 'flex-start', sm: 'center' },
                        mb: 2,
                      }}
                    >
                      <Typography variant="h5" component="h2" fontWeight={700} gutterBottom>
                        {webinar.title}
                      </Typography>
                      <Chip
                        label="Upcoming"
                        color="primary"
                        size="small"
                        sx={{
                          fontWeight: 600,
                          backgroundColor: alpha(theme.palette.success.main, 0.1),
                          color: theme.palette.success.main,
                          mt: { xs: 1, sm: 0 },
                        }}
                      />
                    </Box>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {webinar.description}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 3,
                        mb: 3,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CalendarTodayIcon
                          fontSize="small"
                          sx={{ color: theme.palette.primary.main, mr: 1 }}
                        />
                        <Typography variant="body2" fontWeight={500}>
                          {webinar.date}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AccessTimeIcon
                          fontSize="small"
                          sx={{ color: theme.palette.primary.main, mr: 1 }}
                        />
                        <Typography variant="body2" fontWeight={500}>
                          {webinar.time}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2" fontWeight={600} sx={{ mb: 3 }}>
                      Speaker: {webinar.speaker}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      href={webinar.registrationLink}
                      sx={{
                        borderRadius: 2,
                        px: 3,
                        py: 1.2,
                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                        },
                      }}
                    >
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {/* Past Webinars Tab */}
        <TabPanel value={tabValue} index={1}>
          <Grid container spacing={4}>
            {pastWebinars.map((webinar, index) => (
              <Grid item xs={12} sm={6} key={webinar.id}>
                <Card
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height={220}
                      image={webinar.image}
                      alt={webinar.title}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <PlayCircleOutlineIcon
                        sx={{
                          color: 'white',
                          fontSize: 60,
                          opacity: 0.9,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            opacity: 1,
                            transform: 'scale(1.1)',
                          },
                        }}
                      />
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 2,
                      }}
                    >
                      <Typography variant="h6" component="h2" fontWeight={700} gutterBottom>
                        {webinar.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {webinar.description}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 2,
                        mb: 2,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CalendarTodayIcon
                          fontSize="small"
                          sx={{ color: theme.palette.primary.main, mr: 1 }}
                        />
                        <Typography variant="body2" fontWeight={500}>
                          {webinar.date}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AccessTimeIcon
                          fontSize="small"
                          sx={{ color: theme.palette.primary.main, mr: 1 }}
                        />
                        <Typography variant="body2" fontWeight={500}>
                          {webinar.duration}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2" fontWeight={600} sx={{ mb: 3 }}>
                      Speaker: {webinar.speaker}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      component={Link}
                      href={webinar.watchLink}
                      fullWidth
                      startIcon={<PlayCircleOutlineIcon />}
                      sx={{
                        borderRadius: 2,
                        py: 1,
                        borderWidth: 2,
                        '&:hover': {
                          borderWidth: 2,
                        },
                      }}
                    >
                      Watch Recording
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {/* Newsletter Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          sx={{
            mt: 8,
            p: 4,
            borderRadius: 3,
            backgroundColor: alpha(theme.palette.primary.main, 0.03),
            border: '1px solid',
            borderColor: alpha(theme.palette.primary.main, 0.1),
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Stay Updated on Future Webinars
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 800, mx: 'auto' }}>
            Subscribe to our newsletter to receive notifications about upcoming webinars, events, and exclusive content.
          </Typography>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 2, sm: 0 },
              maxWidth: 600,
              mx: 'auto',
              mt: 3,
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <TextField
              placeholder="Enter your email"
              variant="outlined"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: { xs: 2, sm: '50px 0 0 50px' },
                  backgroundColor: 'white',
                  '& fieldset': {
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    borderRight: { sm: 0 },
                  },
                  '&:hover fieldset': {
                    borderColor: theme.palette.primary.main,
                  },
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                borderRadius: { xs: 2, sm: '0 50px 50px 0' },
                px: 3,
                py: 1.5,
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
