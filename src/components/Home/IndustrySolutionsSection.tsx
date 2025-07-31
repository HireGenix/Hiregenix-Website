'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  alpha,
  Paper,
  Chip,
  Button,
  Tab,
  Tabs
} from '@mui/material';
import {
  Business as BusinessIcon,
  LocalHospital as LocalHospitalIcon,
  Code as CodeIcon,
  School as SchoolIcon,
  AccountBalance as AccountBalanceIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
      id={`industry-tabpanel-${index}`}
      aria-labelledby={`industry-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `industry-tab-${index}`,
    'aria-controls': `industry-tabpanel-${index}`,
  };
}

export const IndustrySolutionsSection: React.FC = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // Industry data
  const industries = [
    {
      name: 'Technology',
      icon: <CodeIcon sx={{ fontSize: '2.5rem', color: theme.palette.primary.main }} />,
      description: 'Specialized solutions for tech companies facing unique hiring challenges in a competitive market.',
      challenges: [
        'High demand for specialized technical skills',
        'Competitive talent market with low unemployment',
        'Need for cultural fit in fast-paced environments',
        'Technical assessment accuracy'
      ],
      solutions: [
        {
          title: 'AI-Powered Technical Matching',
          description: 'Our semantic understanding engine identifies candidates with the exact technical skills you need, even when their resumes don\'t use the exact keywords.'
        },
        {
          title: 'Automated Technical Assessments',
          description: 'Customizable coding challenges and technical assessments that evaluate real-world skills, not just theoretical knowledge.'
        },
        {
          title: 'Culture Fit Analysis',
          description: 'Advanced matching algorithms that consider work style, communication preferences, and values alignment.'
        }
      ],
      stats: [
        { label: 'Reduction in Time-to-Hire', value: '41%' },
        { label: 'Increase in Quality Hires', value: '37%' },
        { label: 'Tech Clients', value: '500+' }
      ]
    },
    {
      name: 'Healthcare',
      icon: <LocalHospitalIcon sx={{ fontSize: '2.5rem', color: theme.palette.primary.main }} />,
      description: 'Tailored recruitment solutions for healthcare organizations facing critical staffing challenges.',
      challenges: [
        'Chronic shortage of qualified healthcare professionals',
        'Credential verification and compliance requirements',
        'High turnover rates and burnout concerns',
        'Specialized skill verification'
      ],
      solutions: [
        {
          title: 'Healthcare Talent Pool',
          description: 'Access to pre-screened healthcare professionals across all specialties, with verified credentials and experience.'
        },
        {
          title: 'Compliance Automation',
          description: 'Automated credential verification, license tracking, and compliance monitoring to ensure all regulatory requirements are met.'
        },
        {
          title: 'Retention-Focused Matching',
          description: 'Predictive analytics that identify candidates most likely to stay long-term based on career goals and work preferences.'
        }
      ],
      stats: [
        { label: 'Faster Placements', value: '52%' },
        { label: 'Improved Retention', value: '43%' },
        { label: 'Healthcare Clients', value: '350+' }
      ]
    },
    {
      name: 'Finance',
      icon: <AccountBalanceIcon sx={{ fontSize: '2.5rem', color: theme.palette.primary.main }} />,
      description: 'Secure, compliant recruitment solutions for financial institutions with strict regulatory requirements.',
      challenges: [
        'Stringent regulatory compliance requirements',
        'Need for both technical and interpersonal skills',
        'Risk management in hiring decisions',
        'Confidentiality and security concerns'
      ],
      solutions: [
        {
          title: 'Compliance-First Recruitment',
          description: 'Built-in compliance checks and background verification processes designed specifically for financial services roles.'
        },
        {
          title: 'Risk Assessment Profiles',
          description: 'Candidate evaluation that includes risk tolerance and ethical decision-making assessments.'
        },
        {
          title: 'Secure Candidate Management',
          description: 'End-to-end encrypted candidate data management that meets the highest security standards in the financial industry.'
        }
      ],
      stats: [
        { label: 'Compliance Improvement', value: '67%' },
        { label: 'Reduced Hiring Risk', value: '54%' },
        { label: 'Financial Clients', value: '200+' }
      ]
    },
    {
      name: 'Education',
      icon: <SchoolIcon sx={{ fontSize: '2.5rem', color: theme.palette.primary.main }} />,
      description: 'Specialized recruitment tools for educational institutions seeking qualified faculty and staff.',
      challenges: [
        'Finding candidates with both subject expertise and teaching ability',
        'Seasonal hiring cycles and budget constraints',
        'Background check and safety requirements',
        'Cultural fit within educational philosophy'
      ],
      solutions: [
        {
          title: 'Educator-Specific Assessments',
          description: 'Customized assessments that evaluate both subject matter expertise and teaching/communication abilities.'
        },
        {
          title: 'Seasonal Hiring Planning',
          description: 'Tools to manage cyclical recruitment needs with pipeline building and talent pool management.'
        },
        {
          title: 'Enhanced Background Verification',
          description: 'Comprehensive background checks designed specifically for educational settings with student safety as the priority.'
        }
      ],
      stats: [
        { label: 'Faculty Quality Improvement', value: '48%' },
        { label: 'Faster Seasonal Hiring', value: '61%' },
        { label: 'Education Clients', value: '300+' }
      ]
    },
    {
      name: 'Manufacturing',
      icon: <BusinessIcon sx={{ fontSize: '2.5rem', color: theme.palette.primary.main }} />,
      description: 'Efficient recruitment solutions for manufacturing companies facing skilled labor shortages.',
      challenges: [
        'Skilled labor shortages in specific geographic areas',
        'Verification of hands-on technical skills',
        'Safety-conscious hiring requirements',
        'High volume hiring needs'
      ],
      solutions: [
        {
          title: 'Skills-Based Matching',
          description: 'Advanced matching that identifies transferable skills from adjacent industries to expand your candidate pool.'
        },
        {
          title: 'Practical Skills Assessment',
          description: 'Virtual and in-person assessment tools that verify hands-on abilities and technical knowledge.'
        },
        {
          title: 'High-Volume Hiring Automation',
          description: 'Streamlined processes for efficiently managing large-scale hiring initiatives without sacrificing quality.'
        }
      ],
      stats: [
        { label: 'Skilled Labor Placement', value: '57%' },
        { label: 'Reduction in Safety Incidents', value: '32%' },
        { label: 'Manufacturing Clients', value: '250+' }
      ]
    }
  ];

  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        background: `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.8)} 0%, ${theme.palette.background.default} 100%)`,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle background elements */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '40%',
          height: '40%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.light, 0.1)} 0%, rgba(255,255,255,0) 70%)`,
          filter: 'blur(60px)',
          zIndex: 1
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip 
            label="INDUSTRY SOLUTIONS" 
            color="primary" 
            size="small"
            sx={{ 
              mb: 2, 
              fontWeight: 600,
              background: alpha(theme.palette.primary.main, 0.1),
              border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
              color: theme.palette.primary.main,
            }} 
          />
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
              mb: 2,
              background: `linear-gradient(90deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Tailored for Your Industry
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="text.secondary"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              fontWeight: 400,
              maxWidth: 700,
              mx: 'auto',
              mb: 6
            }}
          >
            Specialized recruitment solutions designed for the unique challenges in your sector
          </Typography>
        </Box>

        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs 
              value={value} 
              onChange={handleChange} 
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              aria-label="industry tabs"
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: theme.palette.primary.main,
                },
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  minWidth: 120,
                  '&.Mui-selected': {
                    color: theme.palette.primary.main,
                  },
                },
              }}
            >
              {industries.map((industry, index) => (
                <Tab 
                  key={index}
                  icon={industry.icon} 
                  label={industry.name} 
                  {...a11yProps(index)} 
                  sx={{ 
                    display: 'flex', 
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 1,
                    py: 2
                  }}
                />
              ))}
            </Tabs>
          </Box>

          {industries.map((industry, index) => (
            <TabPanel key={index} value={value} index={index}>
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Grid container spacing={6}>
                  <Grid item xs={12} md={6}>
                    <Typography
                      variant="h3"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        mb: 3,
                        fontSize: { xs: '1.75rem', md: '2.25rem' }
                      }}
                    >
                      {industry.name} Recruitment Solutions
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        mb: 4,
                        lineHeight: 1.7
                      }}
                    >
                      {industry.description}
                    </Typography>

                    <Box
                      sx={{
                        p: 3,
                        borderRadius: '16px',
                        background: alpha(theme.palette.primary.light, 0.05),
                        border: `1px solid ${alpha(theme.palette.primary.light, 0.1)}`,
                        mb: 4
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 2
                        }}
                      >
                        Common {industry.name} Recruitment Challenges:
                      </Typography>
                      <Grid container spacing={2}>
                        {industry.challenges.map((challenge, idx) => (
                          <Grid item xs={12} sm={6} key={idx}>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center'
                              }}
                            >
                              <Box
                                sx={{
                                  width: 8,
                                  height: 8,
                                  borderRadius: '50%',
                                  background: theme.palette.primary.main,
                                  mr: 2
                                }}
                              />
                              <Typography variant="body2">
                                {challenge}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>

                    <Grid container spacing={3} sx={{ mb: 4 }}>
                      {industry.stats.map((stat, idx) => (
                        <Grid item xs={4} key={idx}>
                          <Box
                            sx={{
                              textAlign: 'center',
                              p: 2,
                              borderRadius: '16px',
                              background: 'rgba(255, 255, 255, 0.8)',
                              backdropFilter: 'blur(10px)',
                              border: '1px solid rgba(0, 0, 0, 0.05)',
                            }}
                          >
                            <Typography
                              variant="h4"
                              sx={{
                                fontWeight: 700,
                                color: theme.palette.primary.main,
                                mb: 1
                              }}
                            >
                              {stat.value}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{
                                fontSize: '0.75rem'
                              }}
                            >
                              {stat.label}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>

                    <Button
                      variant="contained"
                      color="primary"
                      endIcon={<ArrowForwardIcon />}
                      component={Link}
                      href={`/solutions/${industry.name.toLowerCase()}`}
                      sx={{
                        py: 1.5,
                        px: 3,
                        borderRadius: '50px',
                        fontWeight: 600,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
                        }
                      }}
                    >
                      {industry.name} Solutions
                    </Button>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Typography
                      variant="h5"
                      component="h4"
                      sx={{
                        fontWeight: 600,
                        mb: 3
                      }}
                    >
                      Our {industry.name} Solutions
                    </Typography>

                    {industry.solutions.map((solution, idx) => (
                      <Paper
                        key={idx}
                        elevation={0}
                        sx={{
                          p: 3,
                          mb: 3,
                          borderRadius: '16px',
                          background: 'rgba(255, 255, 255, 0.8)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(0, 0, 0, 0.05)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                            transform: 'translateY(-5px)'
                          }
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            mb: 1,
                            color: theme.palette.primary.main
                          }}
                        >
                          {solution.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                        >
                          {solution.description}
                        </Typography>
                      </Paper>
                    ))}

                    <Box
                      sx={{
                        mt: 4,
                        p: 3,
                        borderRadius: '16px',
                        background: alpha(theme.palette.secondary.light, 0.1),
                        border: `1px solid ${alpha(theme.palette.secondary.light, 0.3)}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600
                        }}
                      >
                        Need a custom {industry.name.toLowerCase()} solution?
                      </Typography>
                      <Button
                        variant="outlined"
                        color="secondary"
                        component={Link}
                        href="/contact"
                        sx={{
                          borderRadius: '50px',
                          fontWeight: 600
                        }}
                      >
                        Contact Us
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </motion.div>
            </TabPanel>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
