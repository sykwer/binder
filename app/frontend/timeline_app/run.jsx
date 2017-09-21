import React from "react"
import { render } from "react-dom"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("timeline-app")

    render(
      <p>Boot TimelineApp from here</p>,
      node,
    )
  })
}

export default run
