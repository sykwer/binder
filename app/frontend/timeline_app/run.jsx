import React from "react"
import { render } from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"

import rootReducer from "./store/reducers"
import Root from "./components/Root"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("timeline-app")

    const store = createStore(rootReducer)

    render(
      <Provider store={store}>
        <Root />
      </Provider>,
      node,
    )
  })
}

export default run
