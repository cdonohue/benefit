import React from "react"
import { theme, ThemeConfig, DocPreview } from "docz"
import { ThemeProvider } from "emotion-theming"

import Menu from "./Menu"

const Theme = () => (
  <ThemeConfig>
    {(config) => (
      <div>
        <Menu />
        <DocPreview />
      </div>
    )}
  </ThemeConfig>
)

const themeConfig = {
  colors: {
    primary: "tomato",
    secondary: "khaki",
    gray: "lightslategray",
  },
}

export default theme(themeConfig)(Theme)
