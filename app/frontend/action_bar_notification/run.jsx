import React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import createSagaMiddleware from "redux-saga"

import Root from "./components/Root"
import rootReducer from "./store/reducers"
import rootSaga from "./store/sagas"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("action-bar-notification-app")
    const data = JSON.parse(node.getAttribute("data"))

    const initialState = {
      userId: data.userId,
      hasUncheckedNotifications: data.hasUncheckedNotifications,
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
        <Root />
      </Provider>,
      node,
    )
  })
}

export default run
