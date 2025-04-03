'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import {
  Box,
  Grid,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
  IconButton,
  LinearProgress,
  useTheme,
  Chip,
  Stack,
  alpha,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  Edit as EditIcon,
  Article as ArticleIcon,
  Analytics as AnalyticsIcon,
  Search as SearchIcon,
  Code as CodeIcon,
  AutoAwesome as AutoAwesomeIcon,
  People as PeopleIcon,
  Visibility as VisibilityIcon,
  Tag as TagIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  Payment as PaymentIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  WidgetCard,
  ActionIcon,
  StatsCard,
  ActionCard,
  quickActions,
  containerVariants,
  itemVariants,
  StatusAvatar,
} from '@/components/Dashboard/DashboardComponents';

export default function AdminDashboard() {
  const { data: session } = useSession();
  const theme = useTheme();
  const [lastUpdated] = useState(new Date());
  interface PageData {
    id: string;
    title: string;
    slug: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  }

  interface PostData {
    id: string;
    title: string;
    slug: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  }

  interface DashboardData {
    stats: {
      pages: number;
      posts: number;
      users: number;
      views: number;
    };
    recentPages: PageData[];
    recentPosts: PostData[];
    siteHealth: {
      database: { status: string; percentage: number };
      storage: { status: string; percentage: number; used: string };
      performance: { status: string; percentage: number };
      security: { status: string; percentage: number };
    };
  }

  const [dashboardData, setDashboardData] = useState<DashboardData>({
    stats: {
      pages: 0,
      posts: 0,
      users: 0,
      views: 0
    },
    recentPages: [],
    recentPosts: [],
    siteHealth: {
      database: { status: 'good', percentage: 0 },
      storage: { status: 'normal', percentage: 0, used: '0%' },
      performance: { status: 'warning', percentage: 0 },
      security: { status: 'good', percentage: 0 }
    }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock SEO stats
  const seoStats = [
    { title: 'Pages with SEO', value: '85%', status: 'good' as const },
    { title: 'Missing Meta Descriptions', value: '3', status: 'warning' as const },
    { title: 'Missing Alt Tags', value: '7', status: 'warning' as const },
    { title: 'Broken Links', value: '1', status: 'error' as const }
  ];

  // Mock integrations
  const integrations = [
    { name: 'Google Analytics', status: 'Connected', icon: <AnalyticsIcon />, color: '#4285F4' },
    { name: 'Google Tag Manager', status: 'Connected', icon: <TagIcon />, color: '#4285F4' },
    { name: 'Facebook Pixel', status: 'Not Connected', icon: <FacebookIcon />, color: '#1877F2' },
    { name: 'LinkedIn Insight', status: 'Not Connected', icon: <LinkedInIcon />, color: '#0A66C2' },
    { name: 'Stripe', status: 'Connected', icon: <PaymentIcon />, color: '#635BFF' },
    { name: 'PayPal', status: 'Not Connected', icon: <PaymentIcon />, color: '#003087' }
  ];

  // Format stats for display
  const stats = [
    { 
      title: 'Pages', 
      count: dashboardData.stats.pages, 
      icon: <ArticleIcon fontSize="large" color="primary" />, 
      color: '#2196f3' 
    },
    { 
      title: 'Posts', 
      count: dashboardData.stats.posts, 
      icon: <ArticleIcon fontSize="large" color="secondary" />, 
      color: '#f50057' 
    },
    { 
      title: 'Users', 
      count: dashboardData.stats.users, 
      icon: <PeopleIcon fontSize="large" />, 
      color: '#00bcd4' 
    },
    { 
      title: 'Views', 
      count: dashboardData.stats.views, 
      icon: <VisibilityIcon fontSize="large" />, 
      color: '#4caf50' 
    }
  ];

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/dashboard');
        
        if (!response.ok) {
          throw new Error('Failed to fetch dashboard data');
        }
        
        const data = await response.json();
        setDashboardData(data);
        setLoading(false);
      } catch (err: any) {
        console.error('Error fetching dashboard data:', err);
        setError(err.message || 'An error occurred');
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <Box component={motion.div} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Page Header */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom fontWeight={600}>
            Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Welcome back, {session?.user?.name || 'Admin'}! Here&apos;s what&apos;s happening with your site today.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TrendingUpIcon sx={{ color: '#4caf50' }} />
          <Typography variant="body2" color="text.secondary">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </Typography>
        </Box>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }} component={motion.div} variants={containerVariants} initial="hidden" animate="visible">
        {loading ? (
          // Show loading skeletons when data is loading
          Array(4).fill(0).map((_, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} component={motion.div} variants={itemVariants}>
              <StatsCard>
                <div style={{ 
                  width: 48, 
                  height: 48, 
                  borderRadius: 12, 
                  backgroundColor: alpha(theme.palette.primary.main, 0.1) 
                }}></div>
                <Typography variant="h3" component="div">
                  <span style={{ 
                    display: 'inline-block',
                    width: '60%', 
                    height: 40, 
                    backgroundColor: alpha(theme.palette.background.paper, 0.3), 
                    borderRadius: 4 
                  }}></span>
                </Typography>
                <Typography variant="body1">
                  <span style={{ 
                    display: 'inline-block',
                    width: '40%', 
                    height: 20, 
                    backgroundColor: alpha(theme.palette.background.paper, 0.2), 
                    borderRadius: 4 
                  }}></span>
                </Typography>
              </StatsCard>
            </Grid>
          ))
        ) : stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} component={motion.div} variants={itemVariants}>
            <StatsCard>
              <ActionIcon 
                className="action-icon"
                sx={{
                  background: alpha(stat.color, 0.1),
                  color: stat.color,
                }}
              >
                {stat.icon}
              </ActionIcon>
              <Typography variant="h3" component="div" fontWeight={700}>
                {stat.count}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {stat.title}
              </Typography>
            </StatsCard>
          </Grid>
        ))}
      </Grid>

      {/* Quick Actions */}
      <Box component={motion.div} variants={containerVariants} initial="hidden" animate="visible" sx={{ mb: 4 }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1.5, 
          mb: 3,
          background: (theme) => alpha(theme.palette.background.paper, 0.6),
          backdropFilter: 'blur(10px)',
          borderRadius: 2,
          p: 2,
        }}>
          <AutoAwesomeIcon sx={{ color: '#ff9800', fontSize: '2rem' }} />
          <Box>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Quick Actions
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Streamline your content management with these shortcuts
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={3}>
          {quickActions.map((action, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={index} component={motion.div} variants={itemVariants}>
              <Link href={action.href} style={{ textDecoration: 'none' }}>
                <ActionCard>
                  <ActionIcon
                    className="action-icon"
                    sx={{
                      background: alpha(action.color, 0.1),
                      color: action.color,
                    }}
                  >
                    {action.icon}
                  </ActionIcon>
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600} color={action.color}>
                      {action.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {action.description}
                    </Typography>
                  </Box>
                </ActionCard>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Main Content */}
      <Grid container spacing={4}>
        {/* Analytics Overview */}
        <Grid item xs={12} component={motion.div} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <WidgetCard>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <AnalyticsIcon color="primary" fontSize="large" />
                <Typography variant="h6" fontWeight={600}>
                  Analytics Overview
                </Typography>
              </Box>
              <Button
                component={Link}
                href="/admin/analytics"
                variant="outlined"
                size="small"
                endIcon={<TrendingUpIcon />}
              >
                View Details
              </Button>
            </Box>
            <Divider sx={{ mb: 3 }} />
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Box sx={{ 
                  height: 200, 
                  bgcolor: alpha(theme.palette.background.paper, 0.4), 
                  borderRadius: 2, 
                  p: 2, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  border: `1px dashed ${alpha(theme.palette.primary.main, 0.2)}`
                }}>
                  <Typography variant="body1" color="text.secondary">Analytics Chart Placeholder</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack spacing={3}>
                  <Box sx={{ 
                    p: 2, 
                    borderRadius: 2, 
                    bgcolor: alpha(theme.palette.success.main, 0.05),
                    border: `1px solid ${alpha(theme.palette.success.main, 0.1)}`
                  }}>
                    <Typography variant="body2" color="text.secondary">Visitors Today</Typography>
                    <Typography variant="h5" fontWeight={600}>124</Typography>
                    <Typography variant="body2" color="success.main">+12% from yesterday</Typography>
                  </Box>
                  <Box sx={{ 
                    p: 2, 
                    borderRadius: 2, 
                    bgcolor: alpha(theme.palette.success.main, 0.05),
                    border: `1px solid ${alpha(theme.palette.success.main, 0.1)}`
                  }}>
                    <Typography variant="body2" color="text.secondary">Page Views</Typography>
                    <Typography variant="h5" fontWeight={600}>543</Typography>
                    <Typography variant="body2" color="success.main">+8% from yesterday</Typography>
                  </Box>
                  <Box sx={{ 
                    p: 2, 
                    borderRadius: 2, 
                    bgcolor: alpha(theme.palette.error.main, 0.05),
                    border: `1px solid ${alpha(theme.palette.error.main, 0.1)}`
                  }}>
                    <Typography variant="body2" color="text.secondary">Avg. Session Duration</Typography>
                    <Typography variant="h5" fontWeight={600}>2m 34s</Typography>
                    <Typography variant="body2" color="error.main">-5% from yesterday</Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </WidgetCard>
        </Grid>

        {/* SEO Status */}
        <Grid item xs={12} md={6} component={motion.div} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <WidgetCard>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <SearchIcon color="primary" fontSize="large" />
                <Typography variant="h6" fontWeight={600}>
                  SEO Status
                </Typography>
              </Box>
              <Button
                component={Link}
                href="/admin/seo"
                variant="outlined"
                size="small"
              >
                Improve SEO
              </Button>
            </Box>
            <Divider sx={{ mb: 3 }} />
            <Grid container spacing={2}>
              {seoStats.map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{ 
                    p: 2, 
                    borderRadius: 2, 
                    bgcolor: alpha(theme.palette.background.paper, 0.4),
                    border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: `0 2px 8px ${alpha(theme.palette.common.black, 0.04)}`
                  }}>
                    <Box>
                      <Typography variant="body2" color="text.secondary">{item.title}</Typography>
                      <Typography variant="h6" fontWeight={600}>{item.value}</Typography>
                    </Box>
                    <StatusAvatar status={item.status} />
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ mt: 3 }}>
              <Typography variant="body2" fontWeight={500}>Overall SEO Score</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <LinearProgress
                  variant="determinate"
                  value={78}
                  color="primary"
                  sx={{ 
                    height: 10, 
                    borderRadius: 5, 
                    flexGrow: 1, 
                    mr: 2,
                    bgcolor: alpha(theme.palette.primary.main, 0.1)
                  }}
                />
                <Typography variant="body1" fontWeight={600}>78%</Typography>
              </Box>
            </Box>
          </WidgetCard>
        </Grid>

        {/* Integrations */}
        <Grid item xs={12} md={6} component={motion.div} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <WidgetCard>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <CodeIcon color="primary" fontSize="large" />
                <Typography variant="h6" fontWeight={600}>
                  Integrations
                </Typography>
              </Box>
              <Button
                component={Link}
                href="/admin/integrations"
                variant="outlined"
                size="small"
              >
                Manage
              </Button>
            </Box>
            <Divider sx={{ mb: 3 }} />
            <Grid container spacing={2}>
              {integrations.map((integration, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{ 
                    p: 2, 
                    borderRadius: 2, 
                    bgcolor: alpha(theme.palette.background.paper, 0.4),
                    border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: `0 2px 8px ${alpha(theme.palette.common.black, 0.04)}`
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar sx={{ 
                        bgcolor: alpha(integration.color, 0.1), 
                        color: integration.color, 
                        mr: 1.5,
                        width: 40,
                        height: 40
                      }}>
                        {integration.icon}
                      </Avatar>
                      <Box>
                        <Typography variant="body2" fontWeight={500}>{integration.name}</Typography>
                        <Chip 
                          label={integration.status} 
                          size="small"
                          color={integration.status === 'Connected' ? 'success' : 'default'}
                          sx={{ height: 20, fontSize: '0.7rem' }}
                        />
                      </Box>
                    </Box>
                    <IconButton size="small" sx={{ color: theme.palette.text.secondary }}>
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </WidgetCard>
        </Grid>

        {/* Recent Content */}
        <Grid item xs={12} md={6} component={motion.div} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <WidgetCard>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <ArticleIcon color="primary" fontSize="large" />
                <Typography variant="h6" fontWeight={600}>
                  Recent Content
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2, color: theme.palette.primary.main }}>
                Pages
              </Typography>
              <List sx={{ 
                bgcolor: alpha(theme.palette.background.paper, 0.4),
                borderRadius: 2,
                overflow: 'hidden',
                border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
              }}>
                {loading ? (
          // Show loading skeletons
          Array(3).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              <ListItem
                sx={{ 
                  py: 1.5,
                  borderBottom: index < 2 ? `1px solid ${alpha(theme.palette.divider, 0.5)}` : 'none'
                }}
              >
                <ListItemAvatar>
                  <div style={{ 
                    width: 40, 
                    height: 40, 
                    borderRadius: '50%', 
                    backgroundColor: alpha(theme.palette.primary.main, 0.1) 
                  }}></div>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="body1">
                      <span style={{ 
                        display: 'inline-block', 
                        width: '70%', 
                        height: 20, 
                        backgroundColor: alpha(theme.palette.background.paper, 0.3), 
                        borderRadius: 4 
                      }}></span>
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2">
                      <span style={{ 
                        display: 'inline-block', 
                        width: '50%', 
                        height: 16, 
                        backgroundColor: alpha(theme.palette.background.paper, 0.2), 
                        borderRadius: 4,
                        marginTop: 4
                      }}></span>
                    </Typography>
                  }
                />
              </ListItem>
            </React.Fragment>
          ))
        ) : dashboardData.recentPages?.map((page, index) => (
                  <React.Fragment key={page.id}>
                    <ListItem
                      secondaryAction={
                        <IconButton
                          edge="end"
                          aria-label="edit"
                          component={Link}
                          href={`/admin/pages/${page.id}/edit`}
                          sx={{ color: theme.palette.primary.main }}
                        >
                          <EditIcon />
                        </IconButton>
                      }
                      sx={{ 
                        py: 1.5,
                        borderBottom: index < (dashboardData.recentPages?.length || 0) - 1 ? `1px solid ${alpha(theme.palette.divider, 0.5)}` : 'none'
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar sx={{ 
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          color: theme.palette.primary.main
                        }}>
                          <ArticleIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={page.title}
                        secondary={
                          <>
                            <Typography
                              component="span"
                              variant="body2"
                              color={
                                page.status === 'PUBLISHED'
                                  ? 'success.main'
                                  : 'warning.main'
                              }
                              sx={{ fontWeight: 500 }}
                            >
                              {page.status === 'PUBLISHED' ? 'Published' : 'Draft'}
                            </Typography>
                            {' • '}
                            <Typography component="span" variant="body2">
                              {new Date(page.updatedAt || page.createdAt).toLocaleDateString()}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                  </React.Fragment>
                ))}
              </List>
            </Box>
            
            <Box>
              <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2, color: theme.palette.secondary.main }}>
                Posts
              </Typography>
              <List sx={{ 
                bgcolor: alpha(theme.palette.background.paper, 0.4),
                borderRadius: 2,
                overflow: 'hidden',
                border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
              }}>
                {loading ? (
                  // Show loading skeletons
                  Array(3).fill(0).map((_, index) => (
                    <React.Fragment key={index}>
                      <ListItem
                        sx={{ 
                          py: 1.5,
                          borderBottom: index < 2 ? `1px solid ${alpha(theme.palette.divider, 0.5)}` : 'none'
                        }}
                      >
                        <ListItemAvatar>
                          <div style={{ 
                            width: 40, 
                            height: 40, 
                            borderRadius: '50%', 
                            backgroundColor: alpha(theme.palette.secondary.main, 0.1) 
                          }}></div>
                        </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="body1">
                      <span style={{ 
                        display: 'inline-block', 
                        width: '70%', 
                        height: 20, 
                        backgroundColor: alpha(theme.palette.background.paper, 0.3), 
                        borderRadius: 4 
                      }}></span>
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2">
                      <span style={{ 
                        display: 'inline-block', 
                        width: '50%', 
                        height: 16, 
                        backgroundColor: alpha(theme.palette.background.paper, 0.2), 
                        borderRadius: 4,
                        marginTop: 4
                      }}></span>
                    </Typography>
                  }
                />
                      </ListItem>
                    </React.Fragment>
                  ))
                ) : dashboardData.recentPosts?.map((post, index) => (
                  <React.Fragment key={post.id}>
                    <ListItem
                      secondaryAction={
                        <IconButton
                          edge="end"
                          aria-label="edit"
                          component={Link}
                          href={`/admin/posts/${post.id}/edit`}
                          sx={{ color: theme.palette.secondary.main }}
                        >
                          <EditIcon />
                        </IconButton>
                      }
                      sx={{ 
                        py: 1.5,
                        borderBottom: index < (dashboardData.recentPosts?.length || 0) - 1 ? `1px solid ${alpha(theme.palette.divider, 0.5)}` : 'none'
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar sx={{ 
                          bgcolor: alpha(theme.palette.secondary.main, 0.1),
                          color: theme.palette.secondary.main
                        }}>
                          <ArticleIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={post.title}
                        secondary={
                          <>
                            <Typography
                              component="span"
                              variant="body2"
                              color={
                                post.status === 'PUBLISHED'
                                  ? 'success.main'
                                  : 'warning.main'
                              }
                              sx={{ fontWeight: 500 }}
                            >
                              {post.status === 'PUBLISHED' ? 'Published' : 'Draft'}
                            </Typography>
                            {' • '}
                            <Typography component="span" variant="body2">
                              {new Date(post.updatedAt || post.createdAt).toLocaleDateString()}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                  </React.Fragment>
                ))}
              </List>
            </Box>
            
            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Button
                component={Link}
                href="/admin/content"
                variant="outlined"
                color="primary"
                endIcon={<TrendingUpIcon />}
              >
                Manage All Content
              </Button>
            </Box>
          </WidgetCard>
        </Grid>

        {/* Site Health */}
        <Grid item xs={12} md={6} component={motion.div} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <WidgetCard>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <TrendingUpIcon color="primary" fontSize="large" />
                <Typography variant="h6" fontWeight={600}>
                  Site Health
                </Typography>
              </Box>
              <Button
                component={Link}
                href="/admin/site-health"
                variant="outlined"
                size="small"
              >
                View Details
              </Button>
            </Box>
            <Divider sx={{ mb: 3 }} />
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">Performance</Typography>
                <Typography variant="body2" fontWeight={500} color="warning.main">
                  Needs Improvement
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={dashboardData.siteHealth?.performance?.percentage || 68}
                color="warning"
                sx={{ height: 8, borderRadius: 4 }}
              />
              <Typography variant="caption" color="text.secondary">
                Page load time: 2.4s (Target: &lt;2s)
              </Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">Security</Typography>
                <Typography variant="body2" fontWeight={500} color="success.main">
                  Good
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={dashboardData.siteHealth?.security?.percentage || 92}
                color="success"
                sx={{ height: 8, borderRadius: 4 }}
              />
              <Typography variant="caption" color="text.secondary">
                SSL certificate valid, no vulnerabilities detected
              </Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">Database</Typography>
                <Typography variant="body2" fontWeight={500} color="success.main">
                  Good
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={dashboardData.siteHealth?.database?.percentage || 95}
                color="success"
                sx={{ height: 8, borderRadius: 4 }}
              />
              <Typography variant="caption" color="text.secondary">
                Database size: 24MB, Last backup: Today
              </Typography>
            </Box>
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">Storage</Typography>
                <Typography variant="body2" fontWeight={500} color="primary.main">
                  {dashboardData.siteHealth?.storage?.used || '65% Used'}
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={dashboardData.siteHealth?.storage?.percentage || 65}
                color="primary"
                sx={{ height: 8, borderRadius: 4 }}
              />
              <Typography variant="caption" color="text.secondary">
                Used: 650MB / Available: 1GB
              </Typography>
            </Box>
          </WidgetCard>
        </Grid>
      </Grid>
    </Box>
  );
}
