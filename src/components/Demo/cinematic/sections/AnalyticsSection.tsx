import React from 'react';
import { Box, Typography, Card, Grid } from '@mui/material';
import { motion } from 'framer-motion';

interface AnalyticsSectionProps {
  content: any;
  progress: number;
}

export const AnalyticsSection: React.FC<AnalyticsSectionProps> = ({ content, progress }) => (
  <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
    <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', mb: 4 }}>
      Workforce Analytics Dashboard
    </Typography>

    <Grid container spacing={3}>
      {/* Key Metrics */}
      {Object.entries(content.dashboardMetrics).map(([key, metric]: [string, any]) => (
        <Grid item xs={12} sm={6} md={3} key={key}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card
              sx={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                p: 3,
                borderRadius: 3,
                textAlign: 'center',
                height: '100%',
              }}
            >
              <Typography variant="h4" sx={{ color: '#4caf50', fontWeight: 800, mb: 1 }}>
                {typeof metric === 'object' ? metric.current || metric.score : String(metric)}
                {typeof metric === 'object' && metric.improvement && (
                  <Typography component="span" variant="body2" sx={{ color: '#4caf50', ml: 1 }}>
                    ↑{metric.improvement}
                  </Typography>
                )}
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </Typography>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>

    {/* Predictions */}
    <Card
      sx={{
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        p: 4,
        borderRadius: 3,
        mt: 3,
      }}
    >
      <Typography variant="h5" sx={{ color: 'white', mb: 3, textAlign: 'center' }}>
        AI Predictions for Sarah Chen
      </Typography>
      
      <Grid container spacing={3}>
        {Object.entries(content.predictions).map(([key, value]) => (
          <Grid item xs={12} sm={6} md={3} key={key}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5" sx={{ color: '#2196f3', fontWeight: 800, mb: 1 }}>
                {String(value)}
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Card>
  </Box>
);
