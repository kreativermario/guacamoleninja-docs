# guacamoleninja-docs

Docusaurus 3.10.1 documentation site for GuacamoleNinja, deployed to Cloudflare Pages (free tier, fully static).

## Commands

```bash
pnpm run start    # dev server (hot reload)
pnpm run build    # production build → build/
pnpm run serve    # serve built output locally
pnpm run clear    # clear Docusaurus cache (use when builds act weird)
pnpm typecheck    # type-check without emitting
```

## Deployment

Deployed as a **CF Worker with static assets** via Cloudflare Workers Builds (not CF Pages).

`wrangler.toml` configures the worker name and points `[assets]` at `./build`.

CF Workers Builds dashboard settings:
- Build command: `pnpm run build`
- Deploy command: `npx wrangler deploy`
- `NODE_VERSION=24` env var required

`CLOUDFLARE_API_TOKEN` env var must have **Workers: Edit** permission scope — NOT Cloudflare Pages: Edit (different product).

## Sidebar Structure

Getting Started → Commands → Bot API (Overview → Health → Guilds → Guild Config → Welcome Config → Channels → Command Stats → Audit Log) → Contributing

## Design

Discord-dark theme mirroring the web app. All overrides live in `src/css/custom.css` via `--ifm-*` variable overrides.

**Palette:**
- Background: `--bg: #1e2030`, `--bg-feat: #191c2e`, `--bg-card: #252839`
- Green accent: `--primary: #78a86a`, `--primary-dk: #4a7c59`
- Discord blue (CTAs): `--discord: #5865f2`

**Typography:** Inter for headings, Open Sans for body

Dark default, theme-switchable. Full spec: `docs/design-guidelines.md` in the web repo (`guacamoleninja-web`).

## Gotchas

**Method badges — never use raw `<h2>` tags.** Breaks TOC and badge rendering.
Use this pattern instead:
```md
## <span class="method method-get">GET</span> `/path`
```
Badge classes defined in `src/css/custom.css`: `.method-get`, `.method-patch`.

- `onBrokenLinks: 'throw'` — broken links fail the build; fix before pushing.
- Portainer/Docker deployment is preserved in `docker/` and `.github/workflows/deploy.yml` but disabled (push trigger commented out).
