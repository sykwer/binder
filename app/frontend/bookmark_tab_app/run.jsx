import React from "react"
import { render } from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"

import rootReducer from "./store/reducers"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("bookmark-tab-app")
    const data = JSON.parse(node.getAttribute("data"))

    const initialState = {
      userId: data.userId,
    }

    const store = createStore(
      rootReducer,
      initialState,
    )

    render(
      <Provider store={store}>
        <p>Boot BookmarkTabApp from here</p>
      </Provider>,
      node,
    )
  })
}

export default run
