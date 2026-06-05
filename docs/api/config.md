---
sidebar_position: 4
---

# PATCH /guilds/:id/config

Updates one or more configuration fields for a guild. Only fields included in the request body are changed — omitted fields keep their current values.

The guild must be known and active (bot has not left). Returns `404` if the guild is not found.

## Request

```
PATCH /guilds/:id/config
Authorization: Bearer <BOT_API_SECRET>
Content-Type: application/json
```

| Parameter | Description |
|---|---|
| `id` | Discord guild snowflake ID |

### Body

All fields are optional. At least one must be valid to produce an update.

```json
{
  "prefix": "!",
  "timezone": "Europe/Lisbon",
  "disabledCommands": ["weather", "uptime"]
}
```

| Field | Type | Constraints | Description |
|---|---|---|---|
| `prefix` | string | 1–5 characters | Command prefix |
| `timezone` | string | 1–64 characters | IANA timezone name |
| `disabledCommands` | string[] | Array of strings | Full list of disabled command names — replaces the existing list |

## Response — `200 OK`

Returns the full updated config object.

```json
{
  "config": {
    "guildId": "1234910949220028456",
    "prefix": "!",
    "timezone": "Europe/Lisbon",
    "disabledCommands": ["weather", "uptime"],
    "updatedAt": "2025-06-05T17:00:00.000Z"
  }
}
```

## Response — `404 Not Found`

```json
{ "error": "Guild not found" }
```

## Notes

- `disabledCommands` is a **replace** operation, not an append. Send the full desired list each time.
- The bot enforces disabled commands at interaction time — changes take effect immediately on the next command use with no restart required.
- Sending an unrecognised command name in `disabledCommands` is accepted (no validation against the known command list).
