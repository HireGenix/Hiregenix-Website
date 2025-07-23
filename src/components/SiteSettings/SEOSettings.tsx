'use client';

import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { MediaSelector } from '@/components/MediaLibrary';
import { SiteSettingsSectionProps } from './types';

const defaultSeo = {
  title: '',
  description: '',
  keywords: '',
  ogImage: '',
  twitterImage: '',
  twitterCard: 'summary_large_image'
};

const SEOSettings: React.FC<SiteSettingsSectionProps> = ({
  settings,
  onChange
}) => {
  // Ensure defaultSeo exists with default values
  const seo = settings.defaultSeo || defaultSeo;
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    onChange({
      ...settings,
      defaultSeo: {
        ...seo,
        [name]: value
      }
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    if (name) {
      onChange({
        ...settings,
        defaultSeo: {
          ...seo,
          [name]: value
        }
      });
    }
  };

  const handleImageChange = (url: string) => {
    onChange({
      ...settings,
      defaultSeo: {
        ...seo,
        ogImage: url
      }
    });
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Default SEO Settings
      </Typography>
      
      <Typography variant="body2" color="text.secondary" paragraph>
        These settings will be used as defaults for pages that don't have specific SEO settings.
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="title"
            label="Default Title"
            value={seo.title || ''}
            onChange={handleChange}
            helperText={`${seo.title?.length || 0}/60 characters (recommended)`}
            error={(seo.title?.length || 0) > 60}
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="description"
            label="Default Description"
            value={seo.description || ''}
            onChange={handleChange}
            multiline
            rows={3}
            helperText={`${seo.description?.length || 0}/160 characters (recommended)`}
            error={(seo.description?.length || 0) > 160}
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="keywords"
            label="Default Keywords"
            value={seo.keywords || ''}
            onChange={handleChange}
            helperText="Comma-separated keywords (less important for modern SEO)"
          />
        </Grid>
        
        <Grid item xs={12}>
          <Typography variant="subtitle2" gutterBottom>
            Default Open Graph Image
          </Typography>
          <MediaSelector
            value={seo.ogImage || ''}
            onChange={handleImageChange}
            helperText="This image will be used for social media sharing (recommended size: 1200x630 pixels)"
            showPreview
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="twitter-card-label">Twitter Card Type</InputLabel>
            <Select
              labelId="twitter-card-label"
              name="twitterCard"
              value={seo.twitterCard || defaultSeo.twitterCard}
              onChange={handleSelectChange as any}
              label="Twitter Card Type"
            >
              <MenuItem value="summary">Summary</MenuItem>
              <MenuItem value="summary_large_image">Summary with Large Image</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      
      <Box sx={{ mt: 3 }}>
        <Typography variant="subtitle1" gutterBottom>
          Preview
        </Typography>
        
        <Paper variant="outlined" sx={{ p: 2, bgcolor: '#f9f9f9' }}>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              color: '#1a0dab',
              fontWeight: 'normal',
              fontSize: '18px',
              mb: 0.5
            }}
          >
            {seo.title || 'Default Title'}
          </Typography>
          
          <Typography
            variant="body2"
            component="div"
            sx={{
              color: '#006621',
              fontSize: '14px',
              mb: 0.5
            }}
          >
            {settings.siteUrl}
          </Typography>
          
          <Typography
            variant="body2"
            component="div"
            sx={{
              color: '#545454',
              fontSize: '14px'
            }}
          >
            {seo.description || 'Default description goes here. This is what users and search engines will see as a summary of your website content.'}
          </Typography>
        </Paper>
      </Box>
    </Paper>
  );
};

export default SEOSettings;
