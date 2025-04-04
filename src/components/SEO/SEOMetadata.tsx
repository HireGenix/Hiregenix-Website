'use client';

import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

interface SEOProps {
  seoData: {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    ogType?: string;
    canonicalUrl?: string;
    structuredData?: Record<string, any>;
    noIndex?: boolean;
  };
}

/**
 * SEOMetadata component for consistent SEO implementation across pages
 * This component is used to maintain compatibility with existing code
 */
const SEOMetadata: React.FC<SEOProps> = ({ seoData }) => {
  const {
    title = 'HireGenix - AI-Powered Recruitment Platform',
    description = 'HireGenix helps companies find and hire the best talent with AI-powered candidate matching, video interviews, and skills assessment.',
    keywords = 'AI recruitment, hiring platform, talent acquisition, candidate matching, video interviews, skills assessment',
    ogImage = '/hero-image.png',
    ogType = 'website',
    canonicalUrl,
    structuredData,
    noIndex = false,
  } = seoData;

  const domain = 'https://www.myhiregenix.com';
  const fullCanonicalUrl = canonicalUrl ? `${domain}${canonicalUrl}` : `${domain}${typeof window !== 'undefined' ? window.location.pathname : ''}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${domain}${ogImage}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        
        {noIndex && <meta name="robots" content="noindex, nofollow" />}
        <link rel="canonical" href={fullCanonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={fullCanonicalUrl} />
        <meta property="og:image" content={fullOgImage} />
        <meta property="og:site_name" content="HireGenix" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@hiregenix" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={fullOgImage} />
      </Head>
      
      {/* Structured data */}
      {structuredData && (
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </>
  );
};

export default SEOMetadata;
