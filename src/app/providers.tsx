'use client';

import React, { useState, useEffect } from 'react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui', prepend: true }}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <SessionProvider>
          {!mounted ? (
            <div style={{ visibility: 'hidden' }}>{children}</div>
          ) : (
            children
          )}
        </SessionProvider>
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
