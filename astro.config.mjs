// @ts-check
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

import { SITE_URL } from "./src/config/site";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/en/"),
    }),
    robotsTxt({
      sitemap: [`${SITE_URL}sitemap-index.xml`, `${SITE_URL}en/sitemap.xml`],
    }),
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes("src/vendor")) return "vendor/[name]";
          },
        },
      },
    },
  },
});
