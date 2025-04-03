'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  Divider,
  Switch,
  FormControlLabel,
  Alert,
  Snackbar,
  Tab,
  Tabs,
  alpha,
  useTheme,
  styled,
  CircularProgress,
  Chip,
} from '@mui/material';
import {
  Analytics as AnalyticsIcon,
  Save as SaveIcon,
  Refresh as RefreshIcon,
  Code as CodeIcon,
  BarChart as BarChartIcon,
  Timeline as TimelineIcon,
  PieChart as PieChartIcon,
  ShowChart as ShowChartIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { WidgetCard, containerVariants, itemVariants } from '@/components/Dashboard/DashboardComponents';

// Styled components
const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
  marginBottom: theme.spacing(3),
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.primary.main,
    height: 3,
    borderRadius: '3px 3px 0 0',
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '0.875rem',
  padding: theme.spacing(1.5, 2),
  transition: 'all 0.2s',
  '&.Mui-selected': {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
  },
}));

const CodeBlock = styled(Box)(({ theme }) => ({
  fontFamily: 'monospace',
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  padding: theme.spacing(2),
  borderRadius: 8,
  overflowX: 'auto',
  fontSize: '0.875rem',
  border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
}));

const ChartPlaceholder = styled(Box)(({ theme }) => ({
  height: 300,
  backgroundColor: alpha(theme.palette.background.paper, 0.5),
  borderRadius: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  border: `1px dashed ${alpha(theme.palette.divider, 0.8)}`,
  padding: theme.spacing(2),
}));

