# HireGenix CMS

A modern, Next.js-based Content Management System for the HireGenix recruitment platform. This CMS is designed to be deployed on Vercel and provides a comprehensive solution for managing website content.

## Key Features

### Database Schema

- PostgreSQL-compatible Prisma schema with models for:
  - Users (with authentication)
  - Pages (with sections for drag-and-drop page building)
  - Posts (with categories and tags)
  - Media management
  - Menu management
  - Site settings

### Authentication System

- NextAuth.js for secure authentication
- Login page and authentication flow
- Middleware for protecting admin routes
- Role-based access control

### Admin Panel

- Responsive admin dashboard with Material UI
- Sidebar navigation for easy access to different sections
- Statistics overview on the dashboard

### Website Frontend

- Responsive homepage with dynamic content sections
- Modular design that pulls content from the CMS
- SEO optimization capabilities

## Getting Started

To run the CMS locally:

1. Clone the repository
2. Install dependencies with `npm install`
3. Copy `.env.example` to `.env` and update the environment variables:
   ```bash
   cp .env.example .env
   ```
4. Set up a PostgreSQL database and update the `DATABASE_URL` in your `.env` file
5. Run database migrations and seed the database:
   ```bash
   npm run db:migrate
   npm run db:seed
   ```
6. Start the development server with `npm run dev`
7. Access the website at http://localhost:3000 and admin panel at http://localhost:3000/admin

### Default admin credentials:

- Email: admin@hiregenix.com
- Password: admin123

## Development Features

- Next.js 15.2.1 with Turbopack for faster development
- Material UI for consistent design
- Prisma ORM with PostgreSQL for robust database management
- NextAuth.js for authentication
- Drag-and-drop page builder
- Media library with image optimization
- SEO tools for better search engine visibility

## Deployment

This CMS is configured for deployment on Vercel. See the [DEPLOYMENT.md](DEPLOYMENT.md) file for detailed instructions.

## Docker Support

For containerized deployment, Docker configuration is provided. See the [DOCKER.md](DOCKER.md) file for details.

## Production Setup

To prepare the CMS for production:

1. Set secure passwords in your `.env` file:
   - Update `POSTGRES_PASSWORD` with a strong password
   - Update `PGADMIN_PASSWORD` with a strong password
   - Ensure `NEXTAUTH_SECRET` is a secure random string (generate with `openssl rand -base64 32`)
   - Set `NEXTAUTH_URL` to your production URL

2. Run the production preparation script:
   ```bash
   npm run prepare:production
   ```

3. For Docker deployment:
   ```bash
   docker-compose up -d
   ```

4. For Vercel deployment, follow the instructions in [DEPLOYMENT.md](DEPLOYMENT.md)

## Security Considerations

- Always use HTTPS in production
- Regularly update dependencies with `npm update`
- Enable database backups
- Use strong, unique passwords for all services
- Consider implementing rate limiting for API routes
- Set up proper logging and monitoring

## Next Steps

To further enhance the CMS, consider:

- Implementing more advanced page builder components
- Adding image optimization and media library features
- Creating additional API endpoints for headless CMS functionality
- Setting up analytics integration
- Adding multi-language support
- Implementing caching strategies for better performance
