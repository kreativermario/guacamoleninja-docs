---
sidebar_position: 2
---

# Conventions

## Commit messages

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): subject
```

Common types: `feat`, `fix`, `docs`, `refactor`, `chore`, `ci`

Examples:
```
feat(commands): add /ping command
fix(db): handle missing guild config gracefully
docs: update local dev instructions
```

## Code style

TypeScript with strict mode. No inline comments unless the reason is non-obvious. No `any` without justification.

## Pull requests

- Keep PRs focused — one feature or fix per PR.
- Fill in the PR template.
- Be open to feedback — we review to improve, not to criticise.
