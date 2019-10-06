import { injectPreflight } from "benefit"

export default function Preflight({ selector = "" }) {
  injectPreflight(selector)
  return null
}
