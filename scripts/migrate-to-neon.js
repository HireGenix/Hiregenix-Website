#!/usr/bin/env node

/**
 * This script migrates data from a local PostgreSQL database to a Neon database on Vercel.
 * 
 * Prerequisites:
 * 1. Local PostgreSQL database with data
 * 2. Neon database created on Vercel
 * 3. Neon connection string in .env.production file
 * 
 * Usage:
 * node scripts/migrate-to-neon.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');
require('dotenv').config();

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt user for input
function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  console.log('Migrating PostgreSQL Database to Neon on Vercel');
  console.log('=============================================');
  
  // Check if .env.production exists
  if (!fs.existsSync('.env.production')) {
    console.log('Creating .env.production file...');
    
    // Ask for Neon connection string
    const neonConnectionString = await prompt('Enter your Neon database connection string from Vercel: ');
    
    if (!neonConnectionString || !neonConnectionString.includes('neon.tech')) {
      console.error('Invalid Neon connection string. It should contain "neon.tech"');
      process.exit(1);
    }
    
    // Create .env.production file with Neon connection string
    fs.writeFileSync('.env.production', `DATABASE_URL="${neonConnectionString}"\n`);
    console.log('Created .env.production file with Neon connection string');
  }
  
  // Load Neon connection string from .env.production
  require('dotenv').config({ path: '.env.production' });
  const neonUrl = process.env.DATABASE_URL;
  
  if (!neonUrl) {
    console.error('DATABASE_URL not found in .env.production');
    process.exit(1);
  }
  
  // Load local connection string from .env
  const localUrl = process.env.DATABASE_URL;
  
  if (!localUrl) {
    console.error('DATABASE_URL not found in .env');
    process.exit(1);
  }
  
  // Extract database names
  const localDbName = localUrl.split('/').pop().split('?')[0];
  const neonDbName = neonUrl.split('/').pop().split('?')[0];
  
  console.log(`Local database: ${localDbName}`);
  console.log(`Neon database: ${neonDbName}`);
  
  // Create dump directory if it doesn't exist
  const dumpDir = path.join(__dirname, '../prisma/dumps');
  if (!fs.existsSync(dumpDir)) {
    fs.mkdirSync(dumpDir, { recursive: true });
  }
  
  const dumpFilePath = path.join(dumpDir, `${localDbName}_dump.sql`);
  
  try {
    // Step 1: Create a dump of the local database
    console.log('\nStep 1: Creating dump of local database...');
    
    // Extract connection details from local URL
    const localUrlObj = new URL(localUrl);
    const localUser = localUrlObj.username;
    const localPassword = localUrlObj.password;
    const localHost = localUrlObj.hostname;
    const localPort = localUrlObj.port || '5432';
    
    // Set environment variables for pg_dump
    const env = {
      ...process.env,
      PGPASSWORD: localPassword
    };
    
    // Create dump file
    execSync(
      `pg_dump -h ${localHost} -p ${localPort} -U ${localUser} -d ${localDbName} -f ${dumpFilePath} --no-owner --no-acl`,
      { env, stdio: 'inherit' }
    );
    
    console.log(`Database dump created at: ${dumpFilePath}`);
    
    // Step 2: Modify the dump file to be compatible with Neon
    console.log('\nStep 2: Preparing dump file for Neon...');
    
    // Read the dump file
    let dumpContent = fs.readFileSync(dumpFilePath, 'utf8');
    
    // Remove any CREATE EXTENSION statements that might cause issues
    dumpContent = dumpContent.replace(/CREATE EXTENSION IF NOT EXISTS.+?;\n/g, '');
    
    // Write the modified dump back to the file
    fs.writeFileSync(dumpFilePath, dumpContent);
    
    console.log('Dump file prepared for Neon');
    
    // Step 3: Import the dump to Neon
    console.log('\nStep 3: Importing dump to Neon database...');
    
    // Extract connection details from Neon URL
    const neonUrlObj = new URL(neonUrl);
    const neonUser = neonUrlObj.username;
    const neonPassword = neonUrlObj.password;
    const neonHost = neonUrlObj.hostname;
    const neonPort = neonUrlObj.port || '5432';
    
    // Set environment variables for psql
    const neonEnv = {
      ...process.env,
      PGPASSWORD: neonPassword
    };
    
    // Import dump file to Neon
    execSync(
      `psql -h ${neonHost} -p ${neonPort} -U ${neonUser} -d ${neonDbName} -f ${dumpFilePath}`,
      { env: neonEnv, stdio: 'inherit' }
    );
    
    console.log('Database dump imported to Neon successfully');
    
    // Step 4: Verify the import
    console.log('\nStep 4: Verifying import...');
    
    // Create a temporary file for the verification script
    const verifyScriptPath = path.join(__dirname, '../prisma/verify_import.sql');
    fs.writeFileSync(verifyScriptPath, 'SELECT table_name, (SELECT COUNT(*) FROM information_schema.columns WHERE table_name=t.table_name) AS column_count FROM information_schema.tables t WHERE table_schema=\'public\';');
    
    // Run the verification script
    execSync(
      `psql -h ${neonHost} -p ${neonPort} -U ${neonUser} -d ${neonDbName} -f ${verifyScriptPath}`,
      { env: neonEnv, stdio: 'inherit' }
    );
    
    // Clean up the verification script
    fs.unlinkSync(verifyScriptPath);
    
    console.log('\nMigration completed successfully!');
    console.log('\nNext steps:');
    console.log('1. Update your Vercel project to use the Neon database');
    console.log('2. Deploy your application to Vercel');
    console.log('3. Verify that your application is working correctly with the Neon database');
    
  } catch (error) {
    console.error('Error during migration:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
