---
sidebar_position: 3
---

# /config

View or update per-server configuration. Subcommands that modify settings require the **Manage Server** permission.

## /config view

Displays the current server configuration.

```
/config view
```

**Response:** An embed showing the current `prefix` and `timezone`.

## /config set

Updates one or both configuration values.

```
/config set [prefix] [timezone]
```

| Option | Type | Description |
|---|---|---|
| `prefix` | string | Command prefix, 1–5 characters |
| `timezone` | string | IANA timezone name, e.g. `Europe/Lisbon` |

At least one option is required. Requires **Manage Server** permission.

## /config commands list

Shows all commands and whether they are currently enabled or disabled on this server.

```
/config commands list
```

**Response:** An embed with a green 🟢 or red 🔴 indicator next to each command name. `/config` itself is always enabled and cannot be toggled.

## /config commands toggle

Enables or disables a command for this server.

```
/config commands toggle <command>
```

| Option | Type | Description |
|---|---|---|
| `command` | choice | `weather`, `server`, or `uptime` |

Requires **Manage Server** permission. Disabled commands return an ephemeral error to anyone who tries to use them. `/config` cannot be disabled.
