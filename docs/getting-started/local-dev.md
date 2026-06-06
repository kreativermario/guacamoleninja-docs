---
sidebar_position: 3
---

# Self-hosting

Everything you need to run guacamoleninja on your own infrastructure — locally for development or in production with Docker.

---

## Architecture

guacamoleninja is two independent services that share no database:

```
Browser
  │
  ▼
Cloudflare CDN
  │
  ▼
guacamoleninja-web  (Next.js 16, port 3000)
  │   └─── Auth DB (PostgreSQL) ── NextAuth sessions, OAuth accounts
  │
  │  HTTP  Bearer token
  ▼
guacamoleninja-bot API  (Node.js, port 3002)
  │   └─── Bot DB (PostgreSQL) ── guilds, config, welcome, usage, audit
  │
  ▼
Discord Gateway  (discord.js v14)
```

**Key points**

- The web app **never touches the bot database directly** — all bot state goes through the HTTP API.
- Each service has its own PostgreSQL database with its own migrations.
- The HTTP API uses a shared `BOT_API_SECRET` bearer token for authentication.
- Cloudflare sits in front of the web app in production. The bot API is internal-only.

---

## Local development

### Prerequisites

See [Requirements](/docs/getting-started/requirements) for versions.

### 1. Clone both repos

```bash
git clone https://github.com/kreativermario/guacamoleninja-web.git
git clone https://github.com/kreativermario/guacamoleninja-bot.git
```

### 2. Configure environment — web

```bash
cd guacamoleninja-web
cp .env.local.example .env.local   # create if it doesn't exist
```

`.env.local` for the web app:

```env
# Discord OAuth — from https://discord.com/developers/applications
DISCORD_CLIENT_ID=your_client_id
DISCORD_CLIENT_SECRET=your_client_secret

# NextAuth
AUTH_SECRET=any_long_random_string_32_chars_min
AUTH_URL=http://localhost:3000

# PostgreSQL (web auth DB — started by Docker Compose)
POSTGRES_USER=guacweb
POSTGRES_PASSWORD=guacweb
POSTGRES_DB=guacweb
DATABASE_URL=postgresql://guacweb:guacweb@localhost:5432/guacweb

# Bot API — must match BOT_API_SECRET in the bot .env
BOT_API_URL=http://localhost:3002
BOT_API_SECRET=any_long_random_string
```

### 3. Configure environment — bot

```bash
cd guacamoleninja-bot
cp .env.example .env
```

`.env` for the bot:

```env
# Discord bot — from https://discord.com/developers/applications
BOT_TOKEN=your_bot_token
CLIENT_ID=your_client_id

# Slash command registration target (dev only — set to your test server ID)
GUILD_ID=your_guild_id

# PostgreSQL (bot DB — started by Docker Compose)
POSTGRES_USER=guacbot
POSTGRES_PASSWORD=guacbot
POSTGRES_DB=guacbot
DATABASE_URL=postgresql://guacbot:guacbot@localhost:5432/guacbot

# HTTP API
BOT_API_SECRET=any_long_random_string   # must match web BOT_API_SECRET
BOT_API_PORT=3002

TIMEZONE=Europe/Lisbon
```

### 4. Start the web stack

```bash
cd guacamoleninja-web
docker compose -f docker/docker-compose.local.yml up
```

This starts:

| Service | Image | Port | Description |
|---|---|---|---|
| `postgres` | postgres:17-alpine | 5432 | Web auth database |
| `migrate` | built from repo | — | Runs `prisma migrate deploy`, exits when done |
| `web` | built from repo | 3000 | Next.js app |

The `web` service waits for `migrate` to complete successfully before starting.

### 5. Start the bot stack

In a second terminal:

```bash
cd guacamoleninja-bot
docker compose -f docker/docker-compose.local.yml up
```

This starts:

| Service | Image | Port | Description |
|---|---|---|---|
| `postgres` | postgres:17-alpine | 5432 | Bot database |
| `bot-migrate` | built from repo | — | Runs `prisma db push`, exits when done |
| `bot` | built from repo | — | Discord bot process (watch mode) |
| `api` | built from repo | 3002 | HTTP API consumed by the web app |

Both `bot` and `api` wait for `bot-migrate` to complete before starting.

### 6. Verify

```bash
# Bot API health
curl http://localhost:3002/health

# Expected
{"status":"ok","db":"ok","uptime":12.34}
```

Open **http://localhost:3000** to see the web app.

---

## Docker Compose — annotated

### Web (`docker/docker-compose.local.yml`)

