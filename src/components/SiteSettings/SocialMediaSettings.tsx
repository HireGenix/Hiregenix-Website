'use client';

import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Grid,
  Paper,
  InputAdornment
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YouTubeIcon,
  GitHub as GitHubIcon
} from '@mui/icons-material';
import { SiteSettingsSectionProps } from './types';

const defaultSocialMedia = {
  facebook: '',
  twitter: '',
  instagram: '',
  linkedin: '',
  youtube: '',
  github: ''
};

const SocialMediaSettings: React.FC<SiteSettingsSectionProps> = ({
  settings,
  onChange
}) => {
  // Ensure socialMedia exists with default values
  const socialMedia = settings.socialMedia || defaultSocialMedia;
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    onChange({
      ...settings,
      socialMedia: {
        ...socialMedia,
        [name]: value
      }
    });
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Social Media Settings
      </Typography>
      
      <Typography variant="body2" color="text.secondary" paragraph>
        Enter the full URLs to your social media profiles. Leave blank if you don't want to display a particular social media icon.
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="facebook"
            label="Facebook"
            value={socialMedia.facebook || ''}
            onChange={handleChange}
            placeholder="https://facebook.com/yourpage"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FacebookIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="twitter"
            label="Twitter"
            value={socialMedia.twitter || ''}
            onChange={handleChange}
            placeholder="https://twitter.com/yourusername"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TwitterIcon sx={{ color: '#1DA1F2' }} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="instagram"
            label="Instagram"
            value={socialMedia.instagram || ''}
            onChange={handleChange}
            placeholder="https://instagram.com/yourusername"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <InstagramIcon sx={{ color: '#E1306C' }} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="linkedin"
            label="LinkedIn"
            value={socialMedia.linkedin || ''}
            onChange={handleChange}
            placeholder="https://linkedin.com/company/yourcompany"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LinkedInIcon sx={{ color: '#0077B5' }} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="youtube"
            label="YouTube"
            value={socialMedia.youtube || ''}
            onChange={handleChange}
            placeholder="https://youtube.com/c/yourchannel"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <YouTubeIcon sx={{ color: '#FF0000' }} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="github"
            label="GitHub"
            value={socialMedia.github || ''}
            onChange={handleChange}
            placeholder="https://github.com/yourusername"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <GitHubIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SocialMediaSettings;
