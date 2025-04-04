# Redis Integration in HireGenix Website

This document provides information on how Redis is integrated into the HireGenix website and how to use it for caching and other purposes.

## Overview

Redis is an in-memory data structure store that can be used as a database, cache, message broker, and more. In the HireGenix website, Redis is primarily used for:

1. Caching frequently accessed data to improve performance
2. Session storage
3. Rate limiting API requests
4. Temporary data storage

## Setup

### Prerequisites

- Redis server (local or remote)
- Node.js and npm

### Installation

Redis client is already installed in the project. If you need to reinstall it, run:

```bash
npm install redis
```

### Configuration

Redis connection details are configured through environment variables:

**Option 1: Using Redis URL (preferred for production)**
```
REDIS_URL="redis://username:password@host:port"
```

**Option 2: Using individual connection parameters**
```
REDIS_HOST="localhost"
REDIS_PORT="6379"
REDIS_PASSWORD=""
```

These variables should be set in your `.env` file for local development and in your deployment environment (e.g., Vercel) for production.

## Usage

### Basic Usage

The Redis client is implemented in `src/lib/redisClient.ts` and provides the following functions:

- `getRedisClient()`: Get the Redis client instance
- `setCache(key, value, expiryInSeconds)`: Set a value in Redis with optional expiration
- `getCache(key)`: Get a value from Redis
- `deleteCache(key)`: Delete a value from Redis
- `isRedisConnected()`: Check if Redis is connected

### Example: Caching Data

```typescript
import { getCache, setCache } from '@/lib/redisClient';

// Function that uses Redis caching
async function getUserData(userId: string) {
  // Try to get data from cache first
  const cachedData = await getCache(`user:${userId}`);
  
  if (cachedData) {
    // If found in cache, parse and return
    return JSON.parse(cachedData);
  }
  
  // If not in cache, fetch from database
  const userData = await fetchUserFromDatabase(userId);
  
  // Store in cache for 5 minutes (300 seconds)
  await setCache(`user:${userId}`, JSON.stringify(userData), 300);
  
  return userData;
}
```

### REST API for Cache Management

The application includes a REST API for managing the Redis cache at `/api/cache`:

- `GET /api/cache?key=your-key`: Retrieve a value from the cache
- `POST /api/cache`: Store a value in the cache
  ```json
  {
    "key": "your-key",
    "value": "your-value",
    "expiry": 3600
  }
  ```
- `DELETE /api/cache?key=your-key`: Delete a value from the cache

### Testing Redis Connection

You can test your Redis connection by running:

```bash
node scripts/test-redis.js
```

This script will:
1. Connect to Redis
2. Set a test value
3. Retrieve the test value
4. Delete the test value
5. Verify the deletion

## Best Practices

1. **Use Namespaced Keys**: Prefix your keys with a namespace to avoid collisions, e.g., `user:123`, `post:456`.

2. **Set Appropriate TTL**: Always set an expiration time (TTL) for cached data to prevent stale data and memory leaks.

3. **Handle Redis Failures Gracefully**: The Redis client is designed to handle connection failures gracefully. If Redis is unavailable, the application will fall back to fetching data from the primary source.

4. **Cache Invalidation**: Implement proper cache invalidation strategies when data changes.

5. **Monitor Redis Usage**: Keep an eye on Redis memory usage and performance in production.

## Troubleshooting

### Common Issues

1. **Connection Refused**: Make sure Redis server is running and accessible from your application.

2. **Authentication Failed**: Check your Redis password in the environment variables.

3. **Memory Issues**: If Redis is running out of memory, consider adjusting the `maxmemory` configuration and eviction policy.

### Debugging

To debug Redis issues, check the application logs for Redis-related error messages. You can also use Redis CLI to connect to your Redis server and inspect its state:

```bash
redis-cli -h your-redis-host -p your-redis-port -a your-redis-password
```

## Additional Resources

- [Redis Documentation](https://redis.io/documentation)
- [Node Redis Client Documentation](https://github.com/redis/node-redis)
- [Redis Best Practices](https://redis.io/topics/memory-optimization)
