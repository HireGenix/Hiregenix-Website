'use client';

import { useEffect, useState } from 'react';

/**
 * Hook to prevent hydration mismatches by ensuring component is mounted on client
 * before rendering client-specific content
 */
export const useHydrationSafe = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
};
