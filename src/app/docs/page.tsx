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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  alpha,
  useTheme,
} from '@mui/material';
import {
  MenuBook as MenuBookIcon,
  Code as CodeIcon,
  IntegrationInstructions as IntegrationInstructionsIcon,
  Api as ApiIcon,
  VideoLibrary as VideoLibraryIcon,
  Help as HelpIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { motion } from 'framer-motion';

const documentationCategories = [
  {
    title: 'Getting Started',
    description: 'Learn the basics of HireGenix platform',
    icon: <MenuBookIcon fontSize="large" />,
    links: [
      { title: 'Platform Overview', href: '/docs/platform-overview' },
      { title: 'Quick Start Guide', href: '/docs/quick-start' },
      { title: 'Account Setup', href: '/docs/account-setup' },
      { title: 'User Roles & Permissions', href: '/docs/user-roles' },
    ],
  },
  {
    title: 'Developer Resources',
    description: 'Technical documentation for developers',
    icon: <CodeIcon fontSize="large" />,
    links: [
      { title: 'API Reference', href: '/docs/api-reference' },
      { title: 'Webhooks', href: '/docs/webhooks' },
      { title: 'Authentication', href: '/docs/authentication' },
      { title: 'Rate Limits', href: '/docs/rate-limits' },
    ],
  },
  {
    title: 'Integrations',
    description: 'Connect HireGenix with your tools',
    icon: <IntegrationInstructionsIcon fontSize="large" />,
    links: [
      { title: 'ATS Integrations', href: '/docs/ats-integrations' },
      { title: 'HRIS Integrations', href: '/docs/hris-integrations' },
      { title: 'Calendar Integrations', href: '/docs/calendar-integrations' },
      { title: 'Custom Integrations', href: '/docs/custom-integrations' },
    ],
  },
  {
    title: 'API Documentation',
    description: 'Comprehensive API guides',
    icon: <ApiIcon fontSize="large" />,
    links: [
      { title: 'REST API', href: '/docs/rest-api' },
      { title: 'GraphQL API', href: '/docs/graphql-api' },
      { title: 'API Clients', href: '/docs/api-clients' },
      { title: 'API Versioning', href: '/docs/api-versioning' },
    ],
  },
  {
    title: 'Video Tutorials',
    description: 'Learn through step-by-step videos',
    icon: <VideoLibraryIcon fontSize="large" />,
    links: [
      { title: 'Admin Dashboard', href: '/docs/video-admin-dashboard' },
      { title: 'Candidate Assessment', href: '/docs/video-candidate-assessment' },
      { title: 'Interview Setup', href: '/docs/video-interview-setup' },
      { title: 'Analytics & Reporting', href: '/docs/video-analytics' },
    ],
  },
  {
    title: 'FAQs & Troubleshooting',
    description: 'Common questions and solutions',
    icon: <HelpIcon fontSize="large" />,
    links: [
      { title: 'Common Issues', href: '/docs/common-issues' },
      { title: 'Best Practices', href: '/docs/best-practices' },
      { title: 'Security FAQ', href: '/docs/security-faq' },
      { title: 'Support Resources', href: '/docs/support' },
    ],
  },
];

export default function DocumentationPage() {
  const theme = useTheme();

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
            Documentation
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto', mb: 4, lineHeight: 1.6 }}
          >
            Comprehensive guides and resources to help you get the most out of the HireGenix platform
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              flexWrap: 'wrap',
              mt: 4,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={Link}
              href="/docs/quick-start"
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
              Quick Start Guide
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              component={Link}
              href="/docs/api-reference"
              sx={{
                borderRadius: 2,
                px: 4,
                py: 1.5,
                borderWidth: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
                  borderWidth: 2,
                },
              }}
            >
              API Reference
            </Button>
          </Box>
        </Box>

        {/* Documentation Categories */}
        <Grid container spacing={4}>
          {documentationCategories.map((category, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  backgroundColor: 'background.paper',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                    transform: 'translateY(-5px)',
                    borderColor: alpha(theme.palette.primary.main, 0.3),
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 60,
                      height: 60,
                      borderRadius: 2,
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.main,
                      mr: 2,
                    }}
                  >
                    {category.icon}
                  </Box>
                  <Box>
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                      {category.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {category.description}
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                <List>
                  {category.links.map((link, linkIndex) => (
                    <ListItem
                      key={linkIndex}
                      component={Link}
                      href={link.href}
                      sx={{
                        px: 2,
                        py: 1,
                        borderRadius: 1,
                        mb: 0.5,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          backgroundColor: alpha(theme.palette.primary.main, 0.05),
                          transform: 'translateX(5px)',
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 36,
                          color: theme.palette.primary.main,
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: theme.palette.primary.main,
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            variant="body1"
                            color="text.primary"
                            sx={{ fontWeight: 500 }}
                          >
                            {link.title}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>

                <Box sx={{ mt: 2, textAlign: 'right' }}>
                  <Button
                    component={Link}
                    href={`/docs/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                    color="primary"
                    sx={{
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    View All
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Additional Resources */}
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
          }}
        >
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Need Additional Help?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Our support team is available to assist you with any questions or issues you may encounter.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              mt: 3,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              component={Link}
              href="/contact"
              sx={{
                borderRadius: 2,
                px: 3,
                py: 1.2,
              }}
            >
              Contact Support
            </Button>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              href="/docs/faq"
              sx={{
                borderRadius: 2,
                px: 3,
                py: 1.2,
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                },
              }}
            >
              View FAQs
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
