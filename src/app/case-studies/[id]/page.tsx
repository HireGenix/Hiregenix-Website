'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
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
  Divider,
  Avatar,
  Rating,
  CircularProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { 
  FormatQuote as FormatQuoteIcon,
  ArrowBack as ArrowBackIcon,
  Business as BusinessIcon,
  BarChart as BarChartIcon,
  Timeline as TimelineIcon,
  People as PeopleIcon,
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { SEOMetadata } from '@/components/SEO';
import { Layout } from '@/components/Layout';
import { CaseStudiesCTA } from '@/components/CaseStudies/CaseStudiesCTA';

// Case studies data (same as in CaseStudiesList)
const caseStudies = [
  {
    id: 'bccm',
    company: 'BCCM',
    logo: '/clients/bccm logo.png',
    industry: 'Hospitality',
    headline: 'Revolutionizing Hospitality Hiring with AI-Powered Recruitment',
    summary: 'How BCCM reduced time-to-hire by 45% and improved candidate quality using HireGenix\'s AI matching technology.',
    quote: 'HireGenix helped us reduce our time-to-hire by 45% and improved the quality of our candidates significantly. The AI matching technology is a game-changer.',
    stats: [
      { label: 'Reduction in Time-to-Hire', value: '45%' },
      { label: 'Increase in Quality Hires', value: '32%' },
      { label: 'Cost Savings', value: '$120K' },
      { label: 'Candidate Experience Rating', value: '4.8/5' }
    ],
    challenges: [
      'High volume of applications for hospitality roles',
      'Difficulty identifying candidates with the right skill sets',
      'Long and inefficient hiring process',
      'Inconsistent candidate evaluation'
    ],
    solutions: [
      'Implemented AI-powered candidate matching',
      'Automated hospitality skills assessment',
      'Streamlined interview scheduling',
      'Standardized evaluation criteria'
    ],
    results: [
      'Reduced time-to-hire from 45 days to 25 days on average',
      'Increased quality of hires by 32% based on performance reviews',
      'Saved $120,000 annually in recruitment costs',
      'Improved candidate experience rating from 3.6 to 4.8 out of 5'
    ],
    implementation: [
      'Integrated HireGenix with existing ATS within 2 weeks',
      'Customized AI matching algorithms for hospitality roles',
      'Trained hiring managers on new evaluation system',
      'Implemented automated feedback collection from candidates'
    ],
    testimonials: [
      {
        quote: 'The AI matching has been incredibly accurate. We\'re seeing candidates who are not just qualified on paper, but who truly fit our hospitality needs and company culture.',
        author: 'Rajiv Sharma',
        title: 'Operations Manager, BCCM'
      },
      {
        quote: 'As a hiring manager, I\'ve saved at least 10 hours per week that I used to spend screening resumes. Now I can focus on meaningful interviews with pre-qualified candidates.',
        author: 'Priya Patel',
        title: 'HR Manager, BCCM'
      }
    ],
    person: {
      name: 'Deepak Jha',
      title: 'Director',
      avatar: '/avatars/avatar1.jpg'
    },
    rating: 5,
    fullDescription: 'BCCM, a rapidly growing hospitality company with over 15 properties across India, was struggling to efficiently hire qualified talent for their hotels and resorts. With hundreds of applications for each open position, their recruitment team was overwhelmed, and hiring managers were spending too much time screening unqualified candidates.\n\nAfter implementing HireGenix\'s AI-powered recruitment platform, BCCM was able to dramatically transform their hiring process. The AI matching technology accurately identified candidates with the right hospitality skills and cultural fit, while the automated assessment tools provided objective evaluation of candidates\' abilities.\n\nThe results were impressive: a 45% reduction in time-to-hire, 32% improvement in quality of hires, and significant cost savings. Most importantly, both candidates and hiring managers reported much higher satisfaction with the recruitment process. This has allowed BCCM to maintain their high standards of service while expanding their operations across new locations.'
  },
  {
    id: 'xs-worldwide',
    company: 'XS Worldwide',
    logo: '/clients/xs-nxt-light.webp',
    industry: 'Exhibition Industry',
    headline: 'Transforming Exhibition Industry Recruitment with Specialized Skills Assessment',
    summary: 'XS Worldwide achieved 60% improvement in candidate retention after implementing HireGenix\'s specialized exhibition industry skills assessment.',
    quote: 'The skills assessment feature has been invaluable for our specialized roles. We\'ve seen a 60% improvement in candidate retention after implementing HireGenix.',
    stats: [
      { label: 'Improvement in Retention', value: '60%' },
      { label: 'Reduction in Bad Hires', value: '75%' },
      { label: 'ROI in First Year', value: '320%' },
      { label: 'Time Saved per Hire', value: '12 days' }
    ],
    challenges: [
      'Difficulty assessing specialized exhibition industry skills',
      'High turnover due to skills mismatch',
      'Time-consuming interview process for event roles',
      'Compliance and certification verification challenges'
    ],
    solutions: [
      'Customized exhibition industry skills assessment',
      'Role-specific screening questions',
      'Automated credential verification',
      'Compliance-focused candidate tracking'
    ],
    results: [
      'Improved employee retention by 60% in the first year',
      'Reduced mis-hires by 75%',
      'Achieved 320% ROI in the first year',
      'Shortened hiring process by 12 days on average'
    ],
    implementation: [
      'Developed custom assessment modules for 15 different exhibition roles',
      'Integrated credential verification with industry databases',
      'Created compliance-focused workflow for candidate tracking',
      'Trained HR team on exhibition industry-specific features'
    ],
    testimonials: [
      {
        quote: 'The specialized assessments have transformed our ability to identify truly qualified exhibition professionals. We\'re no longer relying on resumes and interviews alone.',
        author: 'Vikram Singh',
        title: 'Exhibition Director, XS Worldwide'
      },
      {
        quote: 'The automated credential verification has been a game-changer for our compliance team. What used to take days now happens in minutes.',
        author: 'Ananya Gupta',
        title: 'Compliance Manager, XS Worldwide'
      }
    ],
    person: {
      name: 'Kay Madaan',
      title: 'CEO',
      avatar: '/avatars/avatar2.jpg'
    },
    rating: 5,
    fullDescription: 'XS Worldwide, a leading exhibition and event management company operating across Asia and the Middle East, was facing significant challenges in recruiting and retaining qualified staff for their specialized exhibition roles. Their traditional recruitment methods were failing to accurately assess candidates\' specialized skills, resulting in high turnover and increased costs.\n\nAfter implementing HireGenix\'s exhibition industry-specific recruitment platform, XS Worldwide was able to transform their hiring process. The customized skills assessments accurately evaluated candidates\' abilities in event management, booth design, client relations, and logistics, while the automated credential verification system ensured compliance with industry standards.\n\nThe results exceeded expectations: a 60% improvement in employee retention, 75% reduction in mis-hires, and a 320% return on investment in the first year. The streamlined process also reduced their average time-to-hire by 12 days, allowing them to secure top talent before competitors. This has been particularly valuable in the fast-paced exhibition industry where projects often require rapid scaling of teams.'
  },
  {
    id: 'startupflux',
    company: 'StartupFlux',
    logo: '/clients/startupflux.svg',
    industry: 'Marketing and Communications',
    headline: 'Scaling Recruitment Operations for Rapid Growth',
    summary: 'How StartupFlux tripled their hiring capacity while maintaining quality during a period of rapid expansion.',
    quote: 'As a rapidly growing company, we needed to scale our hiring process without sacrificing quality. HireGenix\'s platform allowed us to triple our hiring capacity with the same team.',
    stats: [
      { label: 'Increase in Hiring Capacity', value: '300%' },
      { label: 'Candidate Experience Rating', value: '4.8/5' },
      { label: 'Reduction in Hiring Costs', value: '28%' },
      { label: 'Compliance Accuracy', value: '99.7%' }
    ],
    challenges: [
      'Rapid company growth requiring mass hiring',
      'Limited recruitment team resources',
      'Maintaining consistent quality while scaling',
      'Complex requirements in marketing and communications'
    ],
    solutions: [
      'Automated candidate sourcing and screening',
      'Bulk interview scheduling',
      'Standardized assessment process',
      'Workflow automation'
    ],
    results: [
      'Increased hiring capacity by 300% without adding staff',
      'Maintained candidate experience rating of 4.8/5',
      'Reduced per-hire recruitment costs by 28%',
      'Achieved 99.7% compliance accuracy'
    ],
    implementation: [
      'Deployed HireGenix platform across 5 business units in 3 weeks',
      'Integrated with existing HRIS systems',
      'Created standardized assessment templates for 25 marketing role types',
      'Implemented automated portfolio review process'
    ],
    testimonials: [
      {
        quote: 'HireGenix allowed us to scale our hiring from 10 to 30 new employees per month without adding a single recruiter to our team.',
        author: 'Arjun Mehta',
        title: 'COO, StartupFlux'
      },
      {
        quote: 'The portfolio review automation has been critical for our creative roles. We can now efficiently evaluate design and content creation skills at scale.',
        author: 'Riya Kapoor',
        title: 'Creative Director, StartupFlux'
      }
    ],
    person: {
      name: 'Neha Varma',
      title: 'Founder',
      avatar: '/avatars/avatar3.jpg'
    },
    rating: 4.5,
    fullDescription: 'StartupFlux, a rapidly growing marketing and communications agency, was facing the challenge of scaling their recruitment operations to support their business expansion. With plans to double their workforce of 200 employees within a year, their small recruitment team was overwhelmed by the volume of hiring needed, especially for specialized creative and technical marketing roles.\n\nAfter implementing HireGenix\'s recruitment platform, StartupFlux was able to dramatically increase their hiring capacity while maintaining quality. The automated candidate sourcing and screening tools allowed their recruiters to focus on high-value activities, while the standardized assessment process ensured consistent evaluation of candidates\' marketing and creative skills.\n\nThe results were impressive: a 300% increase in hiring capacity without adding recruitment staff, a 28% reduction in per-hire costs, and a maintained candidate experience rating of 4.8/5. Most importantly, the automated portfolio review process allowed them to efficiently evaluate design, content creation, and digital marketing skills at scale, ensuring they hired the right talent for their creative agency.'
  },
  {
    id: 'youlegal',
    company: 'YouLegal',
    logo: '/clients/FB836_YouLegal_Final.png',
    industry: 'Medical Legal (Australia)',
    headline: 'Streamlining Specialized Legal Hiring',
    summary: 'YouLegal reduced hiring time by 65% while improving employee retention in the medical legal sector.',
    quote: 'HireGenix transformed our hiring process. We can now onboard qualified staff in a fraction of the time, with much better retention rates.',
    stats: [
      { label: 'Reduction in Hiring Time', value: '65%' },
      { label: 'Staff Retention', value: '+40%' },
      { label: 'Hiring Manager Time Saved', value: '22 hrs/week' },
      { label: 'Application Completion Rate', value: '87%' }
    ],
    challenges: [
      'Specialized medical legal hiring needs',
      'Short timeframes for staffing up',
      'Inconsistent candidate quality',
      'High turnover of employees'
    ],
    solutions: [
      'Specialized candidate processing',
      'Mobile-friendly application process',
      'Automated screening and scheduling',
      'Predictive retention analytics'
    ],
    results: [
      'Reduced hiring time from 3 weeks to 5 days',
      'Improved staff retention by 40%',
      'Saved hiring managers 22 hours per week',
      'Increased application completion rate to 87%'
    ],
    implementation: [
      'Deployed mobile-optimized application process in 10 days',
      'Integrated with existing legal case management system',
      'Implemented specialized legal knowledge assessments',
      'Created custom retention prediction models'
    ],
    testimonials: [
      {
        quote: 'The specialized legal assessments have been a game-changer. We\'re identifying candidates with the right medical legal expertise much more efficiently.',
        author: 'James Wilson',
        title: 'Legal Director, YouLegal'
      },
      {
        quote: 'As a hiring manager, I used to spend days reviewing applications. Now the system pre-screens candidates based on their medical legal expertise, saving me tremendous time.',
        author: 'Emma Thompson',
        title: 'Senior Partner, YouLegal'
      }
    ],
    person: {
      name: 'Sarah Bartholomeusz',
      title: 'CEO',
      avatar: '/team/david-rodriguez.jpg'
    },
    rating: 5,
    fullDescription: 'YouLegal, a specialized law firm in Australia focusing on medical legal cases, faced significant challenges with their hiring process. They needed to find lawyers and paralegals with very specific expertise in both medical and legal fields, a rare combination that was difficult to assess through traditional recruitment methods.\n\nAfter implementing HireGenix\'s specialized recruitment platform, YouLegal transformed their hiring process. The customized legal knowledge assessments accurately evaluated candidates\' understanding of medical legal principles, while the automated screening process efficiently filtered applications based on specific expertise requirements.\n\nThe results exceeded expectations: a 65% reduction in hiring time, 40% improvement in staff retention, and 22 hours saved per week for each hiring manager. The mobile-friendly application process also increased the completion rate to 87%, ensuring they captured more qualified candidates. This has allowed YouLegal to grow their specialized practice while maintaining the high level of expertise required for their medical legal cases.'
  }
];

export default function CaseStudyDetailPage() {
  const theme = useTheme();
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  
  const [caseStudy, setCaseStudy] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call to fetch case study data
    setLoading(true);
    
    // Find the case study by ID
    const study = caseStudies.find(study => study.id === id);
    
    if (study) {
      setCaseStudy(study);
      setError(null);
    } else {
      setError('Case study not found');
    }
    
    setLoading(false);
  }, [id]);

  // SEO data
  const seoData = {
    title: caseStudy ? `${caseStudy.company} Case Study - HireGenix` : 'Case Study - HireGenix',
    description: caseStudy ? caseStudy.summary : 'Explore how organizations have transformed their recruitment processes with HireGenix.',
    keywords: `${caseStudy?.company || ''}, case study, recruitment success, HireGenix, ${caseStudy?.industry || ''} recruitment`,
  };

  if (loading) {
    return (
      <Layout>
        <SEOMetadata seoData={seoData} />
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
          <CircularProgress size={60} />
        </Box>
      </Layout>
    );
  }

  if (error || !caseStudy) {
    return (
      <Layout>
        <SEOMetadata seoData={seoData} />
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <ErrorIcon sx={{ fontSize: 60, color: 'error.main', mb: 2 }} />
            <Typography variant="h4" component="h1" gutterBottom>
              {error || 'Case study not found'}
            </Typography>
            <Typography variant="body1" paragraph>
              We couldn't find the case study you're looking for.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              href="/case-studies"
              startIcon={<ArrowBackIcon />}
              sx={{ mt: 2 }}
            >
              Back to Case Studies
            </Button>
          </Box>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOMetadata seoData={seoData} />
      
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 'auto', md: '80vh' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: `linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%)`,
          color: '#FFFFFF',
          pt: { xs: 12, md: 0 },
          pb: { xs: 10, md: 0 }
        }}
      >
        {/* Geometric pattern overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.05,
            backgroundImage: 'url(/hero-pattern.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1
          }}
        />

        {/* Animated gradient orbs */}
        <Box
          component={motion.div}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          sx={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: { xs: 200, md: 400 },
            height: { xs: 200, md: 400 },
            borderRadius: '50%',
            background: `radial-gradient(circle, ${theme.palette.primary.main}80 0%, rgba(0,0,0,0) 70%)`,
            filter: 'blur(80px)',
            zIndex: 1,
            animation: 'pulse 8s ease-in-out infinite',
            '@keyframes pulse': {
              '0%, 100%': { transform: 'scale(1)', opacity: 0.2 },
              '50%': { transform: 'scale(1.1)', opacity: 0.3 }
            }
          }}
        />

        <Box
          component={motion.div}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          sx={{
            position: 'absolute',
            bottom: '10%',
            left: '5%',
            width: { xs: 150, md: 300 },
            height: { xs: 150, md: 300 },
            borderRadius: '50%',
            background: `radial-gradient(circle, ${theme.palette.secondary.main}80 0%, rgba(0,0,0,0) 70%)`,
            filter: 'blur(80px)',
            zIndex: 1,
            animation: 'pulse2 10s ease-in-out infinite',
            '@keyframes pulse2': {
              '0%, 100%': { transform: 'scale(1)', opacity: 0.15 },
              '50%': { transform: 'scale(1.15)', opacity: 0.25 }
            }
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Button
            variant="text"
            color="inherit"
            component={Link}
            href="/case-studies"
            startIcon={<ArrowBackIcon />}
            sx={{ 
              mb: 4, 
              color: '#FFFFFF',
              '&:hover': {
                color: alpha('#FFFFFF', 0.8)
              }
            }}
          >
            Back to Case Studies
          </Button>

          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Chip
                  label={caseStudy.industry}
                  sx={{ 
                    mb: 3, 
                    py: 2,
                    px: 2,
                    borderRadius: '50px',
                    background: `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                  }}
                />

                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontSize: { xs: '2.25rem', sm: '3rem', md: '3.5rem' },
                    fontWeight: 800,
                    mb: 2,
                    background: `linear-gradient(90deg, #FFFFFF 0%, ${theme.palette.primary.light} 100%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em'
                  }}
                >
                  {caseStudy.headline}
                </Typography>

                <Typography
                  variant="h5"
                  component="p"
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    fontWeight: 400,
                    mb: 4,
                    color: 'rgba(255, 255, 255, 0.8)',
                    maxWidth: 600,
                    lineHeight: 1.6
                  }}
                >
                  {caseStudy.summary}
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 3
                    }}
                  >
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '16px',
                        background: '#FFFFFF',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                        mr: 2
                      }}
                    >
                      <Box
                        component="img"
                        src={caseStudy.logo}
                        alt={caseStudy.company}
                        sx={{
                          width: 45,
                          height: 45,
                          objectFit: 'contain'
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                          fontWeight: 700,
                          fontSize: '1.5rem'
                        }}
                      >
                        {caseStudy.company}
                      </Typography>
                      <Rating 
                        value={caseStudy.rating} 
                        precision={0.5} 
                        readOnly 
                        size="small"
                        sx={{ mt: 0.5 }}
                      />
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      mb: 3,
                      position: 'relative',
                      pl: 2
                    }}
                  >
                    <FormatQuoteIcon
                      sx={{
                        position: 'absolute',
                        top: -10,
                        left: -15,
                        fontSize: '2rem',
                        color: alpha(theme.palette.primary.main, 0.2),
                        transform: 'rotate(180deg)'
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontStyle: 'italic',
                        mb: 3,
                        lineHeight: 1.6
                      }}
                    >
                      "{caseStudy.quote}"
                    </Typography>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600 }}
                      >
                        {caseStudy.person.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        {caseStudy.person.title}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: '#FFFFFF',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {caseStudy.stats.map((stat: { label: string, value: string }, idx: number) => (
              <Grid item xs={6} sm={3} key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      borderRadius: '16px',
                      background: alpha(theme.palette.primary.light, 0.05),
                      border: `1px solid ${alpha(theme.palette.primary.light, 0.1)}`,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        color: theme.palette.primary.main,
                        mb: 1,
                        fontSize: { xs: '1.75rem', md: '2.25rem' }
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: '0.875rem',
                        lineHeight: 1.2
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Main Content Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 100%)',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Left Column - Full Description */}
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontWeight: 700,
                    mb: 4,
                    color: theme.palette.primary.main
                  }}
                >
                  Overview
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    mb: 5,
                    lineHeight: 1.8,
                    color: theme.palette.text.secondary,
                    fontSize: '1.05rem',
                    whiteSpace: 'pre-line'
                  }}
                >
                  {caseStudy.fullDescription}
                </Typography>

                {/* Results Section */}
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <BarChartIcon sx={{ mr: 1, color: theme.palette.success.main }} />
                  Results
                </Typography>
                
                <List sx={{ mb: 5 }}>
                  {caseStudy.results.map((result: string, idx: number) => (
                    <ListItem key={idx} sx={{ py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckCircleIcon sx={{ color: theme.palette.success.main }} />
                      </ListItemIcon>
                      <ListItemText primary={result} />
                    </ListItem>
                  ))}
                </List>

                {/* Implementation Section */}
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <TimelineIcon sx={{ mr: 1, color: theme.palette.info.main }} />
                  Implementation
                </Typography>
                
                <List sx={{ mb: 5 }}>
                  {caseStudy.implementation.map((step: string, idx: number) => (
                    <ListItem key={idx} sx={{ py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckCircleIcon sx={{ color: theme.palette.info.main }} />
                      </ListItemIcon>
                      <ListItemText primary={step} />
                    </ListItem>
                  ))}
                </List>
              </motion.div>
            </Grid>

            {/* Right Column - Challenges, Solutions, Testimonials */}
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Challenges Section */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    mb: 4,
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 3,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <BusinessIcon sx={{ mr: 1, color: theme.palette.error.main }} />
                    Challenges
                  </Typography>
                  
                  <List>
                    {caseStudy.challenges.map((challenge: string, idx: number) => (
                      <ListItem key={idx} sx={{ py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon sx={{ color: theme.palette.error.main }} />
                        </ListItemIcon>
                        <ListItemText primary={challenge} />
                      </ListItem>
                    ))}
                  </List>
                </Paper>

                {/* Solutions Section */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    mb: 4,
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 3,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <CheckCircleIcon sx={{ mr: 1, color: theme.palette.success.main }} />
                    Solutions
                  </Typography>
                  
                  <List>
                    {caseStudy.solutions.map((solution: string, idx: number) => (
                      <ListItem key={idx} sx={{ py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon sx={{ color: theme.palette.success.main }} />
                        </ListItemIcon>
                        <ListItemText primary={solution} />
                      </ListItem>
                    ))}
                  </List>
                </Paper>

                {/* Testimonials Section */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 3,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <PeopleIcon sx={{ mr: 1, color: theme.palette.secondary.main }} />
                    Testimonials
                  </Typography>
                  
                  {caseStudy.testimonials.map((testimonial: { quote: string, author: string, title: string }, idx: number) => (
                    <Box
                      key={idx}
                      sx={{
                        mb: idx < caseStudy.testimonials.length - 1 ? 4 : 0,
                        position: 'relative',
                        pl: 2
                      }}
                    >
                      <FormatQuoteIcon
                        sx={{
                          position: 'absolute',
                          top: -10,
                          left: -15,
                          fontSize: '1.5rem',
                          color: alpha(theme.palette.secondary.main, 0.2),
                          transform: 'rotate(180deg)'
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontStyle: 'italic',
                          mb: 2,
                          lineHeight: 1.6
                        }}
                      >
                        "{testimonial.quote}"
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{ 
                          fontWeight: 600,
                          color: theme.palette.secondary.main,
                        }}
                      >
                        {testimonial.author}
                        <Typography 
                          component="span" 
                          variant="caption" 
                          sx={{ 
                            display: 'block', 
                            color: theme.palette.text.secondary,
                            fontWeight: 400,
                          }}
                        >
                          {testimonial.title}
                        </Typography>
                      </Typography>
                      {idx < caseStudy.testimonials.length - 1 && (
                        <Divider sx={{ mt: 4 }} />
                      )}
                    </Box>
                  ))}
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <CaseStudiesCTA />
    </Layout>
  );
}
