"use client";

import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  useTheme, 
  Tabs,
  Tab,
  Button
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  Assessment as AssessmentIcon,
  Videocam as VideocamIcon,
  Assistant as AssistantIcon
} from '@mui/icons-material';

const SectionTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(6),
  paddingBottom: theme.spacing(2),
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 80,
    height: 4,
    backgroundColor: theme.palette.primary.main,
  },
}));

const ScreenshotCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  borderRadius: theme.shape.borderRadius * 2,
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
  },
}));

const ScreenshotImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 250,
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(2),
  background: 'rgba(0, 0, 0, 0.2)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover::after': {
    opacity: 1,
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1rem',
  textTransform: 'none',
  minWidth: 120,
  transition: 'all 0.3s ease',
  '&.Mui-selected': {
    color: theme.palette.primary.main,
    fontWeight: 700,
  },
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: theme.palette.primary.light,
  },
}));

const FeatureHighlight = styled(Box)(({ theme }) => ({
  position: 'absolute',
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  background: 'rgba(0, 0, 0, 0.7)',
  border: `1px solid ${theme.palette.primary.main}`,
  color: 'white',
  fontSize: '0.75rem',
  fontWeight: 'bold',
  zIndex: 2,
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  transition: 'transform 0.3s ease, opacity 0.3s ease',
  opacity: 0,
  transform: 'translateY(10px)',
  '&.visible': {
    opacity: 1,
    transform: 'translateY(0)',
  }
}));

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

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
      id={`product-tabpanel-${index}`}
      aria-labelledby={`product-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const InvestorRelationsProductDemo: React.FC = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [highlightsVisible, setHighlightsVisible] = useState(false);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    setHighlightsVisible(false);
  };

  const toggleHighlights = () => {
    setHighlightsVisible(!highlightsVisible);
  };

  // Product screenshots data
  const productScreenshots = [
    {
      title: "AI-Powered Dashboard",
      description: "The HireGenix dashboard provides at-a-glance metrics for your recruiting pipeline with AI-powered insights and recommendations.",
      image: "/dashboard/dashboard-overview.jpg", // Placeholder path
      highlights: [
        { text: "AI Assistant with proactive suggestions", position: { top: '10%', left: '70%' } },
        { text: "Real-time match scores", position: { top: '40%', left: '20%' } },
        { text: "Personalized welcome with daily updates", position: { top: '15%', left: '30%' } }
      ]
    },
    {
      title: "Candidate Profile & Match Breakdown",
      description: "For any job opening, HireGenix analyzes dozens of candidates in seconds and presents a ranked shortlist with detailed match breakdowns.",
      image: "/dashboard/candidate-profile.jpg", // Placeholder path
      highlights: [
        { text: "96% Skills Match", position: { top: '30%', left: '75%' } },
        { text: "92% Experience Fit", position: { top: '45%', left: '75%' } },
        { text: "Detailed skill analysis", position: { top: '60%', left: '20%' } }
      ]
    },
    {
      title: "Integrated Video Interview Room",
      description: "Launch video interviews with one click and get real-time AI analysis of candidate engagement, confidence, and communication clarity.",
      image: "/dashboard/video-interview.jpg", // Placeholder path
      highlights: [
        { text: "Live sentiment analysis", position: { top: '20%', right: '10%' } },
        { text: "Engagement score: 87%", position: { top: '40%', right: '15%' } },
        { text: "Automated interview notes", position: { bottom: '20%', left: '20%' } }
      ]
    },
    {
      title: "Assessment Results & Analytics",
      description: "View candidates' test results instantly and track improvements in hiring metrics like time-to-hire and interview-to-offer rates.",
      image: "/dashboard/assessment-results.jpg", // Placeholder path
      highlights: [
        { text: "Adaptive skill testing", position: { top: '25%', left: '15%' } },
        { text: "Coding challenge results", position: { top: '50%', left: '70%' } },
        { text: "Predictive performance indicators", position: { bottom: '20%', left: '30%' } }
      ]
    }
  ];

  return (
    <Box 
      component="section" 
      sx={{ 
        py: 10,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 100%)',
        borderRadius: 4
      }}
      id="product-demo"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <SectionTitle variant="h3">
          Product Demo
        </SectionTitle>
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <Typography 
          variant="h5" 
          sx={{ 
            mb: 4, 
            fontWeight: 500,
            maxWidth: 900,
            lineHeight: 1.5
          }}
        >
          Experience HireGenix's intuitive interface and powerful AI features designed to transform your recruitment process.
        </Typography>
      </motion.div>
      
      <Box sx={{ 
        borderBottom: 1, 
        borderColor: 'divider',
        position: 'relative',
        zIndex: 1,
        mb: 4,
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)',
          zIndex: -1,
        }
      }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          variant="scrollable"
          scrollButtons="auto"
          sx={{ 
            '& .MuiTabs-indicator': {
              height: 3,
              borderRadius: '3px 3px 0 0',
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
            }
          }}
        >
          <StyledTab icon={<DashboardIcon />} iconPosition="start" label="Dashboard" />
          <StyledTab icon={<PersonIcon />} iconPosition="start" label="Candidate Matching" />
          <StyledTab icon={<VideocamIcon />} iconPosition="start" label="Video Interviews" />
          <StyledTab icon={<AssessmentIcon />} iconPosition="start" label="Assessments" />
        </Tabs>
      </Box>
      
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, right: 0, zIndex: 2 }}>
          <Button 
            variant="outlined" 
            color="primary" 
            size="small"
            startIcon={<AssistantIcon />}
            onClick={toggleHighlights}
            sx={{ 
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600,
              boxShadow: highlightsVisible ? '0 0 15px rgba(25, 118, 210, 0.5)' : 'none',
              background: highlightsVisible ? 'rgba(25, 118, 210, 0.1)' : 'transparent'
            }}
          >
            {highlightsVisible ? 'Hide Features' : 'Show Key Features'}
          </Button>
        </Box>
        
        <TabPanel value={tabValue} index={0}>
          <ScreenshotCard elevation={0}>
            <Box sx={{ position: 'relative' }}>
              <ScreenshotImage 
                sx={{ 
                  backgroundImage: `url(${productScreenshots[0].image})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  height: 400
                }}
              />
              
              {productScreenshots[0].highlights.map((highlight, index) => (
                <FeatureHighlight 
                  key={index}
                  className={highlightsVisible ? 'visible' : ''}
                  sx={{ 
                    ...highlight.position,
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  {highlight.text}
                </FeatureHighlight>
              ))}
            </Box>
            
            <Typography variant="h6" fontWeight={600} gutterBottom>
              {productScreenshots[0].title}
            </Typography>
            <Typography variant="body1">
              {productScreenshots[0].description}
            </Typography>
          </ScreenshotCard>
        </TabPanel>
        
        <TabPanel value={tabValue} index={1}>
          <ScreenshotCard elevation={0}>
            <Box sx={{ position: 'relative' }}>
              <ScreenshotImage 
                sx={{ 
                  backgroundImage: `url(${productScreenshots[1].image})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  height: 400
                }}
              />
              
              {productScreenshots[1].highlights.map((highlight, index) => (
                <FeatureHighlight 
                  key={index}
                  className={highlightsVisible ? 'visible' : ''}
                  sx={{ 
                    ...highlight.position,
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  {highlight.text}
                </FeatureHighlight>
              ))}
            </Box>
            
            <Typography variant="h6" fontWeight={600} gutterBottom>
              {productScreenshots[1].title}
            </Typography>
            <Typography variant="body1">
              {productScreenshots[1].description}
            </Typography>
          </ScreenshotCard>
        </TabPanel>
        
        <TabPanel value={tabValue} index={2}>
          <ScreenshotCard elevation={0}>
            <Box sx={{ position: 'relative' }}>
              <ScreenshotImage 
                sx={{ 
                  backgroundImage: `url(${productScreenshots[2].image})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  height: 400
                }}
              />
              
              {productScreenshots[2].highlights.map((highlight, index) => (
                <FeatureHighlight 
                  key={index}
                  className={highlightsVisible ? 'visible' : ''}
                  sx={{ 
                    ...highlight.position,
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  {highlight.text}
                </FeatureHighlight>
              ))}
            </Box>
            
            <Typography variant="h6" fontWeight={600} gutterBottom>
              {productScreenshots[2].title}
            </Typography>
            <Typography variant="body1">
              {productScreenshots[2].description}
            </Typography>
          </ScreenshotCard>
        </TabPanel>
        
        <TabPanel value={tabValue} index={3}>
          <ScreenshotCard elevation={0}>
            <Box sx={{ position: 'relative' }}>
              <ScreenshotImage 
                sx={{ 
                  backgroundImage: `url(${productScreenshots[3].image})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  height: 400
                }}
              />
              
              {productScreenshots[3].highlights.map((highlight, index) => (
                <FeatureHighlight 
                  key={index}
                  className={highlightsVisible ? 'visible' : ''}
                  sx={{ 
                    ...highlight.position,
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  {highlight.text}
                </FeatureHighlight>
              ))}
            </Box>
            
            <Typography variant="h6" fontWeight={600} gutterBottom>
              {productScreenshots[3].title}
            </Typography>
            <Typography variant="body1">
              {productScreenshots[3].description}
            </Typography>
          </ScreenshotCard>
        </TabPanel>
      </Box>
      
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
          Key Product Features
        </Typography>
        
        <Grid container spacing={3}>
          {[
            {
              title: "AI-Powered Matching",
              description: "Our semantic AI matching engine analyzes job requirements and resumes to find 95%+ accuracy matches, looking beyond keywords to understand skills contextually.",
              icon: <AssistantIcon sx={{ fontSize: 30, color: 'white' }} />,
              color: theme.palette.primary.main
            },
            {
              title: "Video Interview Analysis",
              description: "AI analyzes facial expressions, voice tone, and speech patterns to gauge attributes like confidence, engagement, and communication clarity.",
              icon: <VideocamIcon sx={{ fontSize: 30, color: 'white' }} />,
              color: theme.palette.secondary.main
            },
            {
              title: "Adaptive Assessments",
              description: "Integrated skills testing with AI-powered adaptive quizzes and coding challenges that adjust question difficulty in real-time based on responses.",
              icon: <AssessmentIcon sx={{ fontSize: 30, color: 'white' }} />,
              color: theme.palette.info.main
            }
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ScreenshotCard elevation={0}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box 
                      sx={{ 
                        width: 50, 
                        height: 50, 
                        borderRadius: '12px', 
                        bgcolor: feature.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                        boxShadow: `0 8px 20px ${feature.color}40`
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" fontWeight={600}>
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1">
                    {feature.description}
                  </Typography>
                </ScreenshotCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default InvestorRelationsProductDemo;
