#!/usr/bin/env node

/**
 * This script creates an admin user in the database using direct MongoDB connection.
 * 
 * Usage:
 * node scripts/create-admin-mongodb.js
 */

const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');
require('dotenv').config();

async function main() {
  console.log('Creating Admin User with Direct MongoDB Connection');
  console.log('===============================================');
  
  // Admin credentials
  const email = 'admin@example.com';
  const name = 'Site Administrator';
  const password = 'Password123!';
  
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
    console.log('Connected to MongoDB');
    
    // Get database name from connection string
    const dbName = uri.split('/').pop().split('?')[0];
    const db = client.db(dbName);
    
    // Check if user already exists
    const usersCollection = db.collection('User');
    const existingUser = await usersCollection.findOne({ email });
    
    if (existingUser) {
      console.log(`User with email ${email} already exists`);
      
      // Update user to admin role
      await usersCollection.updateOne(
        { email },
        { $set: { role: 'ADMIN' } }
      );
      
      console.log(`User ${email} has been updated to admin role`);
    } else {
      // Create new admin user
      const hashedPassword = await bcrypt.hash(password, 10);
      
      await usersCollection.insertOne({
        email,
        name,
        password: hashedPassword,
        role: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date()
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
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
