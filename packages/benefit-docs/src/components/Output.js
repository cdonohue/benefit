/** @jsx jsx */
import { useEffect } from "react"
import { Code } from "docz"
import { css } from "emotion"
import { jsx } from "benefit-react"
import benefit from "benefit"
import { formatDeclaration } from "benefit"
import Grid from "./Grid"
import Icon from "./Icons"
import BrowserBox from "./BrowserBox"

const { utilities, styleWith } = benefit()

export default function Output({
  utilityClasses = ["bg-blue-500", "text-white", "p-8"],
}) {
  const styles = utilityClasses.map((className) => {
    const declarations = utilities[className]

    const rules = Object.keys(declarations).map((property) =>
      formatDeclaration(property, declarations[property])
    )

    return {
      selector: css`
        ${rules}
      `,
      rules,
    }
  })

  return (
    <div>
      <div className="bg-white rounded shadow-xl overflow-hidden">
        <div className="bg-gray-700 text-gray-100 items-center text-sm justify-center flex p-4">
          <div className="font-mono">
            {"<div class='"}
            <div className="bg-white inline-block px-2 py-1 rounded-sm text-gray-800">
              {utilityClasses.join(" ")}
            </div>
            {"'>...<div>"}
          </div>
        </div>
        <div className="text-gray-800 p-4">
          Utility classes are parsed and converted into css declarations.
        </div>
      </div>
      <div className="flex flex-auto justify-center text-gray-800 py-4">
        <Icon name="arrow-down" />
      </div>
      <div className="bg-white rounded shadow-xl overflow-hidden">
        <Grid minWidth="200px" className="p-4 bg-gray-700 mb-0" important>
          {styles.map((block, i) => (
            <div
              key={`ouput-declaration-${i + 1}`}
              style={{ fontSize: "10px" }}
              className="bg-white font-mono p-2 rounded shadow"
            >
              <pre className="p-0">
                {block.rules.map((rule, j) => (
                  <code
                    key={`ouput-declaration-line-${j + 1}`}
                    className="block py-1"
                  >
                    {rule}
                  </code>
                ))}
              </pre>
            </div>
          ))}
        </Grid>
        <div className="text-gray-800 p-4">
          These converted declarations are inserted into the DOM and referenced
          by any elements that need the styles.
        </div>
      </div>
      <div>
        <div className="flex flex-auto justify-center text-gray-800 py-4">
          <Icon name="arrow-down" />
        </div>
        <div className={utilityClasses.join(" ")}>
          Lorem ipsum dolor sit amet, pro ad iudico disputationi, stet unum sale
          ei sea, an stet populo nominati sed. Eos unum munere voluptatum ex,
          ludus vituperata ad per, pri diam aeque aliquip ut. Dolores persecuti
          conceptam ei vis, duo ne clita saepe comprehensam, id mel ipsum novum.
          Duo eu reque mollis aperiri, pro discere vivendo id, ea vel scripta
          deleniti. Vel alii moderatius accommodare no, mel ex fastidii
          gloriatur. Sit ea recteque contentiones.
        </div>
      </div>
    </div>
  )
}
