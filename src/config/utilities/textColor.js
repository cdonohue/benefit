export default function generate(theme) {
  const { textColor = {} } = theme

  return Object.keys(textColor).reduce((classNames, modifier) => {
    return {
      ...classNames,
      [`text-${modifier}`]: { color: textColor[modifier] },
    }
  }, {})
}
