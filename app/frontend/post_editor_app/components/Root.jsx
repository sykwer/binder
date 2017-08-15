import React from "react"

import PostContentContainer from "./PostContentContainer"

const Root = () => (
  <div className="post-editor-component clearfix">
    <div className="main-wrapper clearfix">
      <div className="main-right">
        <PostContentContainer />
      </div>
    </div>
  </div>
)

export default Root
