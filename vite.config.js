import { defineConfig, normalizePath } from "vite";
// import Obfuscator from "rollup-plugin-obfuscator";
import JavaScriptObfuscator from "vite-plugin-javascript-obfuscator";
// import purgecss from "@fullhuman/postcss-purgecss";

import postcssCsso from "postcss-csso";

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
    // purgecss({
    //   content: ["./index.html", "./**/*.{js,ts,jsx,tsx,vue}"],
    //   defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    // }),
    postcssCsso({ restructure: true, comments: true }),
  ],

  base: "/x/",
  build: {
    assetsInclude: ["**/*.woff", "**/*.woff2", "**/*.ttf"],
    sourcemap: false, // Enables source maps for prod build
    minify: true, // minification for prod build
    cssCodeSplit: true, // Enables CSS code splitting
    // outDir: "dist",
  },
});
