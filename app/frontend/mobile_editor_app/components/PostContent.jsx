import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import {
  updatePostTitle,
  updatePostContent,
} from "../../shared/store/editor/actions"

const cpnt = ({
  handleChangeTitle,
  handleChangeContent,
}) => {
  let editableTitle
  let editableContent

  return (
    <div className="mobile-editor-post-content">
      <div
        contentEditable
        placeholder="タイトル"
        className="post-title"
        id="editable-post-title"
        ref={(node) => { editableTitle = node }}
        onInput={(e) => {
          e.stopPropagation()
          handleChangeTitle(editableTitle.innerText)
        }}
      />
      <div
        className="post-content"
        id="editable-post-content"
        placeholder="本文"
        contentEditable
        ref={(node) => { editableContent = node }}
        onInput={(e) => {
          e.stopPropagation()
          handleChangeContent(editableContent.innerHTML)
        }}
      />
    </div>
  )
}

cpnt.propTypes = {
  handleChangeTitle: PropTypes.func.isRequired,
  handleChangeContent: PropTypes.func.isRequired,
}

// workaround
window.addEventListener("load", () => {
  const rootNode = document.getElementById("mobile-editor-app")
  const data = JSON.parse(rootNode.getAttribute("data"))
  const title = document.getElementById("editable-post-title")
  const content = document.getElementById("editable-post-content")
  title.innerText = data.title
  content.innerHTML = data.content

  // For first position of caret
  const range = document.createRange()
  const selection = window.getSelection()
  range.selectNodeContents(content)
  range.collapse(false)
  selection.removeAllRanges()
  selection.addRange(range)
})

const mapDispatchToProps = dispatch => ({
  handleChangeTitle: (text) => {
    dispatch(updatePostTitle(text))
  },
  handleChangeContent: (text) => {
    dispatch(updatePostContent(text))
  },
})

const PostContent = connect(
  null,
  mapDispatchToProps,
)(cpnt)

export default PostContent
