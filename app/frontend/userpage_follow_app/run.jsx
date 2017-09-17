import React from "react"
import { render } from "react-dom"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("userpage-follow-app")

    render(
      <p>Boot UserpageFollowApp from here</p>,
      node,
    )
  })
}

export default run
