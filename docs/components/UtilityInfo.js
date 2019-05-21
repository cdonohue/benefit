/** @jsx jsx */
import { useMenus, Link } from "docz"
import { css } from "emotion"
import { jsx, ConfigConsumer } from "../../dist/react.js"

import ConfigPropertyList from "./ConfigPropertyList"
import Icon from "./Icons"
import Grid from "./Grid"

const styledLink = css`
  transition: 0.1s ease-in-out;
`

export default function UtilityInfo({ className, pattern, themeProperty }) {
  return (
    <div className={`overflow-hidden bg-white rounded shadow-lg ${className}`}>
      <div className="p-4 bg-blue-400 text-white">
        <code className="font-mono inline-block px-2 py-1 rounded bg-blue-500">
          {pattern.split("").map((char) => (
            <span
              className={`${
                char.match(/[{}|?]/) ? "text-blue-300" : "text-white"
              }`}
            >
              {char}
            </span>
          ))}
        </code>
      </div>
      {themeProperty && (
        <div>
          <div className="p-4">
            Generated from{" "}
            <code className="font-mono inline-block px-2 py-px rounded bg-gray-300">
              theme.{themeProperty}
            </code>
          </div>
          <div className="p-4 border-t">
            <ConfigPropertyList property={themeProperty} />
          </div>
        </div>
      )}
    </div>
  )
}
