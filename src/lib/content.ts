import { dayKey } from "@lib/dates";
import {
  getCollection,
  getEntries,
  getEntry,
  type CollectionEntry,
} from "astro:content";

export type Session = CollectionEntry<"sessions">;
export type Room = CollectionEntry<"rooms">;
export type Speaker = CollectionEntry<"speakers">;
export type Edition = CollectionEntry<"editions">;

/** Year segment of a "<year>/<slug>" collection id. */
export function yearOf(entry: { id: string }): string {
  return entry.id.split("/")[0]!;
}

/** Slug segment of a "<year>/<slug>" collection id. */
export function slugOf(entry: { id: string }): string {
  return entry.id.split("/").slice(1).join("/");
}

export async function getEdition(year: string | number): Promise<Edition> {
  const entry = await getEntry("editions", String(year));
  if (!entry) throw new Error(`Missing src/data/editions/${year}.json`);
  return entry;
}

/** All editions, newest first. */
export async function getEditions(): Promise<Edition[]> {
  const all = await getCollection("editions");
  return all.sort((a, b) => b.data.year - a.data.year);
}

/** Sessions of an edition, ordered by start (then end) time. */
export async function getSessionsOfYear(
  year: string | number,
): Promise<Session[]> {
  const sessions = await getCollection("sessions", ({ id }) =>
    id.startsWith(`${year}/`),
  );
  return sessions.sort(
    (a, b) =>
      a.data.starts.getTime() - b.data.starts.getTime() ||
      a.data.ends.getTime() - b.data.ends.getTime(),
  );
}

/** Rooms of an edition, by weight. */
export async function getRoomsOfYear(year: string | number): Promise<Room[]> {
  const rooms = await getCollection("rooms", ({ id }) =>
    id.startsWith(`${year}/`),
  );
  return rooms.sort((a, b) => a.data.weight - b.data.weight);
}

/** Unique speakers on stage in an edition, alphabetical. */
export async function getSpeakersOfYear(
  year: string | number,
): Promise<Speaker[]> {
  const sessions = await getSessionsOfYear(year);
  const refs = new Map<string, { collection: "speakers"; id: string }>();
  for (const s of sessions) {
    for (const ref of s.data.speakers) refs.set(ref.id, ref);
  }
  const speakers = await getEntries([...refs.values()]);
  return speakers.sort((a, b) => a.data.name.localeCompare(b.data.name, "it"));
}

/** Sessions a speaker presents, grouped by edition year (newest first). */
export async function getSessionsOfSpeaker(
  speakerId: string,
): Promise<Array<{ year: string; sessions: Session[] }>> {
  const all = await getCollection("sessions", ({ data }) =>
    data.speakers.some((ref) => ref.id === speakerId),
  );
  const byYear = new Map<string, Session[]>();
  for (const s of all) {
    const y = yearOf(s);
    byYear.set(y, [...(byYear.get(y) ?? []), s]);
  }
  return [...byYear.entries()]
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([year, sessions]) => ({
      year,
      sessions: sessions.sort(
        (a, b) => a.data.starts.getTime() - b.data.starts.getTime(),
      ),
    }));
}

export interface AgendaDay {
  key: string;
  date: Date;
  sessions: Session[];
}

/** Bucket an edition's sessions into its event days. */
export function groupByDay(sessions: Session[], days: string[]): AgendaDay[] {
  return days
    .map((day) => ({
      key: day,
      date: new Date(`${day}T12:00:00+02:00`),
      sessions: sessions.filter((s) => dayKey(s.data.starts) === day),
    }))
    .filter((d) => d.sessions.length > 0);
}

export interface EditionStats {
  rooms: number;
  speakers: number;
  workshops: number;
  participants?: number;
}

/** Headline numbers of an edition, computed from its real content. */
export async function getStats(year: string | number): Promise<EditionStats> {
  const [edition, sessions, rooms, speakers] = await Promise.all([
    getEdition(year),
    getSessionsOfYear(year),
    getRoomsOfYear(year),
    getSpeakersOfYear(year),
  ]);
  return {
    rooms: rooms.filter((r) => r.data.forSessions).length,
    speakers: speakers.length,
    workshops: sessions.filter((s) => s.data.workshop).length,
    participants: edition.data.participants,
  };
}

/** Localized editorial page with Italian fallback. */
export async function getPage(locale: string, slug: string) {
  const pages = await getCollection("pages");
  return (
    pages.find((p) => p.id === `${locale}/${slug}`) ??
    pages.find((p) => p.id === `it/${slug}`)
  );
}
