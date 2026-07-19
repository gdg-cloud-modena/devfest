import type { Locale } from "@i18n/index";
import { langTag } from "@i18n/index";

/** All event times are wall-clock times at the venue. */
export const EVENT_TZ = "Europe/Rome";

export function fmtTime(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(langTag(locale), {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: EVENT_TZ,
  }).format(date);
}

/** "sabato 4 ottobre" / "Saturday, October 4" */
export function fmtWeekdayDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(langTag(locale), {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: EVENT_TZ,
  }).format(date);
}

/** "sabato 4 ottobre 2025" / "Saturday, October 4, 2025" */
export function fmtFullDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(langTag(locale), {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: EVENT_TZ,
  }).format(date);
}

/** Venue-local "YYYY-MM-DD" of a date, used to bucket sessions per day. */
export function dayKey(date: Date): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: EVENT_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

/**
 * Human label for the event days: "3 e 4 ottobre 2026",
 * "October 3–4, 2026", "12 ottobre 2024"…
 */
export function daysRangeLabel(days: string[], locale: Locale): string {
  const dates = days.map((d) => new Date(`${d}T12:00:00+02:00`));
  if (dates.length === 0) return "";
  const year = dates[0]!.getFullYear();
  const month = new Intl.DateTimeFormat(langTag(locale), {
    month: "long",
    timeZone: EVENT_TZ,
  }).format(dates[0]!);
  const nums = dates.map((d) =>
    new Intl.DateTimeFormat(langTag(locale), {
      day: "numeric",
      timeZone: EVENT_TZ,
    }).format(d),
  );
  if (locale === "it") {
    return `${nums.join(" e ")} ${month} ${year}`;
  }
  const capMonth = month.charAt(0).toUpperCase() + month.slice(1);
  return `${capMonth} ${nums.join("–")}, ${year}`;
}

/** ISO string with the venue offset, for datetime attributes and JSON-LD. */
export function isoAtVenue(date: Date): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: EVENT_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZoneName: "longOffset",
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const offset = get("timeZoneName").replace("GMT", "") || "+00:00";
  return `${get("year")}-${get("month")}-${get("day")}T${get("hour")}:${get("minute")}:${get("second")}${offset}`;
}
