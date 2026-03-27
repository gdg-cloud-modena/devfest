import { SITE_URL } from "@configs/site";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const pages = [`${SITE_URL}en/`];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map((url) => `<url><loc>${url}</loc></url>`).join("")}
    </urlset>`.trim();

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
};
