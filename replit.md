# The Herald - Landing Page Application

## Overview

The Herald is a modern full-stack web application featuring a cosmic-themed landing page for a future-facing holding company. The application showcases a clean, elegant design with email signup functionality for interested prospects. Built with React, TypeScript, and Express, it uses a PostgreSQL database with Drizzle ORM for data persistence.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React-based SPA with TypeScript and Vite
- **Backend**: Express.js REST API with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **UI Framework**: shadcn/ui components with Tailwind CSS
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite build system
- **UI System**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom cosmic theme variables
- **Animations**: Framer Motion for smooth interactions
- **Forms**: React Hook Form with Zod validation
- **HTTP Client**: Native fetch with TanStack Query for caching

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM for type-safe queries
- **Validation**: Zod schemas shared between client and server
- **Session Management**: Ready for PostgreSQL session storage
- **Development**: Hot reloading with tsx and Vite integration

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Email Signups Table**: Lead capture system (id, email, created_at)
- **Migration System**: Drizzle Kit for database schema management

## Data Flow

1. **User Interaction**: Users interact with the cosmic-themed landing page
2. **Email Signup**: Form submission triggers client-side validation
3. **API Request**: TanStack Query manages the POST request to `/api/email-signup`
4. **Server Processing**: Express middleware validates data and checks for duplicates
5. **Database Storage**: Drizzle ORM persists email signups to PostgreSQL
6. **Response Handling**: Success/error feedback via toast notifications

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: PostgreSQL client optimized for serverless
- **drizzle-orm**: Type-safe database queries and migrations
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for smooth UI transitions

### UI Components
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **lucide-react**: Modern icon library
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe component variants

### Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Build Process
1. **Client Build**: Vite compiles React app to `dist/public`
2. **Server Build**: esbuild bundles Express server to `dist/index.js`
3. **Database Setup**: Drizzle migrations applied via `db:push` command

### Production Configuration
- **Environment Variables**: `DATABASE_URL` required for PostgreSQL connection
- **Static Assets**: Client files served from `dist/public` directory
- **API Routes**: Express server handles `/api/*` endpoints
- **Error Handling**: Comprehensive error middleware with proper HTTP status codes

### Development Workflow
- **Hot Reloading**: Vite HMR for instant client updates
- **API Logging**: Request/response logging with timing information
- **Type Safety**: Shared schemas ensure consistency between frontend and backend

## Changelog

```
Changelog:
- July 01, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```