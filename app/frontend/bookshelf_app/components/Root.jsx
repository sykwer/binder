import React from "react"

import BookList from "./BookList"
import BottomObserver from "./BottomObserver"

const Root = () => (
  <div className="book-list">
    <BookList />
    <BottomObserver />
  </div>
)

export default Root
