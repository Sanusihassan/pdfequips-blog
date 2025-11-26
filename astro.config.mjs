import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";
//
// https://astro.build/config
export default defineConfig({
  // build: {
  //   rollupOptions: {
  //     external: [''], // Add the package name here
  //   },
  // },
  vite: {
    optimizeDeps: {
      include: ["react-icons"],
    },
    ssr: {
      noExternal: ["react-icons", "pdfequips-navbar"],
    },
  },
  site: "https://www.pdfequips.com",
  integrations: [mdx(), sitemap(), react()],
  base: import.meta.env.PROD ? "blog" : "",
});
