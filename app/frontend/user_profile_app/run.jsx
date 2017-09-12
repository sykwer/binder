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
    const node = document.getElementById("user-profile-app")
    const data = JSON.parse(node.getAttribute("data"))

    const sagaMiddleware = createSagaMiddleware()

    const initialState = {
      displayedName: data.name,
      displayedBio: data.bio,
      savedName: data.name,
      savedBio: data.bio,
      image: data.image,
    }

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
