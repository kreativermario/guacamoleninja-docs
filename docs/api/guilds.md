---
sidebar_position: 3
sidebar_label: Guilds
---

# Guilds

## <span class="method method-get">GET</span> `/guilds`

Returns the IDs of all guilds where the bot is currently active (has not left).

### Response

#### `200 OK`

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
| `guilds` | `object[]` | List of active guild objects |
| `guilds[].id` | `string` | Discord guild snowflake ID |

### Example

```bash
curl https://api.guacamoleninja.com/guilds \
  -H "Authorization: Bearer $BOT_API_SECRET"
```

---

## <span class="method method-get">GET</span> `/guilds/:id`

Returns full details, configuration, and welcome config for a single guild.

### Path parameters

| Parameter | Description |
|---|---|
| `id` | Discord guild snowflake ID |

### Response

#### `200 OK`

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
    },
    "welcomeConfig": {
      "guildId": "1234910949220028456",
      "enabled": true,
      "channelId": "8765432109876543210",
      "message": "Welcome {user} to **{server}**! You are member #{memberCount}.",
      "updatedAt": "2025-06-01T12:00:00.000Z"
    }
  }
}
```

| Field | Type | Description |
|---|---|---|
| `guild.id` | `string` | Discord guild snowflake ID |
| `guild.name` | `string` | Guild display name |
| `guild.iconHash` | `string \| null` | Discord icon hash. Construct the full URL as `https://cdn.discordapp.com/icons/{id}/{hash}.png` |
| `guild.joinedAt` | `string` | ISO 8601 timestamp when the bot joined |
| `guild.leftAt` | `null` | Always `null` for active guilds — guilds the bot has left return `404` |
| `guild.config` | `object \| null` | Server configuration, or `null` if defaults have never been saved |
| `guild.config.prefix` | `string` | Command prefix (default `!`) |
| `guild.config.timezone` | `string` | IANA timezone name (default `UTC`) |
| `guild.config.disabledCommands` | `string[]` | Command names disabled on this server |
| `guild.config.updatedAt` | `string` | ISO 8601 timestamp of last config update |
| `guild.welcomeConfig` | `object \| null` | Welcome message configuration, or `null` if never configured |
| `guild.welcomeConfig.enabled` | `boolean` | Whether welcome messages are active |
| `guild.welcomeConfig.channelId` | `string` | Channel snowflake ID to post messages in |
| `guild.welcomeConfig.message` | `string` | Message template (supports `{user}`, `{username}`, `{server}`, `{memberCount}`) |
| `guild.welcomeConfig.updatedAt` | `string` | ISO 8601 timestamp of last welcome config update |

#### `404 Not Found`

Returned when the guild ID is unknown or the bot has already left.

```json
{ "error": "Guild not found" }
```

### Example

```bash
curl https://api.guacamoleninja.com/guilds/1234910949220028456 \
  -H "Authorization: Bearer $BOT_API_SECRET"
```
