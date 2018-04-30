import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"

import rootReducer from "../shared/store/editor/reducers"
import rootSaga from "../shared/store/editor/sagas"
import Root from "./components/Root"

const run = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("mobile-editor-app")
    const data = JSON.parse(node.getAttribute("data"))

    const initialState = {
      uuid: data.uuid,
      selectedBookAsin: data.bookAsin,
      selectedBookTitle: data.bookTitle,
      selectedBookAuthor: data.bookAuthor,
      selectedBookPublisher: data.bookPublisher,
      selectedBookImage: data.image,
      postTitle: data.title,
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
