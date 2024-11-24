import obfuscator from "rollup-plugin-obfuscator";

export default {
  input: "index.html", // Your entry file
  output: {
    file: "dist/bundle.js",
    format: "iife", // or 'umd'/'esm'
  },
  plugins: [
    obfuscator({
      compact: true,
      controlFlowFlattening: true,
      deadCodeInjection: true,
      stringArray: true,
    }),
  ],
};
