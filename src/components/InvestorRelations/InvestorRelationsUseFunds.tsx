"use client";

import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  useTheme, 
  LinearProgress,
  Divider,
  Button,
  Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import {
  Code as CodeIcon,
  People as PeopleIcon,
  TrendingUp as TrendingUpIcon,
  Campaign as CampaignIcon,
  BarChart as BarChartIcon,
  Layers as LayersIcon,
  AccountBalance as AccountBalanceIcon,
  Lightbulb as LightbulbIcon
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

const AllocationCard = styled(motion(Paper))(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  borderRadius: theme.shape.borderRadius * 2,
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
  },
}));

const IconBox = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
  flexShrink: 0,
}));

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  '& .MuiLinearProgress-bar': {
    borderRadius: 5,
  },
}));

const MilestoneCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 1.5,
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  marginBottom: theme.spacing(2),
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateX(5px)',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
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

// Fund allocation data
const fundAllocations = [
  { 
    category: "Product Development", 
    percentage: 40, 
    amount: "$200,000",
    icon: <CodeIcon sx={{ fontSize: 30, color: 'white' }} />,
    color: "#3f51b5", // indigo
    description: "Enhancing AI algorithms, building new features, and improving user experience",
    keyItems: [
      "AI matching algorithm refinement",
      "Video interview analysis enhancements",
      "Mobile app development",
      "UX/UI improvements"
    ]
  },
  { 
    category: "Team Expansion", 
    percentage: 25, 
    amount: "$125,000",
    icon: <PeopleIcon sx={{ fontSize: 30, color: 'white' }} />,
    color: "#4caf50", // green
    description: "Growing our engineering, sales, and customer success teams",
    keyItems: [
      "Senior AI engineer",
      "Frontend developer",
      "Sales representative",
      "Customer success manager"
    ]
  },
  { 
    category: "Marketing & Sales", 
    percentage: 20, 
    amount: "$100,000",
    icon: <CampaignIcon sx={{ fontSize: 30, color: 'white' }} />,
    color: "#ff9800", // orange
    description: "Expanding market reach and acquiring new customers",
    keyItems: [
      "Digital marketing campaigns",
      "Industry conference participation",
      "Content marketing",
      "Sales enablement tools"
    ]
  },
  { 
    category: "Operations & Infrastructure", 
    percentage: 15, 
    amount: "$75,000",
    icon: <LayersIcon sx={{ fontSize: 30, color: 'white' }} />,
    color: "#e91e63", // pink
    description: "Scaling infrastructure and improving operational efficiency",
    keyItems: [
      "Cloud infrastructure scaling",
      "Security enhancements",
      "Compliance certifications",
      "Operational tools"
    ]
  }
];

// Key milestones
const keyMilestones = [
  {
    title: "Product Enhancement Phase",
    timeline: "Months 1-3",
    description: "Complete core AI algorithm improvements and launch mobile app beta",
    icon: <LightbulbIcon />,
    color: "#3f51b5" // indigo
  },
  {
    title: "Team Building & Market Expansion",
    timeline: "Months 3-6",
    description: "Hire key team members and launch targeted marketing campaigns",
    icon: <PeopleIcon />,
    color: "#4caf50" // green
  },
  {
    title: "Revenue Growth Acceleration",
    timeline: "Months 6-9",
    description: "Achieve 20% month-over-month revenue growth and expand customer base",
    icon: <TrendingUpIcon />,
    color: "#ff9800" // orange
  },
  {
    title: "Operational Excellence",
    timeline: "Months 9-12",
    description: "Optimize operations, achieve SOC 2 compliance, and prepare for Series A",
    icon: <BarChartIcon />,
    color: "#e91e63" // pink
  }
];

