import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { cancelDelete, confirmDelete } from "../store/actions"

const cpnt = ({
  handleClickCancelDelete,
  handleClickConfirmDelete,
  selectedPostsCount,
}) => (
  <div className="confirmation-window">
    <p className="confirm-msg">
      {`本当に${selectedPostsCount}件の記事を削除しますか?`}
    </p>
    <div className="buttons-wrapper">
      <button
        className="delete-button"
        onClick={(e) => {
          e.stopPropagation()
          handleClickConfirmDelete()
        }}
      >
        Delete
      </button>
      <button
        className="cancel-button"
        onClick={(e) => {
          e.stopPropagation()
          handleClickCancelDelete()
        }}
      >
        Cancel
      </button>
    </div>
  </div>
)

cpnt.propTypes = {
  selectedPostsCount: PropTypes.number.isRequired,
  handleClickCancelDelete: PropTypes.func.isRequired,
  handleClickConfirmDelete: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  selectedPostsCount: state.selectedPostUuids.length,
})

const mapDispatchToProps = dispatch => ({
  handleClickCancelDelete: () => {
    dispatch(cancelDelete())
  },
  handleClickConfirmDelete: () => {
    dispatch(confirmDelete())
  },
})

const DeleteScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default DeleteScreen
