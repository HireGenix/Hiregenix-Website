'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Tabs,
  Tab,
  Alert,
  CircularProgress,
  Divider
} from '@mui/material';
import { Save as SaveIcon } from '@mui/icons-material';
import GeneralSettings from './GeneralSettings';
import SocialMediaSettings from './SocialMediaSettings';
import AppearanceSettings from './AppearanceSettings';
import SEOSettings from './SEOSettings';
import AdvancedSettings from './AdvancedSettings';
import { SiteSettings, SiteSettingsFormProps, mergeSettings } from './types';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`site-settings-tabpanel-${index}`}
      aria-labelledby={`site-settings-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `site-settings-tab-${index}`,
    'aria-controls': `site-settings-tabpanel-${index}`,
  };
}

const SiteSettingsForm: React.FC<SiteSettingsFormProps> = ({
  settings: initialSettings = {},
  onSave,
  loading = false
}) => {
  // Use mergeSettings to ensure we have a complete SiteSettings object with defaults
  const [settings, setSettings] = useState<SiteSettings>(mergeSettings(initialSettings));
  const [activeTab, setActiveTab] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleSettingsChange = (updatedSettings: Partial<SiteSettings>) => {
    setSettings(current => ({
      ...current,
      ...updatedSettings
    }));
  };

  const handleSave = async () => {
    try {
      setError(null);
      setSuccess(null);
      await onSave(settings);
      setSuccess('Settings saved successfully!');
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccess(null);
      }, 3000);
    } catch (err) {
      console.error('Error saving settings:', err);
      setError('Failed to save settings. Please try again.');
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" component="h1">
          Site Settings
        </Typography>
        
        <Button
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          onClick={handleSave}
          disabled={loading}
        >
          {loading ? (
            <>
              <CircularProgress size={24} sx={{ mr: 1 }} />
              Saving...
            </>
          ) : (
            'Save Settings'
          )}
        </Button>
      </Box>
      
      {error && (
        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError(null)}>
          {error}
        </Alert>
      )}
      
      {success && (
        <Alert severity="success" sx={{ mb: 3 }} onClose={() => setSuccess(null)}>
          {success}
        </Alert>
      )}
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          aria-label="site settings tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="General" {...a11yProps(0)} />
          <Tab label="Social Media" {...a11yProps(1)} />
          <Tab label="Appearance" {...a11yProps(2)} />
          <Tab label="SEO" {...a11yProps(3)} />
          <Tab label="Advanced" {...a11yProps(4)} />
        </Tabs>
      </Box>
      
      <TabPanel value={activeTab} index={0}>
        <GeneralSettings
          settings={settings}
          onChange={handleSettingsChange}
        />
      </TabPanel>
      
      <TabPanel value={activeTab} index={1}>
        <SocialMediaSettings
          settings={settings}
          onChange={handleSettingsChange}
        />
      </TabPanel>
      
      <TabPanel value={activeTab} index={2}>
        <AppearanceSettings
          settings={settings}
          onChange={handleSettingsChange}
        />
      </TabPanel>
      
      <TabPanel value={activeTab} index={3}>
        <SEOSettings
          settings={settings}
          onChange={handleSettingsChange}
        />
      </TabPanel>
      
      <TabPanel value={activeTab} index={4}>
        <AdvancedSettings
          settings={settings}
          onChange={handleSettingsChange}
        />
      </TabPanel>
      
      <Divider sx={{ my: 3 }} />
      
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          onClick={handleSave}
          disabled={loading}
          size="large"
        >
          {loading ? (
            <>
              <CircularProgress size={24} sx={{ mr: 1 }} />
              Saving...
            </>
          ) : (
            'Save Settings'
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default SiteSettingsForm;
