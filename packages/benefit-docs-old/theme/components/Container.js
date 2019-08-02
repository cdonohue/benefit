import React from "react"
import { Box } from "benefit-react"

export default function Container({ children, className }) {
  return <Box className={`max-w-5xl mx-auto ${className}`}>{children}</Box>
}
