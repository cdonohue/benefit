import React from "react"
import { Box, css, keyframes } from "benefit-react"

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export default function Grid({
  children,
  className,
  minWidth = "1fr",
  stagger = true,
}) {
  return (
    <Box
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, minmax(${minWidth}, 1fr))`,
        gridGap: "1rem",
      }}
      className={`mb-4 ${className}`}
    >
      {children}
    </Box>
  )
}
