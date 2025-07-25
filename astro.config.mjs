// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://hamdankun.github.io/my-porto',
  base: 'my-porto',
  outDir: 'docs',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});