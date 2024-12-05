const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature", // Caminho para os arquivos .feature
    supportFile: "cypress/support/index.js", // Arquivo de suporte
    setupNodeEvents(on, config) {
      const options = browserify.defaultOptions;
      options.typescript = require.resolve("typescript");

      on("file:preprocessor", cucumber(options));
      return config;
    },
    stepDefinitions: "cypress/e2e/steps", // Caminho para os arquivos de steps
  },
});
