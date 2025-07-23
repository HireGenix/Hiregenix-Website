'use client';

import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Divider,
  Link
} from '@mui/material';
import { SEOPreviewProps } from './types';

const SEOPreview: React.FC<SEOPreviewProps> = ({ seoData }) => {
  const title = seoData.title || 'Page Title';
  const description = seoData.description || 'Page description goes here. This is what users and search engines will see as a summary of your page content.';
  const url = seoData.canonicalUrl || 'https://example.com/page';

  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom color="text.secondary">
        Search Engine Preview
      </Typography>
      
      <Paper variant="outlined" sx={{ p: 2, bgcolor: '#f9f9f9' }}>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{
            color: '#1a0dab',
            fontWeight: 'normal',
            fontSize: '18px',
            mb: 0.5,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical'
          }}
        >
          {title}
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
          {url}
        </Typography>
        
        <Typography
          variant="body2"
          component="div"
          sx={{
            color: '#545454',
            fontSize: '14px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}
        >
          {description}
        </Typography>
      </Paper>
      
      {(seoData.ogTitle || seoData.ogDescription || seoData.ogImage) && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle2" gutterBottom color="text.secondary">
            Social Media Preview (Open Graph)
          </Typography>
          
          <Paper variant="outlined" sx={{ overflow: 'hidden' }}>
            {seoData.ogImage && (
              <Box
                component="img"
                src={seoData.ogImage}
                alt="Open Graph preview"
                sx={{
                  width: '100%',
                  height: 200,
                  objectFit: 'cover',
                  display: 'block'
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            )}
            
            <Box sx={{ p: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 'bold',
                  mb: 1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical'
                }}
              >
                {seoData.ogTitle || title}
              </Typography>
              
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mb: 1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical'
                }}
              >
                {seoData.ogDescription || description}
              </Typography>
              
              <Typography variant="caption" color="text.secondary">
                {url}
              </Typography>
            </Box>
          </Paper>
        </Box>
      )}
      
      {(seoData.twitterTitle || seoData.twitterDescription || seoData.twitterImage) && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle2" gutterBottom color="text.secondary">
            Twitter Card Preview
          </Typography>
          
          <Paper variant="outlined" sx={{ overflow: 'hidden' }}>
            {seoData.twitterImage && (
              <Box
                component="img"
                src={seoData.twitterImage}
                alt="Twitter Card preview"
                sx={{
                  width: '100%',
                  height: 200,
                  objectFit: 'cover',
                  display: 'block'
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            )}
            
            <Box sx={{ p: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 'bold',
                  mb: 1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical'
                }}
              >
                {seoData.twitterTitle || seoData.ogTitle || title}
              </Typography>
              
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mb: 1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical'
                }}
              >
                {seoData.twitterDescription || seoData.ogDescription || description}
              </Typography>
              
              <Typography variant="caption" color="text.secondary">
                {url}
              </Typography>
            </Box>
          </Paper>
        </Box>
      )}
      
      {seoData.noIndex || seoData.noFollow ? (
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle2" gutterBottom color="error">
            Search Engine Directives
          </Typography>
          
          <Paper variant="outlined" sx={{ p: 2, bgcolor: '#fff8f8' }}>
            <Typography variant="body2" color="error">
              {seoData.noIndex && seoData.noFollow
                ? 'This page will not be indexed by search engines and links will not be followed.'
                : seoData.noIndex
                ? 'This page will not be indexed by search engines.'
                : 'Links on this page will not be followed by search engines.'}
            </Typography>
          </Paper>
        </Box>
      ) : null}
    </Box>
  );
};

export default SEOPreview;
