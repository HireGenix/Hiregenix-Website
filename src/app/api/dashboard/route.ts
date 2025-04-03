import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

// GET /api/dashboard - Get dashboard stats and recent items
export async function GET(req: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get recent posts (limit to 4)
    const recentPosts = await prisma.post.findMany({
      take: 4,
      orderBy: {
        updatedAt: 'desc',
      },
      select: {
        id: true,
        title: true,
        slug: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    // Mock data for recent pages since Page model might not be available
    const recentPages = [
      { 
        id: '1', 
        title: 'Home', 
        slug: 'home', 
        status: 'PUBLISHED', 
        createdAt: new Date('2025-03-01'), 
        updatedAt: new Date('2025-03-01') 
      },
      { 
        id: '2', 
        title: 'About Us', 
        slug: 'about-us', 
        status: 'PUBLISHED', 
        createdAt: new Date('2025-03-02'), 
        updatedAt: new Date('2025-03-02') 
      },
      { 
        id: '3', 
        title: 'Services', 
        slug: 'services', 
        status: 'DRAFT', 
        createdAt: new Date('2025-03-05'), 
        updatedAt: new Date('2025-03-05') 
      },
      { 
        id: '4', 
        title: 'Contact', 
        slug: 'contact', 
        status: 'PUBLISHED', 
        createdAt: new Date('2025-03-07'), 
        updatedAt: new Date('2025-03-07') 
      },
    ];

    // Get counts for stats
    const [postsCount, usersCount] = await Promise.all([
      prisma.post.count(),
      prisma.user.count(),
    ]);
    
    // Mock page count since Page model might not be available
    const pagesCount = 12;

    // Get site health data
    // This is a placeholder - in a real implementation, you would get actual health metrics
    const siteHealth = {
      database: {
        status: 'good',
        percentage: 90,
      },
      storage: {
        status: 'normal',
        percentage: 65,
        used: '65%',
      },
      performance: {
        status: 'warning',
        percentage: 60,
      },
      security: {
        status: 'good',
        percentage: 85,
      },
    };

    // Return dashboard data
    return NextResponse.json({
      recentPages,
      recentPosts,
      stats: {
        pages: pagesCount,
        posts: postsCount,
        users: usersCount,
        views: 1254, // Placeholder - would come from analytics in a real implementation
      },
      siteHealth,
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data' },
      { status: 500 }
    );
  }
}
