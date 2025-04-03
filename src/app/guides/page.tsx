'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  alpha,
  useTheme,
  Chip,
} from '@mui/material';
import {
  AccessTime as AccessTimeIcon,
  Person as PersonIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { motion } from 'framer-motion';

const guides = [
  {
    title: 'Getting Started with HireGenix',
    description: 'Learn how to set up your account and navigate the platform',
    image: '/solutions/ai-recruitment.jpg',
    category: 'Beginner',
    author: 'Sarah Johnson',
    readTime: '10 min',
    href: '/guides/getting-started',
  },
  {
    title: 'Creating Your First Job Posting',
    description: 'Step-by-step guide to creating effective job listings',
    image: '/solutions/video-interviews.jpg',
    category: 'Beginner',
    author: 'Michael Chen',
    readTime: '8 min',
    href: '/guides/creating-job-posting',
  },
  {
    title: 'Setting Up Video Interviews',
    description: 'Configure and customize your video interview process',
    image: '/solutions/candidate-assessment.jpg',
    category: 'Intermediate',
    author: 'Jessica Williams',
    readTime: '12 min',
    href: '/guides/video-interviews',
  },
  {
    title: 'Advanced Candidate Filtering',
    description: 'Learn how to use AI-powered filters to find the best candidates',
    image: '/solutions/talent-analytics.jpg',
    category: 'Advanced',
    author: 'David Rodriguez',
    readTime: '15 min',
    href: '/guides/advanced-filtering',
  },
  {
    title: 'Customizing Assessment Tests',
    description: 'Create tailored skills assessments for different roles',
    image: '/solutions/ai-recruitment.jpg',
    category: 'Intermediate',
    author: 'Sarah Johnson',
    readTime: '14 min',
    href: '/guides/custom-assessments',
  },
  {
    title: 'Analyzing Recruitment Metrics',
    description: 'Understand key metrics to optimize your hiring process',
    image: '/solutions/talent-analytics.jpg',
    category: 'Advanced',
    author: 'Michael Chen',
    readTime: '18 min',
    href: '/guides/recruitment-metrics',
  },
  {
    title: 'Integrating with ATS Systems',
    description: 'Connect HireGenix with your existing applicant tracking system',
    image: '/solutions/video-interviews.jpg',
    category: 'Advanced',
    author: 'Jessica Williams',
    readTime: '20 min',
    href: '/guides/ats-integration',
  },
  {
    title: 'Collaborative Hiring Workflows',
    description: 'Set up team collaboration for better hiring decisions',
    image: '/solutions/candidate-assessment.jpg',
    category: 'Intermediate',
    author: 'David Rodriguez',
    readTime: '16 min',
    href: '/guides/collaborative-hiring',
  },
];

const featuredGuides = guides.slice(0, 3);
const allGuides = guides.slice(3);

const categories = [
  { name: 'All', value: 'all' },
  { name: 'Beginner', value: 'beginner' },
  { name: 'Intermediate', value: 'intermediate' },
  { name: 'Advanced', value: 'advanced' },
];

export default function GuidesPage() {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredGuides = allGuides.filter(
    (guide) => selectedCategory === 'all' || guide.category.toLowerCase() === selectedCategory
  );

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
            Guides & Tutorials
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto', mb: 4, lineHeight: 1.6 }}
          >
            Step-by-step instructions and best practices to help you get the most out of HireGenix
          </Typography>
        </Box>

        {/* Featured Guides */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ mb: 4 }}
          >
            Featured Guides
          </Typography>
          <Grid container spacing={4}>
            {featuredGuides.map((guide, index) => (
              <Grid item xs={12} md={4} key={index}>
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
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)',
                    },
                  }}
                >
                  <CardActionArea component={Link} href={guide.href}>
                    <CardMedia
                      component="img"
                      height={200}
                      image={guide.image}
                      alt={guide.title}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Box sx={{ mb: 2 }}>
                        <Chip
                          label={guide.category}
                          size="small"
                          sx={{
                            backgroundColor: 
                              guide.category === 'Beginner' 
                                ? alpha(theme.palette.success.main, 0.1)
                                : guide.category === 'Intermediate'
                                ? alpha(theme.palette.info.main, 0.1)
                                : alpha(theme.palette.warning.main, 0.1),
                            color: 
                              guide.category === 'Beginner' 
                                ? theme.palette.success.main
                                : guide.category === 'Intermediate'
                                ? theme.palette.info.main
                                : theme.palette.warning.main,
                            fontWeight: 600,
                          }}
                        />
                      </Box>
                      <Typography variant="h5" component="h2" fontWeight={700} gutterBottom>
                        {guide.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        {guide.description}
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <PersonIcon fontSize="small" sx={{ color: 'text.secondary', mr: 0.5 }} />
                          <Typography variant="body2" color="text.secondary">
                            {guide.author}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <AccessTimeIcon fontSize="small" sx={{ color: 'text.secondary', mr: 0.5 }} />
                          <Typography variant="body2" color="text.secondary">
                            {guide.readTime}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Category Filter */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" fontWeight={700} sx={{ mb: 3 }}>
            All Guides
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 1.5,
              flexWrap: 'wrap',
              mb: 4,
            }}
          >
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'contained' : 'outlined'}
                color="primary"
                onClick={() => handleCategoryChange(category.value)}
                sx={{
                  borderRadius: 5,
                  px: 2.5,
                  py: 1,
                  borderWidth: 2,
                  '&.MuiButton-contained': {
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  },
                  '&.MuiButton-outlined': {
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                    },
                  },
                }}
              >
                {category.name}
              </Button>
            ))}
          </Box>
        </Box>

        {/* All Guides */}
        <Grid container spacing={4}>
          {filteredGuides.map((guide, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
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
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <CardActionArea component={Link} href={guide.href}>
                  <CardMedia
                    component="img"
                    height={160}
                    image={guide.image}
                    alt={guide.title}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                    <Box sx={{ mb: 1.5 }}>
                      <Chip
                        label={guide.category}
                        size="small"
                        sx={{
                          backgroundColor: 
                            guide.category === 'Beginner' 
                              ? alpha(theme.palette.success.main, 0.1)
                              : guide.category === 'Intermediate'
                              ? alpha(theme.palette.info.main, 0.1)
                              : alpha(theme.palette.warning.main, 0.1),
                          color: 
                            guide.category === 'Beginner' 
                              ? theme.palette.success.main
                              : guide.category === 'Intermediate'
                              ? theme.palette.info.main
                              : theme.palette.warning.main,
                          fontWeight: 600,
                        }}
                      />
                    </Box>
                    <Typography variant="h6" component="h2" fontWeight={700} gutterBottom>
                      {guide.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {guide.description}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        {guide.readTime}
                      </Typography>
                      <ArrowForwardIcon
                        fontSize="small"
                        sx={{
                          color: theme.palette.primary.main,
                          transition: 'transform 0.2s ease',
                          '.MuiCardActionArea-root:hover &': {
                            transform: 'translateX(4px)',
                          },
                        }}
                      />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Request Guide Section */}
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
            Can't Find What You're Looking For?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 800, mx: 'auto' }}>
            If you need help with a specific topic that isn't covered in our guides, let us know and our team will create a custom guide for you.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            href="/contact"
            size="large"
            sx={{
              borderRadius: 2,
              px: 4,
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
            Request a Guide
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
