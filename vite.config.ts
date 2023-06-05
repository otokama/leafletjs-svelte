import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { searchForWorkspaceRoot } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
	plugins: [
    sveltekit(),
    viteStaticCopy({
      targets: [
        {
          src: './node_modules/leaflet/dist/images/*',
          dest: 'asset/'
        }
      ]
    })
  ],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
  server: {
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd()),
        'README.md',
      ]
    }
  }
});
