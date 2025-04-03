import { NextResponse } from 'next/server';
import { mockPosts } from './mock-data';

// This is a static API that doesn't rely on a database connection
// It uses mock data to avoid database connection issues in production
export async function GET(request: Request) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');
    const limit = searchParams.get('limit');
    
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
  } catch (error) {
    console.error('Error in posts API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}
