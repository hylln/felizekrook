// @ts-check
import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig(({ command }) => ({
  integrations: [
    react(),
    command === 'dev' ? keystatic() : [],
  ],
  redirects: command === 'dev' ? {
    '/admin': '/keystatic',
  } : {},
}));
