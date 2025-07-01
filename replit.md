# The Herald - Landing Page Application

## Overview

The Herald is a simple, elegant landing page for a future-facing holding company. The application has been refactored from a complex React structure to a single HTML file with embedded CSS and animations. It showcases a clean, minimal design focused on presenting the company's vision and mission with the core message "Ye are gods". The page features Herald branding with a flowing abstract background and smooth animations.

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
2. **Navigation**: Smooth scrolling navigation between sections (Vision, Focus, Manifesto)
3. **Content Display**: Static presentation of company vision and focus areas
4. **No Data Collection**: Landing page is purely informational without forms or data capture

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
- July 01, 2025. Initial setup with email signup functionality
- July 01, 2025. Updated messaging and removed email signup forms per user request
  - Changed tagline to "We're catalyzing a world of abundance and unconstrained human achievement"
  - Added mission statement: "Building the future, one bold venture at a time—across AI, SpaceTech, bio-computing, and next-gen frontiers"
  - Removed all email capture functionality to create a pure informational landing page
  - Updated meta descriptions and SEO content to match new messaging
- July 01, 2025. Implemented calm aesthetic theme transformation
  - Updated color scheme from cosmic dark theme to clean, modern calm aesthetic
  - Changed fonts from EB Garamond to Playfair Display for headlines, Inter for body
  - Replaced dark background with light (#F5F6F8) and soft accent colors
  - Updated all component styling to use new theme variables
  - Modified glass effects and hover states for clean, modern feel
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```