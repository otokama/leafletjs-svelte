import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

const mdsvexOptions = {
  extensions: [".md", ".svx"]
}

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  extensions: [".svelte", ".md", ".svx"],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

  kit: {
    adapter: adapter({
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    paths: {
      base: dev ? '' : process.env.BASE_PATH,
    },
    prerender: {
      entries: [
        '/',
        '/docs',
        '/sandbox',
        '/docs/1-getting-started',
        '/docs/2-demo',
        '/docs/3-map-usage',
        '/docs/4-marker',
        '/docs/5-popup',
        '/docs/6-tooltip',
        '/docs/7-tilelayer',
        '/docs/8-tilelayerwms',
        '/docs/9-imageoverlay',
        '/docs/10-videooverlay',
        '/docs/11-polyline',
        '/docs/12-polygon',
        '/docs/13-circle',
        '/docs/14-circlemarker',
        '/docs/15-rectangle',
        '/docs/16-layergroup',
        '/docs/17-featuregroup',
        '/docs/18-geojson'
      ]
    }
  }
};

export default config;
