export default function generateReset(theme) {
  return {
    base: {
      margin: "0",
      padding: "0",
      "border-width": "0",
      "border-style": "solid",
      "border-color":
        (theme && theme.borderColor && theme.borderColor.default) || "black",
      color: "inherit",
      "font-family": "inherit",
      "font-size": "inherit",
      "font-weight": "inherit",
      "text-decoration-color": "currentColor",
      "line-height": "inherit",
      "vertical-align": "baseline",
      "box-sizing": "border-box",
    },
  }
}
