import pkg from "./package.json"
import typescript from "rollup-plugin-typescript2"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import replace from "rollup-plugin-replace"
import { terser } from "rollup-plugin-terser"

const outputOptions = {
  sourcemap: true,
  freeze: false,
  esModule: false,
  treeshake: {
    propertyReadSideEffects: false,
  },
  name: pkg.name,
  globals: { react: "React", "react-native": "ReactNative" },
}

export default {
  input: "./src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      ...outputOptions,
    },
    {
      file: pkg["umd:main"],
      format: "umd",
      ...outputOptions,
    },
    {
      file: pkg.module,
      format: "esm",
      ...outputOptions,
    },
  ],
  plugins: [
    typescript({
      typescript: require("typescript"),
    }),
    resolve(),
    commonjs(),
    replace({
      //enable find-replacing variable in JS code to use ENV varibale for conditional code
      ENV: JSON.stringify(process.env.NODE_ENV || "development"), // key = var name, value = replace
    }),
    process.env.NODE_ENV === "production" &&
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
