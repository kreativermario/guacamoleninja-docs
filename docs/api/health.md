---
sidebar_position: 2
sidebar_label: Health Check
---

# Health Check

## <span class="method method-get">GET</span> `/health`

Returns the health status of the API service and its database connection.

:::info[No authentication required]
This endpoint is intentionally unauthenticated — it is used by Docker and Portainer healthchecks.
:::

### Response

#### `200 OK` — healthy

```json
{
  "status": "ok",
  "uptime": 3600
}
```

#### `503 Service Unavailable` — database unreachable

```json
{
  "status": "error",
  "uptime": 3600
}
```

| Field | Type | Description |
|---|---|---|
| `status` | `"ok"` \| `"error"` | Whether the service and database are reachable |
| `uptime` | `number` | Process uptime in seconds |

### Example

```bash
curl https://api.guacamoleninja.com/health
```
