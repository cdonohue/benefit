import React from "react"
import { jsx } from "@emotion/core"
import Box from "./components/Box"

export default function h(type, props, ...children) {
  return (
    <Box h={jsx} is={type} {...props}>
      {children}
    </Box>
  )
}
