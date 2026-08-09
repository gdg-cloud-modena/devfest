# UI redesign — DevFest Modena

Migration of the Astro site to the new design language provided by the designer.

## Design language

| Trait       | Decision                                                                             |
| ----------- | ------------------------------------------------------------------------------------ |
| Background  | White page, **periwinkle panels** (`--color-panel`) for the key content blocks       |
| Cards       | White, 1px hairline border, large radius, no shadow at rest                          |
| Buttons     | Pill; **primary = ink (near-black)**, **secondary = outlined on white**              |
| Badges      | Pill, pastel Google tint + matching dark ink text (`.badge--green`, `--blue`, …)     |
| Headings    | Google Sans Display 700, tight tracking (`--tracking-tight`), centered in sections   |
| Accents     | The four Google colours, used as _punctuation_ (dot divider, stat underlines, decor) |
| Decorations | Flat geometric shapes (arrow, cross, squares) — `Decor.astro`                        |
| Radii       | `--radius-m` cards · `--radius-l` panels · `--radius-full` pills                     |

Everything is driven by tokens in `src/styles/variables.css`; components never hardcode colours.

### Layout rails

- `.container` — outer rail (`--container`): panels, footer and the photo strip reach this edge.
- `.container--inset` — copy and card grids, slightly narrower so they sit inside the panels.
- `.container--narrow` — long-form reading width (FAQ, editorial pages, archive).

### Gotcha: scoped styles and child components

Astro scopes styles with a `data-astro-cid-*` attribute on the elements of **its own**
template. A component that does not spread `Astro.props` onto its root never receives the
parent's attribute, so a `class` passed down cannot be styled from the parent. Position and
space child components from a wrapper element you own (see `PromoCard` → `.promo-decor`),
and keep shared looks (`.panel`, `.badge`, `.card`, `.logo-tile`, `.inline-list`) in
`global.css`.

## Checklist

### Foundations

- [x] `variables.css` — new palette, panel/card tokens, tracking, radii, container widths
- [x] `global.css` — buttons, badges, cards, panels, dot divider, prose, layout primitives
- [x] `themes.css` — per-edition accent kept working with the new palette
- [x] Dark-mode pass over every new token (design is light-only, dark is derived)

### Shared components

- [x] `Header.astro` — white bar, `{DevFest}` logo, plain nav, ink CTA, restyled burger
- [x] `Footer.astro` — dark block, 4 columns (brand / sitemap / patronage / contacts) + bottom bar
- [x] `Decor.astro` — arrow, cross and squares ornaments (new)
- [x] `.panel` / `.panel--center` / `.panel--split` — periwinkle content blocks (global.css)
- [x] `PromoCard.astro` — badge + title + text + action card (new, used by CFS and CV)
- [x] `Gallery.astro` — edge-bleeding photo strip (new)
- [x] `PageHeader.astro` — shared interior-page header (new)
- [x] `SectionHeading.astro` — centered variant with optional kicker and lead
- [x] `Statistics.astro` — white cards, big figure, coloured underline
- [x] `PartnerGrid.astro` — centered tier labels, white logo tiles, per-tier sizes
- [x] `CommunitiesGrid.astro` — logo tiles aligned with partners
- [x] `PersonCard.astro` — new photo treatment and typography
- [x] `SessionList.astro` — card rows, new time column and badges
- [x] `Callout.astro` — flat tinted block, no left rule
- [x] `CtaTickets.astro` — periwinkle panel with photo
- [x] `CtaCv.astro` — promo card with green badge

### Pages

- [x] Home — hero, intro panel, gallery, CFS, stats, partners, communities, editions
- [x] Agenda (`AgendaPage`)
- [x] Session detail (`SessionPage`)
- [x] Speakers index + speaker detail
- [x] Team
- [x] Communities
- [x] Partners index + partner detail
- [x] Rooms index + room detail
- [x] Location
- [x] FAQ
- [x] Archive + edition hub
- [x] Markdown pages (workshops, speed networking, code of conduct)
- [x] 404

### Content / copy

- [x] i18n strings aligned with the designer's copy (hero claim, CTA labels, badges)
- [x] Dropped the duplicate `<h1>` from the workshops / speed-networking markdown:
      the page renders the frontmatter title itself
- [x] Italian dates are sentence-cased in TS (`sentenceCase`) instead of `text-transform`,
      which was capitalising every word ("4 E 5 Ottobre")

### Quality

- [x] `pnpm build` clean (461 pages), `astro check` clean (0 errors, 0 warnings)
- [x] Prettier formatting — the agenda enhancement script moved out of the JSX
      expression it was nested in, which Prettier could not parse
- [x] Responsive pass (mobile / tablet / desktop)
- [x] A11y pass — one `h1` per page, labelled landmarks, alt text, focus rings,
      WCAG AA contrast in both schemes (lowest measured pair 5.15:1)
