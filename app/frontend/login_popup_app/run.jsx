import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"

import Root from "./components/Root"
import rootReducer from "./store/reducers"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const nodes = document.getElementsByClassName("login-popup-app")
    Array.prototype.forEach.call(nodes, (node) => {
      const data = JSON.parse(node.getAttribute("data"))

      const initialState = {
        facebookAuthPath: data.facebookAuthPath,
        twitterAuthPath: data.twitterAuthPath,
        logoImage: data.logoImage,
        buttonId: data.buttonId,
        modalMode: data.modalMode,
        clappedCount: data.buttonId === "clap-button" ? data.clappedCount : null,
        clapImage: data.buttonId === "clap-button" ? data.clapImage : null,
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
  })
}

export default run
