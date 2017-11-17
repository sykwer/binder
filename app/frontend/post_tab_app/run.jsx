import React from "react"
import { render } from "react-dom"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("post-tab-app")

    render(
      <p>Boot post tab app from here</p>,
      node,
    )
  })
}

export default run
