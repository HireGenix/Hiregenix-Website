# Migrating to Neon Database on Vercel

This guide explains how to migrate your local PostgreSQL database to a Neon database on Vercel.

## Prerequisites

1. Local PostgreSQL database with data
2. Neon database created on Vercel
3. PostgreSQL command-line tools (`pg_dump` and `psql`) installed on your machine

## Step 1: Create a Neon Database on Vercel

1. Go to the [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project (hiregenix-website)
3. Click on the "Storage" tab
4. Click "Create" and select "Postgres Database"
5. Name your database (e.g., "hiregenix-db")
6. Select the "Free" plan
7. Choose a region close to your users
8. Click "Create"

## Step 2: Get the Neon Connection String

1. After creating the database, go to the "Storage" tab in your Vercel project
2. Click on your Postgres database
3. Find the "Connection String" section
4. Click "Show" and copy the connection string

## Step 3: Run the Migration Script

1. Make sure your local database is running and accessible
2. Run the migration script:

```bash
node scripts/migrate-to-neon.js
```

3. When prompted, paste the Neon connection string you copied in Step 2
4. The script will:
   - Create a dump of your local database
   - Prepare the dump file for Neon
   - Import the dump to your Neon database
   - Verify the import

## Step 4: Update Your Application

1. Update your `.env` file to use the Neon connection string:

```
DATABASE_URL="your-neon-connection-string"
```

2. Update your Prisma configuration if needed:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  directUrl = env("POSTGRES_URL_NON_POOLING") // If using connection pooling
}
```

3. Deploy your application to Vercel:

```bash
vercel --prod
```

## Troubleshooting

### Connection Issues

If you encounter connection issues, make sure:

1. Your IP address is allowed in the Neon dashboard
2. The connection string is correct
3. The database user has the necessary permissions

### Import Errors

If you encounter errors during import:

1. Check the error message for specific issues
2. You may need to modify the dump file to remove incompatible statements
3. For schema conflicts, you might need to drop the schema in Neon before importing:

```sql
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
```

### Data Verification

To verify your data was imported correctly:

1. Connect to your Neon database:

```bash
psql "your-neon-connection-string"
```

2. Run queries to check your data:

```sql
SELECT COUNT(*) FROM "User";
SELECT COUNT(*) FROM "Post";
```

## Additional Resources

- [Neon Documentation](https://neon.tech/docs)
- [Vercel Postgres Documentation](https://vercel.com/docs/storage/vercel-postgres)
- [Prisma with Neon](https://neon.tech/docs/guides/prisma)
