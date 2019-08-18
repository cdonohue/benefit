/** @jsx jsx */
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import React, { useState } from "react"
import {
  jsx,
  css,
  ConfigConsumer,
  parseDeclarations,
  keyframes,
} from "benefit-react"
import Icon from "./Icon"

const pulse = keyframes`
  50% {
    background-color: white;
  }
`

const smooth = css`
  transition: 0.15s ease-in-out;
`

export default function Playground(props) {
  const {
    utilities = [],
    hiddenUtilities = [],
    content = "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
  } = props
  const [utilityClasses, setUtilityClasses] = useState(utilities)
  const [currentInput, setCurrentInput] = useState("")

  return (
    <div
      className={`p-4 pb-2 my-4 bg-gray-800 text-gray-400 focus-within:bg-gray-100 focus-within:shadow-outline focus-within:text-gray-800 text-sm ${smooth} rounded shadow`}
    >
      <div className="rounded-sm overflow-hidden shadow">
        <div className="bg-gray-400 flex p-2 items-center">
          <div className="bg-gray-700 w-2 h-2 mr-1 rounded-full" />
          <div className="bg-gray-500 w-2 h-2 mr-1 rounded-full" />
          <div className="bg-gray-300 w-2 h-2 mr-2 rounded-full" />
          <div className="bg-white px-1 py-px w-full flex-1 rounded-sm text-xs">
            {"http://localhost:3000"}
          </div>
        </div>
        <div className="p-4 bg-white text-black">
          <div
            className={`${utilityClasses.join(
              " "
            )} ${smooth} ${hiddenUtilities.join(" ")}`}
          >
            {content}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap text-xs mt-3">
        {utilityClasses.map((className, i, arr) => (
          <div
            key={`${className}-${i}`}
            className={`font-mono cursor-pointer hover:shadow-xl hover:bg-gray-500 inline-block mr-2 mb-2 bg-gray-600 text-white rounded-sm shadow px-2 py-px ${smooth} flex items-center justify-between`}
            css={css`
              & svg {
                width: 1em;
              }
            `}
            onClick={e => {
              if (arr.length > 1) {
                return setUtilityClasses(arr.filter(c => c !== className))
              }

              setUtilityClasses([])
            }}
          >
            {className}
            <Icon name="x" className="ml-2 text-gray-400" />
          </div>
        ))}
        <input
          className="inline-block appearance-none mr-2 mb-2 px-0 py-px outline-none bg-transparent w-auto"
          type="text"
          placeholder="Add class..."
          value={currentInput}
          onChange={e => setCurrentInput(e.target.value)}
          onKeyPress={e => {
            if ([" ", "Enter"].includes(e.key)) {
              setUtilityClasses(utilityClasses.concat(e.target.value))
              setCurrentInput("")
            }
          }}
        />
      </div>
    </div>
  )
}
