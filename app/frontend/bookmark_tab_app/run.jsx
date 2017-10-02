import React from "react"
import { render } from "react-dom"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("bookmark-tab-app")

    render(
      <p>Boot BookmarkTabApp from here</p>,
      node,
    )
  })
}

export default run
