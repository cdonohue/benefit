const typescript = require("rollup-plugin-typescript2")
const babel = require("rollup-plugin-babel")
const { DEFAULT_EXTENSIONS } = require("@babel/core")
const resolve = require("rollup-plugin-node-resolve")
const commonjs = require("rollup-plugin-commonjs")
const replace = require("rollup-plugin-replace")
const sourceMaps = require("rollup-plugin-sourcemaps")
const { terser } = require("rollup-plugin-terser")

const babelOptions = () => ({
  exclude: "node_modules/**",
  extensions: [...DEFAULT_EXTENSIONS, "ts", "tsx"],
  passPerPreset: true, // @see https://babeljs.io/docs/en/options#passperpreset
  presets: [
    [
      require.resolve("@babel/preset-env"),
      {
        loose: true,
        modules: false,
        targets: undefined,
        exclude: ["transform-async-to-generator"],
      },
    ],
  ],
  plugins: [
    require.resolve("babel-plugin-annotate-pure-calls"),
    require.resolve("babel-plugin-dev-expression"),
    [
      require.resolve("babel-plugin-transform-async-to-promises"),
      { inlineHelpers: true, externalHelpers: true },
    ],
    [
      require.resolve("@babel/plugin-proposal-class-properties"),
      { loose: true },
    ],
  ].filter(Boolean),
})

module.exports = function createRollupConfig(format, options) {
  const { input, name, outputPath, target, env, minify } = options

  const shouldMinify = minify !== undefined ? minify : env === "production"
  const outputName = [
    `./dist/${name}`,
    format,
    env,
    shouldMinify ? "min" : "",
    "js",
  ]
    .filter(Boolean)
    .join(".")

  const output = {
    file: outputName,
    format,
    sourcemap: true,
    freeze: false,
    esModule: false,
    treeshake: {
      propertyReadSideEffects: false,
    },
    name,
    exports: "named",
  }

  return {
    external: ["react"],
    input,
    output,
    plugins: [
      resolve({
        mainFields: [
          "module",
          "main",
          options.target !== "node" ? "browser" : undefined,
        ].filter(Boolean),
      }),
      commonjs({
        include: /\/node_modules\//,
      }),
      typescript({
        typescript: require("typescript"),
        cacheRoot: `./build/.benefit_cache_${format}`,
        tsconfigDefaults: {
          compilerOptions: {
            sourceMap: true,
            declaration: true,
            jsx: "react",
          },
        },
        tsconfigOverride: {
          compilerOptions: {
            target: "esnext",
          },
        },
      }),
      babel(babelOptions()),
      env !== undefined &&
        replace({
          "process.env.NODE_ENV": JSON.stringify(env),
        }),
      sourceMaps(),
      shouldMinify &&
        terser({
          sourcemap: true,
          output: { comments: false },
          compress: {
            keep_infinity: true,
            pure_getters: true,
            passes: 10,
          },
          ecma: 5,
          toplevel: format === "cjs",
          warnings: true,
        }),
    ],
  }
}
