export default function extendConfig(config, fn) {
  return function(defaultConfig) {
    return fn(config)
  }
}
