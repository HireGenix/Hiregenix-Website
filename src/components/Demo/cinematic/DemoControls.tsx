import React from 'react';
import { Box, IconButton, Tooltip, Slider, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

interface DemoControlsProps {
  isPlaying: boolean;
  currentScene: number;
  totalScenes: number;
  progress: number;
  volume: number;
  isMuted: boolean;
  isFullscreen: boolean;
  onPlayPause: () => void;
  onRestart: () => void;
  onNextScene: () => void;
  onPreviousScene: () => void;
  onSeek: (value: number) => void;
  onVolumeChange: (value: number) => void;
  onMuteToggle: () => void;
  onFullscreenToggle: () => void;
}

export const DemoControls: React.FC<DemoControlsProps> = ({
  isPlaying,
  currentScene,
  totalScenes,
  progress,
  volume,
  isMuted,
  isFullscreen,
  onPlayPause,
  onRestart,
  onNextScene,
  onPreviousScene,
  onSeek,
  onVolumeChange,
  onMuteToggle,
  onFullscreenToggle
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <Box
        sx={{
          position: 'fixed',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          p: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          zIndex: 1000,
          minWidth: '400px',
        }}
      >
        {/* Progress Slider */}
        <Box sx={{ position: 'absolute', top: -8, left: 20, right: 20 }}>
          <Slider
            value={progress}
            onChange={(_, value) => onSeek(value as number)}
            sx={{
              color: '#667eea',
              height: 4,
              '& .MuiSlider-thumb': {
                width: 12,
                height: 12,
                '&:hover, &.Mui-focusVisible': {
                  boxShadow: '0 0 0 8px rgba(102, 126, 234, 0.16)',
                },
              },
              '& .MuiSlider-track': {
                border: 'none',
                background: 'linear-gradient(90deg, #667eea, #764ba2)',
              },
              '& .MuiSlider-rail': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          />
        </Box>

        {/* Previous Scene */}
        <Tooltip title="Previous Scene">
          <IconButton
            onClick={onPreviousScene}
            disabled={currentScene === 1}
            sx={{ 
              color: 'white',
              '&:disabled': { color: 'rgba(255, 255, 255, 0.3)' }
            }}
          >
            <SkipPreviousIcon />
          </IconButton>
        </Tooltip>

        {/* Play/Pause */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <IconButton
            onClick={onPlayPause}
            sx={{
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              color: 'white',
              width: 48,
              height: 48,
              '&:hover': {
                background: 'linear-gradient(45deg, #5a6fd8, #6a4190)',
              },
            }}
          >
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
        </motion.div>

        {/* Next Scene */}
        <Tooltip title="Next Scene">
          <IconButton
            onClick={onNextScene}
            disabled={currentScene === totalScenes}
            sx={{ 
              color: 'white',
              '&:disabled': { color: 'rgba(255, 255, 255, 0.3)' }
            }}
          >
            <SkipNextIcon />
          </IconButton>
        </Tooltip>

        {/* Restart */}
        <Tooltip title="Restart Demo">
          <IconButton onClick={onRestart} sx={{ color: 'white' }}>
            <RestartAltIcon />
          </IconButton>
        </Tooltip>

        {/* Scene Counter */}
        <Typography
          variant="body2"
          sx={{
            color: 'white',
            minWidth: '60px',
            textAlign: 'center',
            fontSize: '12px',
            fontWeight: 500,
          }}
        >
          {currentScene}/{totalScenes}
        </Typography>

        {/* Volume Control */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 2 }}>
          <IconButton onClick={onMuteToggle} sx={{ color: 'white', p: 0.5 }}>
            {isMuted || volume === 0 ? <VolumeOffIcon fontSize="small" /> : <VolumeUpIcon fontSize="small" />}
          </IconButton>
          <Slider
            value={isMuted ? 0 : volume}
            onChange={(_, value) => onVolumeChange(value as number)}
            sx={{
              width: 60,
              color: '#667eea',
              '& .MuiSlider-thumb': {
                width: 10,
                height: 10,
              },
              '& .MuiSlider-track': {
                border: 'none',
              },
              '& .MuiSlider-rail': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          />
        </Box>

        {/* Fullscreen */}
        <Tooltip title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}>
          <IconButton onClick={onFullscreenToggle} sx={{ color: 'white' }}>
            <FullscreenIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </motion.div>
  );
};
