# SEO Best Practices for HireGenix Website

This document outlines the SEO best practices implemented on the HireGenix website and provides guidelines for maintaining and improving SEO performance.

## Implemented SEO Features

The following SEO features have been implemented:

1. **Metadata Configuration**
   - Page-specific metadata for title, description, and keywords
   - Open Graph tags for social media sharing
   - Twitter Card tags for Twitter sharing
   - Canonical URLs to prevent duplicate content issues

2. **Structured Data**
   - JSON-LD structured data for Organization
   - JSON-LD structured data for SoftwareApplication
   - Schema markup for better search engine understanding

3. **Technical SEO**
   - Robots.txt file to control crawler access
   - XML Sitemap for better indexing
   - Semantic HTML structure with proper heading hierarchy
   - Responsive design for mobile optimization

4. **SEO Components**
   - `SEOHead` component for client-side SEO enhancements
   - `SEOMetadata` component for page-specific SEO implementation

## Using SEO Components

### SEOMetadata Component

Use the `SEOMetadata` component in client-side pages:

```jsx
import { SEOMetadata } from '@/components/SEO';

export default function YourPage() {
  const seoData = {
    title: 'Page Title | HireGenix',
    description: 'Detailed page description with important keywords.',
    keywords: 'relevant, keywords, separated, by, commas',
    // Optional parameters
    ogImage: '/path-to-image.jpg', // Image for social sharing
    canonicalUrl: '/your-page', // Custom canonical URL
    noIndex: false, // Set to true to prevent indexing
  };

  return (
    <>
      <SEOMetadata seoData={seoData} />
      {/* Page content */}
    </>
  );
}
```

### Next.js Metadata API

For server components, use the Next.js Metadata API:

```jsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title | HireGenix',
  description: 'Detailed page description with important keywords.',
  keywords: 'relevant, keywords, separated, by, commas',
  // Additional metadata
};

export default function YourPage() {
  return (
    // Page content
  );
}
```

## SEO Best Practices

### Page Titles
- Keep titles under 60 characters
- Include primary keyword near the beginning
- Use a consistent format: `Page Name | HireGenix`
- Make each title unique across the site

### Meta Descriptions
- Keep descriptions between 120-160 characters
- Include primary and secondary keywords naturally
- Write compelling copy that encourages clicks
- Include a call to action when appropriate

### Content Guidelines
- Use proper heading hierarchy (H1, H2, H3, etc.)
- Include primary keywords in headings and first paragraph
- Write comprehensive, valuable content (aim for 300+ words per page)
- Use internal linking to connect related content
- Optimize images with descriptive filenames and alt text

### Technical Considerations
- Ensure fast page loading times
- Implement responsive design for all devices
- Use semantic HTML elements
- Ensure all pages are accessible via internal links
- Regularly check for and fix broken links

## Domain Configuration

The website is configured to use the domain `https://www.myhiregenix.com`. Ensure all internal links and references use this domain consistently.

## Monitoring and Improvement

- Regularly check Google Search Console for indexing issues
- Monitor page performance using Lighthouse or PageSpeed Insights
- Track keyword rankings and organic traffic
- Update content regularly to keep it fresh and relevant

---

For questions or assistance with SEO implementation, contact the development team.
