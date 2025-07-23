# SEO Components

The SEO components provide a comprehensive solution for managing search engine optimization settings in the HireGenix CMS. These components allow users to configure meta tags, Open Graph data, Twitter Cards, and structured data for their pages and posts.

## Features

- **Basic SEO**: Configure meta title, description, and keywords
- **Open Graph**: Set up social media sharing metadata for Facebook, LinkedIn, etc.
- **Twitter Cards**: Configure Twitter-specific sharing metadata
- **Structured Data**: Add JSON-LD structured data for rich snippets
- **SEO Preview**: Preview how content will appear in search results and social media
- **Robots Control**: Set noindex and nofollow directives
- **Canonical URLs**: Specify canonical URLs to prevent duplicate content issues

## Components

### SEOForm

A form component for editing SEO settings with a user-friendly interface.

```tsx
import { SEOForm, SEOData } from '@/components/SEO';

// Initial SEO data
const [seoData, setSeoData] = useState<SEOData>({
  title: 'Page Title',
  description: 'Page description',
  keywords: 'keyword1, keyword2',
});

// Usage
<SEOForm
  seoData={seoData}
  onChange={setSeoData}
  showAdvanced={true}
/>
```

### SEOMetadata

A component for rendering SEO metadata in the head of the page.

```tsx
import { SEOMetadata, SEOData } from '@/components/SEO';

// SEO data
const seoData: SEOData = {
  title: 'Page Title',
  description: 'Page description',
  keywords: 'keyword1, keyword2',
};

// Usage
<SEOMetadata
  seoData={seoData}
  url="https://example.com/page"
  siteName="HireGenix"
/>
```

### SEOPreview

A component for previewing how content will appear in search results and social media.

```tsx
import { SEOPreview, SEOData } from '@/components/SEO';

// SEO data
const seoData: SEOData = {
  title: 'Page Title',
  description: 'Page description',
  ogImage: 'https://example.com/image.jpg',
};

// Usage
<SEOPreview seoData={seoData} />
```

## API

### SEOData

```typescript
interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile' | 'book';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterCreator?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  structuredData?: string; // JSON-LD as a string
}
```

### SEOFormProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| seoData | `SEOData` | - | The SEO data to edit |
| onChange | `(seoData: SEOData) => void` | - | Callback when the SEO data changes |
| showAdvanced | `boolean` | `false` | Whether to show advanced options like structured data |

### SEOMetadataProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| seoData | `SEOData` | - | The SEO data to render |
| url | `string` | - | The URL of the page |
| siteName | `string` | `'HireGenix'` | The name of the site |

### SEOPreviewProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| seoData | `SEOData` | - | The SEO data to preview |

## Integration with Page Editor

The SEO components are integrated with the page editor, allowing users to configure SEO settings for each page:

1. Navigate to the page editor
2. Click on the "SEO" tab
3. Configure SEO settings using the SEOForm component
4. Preview how the page will appear in search results and social media
5. Save the page to apply the SEO settings

## Best Practices

- **Meta Title**: Keep it under 60 characters for optimal display in search results
- **Meta Description**: Keep it under 160 characters for optimal display in search results
- **Open Graph Image**: Use an image with a 1200x630 pixel resolution for optimal display on social media
- **Twitter Card Image**: Use an image with a 1200x600 pixel resolution for optimal display on Twitter
- **Structured Data**: Use the JSON-LD format for structured data, following the schema.org guidelines
- **Canonical URL**: Use canonical URLs to prevent duplicate content issues
- **Keywords**: While less important for modern SEO, include relevant keywords separated by commas
