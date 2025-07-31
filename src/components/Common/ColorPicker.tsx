'use client';

import React, { useState, useEffect } from 'react';
import { Box, TextField, Popover, Typography } from '@mui/material';
import { SketchPicker } from 'react-color';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ label, value, onChange }) => {
  const [color, setColor] = useState(value || '');
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setColor(value || '');
  }, [value]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (newColor: any) => {
    setColor(newColor.hex);
  };

  const handleChangeComplete = (newColor: any) => {
    onChange(newColor.hex);
  };

  const open = Boolean(anchorEl);

  return (
    <Box>
      <TextField
        fullWidth
        label={label}
        value={color}
        onClick={handleClick}
        InputProps={{
          startAdornment: (
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: 1,
                mr: 1,
                backgroundColor: color || 'transparent',
                border: '1px solid #ccc',
              }}
            />
          ),
          readOnly: true,
        }}
      />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <SketchPicker
          color={color}
          onChange={handleChange}
          onChangeComplete={handleChangeComplete}
        />
      </Popover>
    </Box>
  );
};

export default ColorPicker;
