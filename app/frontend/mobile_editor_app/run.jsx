import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"

import rootReducer from "../shared/store/editor/reducers"
import rootSaga from "../shared/store/editor/sagas"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("mobile-editor-app")

    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(
      rootReducer,
      {},
      applyMiddleware(sagaMiddleware),
    )

    sagaMiddleware.run(rootSaga)

    render(
      <Provider store={store}>
        <p>Boot mobileEditorApp from here</p>
      </Provider>,
      node,
    )
  })
}

export default run
