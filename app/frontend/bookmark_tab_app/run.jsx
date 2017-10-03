import React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import createSagaMiddleware from "redux-saga"

import rootSaga from "./store/sagas"
import rootReducer from "./store/reducers"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("bookmark-tab-app")
    const data = JSON.parse(node.getAttribute("data"))

    const initialState = {
      userId: data.userId,
    }

    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(sagaMiddleware),
    )

    sagaMiddleware.run(rootSaga)

    render(
      <Provider store={store}>
        <p>Boot BookmarkTabApp from here</p>
      </Provider>,
      node,
    )
  })
}

export default run
