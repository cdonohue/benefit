/** @jsx jsx */

import { render } from "react-dom"
import { css } from "@emotion/core"
import { jsx } from "../../dist/react"

function App() {
  return (
    <div className="font-bold rounded overflow-hidden shadow-lg max-w-xl">
      <div
        css={css`
          background: linear-gradient(to right, indianred, firebrick);
        `}
        className="bg-blue-300 p-8 relative h-64"
      >
        <h1 className="absolute bottom-0 text-white text-6xl -mb-5">
          Dolor Sit Amet
        </h1>
      </div>
      <div className="p-8 pt-0">
        <h1
          css={css`
            color: indianred;
          `}
          className="text-6xl"
        >
          Lorem Ipsum
        </h1>
      </div>
    </div>
  )
}

render(<App />, document.getElementById("root"))
