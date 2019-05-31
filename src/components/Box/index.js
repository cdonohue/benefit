import React from "react"

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
      {({ styleWith = () => className }) => {
        if (className) {
          remainingProps.className = `${styleWith(className, !!important)}`.trim()
        }

        return h(is, remainingProps, ...children)
      }}
    </ConfigConsumer>
  )
}

export default Box
