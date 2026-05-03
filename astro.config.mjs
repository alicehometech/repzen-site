import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false })],
  site: 'https://repzen.app',
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
