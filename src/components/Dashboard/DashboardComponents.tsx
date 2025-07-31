'use client';

import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  alpha,
  styled,
  Card,
} from '@mui/material';
import {
  Article as ArticleIcon,
  People as PeopleIcon,
  Visibility as VisibilityIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Code as CodeIcon,
  Analytics as AnalyticsIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  Tag as TagIcon,
  Payment as PaymentIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Styled components
export const WidgetCard = styled(motion.div)(({ theme }) => ({
  background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.8)}, ${alpha(theme.palette.background.default, 0.9)})`,
  backdropFilter: 'blur(20px) saturate(180%)',
  borderRadius: 24,
  padding: theme.spacing(3),
  border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
  boxShadow: `
    0 4px 8px ${alpha(theme.palette.primary.main, 0.05)},
    0 12px 24px ${alpha(theme.palette.common.black, 0.05)}
  `,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '30%',
    background: `linear-gradient(180deg, ${alpha(theme.palette.primary.main, 0.03)}, transparent)`,
    borderRadius: '24px 24px 0 0',
    pointerEvents: 'none',
  },
}));

export const ActionCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(135deg, 
    ${alpha(theme.palette.background.paper, 0.9)}, 
    ${alpha(theme.palette.background.default, 0.95)}
  )`,
  backdropFilter: 'blur(20px) saturate(180%)',
  borderRadius: 16,
  padding: theme.spacing(2.5),
  border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
  boxShadow: `
    0 4px 8px ${alpha(theme.palette.common.black, 0.04)},
    0 8px 16px ${alpha(theme.palette.common.black, 0.02)}
  `,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  height: '100%',
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: `
      0 8px 16px ${alpha(theme.palette.common.black, 0.06)},
      0 16px 32px ${alpha(theme.palette.common.black, 0.03)}
    `,
    '& .action-icon': {
      transform: 'scale(1.1)',
    },
  },
  zIndex: 10,
  pointerEvents: 'auto',
}));

export const ActionIcon = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: 12,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '& .MuiSvgIcon-root': {
    fontSize: '1.75rem',
  },
}));

export const StatsCard = styled(motion.div)(({ theme }) => ({
  background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.8)}, ${alpha(theme.palette.background.default, 0.9)})`,
  backdropFilter: 'blur(20px) saturate(180%)',
  borderRadius: 24,
  padding: theme.spacing(3),
  border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
  boxShadow: `
    0 4px 8px ${alpha(theme.palette.primary.main, 0.05)},
    0 12px 24px ${alpha(theme.palette.common.black, 0.05)}
  `,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(2),
  height: '100%',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `
      0 8px 16px ${alpha(theme.palette.common.black, 0.06)},
      0 16px 32px ${alpha(theme.palette.common.black, 0.03)}
    `,
  },
}));

// Mock data for dashboard
export const recentPages = [
  { id: 1, title: 'Home', status: 'Published', date: '2025-03-01' },
  { id: 2, title: 'About Us', status: 'Published', date: '2025-03-02' },
  { id: 3, title: 'Services', status: 'Draft', date: '2025-03-05' },
];

export const recentPosts = [
  { id: 1, title: 'Introducing HireGenix', status: 'Published', date: '2025-03-01' },
  { id: 2, title: 'AI in Recruitment', status: 'Published', date: '2025-03-03' },
  { id: 3, title: 'Future of Hiring', status: 'Draft', date: '2025-03-06' },
];

export const stats = [
  { title: 'Pages', count: 12, icon: <ArticleIcon fontSize="large" color="primary" />, color: '#2196f3' },
  { title: 'Posts', count: 24, icon: <ArticleIcon fontSize="large" color="secondary" />, color: '#f50057' },
  { title: 'Users', count: 8, icon: <PeopleIcon fontSize="large" />, color: '#00bcd4' },
  { title: 'Views', count: 1254, icon: <VisibilityIcon fontSize="large" />, color: '#4caf50' },
];

export type StatusType = 'good' | 'warning' | 'error';

export const seoStats = [
  { title: 'Pages with SEO', value: 85, status: 'good' as StatusType },
  { title: 'Missing Meta Descriptions', value: 3, status: 'warning' as StatusType },
  { title: 'Missing Alt Tags', value: 7, status: 'warning' as StatusType },
  { title: 'Broken Links', value: 1, status: 'error' as StatusType },
];

export const integrations = [
  { name: 'Google Analytics', status: 'Connected', icon: <AnalyticsIcon />, color: '#4285F4' },
  { name: 'Google Tag Manager', status: 'Connected', icon: <TagIcon />, color: '#4285F4' },
  { name: 'Facebook Pixel', status: 'Not Connected', icon: <FacebookIcon />, color: '#1877F2' },
  { name: 'LinkedIn Insight', status: 'Not Connected', icon: <LinkedInIcon />, color: '#0A66C2' },
  { name: 'Stripe', status: 'Connected', icon: <PaymentIcon />, color: '#635BFF' },
  { name: 'PayPal', status: 'Not Connected', icon: <PaymentIcon />, color: '#003087' },
];

export const quickActions = [
  {
    icon: <AddIcon />,
    title: 'Create Page',
    description: 'Add a new page to your site',
    color: '#2196f3',
    href: '/admin/pages/create',
  },
  {
    icon: <AddIcon />,
    title: 'Create Post',
    description: 'Write a new blog post',
    color: '#f50057',
    href: '/admin/posts/create',
  },
  {
    icon: <AddIcon />,
    title: 'Upload Media',
    description: 'Add images and files',
    color: '#4caf50',
    href: '/admin/media',
  },
  {
    icon: <EditIcon />,
    title: 'Edit Menus',
    description: 'Update site navigation',
    color: '#ff9800',
    href: '/admin/menus',
  },
  {
    icon: <EditIcon />,
    title: 'Site Settings',
    description: 'Configure your website',
    color: '#9c27b0',
    href: '/admin/settings',
  },
  {
    icon: <CodeIcon />,
    title: 'Integrations',
    description: 'Connect third-party services',
    color: '#00bcd4',
    href: '/admin/integrations',
  },
];

// Animation variants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Helper components
export const StatusAvatar = ({ status }: { status: StatusType }) => {
  return (
    <Avatar 
      sx={{ 
        bgcolor: theme => status === 'good' 
          ? alpha(theme.palette.success.main, 0.1)
          : status === 'warning' 
            ? alpha(theme.palette.warning.main, 0.1)
            : alpha(theme.palette.error.main, 0.1),
        color: theme => status === 'good' 
          ? theme.palette.success.main
          : status === 'warning' 
            ? theme.palette.warning.main
            : theme.palette.error.main,
        width: 40,
        height: 40
      }}
    >
      {status === 'good' ? <CheckCircleIcon /> : status === 'warning' ? <WarningIcon /> : <ErrorIcon />}
    </Avatar>
  );
};
