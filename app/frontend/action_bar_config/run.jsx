import React from "react"
import { render } from "react-dom"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("action-bar-config-app")

    render(
      <i
        className="fa fa-cog icon-in-item"
        aria-hidden="true"
      />,
      node,
    )
  })
}

export default run
