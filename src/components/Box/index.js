import React from "react"
import { css, jsx } from "@emotion/core"
import { ConfigConsumer } from "../ConfigContext"

function Box(props) {
  const {
    children,
    className = null,
    h = React.createElement,
    important,
    is = "div",
    ...remainingProps
  } = props

  return (
    <ConfigConsumer>
      {({ getDeclarationsForClasses, processDeclarations }) => {
        if (className) {
          const { declarations, ignoredClasses } = getDeclarationsForClasses(
            className
          )
          const processedDeclarations = processDeclarations(declarations, css)

          remainingProps.css = processedDeclarations
          remainingProps.className = ignoredClasses.join(" ")
        }

        return jsx(is, remainingProps, ...children)
      }}
    </ConfigConsumer>
  )
}

export default Box
