---
sidebar_position: 2
---

# Requirements

## Runtime

| Dependency | Version | Notes |
|---|---|---|
| Node.js | 24 LTS | Both web and bot |
| pnpm | 11+ | `npm install -g pnpm` |
| Docker | 24+ | Docker Desktop or Engine |
| Docker Compose | v2 (plugin) | Bundled with Docker Desktop |
| PostgreSQL | 17 | Managed by Docker Compose locally |

## Discord

- A **Discord application** with a bot token — [create one](https://discord.com/developers/applications)
- **Server Members Intent** enabled under Bot → Privileged Gateway Intents (required for welcome messages)
- A redirect URI registered under OAuth2 → General:
  - Dev: `http://localhost:3000/api/auth/callback/discord`
  - Prod: `https://your-domain/api/auth/callback/discord`

## Web only

- A PostgreSQL database for NextAuth sessions (started automatically via Docker Compose locally)
- `AUTH_SECRET` — any 32-character random string (`openssl rand -base64 32`)

## Bot only

- A PostgreSQL database for guild/config/welcome/audit data (separate from the web database)
- `BOT_API_SECRET` — shared bearer token between web and bot API (any long random string)

---

Continue to [Self-hosting](/docs/getting-started/local-dev) for setup instructions.
