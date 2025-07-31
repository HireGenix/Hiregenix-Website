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
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
} from '@mui/material';
import {
  Analytics,
  TrendingUp,
  TrendingDown,
  People,
  Speed,
  AttachMoney,
  Schedule,
  Star,
  WorkOutline,
  Assessment,
  PieChart,
  BarChart,
  ShowChart,
  Diversity3,
  Psychology,
  EmojiEvents,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useDemoStore } from '@/stores/demoStore';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`analytics-tabpanel-${index}`}
      aria-labelledby={`analytics-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const MetricCard: React.FC<{
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
  color?: 'primary' | 'success' | 'warning' | 'error';
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}> = ({ title, value, subtitle, icon, color = 'primary', trend, trendValue }) => {
  const getTrendIcon = () => {
    switch (trend) {
      case 'up': return <TrendingUp color="success" />;
      case 'down': return <TrendingDown color="error" />;
      default: return null;
    }
  };

  return (
    <Card elevation={2} sx={{ height: '100%' }}>
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
            <Typography variant="body2" color={trend === 'up' ? 'success.main' : 'error.main'}>
              {trendValue}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

const WorkforceAnalyticsStep: React.FC = () => {
  const {
    workforceAnalytics,
    generateAnalytics,
    candidates,
    isLoading,
    nextStep,
  } = useDemoStore();

  const [tabValue, setTabValue] = useState(0);
  const [generatingAnalytics, setGeneratingAnalytics] = useState(false);

  useEffect(() => {
    if (!workforceAnalytics && candidates.length > 0) {
      setGeneratingAnalytics(true);
      generateAnalytics();
    }
  }, [workforceAnalytics, candidates, generateAnalytics]);

  useEffect(() => {
    if (workforceAnalytics && generatingAnalytics) {
      setGeneratingAnalytics(false);
    }
  }, [workforceAnalytics, generatingAnalytics]);

  const handleContinue = () => {
    nextStep();
  };

  if (!candidates.length) {
    return (
      <Alert severity="warning">
        Please complete the previous steps to generate workforce analytics.
      </Alert>
    );
  }

  if (isLoading || generatingAnalytics || !workforceAnalytics) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" py={8}>
        <CircularProgress size={80} thickness={4} />
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          🤖 Generating Workforce Analytics...
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, textAlign: 'center' }}>
          AI is analyzing hiring patterns, candidate data, and generating predictive insights
        </Typography>
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <LinearProgress sx={{ height: 8, borderRadius: 4 }} />
        </Box>
      </Box>
    );
  }

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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Box>
        {/* Success Alert */}
        <motion.div variants={itemVariants}>
          <Alert severity="success" sx={{ mb: 3 }}>
            🎉 Analytics generated successfully! Your comprehensive workforce insights are ready.
          </Alert>
        </motion.div>

        {/* Key Metrics Overview */}
        <motion.div variants={itemVariants}>
          <Grid container spacing={3} mb={4}>
            <Grid item xs={12} sm={6} lg={3}>
              <MetricCard
                title="Total Applications"
                value={workforceAnalytics.totalApplications}
                subtitle="This recruitment cycle"
                icon={<People sx={{ fontSize: 40 }} />}
                color="primary"
                trend="up"
                trendValue="+15%"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <MetricCard
                title="Avg. Time to Hire"
                value={`${workforceAnalytics.averageTimeToHire} days`}
                subtitle="33% faster than industry"
                icon={<Schedule sx={{ fontSize: 40 }} />}
                color="success"
                trend="down"
                trendValue="-8 days"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <MetricCard
                title="Cost per Hire"
                value={`$${workforceAnalytics.costPerHire.toLocaleString()}`}
                subtitle="Below industry average"
                icon={<AttachMoney sx={{ fontSize: 40 }} />}
                color="warning"
                trend="down"
                trendValue="-$500"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <MetricCard
                title="Quality of Hire"
                value={`${workforceAnalytics.qualityOfHire}%`}
                subtitle="Excellent performance"
                icon={<Star sx={{ fontSize: 40 }} />}
                color="success"
                trend="up"
                trendValue="+12%"
              />
            </Grid>
          </Grid>
        </motion.div>

        {/* Detailed Analytics Tabs */}
        <motion.div variants={itemVariants}>
          <Card elevation={3}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={tabValue} onChange={(_, newValue) => setTabValue(newValue)}>
                <Tab 
                  label="Skills Analysis" 
                  icon={<Psychology />} 
                  iconPosition="start"
                />
                <Tab 
                  label="Department Insights" 
                  icon={<WorkOutline />} 
                  iconPosition="start"
                />
                <Tab 
                  label="Diversity Metrics" 
                  icon={<Diversity3 />} 
                  iconPosition="start"
                />
                <Tab 
                  label="Predictions" 
                  icon={<ShowChart />} 
                  iconPosition="start"
                />
              </Tabs>
            </Box>

            {/* Skills Analysis Tab */}
            <TabPanel value={tabValue} index={0}>
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <BarChart /> Top Skills in Demand
                </Typography>
                
                <Grid container spacing={3}>
                  <Grid item xs={12} md={8}>
                    {workforceAnalytics.topSkills.slice(0, 8).map((skill, index) => (
                      <Box key={skill.skill} mb={2}>
                        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                          <Typography variant="body1" fontWeight={500}>
                            {skill.skill}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {skill.demand}% demand
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.demand}
                          sx={{ 
                            height: 8, 
                            borderRadius: 4,
                            backgroundColor: 'grey.200',
                            '& .MuiLinearProgress-bar': {
                              backgroundColor: `hsl(${220 - index * 20}, 70%, 50%)`,
                            }
                          }}
                        />
                      </Box>
                    ))}
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Paper elevation={1} sx={{ p: 3, backgroundColor: 'background.default' }}>
                      <Typography variant="h6" gutterBottom>
                        📊 Skills Insights
                      </Typography>
                      <List dense>
                        <ListItem>
                          <ListItemIcon>
                            <TrendingUp color="success" />
                          </ListItemIcon>
                          <ListItemText
                            primary="JavaScript"
                            secondary="Most in-demand skill"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <Psychology color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary="AI/ML Skills"
                            secondary="Rapidly growing demand"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <EmojiEvents color="warning" />
                          </ListItemIcon>
                          <ListItemText
                            primary="Cloud Platforms"
                            secondary="Critical for modern roles"
                          />
                        </ListItem>
                      </List>
                    </Paper>
                  </Grid>
                </Grid>
              </CardContent>
            </TabPanel>

            {/* Department Insights Tab */}
            <TabPanel value={tabValue} index={1}>
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Assessment /> Department Hiring Analysis
                </Typography>
                
                <TableContainer component={Paper} elevation={1}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell><strong>Department</strong></TableCell>
                        <TableCell align="center"><strong>Open Positions</strong></TableCell>
                        <TableCell align="center"><strong>Filled Positions</strong></TableCell>
                        <TableCell align="center"><strong>Fill Rate</strong></TableCell>
                        <TableCell align="center"><strong>Status</strong></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {workforceAnalytics.departmentStats.map((dept) => {
                        const fillRate = Math.round((dept.filled / (dept.openings + dept.filled)) * 100);
                        return (
                          <TableRow key={dept.department}>
                            <TableCell component="th" scope="row">
                              {dept.department}
                            </TableCell>
                            <TableCell align="center">{dept.openings}</TableCell>
                            <TableCell align="center">{dept.filled}</TableCell>
                            <TableCell align="center">
                              <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
                                <LinearProgress
                                  variant="determinate"
                                  value={fillRate}
                                  sx={{ width: 60, height: 6, borderRadius: 3 }}
                                  color={fillRate >= 70 ? 'success' : fillRate >= 50 ? 'warning' : 'error'}
                                />
                                <Typography variant="body2">{fillRate}%</Typography>
                              </Box>
                            </TableCell>
                            <TableCell align="center">
                              <Chip
                                label={fillRate >= 70 ? 'Excellent' : fillRate >= 50 ? 'Good' : 'Needs Focus'}
                                color={fillRate >= 70 ? 'success' : fillRate >= 50 ? 'warning' : 'error'}
                                variant="outlined"
                                size="small"
                              />
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </TabPanel>

            {/* Diversity Metrics Tab */}
            <TabPanel value={tabValue} index={2}>
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Diversity3 /> Diversity & Inclusion Metrics
                </Typography>
                
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                      Gender Distribution
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Box textAlign="center">
                          <Typography variant="h4" color="primary.main" fontWeight={700}>
                            {workforceAnalytics.diversityMetrics.gender.male}%
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Male
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box textAlign="center">
                          <Typography variant="h4" color="secondary.main" fontWeight={700}>
                            {workforceAnalytics.diversityMetrics.gender.female}%
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Female
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box textAlign="center">
                          <Typography variant="h4" color="success.main" fontWeight={700}>
                            {workforceAnalytics.diversityMetrics.gender.other}%
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Other
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                      Experience Distribution
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Box textAlign="center">
                          <Typography variant="h4" color="info.main" fontWeight={700}>
                            {workforceAnalytics.diversityMetrics.experience.junior}%
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Junior
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box textAlign="center">
                          <Typography variant="h4" color="warning.main" fontWeight={700}>
                            {workforceAnalytics.diversityMetrics.experience.mid}%
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Mid-Level
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box textAlign="center">
                          <Typography variant="h4" color="error.main" fontWeight={700}>
                            {workforceAnalytics.diversityMetrics.experience.senior}%
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Senior
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Box mt={4}>
                  <Alert severity="info">
                    <Typography variant="body2">
                      <strong>Diversity Goals:</strong> Your current diversity metrics are within industry standards. 
                      Consider targeted outreach programs to further improve gender balance in technical roles.
                    </Typography>
                  </Alert>
                </Box>
              </CardContent>
            </TabPanel>

            {/* Predictions Tab */}
            <TabPanel value={tabValue} index={3}>
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <ShowChart /> AI-Powered Predictions
                </Typography>
                
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Card elevation={1} sx={{ p: 3, backgroundColor: 'background.default' }}>
                      <Typography variant="h6" gutterBottom>
                        📈 Hiring Predictions
                      </Typography>
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <People color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary={`${workforceAnalytics.predictedHires} predicted hires`}
                            secondary="Next 30 days based on current pipeline"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <TrendingUp color="success" />
                          </ListItemIcon>
                          <ListItemText
                            primary="25% increase in applications"
                            secondary="Expected for Q2 based on seasonal trends"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <Speed color="warning" />
                          </ListItemIcon>
                          <ListItemText
                            primary="15% faster hiring"
                            secondary="With AI-powered candidate matching"
                          />
                        </ListItem>
                      </List>
                    </Card>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Card elevation={1} sx={{ p: 3, backgroundColor: 'background.default' }}>
                      <Typography variant="h6" gutterBottom>
                        🎯 Recommendations
                      </Typography>
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <Psychology color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary="Focus on JavaScript roles"
                            secondary="Highest demand and candidate availability"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <Schedule color="success" />
                          </ListItemIcon>
                          <ListItemText
                            primary="Optimize interview process"
                            secondary="Reduce time-to-hire by 3-5 days"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <AttachMoney color="warning" />
                          </ListItemIcon>
                          <ListItemText
                            primary="Adjust salary ranges"
                            secondary="For competitive positioning in market"
                          />
                        </ListItem>
                      </List>
                    </Card>
                  </Grid>
                </Grid>
              </CardContent>
            </TabPanel>
          </Card>
        </motion.div>

        {/* Action Button */}
        <motion.div variants={itemVariants}>
          <Box textAlign="center" mt={4}>
            <Button
              variant="contained"
              size="large"
              onClick={handleContinue}
              sx={{ px: 4, py: 1.5 }}
            >
              View ROI Summary & Results
            </Button>
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default WorkforceAnalyticsStep;