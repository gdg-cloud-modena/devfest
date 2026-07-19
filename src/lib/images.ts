import type { ImageMetadata } from "astro";

type GlobResult = Record<string, { default: ImageMetadata }>;

/** Map "<key without extension>" -> image, preferring jpg over png over webp. */
function buildLookup(
  globbed: GlobResult,
  base: string,
): Map<string, ImageMetadata> {
  const priority = [".jpg", ".jpeg", ".png", ".webp"];
  const map = new Map<string, ImageMetadata>();
  const entries = Object.entries(globbed).sort(
    ([a], [b]) =>
      priority.findIndex((e) => a.endsWith(e)) -
      priority.findIndex((e) => b.endsWith(e)),
  );
  for (const [path, mod] of entries) {
    const key = path
      .slice(path.indexOf(base) + base.length)
      .replace(/^\//, "")
      .replace(/\.(jpg|jpeg|png|webp)$/i, "");
    if (!map.has(key)) map.set(key, mod.default);
  }
  return map;
}

const speakerImages = buildLookup(
  import.meta.glob<{ default: ImageMetadata }>(
    "../assets/speakers/*.{jpg,jpeg,png,webp}",
    { eager: true },
  ),
  "assets/speakers",
);

const teamImages = buildLookup(
  import.meta.glob<{ default: ImageMetadata }>(
    "../assets/team/*.{jpg,jpeg,png,webp}",
    { eager: true },
  ),
  "assets/team",
);

const partnerLogos = buildLookup(
  import.meta.glob<{ default: ImageMetadata }>(
    "../assets/partners/**/*.{jpg,jpeg,png,webp}",
    { eager: true },
  ),
  "assets/partners",
);

const roomImages = buildLookup(
  import.meta.glob<{ default: ImageMetadata }>(
    "../assets/rooms/**/*.{jpg,jpeg,png,webp}",
    { eager: true },
  ),
  "assets/rooms",
);

const communityLogos = buildLookup(
  import.meta.glob<{ default: ImageMetadata }>(
    "../assets/communities/*.{jpg,jpeg,png,webp}",
    { eager: true },
  ),
  "assets/communities",
);

export function speakerImage(slug: string): ImageMetadata | undefined {
  return speakerImages.get(slug);
}

/** Team photo with the same fallback chain the old site used: team -> speakers -> generic avatar. */
export function teamImage(code: string): ImageMetadata | undefined {
  return (
    teamImages.get(code) ?? speakerImages.get(code) ?? teamImages.get("profile")
  );
}

export function partnerLogo(
  year: string | number,
  code: string,
): ImageMetadata | undefined {
  return partnerLogos.get(`${year}/${code}`);
}

export function roomImage(
  year: string | number,
  slug: string,
): ImageMetadata | undefined {
  return roomImages.get(`${year}/${slug}`);
}

export function communityLogo(code: string): ImageMetadata | undefined {
  return communityLogos.get(code);
}
