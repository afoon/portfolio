// @ts-check

import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';


export default defineConfig({
  integrations: [react()],
  adapter: netlify(),
});