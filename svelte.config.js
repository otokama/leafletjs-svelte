import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex } from "mdsvex";

const mdsvexOptions = {
  extensions: [".md", ".svx"],
};

const dev = process.argv.includes("dev");

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  extensions: [".svelte", ".md", ".svx"],
  preprocess: [mdsvex(mdsvexOptions), vitePreprocess()],

  kit: {
    adapter: adapter({
      fallback: undefined,
      precompress: true,
      strict: true,
    }),
    paths: {
      base: dev ? "" : process.env.BASE_PATH,
    },
    prerender: {
      entries: [
        "/",
        "/sandbox",
        "/sandbox/1",
        "/sandbox/2",
        "/docs/getting-started",
        "/docs/basemap-map-usage",
        // '/docs/2-demo',
        "/docs/controls-layers",
        "/docs/drawtool-basic-draw",
        "/docs/ui-layers-marker",
        "/docs/ui-layers-popup",
        "/docs/ui-layers-tooltip",
        "/docs/raster-layers-tilelayer",
        "/docs/raster-layers-tilelayerwms",
        "/docs/raster-layers-imageoverlay",
        "/docs/raster-layers-videooverlay",
        "/docs/vector-layers-polyline",
        "/docs/vector-layers-polygon",
        "/docs/vector-layers-circle",
        "/docs/vector-layers-circlemarker",
        "/docs/vector-layers-rectangle",
        "/docs/other-layers-layergroup",
        "/docs/other-layers-featuregroup",
        "/docs/other-layers-geojson",
      ],
    },
  },
};

export default config;
