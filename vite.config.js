import { defineConfig, normalizePath } from "vite";
// import Obfuscator from "rollup-plugin-obfuscator";
import JavaScriptObfuscator from "vite-plugin-javascript-obfuscator";

export default defineConfig({
  plugins: [
    // {
    //   ...Obfuscator({
    //     compact: true, // Minify the code
    //     controlFlowFlattening: true, // Makes code flow harder to read
    //     deadCodeInjection: true, // Adds fake code to confuse analysis
    //     stringArray: true, // Converts strings into array references
    //   }),
    // },
    JavaScriptObfuscator({
      // Obfuscation settings
      compact: true,
      controlFlowFlattening: true,
      deadCodeInjection: true,
      stringArray: true,
      stringArrayThreshold: 0.75,
    }),
  ],

  base: "/asdqdsa/",
  build: {
    assetsInclude: ["**/*.woff", "**/*.woff2", "**/*.ttf"],
    sourcemap: false, // Enables source maps for prod build
    minify: true, // Disable minification for prod build
    cssCodeSplit: true, // Enables CSS code splitting
  },
});
