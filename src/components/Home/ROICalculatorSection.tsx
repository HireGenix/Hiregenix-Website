'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  alpha,
  Paper,
  Chip,
  Slider,
  TextField,
  InputAdornment,
  Button,
  Divider
} from '@mui/material';
import {
  Calculate as CalculateIcon,
  TrendingUp as TrendingUpIcon,
  AccessTime as AccessTimeIcon,
  AttachMoney as AttachMoneyIcon,
  People as PeopleIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

export const ROICalculatorSection: React.FC = () => {
  const theme = useTheme();

  // State for calculator inputs
  const [hiresPerYear, setHiresPerYear] = useState<number>(50);
  const [avgSalary, setAvgSalary] = useState<number>(80000);
  const [timeToHire, setTimeToHire] = useState<number>(45);
  const [costPerHire, setCostPerHire] = useState<number>(4500);
  
  // State for calculated results
  const [results, setResults] = useState({
    timeSavings: 0,
    costSavings: 0,
    qualityImprovement: 0,
    totalROI: 0
  });

  // Calculate ROI whenever inputs change
  useEffect(() => {
    // Calculate time savings (days)
    const timeSavings = timeToHire * 0.37; // 37% average reduction
    
    // Calculate cost savings
    const costSavings = hiresPerYear * costPerHire * 0.28; // 28% average reduction
    
    // Calculate quality improvement (reduced turnover costs)
    const qualityImprovement = hiresPerYear * (avgSalary * 0.25) * 0.15; // 15% reduction in turnover (25% of salary is turnover cost)
    
    // Calculate total ROI
    const totalROI = costSavings + qualityImprovement - 25000; // Assuming $25k annual platform cost
    
    setResults({
      timeSavings,
      costSavings,
      qualityImprovement,
      totalROI
    });
  }, [hiresPerYear, avgSalary, timeToHire, costPerHire]);

  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '40%',
          left: '5%',
          width: '30%',
          height: '30%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.light, 0.1)} 0%, rgba(255,255,255,0) 70%)`,
          filter: 'blur(60px)',
          zIndex: 1
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip 
            label="ROI CALCULATOR" 
            color="primary" 
            size="small"
            sx={{ 
              mb: 2, 
              fontWeight: 600,
              background: alpha(theme.palette.primary.main, 0.1),
              border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
              color: theme.palette.primary.main,
            }} 
          />
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
              mb: 2,
              background: `linear-gradient(90deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Calculate Your Potential Savings
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="text.secondary"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              fontWeight: 400,
              maxWidth: 700,
              mx: 'auto',
              mb: 6
            }}
          >
            See how HireGenix can transform your recruitment process and deliver measurable ROI
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: '24px',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  height: '100%'
                }}
              >
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 4,
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <CalculateIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                  Input Your Numbers
                </Typography>

                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="subtitle1" fontWeight={600}>
                      Annual Hires
                    </Typography>
                    <TextField
                      size="small"
                      value={hiresPerYear}
                      onChange={(e) => setHiresPerYear(Number(e.target.value))}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PeopleIcon fontSize="small" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ width: 120 }}
                    />
                  </Box>
                  <Slider
                    value={hiresPerYear}
                    onChange={(_, value) => setHiresPerYear(value as number)}
                    min={10}
                    max={500}
                    step={5}
                    valueLabelDisplay="auto"
                    color="primary"
                  />
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="subtitle1" fontWeight={600}>
                      Average Salary
                    </Typography>
                    <TextField
                      size="small"
                      value={avgSalary}
                      onChange={(e) => setAvgSalary(Number(e.target.value))}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AttachMoneyIcon fontSize="small" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ width: 120 }}
                    />
                  </Box>
                  <Slider
                    value={avgSalary}
                    onChange={(_, value) => setAvgSalary(value as number)}
                    min={30000}
                    max={200000}
                    step={5000}
                    valueLabelDisplay="auto"
                    color="primary"
                  />
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="subtitle1" fontWeight={600}>
                      Current Time to Hire (days)
                    </Typography>
                    <TextField
                      size="small"
                      value={timeToHire}
                      onChange={(e) => setTimeToHire(Number(e.target.value))}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccessTimeIcon fontSize="small" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ width: 120 }}
                    />
                  </Box>
                  <Slider
                    value={timeToHire}
                    onChange={(_, value) => setTimeToHire(value as number)}
                    min={15}
                    max={90}
                    step={1}
                    valueLabelDisplay="auto"
                    color="primary"
                  />
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="subtitle1" fontWeight={600}>
                      Current Cost per Hire
                    </Typography>
                    <TextField
                      size="small"
                      value={costPerHire}
                      onChange={(e) => setCostPerHire(Number(e.target.value))}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AttachMoneyIcon fontSize="small" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ width: 120 }}
                    />
                  </Box>
                  <Slider
                    value={costPerHire}
                    onChange={(_, value) => setCostPerHire(value as number)}
                    min={1000}
                    max={10000}
                    step={100}
                    valueLabelDisplay="auto"
                    color="primary"
                  />
                </Box>

                <Box sx={{ textAlign: 'center', mt: 4 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', mb: 2 }}>
                    Based on industry averages and customer data. Results may vary.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: '50px',
                      fontWeight: 600
                    }}
                  >
                    Get Detailed Analysis
                  </Button>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: '24px',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  height: '100%'
                }}
              >
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 4,
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <TrendingUpIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                  Your Potential ROI
                </Typography>

                <Box
                  sx={{
                    p: 3,
                    borderRadius: '16px',
                    background: alpha(theme.palette.success.light, 0.1),
                    border: `1px solid ${alpha(theme.palette.success.light, 0.3)}`,
                    mb: 4
                  }}
                >
                  <Typography variant="h5" fontWeight={700} color="success.main" gutterBottom>
                    ${results.totalROI.toLocaleString()}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Estimated Annual ROI
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Based on your inputs, this is your potential annual return on investment after platform costs.
                  </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Breakdown of Benefits
                </Typography>

                <Grid container spacing={3} sx={{ mb: 4 }}>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: '12px',
                        background: alpha(theme.palette.primary.light, 0.05),
                        border: `1px solid ${alpha(theme.palette.primary.light, 0.1)}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AccessTimeIcon sx={{ color: theme.palette.primary.main, mr: 2 }} />
                        <Box>
                          <Typography variant="subtitle2" fontWeight={600}>
                            Time Savings
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {Math.round(results.timeSavings)} days faster per hire
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="h6" fontWeight={700} color="primary.main">
                        {Math.round(results.timeSavings * hiresPerYear)} days/year
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: '12px',
                        background: alpha(theme.palette.primary.light, 0.05),
                        border: `1px solid ${alpha(theme.palette.primary.light, 0.1)}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AttachMoneyIcon sx={{ color: theme.palette.primary.main, mr: 2 }} />
                        <Box>
                          <Typography variant="subtitle2" fontWeight={600}>
                            Cost per Hire Reduction
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            28% average reduction
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="h6" fontWeight={700} color="primary.main">
                        ${Math.round(results.costSavings).toLocaleString()}
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: '12px',
                        background: alpha(theme.palette.primary.light, 0.05),
                        border: `1px solid ${alpha(theme.palette.primary.light, 0.1)}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <PeopleIcon sx={{ color: theme.palette.primary.main, mr: 2 }} />
                        <Box>
                          <Typography variant="subtitle2" fontWeight={600}>
                            Quality of Hire Improvement
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            15% reduction in turnover costs
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="h6" fontWeight={700} color="primary.main">
                        ${Math.round(results.qualityImprovement).toLocaleString()}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Box sx={{ textAlign: 'center', mt: 4 }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: '50px',
                      fontWeight: 600
                    }}
                  >
                    Schedule ROI Consultation
                  </Button>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
