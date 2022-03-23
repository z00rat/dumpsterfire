import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import Inspect from "vite-plugin-inspect";

const isDev = process.env.isDev === "true";
const isProduction = !isDev;
console.log("isDev: " + isDev + "\n");

// https://vitejs.dev/config/
/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  root: "./",
  base: "/",
  // mode: ,
  // define:
  plugins: [Inspect(), svelte()],
  // publicDir: "./public",
  cacheDir: "./.tmp/vite",
  resolve: {
    // alias: {
    //   // https://github.com/rollup/plugins/tree/master/packages/alias
    //   entries: {},
    // },
    // dedupe:
    // conditions:
    // mainFields:
    // extensions:
    // preserveSymlinks: false,
  },
  // css: {
  //   // modules:
  //   // postcss:
  //   // preprocessorOptions:
  // },
  json: {
    namedExports: true,
    stringify: false, // Enabling this disables named imports.
  },
  esbuild: {},
  // assetsInclude:[],
  // logLevel: "info",
  clearScreen: false,
  // envDir: "./",
  // envPrefix: "VITE_",
  server: {
    host: true,
    port: 8888,
    strictPort: isProduction,
    https: isProduction,
    open: false,
    // proxy:{},
    // cors: true,
    // force:
    // hmr:
    // watch:
    // middlewareMode:
    fs: {
      strict: true,
      // allow: [],
      // deny: [".env", ".env.*", "*.{pem,crt}"],
    },
    // origin:
  },
  build: {
    // target: "modules",
    // polyfillModulePreload: true,
    outDir: "dist",
    assetsDir: "----",
    assetsInlineLimit: 4096,
    // cssCodeSplit: true,
    // cssTarget: // the same as build.target
    sourcemap: isDev,
    rollupOptions: {
      // https://rollupjs.org/guide/en/#big-list-of-options
      // output: {
      //   banner: "/* source code: https://github.com/z00rat/dumpsterfire/tree/dev */",
      //   footer: "/* follow me on Twitter! @ratfromthezoo */",
      // },
      treeshake: true,
    },
    // commonjsOptions: {}, // https://github.com/rollup/plugins/tree/master/packages/commonjs
    // dynamicImportVarsOptions: {}, // https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars
    // lib:
    manifest: true,
    ssrManifest: true, // https://vitejs.dev/guide/ssr.html
    minify: isDev ? false : "esbuild", // "esbuild" or "terser"
    // terserOptions: {}, // https://terser.org/docs/api-reference#minify-options
    // write: true,
    // emptyOutDir: true,
    // reportCompressedSize: true,
    chunkSizeWarningLimit: 512,
    // watch:
  },
  preview: {
    host: true,
    port: 8887,
    strictPort: isProduction,
    https: isProduction,
    open: false,
    // proxy:{},
    // cors: true,
  },
  // optimizeDeps: {
  //   // entries:
  //   // exclude:
  //   // include:
  //   // esbuildOptions:
  // },
  // ssr: {
  //   // external:
  //   // noExternal:
  //   // target: "node",
  // },
  worker: {
    format: "iife",
    // plugins: [],
    // rollupOptions: {},
  },
});
