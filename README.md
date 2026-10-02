# Employee Hub

A revamp of the internal Employee website, built with **Next.js 16 (App Router) + TypeScript**.
Phase 1 covers two sections:

- **Workplace Directory**: searchable employee list, profile pages (contact links, manager, direct reports), and department pages (team contacts, responsibilities, members).
- **Suggestion Box**: submit ideas (anonymously or by name), route them to a department, upvote, filter and sort, and change status in a moderator view.

All data is fictional sample data.

## Run it locally

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev          # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` then `npm start` | Production build, served the way a demo should be |
| `npm run typecheck` | TypeScript check, no emit |
| `npm run reset-data` | Restores Suggestion Box data to the seed set (run before a demo) |

## Pages and routes

| Route | Description |
| --- | --- |
| `/` | Home: counts and the latest suggestions |
| `/directory` | Search and filter employees by department and location |
| `/directory/[id]` | Employee profile |
| `/departments` | All departments |
| `/departments/[slug]` | Department details, contacts, and members |
| `/suggestions` | Suggestion Box (supports `?department=<slug>`) |
| `GET/POST /api/suggestions` | List or create suggestions |
| `PATCH /api/suggestions/[id]` | Update status `{ status }` |
| `POST /api/suggestions/[id]/vote` | Vote `{ delta: 1 \| -1 }` |

## Project layout

```
data/                    Seed data (employees, departments, suggestions.seed.json)
.data/                   Runtime suggestion store (git-ignored, auto-created)
scripts/reset-data.mjs   Restore demo data
src/types/               Shared domain types (shared contract)
src/lib/                 Data access: directory.ts, suggestions.ts
src/components/          Shared UI: Nav, Avatar, EmployeeCard, StatusBadge
src/app/                 Routes (one folder per feature) + globals.css
```

## Data and persistence

- The directory reads `data/employees.json` and `data/departments.json`. To add a person or department, edit those files.
- Suggestions are written to `.data/suggestions.json`, which is seeded on first run. Everything sits behind `src/lib/suggestions.ts`, so moving to a real database only means changing that file.
- Votes are de-duplicated per browser through localStorage. This is fine for a demo but is not real auth.

## Known limitations (Phase 1)

There is no authentication: the moderator view is open to everyone, and anonymity is not enforced server-side beyond storing no name. The file-based store is for a single local instance only. See `CONTRIBUTING.md` for the roadmap and ownership.
