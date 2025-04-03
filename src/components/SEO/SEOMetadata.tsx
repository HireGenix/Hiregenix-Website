'use client';

import React from 'react';
import Head from 'next/head';

interface SEOProps {
  seoData: {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    ogType?: string;
    ogUrl?: string;
  };
}

export const SEOMetadata: React.FC<SEOProps> = ({ seoData }) => {
  const {
    title,
    description,
    keywords,
    ogImage = '/og-image.jpg',
    ogType = 'website',
    ogUrl = 'https://hiregenix.com',
  } = seoData;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </Head>
  );
};
