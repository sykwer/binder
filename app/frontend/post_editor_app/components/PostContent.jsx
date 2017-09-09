import React from "react"
import PropTypes from "prop-types"

const PostContent = ({ text, onChangeContent }) => {
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
      >
        { text }
      </div>
    </div>
  )
}

PostContent.propTypes = {
  text: PropTypes.string.isRequired,
  onChangeContent: PropTypes.func.isRequired,
}

window.addEventListener("load", () => {
  const node = document.getElementById("post-content-div").childNodes[0]
  const range = document.createRange()
  const selection = window.getSelection()

  range.setStart(node, node.length)
  range.collapse(true)

  selection.removeAllRanges()
  selection.addRange(range)
})

export default PostContent
