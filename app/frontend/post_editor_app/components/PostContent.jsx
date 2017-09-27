import React from "react"
import PropTypes from "prop-types"
import MediumEditor from "medium-editor"

const PostContent = ({ onChangeContent }) => {
  let editable

  return (
    <div className="post-content">
      <div
        id="post-content-div"
        className="medium-editable"
        placeholder="本文"
        contentEditable
        ref={(node) => { editable = node }}
        onInput={(e) => {
          e.preventDefault()
          onChangeContent(editable.innerHTML)
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
  node.innerHTML = data.content

  // For first position of caret
  const range = document.createRange()
  const selection = window.getSelection()
  range.selectNodeContents(node)
  range.collapse(false)
  selection.removeAllRanges()
  selection.addRange(range)

  // eslint-disable-next-line
  new MediumEditor(".medium-editable", {
    targetBlank: true,
    autoLink: true,
    imageDragging: false,
  })
})

export default PostContent
