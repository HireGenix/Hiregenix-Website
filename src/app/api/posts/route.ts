import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { mockPosts } from './mock-data';

// Flag to determine whether to use mock data or database
// Set to false to use the database
const USE_MOCK_DATA = true;

// GET /api/posts - Get all posts
export async function GET(request: NextRequest) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');
    const limit = searchParams.get('limit');
    const admin = searchParams.get('admin') === 'true';
    
    if (USE_MOCK_DATA) {
      let filteredPosts = [...mockPosts];
      
      // Filter by slug if provided
      if (slug) {
        filteredPosts = filteredPosts.filter(post => post.slug === slug);
      }
      
      // Filter by category if provided
      if (category) {
        filteredPosts = filteredPosts.filter(post => 
          post.category?.slug === category || 
          post.category?.name.toLowerCase() === category.toLowerCase()
        );
      }
      
      // Filter by tag if provided
      if (tag) {
        filteredPosts = filteredPosts.filter(post => 
          post.tags.some(t => 
            t.slug === tag || 
            t.name.toLowerCase() === tag.toLowerCase()
          )
        );
      }
      
      // Apply limit if provided
      if (limit && !isNaN(Number(limit))) {
        filteredPosts = filteredPosts.slice(0, Number(limit));
      }
      
      // Return the filtered posts
      return NextResponse.json({ 
        items: filteredPosts,
        total: filteredPosts.length
      });
    } else {
      // Build filter conditions for database query
      const where: any = {};
      
      // Only show published posts for non-admin requests
      if (!admin) {
        where.status = 'PUBLISHED';
      }
      
      // Filter by slug if provided
      if (slug) {
        where.slug = slug;
      }
      
      // Filter by category if provided
      if (category) {
        where.category = {
          OR: [
            { slug: category },
            { name: { contains: category, mode: 'insensitive' } }
          ]
        };
      }
      
      // Filter by tag if provided
      if (tag) {
        where.tags = {
          some: {
            OR: [
              { slug: tag },
              { name: { contains: tag, mode: 'insensitive' } }
            ]
          }
        };
      }
      
      // Query database for posts
      const posts = await prisma.post.findMany({
        where,
        include: {
          author: {
            select: {
              id: true,
              name: true,
              email: true,
              image: true
            }
          },
          category: true,
          tags: true
        },
        orderBy: {
          createdAt: 'desc'
        },
        take: limit ? parseInt(limit) : undefined
      });
      
      // Count total posts matching the criteria
      const total = await prisma.post.count({ where });
      
      // Return the posts
      return NextResponse.json({
        items: posts,
        total
      });
    }
  } catch (error) {
    console.error('Error in posts API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

// POST /api/posts - Create a new post
export async function POST(request: NextRequest) {
  try {
    if (USE_MOCK_DATA) {
      // Simulate creating a post with mock data
      const body = await request.json();
      
      // Validate required fields
      if (!body.title || !body.content) {
        return NextResponse.json(
          { error: 'Title and content are required' },
          { status: 400 }
        );
      }
      
      // Generate a slug if not provided
      const slug = body.slug || body.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-');
      
      // Check if slug already exists in mock data
      if (mockPosts.some(post => post.slug === slug)) {
        return NextResponse.json(
          { error: 'A post with this slug already exists' },
          { status: 409 }
        );
      }
      
      // Create a new mock post
      const newPost = {
        id: `mock-${Date.now()}`,
        title: body.title,
        slug,
        excerpt: body.excerpt || body.content.substring(0, 150) + '...',
        content: body.content,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        author: {
          id: 'admin',
          name: 'HireGenix Admin',
          email: 'admin@myhiregenix.com',
          image: '/avatars/avatar1.jpg'
        },
        category: body.category || null,
        tags: body.tags || [],
        featuredImage: body.featuredImage || null,
        status: body.status || 'draft'
      };
      
      // Add to mock posts (this won't persist after server restart)
      mockPosts.push(newPost);
      
      return NextResponse.json(newPost, { status: 201 });
    } else {
      // Get request body
      const body = await request.json();
      
      // Validate required fields
      if (!body.title || !body.content) {
        return NextResponse.json(
          { error: 'Title and content are required' },
          { status: 400 }
        );
      }
      
      // Generate a slug if not provided
      const slug = body.slug || body.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-');
      
      // Check if slug already exists
      const existingPost = await prisma.post.findUnique({
        where: { slug }
      });
      
      if (existingPost) {
        return NextResponse.json(
          { error: 'A post with this slug already exists' },
          { status: 409 }
        );
      }
      
      // Process SEO data
      const seo = body.seo ? JSON.stringify(body.seo) : null;
      
      // Create post
      const post = await prisma.post.create({
        data: {
          title: body.title,
          slug,
          content: body.content,
          excerpt: body.excerpt || body.content.substring(0, 150) + '...',
          featuredImage: body.featuredImage,
          status: body.status || 'DRAFT',
          seo: seo as any,
          author: {
            connect: { id: body.authorId }
          },
          ...(body.categoryId && {
            category: {
              connect: { id: body.categoryId }
            }
          }),
          ...(body.tags && body.tags.length > 0 && {
            tags: {
              connect: body.tags.map((tagId: string) => ({ id: tagId }))
            }
          })
        },
        include: {
          author: {
            select: {
              id: true,
              name: true,
              email: true,
              image: true
            }
          },
          category: true,
          tags: true
        }
      });
      
      return NextResponse.json(post, { status: 201 });
    }
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
}
