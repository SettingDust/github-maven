import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://settingdust.github.io/maven',
  base: '/',
  build: {
    assets: '_astro'
  }
});
