import React from "react"

import PostContentContainer from "./PostContentContainer"
import BookInfoInputContainer from "./BookInfoInputContainer"

const Root = () => (
  <div className="post-editor-component clearfix">
    <div className="book-selector-component">
      <BookInfoInputContainer />
    </div>
    <div className="main-wrapper clearfix">
      <div className="main-right">
        <PostContentContainer />
      </div>
    </div>
  </div>
)

export default Root
