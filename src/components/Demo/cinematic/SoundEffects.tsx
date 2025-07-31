import React, { useEffect, useRef, useCallback } from 'react';

interface SoundEffectsProps {
  isPlaying: boolean;
  volume: number;
  isMuted: boolean;
  currentScene: number;
  sectionType?: string;
}

export const SoundEffects: React.FC<SoundEffectsProps> = ({
  isPlaying,
  volume,
  isMuted,
  currentScene,
  sectionType
}) => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  useEffect(() => {
    // Initialize Web Audio API for procedural sound generation
    if (typeof window !== 'undefined' && !audioContextRef.current) {
      try {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      } catch (error) {
        console.log('Web Audio API not supported');
      }
    }

    return () => {
      if (oscillatorRef.current) {
        oscillatorRef.current.stop();
        oscillatorRef.current = null;
      }
    };
  }, []);

  const createSoundEffect = useCallback((frequency: number, duration: number, type: OscillatorType = 'sine') => {
    if (!audioContextRef.current || isMuted || volume === 0) return;

    try {
      const oscillator = audioContextRef.current.createOscillator();
      const gainNode = audioContextRef.current.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContextRef.current.destination);

      oscillator.frequency.setValueAtTime(frequency, audioContextRef.current.currentTime);
      oscillator.type = type;

      // Apply volume
      gainNode.gain.setValueAtTime(0, audioContextRef.current.currentTime);
      gainNode.gain.linearRampToValueAtTime((volume / 100) * 0.1, audioContextRef.current.currentTime + 0.1);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + duration);

      oscillator.start(audioContextRef.current.currentTime);
      oscillator.stop(audioContextRef.current.currentTime + duration);
    } catch (error) {
      console.log('Sound effect creation failed');
    }
  }, [isMuted, volume]);

  // Scene transition sounds
  useEffect(() => {
    if (isPlaying) {
      // Different sounds for different scenes
      switch (currentScene) {
        case 1: // Welcome - warm bell sound
          createSoundEffect(800, 0.5, 'sine');
          setTimeout(() => createSoundEffect(1000, 0.3, 'sine'), 200);
          break;
        case 2: // Job Creation - tech beep
          createSoundEffect(440, 0.2, 'square');
          break;
        case 3: // AI Matching - futuristic sweep
          createSoundEffect(220, 0.1, 'sawtooth');
          setTimeout(() => createSoundEffect(880, 0.1, 'sawtooth'), 100);
          break;
        case 4: // Assessment - notification chime
          createSoundEffect(523, 0.3, 'triangle');
          setTimeout(() => createSoundEffect(659, 0.3, 'triangle'), 150);
          break;
        case 5: // Interview - soft notification
          createSoundEffect(392, 0.4, 'sine');
          break;
        case 6: // Analytics - data sound
          createSoundEffect(330, 0.2, 'square');
          setTimeout(() => createSoundEffect(440, 0.2, 'square'), 100);
          break;
        default:
          // Future scenes - mysterious sound
          createSoundEffect(110, 0.5, 'triangle');
          setTimeout(() => createSoundEffect(220, 0.3, 'triangle'), 250);
      }
    }
  }, [currentScene, isPlaying, volume, isMuted, createSoundEffect]);

  // Section type sounds
  useEffect(() => {
    if (!isPlaying || !sectionType) return;

    switch (sectionType) {
      case 'process':
        // Processing sound - rhythmic beeps
        createSoundEffect(660, 0.1, 'square');
        break;
      case 'results':
        // Success sound - ascending tones
        createSoundEffect(523, 0.2, 'sine');
        setTimeout(() => createSoundEffect(659, 0.2, 'sine'), 100);
        setTimeout(() => createSoundEffect(784, 0.3, 'sine'), 200);
        break;
      case 'interactive':
        // Interactive sound - gentle chime
        createSoundEffect(880, 0.2, 'triangle');
        break;
      case 'transition':
        // Transition whoosh - frequency sweep
        if (audioContextRef.current && !isMuted && volume > 0) {
          try {
            const oscillator = audioContextRef.current.createOscillator();
            const gainNode = audioContextRef.current.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContextRef.current.destination);
            
            oscillator.frequency.setValueAtTime(100, audioContextRef.current.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(1000, audioContextRef.current.currentTime + 0.5);
            oscillator.type = 'sawtooth';
            
            gainNode.gain.setValueAtTime(0, audioContextRef.current.currentTime);
            gainNode.gain.linearRampToValueAtTime((volume / 100) * 0.05, audioContextRef.current.currentTime + 0.1);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.5);
            
            oscillator.start(audioContextRef.current.currentTime);
            oscillator.stop(audioContextRef.current.currentTime + 0.5);
          } catch (error) {
            console.log('Transition sound failed');
          }
        }
        break;
    }
  }, [sectionType, isPlaying, volume, isMuted, createSoundEffect]);

  // Ambient background tone
  useEffect(() => {
    if (isPlaying && !isMuted && volume > 0 && audioContextRef.current) {
      try {
        const oscillator = audioContextRef.current.createOscillator();
        const gainNode = audioContextRef.current.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContextRef.current.destination);
        
        // Very low frequency ambient tone
        oscillator.frequency.setValueAtTime(40, audioContextRef.current.currentTime);
        oscillator.type = 'sine';
        
        // Very quiet volume
        gainNode.gain.setValueAtTime((volume / 100) * 0.01, audioContextRef.current.currentTime);
        
        oscillator.start(audioContextRef.current.currentTime);
        
        oscillatorRef.current = oscillator;
        gainNodeRef.current = gainNode;
      } catch (error) {
        console.log('Ambient sound failed');
      }
    } else if (oscillatorRef.current) {
      oscillatorRef.current.stop();
      oscillatorRef.current = null;
    }

    return () => {
      if (oscillatorRef.current) {
        try {
          oscillatorRef.current.stop();
        } catch (error) {
          // Oscillator might already be stopped
        }
        oscillatorRef.current = null;
      }
    };
  }, [isPlaying, isMuted, volume]);

  return null; // This component doesn't render anything visual
};
