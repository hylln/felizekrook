// @ts-check
import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [react(), keystatic()],
  redirects: {
    '/admin': '/keystatic',
  },
  vite: {
    optimizeDeps: {
      exclude: ['@keystatic/astro'],
    },
  },
});
