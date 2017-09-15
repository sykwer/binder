import React from "react"
import { Route } from "react-router-dom"

import PostDetail from "./PostDetail"
import BookList from "./BookList"
import BottomObserver from "./BottomObserver"

const Root = () => (
  <div className="book-list">
    <Route path="/posts/:uuid" component={PostDetail} />
    <BookList />
    <BottomObserver />
  </div>
)

export default Root
