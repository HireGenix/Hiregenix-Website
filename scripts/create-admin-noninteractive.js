#!/usr/bin/env node

/**
 * This script creates an admin user in the database without requiring user input.
 * It's useful for setting up the CMS initially.
 * 
 * Usage:
 * node scripts/create-admin-noninteractive.js
 */

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('Creating Admin User');
  console.log('=================');
  
  const email = 'admin@hiregenix.com';
  const name = 'Admin User';
  const password = 'admin123';
  
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
          role: 'ADMIN'
        }
      });
      
      console.log(`Admin user ${email} has been created successfully`);
    }
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
