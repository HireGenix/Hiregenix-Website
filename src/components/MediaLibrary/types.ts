// Media item interface
export interface MediaItem {
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

// Media upload response
export interface MediaUploadResponse {
  success: boolean;
  media?: MediaItem;
  error?: string;
}

// Media library filter options
export type MediaFilterType = 'all' | 'image' | 'video' | 'audio' | 'document';

// Media library sort options
export type MediaSortOption = 'newest' | 'oldest' | 'name_asc' | 'name_desc' | 'size_asc' | 'size_desc';
