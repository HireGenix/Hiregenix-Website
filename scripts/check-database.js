#!/usr/bin/env node

/**
 * This script checks the MongoDB database connection and collections.
 * 
 * Usage:
 * node scripts/check-database.js
 */

const { MongoClient } = require('mongodb');
require('dotenv').config();

async function main() {
  console.log('Checking MongoDB Database');
  console.log('=========================');
  
  // Get MongoDB connection string from environment variables
  const uri = process.env.DATABASE_URL;
  
  if (!uri) {
    console.error('DATABASE_URL environment variable is not set');
    process.exit(1);
  }
  
  const client = new MongoClient(uri);
  
  try {
    // Connect to MongoDB
    await client.connect();
    console.log('✅ Connected to MongoDB successfully');
    
    // Get database name from connection string
    const dbName = uri.split('/').pop().split('?')[0];
    console.log(`Database name: ${dbName}`);
    
    const db = client.db(dbName);
    
    // List collections
    const collections = await db.listCollections().toArray();
    console.log(`\nCollections in database (${collections.length}):`);
    
    if (collections.length === 0) {
      console.log('No collections found. The database is empty.');
    } else {
      for (const collection of collections) {
        const count = await db.collection(collection.name).countDocuments();
        console.log(`- ${collection.name}: ${count} documents`);
      }
    }
    
    // Check for User collection
    const userCollection = collections.find(c => c.name === 'User');
    if (userCollection) {
      const users = await db.collection('User').find({}).toArray();
      console.log(`\nUsers in database (${users.length}):`);
      
      for (const user of users) {
        console.log(`- ${user.name || 'Unnamed'} (${user.email}): Role = ${user.role}`);
      }
    } else {
      console.log('\nUser collection not found. You may need to create it.');
    }
    
    // Check for Page collection
    const pageCollection = collections.find(c => c.name === 'Page');
    if (pageCollection) {
      const pages = await db.collection('Page').find({}).toArray();
      console.log(`\nPages in database (${pages.length}):`);
      
      for (const page of pages) {
        console.log(`- ${page.title} (${page.slug}): Status = ${page.status}`);
      }
    } else {
      console.log('\nPage collection not found. You may need to create it.');
    }
    
    // Check for Post collection
    const postCollection = collections.find(c => c.name === 'Post');
    if (postCollection) {
      const posts = await db.collection('Post').find({}).toArray();
      console.log(`\nPosts in database (${posts.length}):`);
      
      for (const post of posts) {
        console.log(`- ${post.title} (${post.slug}): Status = ${post.status}`);
      }
    } else {
      console.log('\nPost collection not found. You may need to create it.');
    }
    
    console.log('\nDatabase check completed.');
    
  } catch (error) {
    console.error('Error checking database:', error);
    process.exit(1);
  } finally {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
