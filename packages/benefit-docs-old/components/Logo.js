import React from "react"
import { Box } from "benefit-react"
import svgUrl from "../benefit-logo.svg"
import svgUrlDark from "../benefit-logo-dark.svg"

export default function BenefitLogo({ className, isDark }) {
  return (
    <Box
      is="img"
      className={className}
      src={isDark ? svgUrlDark : svgUrl}
      alt="logo"
    />
  )
}
