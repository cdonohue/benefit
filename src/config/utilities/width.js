export default function generate(theme) {
  const { maxWidth = {}, minWidth = {}, width = {} } = theme

  return {
    ...Object.keys(width).reduce((classes, modifier) => {
      return {
        ...classes,
        [`w-${modifier}`]: { width: width[modifier] },
      }
    }, {}),
    ...Object.keys(maxWidth).reduce((classes, modifier) => {
      return {
        ...classes,
        [`max-w-${modifier}`]: { "max-width": maxWidth[modifier] },
      }
    }, {}),
    ...Object.keys(minWidth).reduce((classes, modifier) => {
      return {
        ...classes,
        [`min-w-${modifier}`]: { "min-width": minWidth[modifier] },
      }
    }, {}),
  }
}
