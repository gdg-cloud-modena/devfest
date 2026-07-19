import { ui, type UiKey } from "./ui";

export const locales = ["it", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "it";

/** BCP-47 tag for <html lang> and Open Graph. */
export function langTag(locale: Locale): string {
  return locale === "it" ? "it-IT" : "en-US";
}

/**
 * Translator factory. Placeholders use {name} syntax:
 * `t("cfs.text", { year: 2026 })`.
 */
export function useTranslations(locale: Locale) {
  return function t(
    key: UiKey,
    vars?: Record<string, string | number>,
  ): string {
    let text: string = ui[locale][key] ?? ui[defaultLocale][key];
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        text = text.replaceAll(`{${k}}`, String(v));
      }
    }
    return text;
  };
}

/** Prefix a root-relative path for the given locale (it = no prefix). */
export function localizePath(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return locale === defaultLocale ? normalized : `/en${normalized}`;
}

/** The same page in another locale (used by the language switcher). */
export function switchLocalePath(target: Locale, pathname: string): string {
  const bare = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  if (target === defaultLocale) return bare;
  return bare === "/" ? "/en/" : `/en${bare}`;
}

/** Locale inferred from a pathname. */
export function localeFromPath(pathname: string): Locale {
  return /^\/en(\/|$)/.test(pathname) ? "en" : "it";
}
