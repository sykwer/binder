import React from "react"
import { render } from "react-dom"

import Root from "./components/Root"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    render(
      <Root />,
      document.getElementById("post-editor-app"),
    )
  })
}

export default run
