import React from "react"
import { render } from "react-dom"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("mobile-editor-app")

    render(
      <p>Boot mobileEditorApp from here</p>,
      node,
    )
  })
}

export default run
