import { getEditions, slugOf, yearOf } from "@lib/content";
import { getCollection } from "astro:content";

/**
 * Static-path helpers shared by the Italian routes and their /en/ mirrors.
 * A page exists for an edition only when that edition has matching content,
 * mirroring the URLs of the old Hugo site.
 */

export async function editionPaths() {
  const editions = await getEditions();
  return editions.map((e) => ({ params: { year: String(e.data.year) } }));
}

export async function agendaPaths() {
  const sessions = await getCollection("sessions");
  const years = [...new Set(sessions.map(yearOf))];
  return years.map((year) => ({ params: { year } }));
}

export async function sessionPaths() {
  const sessions = await getCollection("sessions");
  return sessions.map((session) => ({
    params: { year: yearOf(session), slug: slugOf(session) },
    props: { session },
  }));
}

export async function teamPaths() {
  const editions = await getEditions();
  return editions
    .filter((e) => e.data.people.length > 0)
    .map((e) => ({ params: { year: String(e.data.year) } }));
}

export async function communitiesPaths() {
  const editions = await getEditions();
  return editions
    .filter((e) => e.data.communities.length > 0)
    .map((e) => ({ params: { year: String(e.data.year) } }));
}

export async function partnersIndexPaths() {
  const editions = await getEditions();
  return editions
    .filter((e) => e.data.partners.length > 0)
    .map((e) => ({ params: { year: String(e.data.year) } }));
}

export async function partnerPaths() {
  const editions = await getEditions();
  return editions.flatMap((e) =>
    e.data.partners.map((partner) => ({
      params: { year: String(e.data.year), slug: partner.code },
    })),
  );
}

export async function roomsIndexPaths() {
  const rooms = await getCollection("rooms");
  const years = [...new Set(rooms.map(yearOf))];
  return years.map((year) => ({ params: { year } }));
}

export async function roomPaths() {
  const rooms = await getCollection("rooms");
  return rooms.map((room) => ({
    params: { year: yearOf(room), slug: slugOf(room) },
    props: { room },
  }));
}

export async function speakerPaths() {
  const speakers = await getCollection("speakers");
  return speakers.map((speaker) => ({
    params: { slug: speaker.id },
    props: { speaker },
  }));
}
