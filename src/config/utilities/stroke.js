export default function generate(theme) {
  const { stroke = {} } = theme

  return Object.keys(stroke).reduce((classNames, modifier) => {
    return {
      ...classNames,
      [`stroke-${modifier}`]: { stroke: stroke[modifier] },
    }
  }, {})
}
