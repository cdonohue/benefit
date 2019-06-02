import React from "react"
import { css as processCss } from "@emotion/core"
import { ConfigConsumer } from "../ConfigContext"

function Box(props) {
  const {
    children,
    className = null,
    css = null,
    h = React.createElement,
    important,
    is = "div",
    ...remainingProps
  } = props

  return (
    <ConfigConsumer>
      {({ getDeclarationsForClasses, processDeclarations }) => {
        const { declarations, ignoredClasses } = getDeclarationsForClasses(
          className
        )
        const processedDeclarations = processDeclarations(
          declarations,
          (declaration) => processCss`${declaration}`
        )

        if (css) {
          processedDeclarations.push(css)
        }

        remainingProps.css = processedDeclarations
        remainingProps.className = ignoredClasses.join(" ")

        return h(is, remainingProps, ...children)
      }}
    </ConfigConsumer>
  )
}

export default Box