const InvestorRelationsUseFunds: React.FC = () => {
  const theme = useTheme();

  return (
    <Box 
      component="section" 
      sx={{ 
        py: 10,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 100%)',
        borderRadius: 4
      }} 
      id="use-of-funds"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <SectionTitle variant="h3">
          Use of Funds
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
          Strategic allocation of the $500,000 investment to accelerate growth and achieve key milestones
        </Typography>
      </motion.div>
      
      <Box 
        sx={{ 
          p: 4, 
          borderRadius: 3,
          background: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          mb: 6,
          position: 'relative',
          overflow: 'hidden'
        }}
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
            background: `linear-gradient(135deg, ${theme.palette.primary.main}40 0%, ${theme.palette.secondary.main}40 50%, ${theme.palette.success.main}40 100%)`,
            backgroundSize: '400% 400%',
            zIndex: 0
          }}
        />
        
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4}>
            {fundAllocations.map((allocation, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AllocationCard elevation={0}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <IconBox sx={{ background: `linear-gradient(135deg, ${allocation.color} 0%, ${allocation.color}99 100%)` }}>
                        {allocation.icon}
                      </IconBox>
                      <Box>
                        <Typography variant="h6" fontWeight={600}>
                          {allocation.category}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography variant="h5" fontWeight={700} color={allocation.color}>
                            {allocation.percentage}%
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            ({allocation.amount})
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    
                    <Box sx={{ mb: 3 }}>
                      <StyledLinearProgress 
                        variant="determinate" 
                        value={allocation.percentage} 
                        sx={{ 
                          '& .MuiLinearProgress-bar': {
                            background: `linear-gradient(90deg, ${allocation.color}99, ${allocation.color})`,
                          }
                        }}
                      />
                    </Box>
                    
                    <Typography variant="body1" paragraph>
                      {allocation.description}
                    </Typography>
                    
                    <Box sx={{ mt: 2 }}>
                      {allocation.keyItems.map((item, idx) => (
                        <Chip
                          key={idx}
                          label={item}
                          size="small"
                          sx={{ 
                            mr: 1, 
                            mb: 1, 
                            bgcolor: `${allocation.color}20`,
                            color: allocation.color,
                            border: `1px solid ${allocation.color}40`,
                            '&:hover': {
                              bgcolor: `${allocation.color}30`,
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </AllocationCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                Strategic Investment Allocation
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
                Our funding allocation is designed to maximize growth while maintaining operational efficiency. 
                We've prioritized product development and team expansion to build a strong foundation for scaling.
              </Typography>
            </motion.div>
          </Box>
        </Box>
      </Box>
      
      <Grid container spacing={5}>
        <Grid item xs={12} md={5}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Box 
              sx={{ 
                p: 4, 
                borderRadius: 3,
                background: `linear-gradient(135deg, ${theme.palette.primary.dark}30 0%, ${theme.palette.primary.main}15 100%)`,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                height: '100%',
                position: 'relative',
                overflow: 'hidden'
              }}
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
                  opacity: 0.1,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}40 0%, ${theme.palette.primary.dark}40 100%)`,
                  backgroundSize: '200% 200%',
                  zIndex: 0
                }}
              />
              
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box
                    component={motion.div}
                    animate={{ 
                      rotate: [0, 5, 0, -5, 0],
                      scale: [1, 1.05, 1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      repeatType: 'loop'
                    }}
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '16px',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 8px 20px ${theme.palette.primary.main}50`,
                      flexShrink: 0,
                      mr: 2
                    }}
                  >
                    <AccountBalanceIcon sx={{ color: 'white', fontSize: 30 }} />
                  </Box>
                  <Typography variant="h5" fontWeight={700}>
                    Investment ROI
                  </Typography>
                </Box>
                
                <Typography variant="body1" paragraph>
                  With this strategic investment, we project achieving:
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  {[
                    { metric: "Monthly Recurring Revenue", value: "$100K", timeline: "within 12 months" },
                    { metric: "Customer Base", value: "100+ enterprises", timeline: "by end of year" },
                    { metric: "Gross Margin", value: "75%+", timeline: "sustainable" },
                    { metric: "Series A Readiness", value: "$5M+ raise", timeline: "in 18 months" }
                  ].map((item, idx) => (
                    <Box 
                      key={idx} 
                      sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        mb: 2,
                        pb: 2,
                        borderBottom: idx < 3 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        {item.metric}
                      </Typography>
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="h6" fontWeight={700} color="primary.main">
                          {item.value}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {item.timeline}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
                
                <Typography variant="body2" color="text.secondary">
                  This investment will position us for a successful Series A round at a significantly higher valuation, providing early investors with substantial returns.
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Grid>
        
        <Grid item xs={12} md={7}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Box 
              sx={{ 
                p: 4, 
                borderRadius: 3,
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
                12-Month Roadmap & Milestones
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                {keyMilestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <MilestoneCard>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <Box 
                          sx={{ 
                            width: 40, 
                            height: 40, 
                            borderRadius: '10px', 
                            bgcolor: milestone.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 2,
                            flexShrink: 0
                          }}
                        >
                          {React.cloneElement(milestone.icon, { 
                            sx: { fontSize: 24, color: 'white' } 
                          })}
                        </Box>
                        <Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1, mb: 1 }}>
                            <Typography variant="subtitle1" fontWeight={700}>
                              {milestone.title}
                            </Typography>
                            <Chip 
                              label={milestone.timeline} 
                              size="small" 
                              sx={{ 
                                bgcolor: `${milestone.color}20`,
                                color: milestone.color,
                                fontWeight: 600
                              }} 
                            />
                          </Box>
                          <Typography variant="body2">
                            {milestone.description}
                          </Typography>
                        </Box>
                      </Box>
                    </MilestoneCard>
                  </motion.div>
                ))}
              </Box>
              
              <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
              
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                  Path to Series A
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  This seed investment will enable us to hit key metrics and milestones necessary for a successful Series A round within 18 months, targeting a $30M+ valuation.
                </Typography>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outlined" 
                    color="primary"
                    endIcon={<TrendingUpIcon />}
                    sx={{ 
                      borderRadius: 2,
                      borderWidth: 2,
                      '&:hover': {
                        borderWidth: 2
                      }
                    }}
                  >
                    View Detailed Financial Projections
                  </Button>
                </motion.div>
              </Box>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <Box 
          sx={{ 
            mt: 6, 
            p: 4, 
            borderRadius: 3,
            background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
            color: 'white',
            textAlign: 'center',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)'
          }}
        >
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Your Investment Impact
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto', mb: 3 }}>
            Your investment will directly fuel our growth in a $150B+ global recruitment market. We've built a production-ready platform with proven technology, and now we're ready to scale. Join us in transforming how companies build their teams.
          </Typography>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              href="#contact"
              sx={{ 
                px: 4, 
                py: 1.5, 
                borderRadius: 2,
                fontWeight: 600,
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
              }}
            >
              Discuss Investment Opportunity
            </Button>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
};

export default InvestorRelationsUseFunds;
