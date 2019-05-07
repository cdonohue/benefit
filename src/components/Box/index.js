import React from "react"

import { ConfigConsumer } from "../ConfigContext"

function Box(props) {
  const {
    children,
    className = "",
    important,
    is = "div",
    ...remainingProps
  } = props

  return (
    <ConfigConsumer>
      {({ styleWith = () => "" }) => {
        remainingProps.className = `${styleWith(className, !!important)}`.trim()

        return React.createElement(is, remainingProps, children)
      }}
    </ConfigConsumer>
  )
}

export default Box
