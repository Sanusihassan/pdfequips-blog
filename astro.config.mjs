import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from "@astrojs/react";
// fetch-subscription-status
// https://astro.build/config
export default defineConfig({
  // build: {
  //   rollupOptions: {
  //     external: ['fetch-subscription-status'], // Add the package name here
  //   },
  // },
  vite: {
    optimizeDeps: {
      include: ['fetch-subscription-status', 'react-icons'],
    },
    ssr: {
      noExternal: ['fetch-subscription-status', 'react-icons', 'pdfequips-navbar']
    }
  },
  site: 'https://www.pdfequips.com',
  integrations: [mdx(), sitemap(), react()],
  base: import.meta.env.PROD ? "blog" : ""
});