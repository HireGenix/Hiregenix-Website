# Database Choice: MongoDB vs PostgreSQL for HireGenix CMS

## Current Implementation: MongoDB

The HireGenix CMS currently uses MongoDB as its database, as configured in the Prisma schema:

```prisma
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}
```

## Why MongoDB Was Chosen

MongoDB was selected for the HireGenix CMS for several key reasons:

### 1. Flexible Schema for Content Management

MongoDB's document-based structure is well-suited for content management systems where:

- **Content structures vary**: Different section types (Hero, Grid, Masonry Gallery, etc.) have different data structures
- **JSON storage is native**: The `content` field in the `Section` model is stored as `Json?`, which maps naturally to MongoDB's BSON format
- **Schema evolution is frequent**: During development, content models often change as new features are added

### 2. Performance for Content-Heavy Applications

- **Read-optimized**: CMS systems are typically read-heavy (many page views, fewer edits)
- **Document retrieval**: Fetching an entire page with all its sections is efficient as related data can be embedded
- **Query flexibility**: MongoDB's query language works well for content filtering and searching

### 3. Developer Experience

- **JSON-native workflow**: Frontend and backend both work with JSON, reducing data transformation needs
- **Simplified development**: Less need for complex migrations during the development phase
- **Rapid prototyping**: Easier to iterate on data models without strict schema constraints

### 4. Scalability Considerations

- **Horizontal scaling**: MongoDB's sharding capabilities support growth
- **Cloud-friendly**: Works well with serverless and containerized deployments
- **Vercel integration**: Smooth deployment with Vercel and MongoDB Atlas

## Migrating to PostgreSQL

If you prefer to use PostgreSQL instead of MongoDB, here's how to migrate:

### 1. Update Prisma Schema

Create a new schema file for PostgreSQL:

```prisma
// prisma/schema.postgresql.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// User model
model User {
  id            String    @id @default(uuid())
  name          String?
  email         String    @unique
  password      String
  emailVerified DateTime?
  image         String?
  role          Role      @default(USER)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  posts         Post[]
  accounts      Account[]
  sessions      Session[]
}

enum Role {
  USER
  ADMIN
  EDITOR
}

// NextAuth models
model Account {
  id                String  @id @default(uuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(uuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}

// Content models
model Page {
  id        String    @id @default(uuid())
  title     String
  slug      String    @unique
  status    Status    @default(DRAFT)
  sections  Section[]
  seo       Json?
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
}

model Section {
  id       String  @id @default(uuid())
  type     String
  order    Int
  content  Json?
  pageId   String
  page     Page    @relation(fields: [pageId], references: [id], onDelete: Cascade)
}

model Post {
  id            String    @id @default(uuid())
  title         String
  slug          String    @unique
  content       String    @db.Text
  excerpt       String?
  featuredImage String?
  status        Status    @default(DRAFT)
  authorId      String
  author        User      @relation(fields: [authorId], references: [id])
  categoryId    String?
  category      Category? @relation(fields: [categoryId], references: [id])
  tags          Tag[]
  seo           Json?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

enum Status {
  DRAFT
  PUBLISHED
  ARCHIVED
}

model Category {
  id        String   @id @default(uuid())
  name      String
  slug      String   @unique
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Tag {
  id        String   @id @default(uuid())
  name      String
  slug      String   @unique
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

// Media model
model Media {
  id          String   @id @default(uuid())
  name        String
  url         String
  type        String
  size        Int
  description String?
  alt         String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

// Menu models
model Menu {
  id        String       @id @default(uuid())
  name      String
  location  MenuLocation
  items     MenuItem[]
  createdAt DateTime     @default(now())
  updatedAt DateTime     @updatedAt
}

enum MenuLocation {
  HEADER
  FOOTER
  SIDEBAR
}

model MenuItem {
  id        String     @id @default(uuid())
  label     String
  url       String
  order     Int
  parentId  String?
  parent    MenuItem?  @relation("MenuItemToMenuItem", fields: [parentId], references: [id], onDelete: NoAction, onUpdate: NoAction)
  children  MenuItem[] @relation("MenuItemToMenuItem")
  menuId    String
  menu      Menu       @relation(fields: [menuId], references: [id], onDelete: Cascade)
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
}

// Site settings model
model SiteSettings {
  id              String   @id @default(uuid())
  siteName        String
  siteDescription String?
  contactEmail    String?
  contactPhone    String?
  contactAddress  String?
  socialLinks     Json?
  logoUrl         String?
  faviconUrl      String?
  primaryColor    String?
  secondaryColor  String?
  footerText      String?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}
```

### 2. Update Environment Variables

Update your `.env` file with PostgreSQL connection string:

```
# MongoDB connection string (old)
# DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/hiregenix?retryWrites=true&w=majority"

# PostgreSQL connection string (new)
DATABASE_URL="postgresql://username:password@localhost:5432/hiregenix?schema=public"
```

### 3. Create Migration

```bash
# Generate the migration files
npx prisma migrate dev --name init --schema=./prisma/schema.postgresql.prisma

# Apply the migration
npx prisma migrate deploy --schema=./prisma/schema.postgresql.prisma
```

### 4. Data Migration

For migrating existing data, you'll need to:

1. Export data from MongoDB
2. Transform the data to fit PostgreSQL schema
3. Import into PostgreSQL

Here's a simple script to help with this process:

```javascript
// scripts/migrate-to-postgresql.js
const { PrismaClient: MongoPrisma } = require('@prisma/client');
const { PrismaClient: PostgresPrisma } = require('./postgres-client');

// Initialize clients
const mongoPrisma = new MongoPrisma();
const postgresPrisma = new PostgresPrisma();

async function migrateData() {
  try {
    // Migrate users
    const users = await mongoPrisma.user.findMany();
    for (const user of users) {
      await postgresPrisma.user.create({
        data: {
          // Transform MongoDB ObjectId to UUID
          id: undefined, // Let PostgreSQL generate a new UUID
          name: user.name,
          email: user.email,
          password: user.password,
          emailVerified: user.emailVerified,
          image: user.image,
          role: user.role,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      });
    }

    // Migrate other models similarly
    // ...

    console.log('Migration completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
  } finally {
    await mongoPrisma.$disconnect();
    await postgresPrisma.$disconnect();
  }
}

migrateData();
```

### 5. Update Application Code

1. Replace the Prisma schema file
2. Update any MongoDB-specific queries in your application
3. Test thoroughly to ensure all functionality works with PostgreSQL

## PostgreSQL Advantages

Switching to PostgreSQL would offer these benefits:

1. **Relational integrity**: Strong referential integrity with foreign key constraints
2. **ACID compliance**: Fully ACID-compliant transactions
3. **Advanced queries**: More powerful query capabilities with SQL
4. **Schema validation**: Strict schema validation prevents data inconsistencies
5. **Mature ecosystem**: Well-established tooling and community support
6. **Full-text search**: Built-in full-text search capabilities
7. **Complex joins**: Better support for complex data relationships

## Conclusion

Both MongoDB and PostgreSQL are excellent database choices for a CMS like HireGenix. MongoDB offers flexibility and a natural fit for JSON-based content, while PostgreSQL provides stronger data integrity and relational capabilities.

The choice depends on your specific requirements:

- **Choose MongoDB** if you prioritize schema flexibility, JSON storage, and rapid development
- **Choose PostgreSQL** if you prioritize data integrity, complex queries, and traditional relational database features

This document provides guidance for migrating to PostgreSQL if that better suits your needs.
