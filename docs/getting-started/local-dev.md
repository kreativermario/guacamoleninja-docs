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
| `DATABASE_URL` | PostgreSQL connection string (set automatically when using Docker) |
| `POSTGRES_USER` | Database username |
| `POSTGRES_PASSWORD` | Database password |
| `POSTGRES_DB` | Database name |
| `TIMEZONE` | IANA timezone, e.g. `Europe/Lisbon` |

## 3. Start

```bash
docker compose -f docker-compose.local.yml up
```

This starts the bot and a PostgreSQL container. The bot runs the Prisma schema push on startup and registers slash commands automatically.
