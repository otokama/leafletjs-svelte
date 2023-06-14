import { defineConfig } from "cypress";
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  projectId: "d1gtag",

  e2e: {
    baseUrl: "http://localhost:8080",
    fixturesFolder: false,
    supportFile: false,
    screenshotOnRunFailure: false,
    video: false,
    specPattern: "cypress/e2e/**.cy.ts"
  },

  component: {
    screenshotOnRunFailure: false,
    video: false,
    fixturesFolder: false,
    devServer: {
      framework: "svelte",
      bundler: "vite",
      viteConfig: () => {
        return {
          plugins: [svelte()]
        }
      }
    },
    specPattern: "cypress/component/**.cy.ts"
  },
});
