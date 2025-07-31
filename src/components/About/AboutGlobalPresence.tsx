'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  alpha,
  Paper,
  Grid,
  Card,
  CardContent,
  Divider,
  Stack,
  Chip,
} from '@mui/material';
import {
  LocationOn as LocationOnIcon,
  Language as LanguageIcon,
  Business as BusinessIcon,
  Code as CodeIcon,
  People as PeopleIcon,
  Public as PublicIcon,
  ArrowRightAlt as ArrowRightAltIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Office locations data
const officeLocations = [
  {
    city: 'Laramie',
    state: 'Wyoming',
    country: 'United States',
    color: '#2196f3', // primary
    description: 'US Headquarters',
    employees: '3+',
    founded: 'October 2024',
    specialties: ['Executive Leadership', 'Sales', 'Marketing'],
    icon: <BusinessIcon fontSize="large" />,
  },
  {
    city: 'Noida',
    state: 'Uttar Pradesh',
    country: 'India',
    color: '#f44336', // error
    description: 'India Development Center',
    employees: '8+',
    founded: 'October 2024',
    specialties: ['Engineering', 'Product Development', 'AI Research'],
    icon: <CodeIcon fontSize="large" />,
  },
];

const AboutGlobalPresence: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.background.default, 1)} 100%)`,
      }}
    >
      <Container maxWidth="lg">
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
              GLOBAL PRESENCE
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
              Our Global Footprint
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
              With strategic locations in the United States and India, we serve clients globally with 24/7 support and development
            </Typography>
          </motion.div>
        </Box>

        {/* Global Stats */}
        <Box sx={{ mb: 8 }}>
          <Grid container spacing={3} justifyContent="center">
            {[
              { 
                icon: <PublicIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                value: '2',
                label: 'Countries',
              },
              { 
                icon: <BusinessIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                value: '2',
                label: 'Office Locations',
              },
              { 
                icon: <PeopleIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                value: '11+',
                label: 'Team Members',
              },
              { 
                icon: <LanguageIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
                value: '24/7',
                label: 'Global Support',
              },
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      borderRadius: 4,
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                      }
                    }}
                  >
                    <Box sx={{ mb: 2 }}>{stat.icon}</Box>
                    <Typography 
                      variant="h3" 
                      component="p" 
                      sx={{ 
                        fontWeight: 800, 
                        mb: 1,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Office Locations */}
        <Grid container spacing={4}>
          {officeLocations.map((location, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 * index }}
              >
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: 4,
                    overflow: 'hidden',
                    height: '100%',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                    }
                  }}
                >
                  <Box
                    sx={{
                      height: 8,
                      width: '100%',
                      backgroundColor: location.color,
                    }}
                  />
                  <CardContent sx={{ p: 4 }}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={4}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: 120,
                            borderRadius: 2,
                            backgroundColor: alpha(location.color, 0.1),
                            color: location.color,
                            mb: { xs: 2, sm: 0 },
                          }}
                        >
                          {location.icon}
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={8}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <LocationOnIcon sx={{ color: location.color, mr: 1 }} />
                          <Typography variant="h5" component="h3" fontWeight={700}>
                            {location.city}
                          </Typography>
                        </Box>
                        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
                          {location.state}, {location.country}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            mb: 2,
                            fontWeight: 500,
                            color: location.color,
                          }}
                        >
                          {location.description}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <Typography variant="caption" color="text.secondary">
                              FOUNDED
                            </Typography>
                            <Typography variant="body2" fontWeight={500}>
                              {location.founded}
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant="caption" color="text.secondary">
                              TEAM SIZE
                            </Typography>
                            <Typography variant="body2" fontWeight={500}>
                              {location.employees} employees
                            </Typography>
                          </Grid>
                        </Grid>
                        <Box sx={{ mt: 2 }}>
                          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                            SPECIALTIES
                          </Typography>
                          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                            {location.specialties.map((specialty, idx) => (
                              <Chip 
                                key={idx} 
                                label={specialty} 
                                size="small" 
                                sx={{ 
                                  mb: 1,
                                  backgroundColor: alpha(location.color, 0.1),
                                  color: location.color,
                                  fontWeight: 500,
                                }} 
                              />
                            ))}
                          </Stack>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Global Connection */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 4,
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  opacity: 0.05,
                  backgroundImage: `radial-gradient(circle, ${theme.palette.text.primary} 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                }}
              />
              
              <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Typography variant="h4" component="h3" fontWeight={700} sx={{ mb: 2 }}>
                  24/7 Global Operations
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 800, mx: 'auto' }}>
                  Our strategic presence in both the United States and India allows us to provide round-the-clock service and development. 
                  When one team signs off, another picks up, ensuring continuous progress on your projects.
                </Typography>
                
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    my: 4,
                  }}
                >
                  <Box 
                    sx={{ 
                      textAlign: 'center', 
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: alpha('#2196f3', 0.1),
                        color: '#2196f3',
                        mb: 1,
                      }}
                    >
                      <BusinessIcon fontSize="large" />
                    </Box>
                    <Typography variant="subtitle1" fontWeight={600}>
                      Laramie, Wyoming, USA
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      9:00 AM - 5:00 PM (MST)
                    </Typography>
                  </Box>
                  
                  <Box 
                    component={motion.div}
                    initial={{ width: 0 }}
                    whileInView={{ width: '150px' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    sx={{ 
                      mx: 2,
                      height: 4,
                      background: `linear-gradient(to right, #2196f3, #f44336)`,
                      borderRadius: 2,
                      position: 'relative',
                      display: { xs: 'none', md: 'block' }
                    }}
                  >
                    <ArrowRightAltIcon 
                      sx={{ 
                        position: 'absolute', 
                        top: '50%', 
                        right: -10, 
                        transform: 'translateY(-50%)',
                        color: '#f44336'
                      }} 
                    />
                  </Box>
                  
                  <Box 
                    sx={{ 
                      display: { xs: 'none', md: 'block' },
                      mx: 2,
                      fontWeight: 700,
                      color: theme.palette.text.secondary
                    }}
                  >
                    +
                  </Box>
                  
                  <Box 
                    sx={{ 
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: alpha('#f44336', 0.1),
                        color: '#f44336',
                        mb: 1,
                      }}
                    >
                      <CodeIcon fontSize="large" />
                    </Box>
                    <Typography variant="subtitle1" fontWeight={600}>
                      Noida, India
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      10:30 AM - 7:30 PM (IST), Mon to Fri
                    </Typography>
                  </Box>
                </Box>
                
                <Typography variant="h6" component="p" sx={{ fontWeight: 600, mt: 2 }}>
                  = 24/7 Continuous Development & Support
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutGlobalPresence;
