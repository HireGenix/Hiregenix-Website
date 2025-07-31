'use client';

import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { useHydrationSafe } from '@/hooks/useHydrationSafe';

interface HydrationSafeProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  skeleton?: {
    count?: number;
    height?: number;
    variant?: 'text' | 'rectangular' | 'circular';
  };
}

/**
 * Wrapper component that prevents hydration mismatches by showing a fallback
 * until the component is safely hydrated on the client
 */
export const HydrationSafe: React.FC<HydrationSafeProps> = ({
  children,
  fallback,
  skeleton = { count: 3, height: 100, variant: 'rectangular' }
}) => {
  const isHydrated = useHydrationSafe();

  if (!isHydrated) {
    if (fallback) {
      return <>{fallback}</>;
    }

    // Default skeleton fallback
    return (
      <Box>
        {Array.from({ length: skeleton.count || 3 }).map((_, index) => (
          <Skeleton
            key={index}
            variant={skeleton.variant}
            height={skeleton.height}
            sx={{ mb: 2, borderRadius: 1 }}
          />
        ))}
      </Box>
    );
  }

  return <>{children}</>;
};
