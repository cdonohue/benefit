import stylis from "stylis"

const processor = new stylis({
  keyframe: false,
})

export default function getProcessedRules(
  selector: string,
  cssRules: string
): string {
  return processor(selector.replace(":", "\\:").replace("/", "\\/"), cssRules)
}
