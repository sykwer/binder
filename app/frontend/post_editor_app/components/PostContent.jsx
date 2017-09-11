import React from "react"
import PropTypes from "prop-types"

const PostContent = ({ onChangeContent }) => {
  let editable

  return (
    <div className="main-book-review">
      <div
        id="post-content-div"
        contentEditable
        ref={(node) => { editable = node }}
        onInput={(e) => {
          e.preventDefault()
          onChangeContent(editable.innerText)
        }}
      />
    </div>
  )
}

PostContent.propTypes = {
  onChangeContent: PropTypes.func.isRequired,
}

window.addEventListener("load", () => {
  const node = document.getElementById("post-content-div")

  // workaround
  const rootNode = document.getElementById("post-editor-app")
  const data = JSON.parse(rootNode.getAttribute("data"))
  node.innerText = data.postContent

  // For first position of caret
  const range = document.createRange()
  const selection = window.getSelection()
  range.selectNodeContents(node)
  range.collapse(false)
  selection.removeAllRanges()
  selection.addRange(range)
})

export default PostContent
