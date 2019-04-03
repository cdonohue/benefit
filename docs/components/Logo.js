import React from "react"
import { Box } from "../../dist/benefit.js"
import svgUrl from "../benefit-logo.svg"

export default function BenefitLogo({ className }) {
  return <Box is="img" className={className} src={svgUrl} alt="logo" />
}
