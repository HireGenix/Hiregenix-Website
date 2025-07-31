'use client';

import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  CircularProgress, 
  Alert, 
  alpha, 
  useTheme,
  Snackbar,
} from '@mui/material';
import { 
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { SiteSettingsForm, SiteSettings } from '@/components/SiteSettings';
import { WidgetCard, containerVariants, itemVariants } from '@/components/Dashboard/DashboardComponents';

// Default settings
const defaultSettings: SiteSettings = {
  siteName: 'HireGenix',
  siteDescription: 'A modern recruitment platform',
  siteUrl: 'https://hiregenix.com',
  favicon: '/favicon.ico',
  logo: '/logo.png',
  email: 'contact@hiregenix.com',
  phone: '',
  address: '',
  socialMedia: {
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
    youtube: '',
    github: ''
  },
  googleAnalyticsId: '',
  googleTagManagerId: '',
  recaptchaSiteKey: '',
  mapboxApiKey: '',
  theme: {
    primaryColor: '#3f51b5',
    secondaryColor: '#f50057',
    accentColor: '#ff4081',
    textColor: '#333333',
    backgroundColor: '#ffffff',
    fontFamily: 'Roboto, sans-serif'
  },
  footer: {
    text: '© 2025 HireGenix. All rights reserved.',
    showSocialIcons: true,
    showSitemap: true,
    showContactInfo: true,
    columns: [
      {
        title: 'Company',
        links: [
          { label: 'About', url: '/about' },
          { label: 'Contact', url: '/contact' },
          { label: 'Careers', url: '/careers' }
        ]
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy Policy', url: '/privacy' },
          { label: 'Terms of Service', url: '/terms' }
        ]
      }
    ]
  },
  customCss: '',
  customJs: '',
  headerScripts: '',
  footerScripts: '',
  defaultSeo: {
    title: 'HireGenix - Modern Recruitment Platform',
    description: 'HireGenix is a modern recruitment platform that helps companies find the best talent.',
    keywords: 'recruitment, hiring, jobs, candidates, talent',
    ogImage: '/og-image.jpg',
    twitterCard: 'summary_large_image'
  }
};

export default function SettingsPage() {
  const theme = useTheme();
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error' | 'info' | 'warning';
  }>({
    open: false,
    message: '',
    severity: 'success',
  });

  // Show snackbar
  const showSnackbar = (message: string, severity: 'success' | 'error' | 'info' | 'warning') => {
    setSnackbar({
      open: true,
      message,
      severity,
    });
  };

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        // In a real implementation, you would fetch settings from the API
        // const response = await fetch('/api/settings');
        // const data = await response.json();
        // setSettings(data);
        
        // For demo purposes, we'll use the default settings with a delay to simulate API call
        setTimeout(() => {
          setSettings(defaultSettings);
          setLoading(false);
        }, 500);
      } catch (err) {
        console.error('Error fetching settings:', err);
        showSnackbar('Failed to load settings. Please refresh the page to try again.', 'error');
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const handleSaveSettings = async (updatedSettings: SiteSettings) => {
    try {
      setSaving(true);
      
      // In a real implementation, you would save settings to the API
      // await fetch('/api/settings', {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(updatedSettings)
      // });
      
      // For demo purposes, we'll just simulate an API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSettings(updatedSettings);
      showSnackbar('Settings saved successfully!', 'success');
      setSaving(false);
    } catch (err) {
      console.error('Error saving settings:', err);
      showSnackbar('Failed to save settings. Please try again.', 'error');
      setSaving(false);
      throw err;
    }
  };

  return (
    <Box component={motion.div} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Page Header */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <SettingsIcon 
            sx={{ 
              fontSize: 40, 
              color: theme.palette.info.main,
              filter: `drop-shadow(0 2px 4px ${alpha(theme.palette.info.main, 0.4)})`
            }} 
          />
          <Box>
            <Typography variant="h4" component="h1" gutterBottom fontWeight={600}>
              Site Settings
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Configure your website settings and preferences
            </Typography>
          </Box>
        </Box>
      </Box>

      {loading ? (
        <WidgetCard sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 8 }}>
          <CircularProgress color="info" />
        </WidgetCard>
      ) : (
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <WidgetCard>
            {settings && (
              <SiteSettingsForm
                settings={settings}
                onSave={handleSaveSettings}
                loading={saving}
              />
            )}
          </WidgetCard>
        </motion.div>
      )}

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={() => setSnackbar({ ...snackbar, open: false })} 
          severity={snackbar.severity}
          variant="filled"
          sx={{ borderRadius: 2 }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
