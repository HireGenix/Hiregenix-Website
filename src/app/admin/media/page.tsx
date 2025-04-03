'use client';

import React from 'react';
import { 
  Box, 
  Typography, 
  alpha,
  useTheme,
  styled,
} from '@mui/material';
import { 
  PermMedia as MediaIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { MediaLibrary } from '@/components/MediaLibrary';
import { WidgetCard } from '@/components/Dashboard/DashboardComponents';

// Styled components
const MediaContainer = styled(Box)(({ theme }) => ({
  borderRadius: 16,
  overflow: 'hidden',
  background: alpha(theme.palette.background.paper, 0.4),
  backdropFilter: 'blur(10px)',
  boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.05)}`,
}));

export default function MediaPage() {
  const theme = useTheme();

  return (
    <Box component={motion.div} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Page Header */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <MediaIcon 
            sx={{ 
              fontSize: 40, 
              color: theme.palette.info.main,
              filter: `drop-shadow(0 2px 4px ${alpha(theme.palette.info.main, 0.4)})`
            }} 
          />
          <Box>
            <Typography variant="h4" component="h1" gutterBottom fontWeight={600}>
              Media Library
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Upload, manage, and organize your media files
            </Typography>
          </Box>
        </Box>
      </Box>

      <WidgetCard>
        <MediaLibrary />
      </WidgetCard>
    </Box>
  );
}
