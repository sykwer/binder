import React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import createSagaMiddleware from "redux-saga"

import rootSaga from "./store/sagas"
import rootReducer from "./store/reducers"
import Root from "./components/Root"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("bookmark-tab-app")
    const data = JSON.parse(node.getAttribute("data"))

    const initialState = {
      userId: data.userId,
      isLoggedIn: data.isLoggedIn,
      beforeClapImage: data.beforeClapImage,
      afterClapImage: data.afterClapImage,
      facebookAuthPath: data.facebookAuthPath,
      twitterAuthPath: data.twitterAuthPath,
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
