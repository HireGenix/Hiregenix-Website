"use client";

import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  useTheme, 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Rating
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import {
  Check as CheckIcon,
  Close as CloseIcon,
  Remove as RemoveIcon,
  Star as StarIcon
} from '@mui/icons-material';

const SectionTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(6),
  paddingBottom: theme.spacing(2),
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 80,
    height: 4,
    backgroundColor: theme.palette.primary.main,
  },
}));

const CompetitiveCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  borderRadius: theme.shape.borderRadius * 2,
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  padding: theme.spacing(2),
}));

const StyledTableHeadCell = styled(TableCell)(({ theme }) => ({
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  padding: theme.spacing(2),
  fontWeight: 700,
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
}));

const CompetitorLogo = styled(Box)(({ theme }) => ({
  width: 120,
  height: 40,
  borderRadius: theme.shape.borderRadius,
  background: 'rgba(255, 255, 255, 0.05)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(1),
}));

const AdvantageChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: 'rgba(76, 175, 80, 0.1)',
  borderColor: theme.palette.success.main,
  '& .MuiChip-label': {
    color: theme.palette.success.main,
  }
}));

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const InvestorRelationsCompetitive: React.FC = () => {
  const theme = useTheme();

  // Competitive landscape data
  const competitiveFeatures = [
    {
      feature: "AI-Powered Candidate Matching",
      hiregenix: true,
      traditional: false,
      competitor1: true,
      competitor2: false,
      description: "Semantic understanding of skills and requirements beyond keyword matching"
    },
    {
      feature: "Video Interview Analysis",
      hiregenix: true,
      traditional: false,
      competitor1: false,
      competitor2: false,
      description: "AI analysis of candidate engagement, confidence, and communication clarity"
    },
    {
      feature: "Adaptive Skills Assessment",
      hiregenix: true,
      traditional: false,
      competitor1: true,
      competitor2: true,
      description: "Dynamic testing that adjusts difficulty based on candidate responses"
    },
    {
      feature: "Bias Reduction Algorithms",
      hiregenix: true,
      traditional: false,
      competitor1: false,
      competitor2: true,
      description: "AI systems designed to identify and reduce unconscious bias in hiring"
    },
    {
      feature: "Integrated Platform",
      hiregenix: true,
      traditional: false,
      competitor1: false,
      competitor2: false,
      description: "Single platform for sourcing, screening, interviewing, and assessment"
    },
    {
      feature: "Predictive Performance Metrics",
      hiregenix: true,
      traditional: false,
      competitor1: false,
      competitor2: false,
      description: "AI-generated predictions of candidate success based on multiple factors"
    },
    {
      feature: "Automated Workflow",
      hiregenix: true,
      traditional: true,
      competitor1: true,
      competitor2: true,
      description: "Automated scheduling, notifications, and candidate communications"
    }
  ];

  // Competitive advantages
  const competitiveAdvantages = [
    {
      title: "Comprehensive AI Integration",
      description: "While competitors offer isolated AI features, HireGenix integrates AI throughout the entire recruitment process, from sourcing to onboarding.",
      icon: <StarIcon sx={{ fontSize: 30, color: 'white' }} />,
      color: theme.palette.primary.main
    },
    {
      title: "Superior Candidate Experience",
      description: "Our platform creates a seamless, engaging experience for candidates with faster feedback, personalized interactions, and transparent processes.",
      icon: <StarIcon sx={{ fontSize: 30, color: 'white' }} />,
      color: theme.palette.secondary.main
    },
    {
      title: "Unique Video Analysis",
      description: "HireGenix is the only platform offering AI-powered video interview analysis that provides insights into candidate soft skills and communication style.",
      icon: <StarIcon sx={{ fontSize: 30, color: 'white' }} />,
      color: theme.palette.info.main
    },
    {
      title: "Data-Driven Hiring Decisions",
      description: "Our platform provides comprehensive analytics and insights that help companies make better hiring decisions and continuously improve their recruitment process.",
      icon: <StarIcon sx={{ fontSize: 30, color: 'white' }} />,
      color: theme.palette.warning.main
    }
  ];

  // Market positioning data
  const marketPositioning = [
    {
      category: "Price Point",
      hiregenix: "Mid-tier",
      traditional: "Low-tier",
      competitor1: "High-tier",
      competitor2: "Mid-tier",
    },
    {
      category: "Target Market",
      hiregenix: "SMBs to Enterprise",
      traditional: "All segments",
      competitor1: "Enterprise-focused",
      competitor2: "SMBs",
    },
    {
      category: "Implementation Time",
      hiregenix: "1-2 weeks",
      traditional: "1-4 weeks",
      competitor1: "4-8 weeks",
      competitor2: "2-4 weeks",
    },
    {
      category: "AI Sophistication",
      hiregenix: 5,
      traditional: 1,
      competitor1: 3,
      competitor2: 4,
      isRating: true
    },
    {
      category: "User Experience",
      hiregenix: 5,
      traditional: 2,
      competitor1: 4,
      competitor2: 3,
      isRating: true
    },
    {
      category: "Integration Capabilities",
      hiregenix: 4,
      traditional: 3,
      competitor1: 5,
      competitor2: 3,
      isRating: true
    }
  ];

  return (
    <Box 
      component="section" 
      sx={{ 
        py: 10,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 100%)',
        borderRadius: 4
      }}
      id="competitive-landscape"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <SectionTitle variant="h3">
          Competitive Landscape
        </SectionTitle>
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <Typography 
          variant="h5" 
          sx={{ 
            mb: 4, 
            fontWeight: 500,
            maxWidth: 900,
            lineHeight: 1.5
          }}
        >
          HireGenix stands out in the recruitment technology market with our comprehensive AI-powered approach and unique feature set.
        </Typography>
      </motion.div>
      
      {/* Feature Comparison Table - Enhanced Interactive Version */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
          Feature Comparison
        </Typography>
        
        <Paper 
          sx={{ 
            p: 4, 
            borderRadius: 3,
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            mb: 4,
            position: 'relative',
            overflow: 'hidden'
          }}
          elevation={0}
        >
          {/* Animated background gradient */}
          <Box
            component={motion.div}
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.05,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}40 0%, ${theme.palette.success.main}40 50%, ${theme.palette.secondary.main}40 100%)`,
              backgroundSize: '400% 400%',
              zIndex: 0
            }}
          />
          
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            {/* Company headers with logos */}
            <Grid container spacing={2} sx={{ mb: 4 }}>
              <Grid item xs={5}>
                <Typography variant="subtitle1" fontWeight={600}>
                  Feature
                </Typography>
              </Grid>
              
              {/* HireGenix */}
              <Grid item xs={7/4}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Box 
                    sx={{ 
                      p: 2, 
                      borderRadius: 2, 
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                      border: `1px solid ${theme.palette.primary.main}40`,
                      textAlign: 'center',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      boxShadow: `0 5px 15px ${theme.palette.primary.main}20`
                    }}
                  >
                    <Typography 
                      variant="subtitle1" 
                      fontWeight={700} 
                      color={theme.palette.primary.main}
                      sx={{ mb: 1 }}
                    >
                      HireGenix
                    </Typography>
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
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        bgcolor: theme.palette.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '0.75rem'
                      }}
                    >
                      H
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
              
              {/* Traditional ATS */}
              <Grid item xs={7/4}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Box 
                    sx={{ 
                      p: 2, 
                      borderRadius: 2, 
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      textAlign: 'center',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Typography 
                      variant="subtitle1" 
                      fontWeight={600} 
                      sx={{ mb: 1 }}
                    >
                      Traditional ATS
                    </Typography>
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '0.75rem'
                      }}
                    >
                      T
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
              
              {/* Competitor A */}
              <Grid item xs={7/4}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Box 
                    sx={{ 
                      p: 2, 
                      borderRadius: 2, 
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      textAlign: 'center',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Typography 
                      variant="subtitle1" 
                      fontWeight={600} 
                      sx={{ mb: 1 }}
                    >
                      Competitor A
                    </Typography>
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '0.75rem'
                      }}
                    >
                      A
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
              
              {/* Competitor B */}
              <Grid item xs={7/4}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Box 
                    sx={{ 
                      p: 2, 
                      borderRadius: 2, 
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      textAlign: 'center',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Typography 
                      variant="subtitle1" 
                      fontWeight={600} 
                      sx={{ mb: 1 }}
                    >
                      Competitor B
                    </Typography>
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '0.75rem'
                      }}
                    >
                      B
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
            
            {/* Feature rows */}
            {competitiveFeatures.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.01,
                  transition: { duration: 0.2 }
                }}
              >
                <Paper
                  elevation={0}
                  sx={{ 
                    p: 2, 
                    mb: 2, 
                    borderRadius: 2,
                    background: index % 2 === 0 ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.01)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                      background: 'rgba(255, 255, 255, 0.03)'
                    }
                  }}
                >
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={5}>
                      <Box>
                        <Typography variant="body1" fontWeight={600}>
                          {row.feature}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {row.description}
                        </Typography>
                      </Box>
                    </Grid>
                    
                    {/* HireGenix */}
                    <Grid item xs={7/4}>
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        <Box
                          component={motion.div}
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                          sx={{ 
                            width: 36, 
                            height: 36, 
                            borderRadius: '50%', 
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: row.hiregenix ? `${theme.palette.success.main}20` : 'rgba(255, 255, 255, 0.05)',
                            border: row.hiregenix 
                              ? `2px solid ${theme.palette.success.main}` 
                              : '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: row.hiregenix ? `0 0 10px ${theme.palette.success.main}50` : 'none'
                          }}
                        >
                          {row.hiregenix ? (
                            <CheckIcon sx={{ color: theme.palette.success.main, fontSize: 20 }} />
                          ) : (
                            <CloseIcon sx={{ color: theme.palette.error.main, fontSize: 20 }} />
                          )}
                        </Box>
                      </Box>
                    </Grid>
                    
                    {/* Traditional ATS */}
                    <Grid item xs={7/4}>
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        <Box
                          component={motion.div}
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                          sx={{ 
                            width: 36, 
                            height: 36, 
                            borderRadius: '50%', 
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: row.traditional ? `${theme.palette.success.main}20` : 'rgba(255, 255, 255, 0.05)',
                            border: row.traditional 
                              ? `2px solid ${theme.palette.success.main}` 
                              : '1px solid rgba(255, 255, 255, 0.1)'
                          }}
                        >
                          {row.traditional ? (
                            <CheckIcon sx={{ color: theme.palette.success.main, fontSize: 20 }} />
                          ) : (
                            <CloseIcon sx={{ color: theme.palette.error.main, fontSize: 20 }} />
                          )}
                        </Box>
                      </Box>
                    </Grid>
                    
                    {/* Competitor A */}
                    <Grid item xs={7/4}>
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        <Box
                          component={motion.div}
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                          sx={{ 
                            width: 36, 
                            height: 36, 
                            borderRadius: '50%', 
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: row.competitor1 ? `${theme.palette.success.main}20` : 'rgba(255, 255, 255, 0.05)',
                            border: row.competitor1 
                              ? `2px solid ${theme.palette.success.main}` 
                              : '1px solid rgba(255, 255, 255, 0.1)'
                          }}
                        >
                          {row.competitor1 ? (
                            <CheckIcon sx={{ color: theme.palette.success.main, fontSize: 20 }} />
                          ) : (
                            <CloseIcon sx={{ color: theme.palette.error.main, fontSize: 20 }} />
                          )}
                        </Box>
                      </Box>
                    </Grid>
                    
                    {/* Competitor B */}
                    <Grid item xs={7/4}>
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        <Box
                          component={motion.div}
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                          sx={{ 
                            width: 36, 
                            height: 36, 
                            borderRadius: '50%', 
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: row.competitor2 ? `${theme.palette.success.main}20` : 'rgba(255, 255, 255, 0.05)',
                            border: row.competitor2 
                              ? `2px solid ${theme.palette.success.main}` 
                              : '1px solid rgba(255, 255, 255, 0.1)'
                          }}
                        >
                          {row.competitor2 ? (
                            <CheckIcon sx={{ color: theme.palette.success.main, fontSize: 20 }} />
                          ) : (
                            <CloseIcon sx={{ color: theme.palette.error.main, fontSize: 20 }} />
                          )}
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>
            ))}
            
            {/* Feature count summary */}
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
                  Features supported:
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 4 }}>
                {/* HireGenix */}
                <Box sx={{ textAlign: 'center' }}>
                  <Typography 
                    variant="h5" 
                    fontWeight={700} 
                    color={theme.palette.primary.main}
                  >
                    {competitiveFeatures.filter(f => f.hiregenix).length}/{competitiveFeatures.length}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    HireGenix
                  </Typography>
                </Box>
                
                {/* Traditional ATS */}
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" fontWeight={700}>
                    {competitiveFeatures.filter(f => f.traditional).length}/{competitiveFeatures.length}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Traditional ATS
                  </Typography>
                </Box>
                
                {/* Competitor A */}
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" fontWeight={700}>
                    {competitiveFeatures.filter(f => f.competitor1).length}/{competitiveFeatures.length}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Competitor A
                  </Typography>
                </Box>
                
                {/* Competitor B */}
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" fontWeight={700}>
                    {competitiveFeatures.filter(f => f.competitor2).length}/{competitiveFeatures.length}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Competitor B
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
      
      {/* Market Positioning - Enhanced Interactive Version */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
          Market Positioning
        </Typography>
        
        <Paper 
          sx={{ 
            p: 4, 
            borderRadius: 3,
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            mb: 4,
            position: 'relative',
            overflow: 'hidden'
          }}
          elevation={0}
        >
          {/* Animated background gradient */}
          <Box
            component={motion.div}
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.05,
              background: `linear-gradient(135deg, ${theme.palette.secondary.main}40 0%, ${theme.palette.info.main}40 50%, ${theme.palette.primary.main}40 100%)`,
              backgroundSize: '400% 400%',
              zIndex: 0
            }}
          />
          
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            {/* Company headers */}
            <Grid container spacing={2} sx={{ mb: 4 }}>
              <Grid item xs={12} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{ 
                        p: 2, 
                        borderRadius: 2, 
                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                        border: `1px solid ${theme.palette.primary.main}40`,
                        height: '100%',
                        boxShadow: `0 5px 15px ${theme.palette.primary.main}20`
                      }}
                    >
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
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          bgcolor: theme.palette.primary.main,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '1rem',
                          mx: 'auto',
                          mb: 1
                        }}
                      >
                        H
                      </Box>
                      <Typography 
                        variant="subtitle1" 
                        fontWeight={700} 
                        color={theme.palette.primary.main}
                      >
                        HireGenix
                      </Typography>
                    </Paper>
                  </motion.div>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{ 
                        p: 2, 
                        borderRadius: 2, 
                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        height: '100%'
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          bgcolor: 'rgba(255, 255, 255, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '1rem',
                          mx: 'auto',
                          mb: 1
                        }}
                      >
                        T
                      </Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        Traditional ATS
                      </Typography>
                    </Paper>
                  </motion.div>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{ 
                        p: 2, 
                        borderRadius: 2, 
                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        height: '100%'
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          bgcolor: 'rgba(255, 255, 255, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '1rem',
                          mx: 'auto',
                          mb: 1
                        }}
                      >
                        A
                      </Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        Competitor A
                      </Typography>
                    </Paper>
                  </motion.div>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{ 
                        p: 2, 
                        borderRadius: 2, 
                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        height: '100%'
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          bgcolor: 'rgba(255, 255, 255, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '1rem',
                          mx: 'auto',
                          mb: 1
                        }}
                      >
                        B
                      </Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        Competitor B
                      </Typography>
                    </Paper>
                  </motion.div>
                </Box>
              </Grid>
            </Grid>
            
            {/* Market positioning categories */}
            {marketPositioning.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{ 
                    p: 3, 
                    mb: 3, 
                    borderRadius: 2,
                    background: index % 2 === 0 ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.01)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                      background: 'rgba(255, 255, 255, 0.03)'
                    }
                  }}
                >
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {row.category}
                  </Typography>
                  
                  {row.isRating ? (
                    // Rating visualization
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      {/* HireGenix */}
                      <Grid item xs={12} md={3}>
                        <Box sx={{ textAlign: 'center' }}>
                          <Box sx={{ position: 'relative', height: 8, bgcolor: 'rgba(255, 255, 255, 0.1)', borderRadius: 4, mb: 1, mx: 'auto', maxWidth: 150 }}>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${(row.hiregenix as number) * 20}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              viewport={{ once: true }}
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: '100%',
                                backgroundColor: theme.palette.primary.main,
                                borderRadius: 8
                              }}
                            />
                          </Box>
                          <Rating 
                            value={row.hiregenix as number} 
                            readOnly 
                            precision={0.5}
                            sx={{ 
                              '& .MuiRating-iconFilled': {
                                color: theme.palette.primary.main,
                              }
                            }}
                          />
                          <Typography variant="body2" fontWeight={600} color={theme.palette.primary.main}>
                            {row.hiregenix}/5
                          </Typography>
                        </Box>
                      </Grid>
                      
                      {/* Traditional ATS */}
                      <Grid item xs={12} md={3}>
                        <Box sx={{ textAlign: 'center' }}>
                          <Box sx={{ position: 'relative', height: 8, bgcolor: 'rgba(255, 255, 255, 0.1)', borderRadius: 4, mb: 1, mx: 'auto', maxWidth: 150 }}>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${(row.traditional as number) * 20}%` }}
                              transition={{ duration: 1, delay: 0.3 }}
                              viewport={{ once: true }}
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: '100%',
                                backgroundColor: theme.palette.grey[500],
                                borderRadius: 8
                              }}
                            />
                          </Box>
                          <Rating value={row.traditional as number} readOnly precision={0.5} />
                          <Typography variant="body2">
                            {row.traditional}/5
                          </Typography>
                        </Box>
                      </Grid>
                      
                      {/* Competitor A */}
                      <Grid item xs={12} md={3}>
                        <Box sx={{ textAlign: 'center' }}>
                          <Box sx={{ position: 'relative', height: 8, bgcolor: 'rgba(255, 255, 255, 0.1)', borderRadius: 4, mb: 1, mx: 'auto', maxWidth: 150 }}>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${(row.competitor1 as number) * 20}%` }}
                              transition={{ duration: 1, delay: 0.4 }}
                              viewport={{ once: true }}
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: '100%',
                                backgroundColor: theme.palette.grey[500],
                                borderRadius: 8
                              }}
                            />
                          </Box>
                          <Rating value={row.competitor1 as number} readOnly precision={0.5} />
                          <Typography variant="body2">
                            {row.competitor1}/5
                          </Typography>
                        </Box>
                      </Grid>
                      
                      {/* Competitor B */}
                      <Grid item xs={12} md={3}>
                        <Box sx={{ textAlign: 'center' }}>
                          <Box sx={{ position: 'relative', height: 8, bgcolor: 'rgba(255, 255, 255, 0.1)', borderRadius: 4, mb: 1, mx: 'auto', maxWidth: 150 }}>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${(row.competitor2 as number) * 20}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                              viewport={{ once: true }}
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: '100%',
                                backgroundColor: theme.palette.grey[500],
                                borderRadius: 8
                              }}
                            />
                          </Box>
                          <Rating value={row.competitor2 as number} readOnly precision={0.5} />
                          <Typography variant="body2">
                            {row.competitor2}/5
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  ) : (
                    // Text values visualization
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      {/* HireGenix */}
                      <Grid item xs={12} md={3}>
                        <Box 
                          component={motion.div}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                          sx={{ 
                            textAlign: 'center',
                            p: 2,
                            borderRadius: 2,
                            bgcolor: 'rgba(255, 255, 255, 0.03)',
                            border: `1px solid ${theme.palette.primary.main}30`
                          }}
                        >
                          <Typography 
                            variant="body1" 
                            fontWeight={700}
                            color={theme.palette.primary.main}
                          >
                            {row.hiregenix}
                          </Typography>
                        </Box>
                      </Grid>
                      
                      {/* Traditional ATS */}
                      <Grid item xs={12} md={3}>
                        <Box 
                          component={motion.div}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                          sx={{ 
                            textAlign: 'center',
                            p: 2,
                            borderRadius: 2,
                            bgcolor: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.05)'
                          }}
                        >
                          <Typography variant="body1">
                            {row.traditional}
                          </Typography>
                        </Box>
                      </Grid>
                      
                      {/* Competitor A */}
                      <Grid item xs={12} md={3}>
                        <Box 
                          component={motion.div}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                          sx={{ 
                            textAlign: 'center',
                            p: 2,
                            borderRadius: 2,
                            bgcolor: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.05)'
                          }}
                        >
                          <Typography variant="body1">
                            {row.competitor1}
                          </Typography>
                        </Box>
                      </Grid>
                      
                      {/* Competitor B */}
                      <Grid item xs={12} md={3}>
                        <Box 
                          component={motion.div}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                          sx={{ 
                            textAlign: 'center',
                            p: 2,
                            borderRadius: 2,
                            bgcolor: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.05)'
                          }}
                        >
                          <Typography variant="body1">
                            {row.competitor2}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  )}
                </Paper>
              </motion.div>
            ))}
            
            {/* Summary */}
            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                  HireGenix Market Position Summary
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
                  HireGenix offers the best balance of price, implementation speed, and AI sophistication, 
                  making it accessible to businesses of all sizes while providing enterprise-grade capabilities.
                </Typography>
              </motion.div>
            </Box>
          </Box>
        </Paper>
      </Box>
      
      {/* Competitive Advantages - Enhanced Interactive Version */}
      <Box>
        <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
          Our Competitive Advantages
        </Typography>
        
        <Paper 
          sx={{ 
            p: 4, 
            borderRadius: 3,
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            mb: 4,
            position: 'relative',
            overflow: 'hidden'
          }}
          elevation={0}
        >
          {/* Animated background gradient */}
          <Box
            component={motion.div}
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.05,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}40 0%, ${theme.palette.warning.main}40 50%, ${theme.palette.info.main}40 100%)`,
              backgroundSize: '400% 400%',
              zIndex: 0
            }}
          />
          
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Grid container spacing={3}>
              {competitiveAdvantages.map((advantage, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -10,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Paper
                      elevation={0}
                      sx={{ 
                        p: 4, 
                        borderRadius: 3,
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        height: '100%',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: `0 15px 30px rgba(0, 0, 0, 0.1), 0 0 30px ${advantage.color}30`,
                          border: `1px solid ${advantage.color}30`,
                        }
                      }}
                    >
                      {/* Animated glow effect */}
                      <Box
                        component={motion.div}
                        animate={{ 
                          opacity: [0.3, 0.6, 0.3],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          repeatType: 'loop',
                          delay: index * 0.5
                        }}
                        sx={{
                          position: 'absolute',
                          top: -20,
                          right: -20,
                          width: 100,
                          height: 100,
                          borderRadius: '50%',
                          background: `radial-gradient(circle, ${advantage.color}50 0%, rgba(0,0,0,0) 70%)`,
                          filter: 'blur(20px)',
                          zIndex: 0
                        }}
                      />
                      
                      <Box sx={{ position: 'relative', zIndex: 1 }}>
                        <Box 
                          sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            mb: 3,
                            pb: 2,
                            borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                          }}
                        >
                          <Box 
                            component={motion.div}
                            animate={{ 
                              rotate: [0, 5, 0, -5, 0],
                            }}
                            transition={{ 
                              duration: 4,
                              repeat: Infinity,
                              repeatType: 'loop',
                              delay: index * 0.5
                            }}
                            sx={{ 
                              width: 60, 
                              height: 60, 
                              borderRadius: '16px', 
                              background: `linear-gradient(135deg, ${advantage.color} 0%, ${advantage.color}99 100%)`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mr: 2,
                              boxShadow: `0 8px 20px ${advantage.color}40`
                            }}
                          >
                            {advantage.icon}
                          </Box>
                          <Typography variant="h5" fontWeight={700}>
                            {advantage.title}
                          </Typography>
                        </Box>
                        
                        <Typography variant="body1" paragraph>
                          {advantage.description}
                        </Typography>
                        
                        {/* Unique feature tags */}
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                          {index === 0 && (
                            <>
                              <Chip 
                                size="small" 
                                label="End-to-End AI" 
                                sx={{ 
                                  bgcolor: `${advantage.color}20`,
                                  color: advantage.color,
                                  border: `1px solid ${advantage.color}40`,
                                  fontWeight: 600
                                }}
                              />
                              <Chip 
                                size="small" 
                                label="Unified Platform" 
                                sx={{ 
                                  bgcolor: `${advantage.color}20`,
                                  color: advantage.color,
                                  border: `1px solid ${advantage.color}40`,
                                  fontWeight: 600
                                }}
                              />
                            </>
                          )}
                          {index === 1 && (
                            <>
                              <Chip 
                                size="small" 
                                label="Faster Feedback" 
                                sx={{ 
                                  bgcolor: `${advantage.color}20`,
                                  color: advantage.color,
                                  border: `1px solid ${advantage.color}40`,
                                  fontWeight: 600
                                }}
                              />
                              <Chip 
                                size="small" 
                                label="Personalized Experience" 
                                sx={{ 
                                  bgcolor: `${advantage.color}20`,
                                  color: advantage.color,
                                  border: `1px solid ${advantage.color}40`,
                                  fontWeight: 600
                                }}
                              />
                            </>
                          )}
                          {index === 2 && (
                            <>
                              <Chip 
                                size="small" 
                                label="Exclusive Feature" 
                                sx={{ 
                                  bgcolor: `${advantage.color}20`,
                                  color: advantage.color,
                                  border: `1px solid ${advantage.color}40`,
                                  fontWeight: 600
                                }}
                              />
                              <Chip 
                                size="small" 
                                label="Soft Skills Analysis" 
                                sx={{ 
                                  bgcolor: `${advantage.color}20`,
                                  color: advantage.color,
                                  border: `1px solid ${advantage.color}40`,
                                  fontWeight: 600
                                }}
                              />
                            </>
                          )}
                          {index === 3 && (
                            <>
                              <Chip 
                                size="small" 
                                label="Advanced Analytics" 
                                sx={{ 
                                  bgcolor: `${advantage.color}20`,
                                  color: advantage.color,
                                  border: `1px solid ${advantage.color}40`,
                                  fontWeight: 600
                                }}
                              />
                              <Chip 
                                size="small" 
                                label="Continuous Improvement" 
                                sx={{ 
                                  bgcolor: `${advantage.color}20`,
                                  color: advantage.color,
                                  border: `1px solid ${advantage.color}40`,
                                  fontWeight: 600
                                }}
                              />
                            </>
                          )}
                        </Box>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
            
            {/* Unique Position */}
            <Box sx={{ mt: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 4, 
                    borderRadius: 3,
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Animated background */}
                  <Box
                    component={motion.div}
                    animate={{ 
                      x: [0, 10, 0, -10, 0],
                      y: [0, -10, 0, 10, 0]
                    }}
                    transition={{ 
                      duration: 20,
                      repeat: Infinity,
                      repeatType: 'loop'
                    }}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      opacity: 0.05,
                      backgroundImage: 'url(/hero-pattern.svg)',
                      backgroundSize: '200%',
                      zIndex: 0
                    }}
                  />
                  
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography variant="h5" fontWeight={700} gutterBottom color={theme.palette.primary.main}>
                      Our Unique Position
                    </Typography>
                    
                    <Grid container spacing={4} sx={{ mt: 1 }}>
                      <Grid item xs={12} md={7}>
                        <Typography variant="body1" paragraph>
                          While traditional ATS systems focus on workflow and competitor solutions offer point AI features, HireGenix is uniquely positioned as a comprehensive AI-powered recruitment platform that addresses the entire hiring process.
                        </Typography>
                        <Typography variant="body1">
                          Our competitive moat comes from our proprietary AI algorithms that understand the contextual meaning of skills and requirements, analyze candidate communication patterns, and provide predictive insights that no other platform can match.
                        </Typography>
                      </Grid>
                      
                      <Grid item xs={12} md={5}>
                        <Box 
                          sx={{ 
                            p: 3, 
                            borderRadius: 3, 
                            bgcolor: 'rgba(255, 255, 255, 0.02)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            height: '100%'
                          }}
                        >
                          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                            Key Differentiators
                          </Typography>
                          
                          {[
                            "Proprietary AI algorithms",
                            "Full-spectrum recruitment solution",
                            "Contextual understanding of skills",
                            "Predictive performance insights",
                            "Seamless integration capabilities"
                          ].map((item, idx) => (
                            <Box 
                              key={idx}
                              component={motion.div}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.8 + idx * 0.1 }}
                              viewport={{ once: true }}
                              sx={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                mb: 1.5 
                              }}
                            >
                              <Box 
                                component={motion.div}
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.3 }}
                                sx={{ 
                                  width: 24, 
                                  height: 24, 
                                  borderRadius: '50%', 
                                  bgcolor: theme.palette.primary.main,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  mr: 2,
                                  color: 'white',
                                  fontSize: '0.75rem',
                                  fontWeight: 700
                                }}
                              >
                                {idx + 1}
                              </Box>
                              <Typography variant="body2">
                                {item}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </motion.div>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default InvestorRelationsCompetitive;
