# Yaboroo Imperium Party (in formation) — Public Holding Website

This repository contains the source code for the public holding website for the **Yaboroo Imperium Party (in formation)**.

## Project Purpose

The purpose of this single-page public holding website is to establish an official online presence for the Yaboroo Imperium Party (in formation) to convey key organizational information and allow interested members of the public to register their expression of interest.

> **Note**: The Party is currently *in formation*. This website does not collect payments, accept membership applications, or register voters.

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS (Custom Properties design system, no external utility frameworks)
- **Typography**: Editorial serif headers with clean sans-serif body typography
- **Containerization**: Multi-stage Docker image (Alpine Linux, non-root user execution, standalone output)

## Local Development

### Prerequisites

- Node.js 18.x or 20.x
- npm 9.x+

### Setup Instructions

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Production Build

To test the production build locally:

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Start the production server**:
   ```bash
   npm run start
   ```

## Docker Containerization

The application is configured for lightweight, production-ready multi-stage Docker deployment utilizing Next.js standalone output mode.

### Build Docker Image

```bash
docker build -t yaboroo-imperium-website:latest .
```

### Run Docker Container

```bash
docker run -d -p 3000:3000 --name yaboroo-website yaboroo-imperium-website:latest
```

Access the running application at `http://localhost:3000`.

## Environment Variables

When email route integration is enabled in future phases, environment variables should be configured via runtime environment files or container environment injection:

- `PORT` - Application HTTP port (default: `3000`)
- `PARTY_EMAIL_RECIPIENT` - Destination email address for expressions of interest (future route handler)

> **Security Warning**: Do NOT commit `.env` files containing secrets or API credentials to version control.

## Deployment Notes

- Next.js is configured with `output: 'standalone'` in `next.config.ts` for optimized Docker image packaging.
- The Docker runtime container executes under a non-root user (`nextjs`, UID 1001) for security hardening.
- No database or stateful storage container is required for this phase.
