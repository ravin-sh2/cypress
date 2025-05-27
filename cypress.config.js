const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "82bqcn",
  e2e: {
    baseUrl: 'https://r0979060-realbeans.myshopify.com',
    specPattern: 'e2e/**/*.spec.js',
    // Add additional configuration for more resilient tests
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 30000,
    viewportWidth: 1280,
    viewportHeight: 800,
    retries: {
      runMode: 2,
      openMode: 0
    },
    experimentalWebKitSupport: true,
    // Disable screenshots on failure to avoid issues in CI
    screenshotOnRunFailure: true
  },
});