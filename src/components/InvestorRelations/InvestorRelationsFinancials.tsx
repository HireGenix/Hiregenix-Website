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
  Divider,
  LinearProgress
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import {
  TrendingUp as TrendingUpIcon,
  AttachMoney as AttachMoneyIcon,
  Code as CodeIcon,
  Campaign as CampaignIcon,
  Support as SupportIcon,
  Business as BusinessIcon
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

const FinancialCard = styled(Paper)(({ theme }) => ({
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

const FundAllocationCard = styled(Box)(({ theme }) => ({
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

const InvestorRelationsFinancials: React.FC = () => {
  const theme = useTheme();

  // Financial projections data
  const financialProjections = [
    {
      year: "2025 (Year 1)",
      revenue: "$0.5M",
      expenses: "$1.5M",
      netIncome: "-$1.0M",
      keyDrivers: "Initial customer acquisitions in H2; heavy R&D and product launch marketing spend. Pre-revenue in H1 (product in beta) -> revenue starts late 2025."
    },
    {
      year: "2026 (Year 2)",
      revenue: "$2.0M",
      expenses: "$3.0M",
      netIncome: "-$1.0M",
      keyDrivers: "Rapid user growth (target ~100 paying companies by end of 2026). Scaling sales team and support. Still reinvesting for growth; expect to approach cash-flow breakeven late 2026."
    },
    {
      year: "2027 (Year 3)",
      revenue: "$5.5M",
      expenses: "$5.0M",
      netIncome: "+$0.5M",
      keyDrivers: "Strong SaaS recurring revenue from ~300+ customers. Operating leverage kicks in: platform costs stabilize while subscription revenues grow, leading to first profits."
    }
  ];

  // Fund allocation data
  const fundAllocation = [
    {
      category: "Product Development",
      percentage: 40,
      description: "Continue to refine our AI algorithms and build new features requested by pilot users. Also includes cloud infrastructure costs.",
      icon: <CodeIcon sx={{ fontSize: 30, color: 'white' }} />,
      color: theme.palette.primary.main
    },
    {
      category: "Sales & Marketing",
      percentage: 35,
      description: "Drive customer acquisition through hiring 2-3 sales reps and a marketing lead. Budget for digital marketing campaigns.",
      icon: <CampaignIcon sx={{ fontSize: 30, color: 'white' }} />,
      color: theme.palette.secondary.main
    },
    {
      category: "Customer Success & Support",
      percentage: 15,
      description: "Invest in client onboarding and support resources. Establish a small customer success team to ensure high satisfaction.",
      icon: <SupportIcon sx={{ fontSize: 30, color: 'white' }} />,
      color: theme.palette.info.main
    },
    {
      category: "Operational Runway",
      percentage: 10,
      description: "General and administrative costs to extend our runway ~18 months. This includes legal and other overhead.",
      icon: <BusinessIcon sx={{ fontSize: 30, color: 'white' }} />,
      color: theme.palette.warning.main
    }
  ];

  // Revenue growth data for chart
  const revenueGrowth = [
    { year: "2025", value: 0.5, height: '10%' },
    { year: "2026", value: 2.0, height: '36%' },
    { year: "2027", value: 5.5, height: '100%' }
  ];

  return (
    <Box 
      component="section" 
      sx={{ 
        py: 10,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 100%)',
        borderRadius: 4
      }}
      id="financials"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <SectionTitle variant="h3">
          Financial Projections
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
          We project healthy growth as we commercialize the platform, with a path to profitability by year 3.
        </Typography>
      </motion.div>
      
      {/* Financial Projections Table */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
          3-Year Forecast
        </Typography>
        
        <TableContainer 
          component={Paper} 
          sx={{ 
            borderRadius: 3,
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            mb: 4,
            overflow: 'hidden'
          }}
          elevation={0}
        >
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableHeadCell>Year</StyledTableHeadCell>
                <StyledTableHeadCell align="right">Revenue</StyledTableHeadCell>
                <StyledTableHeadCell align="right">Expenses</StyledTableHeadCell>
                <StyledTableHeadCell align="right">Net Income</StyledTableHeadCell>
                <StyledTableHeadCell>Key Drivers</StyledTableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {financialProjections.map((row, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <StyledTableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                    {row.year}
                  </StyledTableCell>
                  <StyledTableCell align="right" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                    {row.revenue}
                  </StyledTableCell>
                  <StyledTableCell align="right" sx={{ color: theme.palette.error.main, fontWeight: 600 }}>
                    {row.expenses}
                  </StyledTableCell>
                  <StyledTableCell 
                    align="right" 
                    sx={{ 
                      color: row.netIncome.startsWith('+') ? theme.palette.success.main : theme.palette.error.main,
                      fontWeight: 600
                    }}
                  >
                    {row.netIncome}
                  </StyledTableCell>
                  <StyledTableCell>{row.keyDrivers}</StyledTableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          * All figures in USD
        </Typography>
      </Box>
      
      {/* Revenue Growth Chart - Enhanced Interactive Version */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
          Revenue Growth Projection
        </Typography>
        
        <Paper 
          sx={{ 
            p: 4, 
            borderRadius: 3,
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
            position: 'relative'
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
            <Box sx={{ height: 350, position: 'relative', mb: 2 }}>
              {/* Interactive 3D Chart */}
              <Box 
                sx={{ 
                  height: '100%', 
                  width: '100%', 
                  display: 'flex', 
                  alignItems: 'flex-end', 
                  justifyContent: 'space-around',
                  perspective: '1000px',
                  transformStyle: 'preserve-3d'
                }}
              >
                {revenueGrowth.map((item, index) => {
                  // Calculate growth percentage for display
                  const growthPercentage = index > 0 
                    ? `+${Math.round((item.value / revenueGrowth[index-1].value - 1) * 100)}%` 
                    : 'Initial';
                  
                  return (
                    <Box 
                      key={index} 
                      sx={{ 
                        width: '25%', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center',
                        transformStyle: 'preserve-3d',
                        transform: 'rotateX(5deg)',
                        position: 'relative'
                      }}
                    >
                      {/* Value label */}
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <Box
                          sx={{
                            position: 'absolute',
                            top: -60,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            bgcolor: theme.palette.background.paper,
                            color: theme.palette.text.primary,
                            py: 1,
                            px: 2,
                            borderRadius: 2,
                            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                            textAlign: 'center',
                            zIndex: 5,
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                          }}
                        >
                          <Typography variant="h6" fontWeight={700} color={theme.palette.success.main}>
                            ${item.value}M
                          </Typography>
                          <Typography variant="caption" fontWeight={600} color={theme.palette.success.main}>
                            {growthPercentage}
                          </Typography>
                        </Box>
                      </motion.div>
                      
                      {/* Bar with 3D effect */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        whileInView={{ height: item.height, opacity: 1 }}
                        transition={{ 
                          height: { duration: 1.2, delay: index * 0.3 },
                          opacity: { duration: 0.3, delay: index * 0.3 }
                        }}
                        viewport={{ once: true }}
                        style={{ 
                          width: '100%', 
                          position: 'relative',
                          transformStyle: 'preserve-3d'
                        }}
                      >
                        {/* Main front face */}
                        <Box 
                          sx={{ 
                            width: '100%', 
                            height: '100%', 
                            background: `linear-gradient(180deg, ${theme.palette.success.light} 0%, ${theme.palette.success.main} 100%)`,
                            borderRadius: '8px 8px 0 0',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                            position: 'relative',
                            transformStyle: 'preserve-3d',
                            transform: 'translateZ(0px)',
                            '&:hover': {
                              background: `linear-gradient(180deg, ${theme.palette.success.main} 0%, ${theme.palette.success.dark} 100%)`,
                            }
                          }}
                        >
                          {/* Animated pulse effect */}
                          <Box
                            component={motion.div}
                            animate={{ 
                              opacity: [0.4, 0.8, 0.4],
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              repeatType: 'loop',
                              delay: index * 0.5
                            }}
                            sx={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              borderRadius: '8px 8px 0 0',
                              background: `linear-gradient(180deg, ${theme.palette.success.main}50 0%, transparent 100%)`,
                            }}
                          />
                          
                          {/* Growth indicator */}
                          {index > 0 && (
                            <Box
                              component={motion.div}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                              viewport={{ once: true }}
                              sx={{
                                position: 'absolute',
                                top: '50%',
                                left: -30,
                                transform: 'translateY(-50%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
                              <Box
                                sx={{
                                  width: 0,
                                  height: 0,
                                  borderTop: '6px solid transparent',
                                  borderBottom: '6px solid transparent',
                                  borderLeft: `12px solid ${theme.palette.success.main}`,
                                }}
                              />
                              <Box
                                sx={{
                                  width: 30,
                                  height: 2,
                                  bgcolor: theme.palette.success.main,
                                }}
                              />
                            </Box>
                          )}
                        </Box>
                        
                        {/* Right side face for 3D effect */}
                        <Box 
                          sx={{ 
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '10px',
                            height: '100%',
                            background: theme.palette.success.dark,
                            transformOrigin: 'right center',
                            transform: 'rotateY(90deg) translateZ(5px)',
                            borderRadius: '0 8px 0 0'
                          }}
                        />
                        
                        {/* Top face for 3D effect */}
                        <Box 
                          sx={{ 
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '10px',
                            background: theme.palette.success.light,
                            transformOrigin: 'center top',
                            transform: 'rotateX(-90deg) translateZ(-5px)',
                            borderRadius: '8px 8px 0 0'
                          }}
                        />
                      </motion.div>
                      
                      {/* Year label */}
                      <Box sx={{ mt: 2, textAlign: 'center' }}>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                          viewport={{ once: true }}
                        >
                          <Typography 
                            variant="h6" 
                            fontWeight={600}
                            sx={{
                              py: 1,
                              px: 2,
                              borderRadius: 2,
                              background: 'rgba(255, 255, 255, 0.05)',
                              backdropFilter: 'blur(10px)',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                          >
                            {item.year}
                          </Typography>
                        </motion.div>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
              
              {/* Grid lines */}
              {[0, 20, 40, 60, 80, 100].map((percent, i) => (
                <Box 
                  key={i}
                  sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: `${percent}%`,
                    height: 1,
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    zIndex: 0
                  }}
                />
              ))}
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  Projected Annual Revenue
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  In millions USD
                </Typography>
              </Box>
              
              <Box
                sx={{
                  py: 1,
                  px: 2,
                  borderRadius: 2,
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <Typography variant="subtitle2" fontWeight={700} color={theme.palette.success.main}>
                  CAGR: ~230% (2025-2027)
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
      
      {/* Use of Funds - Enhanced Interactive Version */}
      <Box>
        <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
          Use of Funds ($500k for 5% Equity)
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
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.03,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}40 0%, ${theme.palette.secondary.main}40 50%, ${theme.palette.info.main}40 100%)`,
              backgroundSize: '400% 400%',
              zIndex: 0
            }}
          />
          
          {/* Circular fund allocation visualization */}
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={5}>
                <Box 
                  sx={{ 
                    position: 'relative', 
                    width: '100%', 
                    paddingBottom: '100%', 
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    overflow: 'hidden'
                  }}
                >
                  {/* Circular segments */}
                  {fundAllocation.map((item, index) => {
                    // Calculate the segment angles
                    const startPercent = fundAllocation
                      .slice(0, index)
                      .reduce((sum, i) => sum + i.percentage, 0);
                    const startAngle = (startPercent / 100) * 360;
                    const angle = (item.percentage / 100) * 360;
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
                        viewport={{ once: true }}
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          width: '100%',
                          height: '100%',
                          transformOrigin: 'center',
                          transform: 'translate(-50%, -50%)'
                        }}
                      >
                        <Box
                          component={motion.div}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: `conic-gradient(
                              ${item.color} ${startAngle}deg,
                              ${item.color} ${startAngle + angle}deg,
                              transparent ${startAngle + angle}deg,
                              transparent 360deg
                            )`,
                            borderRadius: '50%',
                            cursor: 'pointer',
                            '&:hover': {
                              boxShadow: `0 0 30px ${item.color}50`
                            },
                            '&:hover + .tooltip': {
                              opacity: 1,
                              transform: 'translate(-50%, -50%) scale(1)'
                            }
                          }}
                        />
                        
                        {/* Tooltip */}
                        <Box
                          className="tooltip"
                          sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%) scale(0.9)',
                            opacity: 0,
                            transition: 'all 0.3s ease',
                            bgcolor: 'background.paper',
                            color: 'text.primary',
                            p: 2,
                            borderRadius: 2,
                            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                            zIndex: 10,
                            width: '80%',
                            maxWidth: 220,
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            pointerEvents: 'none'
                          }}
                        >
                          <Typography variant="subtitle1" fontWeight={700} color={item.color} gutterBottom>
                            {item.category}: {item.percentage}%
                          </Typography>
                          <Typography variant="body2">
                            {item.description}
                          </Typography>
                        </Box>
                      </motion.div>
                    );
                  })}
                  
                  {/* Center circle */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '40%',
                      height: '40%',
                      borderRadius: '50%',
                      background: 'rgba(0, 0, 0, 0.5)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      zIndex: 2
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Typography variant="h4" fontWeight={800} color={theme.palette.primary.main}>
                        $500K
                      </Typography>
                      <Typography variant="caption" align="center" display="block">
                        Total Investment
                      </Typography>
                    </motion.div>
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={7}>
                <Box>
                  {fundAllocation.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Box sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Box 
                            sx={{ 
                              width: 36, 
                              height: 36, 
                              borderRadius: '50%', 
                              bgcolor: item.color,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mr: 2,
                              boxShadow: `0 4px 10px ${item.color}50`
                            }}
                          >
                            {item.icon}
                          </Box>
                          <Box sx={{ flexGrow: 1 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Typography variant="subtitle1" fontWeight={600}>
                                {item.category}
                              </Typography>
                              <Typography variant="subtitle1" fontWeight={700} color={item.color}>
                                {item.percentage}%
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        
                        <Box sx={{ position: 'relative' }}>
                          <LinearProgress 
                            variant="determinate" 
                            value={item.percentage} 
                            sx={{ 
                              height: 10, 
                              borderRadius: 5,
                              bgcolor: 'rgba(255, 255, 255, 0.1)',
                              '& .MuiLinearProgress-bar': {
                                bgcolor: item.color,
                                borderRadius: 5,
                              }
                            }} 
                          />
                          
                          {/* Animated progress indicator */}
                          <Box
                            component={motion.div}
                            initial={{ left: 0 }}
                            animate={{ left: `${item.percentage}%` }}
                            transition={{ 
                              duration: 1.5, 
                              delay: 0.5 + index * 0.2,
                              ease: "easeOut"
                            }}
                            sx={{
                              position: 'absolute',
                              top: '50%',
                              width: 16,
                              height: 16,
                              borderRadius: '50%',
                              bgcolor: 'white',
                              transform: 'translate(-50%, -50%)',
                              boxShadow: `0 0 10px ${item.color}`,
                              zIndex: 2
                            }}
                          />
                        </Box>
                        
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                          <Typography variant="caption" color="text.secondary">
                            ${Math.round(item.percentage * 5000)}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {item.percentage < 25 ? 'Low Priority' : 
                             item.percentage < 35 ? 'Medium Priority' : 'High Priority'}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Paper 
                sx={{ 
                  p: 4, 
                  borderRadius: 3,
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                elevation={0}
              >
                <Box
                  component={motion.div}
                  animate={{ 
                    y: [0, -5, 0],
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'loop'
                  }}
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    color: theme.palette.primary.main,
                    fontSize: 40,
                    opacity: 0.2
                  }}
                >
                  <AttachMoneyIcon sx={{ fontSize: 'inherit' }} />
                </Box>
                
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  Investment Terms
                </Typography>
                
                <Box sx={{ my: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Box sx={{ p: 2, borderRadius: 2, bgcolor: 'rgba(255, 255, 255, 0.05)' }}>
                        <Typography variant="body2" color="text.secondary">Investment</Typography>
                        <Typography variant="h6" fontWeight={700} color={theme.palette.primary.main}>$500,000</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={{ p: 2, borderRadius: 2, bgcolor: 'rgba(255, 255, 255, 0.05)' }}>
                        <Typography variant="body2" color="text.secondary">Equity</Typography>
                        <Typography variant="h6" fontWeight={700} color={theme.palette.primary.main}>5%</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ p: 2, borderRadius: 2, bgcolor: 'rgba(255, 255, 255, 0.05)' }}>
                        <Typography variant="body2" color="text.secondary">Valuation</Typography>
                        <Typography variant="h6" fontWeight={700} color={theme.palette.primary.main}>$10,000,000</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                
                <Typography variant="body2">
                  This seed round will provide the capital needed to accelerate our go-to-market strategy and reach profitability by 2027.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Paper 
                sx={{ 
                  p: 4, 
                  borderRadius: 3,
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                elevation={0}
              >
                <Box
                  component={motion.div}
                  animate={{ 
                    y: [0, -5, 0],
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'loop',
                    delay: 1
                  }}
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    color: theme.palette.success.main,
                    fontSize: 40,
                    opacity: 0.2
                  }}
                >
                  <TrendingUpIcon sx={{ fontSize: 'inherit' }} />
                </Box>
                
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  Expected Outcomes
                </Typography>
                
                <Box sx={{ my: 2 }}>
                  <Box 
                    component={motion.div}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      p: 1.5, 
                      mb: 1.5,
                      borderRadius: 2,
                      bgcolor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <Box 
                      sx={{ 
                        width: 8, 
                        height: 8, 
                        borderRadius: '50%', 
                        bgcolor: theme.palette.success.main,
                        mr: 2
                      }}
                    />
                    <Typography variant="body2">
                      <strong>~18 months runway</strong> until mid-2026
                    </Typography>
                  </Box>
                  
                  <Box 
                    component={motion.div}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      p: 1.5, 
                      mb: 1.5,
                      borderRadius: 2,
                      bgcolor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <Box 
                      sx={{ 
                        width: 8, 
                        height: 8, 
                        borderRadius: '50%', 
                        bgcolor: theme.palette.success.main,
                        mr: 2
                      }}
                    />
                    <Typography variant="body2">
                      <strong>100+ paying customers</strong> by end of 2026
                    </Typography>
                  </Box>
                  
                  <Box 
                    component={motion.div}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <Box 
                      sx={{ 
                        width: 8, 
                        height: 8, 
                        borderRadius: '50%', 
                        bgcolor: theme.palette.success.main,
                        mr: 2
                      }}
                    />
                    <Typography variant="body2">
                      <strong>Profitability or Series A</strong> position by mid-2026
                    </Typography>
                  </Box>
                </Box>
                
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Our lean approach and prior progress (product already built) mean every dollar will accelerate go-to-market rather than basic R&D.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default InvestorRelationsFinancials;
