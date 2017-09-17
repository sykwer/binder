import React from "react"
import { render } from "react-dom"

import Root from "./components/Root"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("userpage-follow-app")

    render(
      <Root />,
      node,
    )
  })
}

export default run
