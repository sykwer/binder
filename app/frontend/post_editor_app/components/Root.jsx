import React from "react"

import PostContentContainer from "./PostContentContainer"
import BookInfoInputContainer from "./BookInfoInputContainer"
import PostMetaInfo from "./PostMetaInfo"
import BookListContainer from "./BookListContainer"
import SelectedBook from "./SelectedBook"

const Root = () => (
  <div className="post-editor-component clearfix">
    <div className="book-selector-component">
      <BookInfoInputContainer />
      <BookListContainer />
    </div>
    <div className="post-preview-component">
      <PostMetaInfo />
      <div className="main-wrapper clearfix">
        <SelectedBook />
        <div className="main-right">
          <PostContentContainer />
        </div>
      </div>
    </div>
  </div>
)

export default Root
