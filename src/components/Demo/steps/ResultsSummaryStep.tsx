'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
  Chip,
  Alert,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Avatar,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Slider,
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
  AttachMoney,
  Speed,
  Star,
  CheckCircle,
  Download,
  Email,
  Share,
  Psychology,
  Analytics,
  EmojiEvents,
  Celebration,
  AccountBalance,
  Timer,
  BusinessCenter,
  ContactSupport,
  GetApp,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useDemoStore } from '@/stores/demoStore';

const ROICard: React.FC<{
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
  color?: 'primary' | 'success' | 'warning' | 'error';
  trend?: 'up' | 'down';
  trendValue?: string;
}> = ({ title, value, subtitle, icon, color = 'primary', trend, trendValue }) => {
  const getTrendIcon = () => {
    switch (trend) {
      case 'up': return <TrendingUp color="success" sx={{ fontSize: 20 }} />;
      case 'down': return <TrendingDown color="error" sx={{ fontSize: 20 }} />;
      default: return null;
    }
  };

  return (
    <Card elevation={3} sx={{ height: '100%', background: 'linear-gradient(135deg, #ffffff 0%, #f8faff 100%)' }}>
      <CardContent sx={{ textAlign: 'center', p: 3 }}>
        <Box color={`${color}.main`} mb={2}>
          {icon}
        </Box>
        <Typography variant="h3" color={`${color}.main`} fontWeight={700} gutterBottom>
          {value}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {subtitle}
          </Typography>
        )}
        {trend && trendValue && (
          <Box display="flex" alignItems="center" justifyContent="center" gap={1} mt={2}>
            {getTrendIcon()}
            <Typography variant="body2" color={trend === 'up' ? 'success.main' : 'error.main'} fontWeight={600}>
              {trendValue}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

const ResultsSummaryStep: React.FC = () => {
  const {
    jobCreation,
    selectedCandidate,
    skillsAssessment,
    videoInterview,
    workforceAnalytics,
    roiMetrics,
    calculateROI,
    resetDemo,
  } = useDemoStore();

  const [showROICalculator, setShowROICalculator] = useState(false);
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [customMetrics, setCustomMetrics] = useState({
    currentTimeToHire: 45,
    currentCostPerHire: 5000,
    monthlyHires: 10,
  });

  useEffect(() => {
    if (workforceAnalytics && !roiMetrics) {
      calculateROI();
    }
  }, [workforceAnalytics, roiMetrics, calculateROI]);

  const handleTryAgain = () => {
    resetDemo();
  };

  const handleContactSales = () => {
    setShowContactDialog(true);
  };

  const calculateCustomROI = () => {
    const timeReduction = Math.max(0, customMetrics.currentTimeToHire - (workforceAnalytics?.averageTimeToHire || 20));
    const costSavings = Math.max(0, customMetrics.currentCostPerHire - (workforceAnalytics?.costPerHire || 3000));
    const annualSavings = costSavings * customMetrics.monthlyHires * 12;
    
    return {
      timeReduction,
      costSavings,
      annualSavings,
      efficiencyGain: Math.round((timeReduction / customMetrics.currentTimeToHire) * 100),
    };
  };

  const customROI = calculateCustomROI();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (!roiMetrics || !workforceAnalytics) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" py={8}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Calculating your ROI and generating final results...
        </Typography>
        <LinearProgress sx={{ width: '100%', maxWidth: 400, height: 8, borderRadius: 4 }} />
      </Box>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Box>
        {/* Celebration Header */}
        <motion.div variants={itemVariants}>
          <Card elevation={4} sx={{ mb: 4, background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)', color: 'white' }}>
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              <Celebration sx={{ fontSize: 60, mb: 2 }} />
              <Typography variant="h3" fontWeight={700} gutterBottom>
                🎉 Demo Complete!
              </Typography>
              <Typography variant="h5" gutterBottom>
                You&apos;ve Successfully Experienced HireGenix AI
              </Typography>
              <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', opacity: 0.9 }}>
                Congratulations! You&apos;ve just seen how HireGenix transforms the entire recruitment process
                from job creation to final hiring decisions with powerful AI insights.
              </Typography>
            </CardContent>
          </Card>
        </motion.div>

        {/* Journey Summary */}
        <motion.div variants={itemVariants}>
          <Card elevation={2} sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircle /> Your HireGenix Journey
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={2.4}>
                  <Box textAlign="center" p={2}>
                    <BusinessCenter color="primary" sx={{ fontSize: 40, mb: 1 }} />
                    <Typography variant="h6" gutterBottom>Job Created</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {jobCreation?.title}
                    </Typography>
                    <Chip label="✓ Complete" color="success" size="small" sx={{ mt: 1 }} />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={2.4}>
                  <Box textAlign="center" p={2}>
                    <Psychology color="primary" sx={{ fontSize: 40, mb: 1 }} />
                    <Typography variant="h6" gutterBottom>AI Matching</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {workforceAnalytics.totalApplications} candidates analyzed
                    </Typography>
                    <Chip label="✓ Complete" color="success" size="small" sx={{ mt: 1 }} />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={2.4}>
                  <Box textAlign="center" p={2}>
                    <Star color="primary" sx={{ fontSize: 40, mb: 1 }} />
                    <Typography variant="h6" gutterBottom>Assessment</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {skillsAssessment?.score}% score achieved
                    </Typography>
                    <Chip label="✓ Complete" color="success" size="small" sx={{ mt: 1 }} />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={2.4}>
                  <Box textAlign="center" p={2}>
                    <EmojiEvents color="primary" sx={{ fontSize: 40, mb: 1 }} />
                    <Typography variant="h6" gutterBottom>Interview</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {videoInterview?.overallScore}% performance
                    </Typography>
                    <Chip label="✓ Complete" color="success" size="small" sx={{ mt: 1 }} />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={2.4}>
                  <Box textAlign="center" p={2}>
                    <Analytics color="primary" sx={{ fontSize: 40, mb: 1 }} />
                    <Typography variant="h6" gutterBottom>Analytics</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Insights generated
                    </Typography>
                    <Chip label="✓ Complete" color="success" size="small" sx={{ mt: 1 }} />
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </motion.div>

        {/* ROI Results */}
        <motion.div variants={itemVariants}>
          <Typography variant="h5" gutterBottom color="primary" sx={{ mb: 3 }}>
            📊 Your ROI with HireGenix
          </Typography>
          
          <Grid container spacing={3} mb={4}>
            <Grid item xs={12} sm={6} lg={3}>
              <ROICard
                title="Time Savings"
                value={`${roiMetrics.timeToHireReduction}%`}
                subtitle="Faster hiring process"
                icon={<Timer sx={{ fontSize: 40 }} />}
                color="success"
                trend="up"
                trendValue={`${Math.round(workforceAnalytics.averageTimeToHire * 0.33)} days saved`}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <ROICard
                title="Cost Reduction"
                value={`$${roiMetrics.costSavings.toLocaleString()}`}
                subtitle="Per hire savings"
                icon={<AttachMoney sx={{ fontSize: 40 }} />}
                color="success"
                trend="down"
                trendValue="40% cost reduction"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <ROICard
                title="Quality Improvement"
                value={`+${roiMetrics.qualityImprovement}%`}
                subtitle="Better hire quality"
                icon={<Star sx={{ fontSize: 40 }} />}
                color="warning"
                trend="up"
                trendValue="Higher retention"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <ROICard
                title="Annual Savings"
                value={`$${roiMetrics.annualSavings.toLocaleString()}`}
                subtitle="Total yearly savings"
                icon={<AccountBalance sx={{ fontSize: 40 }} />}
                color="primary"
                trend="up"
                trendValue="ROI: 280%"
              />
            </Grid>
          </Grid>
        </motion.div>

        {/* Selected Candidate Summary */}
        {selectedCandidate && (
          <motion.div variants={itemVariants}>
            <Card elevation={2} sx={{ mb: 4 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  🎯 Recommended Hire: {selectedCandidate.name}
                </Typography>
                
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs={12} md={3}>
                    <Box display="flex" alignItems="center" gap={2}>
                      <Avatar
                        src={selectedCandidate.avatar}
                        sx={{ width: 80, height: 80 }}
                      >
                        {selectedCandidate.name.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography variant="h6">{selectedCandidate.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {selectedCandidate.experience} years experience
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {selectedCandidate.location}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Grid container spacing={2}>
                      <Grid item xs={6} sm={3}>
                        <Box textAlign="center">
                          <Typography variant="h4" color="success.main" fontWeight={700}>
                            {selectedCandidate.matchScore}%
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            AI Match Score
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <Box textAlign="center">
                          <Typography variant="h4" color="primary.main" fontWeight={700}>
                            {skillsAssessment?.score}%
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Technical Score
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <Box textAlign="center">
                          <Typography variant="h4" color="warning.main" fontWeight={700}>
                            {videoInterview?.overallScore}%
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Interview Score
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <Box textAlign="center">
                          <Typography variant="h4" color="success.main" fontWeight={700}>
                            {Math.round((selectedCandidate.matchScore + (skillsAssessment?.score || 0) + (videoInterview?.overallScore || 0)) / 3)}%
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Overall Score
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* ROI Calculator */}
        <motion.div variants={itemVariants}>
          <Card elevation={2} sx={{ mb: 4 }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h6" color="primary">
                  🧮 Customize Your ROI Calculation
                </Typography>
                <Button
                  variant="outlined"
                  onClick={() => setShowROICalculator(!showROICalculator)}
                >
                  {showROICalculator ? 'Hide' : 'Show'} Calculator
                </Button>
              </Box>

              {showROICalculator && (
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Typography variant="subtitle2" gutterBottom>
                      Current Time to Hire (days)
                    </Typography>
                    <Slider
                      value={customMetrics.currentTimeToHire}
                      onChange={(_, value) => setCustomMetrics(prev => ({ ...prev, currentTimeToHire: value as number }))}
                      min={20}
                      max={90}
                      marks
                      valueLabelDisplay="on"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="subtitle2" gutterBottom>
                      Current Cost per Hire ($)
                    </Typography>
                    <Slider
                      value={customMetrics.currentCostPerHire}
                      onChange={(_, value) => setCustomMetrics(prev => ({ ...prev, currentCostPerHire: value as number }))}
                      min={2000}
                      max={10000}
                      step={500}
                      marks
                      valueLabelDisplay="on"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="subtitle2" gutterBottom>
                      Monthly Hires
                    </Typography>
                    <Slider
                      value={customMetrics.monthlyHires}
                      onChange={(_, value) => setCustomMetrics(prev => ({ ...prev, monthlyHires: value as number }))}
                      min={1}
                      max={50}
                      marks
                      valueLabelDisplay="on"
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Alert severity="success">
                      <Typography variant="h6" gutterBottom>
                        Your Custom ROI: ${customROI.annualSavings.toLocaleString()} annually
                      </Typography>
                      <Typography variant="body2">
                        • Save {customROI.timeReduction} days per hire ({customROI.efficiencyGain}% efficiency gain)
                        <br />
                        • Reduce costs by ${customROI.costSavings.toLocaleString()} per hire
                        <br />
                        • Total annual savings: ${customROI.annualSavings.toLocaleString()}
                      </Typography>
                    </Alert>
                  </Grid>
                </Grid>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Next Steps */}
        <motion.div variants={itemVariants}>
          <Card elevation={3} sx={{ background: 'linear-gradient(135deg, #f8faff 0%, #e8f3ff 100%)' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom color="primary" textAlign="center">
                Ready to Transform Your Hiring Process?
              </Typography>
              
              <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item xs={12} md={4}>
                  <Box textAlign="center">
                    <Button
                      variant="contained"
                      size="large"
                      fullWidth
                      onClick={handleContactSales}
                      sx={{ py: 2, mb: 2 }}
                    >
                      <Box>
                        <ContactSupport sx={{ fontSize: 24, mb: 1 }} />
                        <Typography variant="body1">Contact Sales</Typography>
                      </Box>
                    </Button>
                    <Typography variant="body2" color="text.secondary">
                      Get a personalized demo and pricing
                    </Typography>
                  </Box>
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <Box textAlign="center">
                    <Button
                      variant="outlined"
                      size="large"
                      fullWidth
                      onClick={handleTryAgain}
                      sx={{ py: 2, mb: 2 }}
                    >
                      <Box>
                        <Analytics sx={{ fontSize: 24, mb: 1 }} />
                        <Typography variant="body1">Try Different Scenario</Typography>
                      </Box>
                    </Button>
                    <Typography variant="body2" color="text.secondary">
                      Explore with different job requirements
                    </Typography>
                  </Box>
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <Box textAlign="center">
                    <Button
                      variant="outlined"
                      size="large"
                      fullWidth
                      startIcon={<GetApp />}
                      sx={{ py: 2, mb: 2 }}
                    >
                      Download Report
                    </Button>
                    <Typography variant="body2" color="text.secondary">
                      Get a PDF summary of your demo
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Box mt={4} textAlign="center">
                <Typography variant="body1" color="text.secondary">
                  Join 500+ companies already using HireGenix to revolutionize their hiring process
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Dialog */}
        <Dialog open={showContactDialog} onClose={() => setShowContactDialog(false)} maxWidth="sm" fullWidth>
          <DialogTitle>
            Get Started with HireGenix
          </DialogTitle>
          <DialogContent>
            <Typography variant="body1" paragraph>
              Thank you for trying our demo! Our sales team will contact you to discuss:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" />
                </ListItemIcon>
                <ListItemText primary="Custom implementation for your organization" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" />
                </ListItemIcon>
                <ListItemText primary="Pricing options and enterprise features" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" />
                </ListItemIcon>
                <ListItemText primary="Integration with your existing HR systems" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" />
                </ListItemIcon>
                <ListItemText primary="Training and onboarding support" />
              </ListItem>
            </List>
            
            <Box mt={2}>
              <TextField
                fullWidth
                label="Your Email"
                variant="outlined"
                placeholder="Enter your work email"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Company Name"
                variant="outlined"
                placeholder="Your company name"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Phone (Optional)"
                variant="outlined"
                placeholder="Your phone number"
              />
            </Box>
          </DialogContent>
          <DialogActions sx={{ p: 3 }}>
            <Button onClick={() => setShowContactDialog(false)}>
              Maybe Later
            </Button>
            <Button variant="contained" onClick={() => setShowContactDialog(false)}>
              Contact Me
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </motion.div>
  );
};

export default ResultsSummaryStep;