import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

// GET /api/seo - Get SEO settings
export async function GET(req: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get SEO settings (create default if not exists)
    let seoSettings = await prisma.seoSettings.findFirst();
    
    if (!seoSettings) {
      seoSettings = await prisma.seoSettings.create({
        data: {
          defaultTitle: 'HireGenix - AI-Powered Recruitment Platform',
          defaultDescription: 'HireGenix is an AI-powered recruitment platform that helps companies find the best talent faster and more efficiently.',
          defaultKeywords: 'recruitment, AI, hiring, talent acquisition',
          defaultOgImage: '/HireGenix-logo-black.png',
          robotsTxt: 'User-agent: *\nAllow: /',
          sitemapEnabled: true,
          structuredData: {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "HireGenix",
            "url": "https://www.hiregenix.com",
            "logo": "https://www.hiregenix.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-123-456-7890",
              "contactType": "customer service"
            }
          },
        },
      });
    }

    return NextResponse.json(seoSettings);
  } catch (error) {
    console.error('Error fetching SEO settings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch SEO settings' },
      { status: 500 }
    );
  }
}

// PUT /api/seo - Update SEO settings
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

    // Get existing settings or create new ones
    let seoSettings = await prisma.seoSettings.findFirst();
    
    if (seoSettings) {
      // Update existing settings
      seoSettings = await prisma.seoSettings.update({
        where: { id: seoSettings.id },
        data: {
          defaultTitle: data.defaultTitle || '',
          defaultDescription: data.defaultDescription || '',
          defaultKeywords: data.defaultKeywords || '',
          defaultOgImage: data.defaultOgImage || '',
          robotsTxt: data.robotsTxt || 'User-agent: *\nAllow: /',
          sitemapEnabled: data.sitemapEnabled !== undefined ? data.sitemapEnabled : true,
          structuredData: data.structuredData || {},
        },
      });
    } else {
      // Create new settings
      seoSettings = await prisma.seoSettings.create({
        data: {
          defaultTitle: data.defaultTitle || 'HireGenix - AI-Powered Recruitment Platform',
          defaultDescription: data.defaultDescription || 'HireGenix is an AI-powered recruitment platform that helps companies find the best talent faster and more efficiently.',
          defaultKeywords: data.defaultKeywords || 'recruitment, AI, hiring, talent acquisition',
          defaultOgImage: data.defaultOgImage || '/HireGenix-logo-black.png',
          robotsTxt: data.robotsTxt || 'User-agent: *\nAllow: /',
          sitemapEnabled: data.sitemapEnabled !== undefined ? data.sitemapEnabled : true,
          structuredData: data.structuredData || {},
        },
      });
    }

    return NextResponse.json(seoSettings);
  } catch (error) {
    console.error('Error updating SEO settings:', error);
    return NextResponse.json(
      { error: 'Failed to update SEO settings' },
      { status: 500 }
    );
  }
}
