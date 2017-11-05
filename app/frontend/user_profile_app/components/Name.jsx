import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { changeName } from "../store/actions"

const cpnt = ({ onChangeName, isEditable }) => {
  let editable

  return (
    <div
      id="editable-name"
      className="name"
      role="textbox"
      tabIndex="0"
      contentEditable={isEditable}
      ref={(node) => { editable = node }}
      onInput={(e) => {
        e.preventDefault()
        onChangeName(editable.innerText)
      }}
      onKeyDown={(e) => {
        if (e.keyCode === 13) { // enter
          e.preventDefault()
        }

        // FIX: hardcoding
        if (editable.innerText.length >= 50 && ![8, 37, 39].includes(e.keyCode)) { // enter ← →
          e.preventDefault()
        }
      }}
    />
  )
}

// workaround
window.addEventListener("load", () => {
  const node = document.getElementById("user-profile-app")
  const data = JSON.parse(node.getAttribute("data"))
  const nameNode = document.getElementById("editable-name")
  nameNode.innerText = data.name
})

cpnt.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  isEditable: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isEditable: state.appState === "IS_EDITTING",
})

const mapDispatchToProps = dispatch => ({
  onChangeName: (text) => {
    dispatch(changeName(text))
  },
})

const Name = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default Name
