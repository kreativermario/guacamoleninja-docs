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

Auto-deploys on push to `main` via Cloudflare Pages GitHub integration — no `wrangler.toml` needed.

CF Pages project settings:
- Build command: `pnpm run build`
- Output directory: `build`
- `NODE_VERSION=24` env var required

`CLOUDFLARE_API_TOKEN` env var must have **Cloudflare Pages: Edit** permission scope (account role alone is not enough).

## Sidebar Structure

Getting Started → Commands → Bot API (Overview → Health → Guilds → Guild Config → Welcome Config → Channels → Command Stats → Audit Log) → Contributing

## Design

Discord-dark theme matching the web app. All overrides live in `src/css/custom.css` (overrides `--ifm-*` variables):
- Inter for headings, Open Sans for body
- Dark default, theme-switchable

## Gotchas

**Method badges — never use raw `<h2>` tags.** Breaks TOC and badge rendering.
Use this pattern instead:
```md
## <span class="method method-get">GET</span> `/path`
```
Badge classes defined in `src/css/custom.css`: `.method-get`, `.method-patch`.

- `onBrokenLinks: 'throw'` — broken links fail the build; fix before pushing.
- Portainer/Docker deployment is preserved in `docker/` and `.github/workflows/deploy.yml` but disabled (push trigger commented out).
