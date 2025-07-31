'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Avatar,
  Button,
  useTheme,
  alpha,
  Skeleton,
  CardActionArea,
  CircularProgress,
  Paper,
} from '@mui/material';
import {
  ArrowForward as ArrowForwardIcon,
  CalendarToday as CalendarTodayIcon,
  Person as PersonIcon,
  MenuBook as MenuBookIcon,
  AccessTime as AccessTimeIcon,
} from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { useHydrationSafe } from '@/hooks/useHydrationSafe';

export const BlogResourcesSection: React.FC = () => {
  const theme = useTheme();
  const isHydrated = useHydrationSafe();

  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  // Define types for blog post
  interface BlogPost {
    title: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
    author: {
      name: string;
      avatar: string;
    };
    slug: string;
  }

  // State for blog posts
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch blog posts from API
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch posts from API with limit=3 to get only the latest 3 posts
        const response = await fetch('/api/posts?limit=3');
        
        if (!response.ok) {
          throw new Error(`Error fetching posts: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (data.items && Array.isArray(data.items)) {
          // Transform API data to match the component's expected format
          const formattedPosts = data.items.map((post: any) => ({
            title: post.title,
            excerpt: post.excerpt,
            image: post.featuredImage,
            category: post.category?.name || 'Uncategorized',
            date: formatDate(post.createdAt),
            author: {
              name: post.author?.name || 'HireGenix Admin',
              avatar: post.author?.image || '/avatars/avatar1.jpg'
            },
            slug: post.slug
          }));
          
          setBlogPosts(formattedPosts);
        } else {
          setBlogPosts([]);
          console.warn('Unexpected API response format:', data);
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setError('Failed to load blog posts');
        setBlogPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  // Format date helper function
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Resources data
  const resources = [
    {
      title: 'The Complete Guide to AI Recruitment',
      type: 'E-Book',
      image: '/resources/images/ai-recruitment-guide.svg',
      description: 'A comprehensive guide to implementing AI in your recruitment process.',
      downloadLink: '/resources/ai-recruitment-guide.html'
    },
    {
      title: 'Recruitment Metrics Dashboard Template',
      type: 'Template',
      image: '/resources/images/metrics-dashboard-template.svg',
      description: 'Track your key recruitment metrics with this ready-to-use dashboard template.',
      downloadLink: '/resources/metrics-dashboard-template.html'
    },
    {
      title: 'The ROI of Modern Recruitment Technology',
      type: 'Whitepaper',
      image: '/resources/images/roi-whitepaper.svg',
      description: 'Research-backed analysis of the return on investment from recruitment technology.',
      downloadLink: '/resources/roi-whitepaper.html'
    },
    {
      title: 'Candidate Experience Improvement Checklist',
      type: 'Checklist',
      image: '/resources/images/candidate-experience-checklist.svg',
      description: 'Step-by-step guide to enhancing your candidate experience.',
      downloadLink: '/resources/candidate-experience-checklist.html'
    }
  ];

  // Render loading skeleton if not hydrated
  if (!isHydrated) {
    return (
      <Box
        sx={{
          py: { xs: 10, md: 16 },
          background: `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.8)} 0%, ${theme.palette.background.default} 100%)`,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Skeleton variant="text" height={60} width="80%" sx={{ mb: 2 }} />
              <Skeleton variant="text" height={100} width="90%" sx={{ mb: 4 }} />
              <Grid container spacing={3}>
                {[1, 2, 3].map((index) => (
                  <Grid item xs={12} key={index}>
                    <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2, mb: 2 }} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Skeleton variant="text" height={60} width="80%" sx={{ mb: 2 }} />
              <Skeleton variant="text" height={100} width="90%" sx={{ mb: 4 }} />
              <Grid container spacing={3}>
                {[1, 2, 3].map((index) => (
                  <Grid item xs={12} key={index}>
                    <Skeleton variant="rectangular" height={150} sx={{ borderRadius: 2, mb: 2 }} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }

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
          left: '10%',
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
            label="RESOURCES & INSIGHTS" 
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
            Latest Insights & Resources
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
            Stay up-to-date with recruitment trends, best practices, and valuable resources
          </Typography>
        </Box>

        {/* Blog Posts Section */}
        <Box sx={{ mb: 10 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography
              variant="h4"
              component="h3"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.5rem', md: '2rem' }
              }}
            >
              Latest Articles
            </Typography>
            <Button
              variant="text"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              component={Link}
              href="/blog"
              sx={{
                fontWeight: 600,
                '&:hover': {
                  background: 'transparent',
                  transform: 'translateX(5px)'
                }
              }}
            >
              View All Articles
            </Button>
          </Box>

          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
              <CircularProgress size={60} color="primary" />
            </Box>
          ) : error ? (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h6" color="error" gutterBottom>
                {error}
              </Typography>
              <Typography variant="body1">
                Please try refreshing the page or check back later.
              </Typography>
            </Box>
          ) : (
            <motion.div
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Grid container spacing={4}>
                {blogPosts.map((post, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div variants={itemVariant}>
                    <Card
                      component={motion.div}
                      whileHover={{ 
                        y: -10,
                        transition: { duration: 0.3 }
                      }}
                      elevation={0}
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)',
                        }
                      }}
                    >
                      <Box sx={{ position: 'relative' }}>
                        <CardActionArea component={Link} href={`/blog/${post.slug}`}>
                          <CardMedia
                            component="img"
                            height="220"
                            image={post.image}
                            alt={post.title}
                            sx={{
                              transition: 'transform 0.5s ease',
                              '&:hover': {
                                transform: 'scale(1.05)'
                              }
                            }}
                          />
                        </CardActionArea>
                        <Chip
                          label={post.category}
                          size="small"
                          sx={{
                            position: 'absolute',
                            top: 16,
                            left: 16,
                            fontWeight: 600,
                            background: alpha(theme.palette.primary.main, 0.9),
                            color: 'white',
                            backdropFilter: 'blur(4px)',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                          }}
                        />
                      </Box>
                      <CardContent sx={{ p: 3, flexGrow: 1 }}>
                        <Typography
                          variant="h5"
                          component="h3"
                          sx={{
                            fontWeight: 700,
                            mb: 2,
                            lineHeight: 1.3
                          }}
                        >
                          {post.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            mb: 3,
                            lineHeight: 1.6
                          }}
                        >
                          {post.excerpt}
                        </Typography>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mt: 'auto'
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar
                              src={post.author.avatar}
                              alt={post.author.name}
                              sx={{ width: 32, height: 32, mr: 1 }}
                            />
                            <Typography
                              variant="body2"
                              sx={{ fontWeight: 500 }}
                            >
                              {post.author.name}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <AccessTimeIcon
                              sx={{
                                fontSize: '0.875rem',
                                color: theme.palette.text.secondary,
                                mr: 0.5
                              }}
                            />
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              {post.date}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
              </Grid>
            </motion.div>
          )}
        </Box>

        {/* Resources Section */}
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography
              variant="h4"
              component="h3"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.5rem', md: '2rem' }
              }}
            >
              Free Resources
            </Typography>
            <Button
              variant="text"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              component={Link}
              href="/resources"
              sx={{
                fontWeight: 600,
                '&:hover': {
                  background: 'transparent',
                  transform: 'translateX(5px)'
                }
              }}
            >
              View All Resources
            </Button>
          </Box>

          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={3}>
              {resources.map((resource, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div variants={itemVariant}>
                    <Paper
                      elevation={0}
                      component={motion.div}
                      whileHover={{ 
                        y: -8,
                        transition: { duration: 0.3 }
                      }}
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                        }
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          paddingTop: '60%', // 3:5 aspect ratio
                          overflow: 'hidden'
                        }}
                      >
                        <Box
                          component="img"
                          src={resource.image}
                          alt={resource.title}
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease',
                            '&:hover': {
                              transform: 'scale(1.05)'
                            }
                          }}
                        />
                        <Chip
                          label={resource.type}
                          size="small"
                          sx={{
                            position: 'absolute',
                            top: 12,
                            right: 12,
                            fontWeight: 600,
                            background: alpha(theme.palette.primary.main, 0.9),
                            color: 'white',
                            backdropFilter: 'blur(4px)',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                          }}
                        />
                      </Box>
                      <Box sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{
                            fontWeight: 600,
                            mb: 1,
                            fontSize: '1rem',
                            lineHeight: 1.3
                          }}
                        >
                          {resource.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            mb: 2,
                            fontSize: '0.875rem',
                            flexGrow: 1
                          }}
                        >
                          {resource.description}
                        </Typography>
                        <Button
                          variant="outlined"
                          color="primary"
                          size="small"
                          component={Link}
                          href={resource.downloadLink}
                          sx={{
                            alignSelf: 'flex-start',
                            borderRadius: '50px',
                            fontWeight: 600,
                            fontSize: '0.75rem',
                            '&:hover': {
                              background: alpha(theme.palette.primary.main, 0.1),
                              transform: 'translateY(-2px)'
                            }
                          }}
                        >
                          Download
                        </Button>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          sx={{
            textAlign: 'center',
            mt: 10,
            p: 5,
            borderRadius: 8,
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.05)} 0%, ${alpha(theme.palette.primary.main, 0.1)} 100%)`,
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.03)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative elements */}
          <Box
            sx={{
              position: 'absolute',
              top: -20,
              left: -20,
              width: 100,
              height: 100,
              borderRadius: '50%',
              background: alpha(theme.palette.primary.main, 0.05),
              zIndex: 0
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: -30,
              right: -30,
              width: 150,
              height: 150,
              borderRadius: '50%',
              background: alpha(theme.palette.primary.main, 0.07),
              zIndex: 0
            }}
          />
          
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography
              variant="h4"
              component="p"
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 700,
                mb: 2,
                background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Subscribe to Our Newsletter
            </Typography>
            <Typography
              variant="h5"
              component="p"
              color="text.secondary"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                fontWeight: 400,
                mb: 4,
                maxWidth: 700,
                mx: 'auto'
              }}
            >
              Get the latest recruitment insights, tips, and resources delivered straight to your inbox.
            </Typography>
            
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={Link}
              href="/newsletter"
              sx={{
                py: 1.5,
                px: 4,
                borderRadius: '50px',
                fontWeight: 600,
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 12px 25px rgba(0, 0, 0, 0.15)'
                }
              }}
            >
              Subscribe Now
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
