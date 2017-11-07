import React from "react"
import { render } from "react-dom"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("posts_stream_app")

    render(
      <p>Boot postsStreamApp</p>,
      node,
    )
  })
}

export default run
