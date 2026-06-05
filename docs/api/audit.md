---
sidebar_position: 8
sidebar_label: Audit Log
---

# Audit Log

## <span class="method method-get">GET</span> `/guilds/:id/audit`

Returns the last 50 configuration changes made to a guild via the dashboard, in reverse chronological order.

Entries are written automatically whenever a `PATCH` endpoint is called with a valid `actorId`.

### Path parameters

| Parameter | Description |
|---|---|
| `id` | Discord guild snowflake ID |

### Response

#### `200 OK`

```json
{
  "logs": [
    {
      "id": "clxyz1234567890",
      "guildId": "1234910949220028456",
      "actorId": "111222333444555666",
      "actorName": "Mario",
      "action": "config.update",
      "changes": {
        "timezone": ["UTC", "Europe/Lisbon"]
      },
      "createdAt": "2025-06-05T17:00:00.000Z"
    }
  ]
}
```

| Field | Type | Description |
|---|---|---|
| `logs[].id` | `string` | Unique log entry ID (CUID) |
| `logs[].guildId` | `string` | Discord guild snowflake ID |
| `logs[].actorId` | `string` | Discord user ID of the person who made the change |
| `logs[].actorName` | `string` | Display name at the time of the change |
| `logs[].action` | `string` | Action type — see table below |
| `logs[].changes` | `object` | Map of changed fields. Each key maps to `[previousValue, newValue]` |
| `logs[].createdAt` | `string` | ISO 8601 timestamp |

### Action types

| Action | Triggered by |
|---|---|
| `config.update` | `PATCH /guilds/:id/config` |
| `welcome.update` | `PATCH /guilds/:id/welcome` |

### Example

```bash
curl https://api.guacamoleninja.com/guilds/1234910949220028456/audit \
  -H "Authorization: Bearer $BOT_API_SECRET"
```
