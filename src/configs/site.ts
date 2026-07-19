export const SITE_URL = "https://devfest.modena.it/";

export const SITE_NAME = "DevFest Modena";
export const ORGANIZER = "GDG Cloud Modena";
export const EMAIL = "info@devfest.modena.it";
export const COPYRIGHT_FROM_YEAR = 2024;

/** Cookieless analytics (no banner needed). */
export const SIMPLE_ANALYTICS_DOMAIN = "sa.devfest.modena.it";

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/showcase/devfest-modena/",
  instagram: "https://www.instagram.com/devfest.modena/",
  facebook: "https://www.facebook.com/events/1308374207349867",
  telegram: "https://t.me/devfest_modena",
} as const;

export const WTM_URL = "https://wtm.modena.it";

/** UTM query string appended to outbound partner/community links. */
export function utmFor(year: number | string): string {
  return `utm_source=website&utm_medium=referral&utm_campaign=devfest_modena_${year}`;
}

export function withUtm(url: string, year: number | string): string {
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}${utmFor(year)}`;
}
