import React from "react"
import { render } from "react-dom"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("draft-tab-app")
    const data = JSON.parse(node.getAttribute("data")) // eslint-disable-line

    console.log(data.posts)

    render(
      <p>Boot app from here</p>,
      node,
    )
  })
}

export default run
