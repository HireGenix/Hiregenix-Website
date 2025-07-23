import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// GET /api/site-settings - Get site settings
export async function GET(req: NextRequest) {
  try {
    // Mock site settings since the Prisma schema doesn't have a SiteSettings model
    const mockSiteSettings = {
      id: '1',
      siteName: 'HireGenix CMS',
      siteDescription: 'A modern recruitment platform',
      contactEmail: 'info@hiregenix.com',
      contactPhone: '',
      contactAddress: '',
      socialLinks: {
        twitter: '',
        facebook: '',
        linkedin: '',
        instagram: '',
      },
      logoUrl: '/logo.png',
      faviconUrl: '/favicon.ico',
      primaryColor: '#4f46e5',
      secondaryColor: '#6366f1',
      footerText: '© ' + new Date().getFullYear() + ' HireGenix. All rights reserved.',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json(mockSiteSettings);
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch site settings' },
      { status: 500 }
    );
  }
}

// PUT /api/site-settings - Update site settings
export async function PUT(req: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get request body
    const body = await req.json();

    // Mock updating site settings
    const mockUpdatedSettings = {
      id: '1',
      siteName: body.siteName,
      siteDescription: body.siteDescription,
      contactEmail: body.contactEmail,
      contactPhone: body.contactPhone,
      contactAddress: body.contactAddress,
      socialLinks: body.socialLinks,
      logoUrl: body.logoUrl,
      faviconUrl: body.faviconUrl,
      primaryColor: body.primaryColor,
      secondaryColor: body.secondaryColor,
      footerText: body.footerText,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json(mockUpdatedSettings);
  } catch (error) {
    console.error('Error updating site settings:', error);
    return NextResponse.json(
      { error: 'Failed to update site settings' },
      { status: 500 }
    );
  }
}
