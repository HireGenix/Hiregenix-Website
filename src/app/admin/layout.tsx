'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { Box, styled, alpha, Container, Paper, Typography } from '@mui/material';
import { Sidebar, TopBar } from '@/components/Dashboard';
import { motion } from 'framer-motion';

const LayoutContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  background: `linear-gradient(135deg, 
    ${alpha(theme.palette.primary.light, 0.05)},
    ${alpha(theme.palette.background.default, 0.1)},
    ${alpha(theme.palette.secondary.light, 0.05)}
  )`,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("/hero-pattern.svg")',
    opacity: 0.02,
    pointerEvents: 'none',
  },
  '@media (max-width: 600px)': {
    padding: '8px',
  },
}));

const MainContent = styled(motion.div)(({ theme }) => ({
  flexGrow: 1,
  marginLeft: 90,
  minHeight: '100vh',
  padding: theme.spacing(3),
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '@media (max-width: 600px)': {
    marginLeft: 82,
    padding: theme.spacing(2),
  },
}));

const ContentWrapper = styled(Paper)(({ theme }) => ({
  borderRadius: 24,
  overflow: 'hidden',
  background: alpha(theme.palette.background.paper, 0.8),
  backdropFilter: 'blur(20px) saturate(180%)',
  boxShadow: `
    0 1px 2px ${alpha(theme.palette.common.black, 0.03)},
    0 2px 4px ${alpha(theme.palette.common.black, 0.03)},
    0 4px 8px ${alpha(theme.palette.common.black, 0.03)},
    0 8px 16px ${alpha(theme.palette.common.black, 0.03)}
  `,
  border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
  minHeight: 'calc(100vh - 48px)',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '30%',
    background: `linear-gradient(180deg,
      ${alpha(theme.palette.background.paper, 0.05)} 0%,
      transparent 100%
    )`,
    pointerEvents: 'none',
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  paddingTop: 80,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  maxWidth: '100%',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '8px',
    height: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: alpha(theme.palette.common.black, 0.03),
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: alpha(theme.palette.primary.main, 0.2),
    borderRadius: '6px',
    border: `2px solid transparent`,
    backgroundClip: 'content-box',
    '&:hover': {
      background: alpha(theme.palette.primary.main, 0.3),
      backgroundClip: 'content-box',
    },
  },
  '@media (max-width: 1200px)': {
    padding: theme.spacing(2),
    paddingTop: 70,
  },
}));

// Create a motion version of the StyledContainer
const MotionContainer = motion(StyledContainer as any);

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();

  // Loading state
  if (status === 'loading') {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Typography variant="h6">Loading...</Typography>
      </Box>
    );
  }

  // If not authenticated, the middleware will redirect to login page
  if (!session) {
    return null;
  }

  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <ContentWrapper elevation={0}>
          <TopBar />
          <MotionContainer
            maxWidth={false}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            {children}
          </MotionContainer>
        </ContentWrapper>
      </MainContent>
    </LayoutContainer>
  );
}
