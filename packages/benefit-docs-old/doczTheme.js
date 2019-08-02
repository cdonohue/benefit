import React from "react"
import { theme, ThemeConfig, DocPreview } from "docz"
import { ThemeProvider } from "emotion-theming"
import Menu from "./theme/Menu"

const Theme = () => (
  <ThemeConfig>
    {(config) => (
      <ThemeProvider theme={config}>
        <Menu />
        <DocPreview />
      </ThemeProvider>
    )}
  </ThemeConfig>
)

export default theme()(Theme)
