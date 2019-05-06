import React from "react"
import { Box } from "../../dist/react.js"

export default function LayoutBox({
  color = "gray",
  caption,
  children,
  pattern,
  isDefault,
  className,
}) {
  return (
    <Box
      className={`bg-white p-4 relative rounded-lg shadow overflow-hidden ${className}`}
    >
      {isDefault && (
        <Box
          className={`uppercase font-semibold bg-${color}-100 text-xs text-${color}-500 p-1 rounded-bl absolute pin-t pin-r`}
        >
          Default
        </Box>
      )}
      {caption && (
        <Box
          is="h4"
          className={`text-${color}-800 text-base font-semibold mb-1`}
        >
          {caption}
        </Box>
      )}
      {pattern && (
        <Box is="code" className={`font-mono text-${color}-500 text-sm block`}>
          {pattern}
        </Box>
      )}
      <Box className="mt-2">{children}</Box>
    </Box>
  )
}
