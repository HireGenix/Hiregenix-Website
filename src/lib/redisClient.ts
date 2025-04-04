import { createClient } from 'redis';

// Initialize Redis client with lazy loading pattern
let redisClient: ReturnType<typeof createClient> | null = null;

/**
 * Get Redis client instance
 * @returns Redis client instance or null if Redis is not configured
 */
export async function getRedisClient() {
  // If we've already tried to initialize, return the existing client
  if (redisClient !== null) {
    return redisClient;
  }

  // Get Redis environment variables
  const { REDIS_URL, REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } = process.env;

  // Check if required variables are set
  if (!REDIS_URL && (!REDIS_HOST || !REDIS_PORT)) {
    // Only log the error in a non-build environment
    if (process.env.NODE_ENV !== 'production' || process.env.NEXT_PHASE !== 'build') {
      console.warn('--------------------------------------------------------------------');
      console.warn('WARNING: Redis environment variables not configured.');
      console.warn('Set either REDIS_URL or both REDIS_HOST and REDIS_PORT in your .env file.');
      console.warn('Redis functionality will be disabled until these variables are set.');
      console.warn('--------------------------------------------------------------------');
    }
    return null;
  }

  try {
    // Create Redis client
    if (REDIS_URL) {
      // Use URL if provided
      redisClient = createClient({ url: REDIS_URL });
    } else {
      // Otherwise use host and port
      redisClient = createClient({
        socket: {
          host: REDIS_HOST,
          port: parseInt(REDIS_PORT as string),
        },
        password: REDIS_PASSWORD,
      });
    }

    // Set up error handler
    redisClient.on('error', (err) => {
      console.error('Redis Client Error:', err);
    });

    // Connect to Redis
    await redisClient.connect();
    console.log('Connected to Redis successfully');
    
    return redisClient;
  } catch (error) {
    console.error('Error creating Redis client:', error);
    redisClient = null;
    return null;
  }
}

/**
 * Set a value in Redis with optional expiration
 * @param key Key to set
 * @param value Value to set
 * @param expiryInSeconds Optional expiration time in seconds
 * @returns true if successful, false otherwise
 */
export async function setCache(key: string, value: string, expiryInSeconds?: number): Promise<boolean> {
  const client = await getRedisClient();
  if (!client) return false;

  try {
    if (expiryInSeconds) {
      await client.set(key, value, { EX: expiryInSeconds });
    } else {
      await client.set(key, value);
    }
    return true;
  } catch (error) {
    console.error(`Error setting Redis cache for key ${key}:`, error);
    return false;
  }
}

/**
 * Get a value from Redis
 * @param key Key to get
 * @returns Value or null if not found or error
 */
export async function getCache(key: string): Promise<string | null> {
  const client = await getRedisClient();
  if (!client) return null;

  try {
    return await client.get(key);
  } catch (error) {
    console.error(`Error getting Redis cache for key ${key}:`, error);
    return null;
  }
}

/**
 * Delete a value from Redis
 * @param key Key to delete
 * @returns true if successful, false otherwise
 */
export async function deleteCache(key: string): Promise<boolean> {
  const client = await getRedisClient();
  if (!client) return false;

  try {
    await client.del(key);
    return true;
  } catch (error) {
    console.error(`Error deleting Redis cache for key ${key}:`, error);
    return false;
  }
}

/**
 * Check if Redis is connected
 * @returns true if connected, false otherwise
 */
export async function isRedisConnected(): Promise<boolean> {
  const client = await getRedisClient();
  if (!client) return false;

  try {
    // Ping Redis to check connection
    const pong = await client.ping();
    return pong === 'PONG';
  } catch (error) {
    console.error('Error checking Redis connection:', error);
    return false;
  }
}
