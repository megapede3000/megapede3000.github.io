# Instructions for AI agents

Read this before making changes. Several humans' agents work in this repo at the same time.

## Stack
Next.js 16 App Router, React 19, TypeScript (strict), plain CSS in `src/app/globals.css`. There is no Tailwind and no UI library. Don't add one without being asked.

## Rules
1. **Stay in your workstream.** Check `CONTRIBUTING.md` for which folders your human owns. If a task needs changes to shared contracts (`src/types/index.ts`, `globals.css`, `src/components/`, `package.json`), make the smallest change you can and **call it out explicitly** in your summary.
2. **Keep data access in `src/lib/`.** Pages and API routes call lib functions. They never read files or JSON directly. Keep existing function signatures stable.
3. **Next.js 16 conventions:** `params` and `searchParams` are Promises (`const { id } = await params`). Default to Server Components. Add `"use client"` only to components that need state or effects.
4. **Styling:** use the CSS variables and existing classes (`card`, `btn`, `badge`, `grid`, `filters`, …). Don't hard-code colors. Layouts must work at 390px wide.
5. **Accessibility:** every input needs a label, buttons need accessible names, and nothing should rely on color alone.
6. **Verify before you finish:** run `npm run typecheck && npm run build` and report the result.
7. **Data is fictional.** Use `example.com` emails and 555 phone numbers. Never add real employee data to seed files.
8. Don't edit `.data/` (runtime state) or commit it.
