import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Chip,
  Stack,
  Avatar,
  Paper,
  useTheme
} from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInLeftVariant, fadeInRightVariant, fadeInUpVariant, staggerContainer } from './constants';

const HeroSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: `linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%)`,
        color: '#FFFFFF',
        pt: { xs: 12, md: 0 },
        pb: { xs: 10, md: 0 }
      }}
    >
      {/* Geometric pattern overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage: 'url(/hero-pattern.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }}
      />

      {/* Animated gradient orbs */}
      <Box
        component={motion.div}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5 }}
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: { xs: 200, md: 400 },
          height: { xs: 200, md: 400 },
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}80 0%, rgba(0,0,0,0) 70%)`,
          filter: 'blur(80px)',
          zIndex: 1,
          animation: 'pulse 8s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { transform: 'scale(1)', opacity: 0.2 },
            '50%': { transform: 'scale(1.1)', opacity: 0.3 }
          }
        }}
      />

      <Box
        component={motion.div}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: { xs: 150, md: 300 },
          height: { xs: 150, md: 300 },
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.secondary.main}80 0%, rgba(0,0,0,0) 70%)`,
          filter: 'blur(80px)',
          zIndex: 1,
          animation: 'pulse2 10s ease-in-out infinite',
          '@keyframes pulse2': {
            '0%, 100%': { transform: 'scale(1)', opacity: 0.15 },
            '50%': { transform: 'scale(1.15)', opacity: 0.25 }
          }
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            component={motion.div}
            initial="hidden"
            animate="visible"
            variants={fadeInLeftVariant}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Chip
                label="AI-POWERED RECRUITMENT"
                sx={{
                  mb: 3,
                  py: 2,
                  px: 2,
                  borderRadius: '50px',
                  background: `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                  fontWeight: 800,
                  mb: 2,
                  background: `linear-gradient(90deg, #FFFFFF 0%, ${theme.palette.primary.light} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em'
                }}
              >
                AI-Powered Candidate Matching
              </Typography>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Typography
                variant="h2"
                component="p"
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  fontWeight: 400,
                  mb: 4,
                  color: 'rgba(255, 255, 255, 0.8)',
                  maxWidth: 550,
                  lineHeight: 1.6
                }}
              >
                Find the perfect candidates for your open positions with our advanced AI matching system that understands the true meaning behind skills and experience.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2}
                sx={{ mb: 6 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={Link}
                  href="/demo"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '1rem',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                    borderRadius: '50px',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    background: `linear-gradient(45deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                    '&:hover': {
                      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  Request Demo
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  component={Link}
                  href="/contact"
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '1rem',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: '#FFFFFF',
                    borderRadius: '50px',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: '#FFFFFF',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  Contact Sales
                </Button>
              </Stack>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <Grid container spacing={2} sx={{ mb: 4 }}>
                {[
                  { value: '96%', label: 'Match Accuracy' },
                  { value: '45%', label: 'Faster Hiring' },
                  { value: '3x', label: 'Better Retention' }
                ].map((stat, index) => (
                  <Grid item xs={4} key={index}>
                    <motion.div variants={fadeInUpVariant}>
                      <Box
                        sx={{
                          textAlign: 'center',
                          p: 2,
                          borderRadius: '16px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 800,
                            color: theme.palette.primary.main,
                            mb: 0.5,
                            fontSize: { xs: '1.75rem', md: '2.25rem' }
                          }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontWeight: 500
                          }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>

          {/* Right Content - AI Matching Dashboard */}
          <Grid
            item
            xs={12}
            md={6}
            component={motion.div}
            initial="hidden"
            animate="visible"
            variants={fadeInRightVariant}
          >
            <Box
              sx={{
                position: 'relative',
                height: { xs: 400, md: 550 },
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                perspective: '1200px'
              }}
            >
              {/* Main dashboard with 3D effect */}
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20, rotateY: -15, rotateX: 10 }}
                animate={{ opacity: 1, y: 0, rotateY: -8, rotateX: 5 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.5s ease',
                  '&:hover': {
                    transform: 'rotateY(-4deg) rotateX(2deg)'
                  }
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '16px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    zIndex: 2,
                    overflow: 'hidden',
                    position: 'relative',
                    background: '#1E1E1E'
                  }}
                >
                  {/* AI Matching Dashboard UI */}
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      position: 'relative'
                    }}
                  >
                    {/* Header */}
                    <Box
                      sx={{
                        p: 2,
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box
                          component={motion.div}
                          animate={{ 
                            rotate: [0, 5, 0, -5, 0],
                          }}
                          transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            repeatType: 'loop'
                          }}
                          sx={{
                            width: 36,
                            height: 36,
                            borderRadius: '8px',
                            background: 'rgba(255, 255, 255, 0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 2,
                            fontWeight: 700
                          }}
                        >
                          AI
                        </Box>
                        <Typography variant="h6" fontWeight={600}>
                          Candidate Matching
                        </Typography>
                      </Box>
                      <Chip 
                        label="Semantic AI" 
                        size="small"
                        sx={{ 
                          bgcolor: 'rgba(255, 255, 255, 0.2)',
                          color: '#FFFFFF',
                          fontWeight: 600
                        }} 
                      />
                    </Box>
                    
                    {/* Dashboard Content */}
                    <Box sx={{ p: 3 }}>
                      {/* Job Position */}
                      <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        sx={{ 
                          mb: 3,
                          p: 3,
                          borderRadius: 2,
                          background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)`,
                          border: '1px solid rgba(255, 255, 255, 0.05)',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <Box>
                          <Typography variant="h5" fontWeight={600} color="#FFFFFF" gutterBottom>
                            Senior Frontend Developer
                          </Typography>
                          <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
                            78 candidates analyzed • 12 matches found
                          </Typography>
                        </Box>
                        <Box
                          component={motion.div}
                          animate={{ 
                            scale: [1, 1.05, 1],
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatType: 'loop'
                          }}
                        >
                          <Chip 
                            label="12 Matches" 
                            color="primary"
                            sx={{ fontWeight: 600 }}
                          />
                        </Box>
                      </Box>
                      
                      {/* Match Criteria */}
                      <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        sx={{ 
                          display: 'grid', 
                          gridTemplateColumns: 'repeat(2, 1fr)', 
                          gap: 2, 
                          mb: 3 
                        }}
                      >
                        {[
                          { label: 'Skills Match', value: '96%', color: theme.palette.success.main },
                          { label: 'Experience', value: '92%', color: theme.palette.primary.main },
                          { label: 'Cultural Fit', value: '88%', color: theme.palette.secondary.main },
                          { label: 'Salary Match', value: '94%', color: theme.palette.info.main }
                        ].map((stat, idx) => (
                          <Paper
                            key={idx}
                            elevation={0}
                            sx={{
                              p: 2,
                              borderRadius: 2,
                              background: 'rgba(255, 255, 255, 0.03)',
                              border: '1px solid rgba(255, 255, 255, 0.05)',
                            }}
                          >
                            <Typography variant="body2" color="rgba(255, 255, 255, 0.6)">
                              {stat.label}
                            </Typography>
                            <Typography variant="h5" fontWeight={700} color={stat.color}>
                              {stat.value}
                            </Typography>
                          </Paper>
                        ))}
                      </Box>
                      
                      {/* Top Candidates */}
                      <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        sx={{ mb: 3 }}
                      >
                        <Typography variant="subtitle1" fontWeight={600} color="#FFFFFF" gutterBottom>
                          Top Candidates
                        </Typography>
                        
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                          {[
                            { name: 'Emily Johnson', position: 'Frontend Developer', match: 96 },
                            { name: 'Michael Chen', position: 'UI Developer', match: 92 },
                            { name: 'Sarah Williams', position: 'Full Stack Developer', match: 88 }
                          ].map((candidate, idx) => (
                            <Paper
                              key={idx}
                              elevation={0}
                              component={motion.div}
                              whileHover={{ x: 5, transition: { duration: 0.2 } }}
                              sx={{
                                p: 1.5,
                                borderRadius: 2,
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                              }}
                            >
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <Avatar 
                                  sx={{ 
                                    width: 36, 
                                    height: 36,
                                    background: idx === 0 ? theme.palette.primary.main : 
                                                idx === 1 ? theme.palette.secondary.main : 
                                                theme.palette.info.main
                                  }}
                                >
                                  {candidate.name.charAt(0)}
                                </Avatar>
                                <Box>
                                  <Typography variant="body2" fontWeight={600} color="#FFFFFF">
                                    {candidate.name}
                                  </Typography>
                                  <Typography variant="caption" color="rgba(255, 255, 255, 0.6)">
                                    {candidate.position}
                                  </Typography>
                                </Box>
                              </Box>
                              <Chip
                                size="small"
                                label={`${candidate.match}% Match`}
                                sx={{ 
                                  backgroundColor: 'rgba(46, 196, 182, 0.15)',
                                  color: '#2EC4B6',
                                  fontWeight: 600,
                                  height: 24
                                }}
                              />
                            </Paper>
                          ))}
                        </Box>
                      </Box>
                      
                      {/* AI Insights */}
                      <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                      >
                        <Paper
                          elevation={0}
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            background: `linear-gradient(135deg, rgba(${theme.palette.primary.main.replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(',')}, 0.2) 0%, rgba(${theme.palette.secondary.main.replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(',')}, 0.1) 100%)`,
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2
                          }}
                        >
                          <Box
                            component={motion.div}
                            animate={{ 
                              scale: [1, 1.1, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              repeatType: 'loop'
                            }}
                            sx={{
                              width: 40,
                              height: 40,
                              borderRadius: '50%',
                              background: 'rgba(255, 255, 255, 0.1)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Typography variant="body2" fontWeight={700} color="#FFFFFF">
                              AI
                            </Typography>
                          </Box>
                          <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="body2" color="#FFFFFF">
                              <strong>AI Insight:</strong> Emily Johnson has exceptional React skills and shows strong problem-solving abilities based on her GitHub contributions.
                            </Typography>
                          </Box>
                        </Paper>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                
                {/* Glow effect behind dashboard */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80%',
                    height: '80%',
                    borderRadius: '16px',
                    background: `radial-gradient(circle, ${theme.palette.primary.main}33 0%, rgba(0,0,0,0) 70%)`,
                    filter: 'blur(30px)',
                    zIndex: 1
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
