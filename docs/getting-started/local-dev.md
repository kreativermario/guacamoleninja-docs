---
sidebar_position: 3
---

# Local Development

## 1. Clone and install

```bash
git clone https://github.com/guacamoleninja/guacamoleninja-bot.git
cd guacamoleninja-bot
pnpm install
```

## 2. Configure environment

```bash
cp .env.example .env
```

Open `.env` and fill in the required values:

| Variable | Description |
|---|---|
| `BOT_TOKEN` | Your Discord bot token |
| `CLIENT_ID` | Your Discord application client ID |
| `GUILD_ID` | Dev guild ID for local slash command registration |
| `DATABASE_URL` | PostgreSQL connection string (set automatically when using Docker) |
| `POSTGRES_USER` | Database username |
| `POSTGRES_PASSWORD` | Database password |
| `POSTGRES_DB` | Database name |
| `BOT_API_SECRET` | Shared secret for the HTTP API (any long random string) |
| `BOT_API_PORT` | Port for the HTTP API — defaults to `3002` |
| `TIMEZONE` | IANA timezone, e.g. `Europe/Lisbon` |

## 3. Start

```bash
docker compose -f docker-compose.local.yml up
```

This starts four services:

| Service | Description |
|---|---|
| `postgres` | PostgreSQL 17 database |
| `bot-migrate` | Runs `prisma db push` once, then exits |
| `bot` | The Discord bot process |
| `api` | HTTP API on port `3002` (used by the web dashboard) |

The bot and API both wait for the migration service to complete before starting.

## HTTP API

The API exposes three endpoints, all requiring a `Bearer` token matching `BOT_API_SECRET`:

| Method | Path | Description |
|---|---|---|
| `GET` | `/health` | Health check — no auth required, returns `{"status":"ok"}` |
| `GET` | `/guilds` | List all guilds the bot is currently active in |
| `GET` | `/guilds/:id` | Get guild details and configuration |
| `PATCH` | `/guilds/:id/config` | Update guild configuration |

The web dashboard calls this API to display bot status and manage per-server settings.
