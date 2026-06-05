---
sidebar_position: 6
sidebar_label: Channels
---

# Channels

## <span class="method method-get">GET</span> `/guilds/:id/channels`

Returns all text and announcement channels for a guild, sorted by position. This call is proxied through the bot to Discord — the bot must be in the guild and `BOT_TOKEN` must be set on the API service.

Used by the web dashboard to populate the channel picker in the Welcome Config form.

### Path parameters

| Parameter | Description |
|---|---|
| `id` | Discord guild snowflake ID |

### Response

#### `200 OK`

```json
{
  "channels": [
    { "id": "8765432109876543210", "name": "general" },
    { "id": "1122334455667788990", "name": "announcements" }
  ]
}
```

| Field | Type | Description |
|---|---|---|
| `channels` | `object[]` | Text and announcement channels, sorted by Discord position |
| `channels[].id` | `string` | Channel snowflake ID |
| `channels[].name` | `string` | Channel name (without `#`) |

#### `404 Not Found`

```json
{ "error": "Guild not found" }
```

#### `502 Bad Gateway`

Returned when the upstream Discord API request fails.

```json
{ "error": "Could not fetch channels" }
```

#### `503 Service Unavailable`

Returned when `BOT_TOKEN` is not configured on the API service.

```json
{ "error": "Bot token not configured" }
```

### Example

```bash
curl https://api.guacamoleninja.com/guilds/1234910949220028456/channels \
  -H "Authorization: Bearer $BOT_API_SECRET"
```
