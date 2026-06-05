---
sidebar_position: 1
sidebar_label: Overview
---

# Bot API

The bot exposes an HTTP API used by the [web dashboard](https://app.guacamoleninja.com) to read guild status and manage per-server configuration. It runs as a separate Docker image from the Discord bot process.

## Base URL

| Environment | Base URL |
|---|---|
| Production | `https://api.guacamoleninja.com` |
| Local dev | `http://localhost:3002` |

## Authentication

All endpoints except [`GET /health`](./health) require a `Bearer` token:

```http
Authorization: Bearer <BOT_API_SECRET>
```

The value must match the `BOT_API_SECRET` environment variable on the API service. Missing or incorrect tokens return `401 Unauthorized`.

## Rate limiting

Requests are limited to **120 per minute per IP** using an in-memory sliding window. Clients that exceed the limit receive `429 Too Many Requests` with a `Retry-After: 60` header.

## Response format

All responses are JSON. Errors always follow this shape:

```json
{
  "error": "Human-readable message"
}
```

Every response includes an `X-Request-Id` header (UUID v4) that can be used for log correlation.

## Status codes

| Code | Meaning |
|---|---|
| `200` | OK |
| `400` | Bad request — invalid or missing body fields |
| `401` | Unauthorized — missing or wrong `BOT_API_SECRET` |
| `404` | Not found — guild does not exist or bot has left |
| `429` | Rate limited — slow down and retry after 60 s |
| `500` | Internal server error |
| `502` | Bad gateway — upstream Discord API error |
| `503` | Service unavailable — database unreachable |

## Endpoints

| Method | Path | Auth | Description |
|---|---|---|---|
| `GET` | [`/health`](./health) | No | Service health and uptime |
| `GET` | [`/guilds`](./guilds) | Yes | List active guilds |
| `GET` | [`/guilds/:id`](./guilds) | Yes | Get guild details and config |
| `PATCH` | [`/guilds/:id/config`](./config) | Yes | Update server configuration |
| `GET` | [`/guilds/:id/welcome`](./welcome) | Yes | Get welcome message config |
| `PATCH` | [`/guilds/:id/welcome`](./welcome) | Yes | Update welcome message config |
| `GET` | [`/guilds/:id/channels`](./channels) | Yes | List text channels (via Discord) |
| `GET` | [`/guilds/:id/stats`](./stats) | Yes | 30-day command usage stats |
| `GET` | [`/guilds/:id/audit`](./audit) | Yes | Last 50 audit log entries |
