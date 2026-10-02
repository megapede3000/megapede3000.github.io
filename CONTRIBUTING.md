# Contributing

This project is built by **4 developers, each working with an AI agent**. These rules keep 8 contributors from stepping on each other.

## Workstreams and ownership

Each workstream owns its folders. You can read anything, but changes outside your area need a heads-up to that area's owner (and a review on shared files).

| # | Workstream | Owns | Next up |
| --- | --- | --- | --- |
| 1 | **Directory** | `src/app/directory/` (profile pages only; `/directory` redirects to `/departments`), `src/lib/directory.ts`, `data/employees.json` | Org chart view, photo support, CSV/HR import |
| 2 | **Departments** | `src/app/departments/`, `src/lib/departments.ts`, `data/departments.json`, `data/department-areas.json` | Department resources/links, announcements |
| 3 | **Suggestion Box** | `src/app/suggestions/`, `src/app/api/suggestions/`, `src/lib/suggestions.ts` | Comments, admin dashboard, notifications |
| 4 | **Platform / Shell** | `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/Spotlight.tsx`, `src/app/home.module.css`, `src/app/globals.css`, `src/components/`, config, auth (future) | SSO/auth, real DB, CI, test setup |
| 5 | **Cheers for Peers** | `src/app/cheers/`, `src/app/api/cheers/`, `src/lib/cheers.ts`, `data/cheers.seed.json` | Comments, GIF/photo attachments, birthdays, real signed-in user |

Fill in names here once assigned: 1 = ___, 2 = ___, 3 = ___, 4 = ___, 5 = ___

### Shared contracts (review from the owner plus one other)

- `src/types/index.ts` is the domain types every feature depends on.
- `src/app/globals.css` holds the design tokens and shared classes.
- `src/components/` holds shared UI.
- `package.json` covers dependencies. Don't add a library without telling the team.

## Branching and PRs

- Branch from `main`: `<workstream>/<short-desc>`, e.g. `suggestions/add-comments`.
- Keep PRs small and limited to one workstream where possible.
- Before you open a PR, run `npm run typecheck && npm run build`. Both must pass.
- PR description: what changed, a screenshot for UI changes, and any shared-file changes called out at the top.
- When agent-generated code goes into a PR, the human owner has reviewed it and is accountable for it.

## Adding a new section (e.g. Benefits, Events)

1. Create `src/app/<section>/page.tsx`.
2. Put data access in `src/lib/<section>.ts`, not in page components.
3. Add types to `src/types/index.ts` (shared-contract review).
4. Add the link to `LINKS` in `src/components/Nav.tsx`.
5. Add a row to the ownership table above.
