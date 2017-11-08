import React from "react"
import { render } from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"

import rootReducer from "./store/reducers"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("posts_stream_app")

    const store = createStore(rootReducer)

    render(
      <Provider store={store}>
        <p>Boot postsStreamApp</p>
      </Provider>,
      node,
    )
  })
}

export default run
