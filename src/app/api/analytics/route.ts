import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

// GET /api/analytics - Get analytics configuration
export async function GET(req: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get analytics config (create default if not exists)
    let analyticsConfig = await prisma.analyticsConfig.findFirst();
    
    if (!analyticsConfig) {
      analyticsConfig = await prisma.analyticsConfig.create({
        data: {
          googleAnalyticsId: '',
          googleTagManagerId: '',
          facebookPixelId: '',
          linkedInInsightTag: '',
          enableEcommerce: false,
          enableUserTracking: true,
          enableDemographics: true,
          customDimensions: {},
        },
      });
    }

    return NextResponse.json(analyticsConfig);
  } catch (error) {
    console.error('Error fetching analytics config:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics configuration' },
      { status: 500 }
    );
  }
}

// PUT /api/analytics - Update analytics configuration
export async function PUT(req: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get request body
    const data = await req.json();

    // Validate required fields
    if (data === null || typeof data !== 'object') {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    // Get existing config or create new one
    let analyticsConfig = await prisma.analyticsConfig.findFirst();
    
    if (analyticsConfig) {
      // Update existing config
      analyticsConfig = await prisma.analyticsConfig.update({
        where: { id: analyticsConfig.id },
        data: {
          googleAnalyticsId: data.googleAnalyticsId || '',
          googleTagManagerId: data.googleTagManagerId || '',
          facebookPixelId: data.facebookPixelId || '',
          linkedInInsightTag: data.linkedInInsightTag || '',
          enableEcommerce: data.enableEcommerce || false,
          enableUserTracking: data.enableUserTracking !== undefined ? data.enableUserTracking : true,
          enableDemographics: data.enableDemographics !== undefined ? data.enableDemographics : true,
          customDimensions: data.customDimensions || {},
        },
      });
    } else {
      // Create new config
      analyticsConfig = await prisma.analyticsConfig.create({
        data: {
          googleAnalyticsId: data.googleAnalyticsId || '',
          googleTagManagerId: data.googleTagManagerId || '',
          facebookPixelId: data.facebookPixelId || '',
          linkedInInsightTag: data.linkedInInsightTag || '',
          enableEcommerce: data.enableEcommerce || false,
          enableUserTracking: data.enableUserTracking !== undefined ? data.enableUserTracking : true,
          enableDemographics: data.enableDemographics !== undefined ? data.enableDemographics : true,
          customDimensions: data.customDimensions || {},
        },
      });
    }

    return NextResponse.json(analyticsConfig);
  } catch (error) {
    console.error('Error updating analytics config:', error);
    return NextResponse.json(
      { error: 'Failed to update analytics configuration' },
      { status: 500 }
    );
  }
}
