"use client";

import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Divider, 
  useTheme, 
  Chip, 
  Card, 
  CardContent,
  Button,
  Tabs,
  Tab,
  CircularProgress
} from '@mui/material';
import { styled } from '@mui/material/styles';
import GlassCard from '../../components/Common/GlassCard';
import { motion } from 'framer-motion';
import {
  AccessTime as AccessTimeIcon,
  AttachMoney as AttachMoneyIcon,
  AccountBalance as AccountBalanceIcon,
  Public as PublicIcon,
  Psychology as PsychologyIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  Assessment as AssessmentIcon,
  Devices as DevicesIcon,
  Analytics as AnalyticsIcon,
  ArrowForward as ArrowForwardIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  TrendingUp as TrendingUpIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  Timeline as TimelineIcon
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

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  borderRadius: theme.shape.borderRadius * 2,
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
  },
}));

const ProblemCard = styled(motion.div)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
  }
}));

const IconBox = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
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

const MetricCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  height: '100%',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
  },
}));

const ComparisonCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  height: '100%',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
  },
}));

const TimelineItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(4),
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    left: 20,
    top: 40,
    bottom: -20,
    width: 2,
    backgroundColor: theme.palette.divider,
    zIndex: 0,
  },
  '&:last-child:after': {
    display: 'none',
  },
}));

const TimelineIconBox = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  zIndex: 1,
  flexShrink: 0,
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
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
      id={`overview-tabpanel-${index}`}
      aria-labelledby={`overview-tab-${index}`}
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

