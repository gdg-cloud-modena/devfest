/**
 * Edition registry: behavior/config of every DevFest Modena edition.
 *
 * To publish a new edition:
 *  1. add its content: `src/data/editions/<year>.json`, `src/content/sessions/<year>/`,
 *     `src/content/rooms/<year>/` (plus assets under `src/assets/{partners,rooms}/<year>/`);
 *  2. add an entry here;
 *  3. bump `CURRENT_YEAR`.
 * Home page, menu, archive and sitemap follow automatically.
 */

export interface EditionConfig {
  year: number;
  /** Venue shown in hero/JSON-LD. */
  venue: {
    name: string;
    address: string;
    mapsUrl: string;
  };
  /** Free-ticket registration URL; the tickets CTA shows only for the current edition. */
  ticketsUrl?: string;
  callForSpeakers?: {
    open: boolean;
    url: string;
  };
  cvFormUrl?: string;
  /** Edition whose numbers are shown in the "statistics" section (usually the last completed one). */
  statsFromYear?: number;
}

const SAN_CARLO = {
  name: "Fondazione Collegio San Carlo",
  address: "Via San Carlo 5, 41121 Modena",
  mapsUrl: "https://maps.app.goo.gl/7pLxqnFZMdP6RfXE8",
};

export const CURRENT_YEAR = 2026;

export const EDITIONS: Record<string, EditionConfig> = {
  "2026": {
    year: 2026,
    venue: SAN_CARLO,
    ticketsUrl: "https://gdg.community.dev/e/m6u46s/",
    callForSpeakers: {
      open: false,
      url: "https://sessionize.com/devfest-modena-2026",
    },
    cvFormUrl:
      "https://form.asana.com/?k=qpheZ_rD3DLkDmIjsJaKVA&d=588515525965352",
    statsFromYear: 2025,
  },
  "2025": {
    year: 2025,
    venue: SAN_CARLO,
  },
  "2024": {
    year: 2024,
    venue: {
      name: "Modena",
      address: "Modena",
      mapsUrl: "https://maps.app.goo.gl/7pLxqnFZMdP6RfXE8",
    },
  },
};

export const EDITION_YEARS = Object.keys(EDITIONS).sort(
  (a, b) => Number(b) - Number(a),
);

export const ARCHIVED_YEARS = EDITION_YEARS.filter(
  (y) => Number(y) !== CURRENT_YEAR,
);

export function editionOf(year: string | number): EditionConfig {
  const e = EDITIONS[String(year)];
  if (!e) throw new Error(`Unknown edition: ${year}`);
  return e;
}

export const CURRENT_EDITION = editionOf(CURRENT_YEAR);

export function isCurrent(year: string | number): boolean {
  return Number(year) === CURRENT_YEAR;
}
