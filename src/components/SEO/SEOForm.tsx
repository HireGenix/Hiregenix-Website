'use client';

import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  FormControlLabel,
  Switch,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Divider,
  Paper,
  Tooltip,
  IconButton
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Info as InfoIcon,
  Code as CodeIcon
} from '@mui/icons-material';
import { MediaSelector } from '@/components/MediaLibrary';
import { SEOData, SEOFormProps } from './types';
import SEOPreview from './SEOPreview';

const SEOForm: React.FC<SEOFormProps> = ({
  seoData = {},
  onChange,
  showAdvanced = false
}) => {
  const [expandedSection, setExpandedSection] = useState<string | false>('basic');
  const [showJsonLdEditor, setShowJsonLdEditor] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    onChange({
      ...seoData,
      [name]: value
    });
  };

  const handleSwitchChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...seoData,
      [name]: e.target.checked
    });
  };

  const handleImageChange = (name: string) => (url: string) => {
    onChange({
      ...seoData,
      [name]: url
    });
  };

  const handleAccordionChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpandedSection(isExpanded ? panel : false);
  };

  const handleCopyOpenGraph = () => {
    onChange({
      ...seoData,
      ogTitle: seoData.title,
      ogDescription: seoData.description
    });
  };

  const handleCopyTwitter = () => {
    onChange({
      ...seoData,
      twitterTitle: seoData.title,
      twitterDescription: seoData.description,
      twitterImage: seoData.ogImage
    });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        SEO Settings
      </Typography>
      
      <Paper sx={{ p: 3, mb: 4 }}>
        <SEOPreview seoData={seoData as SEOData} />
      </Paper>
      
      <Accordion
        expanded={expandedSection === 'basic'}
        onChange={handleAccordionChange('basic')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1">Basic SEO</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            fullWidth
            margin="normal"
            name="title"
            label="Meta Title"
            value={seoData.title || ''}
            onChange={handleChange}
            helperText={`${seoData.title?.length || 0}/60 characters (recommended)`}
            error={(seoData.title?.length || 0) > 60}
          />
          
          <TextField
            fullWidth
            margin="normal"
            name="description"
            label="Meta Description"
            value={seoData.description || ''}
            onChange={handleChange}
            multiline
            rows={3}
            helperText={`${seoData.description?.length || 0}/160 characters (recommended)`}
            error={(seoData.description?.length || 0) > 160}
          />
          
          <TextField
            fullWidth
            margin="normal"
            name="keywords"
            label="Meta Keywords"
            value={seoData.keywords || ''}
            onChange={handleChange}
            helperText="Comma-separated keywords (less important for modern SEO)"
          />
          
          <TextField
            fullWidth
            margin="normal"
            name="canonicalUrl"
            label="Canonical URL"
            value={seoData.canonicalUrl || ''}
            onChange={handleChange}
            placeholder="https://example.com/page"
            helperText="Use this to prevent duplicate content issues"
          />
          
          <Box sx={{ mt: 2 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={!!seoData.noIndex}
                  onChange={handleSwitchChange('noIndex')}
                />
              }
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography>No Index</Typography>
                  <Tooltip title="Prevents search engines from indexing this page">
                    <IconButton size="small">
                      <InfoIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Box>
              }
            />
            
            <FormControlLabel
              control={
                <Switch
                  checked={!!seoData.noFollow}
                  onChange={handleSwitchChange('noFollow')}
                />
              }
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography>No Follow</Typography>
                  <Tooltip title="Prevents search engines from following links on this page">
                    <IconButton size="small">
                      <InfoIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Box>
              }
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      
      <Accordion
        expanded={expandedSection === 'opengraph'}
        onChange={handleAccordionChange('opengraph')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1">Open Graph (Social Sharing)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ mb: 2 }}>
            <Button
              variant="outlined"
              size="small"
              onClick={handleCopyOpenGraph}
            >
              Copy from Basic SEO
            </Button>
          </Box>
          
          <TextField
            fullWidth
            margin="normal"
            name="ogTitle"
            label="OG Title"
            value={seoData.ogTitle || ''}
            onChange={handleChange}
            helperText="Title for social media sharing"
          />
          
          <TextField
            fullWidth
            margin="normal"
            name="ogDescription"
            label="OG Description"
            value={seoData.ogDescription || ''}
            onChange={handleChange}
            multiline
            rows={2}
            helperText="Description for social media sharing"
          />
          
          <Box sx={{ mt: 2, mb: 2 }}>
            <Typography variant="subtitle2" gutterBottom>
              OG Image
            </Typography>
            <MediaSelector
              value={seoData.ogImage || ''}
              onChange={handleImageChange('ogImage')}
              helperText="Recommended size: 1200x630 pixels"
              showPreview
            />
          </Box>
          
          <TextField
            select
            fullWidth
            margin="normal"
            name="ogType"
            label="OG Type"
            value={seoData.ogType || 'website'}
            onChange={handleChange}
            SelectProps={{
              native: true
            }}
          >
            <option value="website">Website</option>
            <option value="article">Article</option>
            <option value="profile">Profile</option>
            <option value="book">Book</option>
          </TextField>
        </AccordionDetails>
      </Accordion>
      
      <Accordion
        expanded={expandedSection === 'twitter'}
        onChange={handleAccordionChange('twitter')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1">Twitter Card</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ mb: 2 }}>
            <Button
              variant="outlined"
              size="small"
              onClick={handleCopyTwitter}
            >
              Copy from Basic SEO & Open Graph
            </Button>
          </Box>
          
          <TextField
            select
            fullWidth
            margin="normal"
            name="twitterCard"
            label="Twitter Card Type"
            value={seoData.twitterCard || 'summary_large_image'}
            onChange={handleChange}
            SelectProps={{
              native: true
            }}
          >
            <option value="summary">Summary</option>
            <option value="summary_large_image">Summary with Large Image</option>
            <option value="app">App</option>
            <option value="player">Player</option>
          </TextField>
          
          <TextField
            fullWidth
            margin="normal"
            name="twitterTitle"
            label="Twitter Title"
            value={seoData.twitterTitle || ''}
            onChange={handleChange}
          />
          
          <TextField
            fullWidth
            margin="normal"
            name="twitterDescription"
            label="Twitter Description"
            value={seoData.twitterDescription || ''}
            onChange={handleChange}
            multiline
            rows={2}
          />
          
          <Box sx={{ mt: 2, mb: 2 }}>
            <Typography variant="subtitle2" gutterBottom>
              Twitter Image
            </Typography>
            <MediaSelector
              value={seoData.twitterImage || ''}
              onChange={handleImageChange('twitterImage')}
              helperText="Recommended size: 1200x600 pixels"
              showPreview
            />
          </Box>
          
          <TextField
            fullWidth
            margin="normal"
            name="twitterCreator"
            label="Twitter Creator"
            value={seoData.twitterCreator || ''}
            onChange={handleChange}
            placeholder="@username"
            helperText="Twitter username of content creator"
          />
        </AccordionDetails>
      </Accordion>
      
      {showAdvanced && (
        <Accordion
          expanded={expandedSection === 'structured'}
          onChange={handleAccordionChange('structured')}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CodeIcon sx={{ mr: 1 }} />
                Structured Data (JSON-LD)
              </Box>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary" paragraph>
              Add structured data in JSON-LD format to enhance search results with rich snippets.
            </Typography>
            
            <TextField
              fullWidth
              margin="normal"
              name="structuredData"
              label="JSON-LD Structured Data"
              value={seoData.structuredData || ''}
              onChange={handleChange}
              multiline
              rows={10}
              placeholder='{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "headline": "Article headline",\n  "image": "https://example.com/image.jpg",\n  "author": {\n    "@type": "Person",\n    "name": "Author Name"\n  }\n}'
              InputProps={{
                sx: { fontFamily: 'monospace' }
              }}
            />
          </AccordionDetails>
        </Accordion>
      )}
    </Box>
  );
};

export default SEOForm;
