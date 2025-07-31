'use client';

import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Grid,
  Paper,
  Alert
} from '@mui/material';
import { SiteSettingsSectionProps } from './types';

const AdvancedSettings: React.FC<SiteSettingsSectionProps> = ({
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

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Advanced Settings
      </Typography>
      
      <Alert severity="warning" sx={{ mb: 3 }}>
        These settings are for advanced users only. Incorrect code can break your website's functionality.
      </Alert>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="subtitle2" gutterBottom>
            Custom CSS
          </Typography>
          <TextField
            fullWidth
            name="customCss"
            value={settings.customCss || ''}
            onChange={handleChange}
            multiline
            rows={8}
            placeholder="/* Add your custom CSS here */\n\nbody {\n  /* Your styles */\n}"
            InputProps={{
              sx: { fontFamily: 'monospace' }
            }}
            helperText="Custom CSS that will be added to all pages"
          />
        </Grid>
        
        <Grid item xs={12}>
          <Typography variant="subtitle2" gutterBottom>
            Custom JavaScript
          </Typography>
          <TextField
            fullWidth
            name="customJs"
            value={settings.customJs || ''}
            onChange={handleChange}
            multiline
            rows={8}
            placeholder="// Add your custom JavaScript here\n\ndocument.addEventListener('DOMContentLoaded', function() {\n  // Your code\n});"
            InputProps={{
              sx: { fontFamily: 'monospace' }
            }}
            helperText="Custom JavaScript that will be added to all pages"
          />
        </Grid>
        
        <Grid item xs={12}>
          <Typography variant="subtitle2" gutterBottom>
            Header Scripts
          </Typography>
          <TextField
            fullWidth
            name="headerScripts"
            value={settings.headerScripts || ''}
            onChange={handleChange}
            multiline
            rows={5}
            placeholder="<!-- Add scripts that should be placed in the <head> section -->\n<script>\n  // Your code\n</script>"
            InputProps={{
              sx: { fontFamily: 'monospace' }
            }}
            helperText="Scripts that will be added to the <head> section of all pages (e.g., Google Analytics)"
          />
        </Grid>
        
        <Grid item xs={12}>
          <Typography variant="subtitle2" gutterBottom>
            Footer Scripts
          </Typography>
          <TextField
            fullWidth
            name="footerScripts"
            value={settings.footerScripts || ''}
            onChange={handleChange}
            multiline
            rows={5}
            placeholder="<!-- Add scripts that should be placed before the closing </body> tag -->\n<script>\n  // Your code\n</script>"
            InputProps={{
              sx: { fontFamily: 'monospace' }
            }}
            helperText="Scripts that will be added before the closing </body> tag of all pages"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AdvancedSettings;
