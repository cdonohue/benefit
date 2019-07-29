export default function css(strings: TemplateStringsArray, ...values: any[]) {
  return strings
    .map((str: string, i: number) => `${str}${values[i] || ""}`)
    .join("")
}
