import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { updatePostTitle } from "../../shared/store/editor/actions"

const cpnt = ({ handleChangeTitle }) => {
  let editable

  return (
    <div
      id="post-title-div"
      className="post-title"
      ref={(node) => { editable = node }}
      contentEditable
      placeholder="タイトル"
      onInput={(e) => {
        e.preventDefault()
        handleChangeTitle(editable.innerText)
      }}
    />
  )
}

cpnt.propTypes = {
  handleChangeTitle: PropTypes.func.isRequired,
}

// workaround
window.addEventListener("load", () => {
  const rootNode = document.getElementById("post-editor-app")
  const data = JSON.parse(rootNode.getAttribute("data"))
  const node = document.getElementById("post-title-div")
  node.innerText = data.title
})

const mapDispatchToProps = dispatch => ({
  handleChangeTitle: (text) => {
    dispatch(updatePostTitle(text))
  },
})

const PostTitle = connect(
  null,
  mapDispatchToProps,
)(cpnt)

export default PostTitle
