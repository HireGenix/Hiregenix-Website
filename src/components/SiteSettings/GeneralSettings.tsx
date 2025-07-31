'use client';

import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Grid,
  Paper
} from '@mui/material';
import { MediaSelector } from '@/components/MediaLibrary';
import { SiteSettings, SiteSettingsSectionProps } from './types';

const GeneralSettings: React.FC<SiteSettingsSectionProps> = ({
  settings,
  onChange
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    onChange({
      ...settings,
      [name]: value
    });
  };

  const handleMediaChange = (field: string) => (url: string) => {
    onChange({
      ...settings,
      [field]: url
    });
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        General Settings
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="siteName"
            label="Site Name"
            value={settings.siteName}
            onChange={handleChange}
            required
            helperText="The name of your website"
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="siteDescription"
            label="Site Description"
            value={settings.siteDescription}
            onChange={handleChange}
            multiline
            rows={2}
            helperText="A brief description of your website"
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="siteUrl"
            label="Site URL"
            value={settings.siteUrl}
            onChange={handleChange}
            required
            helperText="The URL of your website (e.g., https://example.com)"
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle2" gutterBottom>
            Logo
          </Typography>
          <MediaSelector
            value={settings.logo}
            onChange={handleMediaChange('logo')}
            helperText="Select or upload your website logo"
            showPreview
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle2" gutterBottom>
            Favicon
          </Typography>
          <MediaSelector
            value={settings.favicon}
            onChange={handleMediaChange('favicon')}
            helperText="Select or upload your website favicon (recommended: 32x32 PNG)"
            showPreview
          />
        </Grid>
        
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Contact Information
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="email"
            label="Email Address"
            value={settings.email}
            onChange={handleChange}
            required
            helperText="Primary contact email address"
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="phone"
            label="Phone Number"
            value={settings.phone || ''}
            onChange={handleChange}
            helperText="Primary contact phone number"
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="address"
            label="Address"
            value={settings.address || ''}
            onChange={handleChange}
            multiline
            rows={2}
            helperText="Physical address (if applicable)"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default GeneralSettings;
