# Media Library

The Media Library is a comprehensive solution for managing media files in the HireGenix CMS. It provides a user-friendly interface for uploading, organizing, and selecting media files for use throughout the website.

## Features

- **Media Management**: Upload, edit, and delete media files
- **Media Selection**: Easily select media files for use in content
- **Search and Filter**: Find media files quickly with search and filtering options
- **Preview**: Preview media files before selecting them
- **Integration**: Seamlessly integrates with the Page Builder

## Components

### MediaLibrary

The main component for managing media files. It provides a complete interface for uploading, browsing, and managing media files.

```tsx
import { MediaLibrary } from '@/components/MediaLibrary';

// Basic usage
<MediaLibrary />

// With selection mode
<MediaLibrary 
  selectionMode={true} 
  maxSelection={1} 
  onSelect={(media) => console.log('Selected media:', media)} 
/>
```

### MediaSelector

A form field component for selecting media files. It provides a text field with a browse button that opens the Media Library in a dialog.

```tsx
import { MediaSelector } from '@/components/MediaLibrary';

// Basic usage
<MediaSelector 
  label="Image" 
  value={imageUrl} 
  onChange={(url) => setImageUrl(url)} 
/>

// With preview
<MediaSelector 
  label="Background Image" 
  value={backgroundUrl} 
  onChange={(url) => setBackgroundUrl(url)} 
  showPreview={true} 
/>
```

## API

### Media Item

```typescript
interface MediaItem {
  id: string;
  name: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  url: string;
  alt?: string;
  createdAt: string;
  updatedAt: string;
}
```

### MediaLibrary Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| onSelect | `(media: MediaItem) => void` | - | Callback when a media item is selected |
| selectionMode | `boolean` | `false` | Enable selection mode |
| maxSelection | `number` | `1` | Maximum number of items that can be selected |

### MediaSelector Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | `string` | `''` | The current value (URL) |
| onChange | `(url: string) => void` | - | Callback when the value changes |
| label | `string` | `'Media URL'` | The label for the field |
| placeholder | `string` | `'Select media from library'` | Placeholder text |
| helperText | `string` | - | Helper text to display |
| required | `boolean` | `false` | Whether the field is required |
| disabled | `boolean` | `false` | Whether the field is disabled |
| error | `boolean` | `false` | Whether the field has an error |
| fullWidth | `boolean` | `true` | Whether the field should take up the full width |
| variant | `'standard' \| 'filled' \| 'outlined'` | `'outlined'` | The variant of the text field |
| size | `'small' \| 'medium'` | `'medium'` | The size of the text field |
| showPreview | `boolean` | `true` | Whether to show a preview of the selected media |

## API Endpoints

### GET /api/media

Get a list of media items with pagination, search, and filtering.

Query parameters:
- `search`: Search term
- `type`: Filter by file type
- `sortBy`: Sort field (default: 'createdAt')
- `sortOrder`: Sort order (default: 'desc')
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 20)

### POST /api/media

Upload a new media file.

Form data:
- `file`: The file to upload
- `name`: (optional) The name of the file
- `alt`: (optional) Alternative text for the file

### GET /api/media/[id]

Get a specific media item.

### PUT /api/media/[id]

Update a specific media item.

Body:
- `name`: The new name
- `alt`: The new alternative text

### DELETE /api/media/[id]

Delete a specific media item.

## Integration with Page Builder

The Media Library is integrated with the Page Builder, allowing users to select media files for various section types:

- **Testimonial Section**: Avatar images for testimonials
- **CTA Section**: Background images for call-to-action sections
- **Hero Section**: Background images for hero sections
- **Feature Section**: Images for features

## Future Enhancements

- **Categories**: Organize media files into categories
- **Bulk Operations**: Select and modify multiple files at once
- **Image Editing**: Basic image editing capabilities
- **Version History**: Track changes to media files
- **Usage Tracking**: See where media files are used across the site
