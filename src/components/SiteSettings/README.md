# Site Settings

The Site Settings components provide a comprehensive solution for managing global website settings in the HireGenix CMS. These components allow users to configure general settings, social media links, appearance, SEO defaults, and advanced options.

## Features

- **General Settings**: Configure site name, description, URL, logo, favicon, and contact information
- **Social Media**: Manage links to social media profiles
- **Appearance**: Customize colors, fonts, and preview changes in real-time
- **SEO Defaults**: Set default SEO settings for pages without specific SEO configuration
- **Advanced Settings**: Add custom CSS, JavaScript, and scripts to the site
- **Tabbed Interface**: Organize settings into logical sections for easy navigation
- **Real-time Preview**: Preview appearance changes as you make them

## Components

### SiteSettingsForm

The main component for managing site settings with a tabbed interface.

```tsx
import { SiteSettingsForm, SiteSettings } from '@/components/SiteSettings';

// Initial settings
const settings: SiteSettings = {
  // ... site settings
};

// Usage
<SiteSettingsForm
  settings={settings}
  onSave={handleSaveSettings}
  loading={saving}
/>
```

### GeneralSettings

A component for editing general site settings.

```tsx
import { GeneralSettings, SiteSettings } from '@/components/SiteSettings';

<GeneralSettings
  settings={settings}
  onChange={handleSettingsChange}
/>
```

### SocialMediaSettings

A component for editing social media links.

```tsx
import { SocialMediaSettings, SiteSettings } from '@/components/SiteSettings';

<SocialMediaSettings
  settings={settings}
  onChange={handleSettingsChange}
/>
```

### AppearanceSettings

A component for customizing the site's appearance with real-time preview.

```tsx
import { AppearanceSettings, SiteSettings } from '@/components/SiteSettings';

<AppearanceSettings
  settings={settings}
  onChange={handleSettingsChange}
/>
```

### SEOSettings

A component for setting default SEO settings.

```tsx
import { SEOSettings, SiteSettings } from '@/components/SiteSettings';

<SEOSettings
  settings={settings}
  onChange={handleSettingsChange}
/>
```

### AdvancedSettings

A component for adding custom CSS, JavaScript, and scripts.

```tsx
import { AdvancedSettings, SiteSettings } from '@/components/SiteSettings';

<AdvancedSettings
  settings={settings}
  onChange={handleSettingsChange}
/>
```

## API

### SiteSettings

```typescript
interface SiteSettings {
  // General settings
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  favicon: string;
  logo: string;
  
  // Contact information
  email: string;
  phone?: string;
  address?: string;
  
  // Social media
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    github?: string;
  };
  
  // Analytics
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
  
  // API keys
  recaptchaSiteKey?: string;
  mapboxApiKey?: string;
  
  // Appearance
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    textColor: string;
    backgroundColor: string;
    fontFamily: string;
  };
  
  // Footer
  footer: {
    text: string;
    showSocialIcons: boolean;
    showSitemap: boolean;
    showContactInfo: boolean;
    columns: Array<{
      title: string;
      links: Array<{
        label: string;
        url: string;
      }>;
    }>;
  };
  
  // Advanced
  customCss?: string;
  customJs?: string;
  headerScripts?: string;
  footerScripts?: string;
  
  // SEO
  defaultSeo: {
    title: string;
    description: string;
    keywords: string;
    ogImage: string;
    twitterCard: 'summary' | 'summary_large_image';
  };
}
```

### SiteSettingsFormProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| settings | `SiteSettings` | - | The site settings to edit |
| onSave | `(settings: SiteSettings) => Promise<void>` | - | Callback when settings are saved |
| loading | `boolean` | `false` | Whether the form is in a loading state |

### SiteSettingsSectionProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| settings | `SiteSettings` | - | The site settings to edit |
| onChange | `(settings: SiteSettings) => void` | - | Callback when settings change |

## Integration with Admin Panel

The Site Settings components are integrated with the admin panel, allowing users to manage site settings from the admin interface:

1. Navigate to the admin panel at `/admin`
2. Click on "Settings" in the sidebar
3. Edit settings in the various tabs
4. Click "Save Settings" to apply the changes

## Usage in the Website

The site settings are used throughout the website to customize its appearance and behavior:

- The site name, description, and logo are used in the header and metadata
- The social media links are used in the footer and social sharing
- The appearance settings are used to customize the site's colors and fonts
- The SEO defaults are used for pages without specific SEO settings
- The custom CSS and JavaScript are added to all pages
- The header and footer scripts are added to their respective locations
