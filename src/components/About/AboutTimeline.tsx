'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  alpha,
  Paper,
  Button,
} from '@mui/material';
import {
  BusinessCenter as BusinessCenterIcon,
  Lightbulb as LightbulbIcon,
  Code as CodeIcon,
  Rocket as RocketIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Timeline data
const timelineEvents = [
  {
    date: 'October 2024',
    title: 'Incorporation',
    description: 'HireGenix is officially incorporated in India and USA as Trayarunya Ventures Private Limited and Trayarunya Ventures LLC respectively.',
    icon: <BusinessCenterIcon fontSize="large" />,
    color: '#2196f3', // primary
    detailPoints: [
      'Established legal entities in two countries',
      'Secured initial seed funding',
      'Assembled founding team of experts'
    ]
  },
  {
    date: 'November 2024',
    title: 'Ideation Phase',
    description: 'Our team of experts begins the ideation phase, developing the core concepts and technology that would power our AI recruitment platform.',
    icon: <LightbulbIcon fontSize="large" />,
    color: '#4caf50', // success
    detailPoints: [
      'Conducted market research and competitor analysis',
      'Defined core product features and roadmap',
      'Established technology stack and architecture'
    ]
  },
  {
    date: 'January 2025',
    title: 'Beta Launch (v0.1)',
    description: 'HireGenix launches its first beta version (v0.1) to a select group of early adopters, gathering valuable feedback for further improvements.',
    icon: <CodeIcon fontSize="large" />,
    color: '#ff9800', // warning
    detailPoints: [
      'Released to 50 early adopter companies',
      'Implemented core AI matching algorithms',
      'Established feedback collection systems'
    ]
  },
  {
    date: 'April 2025',
    title: 'Official Launch (v1.0)',
    description: 'The most advanced version of HireGenix (v1.0) is officially launched, featuring cutting-edge AI technology for recruitment and hiring.',
    icon: <RocketIcon fontSize="large" />,
    color: '#f44336', // error
    detailPoints: [
      'Full feature set including video interviews',
      'Advanced AI candidate matching',
      'Comprehensive analytics dashboard'
    ]
  },
];

const AboutTimeline: React.FC = () => {
  const theme = useTheme();
  const [activeEvent, setActiveEvent] = React.useState<number | null>(null);

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(180deg, ${alpha(theme.palette.primary.main, 0.03)} 0%, ${alpha(theme.palette.background.default, 1)} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '5%',
          left: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.primary.main, 0)} 70%)`,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0)} 70%)`,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="overline"
              component="p"
              sx={{ 
                mb: 1, 
                fontWeight: 600, 
                letterSpacing: 1.5,
                color: theme.palette.primary.main
              }}
            >
              OUR JOURNEY
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '2rem', md: '2.75rem' }
              }}
            >
              Company Timeline
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography
              variant="h5"
              component="p"
              color="text.secondary"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                fontWeight: 400
              }}
            >
              From incorporation to launch, follow our journey of innovation
            </Typography>
          </motion.div>
        </Box>

        {/* Interactive Horizontal Timeline */}
        <Box sx={{ position: 'relative', mb: 8 }}>
          {/* Timeline track */}
          <Box
            sx={{
              position: 'relative',
              height: 4,
              backgroundColor: alpha(theme.palette.primary.main, 0.1),
              borderRadius: 2,
              my: 6,
              mx: { xs: 4, md: 8 },
            }}
          >
            {/* Timeline progress */}
            <Box
              component={motion.div}
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: 2,
              }}
            />

            {/* Timeline dots */}
            {timelineEvents.map((event, index) => {
              const position = `${(index / (timelineEvents.length - 1)) * 100}%`;
              return (
                <Box
                  key={index}
                  component={motion.div}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: 0.7 + index * 0.1 
                  }}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: position,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                  }}
                >
                  <Box
                    onClick={() => setActiveEvent(activeEvent === index ? null : index)}
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      backgroundColor: event.color,
                      border: `4px solid ${theme.palette.background.paper}`,
                      boxShadow: `0 0 0 4px ${alpha(event.color, 0.3)}`,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                      ...(activeEvent === index && {
                        transform: 'scale(1.3)',
                      }),
                    }}
                  />
                  
                  {/* Date label */}
                  <Typography
                    variant="subtitle2"
                    sx={{
                      position: 'absolute',
                      top: index % 2 === 0 ? -40 : 30,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      whiteSpace: 'nowrap',
                      fontWeight: 600,
                      color: event.color,
                    }}
                  >
                    {event.date}
                  </Typography>
                </Box>
              );
            })}
          </Box>

          {/* Active event details */}
          <Box sx={{ mt: 8 }}>
            {activeEvent !== null ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                    border: `1px solid ${alpha(timelineEvents[activeEvent].color, 0.2)}`,
                    background: `linear-gradient(135deg, ${alpha(timelineEvents[activeEvent].color, 0.05)} 0%, ${alpha(theme.palette.background.default, 1)} 100%)`,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: alpha(timelineEvents[activeEvent].color, 0.1),
                        color: timelineEvents[activeEvent].color,
                        mr: 3,
                        flexShrink: 0,
                      }}
                    >
                      {timelineEvents[activeEvent].icon}
                    </Box>
                    <Box>
                      <Typography variant="h4" component="h3" fontWeight={700} sx={{ mb: 1 }}>
                        {timelineEvents[activeEvent].title}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
                        {timelineEvents[activeEvent].date}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                        {timelineEvents[activeEvent].description}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ pl: { xs: 0, sm: 10 } }}>
                    <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
                      Key Milestones:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                      {timelineEvents[activeEvent].detailPoints.map((point, idx) => (
                        <Box 
                          component="li" 
                          key={idx} 
                          sx={{ 
                            mb: 1,
                            color: 'text.secondary',
                          }}
                        >
                          <Typography variant="body1">
                            {point}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    
                    <Button
                      variant="outlined"
                      color="primary"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        borderRadius: 50,
                        borderColor: timelineEvents[activeEvent].color,
                        color: timelineEvents[activeEvent].color,
                        '&:hover': {
                          borderColor: timelineEvents[activeEvent].color,
                          backgroundColor: alpha(timelineEvents[activeEvent].color, 0.05),
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Paper>
              </motion.div>
            ) : (
              <Box 
                sx={{ 
                  textAlign: 'center', 
                  py: 4,
                  color: 'text.secondary',
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
                  Click on a timeline point to view details
                </Typography>
                <Typography variant="body2">
                  Explore our journey from incorporation to launch
                </Typography>
              </Box>
            )}
          </Box>
        </Box>

        {/* Timeline cards (simplified view for mobile) */}
        <Box 
          sx={{ 
            display: { xs: 'block', md: 'none' },
            mt: 6,
          }}
        >
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  mb: 3,
                  borderRadius: 3,
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
                  border: `1px solid ${alpha(event.color, 0.2)}`,
                  borderLeft: `4px solid ${event.color}`,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: alpha(event.color, 0.1),
                      color: event.color,
                      mr: 2,
                    }}
                  >
                    {React.cloneElement(event.icon, { fontSize: 'small' })}
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {event.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {event.date}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {event.description}
                </Typography>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default AboutTimeline;
