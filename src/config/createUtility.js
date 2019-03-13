export default function createUtility(className, declarations) {
  return {
    [className]: declarations,
  }
}
