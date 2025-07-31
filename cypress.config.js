const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
		experimentalSessionAndOrigin: true,
		viewportWidth: 1920,
    viewportHeight: 1080,
		chromeWebSecurity: false,
		experimentalWebKitSupport : true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
