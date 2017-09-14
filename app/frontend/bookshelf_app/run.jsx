import React from "react"
import { render } from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"

import rootReducer from "./store/reducers"
import Root from "./components/Root"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("bookshelf-app")
    const data = JSON.parse(node.getAttribute("data"))

    const initialState = {
      books: data.books,
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
