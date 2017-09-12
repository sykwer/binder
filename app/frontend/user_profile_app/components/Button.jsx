import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import {
  save,
  startEdit,
  cancelEdit,
} from "../store/actions"

const cpnt = ({
  isEditting,
  displayedName,
  displayedBio,
  savedName,
  savedBio,
  handleOnClickEdit,
  handleOnClickSave,
  handleOnClickCancel,
}) => {
  const onClickEdit = () => {
    handleOnClickEdit()

    // Focus caret at the end of bio
    // Wait contenteditable to become true
    window.setTimeout(() => {
      const node = document.getElementById("editable-name")
      const range = document.createRange()
      const selection = window.getSelection()
      range.selectNodeContents(node)
      range.collapse()
      selection.removeAllRanges()
      selection.addRange(range)
    }, 100)
  }

  const onClickSave = () => {
    handleOnClickSave(displayedName, displayedBio)
  }

  const onClickCancel = () => {
    handleOnClickCancel(savedName, savedBio)

    // Editable nodes are uncontroled, so change manually
    const nameNode = document.getElementById("editable-name")
    const bioNode = document.getElementById("editable-bio")
    nameNode.innerText = savedName
    bioNode.innerText = savedBio
  }

  if (isEditting) {
    return (
      <div className="finish-buttons">
        <button
          className="save-button"
          onClick={onClickSave}
        >
          Save
        </button>
        <button
          className="cancel-button"
          onClick={onClickCancel}
        >
          Cancel
        </button>
      </div>
    )
  }

  return (
    <button
      className="edit-button"
      onClick={onClickEdit}
    >
      Edit
    </button>
  )
}

cpnt.propTypes = {
  isEditting: PropTypes.bool.isRequired,
  displayedName: PropTypes.string.isRequired,
  displayedBio: PropTypes.string.isRequired,
  savedName: PropTypes.string.isRequired,
  savedBio: PropTypes.string.isRequired,
  handleOnClickEdit: PropTypes.func.isRequired,
  handleOnClickSave: PropTypes.func.isRequired,
  handleOnClickCancel: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isEditting: state.appState === "IS_EDITTING",
  displayedName: state.displayedName,
  displayedBio: state.displayedBio,
  savedName: state.savedName,
  savedBio: state.savedBio,
})

const mapDispatchToProps = dispatch => ({
  handleOnClickEdit: () => {
    dispatch(startEdit())
  },
  handleOnClickCancel: (savedName, savedBio) => {
    dispatch(cancelEdit(savedName, savedBio))
  },
  handleOnClickSave: (displayedName, displayedBio) => {
    dispatch(save(displayedName, displayedBio))
  },
})

const Button = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default Button
