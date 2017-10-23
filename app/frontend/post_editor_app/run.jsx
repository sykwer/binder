import React from "react"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import createSagaMiddleware from "redux-saga"
import { render } from "react-dom"

import rootReducer from "./store/reducers"
import rootSaga from "./store/sagas"
import Root from "./components/Root"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("post-editor-app")
    const data = JSON.parse(node.getAttribute("data"))

    const sagaMiddleware = createSagaMiddleware()

    const initialState = {
      uuid: data.uuid,
      selectedBookAsin: data.bookAsin,
      selectedBookTitle: data.bookTitle,
      selectedBookAuthor: data.bookAuthor,
      selectedBookPublisher: data.bookPublisher,
      selectedBookImage: data.image,
      postContent: data.content,
      date: data.date,
      isPublished: data.isPublished,
      isChangesUnpublished: data.isChangesUnpublished,
      user: {
        name: data.user.name,
        username: data.user.username,
        image: data.user.image,
      },
      selectedTags: data.tags,
      logoImage: data.logoImage,
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
