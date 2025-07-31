'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, CircularProgress, Typography } from '@mui/material';

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the dashboard page
    router.push('/admin/dashboard');
  }, [router]);

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '50vh' 
      }}
    >
      <CircularProgress size={60} thickness={4} sx={{ mb: 3 }} />
      <Typography variant="h6" color="text.secondary">
        Redirecting to dashboard...
      </Typography>
    </Box>
  );
}
