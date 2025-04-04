/**
 * Test script for Redis functionality
 * 
 * This script demonstrates how to use the Redis client in the application.
 * It sets a value in Redis, retrieves it, and then deletes it.
 * 
 * Usage:
 * node scripts/test-redis.js
 */

// Load environment variables
require('dotenv').config();

// Import Redis client functions
const { getRedisClient, setCache, getCache, deleteCache, isRedisConnected } = require('../src/lib/redisClient');

async function testRedis() {
  console.log('Testing Redis connection...');
  
  // Check if Redis is connected
  const connected = await isRedisConnected();
  if (!connected) {
    console.error('Redis is not connected. Please check your Redis configuration in .env file.');
    console.log('Required environment variables:');
    console.log('- REDIS_URL or (REDIS_HOST and REDIS_PORT)');
    console.log('- REDIS_PASSWORD (if authentication is required)');
    process.exit(1);
  }
  
  console.log('Redis is connected!');
  
  // Test key and value
  const testKey = 'test:hiregenix:' + Date.now();
  const testValue = 'Hello from HireGenix! ' + new Date().toISOString();
  
  console.log(`Setting key "${testKey}" with value "${testValue}"...`);
  
  // Set value in Redis with 60 seconds expiration
  const setResult = await setCache(testKey, testValue, 60);
  if (!setResult) {
    console.error('Failed to set value in Redis.');
    process.exit(1);
  }
  
  console.log('Value set successfully!');
  
  // Get value from Redis
  console.log(`Getting value for key "${testKey}"...`);
  const retrievedValue = await getCache(testKey);
  
  if (retrievedValue === null) {
    console.error('Failed to get value from Redis.');
    process.exit(1);
  }
  
  console.log(`Retrieved value: "${retrievedValue}"`);
  
  if (retrievedValue === testValue) {
    console.log('Values match! Redis is working correctly.');
  } else {
    console.error('Values do not match! Something is wrong with Redis.');
    process.exit(1);
  }
  
  // Delete value from Redis
  console.log(`Deleting key "${testKey}"...`);
  const deleteResult = await deleteCache(testKey);
  
  if (!deleteResult) {
    console.error('Failed to delete value from Redis.');
    process.exit(1);
  }
  
  console.log('Value deleted successfully!');
  
  // Verify deletion
  console.log(`Verifying deletion of key "${testKey}"...`);
  const deletedValue = await getCache(testKey);
  
  if (deletedValue === null) {
    console.log('Key was successfully deleted from Redis.');
  } else {
    console.error('Key was not deleted from Redis.');
    process.exit(1);
  }
  
  console.log('Redis test completed successfully!');
  
  // Close Redis connection
  const client = await getRedisClient();
  if (client) {
    await client.quit();
    console.log('Redis connection closed.');
  }
}

// Run the test
testRedis().catch(error => {
  console.error('Error during Redis test:', error);
  process.exit(1);
});
