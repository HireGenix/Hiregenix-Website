'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  CircularProgress,
  alpha,
  useTheme,
  styled,
  Button,
  Alert,
  Snackbar,
  Grid,
  Chip,
  Paper
} from '@mui/material';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { SEOMetadata } from '@/components/SEO';
import { Layout } from '@/components/Layout';
// Define our own SectionType enum to replace the one from PageBuilder
enum SectionType {
  HERO = 'HERO',
  FEATURES = 'FEATURES',
  TESTIMONIALS = 'TESTIMONIALS',
  TESTIMONIAL = 'TESTIMONIAL',
  CTA = 'CTA',
  CONTENT = 'CONTENT',
  TEXT = 'TEXT',
  TEAM = 'TEAM',
  CONTACT = 'CONTACT',
  GALLERY = 'GALLERY',
  FAQ = 'FAQ',
  GRID = 'GRID',
  MASONRY_GALLERY = 'MASONRY_GALLERY',
  TIMELINE = 'TIMELINE',
  IMAGE = 'IMAGE',
  BUTTON = 'BUTTON',
  DIVIDER = 'DIVIDER',
  SPACER = 'SPACER',
  CUSTOM = 'CUSTOM'
}
// EditIcon import removed

// We'll implement simplified section renderers directly in this file
// instead of importing the complex ones from the admin interface

// Styled components
const PageContainer = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: theme.spacing(4),
}));

const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '50vh',
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  '& p': {
    marginBottom: theme.spacing(2),
    lineHeight: 1.7,
  },
  '& h2': {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    fontWeight: 600,
  },
  '& h3': {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1.5),
    fontWeight: 600,
  },
  '& ul, & ol': {
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
  },
  '& li': {
    marginBottom: theme.spacing(1),
  },
  '& img': {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: 8,
    marginBottom: theme.spacing(2),
  },
}));

const ErrorContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(8, 2),
  maxWidth: '800px',
  margin: '0 auto',
  '& h1': {
    marginBottom: theme.spacing(2),
    fontWeight: 700,
  },
  '& p': {
    marginBottom: theme.spacing(4),
    color: theme.palette.text.secondary,
  }
}));

// Page interface
interface Page {
  id: string;
  title: string;
  slug: string;
  status: string;
  sections: any[];
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
  };
  createdAt: string;
  updatedAt: string;
}

