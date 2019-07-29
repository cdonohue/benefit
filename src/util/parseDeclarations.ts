export function formatDeclaration(
  property: string,
  value: string,
  isImportant: boolean = false
): string {
  const declaration = `${property}: ${value}`
  return `${declaration}${isImportant ? " !important" : ""};`
}

export default function parseDeclarations(
  declarations: any = {},
  isImportant: boolean = false
): Array<string> {
  return Object.keys(declarations).map(property => {
    if (property.match(/[&@]/)) {
      // Assume we have a nested selector
      const nestedDeclarations = parseDeclarations(
        declarations[property],
        isImportant
      )

      return `${property} { ${nestedDeclarations.join("")} }`
    }

    return formatDeclaration(property, declarations[property], isImportant)
  })
}
