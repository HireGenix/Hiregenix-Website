'use client';

import React, { useState } from 'react';
import { signOut } from 'next-auth/react';
import { 
  Box, 
  IconButton, 
  styled, 
  alpha, 
  Badge, 
  Avatar, 
  Menu, 
  MenuItem, 
  ListItemIcon, 
  Divider, 
  InputBase,
  Tooltip,
  Paper,
  Typography
} from '@mui/material';
import {
  NotificationsOutlined as NotificationsIcon,
  PersonOutline as PersonIcon,
  Search as SearchIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Help as HelpIcon,
  Brightness4 as DarkModeIcon,
  KeyboardArrowDown as ArrowDownIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const TopBarContainer = styled(Box)(({ theme }) => ({
  height: 70,
  background: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 3),
  position: 'relative',
  zIndex: 1100,
  '@media (max-width: 600px)': {
    padding: theme.spacing(0, 2),
  },
}));

const SearchBar = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(0.5, 2),
  background: alpha(theme.palette.background.paper, 0.7),
  backdropFilter: 'blur(10px)',
  borderRadius: 16,
  width: 300,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  border: `1px solid ${alpha(theme.palette.common.white, 0.8)}`,
  boxShadow: `0 2px 6px ${alpha(theme.palette.common.black, 0.05)}`,
  '&:hover': {
    boxShadow: `0 4px 12px ${alpha(theme.palette.common.black, 0.08)}`,
  },
  '@media (max-width: 600px)': {
    width: '100%',
    maxWidth: 200,
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 0),
    fontSize: '0.875rem',
    transition: theme.transitions.create('width'),
    color: theme.palette.text.primary,
    '&::placeholder': {
      color: alpha(theme.palette.text.primary, 0.5),
      opacity: 1,
    },
  },
}));

const Actions = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  padding: theme.spacing(1),
  background: alpha(theme.palette.primary.main, 0.08),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
  '&:hover': {
    background: alpha(theme.palette.primary.main, 0.12),
    transform: 'translateY(-2px)',
    boxShadow: `0 4px 8px ${alpha(theme.palette.primary.main, 0.15)}`,
  },
  '& .MuiSvgIcon-root': {
    fontSize: '1.25rem',
  },
}));

const ProfileButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(0.5, 1.5, 0.5, 0.5),
  borderRadius: 16,
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  background: alpha(theme.palette.background.paper, 0.7),
  backdropFilter: 'blur(10px)',
  border: `1px solid ${alpha(theme.palette.common.white, 0.8)}`,
  boxShadow: `0 2px 6px ${alpha(theme.palette.common.black, 0.05)}`,
  '&:hover': {
    background: alpha(theme.palette.background.paper, 0.8),
    boxShadow: `0 4px 12px ${alpha(theme.palette.common.black, 0.08)}`,
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 36,
  height: 36,
  border: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  background: theme.palette.primary.main,
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 16,
    minWidth: 180,
    background: alpha(theme.palette.background.paper, 0.9),
    backdropFilter: 'blur(10px)',
    boxShadow: `
      0 4px 8px ${alpha(theme.palette.common.black, 0.04)},
      0 8px 16px ${alpha(theme.palette.common.black, 0.02)}
    `,
    border: `1px solid ${alpha(theme.palette.common.white, 0.8)}`,
    '& .MuiMenu-list': {
      padding: theme.spacing(1),
    },
    '& .MuiMenuItem-root': {
      borderRadius: 8,
      margin: theme.spacing(0.5, 0),
      padding: theme.spacing(1, 2),
      '&:hover': {
        background: alpha(theme.palette.primary.main, 0.08),
      },
    },
  },
}));

