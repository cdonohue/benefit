import React from "react"
import { css as processCss, jsx } from "@emotion/core"
import { ConfigConsumer } from "../ConfigContext"

function Box(props) {
  const {
    children,
    className = "",
    css = null,
    h = jsx,
    important,
    is = "div",
    ...remainingProps
  } = props

  return (
    <ConfigConsumer>
      {({ getDeclarationsForClasses }) => {
        if (className) {
          const { declarations, ignoredClasses } = getDeclarationsForClasses(
            className,
            important
          )
          const processedDeclarations = declarations.map(
            (declaration) => processCss`${declaration}`
          )

          if (css) {
            processedDeclarations.push(css)
          }

          remainingProps.css = processedDeclarations
          remainingProps.className = ignoredClasses.join(" ")
        }

        return h(is, remainingProps, ...children)
      }}
    </ConfigConsumer>
  )
}

export default Box
