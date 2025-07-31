import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, Grid, Chip, LinearProgress, Avatar } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

interface ShowcaseSectionProps {
  content: any;
  progress: number;
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ content, progress }) => {
  const [animatedNumbers, setAnimatedNumbers] = useState<{ [key: string]: number }>({});

  // Animate numbers counting up
  useEffect(() => {
    if (content.metrics || content.liveDemo) {
      const targetValues = content.metrics || content.liveDemo;
      
      Object.entries(targetValues).forEach(([key, value]) => {
        if (typeof value === 'number' || (typeof value === 'string' && value.includes('%'))) {
          const numericValue = typeof value === 'number' ? value : parseInt(value);
          let currentValue = 0;
          const increment = numericValue / 50; // 50 steps to reach target
          
          const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= numericValue) {
              currentValue = numericValue;
              clearInterval(timer);
            }
            setAnimatedNumbers(prev => ({ ...prev, [key]: Math.round(currentValue) }));
          }, 50);
        }
      });
    }
  }, [content]);

  // Onboarding Metrics Showcase
  if (content.metrics && content.testimonial) {
    return (
      <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
        <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', mb: 4 }}>
          Onboarding Success Metrics
        </Typography>
        
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {Object.entries(content.metrics).map(([key, value], index) => (
            <Grid item xs={12} sm={6} md={3} key={key}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
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
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      color: '#4facfe', 
                      fontWeight: 800, 
                      mb: 1,
                      fontSize: { xs: '1.8rem', md: '2.2rem' }
                    }}
                  >
                    {value as string}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      textTransform: 'capitalize',
                      fontWeight: 500
                    }}
                  >
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Card
            sx={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              p: 4,
              borderRadius: 3,
              textAlign: 'center',
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'white', 
                fontStyle: 'italic', 
                mb: 3,
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.6
              }}
            >
              &quot;{content.testimonial.text}&quot;
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
              <Avatar sx={{ fontSize: '2rem', width: 50, height: 50 }}>
                {content.testimonial.avatar}
              </Avatar>
              <Box sx={{ textAlign: 'left' }}>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                  {content.testimonial.author}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {content.testimonial.role}
                </Typography>
              </Box>
            </Box>
          </Card>
        </motion.div>
      </Box>
    );
  }

  // Live Demo Stats
  if (content.liveDemo) {
    return (
      <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
        <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', mb: 4 }}>
          Live Platform Statistics
        </Typography>
        
        <Grid container spacing={3}>
          {Object.entries(content.liveDemo).filter(([key]) => key !== 'realTimeMatching').map(([key, value], index) => {
            const displayValue = animatedNumbers[key] !== undefined ? animatedNumbers[key] : value;
            
            return (
              <Grid item xs={12} sm={6} md={4} key={key}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <Card
                    sx={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      p: 3,
                      borderRadius: 3,
                      textAlign: 'center',
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Animated background pulse */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(45deg, rgba(250, 112, 154, 0.1), rgba(254, 225, 64, 0.1))',
                        animation: 'shimmer 3s ease-in-out infinite',
                      }}
                    />

                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                      <Typography 
                        variant="h3" 
                        sx={{ 
                          color: '#fa709a', 
                          fontWeight: 800, 
                          mb: 1,
                          fontSize: { xs: '2rem', md: '2.5rem' }
                        }}
                      >
                        {typeof displayValue === 'number' ? displayValue.toLocaleString() : (displayValue as string)}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.8)',
                          textTransform: 'capitalize',
                          fontWeight: 500
                        }}
                      >
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </Typography>

                      {/* Live indicator */}
                      {content.liveDemo.realTimeMatching && (
                        <motion.div
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Chip
                            label="LIVE"
                            size="small"
                            sx={{
                              mt: 2,
                              background: '#ff4444',
                              color: 'white',
                              fontWeight: 600,
                              fontSize: '0.7rem',
                            }}
                          />
                        </motion.div>
                      )}
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>

        {/* Real-time matching indicator */}
        {content.liveDemo.realTimeMatching && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#4caf50', 
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1
                  }}
                >
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      background: '#4caf50',
                      animation: 'pulse 1.5s ease-in-out infinite',
                    }}
                  />
                  Real-time AI Matching Active
                </Typography>
              </motion.div>
            </Box>
          </motion.div>
        )}
      </Box>
    );
  }

  // Future Technologies Showcase
  if (content.futureTechnologies) {
    return (
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', mb: 4 }}>
          Emerging Technologies
        </Typography>
        
        <Grid container spacing={3}>
          {content.futureTechnologies.map((tech: any, index: number) => (
            <Grid item xs={12} md={6} key={tech.name}>
              <motion.div
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ delay: index * 0.3, duration: 0.8 }}
              >
                <Card
                  sx={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    p: 3,
                    borderRadius: 3,
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Status-based background */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: tech.status === 'beta' ? '#4caf50' : 
                                  tech.status === 'development' ? '#ff9800' : 
                                  tech.status === 'pilot' ? '#2196f3' : '#9c27b0',
                    }}
                  />

                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                        {tech.name}
                      </Typography>
                      <Chip
                        label={tech.status.toUpperCase()}
                        size="small"
                        sx={{
                          background: tech.status === 'beta' ? '#4caf50' : 
                                      tech.status === 'development' ? '#ff9800' : 
                                      tech.status === 'pilot' ? '#2196f3' : '#9c27b0',
                          color: 'white',
                          fontWeight: 600,
                        }}
                      />
                    </Box>
                    
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.8)', 
                        mb: 3,
                        lineHeight: 1.6
                      }}
                    >
                      {tech.description}
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 1 }}>
                      Expected Impact:
                    </Typography>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#4caf50', 
                        fontWeight: 600,
                        fontSize: '1.1rem'
                      }}
                    >
                      {tech.impact}
                    </Typography>
                  </Box>

                  {/* Visual representation */}
                  <Box sx={{ textAlign: 'center', mt: 3 }}>
                    <motion.div
                      animate={{ 
                        rotate: tech.visual === 'quantum' ? [0, 360] : 0,
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: tech.visual === 'quantum' ? 10 : 3, 
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                    >
                      <Typography variant="h1" sx={{ fontSize: '3rem' }}>
                        {tech.visual === 'neuralNetwork' ? '🧠' :
                         tech.visual === 'vrHeadset' ? '🥽' :
                         tech.visual === 'blockchain' ? '⛓️' :
                         tech.visual === 'quantum' ? '⚛️' : '🔮'}
                      </Typography>
                    </motion.div>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  // Future Impact Results
  if (content.futureImpact) {
    return (
      <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
        <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', mb: 4 }}>
          Future Impact Projections
        </Typography>
        
        <Grid container spacing={3}>
          {Object.entries(content.futureImpact).map(([key, value], index) => (
            <Grid item xs={12} sm={6} md={4} key={key}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <Card
                  sx={{
                    background: `linear-gradient(135deg, 
                      rgba(255, 154, 158, 0.1) 0%, 
                      rgba(254, 207, 239, 0.1) 100%)`,
                    border: '1px solid rgba(255, 154, 158, 0.3)',
                    p: 3,
                    borderRadius: 3,
                    textAlign: 'center',
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
                        radial-gradient(circle at 30% 30%, rgba(255, 154, 158, 0.2) 0%, transparent 50%),
                        radial-gradient(circle at 70% 70%, rgba(254, 207, 239, 0.2) 0%, transparent 50%)
                      `,
                      animation: 'float 4s ease-in-out infinite',
                    }}
                  />

                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        color: '#ff9a9e', 
                        fontWeight: 800, 
                        mb: 2,
                        fontSize: { xs: '1.8rem', md: '2.2rem' }
                      }}
                    >
                      {value as string}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.9)',
                        textTransform: 'capitalize',
                        fontWeight: 500,
                        lineHeight: 1.4
                      }}
                    >
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </Typography>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  return null;
};
