---
sidebar_position: 3
---

# Guilds

## GET /guilds

Returns the list of guilds where the bot is currently active (i.e. has not left).

### Request

```
GET /guilds
Authorization: Bearer <BOT_API_SECRET>
```

### Response — `200 OK`

```json
{
  "guilds": [
    { "id": "1234910949220028456" },
    { "id": "9876543210987654321" }
  ]
}
```

| Field | Type | Description |
|---|---|---|
| `guilds` | array | Guild objects for servers the bot is active in |
| `guilds[].id` | string | Discord guild snowflake ID |

---

## GET /guilds/:id

Returns full details and configuration for a single guild.

### Request

```
GET /guilds/:id
Authorization: Bearer <BOT_API_SECRET>
```

| Parameter | Description |
|---|---|
| `id` | Discord guild snowflake ID |

### Response — `200 OK`

```json
{
  "guild": {
    "id": "1234910949220028456",
    "name": "My Server",
    "iconHash": "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4",
    "joinedAt": "2025-01-01T00:00:00.000Z",
    "leftAt": null,
    "config": {
      "guildId": "1234910949220028456",
      "prefix": "!",
      "timezone": "Europe/Lisbon",
      "disabledCommands": ["weather"],
      "updatedAt": "2025-06-01T12:00:00.000Z"
    }
  }
}
```

| Field | Type | Description |
|---|---|---|
| `guild.id` | string | Discord guild snowflake ID |
| `guild.name` | string | Guild display name |
| `guild.iconHash` | string \| null | Discord icon hash — construct URL as `https://cdn.discordapp.com/icons/{id}/{hash}.png` |
| `guild.joinedAt` | string | ISO 8601 timestamp when the bot joined |
| `guild.leftAt` | null | Always `null` — guilds where the bot has left return `404` |
| `guild.config` | object \| null | Configuration, or `null` if not yet set (defaults apply) |
| `guild.config.prefix` | string | Command prefix, default `!` |
| `guild.config.timezone` | string | IANA timezone name, default `UTC` |
| `guild.config.disabledCommands` | string[] | Command names that are disabled on this server |
| `guild.config.updatedAt` | string | ISO 8601 timestamp of last config change |

### Response — `404 Not Found`

Returned when the bot is not in the guild or the guild ID is unknown.

```json
{ "error": "Guild not found" }
```
