# Running HireGenix CMS with Docker

This guide provides instructions for running the HireGenix CMS using Docker and Docker Compose.

## Prerequisites

Before you begin, make sure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Quick Start

The easiest way to get started is to use Docker Compose, which will set up the CMS, PostgreSQL, and pgAdmin (admin interface) in one go.

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/hiregenix-cms.git
   cd hiregenix-cms
   ```

2. Create a `.env` file for Docker Compose:
   ```bash
   cp .env.example .env
   ```

3. Edit the `.env` file to set your environment variables:
   ```
   # PostgreSQL
   POSTGRES_USER=admin
   POSTGRES_PASSWORD=your-secure-password
   
   # pgAdmin
   PGADMIN_EMAIL=admin@hiregenix.com
   PGADMIN_PASSWORD=your-secure-password
   
   # NextAuth.js
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-nextauth-secret-key
   ```

4. Start the services:
   ```bash
   docker-compose up -d
   ```

5. Create an admin user:
   ```bash
   docker exec -it hiregenix-app npm run create:admin
   ```

6. Access the CMS:
   - Website: [http://localhost:3000](http://localhost:3000)
   - Admin Panel: [http://localhost:3000/admin](http://localhost:3000/admin)
   - pgAdmin: [http://localhost:8081](http://localhost:8081)

## Docker Compose Services

The `docker-compose.yml` file defines three services:

1. **postgres**: PostgreSQL database
2. **app**: HireGenix CMS application
3. **pgadmin**: Web-based PostgreSQL admin interface

### Environment Variables

You can configure the services using environment variables in your `.env` file:

#### PostgreSQL
- `POSTGRES_USER`: PostgreSQL admin username (default: admin)
- `POSTGRES_PASSWORD`: PostgreSQL admin password (default: password)

#### pgAdmin
- `PGADMIN_EMAIL`: pgAdmin login email (default: admin@hiregenix.com)
- `PGADMIN_PASSWORD`: pgAdmin login password (default: password)

#### NextAuth.js
- `NEXTAUTH_URL`: The URL of your site (default: http://localhost:3000)
- `NEXTAUTH_SECRET`: A secret key for NextAuth.js

## Building the Docker Image Manually

If you want to build and run the Docker image manually:

1. Build the image:
   ```bash
   docker build -t hiregenix-cms .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 \
     -e DATABASE_URL=postgresql://admin:password@postgres:5432/hiregenix?schema=public \
     -e NEXTAUTH_URL=http://localhost:3000 \
     -e NEXTAUTH_SECRET=your-nextauth-secret-key \
     hiregenix-cms
   ```

## Production Deployment

For production deployment, you should:

1. Use a more secure PostgreSQL setup (e.g., with authentication and TLS)
2. Set strong passwords for all services
3. Use a reverse proxy (like Nginx) with HTTPS
4. Consider using Docker Swarm or Kubernetes for orchestration

### Example Production `.env` File

```
# PostgreSQL
POSTGRES_USER=admin
POSTGRES_PASSWORD=your-very-secure-password

# pgAdmin (disable in production or secure properly)
PGADMIN_EMAIL=admin@hiregenix.com
PGADMIN_PASSWORD=another-very-secure-password

# NextAuth.js
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-nextauth-secret-key

# Media Storage (optional)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

## Volumes and Persistence

The Docker Compose setup includes a named volume for PostgreSQL data:

```yaml
volumes:
  postgres_data:
    name: hiregenix-postgres-data
```

This ensures that your data persists even if the containers are stopped or removed.

## Networking

The services are connected through a custom bridge network:

```yaml
networks:
  hiregenix-network:
    name: hiregenix-network
    driver: bridge
```

## Troubleshooting

### Container Logs

To view logs for a specific container:

```bash
docker logs hiregenix-app
docker logs hiregenix-postgres
docker logs hiregenix-pgadmin
```

### Accessing the Container Shell

To access the shell of a running container:

```bash
docker exec -it hiregenix-app sh
docker exec -it hiregenix-postgres bash
```

### Database Connection Issues

If the app can't connect to PostgreSQL:

1. Check that PostgreSQL is running:
   ```bash
   docker ps | grep postgres
   ```

2. Verify the PostgreSQL connection string in the app's environment variables:
   ```bash
   docker exec hiregenix-app env | grep DATABASE_URL
   ```

3. Try connecting to PostgreSQL directly:
   ```bash
   docker exec -it hiregenix-postgres psql -U admin -d hiregenix
   ```

### Restarting Services

To restart a specific service:

```bash
docker-compose restart app
docker-compose restart postgres
docker-compose restart pgadmin
```

## Updating the CMS

To update to a new version:

1. Pull the latest code:
   ```bash
   git pull
   ```

2. Rebuild and restart the containers:
   ```bash
   docker-compose down
   docker-compose build
   docker-compose up -d
   ```

## Backing Up Data

To back up your PostgreSQL data:

```bash
docker exec -it hiregenix-postgres pg_dump -U admin -d hiregenix > backup.sql
```

## Restoring Data

To restore your PostgreSQL data:

```bash
cat backup.sql | docker exec -i hiregenix-postgres psql -U admin -d hiregenix
```

## Security Considerations

1. Change all default passwords
2. Restrict access to PostgreSQL and pgAdmin
3. Use HTTPS for all services
4. Regularly update the Docker images
5. Consider using Docker secrets for sensitive information
