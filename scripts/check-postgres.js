#!/usr/bin/env node

/**
 * This script checks the PostgreSQL database connection and tables.
 * 
 * Usage:
 * node scripts/check-postgres.js
 */

const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

async function main() {
  console.log('Checking PostgreSQL Database');
  console.log('============================');
  
  // Get PostgreSQL connection string from environment variables
  const url = process.env.DATABASE_URL;
  
  if (!url) {
    console.error('DATABASE_URL environment variable is not set');
    process.exit(1);
  }
  
  // Check if it's a PostgreSQL connection string
  if (!url.startsWith('postgresql://')) {
    console.error('DATABASE_URL does not appear to be a PostgreSQL connection string');
    console.error('Expected format: postgresql://username:password@hostname:5432/database');
    process.exit(1);
  }
  
  const prisma = new PrismaClient();
  
  try {
    // Connect to PostgreSQL by executing a simple query
    await prisma.$queryRaw`SELECT 1`;
    console.log('✅ Connected to PostgreSQL successfully');
    
    // Extract database name from connection string
    const dbName = url.split('/').pop().split('?')[0];
    console.log(`Database name: ${dbName}`);
    
    // Get table information
    const tables = await prisma.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name;
    `;
    
    console.log(`\nTables in database (${tables.length}):`);
    
    if (tables.length === 0) {
      console.log('No tables found. The database is empty.');
    } else {
      for (const table of tables) {
        const tableName = table.table_name;
        // Count records in each table
        const countResult = await prisma.$queryRawUnsafe(`SELECT COUNT(*) as count FROM "${tableName}"`);
        const count = parseInt(countResult[0].count);
        console.log(`- ${tableName}: ${count} records`);
      }
    }
    
    // Check for User table
    const userTable = tables.find(t => t.table_name === 'User');
    if (userTable) {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          role: true
        }
      });
      
      console.log(`\nUsers in database (${users.length}):`);
      
      for (const user of users) {
        console.log(`- ${user.name || 'Unnamed'} (${user.email}): Role = ${user.role}`);
      }
    } else {
      console.log('\nUser table not found. You may need to create it.');
    }
    
    // Check for Page table
    const pageTable = tables.find(t => t.table_name === 'Page');
    if (pageTable) {
      const pages = await prisma.page.findMany({
        select: {
          id: true,
          title: true,
          slug: true,
          status: true
        }
      });
      
      console.log(`\nPages in database (${pages.length}):`);
      
      for (const page of pages) {
        console.log(`- ${page.title} (${page.slug}): Status = ${page.status}`);
      }
    } else {
      console.log('\nPage table not found. You may need to create it.');
    }
    
    // Check for Post table
    const postTable = tables.find(t => t.table_name === 'Post');
    if (postTable) {
      const posts = await prisma.post.findMany({
        select: {
          id: true,
          title: true,
          slug: true,
          status: true
        }
      });
      
      console.log(`\nPosts in database (${posts.length}):`);
      
      for (const post of posts) {
        console.log(`- ${post.title} (${post.slug}): Status = ${post.status}`);
      }
    } else {
      console.log('\nPost table not found. You may need to create it.');
    }
    
    console.log('\nDatabase check completed.');
    
  } catch (error) {
    console.error('Error checking database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log('Disconnected from PostgreSQL');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
