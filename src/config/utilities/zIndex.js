export default function generate(theme) {
  const { zIndex = {} } = theme

  return Object.keys(zIndex).reduce((classes, modifier) => {
    return {
      ...classes,
      [`z-${modifier}`]: { "z-index": zIndex[modifier] },
    }
  }, {})
}
