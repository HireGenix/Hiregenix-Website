#!/usr/bin/env node

/**
 * This script creates an admin user in the database.
 * It's useful for setting up the CMS initially or for creating additional admin users.
 * 
 * Usage:
 * node scripts/create-admin-user.js
 * 
 * You will be prompted to enter the email, name, and password for the admin user.
 */

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const readline = require('readline');

const prisma = new PrismaClient();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
  console.log('Create Admin User');
  console.log('=================');
  
  // Get user input
  const email = await askQuestion('Email: ');
  const name = await askQuestion('Name: ');
  const password = await askQuestion('Password: ');
  
  // Validate input
  if (!email || !password) {
    console.error('Email and password are required');
    process.exit(1);
  }
  
  if (password.length < 8) {
    console.error('Password must be at least 8 characters long');
    process.exit(1);
  }
  
  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });
    
    if (existingUser) {
      console.log(`User with email ${email} already exists`);
      
      // Ask if user should be updated to admin role
      const updateRole = await askQuestion('Update user to admin role? (y/n): ');
      
      if (updateRole.toLowerCase() === 'y') {
        await prisma.user.update({
          where: { email },
          data: { role: 'ADMIN' }
        });
        
        console.log(`User ${email} has been updated to admin role`);
      } else {
        console.log('No changes made');
      }
    } else {
      // Create new admin user
      const hashedPassword = await bcrypt.hash(password, 10);
      
      await prisma.user.create({
        data: {
          email,
          name: name || email.split('@')[0],
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
    rl.close();
  }
}

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
