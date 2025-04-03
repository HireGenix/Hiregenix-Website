# Deploying HireGenix CMS

This guide provides step-by-step instructions for deploying the HireGenix CMS to Vercel.

## Prerequisites

Before deploying, make sure you have:

1. A [Vercel account](https://vercel.com/signup)
2. A PostgreSQL database (options include [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres), [Supabase](https://supabase.com/), [Railway](https://railway.app/), [Neon](https://neon.tech/), or [AWS RDS](https://aws.amazon.com/rds/))
3. Your project code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Setting Up PostgreSQL

### Option 1: Vercel Postgres (Recommended for Vercel deployments)

1. In your Vercel dashboard, go to Storage and create a new Postgres database
2. Connect it to your project
3. Vercel will automatically add the `POSTGRES_URL` environment variable to your project

### Option 2: Supabase

1. Create a new project in [Supabase](https://supabase.com/)
2. Go to Project Settings > Database to find your connection string
3. The connection string will look like:
   ```
   postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres
   ```

### Option 3: Railway

1. Create a new PostgreSQL database in [Railway](https://railway.app/)
2. Go to the Connect tab to find your connection string
3. The connection string will look like:
   ```
   postgresql://postgres:[YOUR-PASSWORD]@[YOUR-HOST].railway.app:5432/railway
   ```

### Option 4: Self-hosted or other providers

1. Set up a PostgreSQL database on your preferred hosting provider
2. Ensure the database is accessible from the internet (or at least from Vercel's IP ranges)
3. Create a database user with appropriate permissions
4. Note your connection string, which should look like:
   ```
   postgresql://username:password@hostname:5432/hiregenix?schema=public
   ```

## Deploying to Vercel

### Option 1: Deploy from the Vercel Dashboard

1. Log in to your [Vercel dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your Git repository
4. Configure the project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: .next
5. Add environment variables:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `NEXTAUTH_URL`: The URL of your Vercel deployment (e.g., https://your-project.vercel.app)
   - `NEXTAUTH_SECRET`: A random string for NextAuth.js (generate with `openssl rand -base64 32`)
   - Add any other environment variables from your `.env.example` file as needed
6. Click "Deploy"

### Option 2: Deploy with Vercel CLI

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Log in to Vercel:
   ```bash
   vercel login
   ```

3. Navigate to your project directory and deploy:
   ```bash
   cd hiregenix-cms
   vercel
   ```

4. Follow the prompts to configure your project
5. Set up environment variables when prompted

## Post-Deployment Steps

After deploying, you need to:

1. Set up the database:
   ```bash
   vercel env pull .env.production.local
   npx prisma migrate deploy
   ```

2. Create an admin user:
   ```bash
   npm run create:admin
   ```
   Or use the Vercel CLI to run the command on the deployed project:
   ```bash
   vercel run create:admin
   ```

3. Seed the database with initial content (optional):
   ```bash
   npx prisma db seed
   ```

## Continuous Deployment

Vercel automatically sets up continuous deployment from your Git repository. Any changes pushed to your main branch will trigger a new deployment.

To customize this behavior:
1. Go to your project settings in the Vercel dashboard
2. Navigate to the "Git" tab
3. Configure the production branch and other Git settings

## Custom Domains

To add a custom domain to your Vercel deployment:

1. Go to your project in the Vercel dashboard
2. Click on "Domains"
3. Add your domain and follow the instructions to configure DNS settings

## Troubleshooting

### Database Connection Issues

If you're having trouble connecting to your PostgreSQL database:

1. Check that your PostgreSQL connection string is correct
2. Ensure your database user has the correct permissions
3. Verify that your database is accessible from Vercel's servers (check firewall rules)
4. For Vercel Postgres, ensure you've properly linked the database to your project

### Build Errors

If your build is failing:

1. Check the build logs in the Vercel dashboard
2. Ensure all dependencies are correctly installed
3. Verify that your environment variables are correctly set

### NextAuth.js Issues

If you're having authentication problems:

1. Make sure `NEXTAUTH_URL` is set to your deployment URL
2. Ensure `NEXTAUTH_SECRET` is set
3. Check that your database connection is working correctly

## Monitoring and Analytics

Vercel provides built-in analytics and monitoring tools:

1. Go to your project in the Vercel dashboard
2. Click on "Analytics" to view performance metrics
3. Use "Logs" to troubleshoot issues

## Scaling

As your CMS grows, you may need to scale your resources:

1. Upgrade your PostgreSQL database plan for more storage and performance
2. Consider using connection pooling for high-traffic applications
3. Implement caching strategies for frequently accessed content
4. Consider using Vercel's Edge Network for global distribution

## Security Best Practices

1. Regularly update dependencies with `npm update`
2. Use environment variables for all sensitive information
3. Implement rate limiting for API routes
4. Set up proper authentication and authorization checks
5. Enable PostgreSQL security features like SSL connections and encryption at rest
6. Regularly backup your database
7. Use prepared statements to prevent SQL injection

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Prisma with PostgreSQL Documentation](https://www.prisma.io/docs/concepts/database-connectors/postgresql)
- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/deployment)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
