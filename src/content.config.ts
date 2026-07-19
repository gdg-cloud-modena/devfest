import { file, glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection, reference } from "astro:content";

const socialSchema = z
  .object({
    linkedin: z.string().url(),
    instagram: z.string().url(),
    x: z.string().url(),
    facebook: z.string().url(),
    github: z.string().url(),
    youtube: z.string().url(),
    website: z.string().url(),
  })
  .partial();

/** Speaker profiles, shared across editions (id = slug). */
const speakers = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/speakers" }),
  schema: z.object({
    name: z.string(),
    company: z.string().optional(),
    role: z.string().optional(),
    /** Drives the Italian "Relatrice" label. */
    female: z.boolean().default(false),
    social: socialSchema.optional(),
  }),
});

/** Talks and workshops (id = "<year>/<slug>"). */
const sessions = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/sessions" }),
  schema: z.object({
    title: z.string(),
    starts: z.coerce.date(),
    ends: z.coerce.date(),
    /** Room slugs within the same edition. */
    rooms: z.array(z.string()).default([]),
    speakers: z.array(reference("speakers")).default([]),
    /** Language the session is delivered in. */
    lang: z.enum(["it", "en"]).default("it"),
    workshop: z.boolean().default(false),
    slides: z.string().url().optional(),
    /** Last-minute notices (room change, cancellation…). */
    warning: z.string().optional(),
    /** Community-proposed lightning talks hosted inside this session. */
    lightningTalks: z
      .array(
        z.object({
          title: z.string(),
          speaker: z.string(),
          description: z.string().optional(),
          profileURL: z.string().optional(),
          slidesURL: z.string().optional(),
          done: z.boolean().default(false),
        }),
      )
      .optional(),
  }),
});

/** Venue rooms (id = "<year>/<slug>"). */
const rooms = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/rooms" }),
  schema: z.object({
    name: z.string(),
    summary: z.string().optional(),
    weight: z.number().default(99),
    /** Rooms hosting sessions vs. service spaces (courtyard, cloakroom…). */
    forSessions: z.boolean().default(false),
  }),
});

/** Optional partner presentation pages (id = "<year>/<slug>"). */
const partners = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/partners" }),
  schema: z.object({
    name: z.string(),
  }),
});

/** Localized editorial pages (id = "<locale>/<slug>"). */
const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

/** Per-edition structured data, migrated from the old data/<year>.toml. */
const editions = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/data/editions" }),
  schema: z.object({
    year: z.number(),
    /** Event days, ISO dates. */
    days: z.array(z.string().regex(/^\d{4}-\d{2}-\d{2}$/)),
    participants: z.number().optional(),
    /** Community codes taking part in this edition. */
    communities: z.array(z.string()).default([]),
    roles: z.array(z.object({ title: z.string(), code: z.string() })),
    people: z.array(
      z.object({
        role: z.string(),
        code: z.string(),
        name: z.string().optional(),
        description: z.string().optional(),
        website: z.string().optional(),
      }),
    ),
    /** Sponsorship levels, ascending weight = descending importance. */
    levels: z
      .array(
        z.object({ title: z.string(), code: z.string(), weight: z.number() }),
      )
      .default([]),
    partners: z
      .array(
        z.object({
          name: z.string(),
          code: z.string(),
          link: z.string(),
          level: z.string(),
        }),
      )
      .default([]),
  }),
});

/** Tech community registry (id = code). */
const communities = defineCollection({
  loader: file("./src/data/communities.json"),
  schema: z.object({
    name: z.string(),
    website: z.string().url(),
  }),
});

/** Global team profile registry, enriches edition people lacking details. */
const team = defineCollection({
  loader: file("./src/data/team.json"),
  schema: z.object({
    name: z.string(),
    title: z.string().optional(),
    website: z.string().optional(),
    linkedin: z.string().optional(),
  }),
});

/** FAQ entries per locale (id = locale). */
const faq = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/data/faq" }),
  schema: z.object({
    items: z.array(z.object({ question: z.string(), answer: z.string() })),
  }),
});

/** "How to reach us" structured content per locale (id = locale). */
const location = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/data/location" }),
  schema: z.object({
    introduction: z.object({
      title: z.string(),
      address: z.string(),
      link: z.string(),
      website: z.string(),
      description1: z.string(),
      description2: z.string(),
      description3: z.string(),
    }),
    photos: z.array(z.object({ title: z.string(), link: z.string() })),
    auto: z.array(
      z.object({
        title: z.string(),
        step1: z.string(),
        step2: z.string(),
        step3: z.string(),
        step4: z.string(),
      }),
    ),
    parking: z.array(
      z.object({
        title: z.string(),
        address: z.string(),
        link: z.string(),
        distance: z.string(),
        description: z.string(),
      }),
    ),
    train: z.array(
      z.object({
        title: z.string(),
        distance: z.string(),
        time: z.string(),
        description: z.string(),
        link: z.string(),
      }),
    ),
    airplane: z.array(
      z.object({
        title: z.string(),
        distance: z.string(),
        suggestion: z.string(),
      }),
    ),
  }),
});

export const collections = {
  speakers,
  sessions,
  rooms,
  partners,
  pages,
  editions,
  communities,
  team,
  faq,
  location,
};
