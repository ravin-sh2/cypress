const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "82bqcn",
  e2e: {
    baseUrl: 'https://r0979060-realbeans.myshopify.com',
    specPattern: 'e2e/**/*.spec.js',
  },
});