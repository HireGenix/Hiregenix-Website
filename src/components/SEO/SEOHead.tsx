'use client';

import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonicalUrl?: string;
  structuredData?: Record<string, any>;
  noIndex?: boolean;
}

/**
 * SEOHead component for consistent SEO implementation across pages
 * This component can be used in addition to Next.js metadata for client-side SEO enhancements
 */
const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'HireGenix - AI-Powered Recruitment Platform',
  description = 'HireGenix helps companies find and hire the best talent with AI-powered candidate matching, video interviews, and skills assessment.',
  keywords = 'AI recruitment, hiring platform, talent acquisition, candidate matching, video interviews, skills assessment',
  ogImage = '/hero-image.png',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  structuredData,
  noIndex = false,
}) => {
  const domain = 'https://www.myhiregenix.com';
  const fullCanonicalUrl = canonicalUrl ? `${domain}${canonicalUrl}` : undefined;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${domain}${ogImage}`;

  return (
    <>
      {/* Additional meta tags that complement Next.js metadata */}
      <Head>
        {noIndex && <meta name="robots" content="noindex, nofollow" />}
        {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}
        
        {/* Hreflang tags for internationalization if needed */}
        <link rel="alternate" hrefLang="en" href={`${domain}`} />
        
        {/* Additional social media tags */}
        <meta property="og:site_name" content="HireGenix" />
        {ogImage && <meta property="og:image" content={fullOgImage} />}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter specific */}
        <meta name="twitter:site" content="@hiregenix" />
        <meta name="twitter:creator" content="@hiregenix" />
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

export default SEOHead;
