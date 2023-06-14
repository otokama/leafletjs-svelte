import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { searchForWorkspaceRoot } from 'vite';

export default defineConfig({
	plugins: [
    sveltekit()
  ],
  server: {
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd()),
        'README.md',
      ]
    }
  }
});
