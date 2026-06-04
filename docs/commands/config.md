---
sidebar_position: 3
---

# /config

View or update per-server configuration. Only members with the **Manage Server** permission can use `/config set`.

## Subcommands

### /config view

Displays the current server configuration.

```
/config view
```

**Response:** An embed showing the current `prefix` and `timezone`.

### /config set

Updates one or both configuration values.

```
/config set [prefix] [timezone]
```

| Option | Type | Description |
|---|---|---|
| `prefix` | string | Command prefix, 1–5 characters |
| `timezone` | string | IANA timezone name, e.g. `Europe/Lisbon` |

At least one option is required. Requires **Manage Server** permission.
