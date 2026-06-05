---
sidebar_position: 1
---

# Introduction

guacamoleninja-bot is a Discord utility bot for small communities, built with [discord.js v14](https://discord.js.org/) and TypeScript on Node.js 24.

## Commands

| Command | Description |
|---------|-------------|
| `/weather <city>` | Current conditions for any city |
| `/server` | Server member count, creation date, and ID |
| `/config view` | Show current server configuration |
| `/config set` | Update server timezone or prefix (requires Manage Server) |
| `/config commands list` | Show which commands are enabled or disabled |
| `/config commands toggle` | Enable or disable a command (requires Manage Server) |
| `/uptime` | How long the bot has been running |

## Add to your server

Generate an invite link from the [Discord Developer Portal](https://discord.com/developers/applications) with the `bot` and `applications.commands` scopes.

## Self-hosting

The bot is designed to be self-hosted. See [Requirements](./requirements) and [Local Dev](./local-dev) to run your own instance.
