#!/usr/bin/env node

/**
 * This script deletes static page implementations to force the app to use the dynamic [slug] route.
 * 
 * Usage:
 * node scripts/delete-static-pages.js
 */

const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function main() {
  console.log('Deleting Static Page Implementations');
  console.log('===================================');
  
  // Define the pages to delete
  const pagesToDelete = [
    'about',
    'blog',
    'careers',
    'contact',
    'disclaimer',
    'pricing',
    'privacy',
    'refund-policy',
    'solutions',
    'terms',
  ];
  
  // Define the app directory
  const appDir = path.join(process.cwd(), 'src', 'app');
  
  // Delete each page
  for (const page of pagesToDelete) {
    const pagePath = path.join(appDir, page);
    
    if (fs.existsSync(pagePath)) {
      console.log(`Deleting page: ${page}`);
      
      // Check if it's a directory
      if (fs.statSync(pagePath).isDirectory()) {
        // Delete the page.tsx file
        const pageFile = path.join(pagePath, 'page.tsx');
        if (fs.existsSync(pageFile)) {
          fs.unlinkSync(pageFile);
          console.log(`  - Deleted ${pageFile}`);
        }
        
        // Check if the directory is empty
        const files = fs.readdirSync(pagePath);
        if (files.length === 0) {
          // Delete the directory if it's empty
          fs.rmdirSync(pagePath);
          console.log(`  - Deleted empty directory ${pagePath}`);
        } else {
          console.log(`  - Directory ${pagePath} is not empty, keeping it`);
        }
      } else {
        // Delete the file
        fs.unlinkSync(pagePath);
        console.log(`  - Deleted ${pagePath}`);
      }
    } else {
      console.log(`Page ${page} does not exist, skipping...`);
    }
  }
  
  console.log('\nStatic page implementations deleted successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
