# HireGenix Platform Integration

This document explains how to set up the integration between the HireGenix marketing website (myhiregenix.com) and the main HireGenix platform (next-hiregenix).

## Overview

The integration allows the marketing website to automatically fetch and display job listings from the main HireGenix platform. This ensures that companies posting jobs on the platform will automatically have their listings appear on the website's job board page.

## Features

- **Automatic Job Synchronization**: Jobs posted on the platform automatically appear on the website
- **Advanced Filtering**: Support for filtering jobs by location, industry, company, etc.
- **Detailed Job Pages**: Comprehensive job detail pages with application functionality
- **Fallback Mechanism**: If the platform API is unavailable, the system falls back to local data

## Setup Instructions

### 1. Configure Environment Variables

Copy the environment variables from `.env.example` to `.env` and configure them:

```
# Platform Integration
PLATFORM_API_URL="http://localhost:3001/api"  # URL to the next-hiregenix API
PLATFORM_API_KEY="your-platform-api-key"      # API key for authentication (if required)
USE_PLATFORM_API="true"                       # Toggle to enable/disable platform integration
```

- **PLATFORM_API_URL**: Set this to the URL of your next-hiregenix API. In production, this might be something like `https://api.myhiregenix.ai`.
- **PLATFORM_API_KEY**: If your API requires authentication, set this to the appropriate API key.
- **USE_PLATFORM_API**: Set to `"true"` to enable the integration, or `"false"` to use local data only.

### 2. Start Both Applications

1. Start the next-hiregenix platform:

```bash
cd /Users/sumitsharma/Desktop/next-hiregenix
npm run dev
```

This will start the platform on port 3001 (or whatever port is configured).

2. Start the marketing website:

```bash
cd /Users/sumitsharma/Desktop/hiregenix-website
npm run dev
```

This will start the website on port 3000.

### 3. Test the Integration

1. Create some jobs on the next-hiregenix platform.
2. Visit the careers page on the marketing website at `http://localhost:3000/careers`.
3. Verify that the jobs from the platform are displayed on the website.

## How It Works

The integration works through the following components:

1. **Platform Service** (`src/lib/platformService.ts`): Handles communication with the next-hiregenix API.
2. **Jobs API** (`src/app/api/jobs/route.ts`): Fetches jobs from the platform and provides them to the frontend.
3. **Career Pages**: Display the jobs fetched from the platform.

## Troubleshooting

### Jobs Not Appearing

If jobs from the platform are not appearing on the website:

1. Check that both applications are running.
2. Verify that `USE_PLATFORM_API` is set to `"true"` in your `.env` file.
3. Check the console for any error messages.
4. Verify that the `PLATFORM_API_URL` is correct and points to the running next-hiregenix API.
5. Check that there are active jobs in the platform database.

### API Connection Issues

If there are issues connecting to the platform API:

1. Verify that the next-hiregenix application is running.
2. Check that the API URL is correct.
3. Verify that the API key (if required) is valid.
4. Check for any CORS issues in the browser console.

## Development Notes

### Adding New Features

When adding new features to the integration:

1. Update the platform service (`src/lib/platformService.ts`) to include any new API endpoints.
2. Update the corresponding API routes in the marketing website.
3. Update the frontend components to use the new data.

### Testing

To test the integration:

1. Create test jobs on the platform.
2. Verify that they appear on the website.
3. Test filtering and searching functionality.
4. Test the job application process.

### Deployment

When deploying to production:

1. Update the `PLATFORM_API_URL` to point to the production API.
2. Ensure that the API key is securely stored and not committed to version control.
3. Test the integration in a staging environment before deploying to production.
