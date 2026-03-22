# DevFest Modena — GDG Cloud Modena

Official static website for DevFest Modena, built with [Astro v6](https://astro.build).

---

## Prerequisites

| Tool    | Minimum version |
| ------- | --------------- |
| Node.js | **≥ 22.12.0**   |
| pnpm    | any             |

> **Important:** always use **pnpm**. The `pnpm-lock.yaml` lockfile is committed to the repository; using npm or yarn will generate a conflicting lockfile.

Check your Node.js version:

```bash
node -v   # must return v22.12.0 or higher
```

If you don't have pnpm installed:

```bash
npm install -g pnpm
```

---

## Installation

```bash
git clone https://github.com/gdg-cloud-modena/devfest.git
cd devfest
pnpm install
```

The Husky `post-merge` hook is set up automatically by `pnpm install` via the `prepare` script. It will re-run `pnpm install` automatically whenever `pnpm-lock.yaml` changes after a `git merge` or `git pull`.

---

## Development

Start the local dev server:

```bash
pnpm dev
```

The site will be available at [http://localhost:4321](http://localhost:4321).

---

## Available Commands

All commands are run from the root of the project:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

## Available Commands

All commands are run from the root of the project:

| Command                      | Description                          |
| ---------------------------- | ------------------------------------ |
| `pnpm install`               | Install dependencies                 |
| `pnpm dev`                   | Start dev server at `localhost:4321` |
| `pnpm build`                 | Build for production → `./dist/`     |
| `pnpm preview`               | Preview the production build locally |
| `pnpm astro check`           | TypeScript + Astro type-checking     |
| `pnpm astro:enable-toolbar`  | Enable the Astro dev toolbar         |
| `pnpm astro:disable-toolbar` | Disable the Astro dev toolbar        |

**Composition pattern:** `pages/` uses layouts → layouts expose `<slot />` → components render inside slots.

---

## Configuration

### TypeScript

The project uses Astro's strict TypeScript preset (`astro/tsconfigs/strict`). Avoid `any`; use Astro's generated types from `.astro/types.d.ts` when needed.

### Prettier

```bash
pnpm prettier --write .   # Format all files
pnpm prettier --check .   # Check formatting without modifying files
```

The `.prettierrc` config includes `prettier-plugin-astro` with `astroAllowShorthand: true` — prefer shorthand attribute syntax in `.astro` templates where applicable.

## Build & Deploy

```bash
pnpm build    # generates the static site in ./dist/
pnpm preview  # local preview of the production build
```

The `./dist/` output is a fully static site ready to be deployed on any hosting platform (Netlify, Vercel, GitHub Pages, etc.).

---

## Resources

- [Astro documentation](https://docs.astro.build)
- [Astro project structure guide](https://docs.astro.build/en/basics/project-structure/)
- [GDG Cloud Modena](https://gdg.community.dev/gdg-cloud-modena/)
