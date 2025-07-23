'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  alpha,
  Paper,
  Grid,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Download as DownloadIcon,
  ArrowBack as ArrowBackIcon,
  CheckCircle as CheckCircleIcon,
  Description as DescriptionIcon,
  Category as CategoryIcon,
  CalendarToday as CalendarTodayIcon,
  Share as ShareIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Resource } from './ResourcesList';

export const ResourceDetail: React.FC<{
  resource: Resource;
  relatedResources?: Resource[];
}> = ({ resource, relatedResources = [] }) => {
  const theme = useTheme();

  // Format date for display
  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Recently Added';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Get color for resource type chip
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'E-Book':
        return theme.palette.primary.main;
      case 'Template':
        return theme.palette.secondary.main;
      case 'Whitepaper':
        return theme.palette.info.main;
      case 'Checklist':
        return theme.palette.success.main;
      case 'Guide':
        return theme.palette.warning.main;
      case 'Toolkit':
        return theme.palette.error.main;
      default:
        return theme.palette.primary.main;
    }
  };

  // Mock benefits for each resource type
  const getResourceBenefits = (type: string) => {
    switch (type) {
      case 'E-Book':
        return [
          'Comprehensive insights and strategies',
          'Expert advice from industry leaders',
          'Practical examples and case studies',
          'Actionable takeaways you can implement immediately'
        ];
      case 'Template':
        return [
          'Ready-to-use professional format',
          'Customizable to your specific needs',
          'Time-saving solution for busy professionals',
          'Best practices built into the structure'
        ];
      case 'Whitepaper':
        return [
          'In-depth research and analysis',
          'Data-backed insights and trends',
          'Strategic recommendations',
          'Forward-looking industry perspectives'
        ];
      case 'Checklist':
        return [
          'Step-by-step guidance',
          'Ensures nothing is overlooked',
          'Easy to follow and implement',
          'Streamlines complex processes'
        ];
      case 'Guide':
        return [
          'Clear, structured learning path',
          'Practical tips and best practices',
          'Expert advice for all experience levels',
          'Real-world applications and examples'
        ];
      case 'Toolkit':
        return [
          'Comprehensive set of resources',
          'Multiple tools for different scenarios',
          'Adaptable to various situations',
          'Complete solution for complex challenges'
        ];
      default:
        return [
          'Valuable insights for recruitment professionals',
          'Practical implementation strategies',
          'Time-saving resources',
          'Industry best practices'
        ];
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0.05)} 0%, ${alpha(theme.palette.secondary.dark, 0.1)} 100%)`,
        }}
      >
        {/* Background elements */}
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
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Button
            variant="text"
            color="primary"
            component={Link}
            href="/resources"
            startIcon={<ArrowBackIcon />}
            sx={{ mb: 4 }}
          >
            Back to Resources
          </Button>

          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Chip
                  icon={<CategoryIcon />}
                  label={resource.type}
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    background: alpha(getTypeColor(resource.type), 0.1),
                    border: `1px solid ${alpha(getTypeColor(resource.type), 0.3)}`,
                    color: getTypeColor(resource.type),
                  }}
                />

                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontSize: { xs: '2.25rem', md: '3rem' },
                    fontWeight: 800,
                    mb: 3,
                    background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {resource.title}
                </Typography>

                <Typography
                  variant="h5"
                  component="p"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    fontWeight: 400,
                    mb: 4,
                    lineHeight: 1.6,
                  }}
                >
                  {resource.description}
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<DownloadIcon />}
                    component={Link}
                    href={resource.downloadLink}
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: '50px',
                      fontWeight: 600,
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 12px 25px rgba(0, 0, 0, 0.15)',
                      },
                    }}
                  >
                    Download Now
                  </Button>

                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    startIcon={<ShareIcon />}
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: '50px',
                      fontWeight: 600,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: alpha(theme.palette.primary.main, 0.05),
                        transform: 'translateY(-3px)',
                      },
                    }}
                  >
                    Share
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Box
                    component="img"
                    src={resource.image}
                    alt={resource.title}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                    }}
                  />
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Details Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Left Column - Benefits */}
            <Grid item xs={12} md={8}>
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
                    color: theme.palette.primary.main,
                  }}
                >
                  What You'll Get
                </Typography>

                <List>
                  {getResourceBenefits(resource.type).map((benefit, index) => (
                    <ListItem key={index} sx={{ py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckCircleIcon sx={{ color: theme.palette.success.main }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={benefit}
                        primaryTypographyProps={{
                          fontSize: '1.1rem',
                          fontWeight: 500,
                        }}
                      />
                    </ListItem>
                  ))}
                </List>

                <Divider sx={{ my: 4 }} />

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
                  <DescriptionIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                  About This {resource.type}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    lineHeight: 1.8,
                    color: theme.palette.text.secondary,
                  }}
                >
                  This {resource.type.toLowerCase()} provides valuable insights and practical tools to help you optimize your recruitment process. Whether you're looking to improve your candidate screening, enhance your interview techniques, or streamline your overall hiring workflow, this resource offers actionable strategies based on industry best practices.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    lineHeight: 1.8,
                    color: theme.palette.text.secondary,
                  }}
                >
                  Created by our team of recruitment experts with years of experience across various industries, this resource incorporates the latest trends and proven methodologies to help you attract and retain top talent for your organization.
                </Typography>

                <Box
                  sx={{
                    mt: 6,
                    p: 4,
                    borderRadius: 4,
                    background: alpha(theme.palette.primary.light, 0.05),
                    border: `1px solid ${alpha(theme.palette.primary.light, 0.1)}`,
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
                    Ready to transform your recruitment process?
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                    }}
                  >
                    Download this resource now and start implementing these strategies today.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<DownloadIcon />}
                    component={Link}
                    href={resource.downloadLink}
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: '50px',
                      fontWeight: 600,
                    }}
                  >
                    Download Now
                  </Button>
                </Box>
              </motion.div>
            </Grid>

            {/* Right Column - Resource Info */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                    mb: 4,
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 3,
                    }}
                  >
                    Resource Details
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      sx={{ mb: 0.5 }}
                    >
                      Resource Type
                    </Typography>
                    <Chip
                      icon={<CategoryIcon />}
                      label={resource.type}
                      size="small"
                      sx={{
                        fontWeight: 600,
                        background: alpha(getTypeColor(resource.type), 0.1),
                        border: `1px solid ${alpha(getTypeColor(resource.type), 0.3)}`,
                        color: getTypeColor(resource.type),
                      }}
                    />
                  </Box>

                  {resource.category && (
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        sx={{ mb: 0.5 }}
                      >
                        Category
                      </Typography>
                      <Typography variant="body1" fontWeight={500}>
                        {resource.category}
                      </Typography>
                    </Box>
                  )}

                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      sx={{ mb: 0.5 }}
                    >
                      Date Added
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CalendarTodayIcon 
                        fontSize="small" 
                        sx={{ mr: 1, color: theme.palette.text.secondary }}
                      />
                      <Typography variant="body1">
                        {formatDate(resource.dateAdded)}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      sx={{ mb: 0.5 }}
                    >
                      Format
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      PDF Download
                    </Typography>
                  </Box>
                </Paper>

                {/* Related Resources */}
                {relatedResources.length > 0 && (
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
                      }}
                    >
                      Related Resources
                    </Typography>

                    {relatedResources.map((relatedResource, index) => (
                      <Box
                        key={relatedResource.id}
                        sx={{
                          mb: index < relatedResources.length - 1 ? 3 : 0,
                          pb: index < relatedResources.length - 1 ? 3 : 0,
                          borderBottom: index < relatedResources.length - 1 ? `1px solid ${alpha(theme.palette.divider, 0.5)}` : 'none',
                        }}
                      >
                        <Box sx={{ display: 'flex', gap: 2 }}>
                          <Box
                            component="img"
                            src={relatedResource.image}
                            alt={relatedResource.title}
                            sx={{
                              width: 60,
                              height: 60,
                              borderRadius: 2,
                              objectFit: 'cover',
                            }}
                          />
                          <Box>
                            <Typography
                              variant="subtitle1"
                              component={Link}
                              href={`/resources/${relatedResource.id}`}
                              sx={{
                                fontWeight: 600,
                                textDecoration: 'none',
                                color: 'inherit',
                                '&:hover': {
                                  color: theme.palette.primary.main,
                                },
                              }}
                            >
                              {relatedResource.title}
                            </Typography>
                            <Chip
                              label={relatedResource.type}
                              size="small"
                              sx={{
                                mt: 0.5,
                                height: 20,
                                fontSize: '0.625rem',
                                background: alpha(getTypeColor(relatedResource.type), 0.1),
                                color: getTypeColor(relatedResource.type),
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </Paper>
                )}
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
