import React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import { createSagaMiddleware } from "redux-saga"

import rootReducer from "./store/reducers"
import rootSaga from "./store/sagas"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("posts_stream_app")

    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(
      rootReducer,
      {},
      applyMiddleware(sagaMiddleware),
    )

    sagaMiddleware.run(rootSaga)

    render(
      <Provider store={store}>
        <p>Boot postsStreamApp</p>
      </Provider>,
      node,
    )
  })
}

export default run
