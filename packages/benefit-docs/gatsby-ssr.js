import React, { Fragment } from "react"
import { renderToString } from "react-dom/server"
import { ServerStyleManager } from "benefit-react"

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const app = () => (
    <Fragment>
      <ServerStyleManager />
      {bodyComponent}
    </Fragment>
  )
  replaceBodyHTMLString(renderToString(<app />))
}
