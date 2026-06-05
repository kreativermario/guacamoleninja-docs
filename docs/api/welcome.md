---
sidebar_position: 5
sidebar_label: Welcome Config
---

# Welcome Config

Manage the welcome message the bot sends when a new member joins.

:::note[Privileged intent required]
Welcome messages require the **Server Members Intent** to be enabled in the [Discord Developer Portal](https://discord.com/developers/applications) under **Bot → Privileged Gateway Intents**.
:::

---

<h2 id="get-welcome-config"><span class="method method-get">GET</span> <code>/guilds/:id/welcome</code></h2>

Returns the current welcome configuration for a guild.

### Path parameters

| Parameter | Description |
|---|---|
| `id` | Discord guild snowflake ID |

### Response

#### `200 OK`

```json
{
  "welcomeConfig": {
    "guildId": "1234910949220028456",
    "enabled": true,
    "channelId": "8765432109876543210",
    "message": "Welcome {user} to **{server}**! You are member #{memberCount}.",
    "updatedAt": "2025-06-01T12:00:00.000Z"
  }
}
```

`welcomeConfig` is `null` if the guild has never been configured.

| Field | Type | Description |
|---|---|---|
| `welcomeConfig.enabled` | `boolean` | Whether welcome messages are active |
| `welcomeConfig.channelId` | `string` | Channel snowflake ID where messages are sent |
| `welcomeConfig.message` | `string` | Message template |
| `welcomeConfig.updatedAt` | `string` | ISO 8601 timestamp of last update |

### Example

```bash
curl https://api.guacamoleninja.com/guilds/1234910949220028456/welcome \
  -H "Authorization: Bearer $BOT_API_SECRET"
```

---

<h2 id="update-welcome-config"><span class="method method-patch">PATCH</span> <code>/guilds/:id/welcome</code></h2>

Updates welcome message configuration. Only fields included in the body are changed.

Returns `404` if the guild is unknown or the bot has left.

### Path parameters

| Parameter | Description |
|---|---|
| `id` | Discord guild snowflake ID |

### Request body

All fields are optional. Include at least one.

```json
{
  "enabled": true,
  "channelId": "8765432109876543210",
  "message": "Hey {user}, welcome to **{server}**! 🎉",
  "actorId": "123456789012345678",
  "actorName": "Mario"
}
```

| Field | Type | Constraints | Description |
|---|---|---|---|
| `enabled` | `boolean` | — | Enable or disable welcome messages |
| `channelId` | `string` | Max 100 chars, numeric or empty string | Discord channel snowflake ID. Pass `""` to clear |
| `message` | `string` | 1–500 characters | Message template |
| `actorId` | `string` | Optional | Discord user ID — used for audit log |
| `actorName` | `string` | Optional | Display name — used for audit log |

### Message template variables

| Variable | Replaced with |
|---|---|
| `{user}` | Discord mention, e.g. `<@123456789>` |
| `{username}` | Discord username without discriminator |
| `{server}` | Guild display name |
| `{memberCount}` | Total member count after the join |

### Response

#### `200 OK`

```json
{
  "welcomeConfig": {
    "guildId": "1234910949220028456",
    "enabled": true,
    "channelId": "8765432109876543210",
    "message": "Hey {user}, welcome to **{server}**! 🎉",
    "updatedAt": "2025-06-05T18:00:00.000Z"
  }
}
```

#### `400 Bad Request`

```json
{ "error": "message must be 1-500 chars" }
```

#### `404 Not Found`

```json
{ "error": "Guild not found" }
```

### Example

```bash
curl -X PATCH https://api.guacamoleninja.com/guilds/1234910949220028456/welcome \
  -H "Authorization: Bearer $BOT_API_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"enabled": true, "channelId": "8765432109876543210", "message": "Welcome {user}!"}'
```
