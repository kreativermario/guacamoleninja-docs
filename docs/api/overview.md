---
sidebar_position: 1
---

# Overview

The bot exposes a small HTTP API used by the [web dashboard](https://app.guacamoleninja.com) to read guild status and manage per-server configuration. It runs as a separate process from the Discord bot, on its own Docker image and port.

## Base URL

| Environment | Base URL |
|---|---|
| Production | `https://api.guacamoleninja.com` |
| Local dev | `http://localhost:3002` |

## Authentication

All endpoints except [`GET /health`](./health) require a `Bearer` token in the `Authorization` header:

```
Authorization: Bearer <BOT_API_SECRET>
```

The secret must match the `BOT_API_SECRET` environment variable set on the API service. Requests with a missing or incorrect token receive a `401 Unauthorized` response.

## Rate limiting

Requests are rate-limited to **120 per minute per IP address** using an in-memory sliding window. Clients that exceed the limit receive `429 Too Many Requests` with a `Retry-After: 60` header.

## Response format

All responses are JSON. Successful responses use `2xx` status codes. Errors follow a consistent shape:

```json
{
  "error": "Human-readable message"
}
```

Every response includes an `X-Request-Id` header (UUID) for tracing.

## Status codes

| Code | Meaning |
|---|---|
| `200` | Success |
| `400` | Bad request — invalid or missing body fields |
| `401` | Unauthorized — missing or wrong `BOT_API_SECRET` |
| `404` | Not found — guild does not exist or bot has left |
| `429` | Rate limited |
| `500` | Internal server error |
| `503` | Service unavailable — database unreachable (health check only) |
