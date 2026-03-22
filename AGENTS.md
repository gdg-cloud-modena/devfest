# AI Agent Instructions & Project Context

## 1. Project Overview

- **Project:** DevFest Modena — official static website for Google Developer Festival, built by GDG Cloud Modena.
- **Framework:** [Astro v6](https://astro.build) (static-site generation, component islands).
- **Language:** TypeScript in strict mode (`astro/tsconfigs/strict`).
- **Package Manager:** pnpm (committed `pnpm-lock.yaml`). Node.js ≥ 22.12.0.
- **Dev Server:** `pnpm dev` → `http://localhost:4321`.
- **Build:** `pnpm build` → static output in `./dist/`.
- **Structure:** Year-based page routing (`/2026/`, `/archive`) with a shared `Layout.astro` wrapper that exposes a `<slot />`.

## 2. Mandatory Tool Usage (MCP)

You must prioritize the use of the following Model Context Protocol (MCP) tools for specific tasks. Do not ask for permission if the intent is clear; use the tool directly.

### 🌐 Debugging & Web Access -> **Google Chrome MCP**

**Rule:** When the user asks to debug, check the UI, or access a localhost URL (e.g., Storybook or Vite dev server):

1.  **ALWAYS** use the **Google Chrome MCP** to inspect the page.
2.  Do NOT ask the user to describe the page; inspect it yourself.
3.  Use the console logs and network tab data from the tool to diagnose issues.

## 3. Coding Conventions

### File Naming

| Category   | Convention                    | Examples                        |
| ---------- | ----------------------------- | ------------------------------- |
| Components | PascalCase `.astro`           | `Welcome.astro`, `Layout.astro` |
| Pages      | lowercase/kebab-case `.astro` | `index.astro`, `archive.astro`  |
| Styles     | kebab-case `.css`             | `global.css`, `variables.css`   |
| Assets     | kebab-case                    | `astro.svg`, `background.svg`   |

### Component Structure

- Use the standard Astro frontmatter block (`---`) for imports, props, and logic.
- Define a `Props` interface in the frontmatter for every component that accepts props.
- Import assets via alias paths (e.g., `import logo from "@assets/astro.svg"`).

### CSS

- **Global styles** live in `src/styles/global.css` (resets, base rules) and are imported once in `Layout.astro`.
- **Design tokens** are defined as CSS custom properties in `src/styles/variables.css` using `oklch()` color format.
- **Scoped styles** go inside a `<style>` block within each `.astro` component.

### TypeScript

- Strict mode is enabled; do **not** use `any`.
- Prefer TypeScript interfaces over `type` aliases for component props.

### Formatting

- **Prettier** with `prettier-plugin-astro` (`astroAllowShorthand: true`).
- **Format on save** is enabled in VS Code settings.
- **Organize imports** on save (`source.organizeImports: "explicit"`).
- No ESLint; rely on TypeScript strict mode and Prettier.

### Pre-commit Hooks

- **Husky** is configured via the `prepare` script.
- A `post-merge` hook auto-runs `pnpm install` when `pnpm-lock.yaml` changes.

## 4. Import Aliases

All aliases are defined in `tsconfig.json` under `compilerOptions.paths`. **Always** use these aliases instead of relative paths when importing from `src/`.

| Alias           | Maps to              | Usage                                                         |
| --------------- | -------------------- | ------------------------------------------------------------- |
| `@styles/*`     | `./src/styles/*`     | CSS files: `import "@styles/global.css"`                      |
| `@components/*` | `./src/components/*` | Components: `import Welcome from "@components/Welcome.astro"` |
| `@layouts/*`    | `./src/layouts/*`    | Layouts: `import Layout from "@layouts/Layout.astro"`         |
| `@pages/*`      | `./src/pages/*`      | Page components (rare)                                        |
| `@assets/*`     | `./src/assets/*`     | Static assets: `import logo from "@assets/astro.svg"`         |

## 5. Git Commit Guidelines

- **Format:** Use [Conventional Commits](https://www.conventionalcommits.org/).
- **Gitmoji:** Include a [Gitmoji](https://gitmoji.dev/) after the scope.
- **Scopes:** ALWAYS use ONLY a scope defined in `.vscode/settings.json` under `conventionalCommits.scopes`. Read that file to find the most appropriate scope for your changes.
- **Example:** `fix(ff-pager): :lipstick: fix vertical shift`

## 6. Accessibility (A11Y) Audit & Best Practices

When asked to perform an accessibility audit or implement A11Y features, adhere to the following standards:

### ⌨️ Keyboard Navigation

- **Focus Management:** Ensure all interactive elements are reachable via `Tab` key. Use `tabindex="0"` for custom interactive elements.
- **Visual Focus:** NEVER remove default focus outlines without providing a clear, high-contrast alternative.
- **Activation:** Ensure buttons and links can be activated using `Enter` and/or `Space` keys.
- **Escape Key:** Modals, dropdowns, and tooltips must be closable via the `Escape` key.
- **Focus Traps:** Implement focus trapping for modal components (like `ffc-modal`) to prevent focus from escaping the modal while it is open.

### 🏷️ ARIA & Semantics

- **Semantic HTML:** Use native elements whenever possible (e.g., `<button>` instead of `<div onclick="...">`).
- **Roles:** Assign appropriate `role` attributes to custom elements (e.g., `role="button"`, `role="dialog"`, `role="tooltip"`).
- **Labels:** Use `aria-label` or `aria-labelledby` for elements without visible text.
- **State:** Use attributes like `aria-expanded`, `aria-checked`, `aria-hidden`, and `aria-disabled` to communicate component state to assistive technologies.
- **Relationships:** Use `aria-controls` and `aria-describedby` to link related elements.

### 👁️ Visual & Screen Readers

- **Color Contrast:** Ensure a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text (WCAG AA).
- **Alt Text:** Ensure icons and images have appropriate descriptions or are marked as decorative (`aria-hidden="true"`) if they convey no information.
- **Announcements:** Use `aria-live` regions for dynamic content updates that need to be announced.

### 🧪 Testing

- **Verification:** Manually verify the DOM for correct ARIA attributes and use the Google Chrome MCP to inspect the accessibility tree and simulate keyboard navigation.
