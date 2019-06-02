import React from "react"
import Box from "./components/Box"

export default function h(type, props, ...children) {
  return (
    <Box is={type} {...props}>
      {children}
    </Box>
  )
}
