import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

const cpnt = ({
  isSaving,
  publicationStatus,
}) => (
  <div className="mobile-editor-header">
    <a
      className="close-button cancel-focus-outline"
      role="button"
      tabIndex="0"
      onClick={(e) => {
        e.stopPropagation()
        e.preventDefault()
        window.history.back()
      }}
    >
      Close
    </a>
    <p className="save-status">
      {isSaving ? "Saving..." : "Saved"}
    </p>
    <p className="publish-status">
      {publicationStatus}
    </p>
    <button className="next-button">
      Next
    </button>
  </div>
)

const stateToIsSaving = (state) => {
  let isContentSaving
  switch (state.contentSaveState) {
    case "INITIAL":
    case "IS_SAVED":
      isContentSaving = false
      break
    case "IS_NOT_SAVED":
    case "IS_SAVING":
      isContentSaving = true
      break
    default:
      throw new Error("Invalid contentSaveState")
  }

  let isTitleSaving
  switch (state.contentSaveState) {
    case "INITIAL":
    case "IS_SAVED":
      isTitleSaving = false
      break
    case "IS_NOT_SAVED":
    case "IS_SAVING":
      isTitleSaving = true
      break
    default:
      throw new Error("Invalid titleSaveState")
  }

  return isContentSaving || isTitleSaving
}

const stateToPublicationStatus = (state) => {
  if (!state.isPublished) {
    return "Draft"
  }

  if (state.isChangesUnpublished) {
    return "Changes unpublished"
  }

  return "Open to public"
}

cpnt.propTypes = {
  isSaving: PropTypes.bool.isRequired,
  publicationStatus: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isSaving: stateToIsSaving(state),
  publicationStatus: stateToPublicationStatus(state),
})

const Header = connect(
  mapStateToProps,
)(cpnt)

export default Header
