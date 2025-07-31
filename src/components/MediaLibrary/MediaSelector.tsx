'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  Paper
} from '@mui/material';
import {
  Image as ImageIcon,
  Search as SearchIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import { MediaLibrary } from './index';
import { MediaItem } from './types';

interface MediaSelectorProps {
  value?: string;
  onChange: (url: string) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  variant?: 'standard' | 'filled' | 'outlined';
  size?: 'small' | 'medium';
  showPreview?: boolean;
}

const MediaSelector: React.FC<MediaSelectorProps> = ({
  value = '',
  onChange,
  label = 'Media URL',
  placeholder = 'Select media from library',
  helperText,
  required = false,
  disabled = false,
  error = false,
  fullWidth = true,
  variant = 'outlined',
  size = 'medium',
  showPreview = true
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [localValue, setLocalValue] = useState(value);

  // Handle dialog open
  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  // Handle dialog close
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  // Handle media selection
  const handleSelectMedia = (media: MediaItem) => {
    setLocalValue(media.url);
    onChange(media.url);
    handleCloseDialog();
  };

  // Handle manual URL input
  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
    onChange(e.target.value);
  };

  // Handle clear
  const handleClear = () => {
    setLocalValue('');
    onChange('');
  };

  // Determine if the URL is an image
  const isImage = localValue && (
    localValue.endsWith('.jpg') ||
    localValue.endsWith('.jpeg') ||
    localValue.endsWith('.png') ||
    localValue.endsWith('.gif') ||
    localValue.endsWith('.webp') ||
    localValue.endsWith('.svg') ||
    localValue.includes('placeholder.com') ||
    localValue.includes('unsplash.com')
  );

  return (
    <>
      <Box sx={{ mb: 2 }}>
        <TextField
          label={label}
          value={localValue}
          onChange={handleUrlChange}
          placeholder={placeholder}
          helperText={helperText}
          required={required}
          disabled={disabled}
          error={error}
          fullWidth={fullWidth}
          variant={variant}
          size={size}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ImageIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClear}
                  edge="end"
                  disabled={!localValue}
                >
                  <CloseIcon />
                </IconButton>
                <Button
                  onClick={handleOpenDialog}
                  disabled={disabled}
                  size="small"
                  sx={{ ml: 1 }}
                >
                  Browse
                </Button>
              </InputAdornment>
            )
          }}
        />

        {showPreview && localValue && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="caption" color="text.secondary" gutterBottom>
              Preview:
            </Typography>
            {isImage ? (
              <Box
                component="img"
                src={localValue}
                alt="Media preview"
                sx={{
                  maxWidth: '100%',
                  maxHeight: 200,
                  objectFit: 'contain',
                  display: 'block',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 1
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            ) : (
              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 100
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  {localValue ? 'Non-image media' : 'No media selected'}
                </Typography>
              </Paper>
            )}
          </Box>
        )}
      </Box>

      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle>
          Select Media
          <IconButton
            aria-label="close"
            onClick={handleCloseDialog}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <MediaLibrary
            onSelect={handleSelectMedia}
            selectionMode={true}
            maxSelection={1}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MediaSelector;
