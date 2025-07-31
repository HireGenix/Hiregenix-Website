import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, LinearProgress, Grid, Chip, Avatar } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

interface InteractiveSectionProps {
  content: any;
  progress: number;
}

export const InteractiveSection: React.FC<InteractiveSectionProps> = ({ content, progress }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    if (content.onboardingSteps) {
      const interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev < content.onboardingSteps.length - 1) {
            return prev + 1;
          }
          return 0; // Loop back to start
        });
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [content.onboardingSteps]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 500);
    return () => clearTimeout(timer);
  }, [progress]);

  // Onboarding Steps Animation
  if (content.onboardingSteps) {
    return (
      <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
        <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', mb: 4 }}>
          Automated Onboarding Process
        </Typography>
        
        <Grid container spacing={3}>
          {content.onboardingSteps.map((step: any, index: number) => (
            <Grid item xs={12} md={6} key={step.step}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: currentStep >= index ? 1.05 : 1,
                  boxShadow: currentStep === index ? '0 0 30px rgba(79, 172, 254, 0.4)' : '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    background: currentStep >= index 
                      ? 'rgba(79, 172, 254, 0.1)' 
                      : 'rgba(255, 255, 255, 0.05)',
                    border: currentStep === index 
                      ? '2px solid rgba(79, 172, 254, 0.6)' 
                      : '1px solid rgba(255, 255, 255, 0.1)',
                    p: 3,
                    borderRadius: 3,
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Progress indicator */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      width: `${currentStep > index ? 100 : currentStep === index ? step.progress : 0}%`,
                      background: 'linear-gradient(90deg, rgba(79, 172, 254, 0.2), rgba(0, 242, 254, 0.2))',
                      transition: 'width 1s ease-in-out',
                    }}
                  />

                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h2" sx={{ fontSize: '2rem', mr: 2 }}>
                        {step.icon}
                      </Typography>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                          {step.step}
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={currentStep > index ? 100 : currentStep === index ? step.progress : 0}
                          sx={{
                            mt: 1,
                            height: 6,
                            borderRadius: 3,
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            '& .MuiLinearProgress-bar': {
                              background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
                            },
                          }}
                        />
                      </Box>
                    </Box>
                    
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '0.9rem',
                        lineHeight: 1.5
                      }}
                    >
                      {step.description}
                    </Typography>

                    {currentStep >= index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Chip
                          label={currentStep > index ? 'Completed' : 'In Progress'}
                          size="small"
                          sx={{
                            mt: 2,
                            background: currentStep > index ? '#4caf50' : '#ff9800',
                            color: 'white',
                            fontWeight: 600,
                          }}
                        />
                      </motion.div>
                    )}
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  // World Map Interactive
  if (content.worldMap) {
    return (
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', mb: 4 }}>
          Global Talent Network
        </Typography>
        
        <Grid container spacing={3}>
          {content.worldMap.regions.map((region: any, index: number) => (
            <Grid item xs={12} md={6} lg={3} key={region.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card
                  sx={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    p: 3,
                    borderRadius: 3,
                    textAlign: 'center',
                    height: '100%',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Typography variant="h6" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>
                    {region.name}
                  </Typography>
                  
                  <Typography variant="h4" sx={{ color: '#fa709a', fontWeight: 800, mb: 1 }}>
                    {region.candidates.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2 }}>
                    Available Candidates
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 1 }}>
                      Top Skills:
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', justifyContent: 'center' }}>
                      {region.topSkills.map((skill: string) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{
                            background: 'rgba(254, 225, 64, 0.2)',
                            color: '#fee140',
                            border: '1px solid rgba(254, 225, 64, 0.3)',
                            fontSize: '0.75rem',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                    Timezone: {region.timezone}
                  </Typography>

                  {content.worldMap.realTimeUpdates && (
                    <motion.div
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Box
                        sx={{
                          mt: 2,
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          background: '#4caf50',
                          mx: 'auto',
                        }}
                      />
                      <Typography variant="caption" sx={{ color: '#4caf50', display: 'block', mt: 0.5 }}>
                        Live Updates
                      </Typography>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  // Timeline Interactive
  if (content.timeline) {
    return (
      <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
        <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', mb: 4 }}>
          Future Roadmap
        </Typography>
        
        <Box sx={{ position: 'relative' }}>
          {/* Timeline line */}
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(180deg, #667eea, #764ba2)',
              transform: 'translateX(-50%)',
              zIndex: 0,
            }}
          />

          {Object.entries(content.timeline).map(([year, features]: [string, any], index: number) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.5, duration: 0.8 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                  mb: 4,
                  position: 'relative',
                }}
              >
                <Card
                  sx={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    p: 3,
                    borderRadius: 3,
                    maxWidth: '400px',
                    width: '100%',
                    mr: index % 2 === 0 ? 4 : 0,
                    ml: index % 2 === 1 ? 4 : 0,
                  }}
                >
                  <Typography variant="h5" sx={{ color: '#fa709a', fontWeight: 800, mb: 2 }}>
                    {year}
                  </Typography>
                  
                  {features.map((feature: string, featureIndex: number) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.5 + featureIndex * 0.2 + 0.5 }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: '#fee140',
                            mr: 2,
                          }}
                        />
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                          {feature}
                        </Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Card>

                {/* Timeline node */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    top: '20px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    border: '3px solid white',
                    transform: 'translateX(-50%)',
                    zIndex: 1,
                  }}
                />
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    );
  }

  return null;
};
