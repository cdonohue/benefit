import React from "react"
import { Box } from "../../../dist/react.js"

export default function Container({ children, className }) {
  return <Box className={`max-w-5xl mx-auto ${className}`}>{children}</Box>
}
