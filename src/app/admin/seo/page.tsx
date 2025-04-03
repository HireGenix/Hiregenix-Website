'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Switch,
  FormControlLabel,
  Divider,
  Alert,
  Snackbar,
  CircularProgress,
  alpha,
  useTheme,
  styled,
} from '@mui/material';
import {
  Search as SearchIcon,
  Save as SaveIcon,
  Refresh as RefreshIcon,
  Code as CodeIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { MediaSelector } from '@/components/MediaLibrary';
import { WidgetCard, containerVariants, itemVariants } from '@/components/Dashboard/DashboardComponents';

// Styled components
const CodeBlock = styled(Box)(({ theme }) => ({
  fontFamily: 'monospace',
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  padding: theme.spacing(2),
  borderRadius: 8,
  overflowX: 'auto',
  fontSize: '0.875rem',
  border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
}));

// SEO settings page component
export default function SeoSettingsPage() {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [seoSettings, setSeoSettings] = useState({
    defaultTitle: '',
    defaultDescription: '',
    defaultKeywords: '',
    defaultOgImage: '',
    robotsTxt: 'User-agent: *\nAllow: /',
    sitemapEnabled: true,
    structuredData: {},
  });

  // Fetch SEO settings
  useEffect(() => {
    const fetchSeoSettings = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/seo');
        
        if (!response.ok) {
          throw new Error('Failed to fetch SEO settings');
        }
        
        const data = await response.json();
        setSeoSettings(data);
      } catch (error) {
        console.error('Error fetching SEO settings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSeoSettings();
  }, []);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSeoSettings({
      ...seoSettings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle image change
  const handleImageChange = (url: string) => {
    setSeoSettings({
      ...seoSettings,
      defaultOgImage: url,
    });
  };

  // Handle save
  const handleSave = async () => {
    try {
      setSaving(true);
      
      const response = await fetch('/api/seo', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(seoSettings),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update SEO settings');
      }
      
      const data = await response.json();
      setSeoSettings(data);
      setSaved(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setSaved(false);
      }, 3000);
    } catch (error) {
      console.error('Error updating SEO settings:', error);
    } finally {
      setSaving(false);
    }
  };

  // Generate structured data example
  const structuredDataExample = `
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HireGenix",
  "url": "https://www.hiregenix.com",
  "logo": "https://www.hiregenix.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-123-456-7890",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.facebook.com/hiregenix",
    "https://www.twitter.com/hiregenix",
    "https://www.linkedin.com/company/hiregenix"
  ]
}
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
          <SearchIcon 
            sx={{ 
              fontSize: 40, 
              color: theme.palette.primary.main,
              filter: `drop-shadow(0 2px 4px ${alpha(theme.palette.primary.main, 0.4)})`
            }} 
          />
          <Box>
            <Typography variant="h4" component="h1" gutterBottom fontWeight={600}>
              SEO Settings
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Configure default SEO settings for your website
            </Typography>
          </Box>
        </Box>
      </Box>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <WidgetCard>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Default Meta Tags
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  These settings will be used as defaults for pages that don't have specific SEO settings
                </Typography>
                
                <TextField
                  fullWidth
                  margin="normal"
                  label="Default Title"
                  name="defaultTitle"
                  value={seoSettings.defaultTitle || ''}
                  onChange={handleInputChange}
                  placeholder="HireGenix - AI-Powered Recruitment Platform"
                  helperText={`${seoSettings.defaultTitle?.length || 0}/60 characters (recommended)`}
                  error={(seoSettings.defaultTitle?.length || 0) > 60}
                />
                
                <TextField
                  fullWidth
                  margin="normal"
                  label="Default Description"
                  name="defaultDescription"
                  value={seoSettings.defaultDescription || ''}
                  onChange={handleInputChange}
                  multiline
                  rows={3}
                  placeholder="HireGenix is an AI-powered recruitment platform that helps companies find the best talent faster and more efficiently."
                  helperText={`${seoSettings.defaultDescription?.length || 0}/160 characters (recommended)`}
                  error={(seoSettings.defaultDescription?.length || 0) > 160}
                />
                
                <TextField
                  fullWidth
                  margin="normal"
                  label="Default Keywords"
                  name="defaultKeywords"
                  value={seoSettings.defaultKeywords || ''}
                  onChange={handleInputChange}
                  placeholder="recruitment, AI, hiring, talent acquisition"
                  helperText="Comma-separated keywords (less important for modern SEO)"
                />
                
                <Box sx={{ mt: 3, mb: 3 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Default Open Graph Image
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    This image will be used when sharing your content on social media
                  </Typography>
                  <MediaSelector
                    value={seoSettings.defaultOgImage || ''}
                    onChange={handleImageChange}
                    helperText="Recommended size: 1200x630 pixels"
                    showPreview
                  />
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Advanced SEO Settings
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Configure robots.txt, sitemap, and structured data settings
                </Typography>
                
                <TextField
                  fullWidth
                  margin="normal"
                  label="Robots.txt Content"
                  name="robotsTxt"
                  value={seoSettings.robotsTxt || ''}
                  onChange={handleInputChange}
                  multiline
                  rows={5}
                  placeholder="User-agent: *\nAllow: /"
                  helperText="Instructions for search engine crawlers"
                />
                
                <Box sx={{ mt: 2 }}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={seoSettings.sitemapEnabled}
                        onChange={handleInputChange}
                        name="sitemapEnabled"
                      />
                    }
                    label="Enable XML Sitemap"
                  />
                </Box>
                
                <Box sx={{ mt: 3 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Default Structured Data (JSON-LD)
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Example structured data for your organization
                  </Typography>
                  <CodeBlock>
                    <pre>{structuredDataExample}</pre>
                  </CodeBlock>
                </Box>
              </Grid>
              
              <Grid item xs={12}>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                  <Button
                    variant="outlined"
                    startIcon={<RefreshIcon />}
                    onClick={() => setSeoSettings({
                      defaultTitle: 'HireGenix - AI-Powered Recruitment Platform',
                      defaultDescription: 'HireGenix is an AI-powered recruitment platform that helps companies find the best talent faster and more efficiently.',
                      defaultKeywords: 'recruitment, AI, hiring, talent acquisition',
                      defaultOgImage: '/HireGenix-logo-black.png',
                      robotsTxt: 'User-agent: *\nAllow: /',
                      sitemapEnabled: true,
                      structuredData: {},
                    })}
                  >
                    Reset to Defaults
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={saving ? <CircularProgress size={20} color="inherit" /> : <SaveIcon />}
                    onClick={handleSave}
                    disabled={saving}
                  >
                    Save Settings
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </WidgetCard>
          
          <Box sx={{ mt: 4 }}>
            <WidgetCard>
              <Typography variant="h6" gutterBottom>
                SEO Best Practices
              </Typography>
              <Typography variant="body2" paragraph>
                Follow these guidelines to improve your website's search engine visibility:
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box component={Paper} sx={{ p: 2, borderRadius: 2, height: '100%' }}>
                    <Typography variant="subtitle1" gutterBottom fontWeight={600}>
                      On-Page SEO
                    </Typography>
                    <ul>
                      <li>Use unique, descriptive titles for each page (50-60 characters)</li>
                      <li>Write compelling meta descriptions (150-160 characters)</li>
                      <li>Use header tags (H1, H2, H3) to structure your content</li>
                      <li>Include your target keywords naturally in your content</li>
                      <li>Optimize images with descriptive alt text</li>
                      <li>Ensure your content is high-quality and valuable to users</li>
                    </ul>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box component={Paper} sx={{ p: 2, borderRadius: 2, height: '100%' }}>
                    <Typography variant="subtitle1" gutterBottom fontWeight={600}>
                      Technical SEO
                    </Typography>
                    <ul>
                      <li>Ensure your website loads quickly (under 3 seconds)</li>
                      <li>Make your website mobile-friendly</li>
                      <li>Use HTTPS to secure your website</li>
                      <li>Create and submit an XML sitemap</li>
                      <li>Use canonical tags to avoid duplicate content</li>
                      <li>Implement structured data (schema.org) markup</li>
                    </ul>
                  </Box>
                </Grid>
              </Grid>
            </WidgetCard>
          </Box>
        </motion.div>
      )}

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
          SEO settings saved successfully
        </Alert>
      </Snackbar>
    </Box>
  );
}
