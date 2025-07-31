'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Box, Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { demoScenes } from './cinematic/demoScenes';
import { DemoHeader } from './cinematic/DemoHeader';
import { DemoControls } from './cinematic/DemoControls';
import { SceneRenderer } from './cinematic/SceneRenderer';
import { ParticleSystem } from './ParticleSystem';
import { SoundEffects } from './cinematic/SoundEffects';
import { AdvancedEffects } from './cinematic/AdvancedEffects';
import { SceneNavigator } from './cinematic/SceneNavigator';

export const CinematicDemo: React.FC = () => {
  const [currentScene, setCurrentScene] = useState(1);
  const [currentSection, setCurrentSection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [sectionProgress, setSectionProgress] = useState(0);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const totalScenes = demoScenes.length;
  const currentSceneData = demoScenes.find((scene: any) => scene.id === currentScene);
  const currentSectionData = currentSceneData?.sections[currentSection];

  // Auto-progression logic with smooth transitions
  useEffect(() => {
    if (!isPlaying || !currentSceneData || !currentSectionData) return;

    intervalRef.current = setInterval(() => {
      setSectionProgress(prev => {
        const newProgress = prev + (100 / (currentSectionData.duration / 100));
        
        if (newProgress >= 100) {
          // Move to next section or scene
          if (currentSection < currentSceneData.sections.length - 1) {
            setCurrentSection(prev => prev + 1);
            setSectionProgress(0);
          } else if (currentScene < totalScenes) {
            setCurrentScene(prev => prev + 1);
            setCurrentSection(0);
            setSectionProgress(0);
          } else {
            // Demo complete - restart for continuous loop
            setCurrentScene(1);
            setCurrentSection(0);
            setSectionProgress(0);
          }
          return 0;
        }
        
        return newProgress;
      });
    }, 100);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, currentScene, currentSection, currentSceneData, currentSectionData, totalScenes]);

  // Calculate overall scene progress
  useEffect(() => {
    if (!currentSceneData) return;
    
    const sectionsCompleted = currentSection;
    const totalSections = currentSceneData.sections.length;
    const currentSectionProgress = sectionProgress / 100;
    
    const overallProgress = ((sectionsCompleted + currentSectionProgress) / totalSections) * 100;
    setSceneProgress(overallProgress);
  }, [currentSection, sectionProgress, currentSceneData]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    setCurrentScene(1);
    setCurrentSection(0);
    setSectionProgress(0);
    setSceneProgress(0);
    setIsPlaying(true);
  };

  const handleNextScene = () => {
    if (currentScene < totalScenes) {
      setCurrentScene(currentScene + 1);
      setCurrentSection(0);
      setSectionProgress(0);
    }
  };

  const handlePreviousScene = () => {
    if (currentScene > 1) {
      setCurrentScene(currentScene - 1);
      setCurrentSection(0);
      setSectionProgress(0);
    }
  };

  const handleSeek = (value: number) => {
    if (!currentSceneData) return;
    
    const totalSections = currentSceneData.sections.length;
    const targetSection = Math.floor((value / 100) * totalSections);
    const sectionStartProgress = (targetSection / totalSections) * 100;
    const sectionEndProgress = ((targetSection + 1) / totalSections) * 100;
    const sectionProgress = ((value - sectionStartProgress) / (sectionEndProgress - sectionStartProgress)) * 100;
    
    setCurrentSection(Math.min(targetSection, totalSections - 1));
    setSectionProgress(Math.max(0, Math.min(100, sectionProgress)));
  };

  const handleVolumeChange = (value: number) => {
    setVolume(value);
    if (value > 0) setIsMuted(false);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  const handleFullscreenToggle = () => {
    if (!isFullscreen && containerRef.current) {
      containerRef.current.requestFullscreen?.();
    } else if (isFullscreen) {
      document.exitFullscreen?.();
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleSceneSelect = (sceneId: number) => {
    setCurrentScene(sceneId);
    setCurrentSection(0);
    setSectionProgress(0);
    setSceneProgress(0);
  };

  if (!currentSceneData) return null;

  return (
    <Box
      ref={containerRef}
      sx={{
        minHeight: '100vh',
        background: currentSceneData.background,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Particle Background */}
      <ParticleSystem />
      
      {/* Sound Effects */}
      <SoundEffects
        isPlaying={isPlaying}
        volume={volume}
        isMuted={isMuted}
        currentScene={currentScene}
        sectionType={currentSectionData?.type}
      />
      
      {/* Scene Navigator */}
      <SceneNavigator
        currentScene={currentScene}
        onSceneSelect={handleSceneSelect}
        isPlaying={isPlaying}
      />

      {/* Advanced Visual Effects */}
      <AdvancedEffects
        currentScene={currentScene}
        sectionType={currentSectionData?.type}
        isPlaying={isPlaying}
        progress={sceneProgress}
      />
      
      {/* Dynamic Scene Transition Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`scene-${currentScene}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ 
            duration: 1.5, 
            ease: [0.25, 0.1, 0.25, 1],
            scale: { duration: 2 }
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: currentSceneData.background,
            zIndex: 1,
          }}
        />
      </AnimatePresence>

      {/* Scene Number Indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          background: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: 600,
          zIndex: 4,
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        Scene {currentScene} of {totalScenes}
      </motion.div>

      {/* Main Content */}
      <Container
        maxWidth={false}
        sx={{
          position: 'relative',
          zIndex: 2,
          py: 4,
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Header with Scene Info and Basic Controls */}
        <DemoHeader
          currentScene={currentScene}
          totalScenes={totalScenes}
          sceneTitle={currentSceneData.title}
          sceneSubtitle={currentSceneData.subtitle}
          isPlaying={isPlaying}
          progress={sceneProgress}
          onPlayPause={handlePlayPause}
          onRestart={handleRestart}
        />

        {/* Scene Description with Enhanced Styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Box
            sx={{
              background: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              p: { xs: 2, md: 4 },
              mb: 4,
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            }}
          >
            <motion.div
              key={`description-${currentScene}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  color: 'rgba(255, 255, 255, 0.95)',
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  lineHeight: 1.7,
                  maxWidth: '900px',
                  mx: 'auto',
                  fontWeight: 400,
                }}
              >
                {currentSceneData.description}
              </Box>
            </motion.div>
          </Box>
        </motion.div>

        {/* Scene Content with Smooth Transitions */}
        <motion.div
          key={`content-${currentScene}-${currentSection}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SceneRenderer
            scene={currentSceneData}
            currentSection={currentSection}
            sectionProgress={sectionProgress}
          />
        </motion.div>
      </Container>

      {/* Advanced Video-like Controls */}
      <DemoControls
        isPlaying={isPlaying}
        currentScene={currentScene}
        totalScenes={totalScenes}
        progress={sceneProgress}
        volume={volume}
        isMuted={isMuted}
        isFullscreen={isFullscreen}
        onPlayPause={handlePlayPause}
        onRestart={handleRestart}
        onNextScene={handleNextScene}
        onPreviousScene={handlePreviousScene}
        onSeek={handleSeek}
        onVolumeChange={handleVolumeChange}
        onMuteToggle={handleMuteToggle}
        onFullscreenToggle={handleFullscreenToggle}
      />

      {/* Cinematic Effects */}
      
      {/* Vignette Effect */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)',
          pointerEvents: 'none',
          zIndex: 3,
        }}
      />

      {/* Film Grain Effect */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          pointerEvents: 'none',
          zIndex: 3,
          animation: 'grainAnimation 0.2s steps(10) infinite',
          '@keyframes grainAnimation': {
            '0%, 100%': { transform: 'translate(0, 0)' },
            '10%': { transform: 'translate(-5%, -10%)' },
            '20%': { transform: 'translate(-15%, 5%)' },
            '30%': { transform: 'translate(7%, -25%)' },
            '40%': { transform: 'translate(-5%, 25%)' },
            '50%': { transform: 'translate(-15%, 10%)' },
            '60%': { transform: 'translate(15%, 0%)' },
            '70%': { transform: 'translate(0%, 15%)' },
            '80%': { transform: 'translate(3%, 35%)' },
            '90%': { transform: 'translate(-10%, 10%)' },
          },
        }}
      />

      {/* Lens Flare Effect on Scene Transitions */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            key={`flare-${currentScene}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 2 }}
            exit={{ opacity: 0, scale: 4 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              position: 'fixed',
              top: '20%',
              right: '15%',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 3,
              filter: 'blur(1px)',
            }}
          />
        )}
      </AnimatePresence>

      {/* Chromatic Aberration Effect */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 3,
          background: `
            linear-gradient(90deg, 
              rgba(255,0,0,0.03) 0%, 
              transparent 2%, 
              transparent 98%, 
              rgba(0,0,255,0.03) 100%
            )
          `,
        }}
      />
    </Box>
  );
};
