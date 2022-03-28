const isDev = process.env.isDev === "true";
const isProduction = !isDev;
// console.log("[postcss.config.js] isDev: " + isDev + "\n");

module.exports = {
  // syntax: "postcss-scss",
  // parser: "postcss-scss",
  map: isDev,
  plugins: [
    /**
     * i dont use it
     * but i like the idea
     * @see https://github.com/madeleineostoja/postcss-alias
     */
    require("postcss-alias"),

    /**
     * A PostCSS plugin to keep CSS grids stupidly simple
     * @see https://github.com/sylvainpolletvillard/postcss-grid-kiss
     */
    require("postcss-grid-kiss")({
      optimize: true,
    }),

    /**
     * for to make css looks the same in every browser
     * @see https://github.com/csstools/postcss-normalize
     * @code add those 2 line to enable this plugin for that file
     * ```
     * @import-normalize;
     * @import-sanitize;
     * ```
     */
    require("postcss-normalize"),

    /**
     * import / require css file into another css
     * very good one even tho i dont use it much
     * @see https://github.com/postcss/postcss-import
     */
    require("postcss-import"),

    /**
     * for more easings
     * @see https://easings.net/
     * @see https://github.com/postcss/postcss-easings
     */
    require("postcss-easings"),

    /**
     * ! at this point every thing i wrote for style become normal css
     * ! after this those css will be transform for smaller size and better support for browsers
     */

    /**
     * PostCSS plugin that tries to fix all of flexbug's issues
     * @see https://github.com/philipwalton/flexbugs
     * @see https://github.com/luisrudge/postcss-flexbugs-fixes
     */
    require("postcss-flexbugs-fixes"),

    /**
     * from: https://cssnano.co/
     * @see https://www.npmjs.com/package/postcss-convert-values
     * @see https://www.npmjs.com/package/postcss-discard-empty
     * @see https://www.npmjs.com/package/postcss-minify-gradients
     */
    require("postcss-convert-values")({
      length: true,
      time: true,
      angle: true,
      precision: 2,
    }),
    require("postcss-discard-empty"),
    require("postcss-minify-gradients"),

    /**
     * from: https://cssnano.co/
     * normalize css
     * @see https://www.npmjs.com/package/postcss-normalize-charset
     * @see https://www.npmjs.com/package/postcss-normalize-display-values
     * @see https://www.npmjs.com/package/postcss-normalize-positions
     * @see https://www.npmjs.com/package/postcss-normalize-repeat-style
     * @see https://www.npmjs.com/package/postcss-normalize-timing-functions
     * @see https://www.npmjs.com/package/postcss-normalize-unicode
     * @see https://www.npmjs.com/package/postcss-normalize-url
     * @see https://www.npmjs.com/package/postcss-normalize-whitespace
     * @see https://www.npmjs.com/package/postcss-normalize-string
     */
    require("postcss-normalize-charset"),
    require("postcss-normalize-display-values"),
    require("postcss-normalize-positions"),
    require("postcss-normalize-repeat-style"),
    require("postcss-normalize-timing-functions"),
    require("postcss-normalize-unicode"),
    require("postcss-normalize-url"),
    require("postcss-normalize-whitespace"),
    require("postcss-normalize-string")({ preferredQuote: "double" }),

    /**
     * from: https://cssnano.co/
     * @see https://www.npmjs.com/package/postcss-reduce-initial
     * @see https://www.npmjs.com/package/postcss-reduce-transforms
     * @see https://www.npmjs.com/package/postcss-svgo
     */
    require("postcss-reduce-initial"),
    require("postcss-reduce-transforms"),
    require("postcss-svgo"),

    // /**
    //  * control z index value
    //  * @see https://www.npmjs.com/package/postcss-zindex
    //  */
    // require("postcss-zindex"),

    /**
     * for better keyboard support
     * @see https://github.com/postcss/postcss-focus
     */
    require("postcss-focus"),

    /**
     * PostCSS Preset Env lets you convert modern CSS into something most browsers can understand,
     * determining the polyfills you need based on your targeted browsers or runtime environments.
     * @see https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env
     */
    // require("postcss-preset-env")({
    //   stage: 0,
    //   autoprefixer: false,
    // }),

    /**
     * automatically add vendor prefixes and make css available for different browser
     * '.browserslistrc' is used for setting which browser's i wanna make my css available for
     * @test supported browsers `pnpx browserslist`
     * @test kinda useful info `pnpx autoprefixer --info`
     * @see https://github.com/postcss/autoprefixer
     */
    require("autoprefixer")({
      cascade: true,
      add: true,
      remove: true,
      supports: true,
      ignoreUnknownVersions: true,
    }),

    ...(isProduction
      ? [
          // /**
          //  * to make css small
          //  * @see https://github.com/cssnano/cssnano
          //  */
          // cssnano: { preset: "advanced" },

          /**
           * sort css
           * @see https://github.com/hudochenkov/postcss-sorting
           */
          require("postcss-sorting")({
            order: [
              "custom-properties",
              "dollar-variables",
              "declarations",
              "at-rules",
              "rules",
            ],
            "properties-order": "alphabetical",
            "unspecified-properties-position": "bottom",
          }),

          /**
           * its a much better css minifier
           * @see https://github.com/lahmatiy/postcss-csso
           */
          require("postcss-csso")({
            restructure: true,
          }),
        ]
      : []),

    /**
     * report if any plugin wanna report something
     * @see https://github.com/postcss/postcss-reporter
     */
    require("postcss-reporter")({
      // clearReportedMessages: true,
      // clearAllMessages: true,
      formatter: function (input) {
        return (
          input.source + " produced " + input.messages.length + " messages"
        );
      },
    }),
  ],
};
