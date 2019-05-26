/** @jsx jsx */

import { render } from "react-dom"
import { css } from "@emotion/core"
import { jsx } from "../../dist/react"

function App() {
  return (
    <div
      css={css`
        font-size: 64px;
        font-weight: bold;
      `}
      className="bg-blue-300"
    >
      Hello
    </div>
  )
}

render(<App />, document.getElementById("root"))
