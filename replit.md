# Beer Pixel Game

## Overview

Beer Pixel Game is a retro-style brewing adventure game built as a full-stack web application. Players take on the role of beer connoisseurs who can brew legendary beers, trade with other players, compete in seasonal tournaments, and collect rare ingredients. The game features a pixel art aesthetic with a comprehensive brewing simulation, player progression system, and competitive elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Styling**: Tailwind CSS with custom pixel-art theme variables and CSS custom properties
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and caching
- **Design System**: Custom pixel art theme with beer-themed color palette (beer-gold, barrel-dark, hops-green, etc.)

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful API structure with `/api` prefix for all backend routes
- **Development**: Vite middleware integration for hot module replacement in development
- **Build System**: ESBuild for fast production builds with external package bundling

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless PostgreSQL with connection pooling
- **Schema**: Comprehensive game schema including users, players, breweries, recipes, seasons, and leaderboards
- **Migrations**: Drizzle Kit for database schema migrations and management

### Authentication & Session Management
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple
- **User Management**: User accounts with username/password authentication
- **Player Profiles**: Separate player entities linked to user accounts for game-specific data
- **Authorization**: Cookie-based sessions with secure credential handling

### Game Systems
- **Player Progression**: Level-based system with experience points, skills (brewing, trading), and reputation
- **Brewery Management**: Player-owned breweries with capacity, efficiency, and upgrade mechanics
- **Recipe System**: JSON-based ingredient storage with difficulty ratings and rarity tiers
- **Seasonal Events**: Time-based competitions and tournaments with leaderboard tracking
- **Economy**: Coin-based currency system for trading and purchases

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting with automatic scaling
- **Drizzle ORM**: Type-safe database toolkit with schema validation using Zod

### UI and Styling
- **Radix UI**: Headless UI components for accessibility and keyboard navigation
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Google Fonts**: Press Start 2P pixel font for authentic retro gaming aesthetic
- **Lucide Icons**: SVG icon library for consistent iconography

### Development Tools
- **Vite**: Frontend build tool with HMR and optimized production builds
- **ESBuild**: Fast JavaScript bundler for server-side code compilation
- **Replit Integration**: Development environment plugins for Replit-specific features
- **TypeScript**: Static type checking across frontend, backend, and shared code

### Runtime Libraries
- **React Query**: Server state management with caching, background updates, and optimistic updates
- **React Hook Form**: Form handling with validation using Hookform resolvers
- **Date-fns**: Date manipulation and formatting utilities
- **Class Variance Authority**: Type-safe CSS class composition for component variants
- **Wouter**: Minimalist router for single-page application navigation