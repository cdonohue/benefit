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
    .contrast(colors[900] || "#000", colors[100] || "#fff")
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
        className="text-xs px-2 py-1 flex shadow h-8 relative"
      />
      {!isSingleColor && (
        <div className="flex">
          {Object.keys(colors).map((shade) => {
            const shadeContrast = polychrome(colors[shade])
              .contrast()
              .hex()
            return (
              <div
                style={{ color: shadeContrast, fontSize: "6px" }}
                className={`p-1 font-thin text-center flex-grow text-xs bg-${name}-${shade}`}
              >
                {shade}
              </div>
            )
          })}
        </div>
      )}
      <div className="text-xs px-2 py-1 flex text-gray-700 shadow relative bg-white">
        {name}
        {!isSingleColor && "-{level}"}
      </div>
    </div>
  )
}
