import React from 'react';
import { Box, Typography, Card, LinearProgress, Chip, Grid } from '@mui/material';
import { motion } from 'framer-motion';

interface ProcessSectionProps {
  content: any;
  progress: number;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ content, progress }) => (
  <Box sx={{ maxWidth: 900, mx: 'auto' }}>
    <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', mb: 4 }}>
      {content.steps ? 'Processing Analysis' : content.aiSteps ? 'AI Analysis in Progress' : 'Live Assessment'}
    </Typography>

    {/* Regular Processing Steps */}
    {content.steps && (
      <Grid container spacing={2}>
        {content.steps.map((step: any, index: number) => (
          <Grid item xs={12} md={6} key={step.name}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card
                sx={{
                  background: step.status === 'complete' 
                    ? 'rgba(76, 175, 80, 0.2)' 
                    : 'rgba(255, 193, 7, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  p: 2,
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography variant="h6" sx={{ color: 'white' }}>
                    {step.name}
                  </Typography>
                  <Chip
                    label={step.status === 'complete' ? 'Complete' : 'Processing'}
                    size="small"
                    sx={{
                      background: step.status === 'complete' ? '#4caf50' : '#ff9800',
                      color: 'white',
                    }}
                  />
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={step.progress}
                  sx={{
                    mb: 1,
                    '& .MuiLinearProgress-bar': {
                      background: step.status === 'complete' ? '#4caf50' : '#ff9800',
                    },
                  }}
                />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Completed in {step.time}
                </Typography>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    )}

    {/* AI Processing Steps */}
    {content.aiSteps && (
      <Box>
        {content.aiSteps.map((step: any, index: number) => (
          <motion.div
            key={step.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.5, duration: 0.6 }}
          >
            <Card
              sx={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                p: 3,
                mb: 2,
                borderRadius: 3,
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ color: 'white' }}>
                  {step.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {step.progress}% Complete
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 2 }}>
                {step.description}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={step.progress}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  '& .MuiLinearProgress-bar': {
                    background: 'linear-gradient(90deg, #667eea, #764ba2)',
                    borderRadius: 4,
                  },
                }}
              />
            </Card>
          </motion.div>
        ))}
      </Box>
    )}

    {/* Live Assessment Progress */}
    {content.liveAssessment && (
      <Card
        sx={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          p: 3,
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" sx={{ color: 'white', mb: 3, textAlign: 'center' }}>
          Live Assessment: {content.liveAssessment.candidateName}
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>Progress</Typography>
            {content.liveAssessment.progress.map((item: any, index: number) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      width: 16,
                      height: 16,
                      borderRadius: '50%',
                      background: item.completed ? '#4caf50' : '#ff9800',
                      mr: 2,
                    }}
                  />
                  <Typography sx={{ color: 'white', flexGrow: 1 }}>
                    {item.step}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    {item.time}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>Real-time Metrics</Typography>
            {Object.entries(content.liveAssessment.metrics).map(([key, value]) => (
              <Box key={key} sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 1 }}>
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={value as number}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    '& .MuiLinearProgress-bar': {
                      background: 'linear-gradient(90deg, #667eea, #764ba2)',
                    },
                  }}
                />
                <Typography variant="body2" sx={{ color: 'white', textAlign: 'right' }}>
                  {value as number}%
                </Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Card>
    )}

    {/* Real-time Analysis for Interview */}
    {content.realTimeAnalysis && (
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              p: 3,
              borderRadius: 3,
              height: '100%',
            }}
          >
            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
              Detected Emotions
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
              {content.realTimeAnalysis.emotions.map((emotion: string, index: number) => (
                <motion.div
                  key={emotion}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <Chip
                    label={emotion}
                    sx={{
                      background: 'rgba(76, 175, 80, 0.3)',
                      color: 'white',
                      border: '1px solid rgba(76, 175, 80, 0.5)',
                    }}
                  />
                </motion.div>
              ))}
            </Box>

            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
              Communication Metrics
            </Typography>
            {Object.entries(content.realTimeAnalysis.communicationMetrics).map(([key, value]) => (
              <Box key={key} sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 1 }}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={value as number}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    '& .MuiLinearProgress-bar': {
                      background: 'linear-gradient(90deg, #4caf50, #8bc34a)',
                    },
                  }}
                />
                <Typography variant="body2" sx={{ color: 'white', textAlign: 'right' }}>
                  {value as number}%
                </Typography>
              </Box>
            ))}
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card
            sx={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              p: 3,
              borderRadius: 3,
              height: '100%',
            }}
          >
            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
              Behavioral Insights
            </Typography>
            {content.realTimeAnalysis.behavioralInsights.map((insight: string, index: number) => (
              <motion.div
                key={insight}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3, duration: 0.5 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: '#4caf50',
                      mr: 2,
                    }}
                  />
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    {insight}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Card>
        </Grid>
      </Grid>
    )}
  </Box>
);
