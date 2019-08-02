export default {
  title: "benefit",
  description: "5kB utility CSS library that is compatible with TailwindCSS",
  theme: "theme/index",
  modifyBundlerConfig: (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    })

    return config
  },
}
