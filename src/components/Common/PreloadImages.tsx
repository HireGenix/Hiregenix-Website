'use client';

import { useEffect } from 'react';

interface PreloadImagesProps {
  images: string[];
}

/**
 * Component to preload images and prevent flickering when they load
 */
export const PreloadImages: React.FC<PreloadImagesProps> = ({ images }) => {
  useEffect(() => {
    const preloadedImages: HTMLImageElement[] = [];

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      preloadedImages.push(img);
    });

    return () => {
      // Cleanup
      preloadedImages.forEach((img) => {
        img.src = '';
      });
    };
  }, [images]);

  return null;
};
