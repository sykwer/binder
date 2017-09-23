import React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import createSagaMiddleware from "redux-saga"
import { BrowserRouter } from "react-router-dom"

import rootReducer from "./store/reducers"
import rootSaga from "./store/sagas"
import Root from "./components/Root"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("user-profile-app")
    const data = JSON.parse(node.getAttribute("data"))

    const sagaMiddleware = createSagaMiddleware()

    const initialState = {
      id: data.id,
      name: data.name,
      username: data.username,
      displayedName: data.name,
      displayedBio: data.bio,
      savedName: data.name,
      savedBio: data.bio,
      image: data.image,
      followingsCount: data.followings,
      followersCount: data.followers,
    }

    const store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(sagaMiddleware),
    )

    sagaMiddleware.run(rootSaga)

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </Provider>,
      node,
    )
  })
}

export default run
