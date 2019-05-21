/** @jsx jsx */
import polychrome from "polychrome"
import { jsx } from "../../dist/react"

export default function Color({ className, name, colors }) {
  const baseContrast = polychrome(colors[400])
    .contrast(colors[900], colors[100])
    .hex()
  return (
    <div
      className={`rounded overflow-hidden shadow font-mono flex-grow ${className}`}
    >
      <div
        style={{ color: baseContrast }}
        className={`text-xs px-2 py-1 flex shadow relative bg-${name}-400`}
      >
        {name}-{"{level}"}
      </div>
      <div className="flex">
        {Object.keys(colors).map((shade) => {
          const shadeContrast = polychrome(colors[shade])
            .contrast()
            .hex()
          return (
            <div
              style={{ color: shadeContrast }}
              className={`px-2 py-1 font-thin text-center flex-grow text-xs bg-${name}-${shade}`}
            >
              {shade}
            </div>
          )
        })}
      </div>
    </div>
  )
}
