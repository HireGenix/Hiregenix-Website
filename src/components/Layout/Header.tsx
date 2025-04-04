'use client';

import React, { useState, useEffect } from 'react';
import DemoRequestDialog from './DemoRequestDialog';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  useScrollTrigger,
  Slide,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  alpha,
  Badge,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const pages = [
  { name: 'Home', href: '/' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const userMenuItems = [
  { name: 'Dashboard', href: '/admin' },
  { name: 'Profile', href: '/admin/profile' },
  { name: 'Settings', href: '/admin/settings' },
];

export default function Header() {
  const { data: session } = useSession();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const pathname = usePathname();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          color="default" 
          elevation={scrolled ? 4 : 0}
          sx={{
            backgroundColor: theme.palette.background.paper,
            transition: 'all 0.3s ease',
            borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.05)' : 'none',
            boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none',
            borderRadius: 0, // Ensure square corners
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ height: 80 }}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" passHref style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                  <Image
                    src="/HireGenix-logo-black.png"
                    alt="HireGenix Logo"
                    width={150}
                    height={40}
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </Box>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              {pages.map((page, index) => (
                <motion.div
                  key={page.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  <Button
                    component={Link}
                    href={page.href}
                    sx={{
                      mx: 1.5,
                      my: 2,
                      color: pathname === page.href ? theme.palette.primary.main : 'text.primary',
                      display: 'block',
                      fontWeight: pathname === page.href ? 600 : 500,
                      position: 'relative',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: theme.palette.primary.main,
                        transform: 'translateY(-2px)',
                      },
                      '&::after': pathname === page.href ? {
                        content: '""',
                        position: 'absolute',
                        bottom: -2,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '40%',
                        height: 3,
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 1.5,
                      } : {},
                    }}
                  >
                    {page.name}
                  </Button>
                </motion.div>
              ))}
            </Box>

            {/* Desktop Action Buttons */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <IconButton color="inherit" sx={{ ml: 1 }}>
                  <SearchIcon />
                </IconButton>
              </motion.div>

              {/* User Menu */}
              <Box sx={{ flexGrow: 0 }}>
                {session ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton color="inherit" sx={{ mr: 1 }}>
                        <Badge badgeContent={3} color="error">
                          <NotificationsIcon />
                        </Badge>
                      </IconButton>
                      
                      <Tooltip title="Account settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                          <Avatar 
                            alt={session.user?.name || 'User'} 
                            src={session.user?.image || undefined}
                            sx={{ 
                              bgcolor: theme.palette.primary.main,
                              width: 40,
                              height: 40,
                              border: '2px solid white',
                              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                            }}
                          >
                            {session.user?.name?.charAt(0) || 'U'}
                          </Avatar>
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <Menu
                      sx={{ 
                        mt: '45px',
                        '& .MuiPaper-root': {
                          borderRadius: 3,
                          minWidth: 220,
                          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                          border: '1px solid rgba(0, 0, 0, 0.05)',
                        }
                      }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      <Box sx={{ px: 2, py: 1.5, display: 'flex', alignItems: 'center' }}>
                        <Avatar 
                          alt={session.user?.name || 'User'} 
                          src={session.user?.image || undefined}
                          sx={{ 
                            bgcolor: theme.palette.primary.main,
                            width: 40,
                            height: 40,
                            mr: 1.5,
                          }}
                        >
                          {session.user?.name?.charAt(0) || 'U'}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle1" fontWeight={600}>
                            {session.user?.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                            {session.user?.email}
                          </Typography>
                        </Box>
                      </Box>
                      <Divider />
                      {userMenuItems.map((item) => (
                        <MenuItem 
                          key={item.name} 
                          component={Link} 
                          href={item.href} 
                          onClick={handleCloseUserMenu}
                          sx={{ 
                            py: 1.5,
                            px: 2,
                            '&:hover': {
                              backgroundColor: alpha(theme.palette.primary.main, 0.05),
                            }
                          }}
                        >
                          <Typography variant="body2" fontWeight={500}>{item.name}</Typography>
                        </MenuItem>
                      ))}
                      <Divider />
                      <MenuItem 
                        onClick={() => signOut()}
                        sx={{ 
                          py: 1.5,
                          px: 2,
                          '&:hover': {
                            backgroundColor: alpha(theme.palette.error.main, 0.05),
                            color: theme.palette.error.main,
                          }
                        }}
                      >
                        <Typography variant="body2" fontWeight={500}>Sign Out</Typography>
                      </MenuItem>
                    </Menu>
                  </motion.div>
                ) : (
                  <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      <Button
                        variant="outlined"
                        color="primary"
                        component="a"
                        href="https://www.myhiregenix.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          borderRadius: '50px',
                          px: 3,
                          borderWidth: 2,
                          fontWeight: 600,
                        }}
                      >
                        Sign In
                      </Button>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setDemoDialogOpen(true)}
                        sx={{ 
                          borderRadius: '50px',
                          px: 3,
                          fontWeight: 600,
                          boxShadow: '0 4px 14px rgba(240, 81, 38, 0.4)',
                        }}
                      >
                        Book a Demo
                      </Button>
                    </motion.div>
                  </Box>
                )}
              </Box>
            </Box>

            {/* Mobile Menu Button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleMobileMenu}
                color="inherit"
                sx={{
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: 2,
                  p: 1,
                }}
              >
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
            </Toolbar>
          </Container>

          {/* Mobile Menu Drawer */}
          <Drawer
          anchor="right"
          open={mobileMenuOpen}
          onClose={toggleMobileMenu}
          sx={{
            '& .MuiDrawer-paper': {
              width: '80%',
              maxWidth: 360,
              boxSizing: 'border-box',
              pt: 2,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            },
          }}
        >
          <Box sx={{ p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Image
              src="/HireGenix-logo-black.png"
              alt="HireGenix Logo"
              width={120}
              height={32}
              style={{ objectFit: 'contain' }}
            />
            <IconButton onClick={toggleMobileMenu} sx={{ p: 1 }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ mb: 2 }} />
          
          {session && (
            <Box sx={{ px: 3, py: 2, display: 'flex', alignItems: 'center' }}>
              <Avatar 
                alt={session.user?.name || 'User'} 
                src={session.user?.image || undefined}
                sx={{ 
                  bgcolor: theme.palette.primary.main,
                  width: 48,
                  height: 48,
                  mr: 2,
                  border: '2px solid white',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                {session.user?.name?.charAt(0) || 'U'}
              </Avatar>
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  {session.user?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {session.user?.email}
                </Typography>
              </Box>
            </Box>
          )}
          
          <List sx={{ px: 1.5 }}>
            {pages.map((page) => (
              <ListItem key={page.name} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  component={Link}
                  href={page.href}
                  onClick={toggleMobileMenu}
                  sx={{
                    py: 1.5,
                    px: 2,
                    borderRadius: 2,
                    backgroundColor: pathname === page.href ? alpha(theme.palette.primary.main, 0.08) : 'transparent',
                    color: pathname === page.href ? theme.palette.primary.main : 'text.primary',
                    borderLeft: pathname === page.href ? `4px solid ${theme.palette.primary.main}` : '4px solid transparent',
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.05),
                    },
                  }}
                >
                  <ListItemText 
                    primary={page.name} 
                    primaryTypographyProps={{ 
                      fontWeight: pathname === page.href ? 600 : 500,
                      fontSize: '1rem',
                    }} 
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          
          <Divider sx={{ my: 2 }} />
          
          <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {session ? (
              <>
                {userMenuItems.map((item) => (
                  <Button
                    key={item.name}
                    component={Link}
                    href={item.href}
                    variant="outlined"
                    color="primary"
                    fullWidth
                    onClick={toggleMobileMenu}
                    sx={{
                      py: 1.5,
                      borderRadius: 2,
                      justifyContent: 'flex-start',
                      borderWidth: 2,
                      borderColor: alpha(theme.palette.primary.main, 0.3),
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => {
                    signOut();
                    toggleMobileMenu();
                  }}
                  sx={{
                    py: 1.5,
                    borderRadius: 2,
                    mt: 1,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                  }}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  component="a"
                  href="https://www.myhiregenix.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMobileMenu}
                  sx={{
                    py: 1.5,
                    borderRadius: 50,
                    borderWidth: 2,
                    borderColor: alpha(theme.palette.primary.main, 0.5),
                  }}
                >
                  Sign In
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => {
                    setDemoDialogOpen(true);
                    toggleMobileMenu();
                  }}
                  sx={{
                    py: 1.5,
                    borderRadius: 50,
                    mt: 1,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                    boxShadow: '0 4px 14px rgba(240, 81, 38, 0.4)',
                  }}
                >
                  Book a Demo
                </Button>
              </>
            )}
          </Box>
          </Drawer>
        </AppBar>
      </HideOnScroll>
      
      {/* Demo Request Dialog */}
      <DemoRequestDialog 
        open={demoDialogOpen} 
        onClose={() => setDemoDialogOpen(false)} 
      />
    </>
  );
}
