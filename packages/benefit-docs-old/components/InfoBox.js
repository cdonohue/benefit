import React from "react"
import { Box } from "benefit-react"

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
      className={`bg-white p-4 relative rounded shadow overflow-hidden ${className}`}
    >
      {isDefault && (
        <Box
          className={`uppercase font-semibold bg-${color}-200 text-xs text-${color}-600 p-1 rounded-bl absolute top-0 right-0`}
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
        <Box is="code" className="font-mono text-blue-500 text-sm block">
          {pattern}
        </Box>
      )}
      <Box className="mt-2">{children}</Box>
    </Box>
  )
}