const TopBar = () => {
  const { data: session } = useSession();
  const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState<null | HTMLElement>(null);
  const profileOpen = Boolean(profileAnchorEl);
  const notificationOpen = Boolean(notificationAnchorEl);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  const handleNotificationClick = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationAnchorEl(null);
  };

  // Sample notifications
  const notifications = [
    {
      id: 1,
      title: 'New Page Published',
      message: 'Your "About Us" page has been published successfully',
      time: '10 minutes ago',
      read: false,
    },
    {
      id: 2,
      title: 'Media Upload Complete',
      message: '5 new images have been uploaded to your media library',
      time: '1 hour ago',
      read: false,
    },
    {
      id: 3,
      title: 'System Update',
      message: 'The CMS has been updated to version 2.1.0',
      time: '3 hours ago',
      read: true,
    }
  ];

  return (
    <TopBarContainer>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SearchBar elevation={0}>
          <SearchIcon sx={{ color: (theme) => alpha(theme.palette.text.primary, 0.5) }} />
          <StyledInputBase
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </SearchBar>
      </motion.div>

      <Actions>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Tooltip title="Notifications" arrow>
            <StyledIconButton 
              onClick={handleNotificationClick}
              sx={{ cursor: 'pointer', pointerEvents: 'auto' }}
            >
              <Badge 
                badgeContent={notifications.filter(n => !n.read).length} 
                color="error" 
                sx={{ 
                  '& .MuiBadge-badge': { top: 5, right: 5 },
                  cursor: 'pointer',
                  pointerEvents: 'auto'
                }}
              >
                <NotificationsIcon />
              </Badge>
            </StyledIconButton>
          </Tooltip>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tooltip title="Help" arrow>
            <StyledIconButton>
              <HelpIcon />
            </StyledIconButton>
          </Tooltip>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ProfileButton onClick={handleProfileClick}>
            <StyledAvatar>
              {session?.user?.name?.charAt(0) || 'U'}
            </StyledAvatar>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ArrowDownIcon fontSize="small" sx={{ color: (theme) => alpha(theme.palette.text.primary, 0.7) }} />
            </Box>
          </ProfileButton>
        </motion.div>

        {/* Notification Menu */}
        <StyledMenu
          anchorEl={notificationAnchorEl}
          open={notificationOpen}
          onClose={handleNotificationClose}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          PaperProps={{
            sx: {
              width: 320,
              maxHeight: 400,
              overflow: 'auto'
            }
          }}
        >
          <Box sx={{ p: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Notifications</Box>
            <Box sx={{ fontSize: '0.8rem', color: 'primary.main', cursor: 'pointer' }}>
              Mark all as read
            </Box>
          </Box>
          <Divider />
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <MenuItem 
                key={notification.id} 
                onClick={handleNotificationClose}
                sx={{ 
                  borderLeft: notification.read ? 'none' : '3px solid', 
                  borderLeftColor: 'primary.main',
                  py: 1.5,
                  px: 2
                }}
              >
                <Box sx={{ width: '100%' }}>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start',
                    mb: 0.5
                  }}>
                    <Box sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>
                      {notification.title}
                    </Box>
                    <Box sx={{ fontSize: '0.7rem', color: 'text.secondary' }}>
                      {notification.time}
                    </Box>
                  </Box>
                  <Box sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>
                    {notification.message}
                  </Box>
                </Box>
              </MenuItem>
            ))
          ) : (
            <Box sx={{ p: 2, textAlign: 'center', color: 'text.secondary' }}>
              No notifications
            </Box>
          )}
          <Divider />
          <MenuItem onClick={handleNotificationClose} sx={{ justifyContent: 'center', color: 'primary.main' }}>
            View all notifications
          </MenuItem>
        </StyledMenu>

        {/* Profile Menu */}
        <StyledMenu
          anchorEl={profileAnchorEl}
          open={profileOpen}
          onClose={handleProfileClose}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem disabled>
            <Typography variant="body2" fontWeight={500}>
              {session?.user?.name}
            </Typography>
          </MenuItem>
          <MenuItem disabled>
            <Typography variant="body2" color="text.secondary">
              {session?.user?.email}
            </Typography>
          </MenuItem>
          <Divider />
          <MenuItem 
            component={Link} 
            href="/admin/profile" 
            onClick={handleProfileClose}
          >
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            Profile
          </MenuItem>
          <MenuItem onClick={handleProfileClose}>
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleProfileClose}>
            <ListItemIcon>
              <DarkModeIcon fontSize="small" />
            </ListItemIcon>
            Dark Mode
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => signOut({ callbackUrl: '/auth/login' })}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </StyledMenu>
      </Actions>
    </TopBarContainer>
  );
};

export default TopBar;
