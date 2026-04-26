# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Use `bun` as the package manager (bun.lock is present).

```bash
bun dev        # Start development server on port 3000
bun build      # Production build
bun start      # Start production server
bun run lint   # Lint with Biome
bun run format # Format with Biome
```

## Architecture

Next.js 16 project using the **App Router** (`src/app/`). All routes, layouts, and pages live under `src/app/`. The path alias `@/*` resolves to `src/*`.

**Key technology choices:**
- **Biome** (not ESLint/Prettier) for linting and formatting — 2-space indentation
- **Tailwind CSS v4** via PostCSS — theme customization goes in `globals.css` using `@theme`, not a `tailwind.config` file
- **React Compiler** is enabled in `next.config.ts` — automatic memoization, so avoid manual `useMemo`/`useCallback` unless there is a specific reason
- **React 19** with Server Components as the default; add `"use client"` only when browser APIs or interactivity require it

**Fonts:** Geist Sans and Geist Mono loaded via `next/font/google` in `layout.tsx` and exposed as CSS variables (`--font-geist-sans`, `--font-geist-mono`).

**Dark mode:** handled via `prefers-color-scheme` media query in `globals.css` using CSS custom properties.
