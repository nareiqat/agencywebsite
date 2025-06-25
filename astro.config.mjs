import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import dotenv from "dotenv";
import netlify from "@astrojs/netlify";

dotenv.config();

export default defineConfig({
  site: "https://www.ncatdigitalagency.com", // update me!
  integrations: [
    icon(),
    sitemap({
      filter: (page) => !page.includes("/admin"),
      changefreq: "weekly",
      priority: 0.7,
    }),
  ],
  output: "static",
  adapter: netlify(),
});
