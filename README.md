# guacamoleninja-docs

Documentation site for [Guacamole Ninja Bot](https://github.com/kreativermario/guacamoleninja-bot), built with [Docusaurus](https://docusaurus.io/) and deployed to [docs.guacamoleninja.com](https://docs.guacamoleninja.com).

## Prerequisites

- [Node.js](https://nodejs.org/) ≥ 20
- [pnpm](https://pnpm.io/) (version pinned in `package.json`)
- Or [Docker](https://docs.docker.com/get-docker/) for the containerised workflow

## Local Development

### With pnpm

```bash
pnpm install
pnpm start
```

Opens `http://localhost:3000` with hot-reload — most changes are reflected live without restarting.

### With Docker (recommended for testing CSS/mobile)

```bash
docker compose -f docker/docker-compose.dev.yml up
```

Opens at `http://localhost:3000`. The container mounts the repo as a volume so edits to any source file trigger a live reload inside the container. Stop with `Ctrl+C`.

## Build

```bash
pnpm build
```

Generates the static site into `build/`. Preview it locally with:

```bash
pnpm serve
```

## Production Docker image

```bash
docker build -f docker/Dockerfile -t guacamoleninja-docs .
docker run -p 8080:8080 guacamoleninja-docs
```

The production image builds the static site and serves it via nginx on port 8080.

## Project structure

```
docs/          Markdown content (getting-started, commands, api, contributing)
src/           Custom React pages and CSS
static/        Static assets (images, favicon)
sidebars.ts    Sidebar navigation config
docusaurus.config.ts  Site config (navbar, footer, theme)
docker/        Dockerfiles and compose files
```

## Deployment

The site deploys automatically to Cloudflare Pages on every push to `main`.
