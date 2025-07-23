// This script updates the blog post image paths in the database
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Updating blog post image paths...');

  try {
    // Update the first blog post
    const post1 = await prisma.post.update({
      where: { slug: 'ai-transforming-recruitment' },
      data: {
        featuredImage: '/blog/5 Ways AI is Transforming the Recruitment Process.png'
      }
    });
    console.log(`Updated image path for post: ${post1.title}`);

    // Update the second blog post
    const post2 = await prisma.post.update({
      where: { slug: 'future-skills-assessment' },
      data: {
        featuredImage: '/blog/The Future of Skills Assessment: Beyond Traditional Testing.png'
      }
    });
    console.log(`Updated image path for post: ${post2.title}`);

    // Update the third blog post
    const post3 = await prisma.post.update({
      where: { slug: 'building-diverse-teams' },
      data: {
        featuredImage: '/blog/Building Diverse Teams: How Technology Can Help.png'
      }
    });
    console.log(`Updated image path for post: ${post3.title}`);

    console.log('All blog post image paths updated successfully!');
  } catch (error) {
    console.error('Error updating blog post image paths:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
