import { jsx as jsxEmotion } from "emotion"
import React from "react"
import Box from "./components/Box"

function jsx(type, props, ...children) {
  return (
    <Box is={type} {...props}>
      {children}
    </Box>
  )
}

export default jsx
