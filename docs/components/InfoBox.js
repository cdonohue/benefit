import React from "react"
import { Box } from "../../src"

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
      className={`bg-${color}-100 p-2 relative rounded-lg shadow overflow-hidden ${className}`}
    >
      {isDefault && (
        <Box
          className={`uppercase tracking-wider font-bold bg-${color}-200 text-xs text-${color}-500 px-2 rounded-bl py-px absolute pin-t pin-r`}
        >
          Default
        </Box>
      )}
      {caption && (
        <Box is="h4" className={`text-${color}-800 text-base font-bold`}>
          {caption}
        </Box>
      )}
      {pattern && (
        <Box is="code" className={`font-mono text-${color}-700 text-sm block`}>
          {pattern}
        </Box>
      )}
      <Box className="mt-2">{children}</Box>
    </Box>
  )
}
