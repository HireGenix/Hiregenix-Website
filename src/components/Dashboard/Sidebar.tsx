'use client';

import React, { useState } from 'react';
import { Box, List, ListItem, ListItemIcon, Typography, styled, Tooltip, alpha, Paper } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import {
  Dashboard as DashboardIcon,
  Pages as PagesIcon,
  Article as ArticleIcon,
  PermMedia as MediaIcon,
  Menu as MenuBuilderIcon,
  Settings as SettingsIcon,
  Payment as PaymentIcon,
  ViewModule as ComponentsIcon,
  Analytics as AnalyticsIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const SidebarContainer = styled(Paper)(({ theme }) => ({
  width: 70,
  height: 'calc(100vh - 40px)',
  background: alpha(theme.palette.background.paper, 0.7),
  backdropFilter: 'blur(24px) saturate(180%)',
  border: `1px solid ${alpha(theme.palette.common.white, 0.8)}`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2, 0),
  position: 'fixed',
  left: 20,
  top: 20,
  zIndex: 1,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  borderRadius: 24,
  boxShadow: `
    0 4px 8px ${alpha(theme.palette.common.black, 0.04)},
    0 8px 16px ${alpha(theme.palette.common.black, 0.02)}
  `,
}));

const ScrollableContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  width: '100%',
  overflowY: 'auto',
  /* Hide scrollbar but keep functionality */
  /* For Chrome, Safari, and Opera */
  '&::-webkit-scrollbar': {
    width: '0px',
  },
  /* For Firefox */
  scrollbarWidth: 'none',
  /* For IE and Edge */
  msOverflowStyle: 'none',
}));

const MotionBox = styled(motion.div)({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Logo = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  marginBottom: theme.spacing(3),
  width: 48,
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& svg': {
    width: '100%',
    height: '100%',
  },
}));

const StyledLink = styled(Link)<{ active: string }>(({ theme, active }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  ...(active === 'true' && {
    color: theme.palette.primary.main,
    '& .MuiListItemIcon-root': {
      color: theme.palette.primary.main,
      background: alpha(theme.palette.primary.main, 0.1),
      borderRadius: '16px',
      boxShadow: `0 4px 8px ${alpha(theme.palette.primary.main, 0.15)}`,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 3,
      height: 20,
      borderRadius: '0 3px 3px 0',
      backgroundColor: theme.palette.primary.main,
    },
  }),
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1),
  width: 'auto',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '& .MuiListItemIcon-root': {
    minWidth: 'unset',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    color: alpha(theme.palette.text.primary, 0.7),
    padding: '10px',
    borderRadius: '16px',
  },
  '&:hover .MuiListItemIcon-root': {
    background: alpha(theme.palette.primary.main, 0.08),
    transform: 'translateY(-2px)',
    color: theme.palette.primary.main,
  },
}));

const TooltipContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1, 1.5),
  background: alpha(theme.palette.background.paper, 0.95),
  backdropFilter: 'blur(10px)',
  border: `1px solid ${alpha(theme.palette.common.white, 0.8)}`,
  borderRadius: 8,
  boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.1)}`,
  '& .MuiTypography-root': {
    color: theme.palette.primary.main,
  },
}));

const LogoIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="16" fill="#f05126"/>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="28" fontWeight="bold">
      H
    </text>
  </svg>
);

// Define the menu items
const menuItems = [
  { path: '/admin', icon: <DashboardIcon />, text: 'Dashboard' },
  { path: '/admin/posts', icon: <ArticleIcon />, text: 'Posts' },
  { path: '/admin/seo', icon: <SearchIcon />, text: 'SEO' },
  { path: '/admin/payments', icon: <PaymentIcon />, text: 'Payments' },
  { path: '/admin/analytics', icon: <AnalyticsIcon />, text: 'Analytics' },
  { path: '/admin/settings', icon: <SettingsIcon />, text: 'Settings' },
];

const sidebarVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const Sidebar = () => {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { data: session } = useSession();

  return (
    <SidebarContainer elevation={0}>
      <MotionBox
        variants={sidebarVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Fixed logo */}
        <Logo>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <LogoIcon />
          </motion.div>
        </Logo>

        {/* Scrollable navigation */}
        <ScrollableContainer>
          <List sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
            {menuItems.map((item) => (
              <motion.div key={item.path} variants={itemVariants} style={{ width: '100%' }}>
                <Tooltip
                  title={
                    <TooltipContent>
                      <Typography variant="body2" fontWeight={500}>
                        {item.text}
                      </Typography>
                    </TooltipContent>
                  }
                  placement="right"
                  arrow
                >
                  <StyledLink
                    href={item.path}
                    active={(pathname === item.path).toString()}
                    onMouseEnter={() => setHoveredItem(item.path)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <StyledListItem>
                      <ListItemIcon>
                        {item.icon}
                      </ListItemIcon>
                    </StyledListItem>
                  </StyledLink>
                </Tooltip>
              </motion.div>
            ))}
          </List>
        </ScrollableContainer>
      </MotionBox>
    </SidebarContainer>
  );
};

export default Sidebar;
