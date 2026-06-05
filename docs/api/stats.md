---
sidebar_position: 7
sidebar_label: Command Stats
---

# Command Stats

## <span class="method method-get">GET</span> `/guilds/:id/stats`

Returns command usage counts for a guild over the last 30 days, grouped by command name and sorted by usage descending.

### Path parameters

| Parameter | Description |
|---|---|
| `id` | Discord guild snowflake ID |

### Response

#### `200 OK`

```json
{
  "stats": {
    "period": "30d",
    "total": 47,
    "commands": [
      { "name": "weather", "count": 32 },
      { "name": "server",  "count": 10 },
      { "name": "uptime",  "count": 5  }
    ]
  }
}
```

| Field | Type | Description |
|---|---|---|
| `stats.period` | `string` | Time window — always `"30d"` |
| `stats.total` | `number` | Total command executions in the period |
| `stats.commands` | `object[]` | Per-command breakdown, sorted by `count` descending |
| `stats.commands[].name` | `string` | Command name (without `/`) |
| `stats.commands[].count` | `number` | Number of times this command was used |

Commands with zero uses in the period are not included in the response. If no commands were used, `commands` is an empty array and `total` is `0`.

### Example

```bash
curl https://api.guacamoleninja.com/guilds/1234910949220028456/stats \
  -H "Authorization: Bearer $BOT_API_SECRET"
```
