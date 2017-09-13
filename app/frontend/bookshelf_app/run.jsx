import React from "react"
import { render } from "react-dom"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("bookshelf-app")
    render(
      <p>Boot bookshelf app from here</p>,
      node,
    )
  })
}

export default run
