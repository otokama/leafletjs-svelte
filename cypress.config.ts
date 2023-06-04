import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "4dryou",
  e2e: {
    "baseUrl": "http://localhost:8080",
    "fixturesFolder": false,
    "supportFile": false,
    "screenshotOnRunFailure": false,
    "video": false
  }
});
