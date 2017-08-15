import React from "react"
import PropTypes from "prop-types"

const PostContent = ({ text, onChangeContent }) => {
  let editable

  return (
    <div className="main-book-review">
      <div
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

export default PostContent
