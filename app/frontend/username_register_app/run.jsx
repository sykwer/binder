import React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import createSagaMiddleware from "redux-saga"

import rootSaga from "./store/sagas"
import rootReducer from "./store/reducers"
import App from "./components/App"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("username-register-app")
    const data = JSON.parse(node.getAttribute("data"))

    const initialState = {
      registrationPath: data.registrationPath,
      formAuthenticityToken: data.formAuthenticityToken,
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
        <App />
      </Provider>,
      node,
    )
  })
}

export default run
