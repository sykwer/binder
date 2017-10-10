import React from "react"
import { render } from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"

import App from "./components/App"
import rootReducer from "./store/reducers"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("clap-button-root")
    const data = JSON.parse(node.getAttribute("data"))

    const initialState = {
      beforeClapImage: data.beforeClapImage,
    }

    const store = createStore(
      rootReducer,
      initialState,
    )

    render(
      <Provider store={store}>
        <App />
      </Provider>,
      node,
    )
  })
}

export default run
