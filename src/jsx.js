import React from "react"
import { jsx } from "@emotion/core"
import Box from "./components/Box"

export default function h(type, props, ...children) {
  const { className = null, css = null } = props

  if (!className && !css) {
    return React.createElement(type, props, ...children)
  }

  return (
    <Box h={jsx} is={type} {...props}>
      {children}
    </Box>
  )
}
