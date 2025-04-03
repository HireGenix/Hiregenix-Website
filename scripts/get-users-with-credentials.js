#!/usr/bin/env node

/**
 * This script retrieves all users from the database with their credentials.
 * 
 * Usage:
 * node scripts/get-users-with-credentials.js
 */

const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
  console.log('Retrieving Users with Credentials');
  console.log('================================');
  
  try {
    // Get all users with all fields
    const users = await prisma.user.findMany();
    
    console.log(`\nUsers in database (${users.length}):`);
    
    if (users.length === 0) {
      console.log('No users found in the database.');
    } else {
      for (const user of users) {
        console.log(`\nUser ID: ${user.id}`);
        console.log(`Name: ${user.name || 'Not set'}`);
        console.log(`Email: ${user.email}`);
        console.log(`Password (hashed): ${user.password}`);
        console.log(`Role: ${user.role}`);
        console.log(`Email Verified: ${user.emailVerified ? 'Yes' : 'No'}`);
        console.log(`Created At: ${user.createdAt}`);
        console.log(`Updated At: ${user.updatedAt}`);
      }
    }
    
  } catch (error) {
    console.error('Error retrieving users:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