// Analytics page component
export default function AnalyticsPage() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [analyticsConfig, setAnalyticsConfig] = useState({
    googleAnalyticsId: '',
    googleTagManagerId: '',
    facebookPixelId: '',
    linkedInInsightTag: '',
    enableEcommerce: false,
    enableUserTracking: true,
    enableDemographics: true,
    customDimensions: '',
  });

  // Fetch analytics configuration
  useEffect(() => {
    const fetchAnalyticsConfig = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/analytics');
        
        if (!response.ok) {
          throw new Error('Failed to fetch analytics configuration');
        }
        
        const data = await response.json();
        
        // Convert customDimensions object to string if it exists
        let customDimensionsStr = '';
        if (data.customDimensions && typeof data.customDimensions === 'object') {
          customDimensionsStr = Object.entries(data.customDimensions)
            .map(([key, value]) => `${key}=${value}`)
            .join('\n');
        }
        
        setAnalyticsConfig({
          googleAnalyticsId: data.googleAnalyticsId || '',
          googleTagManagerId: data.googleTagManagerId || '',
          facebookPixelId: data.facebookPixelId || '',
          linkedInInsightTag: data.linkedInInsightTag || '',
          enableEcommerce: data.enableEcommerce || false,
          enableUserTracking: data.enableUserTracking !== undefined ? data.enableUserTracking : true,
          enableDemographics: data.enableDemographics !== undefined ? data.enableDemographics : true,
          customDimensions: customDimensionsStr,
        });
      } catch (error) {
        console.error('Error fetching analytics configuration:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalyticsConfig();
  }, []);

  // Handle tab change
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setAnalyticsConfig({
      ...analyticsConfig,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle save
  const handleSave = async () => {
    try {
      setSaving(true);
      
      // Parse customDimensions string to object
      const customDimensionsObj: Record<string, string> = {};
      if (analyticsConfig.customDimensions) {
        analyticsConfig.customDimensions.split('\n').forEach(line => {
          const [key, value] = line.split('=');
          if (key && value) {
            customDimensionsObj[key.trim()] = value.trim();
          }
        });
      }
      
      const dataToSend = {
        googleAnalyticsId: analyticsConfig.googleAnalyticsId,
        googleTagManagerId: analyticsConfig.googleTagManagerId,
        facebookPixelId: analyticsConfig.facebookPixelId,
        linkedInInsightTag: analyticsConfig.linkedInInsightTag,
        enableEcommerce: analyticsConfig.enableEcommerce,
        enableUserTracking: analyticsConfig.enableUserTracking,
        enableDemographics: analyticsConfig.enableDemographics,
        customDimensions: customDimensionsObj,
      };
      
      const response = await fetch('/api/analytics', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update analytics configuration');
      }
      
      setSaved(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setSaved(false);
      }, 3000);
    } catch (error) {
      console.error('Error updating analytics configuration:', error);
    } finally {
      setSaving(false);
    }
  };

  // Google Analytics tracking code
  const googleAnalyticsCode = `
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.googleAnalyticsId}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${analyticsConfig.googleAnalyticsId}');
</script>
`;

  // Google Tag Manager code
  const googleTagManagerCode = `
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${analyticsConfig.googleTagManagerId}');</script>
<!-- End Google Tag Manager -->
`;

  // Facebook Pixel code
  const facebookPixelCode = `
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '${analyticsConfig.facebookPixelId}');
  fbq('track', 'PageView');
</script>
<!-- End Facebook Pixel Code -->
`;

  return (
    <Box component={motion.div} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Page Header */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <AnalyticsIcon 
            sx={{ 
              fontSize: 40, 
              color: theme.palette.primary.main,
              filter: `drop-shadow(0 2px 4px ${alpha(theme.palette.primary.main, 0.4)})`
            }} 
          />
          <Box>
            <Typography variant="h4" component="h1" gutterBottom fontWeight={600}>
              Analytics Integration
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Configure analytics tracking and view website performance metrics
            </Typography>
          </Box>
        </Box>
      </Box>

      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <StyledTabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <StyledTab label="Configuration" />
          <StyledTab label="Tracking Code" />
          <StyledTab label="Dashboard" />
        </StyledTabs>

        {/* Configuration Tab */}
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
            <CircularProgress />
          </Box>
        ) : activeTab === 0 && (
          <WidgetCard>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Analytics Services
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Configure your analytics tracking IDs for various services
                </Typography>
                
                <TextField
                  fullWidth
                  margin="normal"
                  label="Google Analytics ID"
                  name="googleAnalyticsId"
                  value={analyticsConfig.googleAnalyticsId}
                  onChange={handleInputChange}
                  placeholder="UA-XXXXXXXXX-X or G-XXXXXXXXXX"
                  helperText="Enter your Google Analytics tracking ID"
                />
                
                <TextField
                  fullWidth
                  margin="normal"
                  label="Google Tag Manager ID"
                  name="googleTagManagerId"
                  value={analyticsConfig.googleTagManagerId}
                  onChange={handleInputChange}
                  placeholder="GTM-XXXXXXX"
                  helperText="Enter your Google Tag Manager container ID"
                />
                
                <TextField
                  fullWidth
                  margin="normal"
                  label="Facebook Pixel ID"
                  name="facebookPixelId"
                  value={analyticsConfig.facebookPixelId}
                  onChange={handleInputChange}
                  placeholder="XXXXXXXXXXXXXXXXXX"
                  helperText="Enter your Facebook Pixel ID"
                />
                
                <TextField
                  fullWidth
                  margin="normal"
                  label="LinkedIn Insight Tag"
                  name="linkedInInsightTag"
                  value={analyticsConfig.linkedInInsightTag}
                  onChange={handleInputChange}
                  placeholder="XXXXXXXX"
                  helperText="Enter your LinkedIn Insight Tag ID"
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Tracking Options
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Configure how analytics data is collected and processed
                </Typography>
                
                <Box sx={{ mt: 2 }}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={analyticsConfig.enableEcommerce}
                        onChange={handleInputChange}
                        name="enableEcommerce"
                      />
                    }
                    label="Enable Enhanced Ecommerce Tracking"
                  />
                  
                  <FormControlLabel
                    control={
                      <Switch
                        checked={analyticsConfig.enableUserTracking}
                        onChange={handleInputChange}
                        name="enableUserTracking"
                      />
                    }
                    label="Enable User ID Tracking"
                  />
                  
                  <FormControlLabel
                    control={
                      <Switch
                        checked={analyticsConfig.enableDemographics}
                        onChange={handleInputChange}
                        name="enableDemographics"
                      />
                    }
                    label="Enable Demographics & Interests"
                  />
                </Box>
                
                <TextField
                  fullWidth
                  margin="normal"
                  label="Custom Dimensions"
                  name="customDimensions"
                  value={analyticsConfig.customDimensions}
                  onChange={handleInputChange}
                  multiline
                  rows={4}
                  placeholder="dimension1=UserType\ndimension2=Subscription"
                  helperText="Enter custom dimensions, one per line (name=value)"
                />
              </Grid>
              
              <Grid item xs={12}>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                  <Button
                    variant="outlined"
                    startIcon={<RefreshIcon />}
                    onClick={() => setAnalyticsConfig({
                      googleAnalyticsId: '',
                      googleTagManagerId: '',
                      facebookPixelId: '',
                      linkedInInsightTag: '',
                      enableEcommerce: false,
                      enableUserTracking: true,
                      enableDemographics: true,
                      customDimensions: '',
                    })}
                  >
                    Reset
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={saving ? <CircularProgress size={20} color="inherit" /> : <SaveIcon />}
                    onClick={handleSave}
                    disabled={saving}
                  >
                    Save Configuration
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </WidgetCard>
        )}

        {/* Tracking Code Tab */}
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
            <CircularProgress />
          </Box>
        ) : activeTab === 1 && (
          <WidgetCard>
            <Typography variant="h6" gutterBottom>
              Tracking Code Implementation
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Copy and paste these tracking codes into your website's <code>&lt;head&gt;</code> section
            </Typography>
            
            {analyticsConfig.googleAnalyticsId && (
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="subtitle1" fontWeight={500}>
                    Google Analytics
                  </Typography>
                  <Chip 
                    label="Configured" 
                    size="small" 
                    color="success" 
                    variant="outlined" 
                  />
                </Box>
                <CodeBlock>
                  <pre>{googleAnalyticsCode}</pre>
                </CodeBlock>
              </Box>
            )}
            
            {analyticsConfig.googleTagManagerId && (
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="subtitle1" fontWeight={500}>
                    Google Tag Manager
                  </Typography>
                  <Chip 
                    label="Configured" 
                    size="small" 
                    color="success" 
                    variant="outlined" 
                  />
                </Box>
                <CodeBlock>
                  <pre>{googleTagManagerCode}</pre>
                </CodeBlock>
              </Box>
            )}
            
            {analyticsConfig.facebookPixelId && (
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="subtitle1" fontWeight={500}>
                    Facebook Pixel
                  </Typography>
                  <Chip 
                    label="Configured" 
                    size="small" 
                    color="success" 
                    variant="outlined" 
                  />
                </Box>
                <CodeBlock>
                  <pre>{facebookPixelCode}</pre>
                </CodeBlock>
              </Box>
            )}
            
            {!analyticsConfig.googleAnalyticsId && !analyticsConfig.googleTagManagerId && !analyticsConfig.facebookPixelId && (
              <Alert severity="info" sx={{ mb: 2 }}>
                No tracking codes have been configured yet. Go to the Configuration tab to set up your analytics services.
              </Alert>
            )}
            
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Implementation Notes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Google Analytics code should be placed in the <code>&lt;head&gt;</code> section of your website.<br />
                • Google Tag Manager requires both a <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code> snippet.<br />
                • For Next.js applications, add these scripts to your <code>_document.js</code> or <code>layout.tsx</code> file.<br />
                • Make sure to comply with privacy regulations like GDPR and obtain user consent before loading analytics.
              </Typography>
            </Box>
          </WidgetCard>
        )}

        {/* Dashboard Tab */}
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
            <CircularProgress />
          </Box>
        ) : activeTab === 2 && (
          <WidgetCard>
            <Typography variant="h6" gutterBottom>
              Analytics Dashboard
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              View key metrics and performance data from your analytics services
            </Typography>
            
            <Alert severity="info" sx={{ mb: 4 }}>
              This is a placeholder for the analytics dashboard. In a real implementation, this would display charts and metrics from your connected analytics services.
            </Alert>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <ChartPlaceholder>
                  <BarChartIcon sx={{ fontSize: 48, color: alpha(theme.palette.primary.main, 0.7), mb: 2 }} />
                  <Typography variant="subtitle1" gutterBottom>
                    Traffic Overview
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Visitors, page views, and sessions over time
                  </Typography>
                </ChartPlaceholder>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <ChartPlaceholder>
                  <PieChartIcon sx={{ fontSize: 48, color: alpha(theme.palette.secondary.main, 0.7), mb: 2 }} />
                  <Typography variant="subtitle1" gutterBottom>
                    Traffic Sources
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Distribution of traffic by source/medium
                  </Typography>
                </ChartPlaceholder>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <ChartPlaceholder>
                  <TimelineIcon sx={{ fontSize: 48, color: alpha(theme.palette.success.main, 0.7), mb: 2 }} />
                  <Typography variant="subtitle1" gutterBottom>
                    User Engagement
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Time on site, bounce rate, and pages per session
                  </Typography>
                </ChartPlaceholder>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <ChartPlaceholder>
                  <ShowChartIcon sx={{ fontSize: 48, color: alpha(theme.palette.error.main, 0.7), mb: 2 }} />
                  <Typography variant="subtitle1" gutterBottom>
                    Conversion Metrics
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Goal completions and conversion rates
                  </Typography>
                </ChartPlaceholder>
              </Grid>
            </Grid>
            
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="outlined"
                startIcon={<CodeIcon />}
                href="https://analytics.google.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mr: 2 }}
              >
                Open Google Analytics
              </Button>
              
              <Button
                variant="outlined"
                startIcon={<CodeIcon />}
                href="https://tagmanager.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Tag Manager
              </Button>
            </Box>
          </WidgetCard>
        )}
      </motion.div>

      {/* Success Snackbar */}
      <Snackbar
        open={saved}
        autoHideDuration={3000}
        onClose={() => setSaved(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={() => setSaved(false)} 
          severity="success"
          variant="filled"
          sx={{ borderRadius: 2 }}
        >
          Analytics configuration saved successfully
        </Alert>
      </Snackbar>
    </Box>
  );
}
