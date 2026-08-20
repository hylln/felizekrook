// @ts-check
import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [react(), keystatic()],
  redirects: {
    '/admin': '/keystatic',
  },
});
