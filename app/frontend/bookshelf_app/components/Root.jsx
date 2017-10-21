import React from "react"
import { Route } from "react-router-dom"

import PostDetail from "./PostDetail"
import BookList from "./BookList"
import BottomObserver from "./BottomObserver"

const Root = () => (
  <div>
    <Route
      path="/@:username"
      render={() => {
        const body = document.getElementsByTagName("body").item(0)
        body.style.removeProperty("overflow")
        body.style.removeProperty("height")
        return <div />
      }}
    />
    <Route
      path="/posts/:uuid"
      render={() => {
        const body = document.getElementsByTagName("body").item(0)
        body.style.setProperty("overflow", "hidden")
        body.style.setProperty("height", "100%")
        return <PostDetail />
      }}
    />
    <BookList />
    <BottomObserver />
  </div>
)

export default Root
