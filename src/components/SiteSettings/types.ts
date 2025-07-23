// Site Settings Types

export interface SiteSettings {
  siteName: string;
  siteUrl?: string;
  siteDescription?: string;
  googleTagManagerId?: string;
  recaptchaSiteKey?: string;
  mapboxApiKey?: string;
  
  // General settings
  email?: string;
  phone?: string;
  address?: string;
  logo?: string;
  favicon?: string;
  
  // Social media
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
    pinterest?: string;
    github?: string;
  };
  
  // Theme settings
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
    accentColor?: string;
    textColor?: string;
    backgroundColor?: string;
    fontFamily?: string;
    fontSize?: string;
    borderRadius?: string;
    headerStyle?: string;
    footerStyle?: string;
    buttonStyle?: string;
  };
  
  // SEO settings
  defaultSeo?: {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    twitterImage?: string;
    twitterCard?: string;
  };
  
  // Advanced settings
  headerScripts?: string;
  footerScripts?: string;
  customCss?: string;
  customJs?: string;
  
  // Footer settings
  footer?: {
    text?: string;
    showSocialIcons?: boolean;
    showSitemap?: boolean;
    showContactInfo?: boolean;
    columns?: Array<{
      title: string;
      links: Array<{
        label: string;
        url: string;
      }>;
    }>;
  };
  
  // Legacy properties for compatibility
  contactEmail?: string;
  contactPhone?: string;
  contactAddress?: string;
  socialLinks?: any;
  logoUrl?: string;
  faviconUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
  googleAnalyticsId?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  footerText?: string;
  cookieConsentText?: string;
  privacyPolicyUrl?: string;
  termsOfServiceUrl?: string;
}

export interface SiteSettingsSectionProps {
  settings: Partial<SiteSettings>;
  onChange: (settings: Partial<SiteSettings>) => void;
}

// Wrapper function for section onChange handlers
export const createSectionChangeHandler = (
  onChange: (settings: Partial<SiteSettings>) => void,
  sectionName: string
) => {
  return (sectionSettings: any) => {
    onChange({ [sectionName]: sectionSettings });
  };
};

// Helper function to merge partial settings with defaults
export const mergeSettings = (
  partialSettings: Partial<SiteSettings>,
  defaultName: string = 'Default Site'
): SiteSettings => {
  return {
    siteName: partialSettings.siteName || defaultName,
    ...partialSettings
  };
};

// Helper function to safely update nested properties
export const updateNestedProperty = <T extends Record<string, any>>(
  obj: T | undefined,
  path: string,
  value: any
): T => {
  if (!obj) {
    obj = {} as T;
  }
  
  const result = { ...obj };
  const parts = path.split('.');
  let current: any = result;
  
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    if (!current[part]) {
      current[part] = {};
    }
    current = current[part];
  }
  
  current[parts[parts.length - 1]] = value;
  return result;
};

export interface GeneralSettingsProps extends SiteSettingsSectionProps {}
export interface SocialMediaSettingsProps extends SiteSettingsSectionProps {}
export interface AppearanceSettingsProps extends SiteSettingsSectionProps {}
export interface SEOSettingsProps extends SiteSettingsSectionProps {}
export interface AdvancedSettingsProps extends SiteSettingsSectionProps {}

export interface SiteSettingsFormProps {
  settings?: SiteSettings;
  initialSettings?: Partial<SiteSettings>;
  onSave: (settings: SiteSettings) => void;
  onCancel?: () => void;
  loading?: boolean;
}

// Helper type for handling partial settings updates
export type SiteSettingsUpdater = (settings: Partial<SiteSettings>) => SiteSettings;
