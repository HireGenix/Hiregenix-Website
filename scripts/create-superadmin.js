#!/usr/bin/env node

/**
 * This script creates a superadmin user in the database.
 * It's useful for setting up the CMS initially with full administrative privileges.
 * 
 * Usage:
 * node scripts/create-superadmin.js
 */

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
  console.log('Creating Superadmin User');
  console.log('=======================');
  
  // Superadmin credentials
  const email = 'superadmin@hiregenix.com';
  const name = 'Super Administrator';
  const password = 'SuperAdmin123!';
  
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
      // Create new superadmin user
      const hashedPassword = await bcrypt.hash(password, 10);
      
      await prisma.user.create({
        data: {
          email,
          name,
          password: hashedPassword,
          role: 'ADMIN', // Using ADMIN role as it's the highest privilege in the schema
          emailVerified: new Date(), // Pre-verify the email
        }
      });
      
      console.log(`Superadmin user ${email} has been created successfully`);
    }
    
    console.log('\nSuperadmin User Details:');
    console.log('----------------------');
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log('\nUse these credentials to log in at: http://localhost:3000/auth/login');
    console.log('\nIMPORTANT: Change this password immediately after first login for security reasons.');
    
  } catch (error) {
    console.error('Error creating superadmin user:', error);
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
