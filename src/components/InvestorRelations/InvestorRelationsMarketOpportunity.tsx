"use client";

import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  useTheme, 
  Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import {
  TrendingUp as TrendingUpIcon,
  Public as PublicIcon,
  Computer as ComputerIcon,
  Group as GroupIcon
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

const StatCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  borderRadius: theme.shape.borderRadius * 2,
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
  },
}));

const IconBox = styled(Box)(({ theme }) => ({
  width: 70,
  height: 70,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
}));

const TrendCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
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

const InvestorRelationsMarketOpportunity: React.FC = () => {
  const theme = useTheme();

  // Market stats
  const marketStats = [
    {
      value: "$3.3B",
      label: "Global Recruitment Software Market (2025)",
      description: "The current market size represents significant opportunity for innovative solutions.",
      icon: <PublicIcon sx={{ fontSize: 36, color: 'white' }} />,
      color: theme.palette.primary.main
    },
    {
      value: "$6.2B",
      label: "Projected Market Size (2032)",
      description: "Growing at ~9% CAGR, the market is expanding rapidly as companies invest in HR tech.",
      icon: <TrendingUpIcon sx={{ fontSize: 36, color: 'white' }} />,
      color: theme.palette.secondary.main
    },
    {
      value: "30%",
      label: "Remote Job Postings",
      description: "Post-2020, remote work has accelerated the need for digital hiring solutions.",
      icon: <ComputerIcon sx={{ fontSize: 36, color: 'white' }} />,
      color: theme.palette.info.main
    },
    {
      value: "48%",
      label: "Hiring Managers Admit Bias",
      description: "Nearly half of hiring managers acknowledge bias in traditional recruitment processes.",
      icon: <GroupIcon sx={{ fontSize: 36, color: 'white' }} />,
      color: theme.palette.warning.main
    }
  ];

  // Market trends
  const marketTrends = [
    {
      title: "Growing TAM",
      description: "The global recruitment software market is estimated at $3.3B in 2025, projected to reach $6.2B by 2032. This robust growth (~9% annually) reflects increasing demand for solutions that streamline hiring and address talent shortages.",
      color: theme.palette.primary.main
    },
    {
      title: "AI Adoption in HR",
      description: "Companies are investing in AI-driven tools to gain an edge in talent acquisition. Modern recruiting platforms with features like AI chatbots, predictive analytics for hiring, and automated workflows are supplementing traditional methods.",
      color: theme.palette.secondary.main
    },
    {
      title: "Market Gap",
      description: "Many businesses, especially mid-sized firms, still rely on outdated ATS or manual processes. They seek integrated platforms that reduce cost-per-hire and time-to-fill.",
      color: theme.palette.info.main
    },
    {
      title: "Growth in Remote & Global Hiring",
      description: "Post-2020, with more remote roles and distributed teams, companies need digital hiring tools. The shift to virtual recruitment accelerates demand for video interviewing and online assessments.",
      color: theme.palette.warning.main
    },
    {
      title: "Scalable Business",
      description: "HR software often enjoys high retention once adopted (sticky due to data and process integration). With the recruitment market's size and tech migration underway, there's a chance to capture significant value in a fragmented landscape ripe for innovation.",
      color: theme.palette.success.main
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
      id="market-opportunity"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <SectionTitle variant="h3">
          Market Opportunity
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
          The HR tech and recruitment market is undergoing rapid transformation, creating a timely opportunity for HireGenix to lead that change.
        </Typography>
      </motion.div>
      
      {/* Market Size Visualization */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
          Market Size & Key Statistics
        </Typography>
        
        <Grid container spacing={3}>
          {marketStats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <StatCard elevation={0}>
                  <IconBox sx={{ background: `linear-gradient(135deg, ${stat.color} 0%, ${stat.color}99 100%)` }}>
                    {stat.icon}
                  </IconBox>
                  <Typography variant="h3" fontWeight={700} color={stat.color} gutterBottom>
                    {stat.value}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    {stat.label}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.description}
                  </Typography>
                </StatCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
      
      {/* Market Growth Chart */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
          Market Growth Projection
        </Typography>
        
        <Paper 
          sx={{ 
            p: 4, 
            borderRadius: 3,
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
          elevation={0}
        >
          <Box sx={{ height: 300, position: 'relative', mb: 2 }}>
            {/* Chart Background */}
            <Box sx={{ 
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              right: 0, 
              height: '1px', 
              bgcolor: 'divider' 
            }} />
            
            {/* Y-axis labels */}
            <Box sx={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 50, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Typography variant="caption" color="text.secondary">$7B</Typography>
              <Typography variant="caption" color="text.secondary">$6B</Typography>
              <Typography variant="caption" color="text.secondary">$5B</Typography>
              <Typography variant="caption" color="text.secondary">$4B</Typography>
              <Typography variant="caption" color="text.secondary">$3B</Typography>
              <Typography variant="caption" color="text.secondary">$2B</Typography>
              <Typography variant="caption" color="text.secondary">$1B</Typography>
              <Typography variant="caption" color="text.secondary">$0</Typography>
            </Box>
            
            {/* Chart Bars */}
            <Box sx={{ display: 'flex', height: '100%', pl: 7, pr: 2, alignItems: 'flex-end', justifyContent: 'space-around' }}>
              {[
                { year: 2025, value: 3.3, height: '50%' },
                { year: 2026, value: 3.6, height: '55%' },
                { year: 2027, value: 3.9, height: '60%' },
                { year: 2028, value: 4.3, height: '65%' },
                { year: 2029, value: 4.7, height: '70%' },
                { year: 2030, value: 5.1, height: '75%' },
                { year: 2031, value: 5.6, height: '82%' },
                { year: 2032, value: 6.2, height: '90%' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  whileInView={{ height: item.height }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ width: '8%', marginRight: '2%', position: 'relative' }}
                >
                  <Box 
                    sx={{ 
                      width: '100%', 
                      height: '100%', 
                      background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                      borderRadius: '4px 4px 0 0',
                      position: 'relative',
                      '&:hover': {
                        background: `linear-gradient(180deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                      },
                      '&:hover .tooltip': {
                        opacity: 1,
                        transform: 'translateY(0)',
                      }
                    }}
                  >
                    <Box 
                      className="tooltip"
                      sx={{ 
                        position: 'absolute', 
                        top: -40, 
                        left: '50%', 
                        transform: 'translateX(-50%) translateY(10px)',
                        bgcolor: 'background.paper',
                        color: 'text.primary',
                        p: 1,
                        borderRadius: 1,
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        opacity: 0,
                        transition: 'all 0.2s ease',
                        whiteSpace: 'nowrap',
                        zIndex: 1
                      }}
                    >
                      ${item.value}B
                    </Box>
                  </Box>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      position: 'absolute', 
                      bottom: -25, 
                      left: '50%', 
                      transform: 'translateX(-50%)',
                      color: 'text.secondary',
                      fontWeight: 500
                    }}
                  >
                    {item.year}
                  </Typography>
                </motion.div>
              ))}
            </Box>
          </Box>
          
          <Typography variant="subtitle2" textAlign="center" color="text.secondary">
            Global Recruitment Software Market Size (in billions USD)
          </Typography>
          <Typography variant="body2" textAlign="center" color="text.secondary" sx={{ mt: 1 }}>
            CAGR: ~9.4% (2025-2032)
          </Typography>
        </Paper>
      </Box>
      
      {/* Market Trends */}
      <Box>
        <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
          Key Market Trends
        </Typography>
        
        <Grid container spacing={3}>
          {marketTrends.map((trend, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TrendCard elevation={0}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box 
                      sx={{ 
                        width: 8, 
                        height: 8, 
                        borderRadius: '50%', 
                        bgcolor: trend.color,
                        mr: 2,
                        boxShadow: `0 0 10px ${trend.color}`
                      }} 
                    />
                    <Typography variant="h6" fontWeight={600} color={trend.color}>
                      {trend.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1">
                    {trend.description}
                  </Typography>
                </TrendCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default InvestorRelationsMarketOpportunity;
