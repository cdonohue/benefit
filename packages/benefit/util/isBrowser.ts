export default function isBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined"
}
