import React from "react"

import BookmarkPostsList from "./BookmarkPostsList"
import BottomObserver from "./BottomObserver"

const Root = () => (
  <div className="bookmark-tab-app-wrapper">
    <BookmarkPostsList />
    <BottomObserver />
  </div>
)

export default Root
