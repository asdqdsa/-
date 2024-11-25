import autoprefixer from "autoprefixer";
import postcssNested from "postcss-nested";

export default {
  plugins: {
    autoprefixer: {},
    "postcss-nested": {},
    // "postcss-csso": {
    //   restructure: false, // disable aggressive restructuring
    //   comments: true, // remove all comments
    // },
    // "@fullhuman/postcss-purgecss": {
    //   content: ["./index.html", "./**/*.{js,ts,jsx,tsx,vue}"], // adjust to match your files
    //   defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [], // regex to extract class names
    // },
  },
};
