import React from 'react';
import { Box, Typography, Card, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';

interface ComparisonSectionProps {
  content: any;
  progress: number;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ content, progress }) => {
  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
      <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', mb: 4 }}>
        Traditional vs HireGenix
      </Typography>
      
      <Grid container spacing={4}>
        {/* Traditional Approach */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card
              sx={{
                background: 'rgba(255, 87, 87, 0.1)',
                border: '2px solid rgba(255, 87, 87, 0.3)',
                p: 3,
                borderRadius: 3,
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Header */}
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Typography variant="h2" sx={{ fontSize: '3rem', mb: 1 }}>
                  📊
                </Typography>
                <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>
                  Traditional Hiring
                </Typography>
                <Chip
                  label="Outdated"
                  size="small"
                  sx={{
                    mt: 1,
                    background: '#ff5757',
                    color: 'white',
                    fontWeight: 600,
                  }}
                />
              </Box>

              {/* Comparison Points */}
              <Box>
                {Object.entries(content.traditional).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 2,
                        p: 2,
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: 2,
                        border: '1px solid rgba(255, 87, 87, 0.2)',
                      }}
                    >
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontWeight: 500,
                          textTransform: 'capitalize'
                        }}
                      >
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: '#ff8a80',
                          fontWeight: 600,
                          textAlign: 'right',
                          maxWidth: '150px'
                        }}
                      >
                        {value as string}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>

              {/* Negative indicators */}
              <Box sx={{ mt: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {['Slow', 'Expensive', 'Limited Reach', 'Manual Process'].map((tag, index) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <Chip
                      label={tag}
                      size="small"
                      sx={{
                        background: 'rgba(255, 87, 87, 0.2)',
                        color: '#ff8a80',
                        border: '1px solid rgba(255, 87, 87, 0.3)',
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </Card>
          </motion.div>
        </Grid>

        {/* HireGenix Approach */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card
              sx={{
                background: 'rgba(76, 175, 80, 0.1)',
                border: '2px solid rgba(76, 175, 80, 0.3)',
                p: 3,
                borderRadius: 3,
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Animated background */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `
                    radial-gradient(circle at 20% 20%, rgba(76, 175, 80, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(129, 199, 132, 0.1) 0%, transparent 50%)
                  `,
                  animation: 'pulse 4s ease-in-out infinite',
                }}
              />

              {/* Header */}
              <Box sx={{ textAlign: 'center', mb: 3, position: 'relative', zIndex: 1 }}>
                <Typography variant="h2" sx={{ fontSize: '3rem', mb: 1 }}>
                  🚀
                </Typography>
                <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>
                  HireGenix Platform
                </Typography>
                <Chip
                  label="Next-Gen"
                  size="small"
                  sx={{
                    mt: 1,
                    background: '#4caf50',
                    color: 'white',
                    fontWeight: 600,
                  }}
                />
              </Box>

              {/* Comparison Points */}
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                {Object.entries(content.hiregenix).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.8, duration: 0.6 }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 2,
                        p: 2,
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: 2,
                        border: '1px solid rgba(76, 175, 80, 0.3)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.9)',
                          fontWeight: 500,
                          textTransform: 'capitalize'
                        }}
                      >
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: '#81c784',
                          fontWeight: 600,
                          textAlign: 'right',
                          maxWidth: '150px'
                        }}
                      >
                        {value as string}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>

              {/* Positive indicators */}
              <Box sx={{ mt: 3, display: 'flex', gap: 1, flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
                {['AI-Powered', 'Fast', 'Global', 'Automated'].map((tag, index) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                  >
                    <Chip
                      label={tag}
                      size="small"
                      sx={{
                        background: 'rgba(76, 175, 80, 0.3)',
                        color: '#81c784',
                        border: '1px solid rgba(76, 175, 80, 0.4)',
                        fontWeight: 600,
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      {/* VS Indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '4px solid white',
            boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
            zIndex: 10,
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              color: 'white', 
              fontWeight: 800,
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            VS
          </Typography>
        </Box>
      </motion.div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.02); }
        }
      `}</style>
    </Box>
  );
};
