---
sidebar_position: 1
---

# Development Setup

## Fork and clone

1. Fork the repository on GitHub.
2. Clone your fork:
   ```bash
   git clone https://github.com/guacamoleninja/guacamoleninja-bot.git
   cd guacamoleninja-bot
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Copy `.env.example` to `.env` and fill in your values.
5. Start the local stack:
   ```bash
   docker compose -f docker-compose.local.yml up
   ```

## Project structure

```
src/
├── commands/       # Slash command definitions and handlers
├── db/             # Prisma client and database helpers
├── client.ts       # Discord.js client setup
├── index.ts        # Bot entry point and event handlers
├── register-commands.ts  # Slash command registration
└── start.ts        # Startup: db push → import index
```

## Making changes

- Create a branch: `git checkout -b feat/my-feature`
- Run in watch mode: `pnpm dev` (or use Docker Compose)
- Build: `pnpm build`
