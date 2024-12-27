import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

import robotsTxt from "astro-robots-txt";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://kelaspondok.com',
  integrations: [tailwind(), partytown(
    {
      config: {
        forward: ["dataLayer.push"],
      },
    }
  ), robotsTxt(), sitemap()],
  server: {
    port: 3000
  }
});