// SEO Types

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  canonicalUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  structuredData?: string;
  noIndex?: boolean;
  noFollow?: boolean;
}

export interface SEOFormProps {
  seoData?: SEOData;
  onChange: (data: SEOData) => void;
  onSave?: (data: SEOData) => void;
  onCancel?: () => void;
  showAdvanced?: boolean;
}

export interface SEOPreviewProps {
  seoData: SEOData;
}
