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
├── api/
│   ├── main.ts             # API entry point (separate process/image)
│   └── server.ts           # HTTP server, routing, auth, rate limiting
├── commands/               # Slash command definitions and handlers
├── db/
│   ├── client.ts           # Prisma singleton
│   └── guild.ts            # Guild and config database helpers
├── client.ts               # Discord.js client setup
├── db-migrate.ts           # Standalone Prisma db push (run once on deploy)
├── index.ts                # Bot entry point and event handlers
├── logger.ts               # Structured JSON logger
└── register-commands.ts    # Slash command registration
```

The bot and API run as **separate processes** in separate Docker images. The bot image handles Discord events; the API image serves HTTP requests from the web dashboard. Both share the same PostgreSQL database.

## Logging

All structured logs are written as JSON lines to stdout (info/warn/debug) or stderr (error):

```json
{"ts":"2025-01-01T00:00:00.000Z","level":"info","ctx":"cmd","msg":"executed","meta":{"command":"weather","userId":"123","guildId":"456","ms":42}}
```

Fields: `ts`, `level`, `ctx` (subsystem), `msg`, `meta` (optional key/value pairs).

## Making changes

- Create a branch: `git checkout -b feat/my-feature`
- Run in watch mode: `pnpm dev` (or use Docker Compose)
- Build: `pnpm build`
