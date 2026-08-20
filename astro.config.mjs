// @ts-check
import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [react(), keystatic()],
  redirects: {
    '/admin': '/keystatic',
  },
});
