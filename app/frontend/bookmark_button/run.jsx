import React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import createSagaMiddleware from "redux-saga"

import App from "./components/App"
import rootReducer from "./store/reducers"
import rootSaga from "./store/sagas"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("bookmark-button-app")
    const data = JSON.parse(node.getAttribute("data"))

    const initialState = {
      postUuid: data.postUuid,
      isBookmarked: data.isBookmarked,
      bookmarkedCount: data.bookmarkedCount,
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
