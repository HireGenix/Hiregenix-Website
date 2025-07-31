'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  alpha,
} from '@mui/material';
import {
  Visibility as VisionIcon,
  Flag as MissionIcon,
  EmojiObjects as InnovationIcon,
  Diversity1 as DiversityIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const AboutMission: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.background.default, 1)} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Mission & Vision */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ mb: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 50,
                      height: 50,
                      borderRadius: '12px',
                      background: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.main,
                      mr: 2,
                    }}
                  >
                    <MissionIcon fontSize="medium" />
                  </Box>
                  <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: '1.75rem', md: '2.25rem' }
                    }}
                  >
                    Our Mission
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, ml: 9 }}>
                  To transform the recruitment industry through cutting-edge AI technology, making hiring faster, more accurate, and more inclusive for companies of all sizes around the world.
                </Typography>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 50,
                      height: 50,
                      borderRadius: '12px',
                      background: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.main,
                      mr: 2,
                    }}
                  >
                    <VisionIcon fontSize="medium" />
                  </Box>
                  <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: '1.75rem', md: '2.25rem' }
                    }}
                  >
                    Our Vision
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, ml: 9 }}>
                  To create a world where every company can find the perfect candidate for every position, and every job seeker can find opportunities that match their skills and potential, regardless of background or demographics.
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Core Principles */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    fontSize: { xs: '1.75rem', md: '2.25rem' }
                  }}
                >
                  Our Core Principles
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    mb: 4,
                    fontSize: '1.1rem',
                    lineHeight: 1.7
                  }}
                >
                  These guiding principles shape everything we do at HireGenix, from product development to customer service.
                </Typography>
              </motion.div>
            </Box>

            <Grid container spacing={3}>
              {[
                {
                  title: 'Innovation First',
                  description: 'We constantly push the boundaries of what is possible in recruitment technology.',
                  icon: <InnovationIcon fontSize="medium" />,
                  color: theme.palette.primary.main,
                },
                {
                  title: 'Diversity & Inclusion',
                  description: 'We build technology that eliminates bias and creates opportunity for all.',
                  icon: <DiversityIcon fontSize="medium" />,
                  color: theme.palette.success.main,
                }
              ].map((principle, index) => (
                <Grid item xs={12} key={index}>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 4,
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                        border: `1px solid ${alpha(principle.color, 0.2)}`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                          transform: 'translateY(-5px)',
                          borderColor: alpha(principle.color, 0.5),
                        }
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 45,
                            height: 45,
                            borderRadius: '10px',
                            background: alpha(principle.color, 0.1),
                            color: principle.color,
                            mr: 2,
                            flexShrink: 0,
                          }}
                        >
                          {principle.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            component="h3"
                            sx={{ 
                              fontWeight: 700, 
                              mb: 1,
                            }}
                          >
                            {principle.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ lineHeight: 1.7 }}
                          >
                            {principle.description}
                          </Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutMission;