const InvestorRelationsOverview: React.FC = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Problem data with icons
  const problems = [
    {
      title: "Lengthy Hiring Cycles",
      description: "The average time-to-hire is ~36 days, causing companies to lose top candidates and incur higher costs (avg. cost per hire ~$4,700). Traditional recruitment is slow and labor-intensive.",
      icon: <AccessTimeIcon sx={{ fontSize: 30, color: 'white' }} />,
      color: theme.palette.error.main
    },
    {
      title: "High Cost of Bad Hires",
      description: "A poor hire can cost up to 30% of that employee's first-year earnings. Companies face substantial expenses in rehiring and training due to mismatched candidates.",
      icon: <AttachMoneyIcon sx={{ fontSize: 30, color: 'white' }} />,
      color: theme.palette.warning.main
    },
    {
      title: "Unconscious Bias & Lack of Data",
      description: "Nearly 48% of hiring managers admit to having bias in the hiring process. Human-driven screening can unintentionally filter out diverse talent, leading to less inclusive teams.",
      icon: <PsychologyIcon sx={{ fontSize: 30, color: 'white' }} />,
      color: theme.palette.info.main
    },
    {
      title: "Global Talent Competition",
      description: "In a tight labor market with talent shortages, traditional methods struggle to quickly find quality candidates. Geographic barriers and remote work trends further complicate hiring.",
      icon: <PublicIcon sx={{ fontSize: 30, color: 'white' }} />,
      color: theme.palette.secondary.main
    }
  ];

  // Solution features with icons
  const features = [
    {
      title: "AI Candidate Matching",
      description: "Our semantic AI matching engine analyzes job requirements and resumes to find 95%+ accuracy matches. It looks beyond keywords, understanding skills contextually.",
      icon: <SpeedIcon sx={{ fontSize: 30, color: 'white' }} />,
      color: theme.palette.primary.main
    },
    {
      title: "Intelligent Assessments",
      description: "Integrated skills testing with AI-powered adaptive quizzes and coding challenges. The platform auto-adjusts question difficulty in real-time based on responses.",
      icon: <AssessmentIcon sx={{ fontSize: 30, color: 'white' }} />,
      color: theme.palette.secondary.main
    },
    {
      title: "AI Video Interview Analysis",
      description: "Conduct structured video interviews with real-time AI insights. HireGenix analyzes facial expressions, voice tone, and speech patterns to gauge attributes.",
      icon: <DevicesIcon sx={{ fontSize: 30, color: 'white' }} />,
      color: theme.palette.info.main
    },
    {
      title: "Advanced Analytics Dashboard",
      description: "A comprehensive analytics suite provides data-driven insights at each hiring stage. Predictive models forecast candidate success and tenure.",
      icon: <AnalyticsIcon sx={{ fontSize: 30, color: 'white' }} />,
      color: theme.palette.success.main
    },
    {
      title: "Workflow Integrations",
      description: "HireGenix seamlessly integrates with 50+ popular HR tools – from Slack and Microsoft Teams to LinkedIn and Workday.",
      icon: <AccountBalanceIcon sx={{ fontSize: 30, color: 'white' }} />,
      color: theme.palette.warning.main
    },
    {
      title: "Secure & Scalable",
      description: "Built with enterprise-grade security (SOC 2, ISO 27001 compliant) and scalable cloud infrastructure. All data is encrypted.",
      icon: <SecurityIcon sx={{ fontSize: 30, color: 'white' }} />,
      color: theme.palette.error.main
    }
  ];

  // Key metrics
  const keyMetrics = [
    { label: "Faster Hiring", value: "50%", icon: <AccessTimeIcon />, color: theme.palette.success.main },
    { label: "Better Matches", value: "75%", icon: <CheckCircleIcon />, color: theme.palette.primary.main },
    { label: "Cost Reduction", value: "35%", icon: <AttachMoneyIcon />, color: theme.palette.info.main },
    { label: "Time Saved", value: "20hrs", icon: <TrendingUpIcon />, color: theme.palette.secondary.main }
  ];

  // Traditional vs HireGenix comparison
  const comparisonItems = [
    { 
      traditional: "Manual resume screening (hours per candidate)", 
      hiregenix: "AI-powered screening (seconds per candidate)",
      traditionalIcon: <CancelIcon color="error" />,
      hiregenixIcon: <CheckCircleIcon color="success" />
    },
    { 
      traditional: "Subjective interview evaluations", 
      hiregenix: "Data-driven candidate assessments",
      traditionalIcon: <CancelIcon color="error" />,
      hiregenixIcon: <CheckCircleIcon color="success" />
    },
    { 
      traditional: "Limited candidate pool (local/regional)", 
      hiregenix: "Global talent access with remote-ready tools",
      traditionalIcon: <CancelIcon color="error" />,
      hiregenixIcon: <CheckCircleIcon color="success" />
    },
    { 
      traditional: "High risk of unconscious bias", 
      hiregenix: "Bias-reducing algorithms and blind screening",
      traditionalIcon: <CancelIcon color="error" />,
      hiregenixIcon: <CheckCircleIcon color="success" />
    }
  ];

  // Growth timeline
  const growthTimeline = [
    { 
      year: "2025", 
      milestone: "Market Entry & Initial Growth", 
      description: "Launch product, acquire first 20 customers, establish product-market fit",
      icon: <TimelineIcon />
    },
    { 
      year: "2026", 
      milestone: "Expansion Phase", 
      description: "Scale to 100+ customers, expand feature set, approach breakeven",
      icon: <BarChartIcon />
    },
    { 
      year: "2027", 
      milestone: "Profitability & Market Leadership", 
      description: "300+ enterprise customers, positive cash flow, industry recognition",
      icon: <TrendingUpIcon />
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
      id="overview"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <SectionTitle variant="h3">
          Company Overview
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
          HireGenix combines AI-driven candidate matching, video interviews, and skill assessments to help companies build exceptional teams with unprecedented efficiency.
        </Typography>
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <Box 
          sx={{ 
            p: 4, 
            mb: 6, 
            borderRadius: 3,
            background: `linear-gradient(135deg, ${theme.palette.primary.dark}30 0%, ${theme.palette.primary.main}15 100%)`,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Animated background gradient */}
          <Box
            component={motion.div}
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.1,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}40 0%, ${theme.palette.primary.dark}40 100%)`,
              backgroundSize: '200% 200%',
              zIndex: 0
            }}
          />
          
          <Grid container spacing={3} sx={{ position: 'relative', zIndex: 1 }}>
            <Grid item xs={12} md={8}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  component={motion.div}
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                    scale: [1, 1.05, 1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'loop'
                  }}
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '16px',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 8px 20px ${theme.palette.primary.main}50`,
                    flexShrink: 0
                  }}
                >
                  <AttachMoneyIcon sx={{ color: 'white', fontSize: 30 }} />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    Investment Opportunity
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Founded in 2024 with a mission to transform hiring through cutting-edge AI, HireGenix is a pre-revenue, production-ready startup seeking to raise <Box component="span" sx={{ color: theme.palette.primary.main, fontWeight: 700 }}>$500,000 for 5% equity</Box> to fuel our next stage of growth.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box 
                sx={{ 
                  p: 2, 
                  borderRadius: 2, 
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Box 
                      component={motion.div}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                      sx={{ 
                        p: 2, 
                        borderRadius: 2, 
                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                        textAlign: 'center'
                      }}
                    >
                      <Typography variant="caption" color="text.secondary">Valuation</Typography>
                      <Typography variant="h6" fontWeight={700} color={theme.palette.primary.main}>$10M</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box 
                      component={motion.div}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                      sx={{ 
                        p: 2, 
                        borderRadius: 2, 
                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                        textAlign: 'center'
                      }}
                    >
                      <Typography variant="caption" color="text.secondary">Raising</Typography>
                      <Typography variant="h6" fontWeight={700} color={theme.palette.primary.main}>$500K</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
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
          <StyledTab icon={<PieChartIcon />} iconPosition="start" label="The Problem" />
          <StyledTab icon={<CheckCircleIcon />} iconPosition="start" label="Our Solution" />
          <StyledTab icon={<BarChartIcon />} iconPosition="start" label="Impact & Growth" />
        </Tabs>
      </Box>
      
      <TabPanel value={tabValue} index={0}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              The Recruitment Industry Challenges
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: 900 }}>
              Traditional recruitment processes are plagued by inefficiencies, high costs, and human biases. Companies struggle with lengthy hiring cycles, poor candidate matches, and limited data-driven insights.
            </Typography>
            
            <Box 
              sx={{ 
                p: 4, 
                borderRadius: 3,
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                mb: 4,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Animated background gradient */}
              <Box
                component={motion.div}
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  opacity: 0.05,
                  background: `linear-gradient(135deg, ${theme.palette.error.main}40 0%, ${theme.palette.warning.main}40 50%, ${theme.palette.info.main}40 100%)`,
                  backgroundSize: '400% 400%',
                  zIndex: 0
                }}
              />
              
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={3}>
                  {problems.map((problem, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover={{ 
                          y: -10,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <Paper
                          elevation={0}
                          sx={{ 
                            p: 3, 
                            borderRadius: 3,
                            background: 'rgba(255, 255, 255, 0.03)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            height: '100%',
                            position: 'relative',
                            overflow: 'hidden',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              boxShadow: `0 15px 30px rgba(0, 0, 0, 0.1), 0 0 30px ${problem.color}30`,
                              border: `1px solid ${problem.color}30`,
                            }
                          }}
                        >
                          {/* Animated glow effect */}
                          <Box
                            component={motion.div}
                            animate={{ 
                              opacity: [0.3, 0.6, 0.3],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{ 
                              duration: 3,
                              repeat: Infinity,
                              repeatType: 'loop',
                              delay: index * 0.5
                            }}
                            sx={{
                              position: 'absolute',
                              top: -20,
                              right: -20,
                              width: 100,
                              height: 100,
                              borderRadius: '50%',
                              background: `radial-gradient(circle, ${problem.color}50 0%, rgba(0,0,0,0) 70%)`,
                              filter: 'blur(20px)',
                              zIndex: 0
                            }}
                          />
                          
                          <Box sx={{ position: 'relative', zIndex: 1 }}>
                            <Box sx={{ display: 'flex', mb: 3 }}>
                              <Box 
                                component={motion.div}
                                animate={{ 
                                  rotate: [0, 5, 0, -5, 0],
                                }}
                                transition={{ 
                                  duration: 4,
                                  repeat: Infinity,
                                  repeatType: 'loop',
                                  delay: index * 0.5
                                }}
                                sx={{ 
                                  width: 60, 
                                  height: 60, 
                                  borderRadius: '16px', 
                                  background: `linear-gradient(135deg, ${problem.color} 0%, ${problem.color}99 100%)`,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  mr: 2,
                                  boxShadow: `0 8px 20px ${problem.color}40`,
                                  flexShrink: 0
                                }}
                              >
                                {problem.icon}
                              </Box>
                              <Box>
                                <Typography variant="h6" sx={{ color: problem.color, fontWeight: 700 }}>
                                  {problem.title}
                                </Typography>
                                <Chip 
                                  label="Industry Challenge" 
                                  size="small" 
                                  sx={{ 
                                    bgcolor: `${problem.color}20`, 
                                    color: problem.color,
                                    mt: 0.5,
                                    fontWeight: 600
                                  }} 
                                />
                              </Box>
                            </Box>
                            
                            <Typography variant="body1">
                              {problem.description}
                            </Typography>
                            
                            {/* Impact indicator */}
                            <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <Typography variant="caption" color="text.secondary">
                                Impact on Hiring:
                              </Typography>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Box
                                    key={star}
                                    component={motion.div}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ 
                                      duration: 0.3, 
                                      delay: index * 0.1 + star * 0.1 
                                    }}
                                    sx={{
                                      width: 12,
                                      height: 12,
                                      borderRadius: '50%',
                                      bgcolor: star <= 4 ? problem.color : 'rgba(255, 255, 255, 0.2)',
                                      mx: 0.5
                                    }}
                                  />
                                ))}
                              </Box>
                            </Box>
                          </Box>
                        </Paper>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Box>
          
          <Box sx={{ mt: 6 }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Traditional vs. HireGenix Approach
            </Typography>
            
            <Box 
              sx={{ 
                p: 4, 
                borderRadius: 3,
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                mb: 4,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Animated background gradient */}
              <Box
                component={motion.div}
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  opacity: 0.05,
                  background: `linear-gradient(135deg, ${theme.palette.error.main}40 0%, ${theme.palette.success.main}40 100%)`,
                  backgroundSize: '400% 400%',
                  zIndex: 0
                }}
              />
              
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                      sx={{
                        height: '100%',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      <Paper
                        elevation={0}
                        sx={{ 
                          p: 3, 
                          borderRadius: 3,
                          background: 'rgba(244, 67, 54, 0.05)',
                          border: '1px solid rgba(244, 67, 54, 0.1)',
                          height: '100%',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                        {/* Animated glow effect */}
                        <Box
                          component={motion.div}
                          animate={{ 
                            opacity: [0.2, 0.4, 0.2],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            repeatType: 'loop'
                          }}
                          sx={{
                            position: 'absolute',
                            top: -50,
                            right: -50,
                            width: 150,
                            height: 150,
                            borderRadius: '50%',
                            background: `radial-gradient(circle, ${theme.palette.error.main}30 0%, rgba(0,0,0,0) 70%)`,
                            filter: 'blur(20px)',
                            zIndex: 0
                          }}
                        />
                        
                        <Box sx={{ position: 'relative', zIndex: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <Box 
                              component={motion.div}
                              animate={{ 
                                rotate: [0, 5, 0, -5, 0],
                              }}
                              transition={{ 
                                duration: 4,
                                repeat: Infinity,
                                repeatType: 'loop'
                              }}
                              sx={{ 
                                width: 50, 
                                height: 50, 
                                borderRadius: '12px', 
                                bgcolor: theme.palette.error.main,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mr: 2,
                                boxShadow: `0 8px 20px ${theme.palette.error.main}40`
                              }}
                            >
                              <CancelIcon sx={{ color: 'white', fontSize: 30 }} />
                            </Box>
                            <Typography variant="h6" sx={{ color: theme.palette.error.main, fontWeight: 700 }}>
                              Traditional Recruitment
                            </Typography>
                          </Box>
                          
                          <Box sx={{ mb: 2 }}>
                            {comparisonItems.map((item, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ 
                                  x: 5,
                                  transition: { duration: 0.2 }
                                }}
                              >
                                <Box sx={{ 
                                  display: 'flex', 
                                  alignItems: 'flex-start', 
                                  mb: 2,
                                  p: 2,
                                  borderRadius: 2,
                                  bgcolor: 'rgba(244, 67, 54, 0.05)',
                                  border: '1px solid rgba(244, 67, 54, 0.1)',
                                  transition: 'all 0.3s ease',
                                  '&:hover': {
                                    bgcolor: 'rgba(244, 67, 54, 0.08)',
                                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
                                  }
                                }}>
                                  <Box 
                                    sx={{ 
                                      mr: 1.5, 
                                      mt: 0.5,
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      width: 24,
                                      height: 24,
                                      borderRadius: '50%',
                                      bgcolor: 'rgba(244, 67, 54, 0.1)',
                                      flexShrink: 0
                                    }}
                                  >
                                    {item.traditionalIcon}
                                  </Box>
                                  <Typography variant="body2" fontWeight={500}>
                                    {item.traditional}
                                  </Typography>
                                </Box>
                              </motion.div>
                            ))}
                          </Box>
                        </Box>
                      </Paper>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                      sx={{
                        height: '100%',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      <Paper
                        elevation={0}
                        sx={{ 
                          p: 3, 
                          borderRadius: 3,
                          background: 'rgba(76, 175, 80, 0.05)',
                          border: '1px solid rgba(76, 175, 80, 0.1)',
                          height: '100%',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                        {/* Animated glow effect */}
                        <Box
                          component={motion.div}
                          animate={{ 
                            opacity: [0.2, 0.4, 0.2],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            repeatType: 'loop'
                          }}
                          sx={{
                            position: 'absolute',
                            top: -50,
                            right: -50,
                            width: 150,
                            height: 150,
                            borderRadius: '50%',
                            background: `radial-gradient(circle, ${theme.palette.success.main}30 0%, rgba(0,0,0,0) 70%)`,
                            filter: 'blur(20px)',
                            zIndex: 0
                          }}
                        />
                        
                        <Box sx={{ position: 'relative', zIndex: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <Box 
                              component={motion.div}
                              animate={{ 
                                rotate: [0, 5, 0, -5, 0],
                              }}
                              transition={{ 
                                duration: 4,
                                repeat: Infinity,
                                repeatType: 'loop'
                              }}
                              sx={{ 
                                width: 50, 
                                height: 50, 
                                borderRadius: '12px', 
                                bgcolor: theme.palette.success.main,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mr: 2,
                                boxShadow: `0 8px 20px ${theme.palette.success.main}40`
                              }}
                            >
                              <CheckCircleIcon sx={{ color: 'white', fontSize: 30 }} />
                            </Box>
                            <Typography variant="h6" sx={{ color: theme.palette.success.main, fontWeight: 700 }}>
                              HireGenix Approach
                            </Typography>
                          </Box>
                          
                          <Box sx={{ mb: 2 }}>
                            {comparisonItems.map((item, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ 
                                  x: 5,
                                  transition: { duration: 0.2 }
                                }}
                              >
                                <Box sx={{ 
                                  display: 'flex', 
                                  alignItems: 'flex-start', 
                                  mb: 2,
                                  p: 2,
                                  borderRadius: 2,
                                  bgcolor: 'rgba(76, 175, 80, 0.05)',
                                  border: '1px solid rgba(76, 175, 80, 0.1)',
                                  transition: 'all 0.3s ease',
                                  '&:hover': {
                                    bgcolor: 'rgba(76, 175, 80, 0.08)',
                                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
                                  }
                                }}>
                                  <Box 
                                    sx={{ 
                                      mr: 1.5, 
                                      mt: 0.5,
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      width: 24,
                                      height: 24,
                                      borderRadius: '50%',
                                      bgcolor: 'rgba(76, 175, 80, 0.1)',
                                      flexShrink: 0
                                    }}
                                  >
                                    {item.hiregenixIcon}
                                  </Box>
                                  <Typography variant="body2" fontWeight={500}>
                                    {item.hiregenix}
                                  </Typography>
                                </Box>
                              </motion.div>
                            ))}
                          </Box>
                        </Box>
                      </Paper>
                    </Box>
                  </Grid>
                </Grid>
                
                {/* Summary */}
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                      The HireGenix Advantage
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
                      Our AI-powered approach dramatically reduces time-to-hire while improving candidate quality and reducing bias, 
                      giving companies a significant competitive advantage in today's talent market.
                    </Typography>
                  </motion.div>
                </Box>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </TabPanel>
      
      <TabPanel value={tabValue} index={1}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Our Comprehensive Solution
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: 900 }}>
              HireGenix is an all-in-one recruitment solution that addresses these pain points with advanced AI and automation. Our platform streamlines the entire hiring process from sourcing to onboarding:
            </Typography>
            
            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  >
                    <FeatureCard elevation={0}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Box sx={{ 
                          width: 60, 
                          height: 60, 
                          borderRadius: '12px', 
                          bgcolor: feature.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                          boxShadow: `0 8px 20px ${feature.color}40`
                        }}>
                          {feature.icon}
                        </Box>
                        <Typography variant="h6" fontWeight={600}>
                          {feature.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {feature.description}
                      </Typography>
                    </FeatureCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
          
          <Box sx={{ mt: 8 }}>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
              How It Works: The HireGenix Platform
            </Typography>
            
            <Box sx={{ 
              p: 4, 
              borderRadius: 3,
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
            }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Box>
                    <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                      End-to-End Recruitment Workflow
                    </Typography>
                    
                    {[
                      { 
                        step: "Job Requirement Analysis", 
                        description: "AI parses job descriptions to identify key skills, experience, and qualifications needed" 
                      },
                      { 
                        step: "Candidate Matching", 
                        description: "Semantic matching algorithm finds candidates with 95%+ relevance to requirements" 
                      },
                      { 
                        step: "Automated Screening", 
                        description: "AI-powered pre-screening questions and assessments filter candidates" 
                      },
                      { 
                        step: "Video Interview Analysis", 
                        description: "AI analyzes candidate responses, communication skills, and engagement" 
                      },
                      { 
                        step: "Decision Support", 
                        description: "Data-driven insights help hiring managers make informed decisions" 
                      }
                    ].map((item, index) => (
                      <TimelineItem key={index}>
                        <TimelineIconBox>
                          <Typography variant="body2" sx={{ color: 'white', fontWeight: 'bold' }}>
                            {index + 1}
                          </Typography>
                        </TimelineIconBox>
                        <Box>
                          <Typography variant="subtitle1" fontWeight={600}>
                            {item.step}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.description}
                          </Typography>
                        </Box>
                      </TimelineItem>
                    ))}
                  </Box>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Box sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                      Key Differentiators
                    </Typography>
                    
                    {[
                      "Contextual understanding of skills beyond keyword matching",
                      "Adaptive assessment technology that adjusts to candidate responses",
                      "Bias-reducing algorithms to promote diversity and inclusion",
                      "Comprehensive analytics across the entire hiring funnel",
                      "Enterprise-grade security with SOC 2 and ISO 27001 compliance",
                      "Seamless integration with 50+ HR tools and platforms"
                    ].map((item, index) => (
                      <Box 
                        key={index} 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'flex-start', 
                          mb: 2,
                          p: 1.5,
                          borderRadius: 2,
                          bgcolor: 'rgba(255, 255, 255, 0.03)',
                          transition: 'transform 0.2s ease',
                          '&:hover': {
                            transform: 'translateX(5px)',
                            bgcolor: 'rgba(255, 255, 255, 0.05)',
                          }
                        }}
                      >
                        <CheckCircleIcon color="success" sx={{ mr: 1.5, flexShrink: 0 }} />
                        <Typography variant="body2">{item}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </motion.div>
      </TabPanel>
      
      <TabPanel value={tabValue} index={2}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Measurable Impact
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: 900 }}>
              HireGenix delivers significant improvements across key recruitment metrics, helping companies hire better candidates faster and at lower cost.
            </Typography>
            
            <Box 
              sx={{ 
                p: 4, 
                borderRadius: 3,
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                mb: 4,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Animated background gradient */}
              <Box
                component={motion.div}
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  opacity: 0.05,
                  background: `linear-gradient(135deg, ${theme.palette.success.main}40 0%, ${theme.palette.primary.main}40 50%, ${theme.palette.info.main}40 100%)`,
                  backgroundSize: '400% 400%',
                  zIndex: 0
                }}
              />
              
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={4}>
                  {keyMetrics.map((metric, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          y: -10,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <Paper
                          elevation={0}
                          sx={{ 
                            p: 3, 
                            borderRadius: 3,
                            background: 'rgba(255, 255, 255, 0.03)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            height: '100%',
                            position: 'relative',
                            overflow: 'hidden',
                            textAlign: 'center',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              boxShadow: `0 15px 30px rgba(0, 0, 0, 0.1), 0 0 30px ${metric.color}30`,
                              border: `1px solid ${metric.color}30`,
                            }
                          }}
                        >
                          {/* Animated glow effect */}
                          <Box
                            component={motion.div}
                            animate={{ 
                              opacity: [0.3, 0.6, 0.3],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{ 
                              duration: 3,
                              repeat: Infinity,
                              repeatType: 'loop',
                              delay: index * 0.5
                            }}
                            sx={{
                              position: 'absolute',
                              top: -20,
                              right: -20,
                              width: 100,
                              height: 100,
                              borderRadius: '50%',
                              background: `radial-gradient(circle, ${metric.color}50 0%, rgba(0,0,0,0) 70%)`,
                              filter: 'blur(20px)',
                              zIndex: 0
                            }}
                          />
                          
                          <Box sx={{ position: 'relative', zIndex: 1 }}>
                            <Box 
                              component={motion.div}
                              animate={{ 
                                rotate: [0, 5, 0, -5, 0],
                              }}
                              transition={{ 
                                duration: 4,
                                repeat: Infinity,
                                repeatType: 'loop',
                                delay: index * 0.5
                              }}
                              sx={{ 
                                width: 80, 
                                height: 80, 
                                borderRadius: '50%', 
                                background: `linear-gradient(135deg, ${metric.color}20 0%, ${metric.color}10 100%)`,
                                border: `2px solid ${metric.color}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mx: 'auto',
                                mb: 2,
                                boxShadow: `0 8px 20px ${metric.color}30`
                              }}
                            >
                              {React.cloneElement(metric.icon, { 
                                sx: { fontSize: 36, color: metric.color } 
                              })}
                            </Box>
                            
                            <Box
                              component={motion.div}
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ 
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.2 + index * 0.1
                              }}
                              viewport={{ once: true }}
                            >
                              <Typography variant="h3" fontWeight={800} color={metric.color} sx={{ mb: 1 }}>
                                {metric.value}
                              </Typography>
                            </Box>
                            
                            <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                              {metric.label}
                            </Typography>
                            
                            {/* Progress bar */}
                            <Box sx={{ mt: 2, position: 'relative', height: 6, bgcolor: 'rgba(255, 255, 255, 0.1)', borderRadius: 3 }}>
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                transition={{ duration: 1.5, delay: 0.3 + index * 0.2 }}
                                viewport={{ once: true }}
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  height: '100%',
                                  backgroundColor: metric.color,
                                  borderRadius: 6
                                }}
                              />
                            </Box>
                            
                            {/* Benefit description */}
                            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 2 }}>
                              {index === 0 && "Reduce time-to-hire by half"}
                              {index === 1 && "Improve candidate-job fit"}
                              {index === 2 && "Lower recruitment expenses"}
                              {index === 3 && "Save HR team's valuable time"}
                            </Typography>
                          </Box>
                        </Paper>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
                
                {/* Summary */}
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                      Proven Results Across Industries
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
                      These metrics are based on actual results from our beta customers across technology, healthcare, 
                      finance, and manufacturing sectors. Our platform consistently delivers measurable ROI within the first 90 days.
                    </Typography>
                  </motion.div>
                </Box>
              </Box>
            </Box>
          </Box>
          
          <Box sx={{ mt: 8, mb: 6 }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Growth Roadmap
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: 900 }}>
              Our three-year plan outlines a clear path to profitability and market leadership in the HR tech space.
            </Typography>
            
            <Box 
              sx={{ 
                p: 4, 
                borderRadius: 3,
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                mb: 4,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Animated background gradient */}
              <Box
                component={motion.div}
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  opacity: 0.05,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}40 0%, ${theme.palette.secondary.main}40 50%, ${theme.palette.success.main}40 100%)`,
                  backgroundSize: '400% 400%',
                  zIndex: 0
                }}
              />
              
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                {/* Timeline connector */}
                <Box 
                  sx={{ 
                    position: 'absolute',
                    top: 100,
                    left: { xs: 30, md: '15%' },
                    bottom: 100,
                    width: 4,
                    borderRadius: 2,
                    background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.success.main})`,
                    display: { xs: 'none', md: 'block' },
                    zIndex: 0
                  }}
                />
                
                {growthTimeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Grid 
                      container 
                      spacing={4} 
                      sx={{ 
                        mb: index < growthTimeline.length - 1 ? 6 : 0,
                        position: 'relative'
                      }}
                    >
                      <Grid item xs={12} md={3} sx={{ position: 'relative' }}>
                        <Box 
                          sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: { xs: 'flex-start', md: 'center' },
                            position: 'relative',
                            zIndex: 1
                          }}
                        >
                          <Box 
                            component={motion.div}
                            whileHover={{ 
                              scale: 1.1,
                              boxShadow: `0 0 30px ${index === 0 ? theme.palette.primary.main : index === 1 ? theme.palette.secondary.main : theme.palette.success.main}50`
                            }}
                            transition={{ duration: 0.2 }}
                            sx={{ 
                              width: 80, 
                              height: 80, 
                              borderRadius: '50%', 
                              background: `linear-gradient(135deg, ${index === 0 ? theme.palette.primary.main : index === 1 ? theme.palette.secondary.main : theme.palette.success.main} 0%, ${index === 0 ? theme.palette.primary.dark : index === 1 ? theme.palette.secondary.dark : theme.palette.success.dark} 100%)`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mb: 2,
                              boxShadow: `0 8px 25px ${index === 0 ? theme.palette.primary.main : index === 1 ? theme.palette.secondary.main : theme.palette.success.main}40`,
                              border: '4px solid rgba(255, 255, 255, 0.1)',
                              position: 'relative'
                            }}
                          >
                            {/* Pulsing effect */}
                            <Box
                              component={motion.div}
                              animate={{ 
                                opacity: [0.7, 0, 0.7],
                                scale: [1, 1.4, 1]
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                repeatType: 'loop',
                                delay: index * 0.5
                              }}
                              sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                borderRadius: '50%',
                                background: `radial-gradient(circle, ${index === 0 ? theme.palette.primary.main : index === 1 ? theme.palette.secondary.main : theme.palette.success.main}50 0%, rgba(0,0,0,0) 70%)`,
                                zIndex: 0
                              }}
                            />
                            
                            {React.cloneElement(item.icon, { 
                              sx: { fontSize: 36, color: 'white', position: 'relative', zIndex: 1 } 
                            })}
                          </Box>
                          
                          <Typography 
                            variant="h4" 
                            fontWeight={800} 
                            color={index === 0 ? 'primary.main' : index === 1 ? 'secondary.main' : 'success.main'}
                            sx={{ mb: 1 }}
                          >
                            {item.year}
                          </Typography>
                          
                          {/* Milestone tag */}
                          <Chip 
                            label={`Phase ${index + 1}`} 
                            sx={{ 
                              bgcolor: `${index === 0 ? theme.palette.primary.main : index === 1 ? theme.palette.secondary.main : theme.palette.success.main}20`,
                              color: index === 0 ? theme.palette.primary.main : index === 1 ? theme.palette.secondary.main : theme.palette.success.main,
                              fontWeight: 600,
                              border: `1px solid ${index === 0 ? theme.palette.primary.main : index === 1 ? theme.palette.secondary.main : theme.palette.success.main}40`,
                            }}
                          />
                        </Box>
                      </Grid>
                      
                      <Grid item xs={12} md={9}>
                        <Box
                          component={motion.div}
                          whileHover={{ 
                            y: -5,
                            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)'
                          }}
                          transition={{ duration: 0.2 }}
                          sx={{ 
                            p: 4, 
                            borderRadius: 3,
                            background: 'rgba(255, 255, 255, 0.03)',
                            backdropFilter: 'blur(10px)',
                            border: `1px solid ${index === 0 ? theme.palette.primary.main : index === 1 ? theme.palette.secondary.main : theme.palette.success.main}20`,
                            height: '100%',
                            position: 'relative',
                            overflow: 'hidden'
                          }}
                        >
                          {/* Glow effect */}
                          <Box
                            component={motion.div}
                            animate={{ 
                              opacity: [0.2, 0.4, 0.2],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{ 
                              duration: 3,
                              repeat: Infinity,
                              repeatType: 'loop',
                              delay: index * 0.5
                            }}
                            sx={{
                              position: 'absolute',
                              top: -50,
                              right: -50,
                              width: 150,
                              height: 150,
                              borderRadius: '50%',
                              background: `radial-gradient(circle, ${index === 0 ? theme.palette.primary.main : index === 1 ? theme.palette.secondary.main : theme.palette.success.main}30 0%, rgba(0,0,0,0) 70%)`,
                              filter: 'blur(20px)',
                              zIndex: 0
                            }}
                          />
                          
                          <Box sx={{ position: 'relative', zIndex: 1 }}>
                            <Typography 
                              variant="h5" 
                              fontWeight={700} 
                              gutterBottom
                              color={index === 0 ? 'primary.main' : index === 1 ? 'secondary.main' : 'success.main'}
                            >
                              {item.milestone}
                            </Typography>
                            
                            <Typography variant="body1" paragraph>
                              {item.description}
                            </Typography>
                            
                            {/* Key metrics for each phase */}
                            <Grid container spacing={2} sx={{ mt: 2 }}>
                              {index === 0 && (
                                <>
                                  <Grid item xs={6} sm={3}>
                                    <Box sx={{ textAlign: 'center' }}>
                                      <Typography variant="h6" fontWeight={700} color={theme.palette.primary.main}>20+</Typography>
                                      <Typography variant="caption" color="text.secondary">Customers</Typography>
                                    </Box>
                                  </Grid>
                                  <Grid item xs={6} sm={3}>
                                    <Box sx={{ textAlign: 'center' }}>
                                      <Typography variant="h6" fontWeight={700} color={theme.palette.primary.main}>$500K</Typography>
                                      <Typography variant="caption" color="text.secondary">ARR</Typography>
                                    </Box>
                                  </Grid>
                                  <Grid item xs={6} sm={3}>
                                    <Box sx={{ textAlign: 'center' }}>
                                      <Typography variant="h6" fontWeight={700} color={theme.palette.primary.main}>3</Typography>
                                      <Typography variant="caption" color="text.secondary">Industries</Typography>
                                    </Box>
                                  </Grid>
                                  <Grid item xs={6} sm={3}>
                                    <Box sx={{ textAlign: 'center' }}>
                                      <Typography variant="h6" fontWeight={700} color={theme.palette.primary.main}>15</Typography>
                                      <Typography variant="caption" color="text.secondary">Team Size</Typography>
                                    </Box>
                                  </Grid>
                                </>
                              )}
                              
                              {index === 1 && (
                                <>
                                  <Grid item xs={6} sm={3}>
                                    <Box sx={{ textAlign: 'center' }}>
                                      <Typography variant="h6" fontWeight={700} color={theme.palette.secondary.main}>100+</Typography>
                                      <Typography variant="caption" color="text.secondary">Customers</Typography>
                                    </Box>
                                  </Grid>
                                  <Grid item xs={6} sm={3}>
                                    <Box sx={{ textAlign: 'center' }}>
                                      <Typography variant="h6" fontWeight={700} color={theme.palette.secondary.main}>$3M</Typography>
                                      <Typography variant="caption" color="text.secondary">ARR</Typography>
                                    </Box>
                                  </Grid>
                                  <Grid item xs={6} sm={3}>
                                    <Box sx={{ textAlign: 'center' }}>
                                      <Typography variant="h6" fontWeight={700} color={theme.palette.secondary.main}>5</Typography>
                                      <Typography variant="caption" color="text.secondary">Industries</Typography>
                                    </Box>
                                  </Grid>
                                  <Grid item xs={6} sm={3}>
                                    <Box sx={{ textAlign: 'center' }}>
                                      <Typography variant="h6" fontWeight={700} color={theme.palette.secondary.main}>35</Typography>
                                      <Typography variant="caption" color="text.secondary">Team Size</Typography>
                                    </Box>
                                  </Grid>
                                </>
                              )}
                              
                              {index === 2 && (
                                <>
                                  <Grid item xs={6} sm={3}>
                                    <Box sx={{ textAlign: 'center' }}>
                                      <Typography variant="h6" fontWeight={700} color={theme.palette.success.main}>300+</Typography>
                                      <Typography variant="caption" color="text.secondary">Customers</Typography>
                                    </Box>
                                  </Grid>
                                  <Grid item xs={6} sm={3}>
                                    <Box sx={{ textAlign: 'center' }}>
                                      <Typography variant="h6" fontWeight={700} color={theme.palette.success.main}>$10M</Typography>
                                      <Typography variant="caption" color="text.secondary">ARR</Typography>
                                    </Box>
                                  </Grid>
                                  <Grid item xs={6} sm={3}>
                                    <Box sx={{ textAlign: 'center' }}>
                                      <Typography variant="h6" fontWeight={700} color={theme.palette.success.main}>10+</Typography>
                                      <Typography variant="caption" color="text.secondary">Industries</Typography>
                                    </Box>
                                  </Grid>
                                  <Grid item xs={6} sm={3}>
                                    <Box sx={{ textAlign: 'center' }}>
                                      <Typography variant="h6" fontWeight={700} color={theme.palette.success.main}>75+</Typography>
                                      <Typography variant="caption" color="text.secondary">Team Size</Typography>
                                    </Box>
                                  </Grid>
                                </>
                              )}
                            </Grid>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </motion.div>
                ))}
                
                {/* Summary */}
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                      Projected Growth Trajectory
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
                      Our growth strategy is designed to achieve sustainable expansion while maintaining product excellence. 
                      By year three, we project reaching $10M+ in annual recurring revenue with a diverse customer base across multiple industries.
                    </Typography>
                  </motion.div>
                </Box>
              </Box>
            </Box>
          </Box>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Box sx={{ 
              mt: 6, 
              p: 4, 
              borderRadius: 3,
              background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
              color: 'white',
              textAlign: 'center',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)'
            }}>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                Join Us in Transforming Recruitment
              </Typography>
              <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto', mb: 3 }}>
                With our innovative AI platform, strong team, and clear growth strategy, HireGenix is positioned to disrupt the $150B+ global recruitment market. Your investment will help us scale faster and capture this massive opportunity.
              </Typography>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  sx={{ 
                    px: 4, 
                    py: 1.5, 
                    borderRadius: 2,
                    fontWeight: 600,
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
                  }}
                  href="#contact"
                >
                  Contact Investor Relations
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </motion.div>
      </TabPanel>
    </Box>
  );
};

export default InvestorRelationsOverview;
