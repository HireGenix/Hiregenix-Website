'use client';

import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Grid,
  Paper,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { ColorLens as ColorLensIcon } from '@mui/icons-material';
import { SiteSettingsSectionProps } from './types';

const fontFamilies = [
  'Arial, sans-serif',
  'Helvetica, sans-serif',
  'Verdana, sans-serif',
  'Tahoma, sans-serif',
  'Trebuchet MS, sans-serif',
  'Times New Roman, serif',
  'Georgia, serif',
  'Garamond, serif',
  'Courier New, monospace',
  'Roboto, sans-serif',
  'Open Sans, sans-serif',
  'Lato, sans-serif',
  'Montserrat, sans-serif',
  'Raleway, sans-serif',
  'Poppins, sans-serif',
  'Nunito, sans-serif',
  'Playfair Display, serif',
  'Merriweather, serif',
  'Source Sans Pro, sans-serif',
  'Ubuntu, sans-serif'
];

const defaultTheme = {
  primaryColor: '#3f51b5',
  secondaryColor: '#f50057',
  accentColor: '#00bcd4',
  textColor: '#212121',
  backgroundColor: '#ffffff',
  fontFamily: 'Roboto, sans-serif',
};

const AppearanceSettings: React.FC<SiteSettingsSectionProps> = ({
  settings,
  onChange
}) => {
  // Ensure theme exists with default values
  const theme = settings.theme || defaultTheme;
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    onChange({
      ...settings,
      theme: {
        ...theme,
        [name]: value
      }
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    if (name) {
      onChange({
        ...settings,
        theme: {
          ...theme,
          [name]: value
        }
      });
    }
  };

  // Function to create a color input with preview
  const ColorInput = ({ name, label, value }: { name: string; label: string; value: string | undefined }) => (
    <TextField
      fullWidth
      name={name}
      label={label}
      value={value || ''}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                backgroundColor: value,
                border: '1px solid #ccc',
                mr: 1
              }}
            />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <input
              type="color"
              value={value || '#ffffff'}
              onChange={(e) => {
                const syntheticEvent = {
                  target: {
                    name,
                    value: e.target.value
                  }
                } as React.ChangeEvent<HTMLInputElement>;
                handleChange(syntheticEvent);
              }}
              style={{ width: 30, height: 30, padding: 0, border: 'none' }}
            />
          </InputAdornment>
        )
      }}
    />
  );

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Appearance Settings
      </Typography>
      
      <Typography variant="body2" color="text.secondary" paragraph>
        Customize the appearance of your website by setting colors and fonts.
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <ColorInput
            name="primaryColor"
            label="Primary Color"
            value={theme.primaryColor || defaultTheme.primaryColor}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <ColorInput
            name="secondaryColor"
            label="Secondary Color"
            value={theme.secondaryColor || defaultTheme.secondaryColor}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <ColorInput
            name="accentColor"
            label="Accent Color"
            value={theme.accentColor || defaultTheme.accentColor}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <ColorInput
            name="textColor"
            label="Text Color"
            value={theme.textColor || defaultTheme.textColor}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <ColorInput
            name="backgroundColor"
            label="Background Color"
            value={theme.backgroundColor || defaultTheme.backgroundColor}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="font-family-label">Font Family</InputLabel>
            <Select
              labelId="font-family-label"
              name="fontFamily"
              value={theme.fontFamily || defaultTheme.fontFamily}
              onChange={handleSelectChange as any}
              label="Font Family"
            >
              {fontFamilies.map((font) => (
                <MenuItem key={font} value={font} style={{ fontFamily: font }}>
                  {font.split(',')[0]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12}>
          <Box
            sx={{
              mt: 2,
              p: 3,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
              backgroundColor: theme.backgroundColor || defaultTheme.backgroundColor,
              color: theme.textColor || defaultTheme.textColor,
              fontFamily: theme.fontFamily || defaultTheme.fontFamily
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ color: theme.primaryColor || defaultTheme.primaryColor }}>
              Preview
            </Typography>
            <Typography variant="body1" paragraph>
              This is how your text will look with the selected colors and font family.
            </Typography>
            <Box
              sx={{
                display: 'inline-block',
                px: 2,
                py: 1,
                borderRadius: 1,
                backgroundColor: theme.primaryColor || defaultTheme.primaryColor,
                color: '#fff',
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.9
                }
              }}
            >
              Primary Button
            </Box>
            <Box
              sx={{
                display: 'inline-block',
                px: 2,
                py: 1,
                ml: 2,
                borderRadius: 1,
                backgroundColor: theme.secondaryColor || defaultTheme.secondaryColor,
                color: '#fff',
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.9
                }
              }}
            >
              Secondary Button
            </Box>
            <Box
              sx={{
                display: 'inline-block',
                px: 2,
                py: 1,
                ml: 2,
                borderRadius: 1,
                backgroundColor: theme.accentColor || defaultTheme.accentColor,
                color: '#fff',
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.9
                }
              }}
            >
              Accent Button
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AppearanceSettings;
