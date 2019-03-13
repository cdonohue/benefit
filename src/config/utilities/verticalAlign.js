const verticalAlignments = [
  "baseline",
  "top",
  "middle",
  "bottom",
  "text-top",
  "text-bottom",
]

export default function generate() {
  return verticalAlignments.reduce((classNames, modifier) => {
    return {
      ...classNames,
      [`align-${modifier}`]: {
        "vertical-align": verticalAlignments[modifier],
      },
    }
  }, {})
}
