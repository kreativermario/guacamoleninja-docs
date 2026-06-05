---
sidebar_position: 2
---

# GET /health

Returns the health status of the API service and its database connection. **No authentication required** — this endpoint is used by Docker and Portainer healthchecks.

## Request

```
GET /health
```

No headers or body required.

## Response

**Healthy — `200 OK`**

```json
{
  "status": "ok",
  "uptime": 3600
}
```

**Unhealthy (database unreachable) — `503 Service Unavailable`**

```json
{
  "status": "error",
  "uptime": 3600
}
```

| Field | Type | Description |
|---|---|---|
| `status` | `"ok"` \| `"error"` | Whether the service and database are healthy |
| `uptime` | number | Process uptime in seconds |
