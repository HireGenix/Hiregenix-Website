#!/usr/bin/env node

/**
 * This script creates an editor user in the database.
 * 
 * Usage:
 * node scripts/create-editor-user.js
 */

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
  console.log('Creating Editor User');
  console.log('===================');
  
  // Editor credentials
  const email = 'editor@hiregenix.com';
  const name = 'Content Editor';
  const password = 'Editor123!';
  
  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });
    
    if (existingUser) {
      console.log(`User with email ${email} already exists`);
      
      // Update user to editor role
      await prisma.user.update({
        where: { email },
        data: { role: 'EDITOR' }
      });
      
      console.log(`User ${email} has been updated to editor role`);
    } else {
      // Create new editor user
      const hashedPassword = await bcrypt.hash(password, 10);
      
      await prisma.user.create({
        data: {
          email,
          name,
          password: hashedPassword,
          role: 'EDITOR',
          emailVerified: new Date()
        }
      });
      
      console.log(`Editor user ${email} has been created successfully`);
    }
    
    console.log('\nEditor User Details:');
    console.log('------------------');
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log('\nUse these credentials to log in at: http://localhost:3000/auth/login');
    
  } catch (error) {
    console.error('Error creating editor user:', error);
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
