import React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import createSagaMiddleware from "redux-saga"
import { BrowserRouter } from "react-router-dom"

import Root from "./components/Root"
import rootReducer from "./store/reducers"
import rootSaga from "./store/sagas"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("userpage-follow-app")
    const data = JSON.parse(node.getAttribute("data"))

    const initialState = {
      followingsCount: data.followings,
      followersCount: data.followers,
      buttonState: data.isFollowing ? "FOLLOWING" : "FOLLOW",
      opponentUserId: data.opponentUserId,
      myUserId: data.myUserId,
      name: data.name,
      username: data.username,
      facebookLink: data.facebookLink,
      twitterLink: data.twitterLink,
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
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </Provider>,
      node,
    )
  })
}

export default run
