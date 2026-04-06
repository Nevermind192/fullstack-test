# Fullstack Test Application

A fullstack application with a NestJS backend and a Nuxt frontend. This project demonstrates a modern fullstack setup with authentication, database integration, and a responsive UI.

## Tech Stack

### Backend

- **Framework**: NestJS 11 with TypeScript
- **Database**: PostgreSQL 16 with Prisma ORM 7.0.1
- **Authentication**: JWT-based authentication
- **Prisma Adapter**: @prisma/adapter-pg (node-postgres driver)

### Frontend

- **Framework**: Nuxt 3 with TypeScript
- **UI**: Ant Design Vue
- **State Management**: Pinia
- **Authentication**: JWT-based authentication with API integration

## Project Structure

```
fullstack-test/
├── backend/
│   ├── prisma/              # Prisma schema and migrations
│   ├── src/                 # NestJS source code
│   ├── docker-compose.yml   # PostgreSQL
│   └── ...
├── frontend/
│   ├── components/          # Vue components
│   ├── pages/               # Application pages
│   ├── stores/              # Pinia stores
│   ├── nuxt.config.ts       # Nuxt configuration
│   └── ...
└── README.md                # This file
```

## Prerequisites

- Node.js (v18 or higher)
- Docker (for running PostgreSQL)
- pnpm (recommended, but npm or yarn can also be used)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Nevermind192/fullstack-test
cd fullstack-test
```

### 2. Setup Backend

#### Install Dependencies

```bash
cd backend
pnpm install
```

#### Environment Variables

Copy `.env.example` to `.env` and adjust as needed:

```bash
cp .env.example .env
```

#### Start Infrastructure

```bash
docker-compose up -d
```

#### Run Migrations

```bash
npx prisma migrate dev --name init
```

### 3. Setup Frontend

#### Install Dependencies

```bash
cd ../frontend
pnpm install
```

### 4. Run the Application

#### Start Backend

```bash
cd ../backend
pnpm dev
```

The backend API will be available at `http://localhost:3000`.

#### Start Frontend

```bash
cd ../frontend
pnpm dev
```

The frontend application will be available at `http://localhost:3001`.

## Common Commands

### Backend

```bash
# Generate Prisma client
npx prisma generate

# Create a new migration
npx prisma migrate dev --name <migration_name>

# Apply migrations (production)
npx prisma migrate deploy

# Open Prisma Studio (GUI)
npx prisma studio

# Run tests
pnpm test

# Type checking
pnpm typecheck
```

### Frontend

```bash
# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Features

- User authentication (login, logout, profile)
- Admin dashboard
- JWT-based authentication
- PostgreSQL database
- Responsive UI with Ant Design Vue and Nuxt3

## License

This project is licensed under the MIT License.
