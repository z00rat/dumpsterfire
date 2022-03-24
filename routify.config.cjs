const isDev = process.env.isDev === "true";
const isProduction = !isDev;
console.log("[routify.config.js] isDev: " + isDev + "\n");

// https://www.routify.dev/docs/config/build
module.exports = {
  debug: isDev,
  pages: "src/pages",
  // ignore: "",
  dynamicImports: true,
  singleBuild: false,
  noHashScroll: false,
  // childProcess: false,
  // extensions: ["html", "svelte", "md", "svx"],
  routifyDir: ".routify",
};
