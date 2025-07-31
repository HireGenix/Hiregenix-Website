import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { mockPosts } from '../mock-data';

// Flag to determine whether to use mock data or database
// Set to false to use the database
const USE_MOCK_DATA = true;

// Helper function to extract ID from the URL path
function extractIdFromPath(request: NextRequest): string {
  const pathname = request.nextUrl.pathname;
  const segments = pathname.split('/');
  return segments[segments.length - 1];
}

// GET /api/posts/:id - Get a specific post
export async function GET(request: NextRequest) {
  try {
    const id = extractIdFromPath(request);
    
    if (USE_MOCK_DATA) {
      // Find post in mock data
      const post = mockPosts.find(p => p.id === id);
      
      if (!post) {
        return NextResponse.json(
          { error: 'Post not found' },
          { status: 404 }
        );
      }
      
      return NextResponse.json(post);
    } else {
      // Find post in database
      const post = await prisma.post.findUnique({
        where: { id },
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
      
      if (!post) {
        return NextResponse.json(
          { error: 'Post not found' },
          { status: 404 }
        );
      }
      
      return NextResponse.json(post);
    }
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    );
  }
}

// PUT /api/posts/:id - Update a post
export async function PUT(request: NextRequest) {
  try {
    const id = extractIdFromPath(request);
    const body = await request.json();
    
    if (USE_MOCK_DATA) {
      // Find post index in mock data
      const postIndex = mockPosts.findIndex(p => p.id === id);
      
      if (postIndex === -1) {
        return NextResponse.json(
          { error: 'Post not found' },
          { status: 404 }
        );
      }
      
      // Check if slug is being changed and already exists
      if (body.slug && body.slug !== mockPosts[postIndex].slug && 
          mockPosts.some(p => p.slug === body.slug)) {
        return NextResponse.json(
          { error: 'A post with this slug already exists' },
          { status: 409 }
        );
      }
      
      // Update post
      const updatedPost = {
        ...mockPosts[postIndex],
        ...body,
        updatedAt: new Date().toISOString()
      };
      
      mockPosts[postIndex] = updatedPost;
      
      return NextResponse.json(updatedPost);
    } else {
      // Check if post exists
      const existingPost = await prisma.post.findUnique({
        where: { id }
      });
      
      if (!existingPost) {
        return NextResponse.json(
          { error: 'Post not found' },
          { status: 404 }
        );
      }
      
      // Check if slug is being changed and already exists
      if (body.slug && body.slug !== existingPost.slug) {
        const slugExists = await prisma.post.findUnique({
          where: { slug: body.slug }
        });
        
        if (slugExists) {
          return NextResponse.json(
            { error: 'A post with this slug already exists' },
            { status: 409 }
          );
        }
      }
      
      // Process SEO data
      const seo = body.seo ? JSON.stringify(body.seo) : existingPost.seo;
      
      // Update post
      const post = await prisma.post.update({
        where: { id },
        data: {
          title: body.title,
          slug: body.slug,
          content: body.content,
          excerpt: body.excerpt,
          featuredImage: body.featuredImage,
          status: body.status,
          seo: seo as any,
          ...(body.categoryId && {
            category: {
              connect: { id: body.categoryId }
            }
          }),
          ...(body.categoryId === null && {
            category: {
              disconnect: true
            }
          }),
          ...(body.tags && {
            tags: {
              set: body.tags.map((tagId: string) => ({ id: tagId }))
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
      
      return NextResponse.json(post);
    }
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json(
      { error: 'Failed to update post' },
      { status: 500 }
    );
  }
}

// DELETE /api/posts/:id - Delete a post
export async function DELETE(request: NextRequest) {
  try {
    const id = extractIdFromPath(request);
    console.log('Deleting post with ID:', id);
    
    if (USE_MOCK_DATA) {
      // Find post index in mock data
      const postIndex = mockPosts.findIndex(p => p.id === id);
      
      if (postIndex === -1) {
        console.log('Post not found in mock data');
        return NextResponse.json(
          { error: 'Post not found' },
          { status: 404 }
        );
      }
      
      // Remove post from mock data
      mockPosts.splice(postIndex, 1);
      console.log('Post deleted from mock data');
      
      return NextResponse.json({ success: true });
    } else {
      // Check if post exists
      const existingPost = await prisma.post.findUnique({
        where: { id }
      });
      
      if (!existingPost) {
        console.log('Post not found in database');
        return NextResponse.json(
          { error: 'Post not found' },
          { status: 404 }
        );
      }
      
      // Delete post
      await prisma.post.delete({
        where: { id }
      });
      console.log('Post deleted from database');
      
      return NextResponse.json({ success: true });
    }
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json(
      { error: 'Failed to delete post' },
      { status: 500 }
    );
  }
}
