---
sidebar_position: 4
sidebar_label: Guild Config
---

# Guild Config

## <span class="method method-patch">PATCH</span> `/guilds/:id/config`

Updates one or more configuration fields for a guild. Only fields included in the request body are changed — omitted fields keep their current values.

Returns `404` if the guild is unknown or the bot has left.

### Path parameters

| Parameter | Description |
|---|---|
| `id` | Discord guild snowflake ID |

### Request body

All fields are optional. Include at least one.

```json
{
  "prefix": "!",
  "timezone": "Europe/Lisbon",
  "disabledCommands": ["weather", "uptime"],
  "actorId": "123456789012345678",
  "actorName": "Mario"
}
```

| Field | Type | Constraints | Description |
|---|---|---|---|
| `prefix` | `string` | 1–5 characters | Command prefix |
| `timezone` | `string` | 1–64 characters | IANA timezone name (e.g. `Europe/Lisbon`) |
| `disabledCommands` | `string[]` | Array of strings | **Replaces** the full list of disabled commands |
| `actorId` | `string` | Optional | Discord user ID of the person making the change — used for audit log |
| `actorName` | `string` | Optional | Display name of the actor — used for audit log |

:::warning[`disabledCommands` is a replace operation]
Sending `["weather"]` disables weather and enables everything else. Send the **complete desired list** on every update — it is not appended to.
:::

### Response

#### `200 OK`

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

| Field | Type | Description |
|---|---|---|
| `config.guildId` | `string` | Discord guild snowflake ID |
| `config.prefix` | `string` | Active command prefix |
| `config.timezone` | `string` | Active IANA timezone |
| `config.disabledCommands` | `string[]` | Currently disabled command names |
| `config.updatedAt` | `string` | ISO 8601 timestamp of this update |

#### `400 Bad Request`

Returned if the body is malformed or exceeds size limits.

```json
{ "error": "Invalid JSON" }
```

#### `404 Not Found`

```json
{ "error": "Guild not found" }
```

### Example

```bash
curl -X PATCH https://api.guacamoleninja.com/guilds/1234910949220028456/config \
  -H "Authorization: Bearer $BOT_API_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"timezone": "Europe/Lisbon", "actorId": "123456789", "actorName": "Mario"}'
```

### Notes

- Config changes take effect on the next bot interaction — no restart required.
- Unrecognised command names in `disabledCommands` are accepted without error.
- If `actorId` is provided, a record is written to the [Audit Log](./audit).
