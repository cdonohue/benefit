import { preflight, preflightStyles } from "benefit"

export default function Preflight() {
  preflight`
    ${preflightStyles}
  `
  return null
}
