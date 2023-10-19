const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7z7683',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