```yaml
services:
  postgres:
    image: postgres:17-alpine
    env_file: ../.env.local        # reads POSTGRES_USER/PASSWORD/DB
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -d $$POSTGRES_DB -U $$POSTGRES_USER"]
      interval: 5s
      timeout: 5s
      retries: 5
      start_period: 10s

  migrate:
    build:
      context: ..         # build context is repo root
      target: migrator    # uses the migrator stage from docker/Dockerfile
    env_file: ../.env.local
    depends_on:
      postgres:
        condition: service_healthy   # waits for postgres to be ready

  web:
    build:
      context: ..         # full Next.js build
    env_file: ../.env.local
    ports:
      - "3000:3000"
    environment:
      BOT_API_URL: ${BOT_API_URL:-http://localhost:3002}
      BOT_API_SECRET: ${BOT_API_SECRET:-}
    depends_on:
      migrate:
        condition: service_completed_successfully
      postgres:
        condition: service_healthy

volumes:
  postgres_data:
```

### Bot (`docker/docker-compose.local.yml`)

```yaml
services:
  bot-migrate:
    build:
      context: ..
      target: api        # uses the api stage — runs db-migrate.js via CMD override
    command: ["dist/db-migrate.js"]
    env_file: ../.env
    depends_on:
      postgres:
        condition: service_healthy
    restart: "no"        # exits after migration completes

  bot:
    build:
      context: ..
      target: dev        # development stage — tsx watch mode
    env_file: ../.env
    command: node_modules/.bin/tsx src/start.ts
    depends_on:
      bot-migrate:
        condition: service_completed_successfully
      postgres:
        condition: service_healthy

  api:
    build:
      context: ..
      target: api
    env_file: ../.env
    ports:
      - "${BOT_API_PORT:-3002}:3002"
    depends_on:
      bot-migrate:
        condition: service_completed_successfully
      postgres:
        condition: service_healthy
    healthcheck:
      test: ["CMD", "node", "-e",
        "fetch('http://localhost:3002/health',{signal:AbortSignal.timeout(3000)}).then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"]
      interval: 30s
      timeout: 5s
      retries: 3
      start_period: 10s
    restart: unless-stopped

  postgres:
    image: postgres:17-alpine
    environment:
      POSTGRES_USER: ${POSTGRES_USER:-guacamoleninja}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_DB: ${POSTGRES_DB:-guacamoleninja}
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -d $POSTGRES_DB -U $POSTGRES_USER"]
      interval: 5s
      timeout: 5s
      retries: 5
      start_period: 10s

volumes:
  postgres_data:
```

---

## Dockerfile stages

Both repos use multi-stage builds. Understanding the stages helps when debugging or extending:

### Web (`docker/Dockerfile`)

| Stage | Base | Purpose |
|---|---|---|
| `base` | node:24 | Enables corepack (pnpm) |
| `deps` | base | Installs all dependencies |
| `builder` | base | Generates Prisma client, runs `pnpm build` |
| `migrator` | base | Runs `prisma migrate deploy` at container start |
| `runner` | distroless/nodejs24-debian13:nonroot | Production image — copies only built output |

### Bot (`docker/Dockerfile`)

| Stage | Base | Purpose |
|---|---|---|
| `base` | node:24-alpine | Enables corepack |
| `deps` | base | Installs all dependencies |
| `prod-deps` | base | Production-only deps + Prisma client generate |
| `dev` | base | Development stage with tsx watch |
| `builder` | base | Compiles TypeScript, generates Prisma client |
| `runner` | distroless/nodejs24-debian13:nonroot | Bot process |
| `api` | distroless/nodejs24-debian13:nonroot | HTTP API process |

Both production images use **distroless** — no shell, no package manager, runs as uid `65532` (nonroot). This minimises attack surface and image size.

---

## Production deployment

Production uses pre-built images from Harbor and is orchestrated via Portainer stacks. See the deploy workflow at `.github/workflows/deploy.yml` for the full pipeline.

The production compose (`docker/docker-compose.prod.yml`) uses image references instead of build contexts:

```yaml
services:
  web:
    image: ${WEB_IMAGE}          # e.g. registry.example.com/guacamoleninja/guacamoleninja-web:abc1234
    environment:
      NODE_ENV: production
      DATABASE_URL: postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@postgres:5432/${POSTGRES_DB}
      # ... other env vars injected by the deploy workflow from HCP Vault
```

Secrets are pulled from **HCP Vault** at deploy time — never stored in the repository.

---

## Discord Developer Portal setup

1. Go to [discord.com/developers/applications](https://discord.com/developers/applications) and create a new application.
2. Under **Bot**, copy the bot token → `BOT_TOKEN`.
3. Enable **Server Members Intent** (required for welcome messages to fire).
4. Under **OAuth2 → General**, copy Client ID → `CLIENT_ID` / `DISCORD_CLIENT_ID`.
5. Copy Client Secret → `DISCORD_CLIENT_SECRET` (web only).
6. Add redirect URI: `http://localhost:3000/api/auth/callback/discord` (dev) or your production URL.
