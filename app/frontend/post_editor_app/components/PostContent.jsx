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

          // placeholder
          if (editable.innerText.length <= 1) {
            editable.classList.add("placeholded")
          } else {
            editable.classList.remove("placeholded")
          }
        }}
      />
    </div>
  )
}

PostContent.propTypes = {
  onChangeContent: PropTypes.func.isRequired,
}

window.addEventListener("load", () => {
  // eslint-disable-next-line
  const editor = new MediumEditor(".medium-editable", {
    targetBlank: true,
    autoLink: true,
    imageDragging: false,
    placeholder: false,
    toolbar: {
      buttons: [
        {
          name: "h2",
          action: "append-h3",
          aria: "header type 2",
          tagNames: ["h3"],
          contentDefault: "<b>T</b>",
          classList: ["custom-class-h22"],
          attrs: {
            "data-custom-attr": "attr-value-h2",
          },
        },
        "bold",
        "quote",
        "anchor",
      ],
    },
  })

  const node = document.getElementById("post-content-div")

  // workaround
  const rootNode = document.getElementById("post-editor-app")
  const data = JSON.parse(rootNode.getAttribute("data"))
  node.innerHTML = data.content

  // placeholder
  if (node.innerText.length <= 1) {
    node.classList.add("placeholded")
  }

  // For first position of caret
  const range = document.createRange()
  const selection = window.getSelection()
  range.selectNodeContents(node)
  range.collapse(false)
  selection.removeAllRanges()
  selection.addRange(range)
})

export default PostContent
