"use client";

import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  useTheme, 
  Chip,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import {
  TrendingUp as TrendingUpIcon,
  People as PeopleIcon,
  Business as BusinessIcon,
  Star as StarIcon,
  CheckCircle as CheckCircleIcon,
  Flag as FlagIcon,
  Circle as CircleIcon
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

const TractionCard = styled(Paper)(({ theme }) => ({
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

const MetricCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  height: '100%',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
  },
}));

const IconBox = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
}));

// No need for these styled components as we're using inline styles

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

const InvestorRelationsTraction: React.FC = () => {
  const theme = useTheme();

  // Key metrics data
  const keyMetrics = [
    {
      value: "10,000+",
      label: "Registered Users",
      description: "Growing user base across 200+ companies",
      icon: <PeopleIcon sx={{ fontSize: 30, color: 'white' }} />,
      color: theme.palette.primary.main
    },
    {
      value: "35+",
      label: "Enterprise Clients",
      description: "Including 5 Fortune 500 companies",
      icon: <BusinessIcon sx={{ fontSize: 30, color: 'white' }} />,
      color: theme.palette.secondary.main
    },
    {
      value: "92%",
      label: "Client Retention",
      description: "High satisfaction and renewal rates",
      icon: <StarIcon sx={{ fontSize: 30, color: 'white' }} />,
      color: theme.palette.info.main
    },
    {
      value: "150K+",
      label: "Candidates Processed",
      description: "With 40% higher match quality than traditional methods",
      icon: <CheckCircleIcon sx={{ fontSize: 30, color: 'white' }} />,
      color: theme.palette.warning.main
    }
  ];

  // Milestone timeline data
  const milestones = [
    {
      date: "Q1 2023",
      title: "Company Founded",
      description: "HireGenix was founded with a mission to transform recruitment through AI.",
      color: theme.palette.primary.main,
      achievements: ["Initial team of 5 assembled", "Seed funding secured"]
    },
    {
      date: "Q2 2023",
      title: "MVP Development",
      description: "Developed and tested our minimum viable product with early adopters.",
      color: theme.palette.secondary.main,
      achievements: ["Core AI matching algorithm developed", "First beta testers onboarded"]
    },
    {
      date: "Q3 2023",
      title: "Beta Launch",
      description: "Launched beta version to select customers and gathered feedback.",
      color: theme.palette.info.main,
      achievements: ["15 beta customers", "95% positive feedback", "Key feature improvements"]
    },
    {
      date: "Q4 2023",
      title: "Official Product Launch",
      description: "Full commercial launch with complete feature set.",
      color: theme.palette.success.main,
      achievements: ["First paying customers", "Media coverage in HR Tech publications"]
    },
    {
      date: "Q1 2024",
      title: "Enterprise Expansion",
      description: "Secured first enterprise clients and expanded team.",
      color: theme.palette.warning.main,
      achievements: ["5 enterprise clients signed", "Team expanded to 20 people"]
    },
    {
      date: "Q2 2024",
      title: "International Expansion",
      description: "Expanded operations to European and Asian markets.",
      color: theme.palette.error.main,
      achievements: ["Clients in 5 countries", "Localization for 3 languages"]
    }
  ];

  // Growth metrics
  const growthMetrics = [
    {
      title: "Monthly Active Users",
      current: "8,500+",
      growth: "+127% YoY",
      description: "Steady growth in active users with strong engagement metrics.",
      color: theme.palette.primary.main
    },
    {
      title: "Monthly Recurring Revenue",
      current: "$125K",
      growth: "+85% YoY",
      description: "Consistent revenue growth with increasing average contract value.",
      color: theme.palette.success.main
    },
    {
      title: "Customer Acquisition Cost",
      current: "$1,200",
      growth: "-15% YoY",
      description: "Decreasing CAC as brand awareness grows and referrals increase.",
      color: theme.palette.info.main
    },
    {
      title: "Lifetime Value",
      current: "$28,000",
      growth: "+35% YoY",
      description: "Strong LTV with expanding product usage and upsells.",
      color: theme.palette.secondary.main
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
      id="traction"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <SectionTitle variant="h3">
          Traction & Milestones
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
          HireGenix has achieved significant traction since our founding, with strong growth in users, revenue, and enterprise adoption.
        </Typography>
      </motion.div>
      
      {/* Key Metrics */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
          Key Metrics
        </Typography>
        
        <Grid container spacing={3}>
          {keyMetrics.map((metric, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <MetricCard>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box 
                      sx={{ 
                        width: 50, 
                        height: 50, 
                        borderRadius: '12px', 
                        bgcolor: metric.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                        boxShadow: `0 8px 20px ${metric.color}40`
                      }}
                    >
                      {metric.icon}
                    </Box>
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        {metric.label}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="h3" fontWeight={700} color={metric.color} gutterBottom>
                    {metric.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {metric.description}
                  </Typography>
                </MetricCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
      
      {/* Growth Metrics */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
          Growth Metrics
        </Typography>
        
        <Grid container spacing={3}>
          {growthMetrics.map((metric, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TractionCard elevation={0}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" fontWeight={600}>
                      {metric.title}
                    </Typography>
                    <Chip 
                      label={metric.growth} 
                      size="small"
                      sx={{ 
                        bgcolor: metric.growth.includes('+') ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
                        color: metric.growth.includes('+') ? theme.palette.success.main : theme.palette.error.main,
                        fontWeight: 600
                      }}
                    />
                  </Box>
                  <Typography variant="h4" fontWeight={700} color={metric.color} gutterBottom>
                    {metric.current}
                  </Typography>
                  <Typography variant="body2">
                    {metric.description}
                  </Typography>
                </TractionCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
      
      {/* Milestone Timeline */}
      <Box>
        <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
          Milestone Timeline
        </Typography>
        
        {/* Custom Timeline Implementation */}
        <Box sx={{ position: 'relative' }}>
          {/* Center line */}
          <Box 
            sx={{ 
              position: 'absolute', 
              left: '50%', 
              top: 0, 
              bottom: 0, 
              width: 2, 
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              transform: 'translateX(-50%)',
              zIndex: 0
            }} 
          />
          
          {milestones.map((milestone, index) => (
            <Box 
              key={index} 
              sx={{ 
                display: 'flex', 
                mb: 6,
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
              }}
            >
              {/* Date Column */}
              <Box 
                sx={{ 
                  width: '50%', 
                  pr: index % 2 === 0 ? 4 : 0,
                  pl: index % 2 === 0 ? 0 : 4,
                  textAlign: index % 2 === 0 ? 'right' : 'left',
                  position: 'relative'
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Typography variant="h6" fontWeight={600} color={milestone.color}>
                    {milestone.date}
                  </Typography>
                </motion.div>
              </Box>
              
              {/* Center Dot */}
              <Box 
                sx={{ 
                  position: 'absolute', 
                  left: '50%', 
                  transform: 'translateX(-50%)',
                  zIndex: 1,
                  mt: 1
                }}
              >
                <Box 
                  sx={{ 
                    width: 16, 
                    height: 16, 
                    borderRadius: '50%', 
                    bgcolor: milestone.color,
                    boxShadow: `0 0 0 4px ${theme.palette.background.paper}`
                  }} 
                />
              </Box>
              
              {/* Content Column */}
              <Box 
                sx={{ 
                  width: '50%', 
                  pl: index % 2 === 0 ? 4 : 0,
                  pr: index % 2 === 0 ? 0 : 4,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper 
                    elevation={0}
                    sx={{ 
                      p: 3, 
                      borderRadius: 3,
                      background: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} component="h3">
                      {milestone.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {milestone.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {milestone.achievements.map((achievement, i) => (
                        <Chip 
                          key={i} 
                          label={achievement} 
                          size="small"
                          sx={{ 
                            bgcolor: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                          }}
                        />
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </Box>
            </Box>
          ))}
          
          {/* Future Milestone */}
          <Box 
            sx={{ 
              display: 'flex', 
              mb: 6,
              flexDirection: milestones.length % 2 === 0 ? 'row' : 'row-reverse'
            }}
          >
            {/* Date Column */}
            <Box 
              sx={{ 
                width: '50%', 
                pr: milestones.length % 2 === 0 ? 4 : 0,
                pl: milestones.length % 2 === 0 ? 0 : 4,
                textAlign: milestones.length % 2 === 0 ? 'right' : 'left',
                position: 'relative'
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: milestones.length % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: milestones.length * 0.1 }}
                viewport={{ once: true }}
              >
                <Typography variant="h6" fontWeight={600} color={theme.palette.primary.main}>
                  Q3 2024
                </Typography>
              </motion.div>
            </Box>
            
            {/* Center Dot */}
            <Box 
              sx={{ 
                position: 'absolute', 
                left: '50%', 
                transform: 'translateX(-50%)',
                zIndex: 1,
                mt: 1
              }}
            >
              <Box 
                sx={{ 
                  width: 20, 
                  height: 20, 
                  borderRadius: '50%', 
                  bgcolor: 'transparent',
                  border: `2px dashed ${theme.palette.primary.main}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 0 0 4px ${theme.palette.background.paper}`
                }} 
              >
                <FlagIcon sx={{ color: theme.palette.primary.main, fontSize: 12 }} />
              </Box>
            </Box>
            
            {/* Content Column */}
            <Box 
              sx={{ 
                width: '50%', 
                pl: milestones.length % 2 === 0 ? 4 : 0,
                pr: milestones.length % 2 === 0 ? 0 : 4,
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: milestones.length % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: milestones.length * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 3, 
                    borderRadius: 3,
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: `1px dashed ${theme.palette.primary.main}`,
                  }}
                >
                  <Typography variant="h6" fontWeight={600} component="h3">
                    Next Major Milestone
                  </Typography>
                  <Typography variant="body2" paragraph>
                    With your investment, we'll accelerate our growth and reach these upcoming milestones:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <Chip 
                      label="100+ Enterprise Clients" 
                      size="small"
                      sx={{ 
                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    />
                    <Chip 
                      label="$1M MRR" 
                      size="small"
                      sx={{ 
                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    />
                    <Chip 
                      label="Global Expansion" 
                      size="small"
                      sx={{ 
                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    />
                  </Box>
                </Paper>
              </motion.div>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InvestorRelationsTraction;
