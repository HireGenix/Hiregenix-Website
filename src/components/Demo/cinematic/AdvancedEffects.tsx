import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

interface AdvancedEffectsProps {
  currentScene: number;
  sectionType?: string;
  isPlaying: boolean;
  progress: number;
}

export const AdvancedEffects: React.FC<AdvancedEffectsProps> = ({
  currentScene,
  sectionType,
  isPlaying,
  progress
}) => {
  const [effectTrigger, setEffectTrigger] = useState(0);

  // Trigger effects on scene changes
  useEffect(() => {
    if (isPlaying) {
      setEffectTrigger(prev => prev + 1);
    }
  }, [currentScene, isPlaying]);

  // Particle burst effect for special moments
  const ParticleBurst = ({ trigger }: { trigger: number }) => (
    <AnimatePresence>
      {trigger > 0 && (
        <motion.div
          key={trigger}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            zIndex: 5,
          }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 1,
                scale: 0,
                x: '50vw',
                y: '50vh',
              }}
              animate={{
                opacity: 0,
                scale: Math.random() * 2 + 1,
                x: `${Math.random() * 100}vw`,
                y: `${Math.random() * 100}vh`,
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                ease: 'easeOut',
              }}
              style={{
                position: 'absolute',
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                borderRadius: '50%',
                background: `hsl(${Math.random() * 360}, 70%, 60%)`,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Dynamic light rays
  const LightRays = () => (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.1,
        background: `
          conic-gradient(
            from 0deg at 50% 50%,
            transparent 0deg,
            rgba(255, 255, 255, 0.3) 30deg,
            transparent 60deg,
            rgba(255, 255, 255, 0.3) 120deg,
            transparent 150deg,
            rgba(255, 255, 255, 0.3) 210deg,
            transparent 240deg,
            rgba(255, 255, 255, 0.3) 300deg,
            transparent 330deg,
            transparent 360deg
          )
        `,
        animation: isPlaying ? 'rotateRays 20s linear infinite' : 'none',
        '@keyframes rotateRays': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      }}
    />
  );

  // Data stream effect for tech scenes
  const DataStream = () => (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 2,
        opacity: sectionType === 'process' || sectionType === 'analytics' ? 0.3 : 0,
        transition: 'opacity 1s ease',
      }}
    >
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: '-100vh' }}
          animate={{ y: '100vh' }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            left: `${(i * 12.5) + Math.random() * 5}%`,
            width: '2px',
            height: '60px',
            background: 'linear-gradient(180deg, transparent, #00ff88, transparent)',
            borderRadius: '1px',
          }}
        />
      ))}
    </Box>
  );

  // Holographic grid
  const HolographicGrid = () => (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 1,
        opacity: currentScene >= 7 ? 0.15 : 0,
        transition: 'opacity 2s ease',
        background: `
          linear-gradient(90deg, transparent 48%, rgba(0, 255, 255, 0.5) 50%, transparent 52%),
          linear-gradient(0deg, transparent 48%, rgba(0, 255, 255, 0.5) 50%, transparent 52%)
        `,
        backgroundSize: '40px 40px',
        animation: isPlaying && currentScene >= 7 ? 'gridPulse 4s ease-in-out infinite' : 'none',
        '@keyframes gridPulse': {
          '0%, 100%': { opacity: 0.1 },
          '50%': { opacity: 0.2 },
        },
      }}
    />
  );

  // Energy orbs for special effects
  const EnergyOrbs = () => (
    <AnimatePresence>
      {isPlaying && sectionType === 'showcase' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, 100, -50, 0],
                y: [0, -80, 60, 0],
                scale: [1, 1.5, 0.8, 1],
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
              style={{
                position: 'fixed',
                top: `${20 + i * 15}%`,
                left: `${10 + i * 20}%`,
                width: 20 + Math.random() * 20,
                height: 20 + Math.random() * 20,
                borderRadius: '50%',
                background: `radial-gradient(circle, rgba(${100 + i * 30}, ${200 - i * 20}, 255, 0.6) 0%, transparent 70%)`,
                pointerEvents: 'none',
                zIndex: 3,
                filter: 'blur(1px)',
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Neural network connections
  const NeuralConnections = () => (
    <AnimatePresence>
      {currentScene === 8 && sectionType === 'showcase' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            zIndex: 2,
          }}
        >
          <svg
            width="100%"
            height="100%"
            style={{ position: 'absolute' }}
          >
            {[...Array(15)].map((_, i) => {
              const x1 = Math.random() * 100;
              const y1 = Math.random() * 100;
              const x2 = Math.random() * 100;
              const y2 = Math.random() * 100;
              
              return (
                <motion.line
                  key={i}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="rgba(102, 126, 234, 0.3)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: i * 0.2,
                  }}
                />
              );
            })}
            
            {/* Neural nodes */}
            {[...Array(10)].map((_, i) => (
              <motion.circle
                key={i}
                cx={`${Math.random() * 100}%`}
                cy={`${Math.random() * 100}%`}
                r="3"
                fill="rgba(102, 126, 234, 0.8)"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.5, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Quantum particles for future scenes
  const QuantumParticles = () => (
    <AnimatePresence>
      {currentScene >= 9 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            zIndex: 2,
          }}
        >
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, 200, -100, 0],
                y: [0, -150, 100, 0],
                rotate: [0, 360, -180, 0],
                scale: [0.5, 2, 0.8, 0.5],
              }}
              transition={{
                duration: Math.random() * 10 + 8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.4,
              }}
              style={{
                position: 'absolute',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: 8,
                height: 8,
                background: `hsl(${280 + Math.random() * 80}, 70%, 60%)`,
                borderRadius: '50%',
                boxShadow: `0 0 20px hsl(${280 + Math.random() * 80}, 70%, 60%)`,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <LightRays />
      <DataStream />
      <HolographicGrid />
      <EnergyOrbs />
      <NeuralConnections />
      <QuantumParticles />
      <ParticleBurst trigger={effectTrigger} />
    </>
  );
};
