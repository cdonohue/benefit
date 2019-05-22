/** @jsx jsx */
import polychrome from "polychrome"
import { jsx } from "../../dist/react"

export default function Color({ className, name, colors }) {
  if (name === "default") return <div />

  const isSingleColor = typeof colors === "string"
  let baseColor = isSingleColor ? colors : colors[400]
  let isTransparent = false

  if (isSingleColor && baseColor === "transparent") {
    baseColor = "#fff"
    isTransparent = true
  }

  const baseContrast = polychrome(baseColor)
    .contrast()
    .hex()
  return (
    <div
      className={`rounded overflow-hidden shadow font-mono flex-grow ${className}`}
    >
      <div
        style={{
          color: baseContrast,
          background: isTransparent
            ? "repeating-linear-gradient(-45deg,#f5f5f5,#f5f5f5 10px,#e7e7e7 10px,#e7e7e7 20px)"
            : baseColor,
        }}
        className="text-xs p-2 flex shadow h-8 relative"
      >
        {name}
        {!isSingleColor && "-{level}"}
      </div>
      {!isSingleColor && (
        <div className="flex">
          {Object.keys(colors).map((shade) => {
            const shadeContrast = polychrome(colors[shade])
              .contrast()
              .hex()
            return (
              <div
                style={{ color: shadeContrast, fontSize: "10px" }}
                className={`p-1 font-thin text-center flex-grow text-xs bg-${name}-${shade}`}
              >
                {shade}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
