import React from "react"
import { render } from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"

import Root from "./components/Root"
import rootReducer from "./store/reducers"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("action-bar-config-app")
    const data = JSON.parse(node.getAttribute("data"))

    const initialState = {
      name: data.name,
      username: data.username,
      destroySessionPath: data.destroySessionPath,
    }

    const store = createStore(
      rootReducer,
      initialState,
    )

    render(
      <Provider store={store}>
        <Root />
      </Provider>,
      node,
    )
  })
}

export default run
