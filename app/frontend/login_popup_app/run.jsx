import React from "react"
import { render } from "react-dom"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const nodes = document.getElementsByClassName("login-popup-app")
    Array.prototype.forEach.call(nodes, (node) => {
      render(
        <p>LoginPopUpApp</p>,
        node,
      )
    })
  })
}

export default run
