import sveltePreprocess from "svelte-preprocess";

const isDev = process.env.isDev === "true";
const isProduction = !isDev;
// console.log("[svelte.config.js] isDev: " + isDev + "\n");

let classNum = 0;

export default {
  // doc: https://github.com/sveltejs/svelte-preprocess
  preprocess: sveltePreprocess({
    sourceMap: isDev,
    scss: {
      prependData: `$primary-color: #2e3440;`,
    },
    replace: [
      [/process\.env\.(\w+)/g, (_, prop) => JSON.stringify(process.env[prop])],
      // [/dumpsterfireSettings/g, (_) => JSON.stringify({ test: true })],
    ],
    postcss: true,
  }),

  // Emit CSS as "files" for other plugins to process.
  emitCss: true,

  onwarn: (warning, handler) => {
    // e.g. don't warn on <marquee> elements, cos they're cool
    // if (warning.code === "a11y-distracting-elements") return;

    // let Rollup handle all other warnings normally
    handler(warning);
  },

  compilerOptions: {
    // If "dom", Svelte emits a JavaScript class for mounting to the DOM.
    // If "ssr", Svelte emits an object with a render method suitable for server-side rendering.
    // If false, no JavaScript or CSS is returned; just metadata.
    generate: "dom",

    // If "throw", Svelte throws when a compilation error occurred.
    // If "warn", Svelte will treat errors as warnings and add them to the warning report.
    errorMode: "throw",

    // If "strict", Svelte returns a variables report with only variables that are not globals nor internals.
    // If "full", Svelte returns a variables report with all detected variables.
    // If false, no variables report is returned.
    varsReport: "strict",

    // If true, causes extra code to be added to components that will perform runtime checks
    // and provide debugging information during development.
    dev: isDev,

    // If true, tells the compiler that you promise not to mutate any objects.
    // This allows it to be less conservative about checking whether values have changed.
    immutable: false,

    // If true when generating DOM code, enables the hydrate: true runtime option,
    // which allows a component to upgrade existing DOM rather than creating new DOM from scratch.
    // When generating SSR code, this adds markers to <head> elements so that hydration knows which to replace.
    hydratable: false,

    // If true, generates code that will work in IE9 and IE10, which don't support things like element.dataset.
    legacy: false,

    // If true, tells the compiler to generate a custom element constructor instead of a regular Svelte component.
    customElement: false,

    // A string that tells Svelte what tag name to register the custom element with.
    // It must be a lowercase alphanumeric string with at least one hyphen, e.g. "my-element".
    tag: null,

    // If true, styles will be included in the JavaScript class and injected at runtime.
    // It's recommended that you set this to false and use the CSS that is statically generated,
    // as it will result in smaller JavaScript bundles and better performance.
    css: false,

    // A function that takes a `{ hash, css, name, filename }` argument and returns the string that is used as a classname for scoped CSS.
    // It defaults to returning `svelte-${hash(css)}`
    cssHash: (e) => {
      // console.log(e);
      const _class_ = classNum.toString(36);
      // console.log("\n" + e.filename + ": " + classNum + ": " + _class_);
      classNum++;
      return `SC${_class_}`;
      // return `S-${e.hash(e.css)}`;
    },

    // If true, whitespace inside and between elements is kept as you typed it,
    // rather than removed or collapsed to a single space where possible.
    preserveWhitespace: false,
  },
};
