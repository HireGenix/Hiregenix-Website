#!/usr/bin/env node

/**
 * This script creates a test admin user in the database.
 * 
 * Usage:
 * node scripts/create-test-admin.js
 */

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
  console.log('Creating Test Admin User');
  console.log('=======================');
  
  // Test admin credentials
  const email = 'admin@example.com';
  const name = 'Site Administrator';
  const password = 'Password123!';
  
  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });
    
    if (existingUser) {
      console.log(`User with email ${email} already exists`);
      
      // Update user to admin role
      await prisma.user.update({
        where: { email },
        data: { role: 'ADMIN' }
      });
      
      console.log(`User ${email} has been updated to admin role`);
    } else {
      // Create new admin user
      const hashedPassword = await bcrypt.hash(password, 10);
      
      await prisma.user.create({
        data: {
          email,
          name,
          password: hashedPassword,
          role: 'ADMIN',
          emailVerified: new Date()
        }
      });
      
      console.log(`Admin user ${email} has been created successfully`);
    }
    
    console.log('\nAdmin User Details:');
    console.log('------------------');
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log('\nUse these credentials to log in at: http://localhost:3000/auth/login');
    
  } catch (error) {
    console.error('Error creating admin user:', error);
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
