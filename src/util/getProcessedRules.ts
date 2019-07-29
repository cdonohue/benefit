import stylis from "stylis"

export default function getProcessedRules(
  selector: string,
  cssRules: string
): string {
  return stylis(selector.replace(":", "\\:").replace("/", "\\/"), cssRules)
}
