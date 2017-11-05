import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { changeBio } from "../store/actions"

const cpnt = ({ onChangeBio, isEditable }) => {
  let editable

  return (
    <div
      id="editable-bio"
      className="bio"
      role="textbox"
      tabIndex="0"
      contentEditable={isEditable}
      ref={(node) => { editable = node }}
      bio-max-lengther=""
      onInput={(e) => {
        e.preventDefault()
        onChangeBio(editable.innerText)
      }}
      onKeyDown={(e) => {
        if (e.keyCode === 13) { // enter
          e.preventDefault()
        }

        // FIX: hardcoding
        if (editable.innerText.length >= 160 && ![8, 37, 39].includes(e.keyCode)) { // enter → ←
          e.preventDefault()
        }

        window.setTimeout(() => {
          if (editable.innerText.length >= 140) {
            editable.setAttribute("bio-max-lengther", ` ${editable.innerText.length}/160`)
          } else {
            editable.setAttribute("bio-max-lengther", "")
          }
        }, 100)
      }}
    />
  )
}

// workaround
window.addEventListener("load", () => {
  const node = document.getElementById("user-profile-app")
  const data = JSON.parse(node.getAttribute("data"))
  const bioNode = document.getElementById("editable-bio")
  bioNode.innerText = data.bio
})

cpnt.propTypes = {
  onChangeBio: PropTypes.func.isRequired,
  isEditable: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isEditable: state.appState === "IS_EDITTING",
})

const mapDispatchToProps = dispatch => ({
  onChangeBio: (text) => {
    dispatch(changeBio(text))
  },
})

const Bio = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default Bio
