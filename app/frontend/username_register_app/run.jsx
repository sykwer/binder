import React from "react"
import { render } from "react-dom"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("username-register-app")

    render(
      <p>Boot usernameRegisterApp</p>,
      node,
    )
  })
}

export default run
