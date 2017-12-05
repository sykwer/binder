import React from "react"
import { render } from "react-dom"

import Root from "./components/Root"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("action-bar-notification-app")

    render(
      <Root />,
      node,
    )
  })
}

export default run
