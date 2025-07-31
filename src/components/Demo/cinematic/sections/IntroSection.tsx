import React from 'react';
import { Box, Typography, Card, Chip, Grid } from '@mui/material';
import { motion } from 'framer-motion';

interface IntroSectionProps {
  content: any;
  progress: number;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ content, progress }) => (
  <Grid container spacing={4} alignItems="center">
    <Grid item xs={12} md={6}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" sx={{ color: 'white', fontWeight: 800, mb: 2 }}>
          {content.title}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
          {content.features.map((feature: string, index: number) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
            >
              <Chip
                label={feature}
                sx={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              />
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Grid>
    <Grid item xs={12} md={6}>
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        {Object.entries(content.stats).map(([key, value], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3 + 1, duration: 0.6 }}
          >
            <Card
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                textAlign: 'center',
                p: 3,
                minWidth: 120,
              }}
            >
              <Typography variant="h4" sx={{ color: 'white', fontWeight: 800 }}>
                {value as string}
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', textTransform: 'capitalize' }}>
                {key}
              </Typography>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Grid>
  </Grid>
);
