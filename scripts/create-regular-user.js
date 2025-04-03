#!/usr/bin/env node

/**
 * This script creates a regular user in the database.
 * 
 * Usage:
 * node scripts/create-regular-user.js
 */

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
  console.log('Creating Regular User');
  console.log('====================');
  
  // Regular user credentials
  const email = 'user@hiregenix.com';
  const name = 'Regular User';
  const password = 'User123!';
  
  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });
    
    if (existingUser) {
      console.log(`User with email ${email} already exists`);
      
      // Update user to USER role
      await prisma.user.update({
        where: { email },
        data: { role: 'USER' }
      });
      
      console.log(`User ${email} has been updated to USER role`);
    } else {
      // Create new regular user
      const hashedPassword = await bcrypt.hash(password, 10);
      
      await prisma.user.create({
        data: {
          email,
          name,
          password: hashedPassword,
          role: 'USER',
          emailVerified: new Date()
        }
      });
      
      console.log(`Regular user ${email} has been created successfully`);
    }
    
    console.log('\nRegular User Details:');
    console.log('--------------------');
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log('\nUse these credentials to log in at: http://localhost:3000/auth/login');
    
  } catch (error) {
    console.error('Error creating regular user:', error);
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
