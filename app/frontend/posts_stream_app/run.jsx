import React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import createSagaMiddleware from "redux-saga"

import rootReducer from "./store/reducers"
import rootSaga from "./store/sagas"
import Root from "./components/Root"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("posts_stream_app")
    const data = JSON.parse(node.getAttribute("data"))

    const initialState = {
      streamId: data.streamId,
      isLoggedIn: data.isLoggedIn,
      facebookAuthPath: data.facebookAuthPath,
      twitterAuthPath: data.twitterAuthPath,
      logoImage: data.logoImage,
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