// Dynamic page component
export default function DynamicPage() {
  const theme = useTheme();
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const slug = params?.slug as string;
  const isPreview = searchParams.get('preview') === 'true';
  const token = searchParams.get('token');
  
  const [page, setPage] = useState<Page | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'info' | 'warning' | 'error'>('info');
  // No editor functionality needed

  // Fetch page from API
  useEffect(() => {
    const fetchPage = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        setError(null);
        
        // Build the API URL with appropriate parameters
        // Include status=PUBLISHED,DRAFT to show both published and draft pages
        let url = `/api/pages?slug=${encodeURIComponent(slug)}`;
        if (isPreview && token) {
          url += `&preview=true&token=${encodeURIComponent(token)}`;
        }
        
        const response = await fetch(url);
        
        if (response.status === 404) {
          setError('Page not found');
          return;
        }
        
        if (!response.ok) {
          throw new Error(`Error fetching page: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (data.items && Array.isArray(data.items) && data.items.length > 0) {
          setPage(data.items[0]);
        } else if (data.id) {
          // Direct page object returned
          setPage(data);
        } else {
          setError('Page not found');
        }
      } catch (error) {
        console.error('Error fetching page:', error);
        setError('Failed to load page. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [slug, isPreview, token]);

  // Show preview mode notification
  useEffect(() => {
    if (isPreview && page) {
      setSnackbarMessage('Preview Mode: This page is not published');
      setSnackbarOpen(true);
    }
  }, [isPreview, page]);

  // Render section based on type
  const renderSection = (section: any, index: number) => {
    // Extract content from section
    const content = section.content || {};
    
    // Render appropriate section based on type
    switch (section.type) {
      case SectionType.HERO:
        return (
          <Box 
            key={index} 
            sx={{ 
              py: 8, 
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 4,
              background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.primary.main, 0.1)} 100%)`,
              p: 6,
              mb: 6,
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Typography 
              variant="h1" 
              gutterBottom
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 3,
              }}
            >
              {content.heading}
            </Typography>
            <Typography 
              variant="h5"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                mb: 4,
                color: theme.palette.text.secondary,
                fontWeight: 400,
              }}
            >
              {content.subheading}
            </Typography>
            {content.ctaText && (
              <Button 
                variant="contained" 
                color="primary" 
                href={content.ctaLink || '#'}
                size="large"
                sx={{ 
                  mt: 2,
                  px: 4,
                  py: 1.5,
                  borderRadius: '50px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 25px rgba(0, 0, 0, 0.15)',
                  }
                }}
              >
                {content.ctaText}
              </Button>
            )}
          </Box>
        );
      case SectionType.TEXT:
        return (
          <Box 
            key={index} 
            sx={{ py: 4 }}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {content.heading && (
              <Typography 
                variant="h2" 
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  mb: 3,
                  color: theme.palette.primary.main,
                }}
              >
                {content.heading}
              </Typography>
            )}
            <Typography 
              variant="body1" 
              component="div" 
              dangerouslySetInnerHTML={{ __html: content.content || '' }}
              sx={{
                '& a': {
                  color: theme.palette.primary.main,
                  textDecoration: 'none',
                  borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                  transition: 'border-color 0.2s ease',
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                  }
                }
              }}
            />
          </Box>
        );
      case SectionType.CTA:
        return (
          <Box 
            key={index} 
            sx={{ 
              py: 6, 
              textAlign: 'center', 
              maxWidth: '800px', 
              mx: 'auto',
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
              color: 'white',
              borderRadius: 4,
              p: 6,
              position: 'relative',
              overflow: 'hidden',
              my: 6,
            }}
            component={motion.div}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.1,
                backgroundImage: 'url(/hero-pattern.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 1,
              }}
            />
            <Box sx={{ position: 'relative', zIndex: 2 }}>
              {content.heading && (
                <Typography 
                  variant="h3" 
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '1.75rem', md: '2.25rem' },
                    mb: 2,
                  }}
                >
                  {content.heading}
                </Typography>
              )}
              {content.description && (
                <Typography 
                  variant="body1" 
                  paragraph
                  sx={{
                    opacity: 0.9,
                    mb: 4,
                    maxWidth: '600px',
                    mx: 'auto',
                  }}
                >
                  {content.description}
                </Typography>
              )}
              {content.buttonText && (
                <Button 
                  variant="contained" 
                  color="secondary" 
                  href={content.buttonLink || '#'}
                  size="large"
                  sx={{ 
                    mt: 2,
                    px: 4,
                    py: 1.5,
                    borderRadius: '50px',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                    background: 'white',
                    color: theme.palette.primary.main,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 25px rgba(0, 0, 0, 0.25)',
                      background: 'white',
                    }
                  }}
                >
                  {content.buttonText}
                </Button>
              )}
            </Box>
          </Box>
        );
      case SectionType.TESTIMONIAL:
        return (
          <Box 
            key={index} 
            sx={{ 
              py: 10, 
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.05)} 0%, ${alpha(theme.palette.secondary.light, 0.05)} 100%)`,
                zIndex: -1,
              }
            }}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Container maxWidth="lg">
              <Paper
                elevation={0}
                sx={{ 
                  py: 6, 
                  px: { xs: 4, md: 8 },
                  textAlign: 'center', 
                  maxWidth: '900px', 
                  mx: 'auto',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 6,
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  boxShadow: `0 20px 40px ${alpha(theme.palette.common.black, 0.07)}`,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Decorative elements */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -30,
                    left: -30,
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    background: alpha(theme.palette.primary.main, 0.05),
                    zIndex: 0,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -20,
                    right: -20,
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: alpha(theme.palette.secondary.main, 0.05),
                    zIndex: 0,
                  }}
                />
                
                {/* Quote icon */}
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: alpha(theme.palette.primary.main, 0.1),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 4,
                    color: theme.palette.primary.main,
                  }}
                >
                  <Box 
                    component="span" 
                    className="material-icons"
                    sx={{ fontSize: 30 }}
                  >
                    format_quote
                  </Box>
                </Box>
                
                {content.quote && (
                  <Typography 
                    variant="h4" 
                    paragraph 
                    component={motion.p}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    sx={{ 
                      fontStyle: 'italic', 
                      mb: 4,
                      color: theme.palette.text.primary,
                      fontWeight: 500,
                      lineHeight: 1.6,
                      fontSize: { xs: '1.5rem', md: '1.75rem' },
                      maxWidth: '800px',
                      mx: 'auto',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    "{content.quote}"
                  </Typography>
                )}
                
                {content.author && (
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 700,
                        color: theme.palette.primary.main,
                        mb: 0.5,
                      }}
                    >
                      {content.author}
                    </Typography>
                    {content.role && (
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: theme.palette.text.secondary,
                          fontWeight: 400,
                        }}
                      >
                        {content.role}
                      </Typography>
                    )}
                  </Box>
                )}
              </Paper>
            </Container>
          </Box>
        );
      case SectionType.GRID:
        return (
          <Box 
            key={index} 
            sx={{ 
              py: 8,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.05)} 0%, ${alpha(theme.palette.secondary.light, 0.05)} 100%)`,
                zIndex: -1,
              }
            }}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            id={content.id || "guides-grid"}
          >
            <Container maxWidth="lg">
              {content.heading && (
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                  <Chip 
                    label={content.subheading || "RESOURCES"} 
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
                    gutterBottom 
                    sx={{ 
                      fontWeight: 800,
                      fontSize: { xs: '2rem', md: '2.75rem' },
                      mb: 2,
                      background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {content.heading}
                  </Typography>
                  {content.subheading && (
                    <Typography
                      variant="h5"
                      component="p"
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                        fontWeight: 400,
                        maxWidth: 700,
                        mx: 'auto',
                        mb: 4
                      }}
                    >
                      {content.subheading}
                    </Typography>
                  )}
                </Box>
              )}
              
              {content.items && Array.isArray(content.items) && (
                <Grid container spacing={4}>
                  {content.items.map((item: any, itemIndex: number) => {
                    // Map of icon names to colors
                    const iconColors = {
                      school: theme.palette.primary.main,
                      balance: theme.palette.secondary.main,
                      description: theme.palette.success.main,
                      videocam: theme.palette.error.main,
                      assessment: theme.palette.info.main,
                      analytics: theme.palette.warning.main,
                    };
                    
                    // Get color based on icon name or use primary color as default
                    const iconColor = item.icon && iconColors[item.icon as keyof typeof iconColors] 
                      ? iconColors[item.icon as keyof typeof iconColors]
                      : theme.palette.primary.main;
                    
                    return (
                      <Grid 
                        item 
                        xs={12} 
                        sm={6} 
                        md={content.columns === 3 ? 4 : (content.columns === 2 ? 6 : 4)} 
                        key={itemIndex}
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 + itemIndex * 0.1 }}
                      >
                        <Paper
                          elevation={0}
                          sx={{ 
                            p: 4, 
                            height: '100%', 
                            borderRadius: 4,
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(0, 0, 0, 0.05)',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            '&:hover': {
                              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)',
                              transform: 'translateY(-5px)'
                            }
                          }}
                        >
                          {/* Icon */}
                          {content.showIcons !== false && item.icon && (
                            <Box 
                              sx={{ 
                                width: 60, 
                                height: 60, 
                                borderRadius: '50%', 
                                background: alpha(iconColor, 0.1),
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: 3,
                                color: iconColor,
                              }}
                            >
                              <Box 
                                component="span" 
                                className="material-icons"
                                sx={{ fontSize: 30 }}
                              >
                                {item.icon}
                              </Box>
                            </Box>
                          )}
                          
                          {/* Title */}
                          {item.title && (
                            <Typography 
                              variant="h5" 
                              gutterBottom
                              sx={{
                                fontWeight: 700,
                                fontSize: '1.25rem',
                                mb: 2,
                                color: theme.palette.text.primary,
                              }}
                            >
                              {item.title}
                            </Typography>
                          )}
                          
                          {/* Description */}
                          {item.description && (
                            <Typography 
                              variant="body1"
                              sx={{
                                color: theme.palette.text.secondary,
                                lineHeight: 1.7,
                                mb: 3,
                                flex: 1, // Take up available space
                              }}
                            >
                              {item.description}
                            </Typography>
                          )}
                          
                          {/* Learn More Link */}
                          <Box sx={{ mt: 'auto' }}>
                            <Button
                              variant="text"
                              color="primary"
                              endIcon={<Box component="span" className="material-icons">arrow_forward</Box>}
                              sx={{
                                p: 0,
                                fontWeight: 600,
                                '&:hover': {
                                  background: 'transparent',
                                  transform: 'translateX(5px)'
                                }
                              }}
                            >
                              Learn More
                            </Button>
                          </Box>
                        </Paper>
                      </Grid>
                    );
                  })}
                </Grid>
              )}
            </Container>
          </Box>
        );
      case SectionType.MASONRY_GALLERY:
        return (
          <Box 
            key={index} 
            sx={{ py: 6 }}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {content.heading && (
              <Typography 
                variant="h3" 
                gutterBottom 
                align="center" 
                sx={{ 
                  mb: 4,
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                }}
              >
                {content.heading}
              </Typography>
            )}
            {content.images && Array.isArray(content.images) && (
              <Grid container spacing={2}>
                {content.images.map((image: any, imageIndex: number) => (
                  <Grid 
                    item 
                    xs={12} 
                    sm={6} 
                    md={4} 
                    key={imageIndex}
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 + imageIndex * 0.05 }}
                  >
                    <Box 
                      sx={{ 
                        width: '100%', 
                        paddingTop: '75%', 
                        position: 'relative',
                        borderRadius: 3,
                        overflow: 'hidden',
                        mb: 2,
                        boxShadow: `0 10px 30px ${alpha(theme.palette.common.black, 0.1)}`,
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.02)',
                          boxShadow: `0 15px 35px ${alpha(theme.palette.common.black, 0.15)}`,
                        }
                      }}
                    >
                      <Box 
                        component="img"
                        src={image.url || '/hero-pattern.svg'}
                        alt={image.alt || 'Gallery image'}
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        );
      case SectionType.TIMELINE:
        return (
          <Box 
            key={index} 
            sx={{ py: 6 }}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {content.heading && (
              <Typography 
                variant="h3" 
                gutterBottom 
                align="center" 
                sx={{ 
                  mb: 6,
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                }}
              >
                {content.heading}
              </Typography>
            )}
            {content.items && Array.isArray(content.items) && (
              <Box sx={{ position: 'relative' }}>
                {/* Vertical line */}
                <Box sx={{ 
                  position: 'absolute', 
                  left: { xs: 20, md: '50%' }, 
                  top: 0, 
                  bottom: 0, 
                  width: 2, 
                  ml: { xs: 0, md: -1 },
                  bgcolor: alpha(theme.palette.primary.main, 0.2),
                  zIndex: 0,
                }} />
                
                {content.items.map((item: any, itemIndex: number) => (
                  <Box 
                    key={itemIndex} 
                    sx={{ 
                      display: 'flex', 
                      flexDirection: { xs: 'row', md: itemIndex % 2 === 0 ? 'row' : 'row-reverse' },
                      mb: 6,
                      position: 'relative'
                    }}
                    component={motion.div}
                    initial={{ opacity: 0, x: itemIndex % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + itemIndex * 0.1 }}
                  >
                    <Box sx={{ 
                      width: { xs: 40, md: '50%' }, 
                      display: 'flex', 
                      justifyContent: { xs: 'flex-start', md: itemIndex % 2 === 0 ? 'flex-end' : 'flex-start' },
                      pr: { xs: 2, md: itemIndex % 2 === 0 ? 4 : 0 },
                      pl: { xs: 0, md: itemIndex % 2 === 0 ? 0 : 4 },
                      position: 'relative',
                      zIndex: 1,
                    }}>
                      {/* Circle on the timeline */}
                      <Box sx={{
                        position: 'absolute',
                        width: 16,
                        height: 16,
                        borderRadius: '50%',
                        bgcolor: theme.palette.primary.main,
                        left: { xs: 12, md: itemIndex % 2 === 0 ? 'auto' : 0 },
                        right: { xs: 'auto', md: itemIndex % 2 === 0 ? 0 : 'auto' },
                        top: 6,
                        ml: { md: itemIndex % 2 === 0 ? 0 : -8 },
                        mr: { md: itemIndex % 2 === 0 ? -8 : 0 },
                        boxShadow: `0 0 0 4px ${alpha(theme.palette.primary.main, 0.2)}`,
                      }} />
                      
                      {item.date && (
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            whiteSpace: 'nowrap',
                            fontWeight: 600,
                            color: theme.palette.primary.main,
                          }}
                        >
                          {item.date}
                        </Typography>
                      )}
                    </Box>
                    <Box sx={{ 
                      width: { xs: 'calc(100% - 40px)', md: '50%' },
                      bgcolor: alpha(theme.palette.background.paper, 0.6),
                      p: 4,
                      borderRadius: 3,
                      border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                      boxShadow: `0 10px 30px ${alpha(theme.palette.common.black, 0.05)}`,
                      backdropFilter: 'blur(10px)',
                      zIndex: 1,
                    }}>
                      {item.title && (
                        <Typography 
                          variant="h6" 
                          gutterBottom
                          sx={{
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                          }}
                        >
                          {item.title}
                        </Typography>
                      )}
                      {item.description && (
                        <Typography 
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            lineHeight: 1.7,
                          }}
                        >
                          {item.description}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        );
      default:
        return (
          <Box key={index} sx={{ py: 4 }}>
            <Typography variant="body2" color="text.secondary">
              Section type not supported: {section.type}
            </Typography>
          </Box>
        );
    }
  };

  // SEO data
  const seoData = useMemo(() => {
    if (!page) return { title: 'Loading...', description: '' };
    
    return {
      title: page.seo?.title || page.title,
      description: page.seo?.description || '',
      keywords: page.seo?.keywords || '',
      ogImage: page.seo?.ogImage || '',
      canonicalUrl: `/${page.slug}`
    };
  }, [page]);

  if (loading) {
    return (
      <Layout>
        <LoadingContainer>
          <CircularProgress size={60} />
        </LoadingContainer>
      </Layout>
    );
  }

  if (error || !page) {
    return (
      <Layout>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <ErrorContainer>
            <Typography variant="h4" color="error" gutterBottom>
              {error || 'Page not found'}
            </Typography>
            <Typography variant="body1">
              The page you're looking for could not be found.
            </Typography>
            <Button 
              variant="contained" 
              color="primary"
              onClick={() => router.push('/')}
              sx={{ mt: 2 }}
            >
              Return to Home
            </Button>
          </ErrorContainer>
        </Container>
      </Layout>
    );
  }

  // Editor functionality removed
  
  return (
    <Layout>
      <SEOMetadata seoData={seoData} />
      <Box 
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <PageContainer>
          {/* Admin edit functionality removed */}
          
          {/* Page Title */}
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            fontWeight={700}
            sx={{ 
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textAlign: 'center',
              mb: 6,
              background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {page.title}
          </Typography>
          
          {/* Page Sections */}
          <ContentContainer>
            {page.sections && page.sections.length > 0 ? (
              page.sections.map((section, index) => renderSection(section, index))
            ) : (
              <Typography variant="body1" sx={{ textAlign: 'center', py: 4 }}>
                This page has no content sections.
              </Typography>
            )}
          </ContentContainer>
        </PageContainer>
      </Box>
      
      {/* Preview mode notification */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setSnackbarOpen(false)} 
          severity={snackbarSeverity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Layout>
  );
}
