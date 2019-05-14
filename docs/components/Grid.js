import React from "react"
import { Box } from "../../dist/react.js"

export default function Grid({ children, className, minWidth = "1fr" }) {
  return (
    <Box
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, minmax(${minWidth}, 1fr))`,
        gridGap: "1rem",
      }}
      className={className}
    >
      {children}
    </Box>
  )
}
