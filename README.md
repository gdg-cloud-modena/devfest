# DevFest Modena — GDG Cloud Modena

Official static website for DevFest Modena, built with [Astro v6](https://astro.build).

Fully static HTML output, bilingual (Italian default, English under `/en/`), no client-side frameworks, no cookies (Simple Analytics is cookieless), dark mode via `prefers-color-scheme`.

---

## Prerequisites

| Tool    | Minimum version |
| ------- | --------------- |
| Node.js | **≥ 22.12.0**   |
| pnpm    | any             |

> **Important:** always use **pnpm**. The `pnpm-lock.yaml` lockfile is committed to the repository; using npm or yarn will generate a conflicting lockfile.

```bash
node -v                # must return v22.12.0 or higher
npm install -g pnpm    # if you don't have pnpm
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

## Available Commands

| Command                      | Description                          |
| ---------------------------- | ------------------------------------ |
| `pnpm install`               | Install dependencies                 |
| `pnpm dev`                   | Start dev server at `localhost:4321` |
| `pnpm build`                 | Build for production → `./dist/`     |
| `pnpm preview`               | Preview the production build locally |
| `pnpm astro check`           | TypeScript + Astro type-checking     |
| `pnpm astro:enable-toolbar`  | Enable the Astro dev toolbar         |
| `pnpm astro:disable-toolbar` | Disable the Astro dev toolbar        |

---

## Project structure

```text
src/
├── configs/
│   ├── site.ts             # site-wide constants (URL, social, email, UTM)
│   └── editions.ts         # ⭐ edition registry + CURRENT_YEAR
├── content.config.ts       # content-collection schemas (Zod)
├── content/
│   ├── speakers/           # speaker profiles, shared across editions
│   ├── sessions/<year>/    # talks & workshops of an edition
│   ├── rooms/<year>/       # venue rooms of an edition
│   ├── partners/<year>/    # optional partner presentation pages
│   └── pages/{it,en}/      # localized editorial pages (FAQ intro, CoC…)
├── data/
│   ├── editions/<year>.json  # per-edition data (days, team, partners, levels)
│   ├── communities.json      # community registry
│   ├── faq/{it,en}.json      # FAQ entries per locale
│   └── location/{it,en}.json # venue & travel info per locale
├── i18n/                   # locale helpers + UI dictionaries (it/en)
├── layouts/BaseLayout.astro  # HTML shell: SEO, hreflang, JSON-LD, header/footer
├── components/             # shared components + components/pages/* (page bodies)
├── pages/                  # routes (thin wrappers); pages/en/* mirrors for English
├── styles/                 # variables.css (tokens), themes.css, global.css
└── assets/                 # images: speakers/, team/, partners/<year>/, rooms/<year>/…
```

Routing is **edition-driven**: `src/pages/[year]/…` generates the pages of every edition listed in the registry, `/` always shows the current edition, `/archive/` lists the past ones.

---

## ⭐ Publishing a new edition

Everything is driven by `src/configs/editions.ts` and the content folders. To add e.g. **2027**:

1. **Data** — create `src/data/editions/2027.json` (days, participants, communities, roles, people, levels, partners).
2. **Content** — create `src/content/sessions/2027/`, `src/content/rooms/2027/` (Markdown; see the Zod schemas in `src/content.config.ts`) and, if needed, `src/content/partners/2027/`.
3. **Assets** — add logos/photos under `src/assets/partners/2027/` and `src/assets/rooms/2027/`. Speaker photos are global in `src/assets/speakers/`.
4. **Registry** — add the `"2027"` entry in `src/configs/editions.ts` (venue, ticketsUrl, call for speakers, stats source) and bump `CURRENT_YEAR`.
5. **Theme (optional)** — add a `[data-edition="2027"]` block in `src/styles/themes.css` to re-tint the edition.

Home page, menu, hub pages, archive, footer and sitemap update automatically. `pnpm build` fails if a session references a missing speaker — schemas validate all cross-references.

---

## Content model in short

- **Speakers** are global (`/speakers/<slug>/`) and shared across editions; a session references them by slug.
- **Sessions** live in `/​<year>/sessions/<slug>/` and reference rooms of the same year.
- **Editorial pages** (`faq`, `workshops`, `code-of-conduct`…) exist per locale in `src/content/pages/{it,en}/` — the English page falls back to Italian when missing.
- **UI strings** live in `src/i18n/ui.ts` (`t("nav.agenda")`), URLs are localized with `localizePath()`.

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

The `./dist/` output is a fully static site ready to be deployed on any hosting platform (Netlify, Vercel, GitHub Pages, etc.). `robots.txt`, `sitemap-index.xml` (with `hreflang` alternates) and the `/international/ → /en/` redirect are generated at build time.

---

## Resources

- [Astro documentation](https://docs.astro.build)
- [Astro content collections](https://docs.astro.build/en/guides/content-collections/)
- [GDG Cloud Modena](https://gdg.community.dev/gdg-cloud-modena/)
