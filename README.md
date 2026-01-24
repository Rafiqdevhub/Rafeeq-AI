# Rafeeq AI

A modern AI-powered learning community platform that connects learners with compatible study partners and provides intelligent matching, real-time messaging, and AI-powered conversation insights.

## Features

### Smart Matching

- **AI-Powered Matching**: Analyzes learning goals, skill levels, and interests to connect compatible learners
- **Goal-Based Discovery**: Match with users who share similar learning objectives
- **Community-Focused**: Find partners within specific learning communities

### Real-Time Communication

- **Built-In Chat**: Direct messaging between matched partners
- **Conversation Hub**: Plan sessions, share resources, and track progress together
- **Real-Time Updates**: Instant message delivery with optimistic UI updates

### Intelligent Insights

- **Auto-Generated Summaries**: AI-powered summaries after each conversation
- **Action Items Tracking**: Automatic extraction of next steps and tasks
- **Key Points Extraction**: Highlights important discussion points
- **Accountability Features**: Keep learners accountable without extra effort

### Goal Management

- **Learning Goal Tracking**: Define and update learning objectives
- **Goal Tags**: Organize goals with custom tags for better discovery
- **Progress Monitoring**: Track your learning journey within communities

### Community System

- **Create Communities**: Start learning communities around any topic
- **Community Membership**: Join multiple communities and find partners
- **Community-Specific Goals**: Set goals within each community context

## Tech Stack

### Frontend

- **Next.js 16.1.4** - React framework for production
- **React 19.2.3** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Motion** - Smooth animations and transitions
- **Radix UI** - Accessible component primitives
- **React Query** - Server state management and caching
- **Clerk** - Authentication and user management

### Backend

- **Next.js API Routes** - RESTful API with Hono integration
- **Hono 4.11.5** - Lightweight HTTP framework for API routing
- **Drizzle ORM** - Type-safe database ORM
- **PostgreSQL** - Primary database

### AI & LLM

- **Vercel AI SDK** - Unified AI framework
- **OpenAI** - GPT models for intelligent matching and summarization
- **Custom AI Functions**:
  - User matching algorithm
  - Conversation summarization
  - Key point extraction
  - Action item generation

### Database

- **PostgreSQL** - Relational database
- **Drizzle ORM** - Query builder and migrations
- **Drizzle Kit** - Schema management and studio

### Development Tools

- **ESLint** - Code quality
- **TypeScript** - Type safety
- **Tailwind PostCSS** - CSS processing
- **TSX** - TypeScript executor for scripts

## Database Schema

### Core Tables

- **users** - User profiles with Clerk integration and subscription tiers
- **communities** - Learning communities with creator information
- **communityMembers** - Community membership tracking
- **learningGoals** - User learning objectives with tags
- **matches** - AI-matched user pairings with status tracking
- **conversations** - Chat sessions between matched users
- **messages** - Individual messages in conversations
- **conversationSummaries** - AI-generated summaries with insights

## Project Structure

```
rafeeq-ai/
├── app/                          # Next.js app directory
│   ├── (main)/                   # Main app layout
│   │   ├── communities/          # Community pages
│   │   └── dashboard/            # User dashboard
│   ├── api/                      # API routes
│   │   └── servers/              # Route handlers (Hono)
│   ├── sign-in/                  # Authentication pages
│   ├── sign-up/
│   └── layout.tsx               # Root layout with providers
├── components/                   # Reusable React components
│   ├── landing/                  # Landing page sections
│   ├── communities/              # Community-specific components
│   ├── dashboard/                # Dashboard components
│   ├── layout/                   # Layout components
│   ├── provider/                 # Context providers
│   └── ui/                       # Shadcn UI components
├── db/                          # Database configuration
│   ├── schema.ts               # Drizzle schema definitions
│   ├── index.ts                # Database client
│   └── seed.ts                 # Database seeding
├── hooks/                       # Custom React hooks
│   ├── useAIPartner.ts         # AI matching hooks
│   ├── useCommunities.ts       # Community data hooks
│   ├── useGoals.ts             # Learning goals hooks
│   └── useUsers.ts             # User data hooks
├── lib/                         # Utility functions
│   ├── ai.ts                   # AI/LLM functions
│   ├── apiClient.ts            # HTTP client
│   ├── dbHelpers.ts            # Database queries
│   ├── userUtils.ts            # User utilities
│   └── utils.ts                # General utilities
└── public/                      # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended 20+)
- PostgreSQL database
- OpenAI API key
- Clerk account for authentication

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Rafiqdevhub/Rafeeq-AI.git
   cd Rafeeq-AI
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Configure the following variables:

   ```env
   # Database
   DATABASE_URL=postgresql://user:password@localhost:5432/rafeeq_ai

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   CLERK_SECRET_KEY=your_clerk_secret

   # OpenAI
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Initialize the database**

   ```bash
   bun run db:push
   bun run db:seed
   ```

5. **Start the development server**

   ```bash
   bun run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
# Development
bun run dev           # Start dev server

# Building
bun run build        # Build for production
bun run start        # Start production server

# Database
bun run db:generate  # Generate migrations
bun run db:push      # Push migrations to database
bun run db:studio    # Open Drizzle Studio
bun run db:seed      # Seed database with sample data

# Code Quality
bun run lint         # Run ESLint
```

## Key Features Implementation

### AI Matching Algorithm

The matching system uses OpenAI to analyze:

- User learning goals
- Skill levels
- Learning preferences
- Community context

See [lib/ai.ts](lib/ai.ts) for implementation details.

### Conversation Summarization

After each conversation, the system automatically:

- Generates a summary of discussion points
- Extracts key takeaways
- Identifies action items
- Suggests next steps

### Real-Time Communication

Messages are managed through:

- Optimistic UI updates
- React Query for state synchronization
- Real-time database operations

## Authentication

This project uses **Clerk** for authentication:

- Email/password authentication
- Social sign-ups
- User profile management
- Secure API integration

Protected routes are managed through Clerk middleware.

## Database Migrations

To create a new migration after schema changes:

```bash
bun run db:generate
```

To view and interact with database:

```bash
bun run db:studio
```

## 🌐 Deployment

### Build for Production

```bash
bun run build
bun run start
```

### Environment Setup for Deployment

Ensure all environment variables are set in your deployment platform:

- `DATABASE_URL` - Production PostgreSQL connection
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk public key
- `CLERK_SECRET_KEY` - Clerk secret key
- `OPENAI_API_KEY` - OpenAI API key

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## Support

For issues, questions, or suggestions, please reach out to the development team.

---

**Built with ❤️ using Next.js, AI, and modern web technologies**
