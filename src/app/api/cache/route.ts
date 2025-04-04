import { NextRequest, NextResponse } from 'next/server';
import { getCache, setCache, deleteCache } from '@/lib/redisClient';

/**
 * GET handler for cache API
 * Retrieves a value from Redis cache
 * 
 * @param request NextRequest object
 * @returns NextResponse with the cached value or error
 */
export async function GET(request: NextRequest) {
  // Get the key from the URL query parameters
  const { searchParams } = new URL(request.url);
  const key = searchParams.get('key');

  // Validate key parameter
  if (!key) {
    return NextResponse.json(
      { error: 'Missing required parameter: key' },
      { status: 400 }
    );
  }

  try {
    // Get value from Redis cache
    const value = await getCache(key);

    if (value === null) {
      return NextResponse.json(
        { error: 'Key not found in cache' },
        { status: 404 }
      );
    }

    // Return the cached value
    return NextResponse.json({ key, value });
  } catch (error) {
    console.error('Error retrieving from cache:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve from cache' },
      { status: 500 }
    );
  }
}

/**
 * POST handler for cache API
 * Sets a value in Redis cache
 * 
 * @param request NextRequest object
 * @returns NextResponse with success or error
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { key, value, expiry } = body;

    // Validate required parameters
    if (!key || value === undefined) {
      return NextResponse.json(
        { error: 'Missing required parameters: key and value are required' },
        { status: 400 }
      );
    }

    // Convert value to string if it's not already
    const stringValue = typeof value === 'string' ? value : JSON.stringify(value);

    // Set value in Redis cache
    const success = await setCache(key, stringValue, expiry);

    if (!success) {
      return NextResponse.json(
        { error: 'Failed to set cache value' },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'Value cached successfully',
      key,
      expiry: expiry ? `${expiry} seconds` : 'No expiration'
    });
  } catch (error) {
    console.error('Error setting cache:', error);
    return NextResponse.json(
      { error: 'Failed to set cache value' },
      { status: 500 }
    );
  }
}

/**
 * DELETE handler for cache API
 * Deletes a value from Redis cache
 * 
 * @param request NextRequest object
 * @returns NextResponse with success or error
 */
export async function DELETE(request: NextRequest) {
  // Get the key from the URL query parameters
  const { searchParams } = new URL(request.url);
  const key = searchParams.get('key');

  // Validate key parameter
  if (!key) {
    return NextResponse.json(
      { error: 'Missing required parameter: key' },
      { status: 400 }
    );
  }

  try {
    // Delete value from Redis cache
    const success = await deleteCache(key);

    if (!success) {
      return NextResponse.json(
        { error: 'Failed to delete cache value' },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'Value deleted successfully',
      key
    });
  } catch (error) {
    console.error('Error deleting from cache:', error);
    return NextResponse.json(
      { error: 'Failed to delete cache value' },
      { status: 500 }
    );
  }
}
