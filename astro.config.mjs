// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";

export default defineConfig({
  output: "static",

  base: "/",

  integrations: [tailwind()],

  adapter: vercel(),

  build: {
    format: "directory",
  },
});
