import React from "react"
import { render } from "react-dom"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    render(
      <p>hello react</p>,
      document.getElementById("post-editor-app"),
    )
  })
}

export default run
